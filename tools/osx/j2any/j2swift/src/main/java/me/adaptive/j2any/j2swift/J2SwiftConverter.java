package me.adaptive.j2any.j2swift;

import me.adaptive.j2any.io.IndentPrintStream;
import org.reflections.Reflections;
import org.reflections.scanners.ResourcesScanner;
import org.reflections.scanners.SubTypesScanner;
import org.reflections.util.ClasspathHelper;
import org.reflections.util.ConfigurationBuilder;
import org.reflections.util.FilterBuilder;

import javax.tools.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.reflect.*;
import java.net.URI;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

/**
 * Created by clozano on 27/08/2014.
 */
public class J2SwiftConverter {

    public static final boolean convert(String sourcePath, String targetPath, String... packages) throws IOException {
        File sourceDir = new File(sourcePath);
        File targetDir = new File(targetPath);
        File tempDir = File.createTempFile("temp", Long.toString(System.nanoTime()));

        if (tempDir.exists()) {
            tempDir.delete();
        }
        tempDir.mkdirs();

        if (!sourceDir.exists()) {
            throw new IOException("Source path '" + sourcePath + "' does not exist.");
        }

        if (!targetDir.exists()) {
            if (!targetDir.mkdirs()) {
                throw new IOException("Target path '" + targetPath + "' can not be created.");
            }
        }

        long tIn = System.currentTimeMillis();
        List<File> sourceFileList = new ArrayList<File>();
        processFile(sourceFileList, sourceDir);
        if (compile(sourceFileList, tempDir)) {
            for (String package_ : packages) {
                Reflections reflections = new Reflections(new ConfigurationBuilder()
                        .setScanners(new SubTypesScanner(false /* don't exclude Object.class */), new ResourcesScanner())
                        .setUrls(ClasspathHelper.forPackage(package_))
                        .filterInputsBy(new FilterBuilder().include(FilterBuilder.prefix(package_))));

                System.out.println("Processing package '" + package_ + "'.");
                Set<Class<? extends Object>> allClasses = reflections.getSubTypesOf(Object.class);

                for (Class clazz : allClasses) {
                    System.out.print(".");
                    processClass(clazz, targetDir);
                }
                System.out.println(" Finished.");

                System.out.println("Source Size: " + sourceFileList.size());
                System.out.println("Class Size: " + allClasses.size());
            }
        }
        System.out.println("Processing: " + (System.currentTimeMillis() - tIn) + " ms.");

        if (!deleteDirectory(tempDir)) {
            System.out.println("Could not delete '" + tempDir.getPath() + "'.");
        }
        return true;
    }

    private static void processClass(Class clazz, File targetDir) throws IOException {
        File targetFile = new File(targetDir, clazz.getSimpleName() + ".swift");
        if (targetFile.exists()) {
            targetFile.delete();
        }

        IndentPrintStream ps = null;
        try {
            ps = new IndentPrintStream(new FileOutputStream(targetFile));
        } catch (FileNotFoundException e) {
            throw new IOException("Unable to write to stream.");
        }
        /**
         * Header Section
         */
        ps.println(0, "//");
        ps.println(0, "//  Auto-generated from: " + clazz.getName());
        ps.println(0, "//");
        ps.println(0, "//  " + targetFile.getName());
        ps.println(0, "//");
        ps.println(0, "//  Released under Apache Public License v2.0");
        ps.println(0, "//");
        ps.println(0, "//  -----------| aut viam inveniam aut faciam |-----------");
        ps.println(0, "//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me");
        ps.println(0, "//   All rights reserved.                 www.adaptive.me");
        ps.println(0, "//  ------------------------------------------------------");
        ps.println();
        ps.println(0, "import Foundation");
        ps.println();

        if (clazz.isInterface()) {
            ps.print(0, "public protocol ");
            ps.print(clazz.getSimpleName());
            Class[] interfaces = clazz.getInterfaces();
            if (interfaces.length > 0) {
                ps.print(" : ");
                for (int i = 0; i < interfaces.length; i++) {
                    Class interface_ = interfaces[i];
                    ps.print(interface_.getSimpleName());
                    if ((interfaces.length - 1) > i) {
                        ps.print(", ");
                    }
                }
            }
            ps.println(" {");
            ps.println();
        } else {
            ps.print("public class ");
            ps.print(clazz.getSimpleName());
            Class[] interfaces = clazz.getInterfaces();
            if (interfaces.length > 0) {
                ps.print(" : ");
                for (int i = 0; i < interfaces.length; i++) {
                    Class interface_ = interfaces[i];
                    ps.print(interface_.getSimpleName());
                    if ((interfaces.length - 1) > i) {
                        ps.print(", ");
                    }
                }
            }
            Class superClass = clazz.getSuperclass();
            if (superClass != null && !superClass.equals(Object.class)) {
                ps.print(" : " + superClass.getSimpleName());
            }
            ps.println(" {");
        }

        /**
         * Fields Section
         */
        List<Class<?>> enumList = new ArrayList<Class<?>>();
        if (clazz.getDeclaredFields().length > 0) {
            ps.println();
            ps.println(5, "/**");
            ps.println(5, " * Field Declarations");
            ps.println(5, " */");
        }
        for (Field field : clazz.getDeclaredFields()) {
            ps.print(5, "var " + field.getName());
            if (field.getType().isPrimitive()) {
                ps.print(" : " + getPrimitiveTypeSwift(field.getType()));
            } else if (field.getType().isArray()) {
                Class<?> componentType = field.getType().getComponentType();
                if (componentType.isPrimitive()) {
                    ps.print(" : [" + getPrimitiveTypeSwift(componentType) + "]?");
                } else {
                    if (componentType.getSimpleName().equals("Object")) {
                        ps.print(" : [Any" + componentType.getSimpleName() + "]?");
                    } else {
                        ps.print(" : [" + componentType.getSimpleName() + "]?");
                    }
                }
            } else {
                if (field.getType().isEnum()) {
                    ps.print(" : " + field.getType().getSimpleName() + "?");
                } else {
                    if (field.getType().isInterface()) {
                        ps.print(" : " + field.getType().getSimpleName() + "?");
                    } else {
                        if (field.getType().equals(String.class)) {
                            ps.print(" : " + field.getType().getSimpleName());
                        } else {
                            ps.print(" : " + field.getType().getSimpleName() + "?");
                        }
                    }
                }
            }
            if (field.getType().isEnum()) {
                if (!enumList.contains(field.getType())) {
                    enumList.add(field.getType());
                }
            }
            ps.println();
        }

        /**
         * Enumeration Section
         */
        if (enumList.size() > 0) {
            ps.println();
            ps.println(5, "/**");
            ps.println(5, " * Enumeration Declarations");
            ps.println(5, " */");
        }
        for (Class<?> enumClass : enumList) {
            ps.println(5, "public enum " + enumClass.getSimpleName() + " {");
            Object[] enumConstants = enumClass.getEnumConstants();
            ps.print(10, "case ");
            for (int i = 0; i < enumConstants.length; i++) {
                ps.print(enumConstants[i]);
                if ((enumConstants.length - 1) > i) {
                    ps.print(", ");
                }
            }
            ps.println();
            ps.println(5, "}");
        }

        /**
         * Constructor Section
         */
        if (!clazz.isInterface()) {
            ps.println();
            ps.println(5, "/**");
            ps.println(5, " * Initialization");
            ps.println(5, " */");
            for (Constructor<?> constructor : clazz.getConstructors()) {
                Parameter[] parameters = constructor.getParameters();
                if (parameters.length > 0) {
                    ps.print(5, "public convenience init");
                    ps.print("(");
                } else {
                    Class superClass = clazz.getSuperclass();
                    if (superClass != null && !superClass.equals(Object.class)) {
                        ps.print(5, "public override init");
                    } else {
                        ps.print(5, "public init");
                    }
                    ps.print("(");
                }
                for (int i = 0; i < parameters.length; i++) {
                    Parameter parameter = parameters[i];
                    ps.print(parameter.getName() + " : ");
                    Class<?> parameterType = parameter.getType();
                    if (parameterType.isArray()) {
                        Class<?> componentType = parameterType.getComponentType();
                        if (componentType.isPrimitive()) {
                            ps.print("[" + getPrimitiveTypeSwift(componentType) + "]");
                        } else {
                            if (componentType.getSimpleName().equals("Object")) {
                                ps.print("[Any" + componentType.getSimpleName() + "]");
                            } else {
                                ps.print("[" + componentType.getSimpleName() + "]");
                            }
                        }
                    } else if (parameterType.isPrimitive()) {
                        ps.print(getPrimitiveTypeSwift(parameterType));
                    } else {
                        ps.print(parameter.getType().getSimpleName());
                    }

                    if ((parameters.length - 1) > i) {
                        ps.print(", ");
                    }
                }
                ps.println(") {");
                if (parameters.length == 0) {
                    Class superClass = clazz.getSuperclass();
                    if (superClass != null && !superClass.equals(Object.class)) {
                        ps.println(10, "super.init()");
                    }
                    for (Field field : clazz.getDeclaredFields()) {
                        ps.print(10, "self." + field.getName());
                        if (field.getType().isArray()) {
                            ps.println(" = nil");
                        } else if (field.getType().isPrimitive()) {
                            if (field.getType().equals(Boolean.TYPE)) {
                                ps.println(" = false");
                            } else if (field.getType().equals(Integer.TYPE)) {
                                ps.println(" = 0");
                            } else if (field.getType().equals(Long.TYPE)) {
                                ps.println(" = 0");
                            } else if (field.getType().equals(Float.TYPE)) {
                                ps.println(" = 0.0");
                            } else if (field.getType().equals(Double.TYPE)) {
                                ps.println(" = 0.0");
                            } else if (field.getType().equals(Short.TYPE)) {
                                ps.println(" = 0.0");
                            } else {
                                ps.println(" = LALA");
                            }
                        } else if (field.getType().equals(String.class)) {
                            ps.println(" = \"\"");
                        } else {
                            ps.println(" = nil");
                        }

                    }
                } else {
                    ps.println(10, "self.init()");
                    for (Parameter parameter : parameters) {
                        ps.println(10, "self." + parameter.getName() + " = " + parameter.getName());
                    }
                }
                ps.println(5, "}");
                ps.println();
            }
        }

        /**
         * Method Section
         */
        if (clazz.getDeclaredMethods().length > 0) {
            ps.println();
            ps.println(5, "/**");
            ps.println(5, " * Function Declarations");
            ps.println(5, " */");
        }
        List<Class<?>> interfaceEnumList = new ArrayList<Class<?>>();

        for (Method method : clazz.getDeclaredMethods()) {
            if (clazz.isInterface()) {


                ps.print(5, "func ");
                ps.print(method.getName());
                ps.print("(");
                Parameter[] parameters = method.getParameters();
                for (int i = 0; i < parameters.length; i++) {
                    Parameter parameter = parameters[i];
                    if (parameter.getType().isEnum()) {
                        if (!interfaceEnumList.contains(parameter.getType())) {
                            interfaceEnumList.add(parameter.getType());
                        }
                    }
                    ps.print(parameter.getName() + " : ");
                    Class<?> parameterType = parameter.getType();
                    if (parameterType.isArray()) {
                        Class<?> componentType = parameterType.getComponentType();
                        if (componentType.isPrimitive()) {
                            ps.print("[" + getPrimitiveTypeSwift(componentType) + "]");
                        } else {
                            if (componentType.getSimpleName().equals("Object")) {
                                ps.print("[Any" + componentType.getSimpleName() + "]");
                            } else {
                                ps.print("[" + componentType.getSimpleName() + "]");
                            }
                        }
                    } else if (parameterType.isPrimitive()) {
                        ps.print(getPrimitiveTypeSwift(parameterType));
                    } else {
                        if (parameterType.isEnum()) {
                            ps.print(clazz.getSimpleName() + parameter.getType().getSimpleName());
                        } else if (parameterType.getSimpleName().equals("Object")) {
                            ps.print("Any" + parameter.getType().getSimpleName());
                        } else {
                            ps.print(parameter.getType().getSimpleName());
                        }
                    }

                    if ((parameters.length - 1) > i) {
                        ps.print(", ");
                    }
                }
                ps.print(")");

                Class<?> returnType = method.getReturnType();
                if (!returnType.equals(Void.TYPE)) {
                    ps.print(" -> ");
                    if (returnType.isArray()) {
                        Class<?> componentType = returnType.getComponentType();
                        if (componentType.isPrimitive()) {
                            ps.print("[" + getPrimitiveTypeSwift(componentType) + "]");
                        } else {
                            if (componentType.getSimpleName().equals("Object")) {
                                ps.print("[Any" + componentType.getSimpleName() + "]");
                            } else {
                                ps.print("[" + componentType.getSimpleName() + "]");
                            }
                        }
                    } else if (returnType.isPrimitive()) {
                        ps.print(getPrimitiveTypeSwift(returnType));
                    } else {
                        if (returnType.getSimpleName().equals("Object")) {
                            ps.print("Any" + returnType.getSimpleName());
                        } else {
                            ps.print(returnType.getSimpleName());
                        }
                    }

                }


            } else {
                ps.print(5, "public func ");
                ps.print(method.getName());
                ps.print("(");
                Parameter[] parameters = method.getParameters();
                for (int i = 0; i < parameters.length; i++) {
                    Parameter parameter = parameters[i];
                    ps.print(parameter.getName() + " : ");
                    Class<?> parameterType = parameter.getType();
                    if (parameterType.isArray()) {
                        Class<?> componentType = parameterType.getComponentType();
                        if (componentType.isPrimitive()) {
                            ps.print("[" + getPrimitiveTypeSwift(componentType) + "]");
                        } else {
                            if (componentType.getSimpleName().equals("Object")) {
                                ps.print("[Any" + componentType.getSimpleName() + "]");
                            } else {
                                ps.print("[" + componentType.getSimpleName() + "]");
                            }
                        }
                    } else if (parameterType.isPrimitive()) {
                        ps.print(getPrimitiveTypeSwift(parameterType));
                    } else {
                        ps.print(parameter.getType().getSimpleName());
                    }

                    if ((parameters.length - 1) > i) {
                        ps.print(", ");
                    }
                }
                ps.print(")");

                Class<?> returnType = method.getReturnType();
                if (!returnType.equals(Void.TYPE)) {
                    ps.print(" -> ");
                    if (returnType.isArray()) {
                        Class<?> componentType = returnType.getComponentType();
                        if (componentType.isPrimitive()) {
                            ps.print("[" + getPrimitiveTypeSwift(componentType) + "]");
                        } else {
                            if (componentType.getSimpleName().equals("Object")) {
                                ps.print("[Any" + componentType.getSimpleName() + "]");
                            } else {
                                ps.print("[" + componentType.getSimpleName() + "]");
                            }
                        }
                    } else if (returnType.isPrimitive()) {
                        ps.print(getPrimitiveTypeSwift(returnType));
                    } else {
                        if (returnType.getSimpleName().equals("Object")) {
                            ps.print("Any" + returnType.getSimpleName());
                        } else {
                            ps.print(returnType.getSimpleName());
                        }
                    }

                }

                ps.println(" {");

                if (!returnType.equals(Void.TYPE)) {
                    ps.print(10, "return self." + getGetterSetterProperty(method));
                    if (returnType.isEnum() || returnType.isInterface() || returnType.isArray()) {
                        ps.print("!");
                    } else if (!returnType.isPrimitive() && !returnType.equals(String.class)) {
                        ps.print("!");
                    }
                    ps.println();
                } else {
                    ps.println(10, "self." + getGetterSetterProperty(method) + " = " + getGetterSetterProperty(method));
                }
                ps.println(5, "}");
                //System.out.println(method);
            }
            ps.println();
        }
        /**
         * Interface Enumeration Section
         */
        if (interfaceEnumList.size() > 0) {
            ps.println();
            ps.println("}");
            ps.println();
            ps.println(0, "/**");
            ps.println(0, " * Enumeration Declarations");
            ps.println(0, " */");
        }
        for (Class<?> enumClass : interfaceEnumList) {
            ps.println(0, "public enum " + clazz.getSimpleName() + enumClass.getSimpleName() + " {");
            Object[] enumConstants = enumClass.getEnumConstants();
            if (enumConstants.length > 0) {
                ps.print(5, "case ");
            }
            for (int i = 0; i < enumConstants.length; i++) {
                ps.print(enumConstants[i]);
                if ((enumConstants.length - 1) > i) {
                    ps.print(", ");
                }
            }
            ps.println();
            ps.println(0, "}");
            ps.println();
        }
        /**
         * Footer Section
         */
        if (interfaceEnumList.size() == 0) {
            ps.println();
            ps.println(0, "}");
        }

        ps.close();
    }

    private static String getGetterSetterProperty(Method method) {
        String methodName = method.getName();
        String propertyName = "UNKNOWN";
        if (methodName.startsWith("get") || methodName.startsWith("set")) {
            propertyName = methodName.substring(3, 4).toLowerCase() + methodName.substring(4);
        } else if (methodName.startsWith("is")) {
            propertyName = methodName.substring(2, 3).toLowerCase() + methodName.substring(3);
        }
        return propertyName;
    }

    private static String getPrimitiveTypeSwift(Class<?> primitiveType) {
        String primitiveName = primitiveType.getName();
        if (primitiveName.equals("double")) {
            return "Double";
        } else if (primitiveName.equals("int")) {
            return "Int";
        } else if (primitiveName.equals("long")) {
            return "Int64";
        } else if (primitiveName.equals("byte")) {
            return "Byte";
        } else if (primitiveName.equals("float")) {
            return "Float";
        } else if (primitiveName.equals("boolean")) {
            return "Bool";
        } else {
            return primitiveName;
        }
    }


    private static void processFile(List<File> sourceFileList, File file) {
        if (file.isDirectory()) {
            File[] files = file.listFiles();
            for (File subFile : files) {
                processFile(sourceFileList, subFile);
            }
        } else {
            if (file.getPath().endsWith(".java")) {
                //System.out.println(file.getPath());
                sourceFileList.add(file);
            }
        }
    }

    private static boolean deleteDirectory(File dir) {
        if (dir.isDirectory()) {
            for (File c : dir.listFiles())
                deleteDirectory(c);
        }
        return dir.delete();
    }

    private static boolean compile(List<File> sourceFileList, File tempDir) throws IOException {
        String outputPath = tempDir.getPath();

        JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
        DiagnosticCollector<JavaFileObject> diagnostics = new DiagnosticCollector<JavaFileObject>();
        StandardJavaFileManager fileManager = compiler.getStandardFileManager(diagnostics, null, null);
        Iterable<? extends JavaFileObject> compilationUnits = fileManager.getJavaFileObjects(sourceFileList.toArray(new File[sourceFileList.size()]));
        Iterable<String> options = Arrays.asList(new String[]{"-parameters", "-g:source,lines,vars", "-d", outputPath});
        JavaCompiler.CompilationTask task = compiler.getTask(null, fileManager, diagnostics, options, null, compilationUnits);
        boolean success = task.call();
        for (Diagnostic diagnostic : diagnostics.getDiagnostics()) {
            System.out.println(diagnostic.getCode());
            System.out.println(diagnostic.getKind());
            System.out.println(diagnostic.getPosition());
            System.out.println(diagnostic.getStartPosition());
            System.out.println(diagnostic.getEndPosition());
            System.out.println(diagnostic.getSource());
            System.out.println(diagnostic.getMessage(null));

        }
        if (success) {
            File f = new File(outputPath);
            URI u = f.toURI();
            URLClassLoader urlClassLoader = (URLClassLoader) ClassLoader.getSystemClassLoader();
            Class<URLClassLoader> urlClass = URLClassLoader.class;
            Method method = null;
            try {
                method = urlClass.getDeclaredMethod("addURL", new Class[]{URL.class});
            } catch (NoSuchMethodException e) {
                e.printStackTrace();
            }
            method.setAccessible(true);
            try {
                method.invoke(urlClassLoader, new Object[]{u.toURL()});
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            }
        }
        fileManager.close();
        return success;
    }
}
