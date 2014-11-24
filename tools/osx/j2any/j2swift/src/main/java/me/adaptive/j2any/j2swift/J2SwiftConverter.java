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
import java.util.*;

/**
 * Created by clozano on 27/08/2014.
 */
public class J2SwiftConverter {

    public static final boolean convert(String sourcePath, String targetPath, String targetPathJS, String... packages) throws IOException {
        File sourceDir = new File(sourcePath);
        File targetDir = new File(targetPath);
        File targetDirJS = new File(targetPathJS);
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

        if (!targetDirJS.exists()) {
            if (!targetDirJS.mkdirs()) {
                throw new IOException("Target path '" + targetPathJS + "' can not be created.");
            }
        }
        File targetFileJS = new File(targetDirJS, "adaptive.ts");
        if (targetFileJS.exists()) {
            targetFileJS.delete();
        }
        jsAppendHeader(targetFileJS);
        IndentPrintStream js = new IndentPrintStream(new FileOutputStream(targetFileJS, true));
        js.println("module Adaptive {");
        js.println();


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
                Set<Class<? extends Object>> allClassesSet = reflections.getSubTypesOf(Object.class);
                List<Class<? extends Object>> allClasses = new ArrayList<>();
                List<Class<? extends Object>> allInterfaces = new ArrayList<>();

                for (Class clazz : allClassesSet) {
                    if (clazz.isInterface()) {
                        allInterfaces.add(clazz);
                    } else {
                        allClasses.add(clazz);
                    }
                }

                Collections.sort(allClasses, new Comparator<Class<? extends Object>>() {
                    @Override
                    public int compare(Class<? extends Object> o1, Class<? extends Object> o2) {
                        final Class c1 = (Class) o1;
                        final Class c2 = (Class) o2;

                        if (c1.equals(c2)) {
                            return 0;
                        }
                        if (c1.isAssignableFrom(c2)) {
                            return -1;
                        } else {
                            if (!c2.isAssignableFrom(c2)) {
                                throw new IllegalArgumentException("The classes share no relation");
                            }
                            return 1;
                        }
                    }
                });

                Collections.sort(allInterfaces, new Comparator<Class<? extends Object>>() {
                    @Override
                    public int compare(Class<? extends Object> o1, Class<? extends Object> o2) {
                        final Class c1 = (Class) o1;
                        final Class c2 = (Class) o2;

                        if (c1.equals(c2)) {
                            return 0;
                        }
                        if (c1.isAssignableFrom(c2)) {
                            return -1;
                        } else {
                            if (!c2.isAssignableFrom(c2)) {
                                throw new IllegalArgumentException("The classes share no relation");
                            }
                            if (c1.getInterfaces().length == 1 && c2.getInterfaces().length == 1) {
                                return this.compare(c1.getInterfaces()[0], c2.getInterfaces()[0]);
                            } else {
                                if (c1.getInterfaces().length == 1 && c2.getInterfaces().length == 0) {
                                    return 1;
                                } else if (c1.getInterfaces().length == 0 && c2.getInterfaces().length == 1) {
                                    return -1;
                                } else {
                                    return 1;
                                }
                            }
                        }
                    }
                });
                allClasses.addAll(0,allInterfaces);

                for (Class clazz : allClasses) {
                    System.out.print(".");
                    processClass(clazz, targetDir, targetDirJS);
                }
                System.out.println(" Finished.");

                System.out.println("Source Size: " + sourceFileList.size());
                System.out.println("Class Size: " + allClasses.size());
            }
        }
        js.println();
        js.println("}");
        js.close();
        System.out.println("Processing: " + (System.currentTimeMillis() - tIn) + " ms.");

        if (!deleteDirectory(tempDir)) {
            System.out.println("Could not delete '" + tempDir.getPath() + "'.");
        }
        return true;
    }

    private static void processClassEnum(Class clazz, Class type, File targetDir, File targetDirJS) throws IOException {
        File targetFile = new File(targetDir, clazz.getSimpleName() + type.getSimpleName() + ".swift");
        if (targetFile.exists()) {
            targetFile.delete();
        }
        File targetFileJS = new File(targetDirJS, "adaptive.ts");

        IndentPrintStream ps = null;
        IndentPrintStream js = null;
        try {
            ps = new IndentPrintStream(new FileOutputStream(targetFile));
            js = new IndentPrintStream(new FileOutputStream(targetFileJS, true));
        } catch (FileNotFoundException e) {
            throw new IOException("Unable to write to stream.");
        }

        /**
         * Header Section
         */
        ps.println(0, "/*");
        ps.println(0, "* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================");
        ps.println(0, "*  Auto-generated from: " + clazz.getName());
        ps.println(0, "*  " + targetFile.getName());
        ps.println(0, "* (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.");
        ps.println(0, "*");
        ps.println(0, "* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with");
        ps.println(0, "* the License. You may obtain a copy of the License at");
        ps.println(0, "*");
        ps.println(0, "*     http://www.apache.org/licenses/LICENSE-2.0");
        ps.println(0, "*");
        ps.println(0, "* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on");
        ps.println(0, "* an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the");
        ps.println(0, "* specific language governing permissions and limitations under the License.");
        ps.println(0, "*");
        ps.println(0, "* Original author:");
        ps.println(0, "*");
        ps.println(0, "*     * Carlos Lozano Diez");
        ps.println(0, "*                 <http://github.com/carloslozano>");
        ps.println(0, "*                 <http://twitter.com/adaptivecoder>");
        ps.println(0, "*                 <mailto:carlos@adaptive.me>");
        ps.println(0, "*");
        ps.println(0, "* Contributors:");
        ps.println(0, "*");
        ps.println(0, "*     *");
        ps.println(0, "*");
        ps.println(0, "* =====================================================================================================================");
        ps.println(0, "*/");
        ps.println();
        ps.println(0, "import Foundation");
        ps.println();

        ps.println(0, "public enum " + clazz.getSimpleName() + type.getSimpleName() + " {");
        ps.println();
        ps.println(5, "/// Enum Values");
        Object[] enumConstants = type.getEnumConstants();
        ps.print(5, "case ");
        for (int i = 0; i < enumConstants.length; i++) {
            ps.print(enumConstants[i]);
            if ((enumConstants.length - 1) > i) {
                ps.print(", ");
            }
        }
        ps.println();
        ps.println();
        ps.println(5, "/// toString");
        ps.println(5, "public func toString() -> String {");
        ps.println(10, "switch self {");
        for (int i = 0; i < enumConstants.length; i++) {
            ps.println(15, "case ." + enumConstants[i] + ": return \"" + enumConstants[i] + "\"");
        }
        ps.println(10, "}");
        ps.println(5, "}");
        ps.println();
        ps.println(5, "/// toEnum");
        ps.println(5, "public static func toEnum(string:String?) -> " + clazz.getSimpleName() + type.getSimpleName() + " {");
        ps.println(10, "if let validString = string {");
        ps.println(15, "switch validString {");
        for (int i = 0; i < enumConstants.length; i++) {
            ps.println(20, "case \"" + enumConstants[i] + "\": return ." + enumConstants[i]);
        }
        ps.println(20, "default: return .Unknown");
        ps.println(15, "}");
        ps.println(10, "} else {");
        ps.println(15, "return .Unknown");
        ps.println(10, "}");
        ps.println(5, "}");
        ps.println();
        ps.println(0, "}");
        ps.close();
    }


    private static void processClass(Class clazz, File targetDir, File targetDirJS) throws IOException {
        File targetFile = new File(targetDir, clazz.getSimpleName() + ".swift");
        if (targetFile.exists()) {
            targetFile.delete();
        }
        File targetFileJS = new File(targetDirJS, "adaptive.ts");

        /*
        if (clazz.isInterface()) {
            if (clazz.getSimpleName().equals("ISession")
                    || clazz.getSimpleName().equals("IBaseCommunication")
                    || clazz.getSimpleName().equals("IAdaptiveRP")
                    || clazz.getSimpleName().startsWith("IBase")) {

            } else {
                //return;
            }
        }
        */

        IndentPrintStream ps = null;
        IndentPrintStream js = null;
        try {
            ps = new IndentPrintStream(new FileOutputStream(targetFile));
            js = new IndentPrintStream(new FileOutputStream(targetFileJS, true));
        } catch (FileNotFoundException e) {
            throw new IOException("Unable to write to stream.");
        }
        /**
         * Header Section
         */

        ps.println(0, "/*");
        ps.println(0, "* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================");
        ps.println(0, "*  Auto-generated from: " + clazz.getName() + " -> " + targetFile.getName());
        ps.println(0, "*");
        ps.println(0, "* (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.");
        ps.println(0, "*");
        ps.println(0, "* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with");
        ps.println(0, "* the License. You may obtain a copy of the License at");
        ps.println(0, "*");
        ps.println(0, "*     http://www.apache.org/licenses/LICENSE-2.0");
        ps.println(0, "*");
        ps.println(0, "* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on");
        ps.println(0, "* an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the");
        ps.println(0, "* specific language governing permissions and limitations under the License.");
        ps.println(0, "*");
        ps.println(0, "* Original author:");
        ps.println(0, "*");
        ps.println(0, "*     * Carlos Lozano Diez");
        ps.println(0, "*                 <http://github.com/carloslozano>");
        ps.println(0, "*                 <http://twitter.com/adaptivecoder>");
        ps.println(0, "*                 <mailto:carlos@adaptive.me>");
        ps.println(0, "*");
        ps.println(0, "* Contributors:");
        ps.println(0, "*");
        ps.println(0, "*     *");
        ps.println(0, "*");
        ps.println(0, "* =====================================================================================================================");
        ps.println(0, "*/");
        ps.println();
        ps.println(0, "import Foundation");
        ps.println();

        if (clazz.isInterface()) {
            js.print(5, "export interface ");
            ps.print(0, "public protocol ");
            ps.print(clazz.getSimpleName());
            js.print(clazz.getSimpleName());

            Class[] interfaces = clazz.getInterfaces();
            if (interfaces.length > 0) {
                ps.print(" : ");
                js.print(" extends ");
                for (int i = 0; i < interfaces.length; i++) {
                    Class interface_ = interfaces[i];
                    ps.print(interface_.getSimpleName());
                    js.print(interface_.getSimpleName());
                    if ((interfaces.length - 1) > i) {
                        ps.print(", ");
                        js.print(", ");
                    }
                }
                //ps.print(", Printable, Equatable");
            } else {
                ps.print(": Printable");
            }
            ps.println(" {");
            ps.println();
            js.println(" {");
            js.println();
        } else {
            js.print(5, "export class ");
            ps.print("public class ");
            ps.print(clazz.getSimpleName());
            js.print(clazz.getSimpleName());
            Class[] interfaces = clazz.getInterfaces();
            if (interfaces.length > 0) {
                ps.print(" : ");
                js.print(" extends ");
                for (int i = 0; i < interfaces.length; i++) {
                    Class interface_ = interfaces[i];
                    ps.print(interface_.getSimpleName());
                    js.print(interface_.getSimpleName());
                    if ((interfaces.length - 1) > i) {
                        ps.print(", ");
                        js.print(", ");
                    }
                }
            }
            Class superClass = clazz.getSuperclass();
            if (superClass != null && !superClass.equals(Object.class)) {
                ps.print(" : " + superClass.getSimpleName());
                js.print(" extends " + superClass.getSimpleName());
            } else {
                ps.print(" : NSObject ");
            }
            ps.println(" {");
            js.println(" {");
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
            js.println();
            js.println(10, "/** Field Declarations **/");
        }

        List<Field> fieldList = new ArrayList<>();
        for (Field field : clazz.getDeclaredFields()) {
            fieldList.add(field);
        }
        fieldList.sort(new Comparator<Field>() {
            @Override
            public int compare(Field o1, Field o2) {
                return o1.getName().compareTo(o2.getName());
            }
        });

        for (Field field : fieldList) {
            ps.print(5, "var " + field.getName());
            js.print(10, "" + field.getName());
            if (field.getType().isPrimitive()) {
                ps.print(" : " + getPrimitiveTypeSwift(field.getType()));
                js.print(" : " + getPrimitiveTypeTS(field.getType()) + ";");
            } else if (field.getType().isArray()) {
                Class<?> componentType = field.getType().getComponentType();
                if (componentType.isPrimitive()) {
                    ps.print(" : [" + getPrimitiveTypeSwift(componentType) + "]?");
                    js.print(" : Array<" + getPrimitiveTypeTS(componentType) + ">;");
                } else {
                    if (componentType.getSimpleName().equals("Object")) {
                        ps.print(" : [Any" + componentType.getSimpleName() + "]?");
                        js.print(" : Array<any>;");
                    } else {
                        ps.print(" : [" + componentType.getSimpleName() + "]?");
                        js.print(" : Array<" + componentType.getSimpleName() + ">;");
                    }
                }
            } else {
                if (field.getType().isEnum()) {
                    ps.print(" : " + field.getType().getSimpleName() + "?");
                    js.print(" : " + clazz.getSimpleName()+field.getType().getSimpleName() + "Enum;");
                } else {
                    if (field.getType().isInterface()) {
                        ps.print(" : " + field.getType().getSimpleName() + "?");
                        js.print(" : " + field.getType().getSimpleName() + ";");
                    } else {
                        if (field.getType().equals(String.class)) {
                            ps.print(" : " + field.getType().getSimpleName());
                            js.print(" : " + field.getType().getSimpleName().toLowerCase() + ";");
                        } else {
                            ps.print(" : " + field.getType().getSimpleName() + "?");
                            js.print(" : " + field.getType().getSimpleName() + ";");
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
            js.println();
        }

        // Description
        if (fieldList.size() > 0) {
            ps.println(5, "public override var description : String {");
            StringBuffer descriptionBuffer = new StringBuffer();
            descriptionBuffer.append(clazz.getSimpleName() + "{");
            int fieldIndex = 0;
            for (Field field : fieldList) {
                descriptionBuffer.append(field.getName() + "=");
                if (field.getType().isPrimitive()) {
                    descriptionBuffer.append("\\(" + field.getName() + ".description)");
                } else if (field.getType().isArray()) {
                    Class<?> componentType = field.getType().getComponentType();
                    if (componentType.isPrimitive()) {
                        descriptionBuffer.append("\\(" + field.getName() + "!.description)");
                    } else {
                        if (componentType.getSimpleName().equals("Object")) {
                            descriptionBuffer.append("\\(" + field.getName() + "!.description)");
                        } else {
                            descriptionBuffer.append("\\(" + field.getName() + "!.description)");
                        }
                    }
                } else {
                    if (field.getType().isEnum()) {
                        descriptionBuffer.append("\\(" + field.getName() + "?.hashValue.description)");
                    } else {
                        if (field.getType().isInterface()) {
                            descriptionBuffer.append("\\(" + field.getName() + "?.description)");
                        } else {
                            if (field.getType().equals(String.class)) {
                                descriptionBuffer.append("\\(" + field.getName() + ")");
                            } else {
                                descriptionBuffer.append("\\(" + field.getName() + "?.description)");
                            }
                        }
                    }
                }
                fieldIndex++;
                if (fieldIndex < fieldList.size()) {
                    descriptionBuffer.append(", ");
                }
            }
            descriptionBuffer.append("}");
            ps.println(10, "return \"" + descriptionBuffer.toString() + "\"");
            ps.println(5, "}");
            ps.println();
            //ps.println(5,"func ==(lhs: "+clazz.getSimpleName()+", rhs: "+clazz.getSimpleName()+") -> Bool {");
            //ps.println(10,"return false");
            //ps.println(5,"}");
            //ps.println();
        }


        /**
         * Enumeration Section
         */
        if (enumList.size() > 0) {
            ps.println();
            ps.println(5, "/**");
            ps.println(5, " * Enumeration Declarations");
            ps.println(5, " */");
            //js.println();
            //js.println(10, "/** Enumeration Declarations **/");

            enumList.sort(new Comparator<Class<?>>() {
                @Override
                public int compare(Class<?> o1, Class<?> o2) {
                    return o1.toGenericString().compareTo(o2.toGenericString());
                }
            });
        }
        for (Class<?> enumClass : enumList) {
            ps.println(5, "public enum " + enumClass.getSimpleName() + " {");
            ps.println(10, "/// Enum Values");

            //js.print(10, "enum " + enumClass.getSimpleName() + "Enum { ");


            Object[] enumConstants = enumClass.getEnumConstants();
            ps.print(10, "case ");
            for (int i = 0; i < enumConstants.length; i++) {
                ps.print(enumConstants[i]);
                //js.print(enumConstants[i]);
                if ((enumConstants.length - 1) > i) {
                    ps.print(", ");
                    //js.print(", ");
                }
            }

            //js.println("};");

            ps.println();
            ps.println();
            ps.println(10, "/// toString");
            ps.println(10, "public func toString() -> String {");
            ps.println(15, "switch self {");
            for (int i = 0; i < enumConstants.length; i++) {
                ps.println(20, "case ." + enumConstants[i] + ": return \"" + enumConstants[i] + "\"");
            }
            ps.println(15, "}");
            ps.println(10, "}");
            ps.println();
            ps.println(10, "/// toEnum");
            ps.println(10, "public static func toEnum(string:String?) -> " + enumClass.getSimpleName() + " {");
            ps.println(15, "if let validString = string {");
            ps.println(20, "switch validString {");
            for (int i = 0; i < enumConstants.length; i++) {
                ps.println(25, "case \"" + enumConstants[i] + "\": return ." + enumConstants[i]);
            }
            ps.println(25, "default: return .Unknown");
            ps.println(20, "}");
            ps.println(15, "} else {");
            ps.println(20, "return .Unknown");
            ps.println(15, "}");
            ps.println(10, "}");

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

            js.println();
            js.println(10, "/** Initialization **/");

            List<Constructor<?>> constructorList = new ArrayList<>();
            for (Constructor<?> constructor : clazz.getConstructors()) {
                constructorList.add(constructor);
            }
            constructorList.sort(new Comparator<Constructor<?>>() {
                @Override
                public int compare(Constructor<?> o1, Constructor<?> o2) {
                    return o1.getName().compareTo(o2.getName());
                }
            });

            boolean singleTSInterface = false;

            for (Constructor<?> constructor : constructorList) {
                Parameter[] parameters = constructor.getParameters();
                if (parameters.length > 0) {
                    ps.print(5, "public convenience init");
                    ps.print("(");
                    if (!singleTSInterface) js.print(10, "constructor(");
                } else {
                    Class superClass = clazz.getSuperclass();
                    if (superClass != null && !superClass.equals(Object.class)) {
                        ps.print(5, "public override init");
                    } else {
                        ps.print(5, "public override init");
                    }
                    ps.print("(");
                    //js.print(10, "constructor(");
                }
                for (int i = 0; i < parameters.length; i++) {
                    Parameter parameter = parameters[i];
                    ps.print(parameter.getName() + " : ");
                    if (!singleTSInterface) js.print(parameter.getName() + ": ");

                    Class<?> parameterType = parameter.getType();
                    if (parameterType.isArray()) {
                        Class<?> componentType = parameterType.getComponentType();
                        if (componentType.isPrimitive()) {
                            ps.print("[" + getPrimitiveTypeSwift(componentType) + "]");
                            if (!singleTSInterface) js.print("Array<" + getPrimitiveTypeTS(componentType) + ">");
                        } else {
                            if (componentType.getSimpleName().equals("Object")) {
                                ps.print("[Any" + componentType.getSimpleName() + "]");
                                if (!singleTSInterface) js.print("Array<any>");
                            } else {
                                if (componentType.isEnum()) {
                                    processClassEnum(clazz, componentType, targetDir, targetDirJS);
                                    ps.print("[" + clazz.getSimpleName() + componentType.getSimpleName() + "]");
                                    if (!singleTSInterface)
                                        js.print("Array<" + clazz.getSimpleName() + componentType.getSimpleName() + ">");
                                } else {
                                    ps.print("[" + componentType.getSimpleName() + "]");
                                    if (!singleTSInterface) js.print("Array<" + componentType.getSimpleName() + ">");
                                }
                            }
                        }
                    } else if (parameterType.isPrimitive()) {
                        ps.print(getPrimitiveTypeSwift(parameterType));
                        if (!singleTSInterface) js.print(getPrimitiveTypeTS(parameterType));
                    } else if (parameterType.equals(String.class)) {
                        ps.print(parameter.getType().getSimpleName());
                        if (!singleTSInterface) js.print(parameter.getType().getSimpleName().toLowerCase());
                    } else if (parameterType.isEnum()) {
                        ps.print(parameter.getType().getSimpleName());
                        js.print(clazz.getSimpleName()+parameter.getType().getSimpleName()+"Enum");
                    } else {
                        ps.print(parameter.getType().getSimpleName());
                        js.print(parameter.getType().getSimpleName());
                    }

                    if ((parameters.length - 1) > i) {
                        ps.print(", ");
                        if (!singleTSInterface) js.print(", ");
                    }
                }
                ps.println(") {");
                if (parameters.length > 0) {
                    if (!singleTSInterface) js.println(") {");
                }
                if (parameters.length == 0) {
                    Class superClass = clazz.getSuperclass();
                    if (superClass != null && !superClass.equals(Object.class)) {
                        ps.println(10, "super.init()");
                        //js.println(15, "super()");
                    }
                    for (Field field : clazz.getDeclaredFields()) {
                        ps.print(10, "self." + field.getName());
                        //js.print(15, "this." + field.getName());
                        if (field.getType().isArray()) {
                            if (field.getType().getComponentType().isPrimitive()) {
                                ps.println(" = [" + getPrimitiveTypeSwift(field.getType().getComponentType()) + "]()");
                                //js.println(" = new Array<"+ getPrimitiveTypeTS(field.getType().getComponentType()) + ">();");
                            } else {
                                if (field.getType().getComponentType().getSimpleName().equals("Object")) {
                                    ps.println(" = [Any" + field.getType().getComponentType().getSimpleName() + "]()");
                                    //js.println(" = new Array<any>();");
                                } else {
                                    if (field.getType().getComponentType().isEnum()) {
                                        ps.println(" = [" + clazz.getSimpleName() + field.getType().getComponentType().getSimpleName() + "]()");
                                        //js.println(" = new Array<" + clazz.getSimpleName() + field.getType().getComponentType().getSimpleName() + ">();");
                                    } else {
                                        ps.println(" = [" + field.getType().getComponentType().getSimpleName() + "]()");
                                        //js.println(" = new Array<"+ field.getType().getComponentType().getSimpleName() + ">();");
                                    }
                                }
                            }
                        } else if (field.getType().isPrimitive()) {
                            if (field.getType().equals(Boolean.TYPE)) {
                                ps.println(" = false");
                                //js.println(" = false;");
                            } else if (field.getType().equals(Integer.TYPE)) {
                                ps.println(" = 0");
                                //js.println(" = 0;");
                            } else if (field.getType().equals(Long.TYPE)) {
                                ps.println(" = 0");
                                //js.println(" = 0;");
                            } else if (field.getType().equals(Float.TYPE)) {
                                ps.println(" = 0.0");
                                //js.println(" = 0.0;");
                            } else if (field.getType().equals(Double.TYPE)) {
                                ps.println(" = 0.0");
                                //js.println(" = 0.0;");
                            } else if (field.getType().equals(Short.TYPE)) {
                                ps.println(" = 0.0");
                                //js.println(" = 0.0;");
                            } else {
                                ps.println(" = LALA");
                                //js.println(" = LALA;");
                            }
                        } else if (field.getType().equals(String.class)) {
                            ps.println(" = \"\"");
                            //js.println(" = \"\";");
                        } else {
                            ps.println(" = nil");
                            if (!field.getType().isInterface()) {
                                //js.println(" = new "+field.getType().getSimpleName()+"();");
                            } else {
                                //js.println(" = \"\"; /** "+field.getType().getSimpleName()+" **/");
                            }
                        }

                    }
                } else {
                    ps.println(10, "self.init()");
                    Class superClass = clazz.getSuperclass();
                    if (superClass != null && !superClass.equals(Object.class)) {
                        if (!singleTSInterface) {
                            js.print(15, "super(");
                            for (int i = 0; i < parameters.length; i++) {
                                Parameter parameter = parameters[i];
                                js.print(parameter.getName());
                                if ((parameters.length - 1) > i) {
                                    ps.print(", ");
                                }
                            }
                            js.println(")");
                        }
                    }
                    for (Parameter parameter : parameters) {
                        ps.println(10, "self." + parameter.getName() + " = " + parameter.getName());
                        if (!singleTSInterface)
                            js.println(15, "this." + parameter.getName() + " = " + parameter.getName() + ";");
                    }
                }
                ps.println(5, "}");
                ps.println();
                if (parameters.length > 0) {
                    if (!singleTSInterface) js.println(10, "}");
                    if (!singleTSInterface) js.println();
                    singleTSInterface = true;
                }
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

        List<Method> methodList = new ArrayList<>();
        for (Method method : clazz.getDeclaredMethods()) {
            methodList.add(method);
        }
        methodList.sort(new Comparator<Method>() {
            @Override
            public int compare(Method o1, Method o2) {
                String o1String = o1.getName();
                for (Parameter p : o1.getParameters()) {
                    o1String += p.getName() + p.getType().getSimpleName() + o1.getParameterCount();
                }
                String o2String = o2.getName();
                for (Parameter p : o2.getParameters()) {
                    o2String += p.getName() + p.getType().getSimpleName() + o2.getParameterCount();
                }
                return o1String.compareTo(o2String);
            }
        });

        if (clazz.isInterface()) {
            Class[] interfaces = clazz.getInterfaces();
            if (interfaces.length > 0) {
                ps.println();
                ps.print(5, "var description : String { get }");
                ps.println();
            }
        }
        for (Method method : methodList) {
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
                                if (componentType.isEnum()) {
                                    processClassEnum(clazz, componentType, targetDir, targetDirJS);
                                    ps.print("[" + clazz.getSimpleName() + componentType.getSimpleName() + "]");
                                } else {
                                    ps.print("[" + componentType.getSimpleName() + "]");
                                }
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
                            //if (parameter.getType().equals(clazz)) {
                            //    ps.print("Self");
                            //} else {
                            ps.print(parameter.getType().getSimpleName());
                            //}
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
                            ps.print("[" + getPrimitiveTypeSwift(componentType) + "]?");
                        } else {
                            if (componentType.getSimpleName().equals("Object")) {
                                ps.print("[Any" + componentType.getSimpleName() + "]?");
                            } else {
                                ps.print("[" + componentType.getSimpleName() + "]?");
                            }
                        }
                    } else if (returnType.isPrimitive()) {
                        ps.print(getPrimitiveTypeSwift(returnType));
                    } else {
                        if (returnType.getSimpleName().equals("Object")) {
                            ps.print("Any" + returnType.getSimpleName() + "?");
                        } else {
                            if (returnType.getSimpleName().equals("Map")) {
                                ps.print("Dictionary<String,String>?");
                            } else {
                                if (returnType.isEnum()) {
                                    processClassEnum(clazz, returnType, targetDir, targetDirJS);
                                    ps.print(clazz.getSimpleName() + returnType.getSimpleName());
                                } else {
                                    ps.print(returnType.getSimpleName() + "?");
                                }
                            }
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
                            ps.print("[" + getPrimitiveTypeSwift(componentType) + "]?");
                        } else {
                            if (componentType.getSimpleName().equals("Object")) {
                                ps.print("[Any" + componentType.getSimpleName() + "]?");
                            } else {
                                ps.print("[" + componentType.getSimpleName() + "]?");
                            }
                        }
                    } else if (returnType.isPrimitive()) {
                        ps.print(getPrimitiveTypeSwift(returnType));
                    } else if (returnType.isEnum()) {
                        ps.print(returnType.getSimpleName());
                    } else {
                        if (returnType.getSimpleName().equals("Object")) {
                            ps.print("Any" + returnType.getSimpleName() + "?");
                        } else {
                            ps.print(returnType.getSimpleName() + "?");
                        }
                    }

                }

                ps.println(" {");

                if (!returnType.equals(Void.TYPE)) {
                    ps.print(10, "return self." + getGetterSetterProperty(method));
                    if (returnType.isEnum() || returnType.isInterface() /*|| returnType.isArray()*/) {
                        ps.print("!");
                    } else if (!returnType.isPrimitive() && !returnType.equals(String.class) && !returnType.isArray()) {
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

        //if (clazz.isInterface()) {
        //ps.println(5, "func ==(lhs: "+clazz.getSimpleName()+", rhs: "+clazz.getSimpleName()+") -> Bool");
        //}
        /**
         * Interface Enumeration Section
         */

        //if (interfaceEnumList.size() > 0) {
        //    ps.println();
        //    ps.println("}");
        //    ps.println();
        //    ps.println(0, "/**");
        //    ps.println(0, " * Enumeration Declarations");
        //    ps.println(0, " */");
        //}
        for (Class<?> enumClass : interfaceEnumList) {
            processClassEnum(clazz, enumClass, targetDir, targetDirJS);
            /*
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
            */
        }
        /**
         * Footer Section
         */
        if (interfaceEnumList.size() == 0) {
            ps.println();
            ps.println(0, "}");
            js.println(5, "}");
            js.println();
        } else {
            ps.println();
            ps.println("}");
            js.println();
            js.println(5, "}");
        }
            /*

                 export class MyEnum
     {
          constructor(public value:string){
          }

          toString(){
               return this.value;
          }

          // values
          static hello = new MyEnum("hello");
          static world = new MyEnum("world");
     }

             */

        for (Class<?> enumClass : enumList) {
            js.println();
            js.println(5, "export class " + clazz.getSimpleName() + enumClass.getSimpleName() + "Enum {");
            js.println(10,"constructor(public value:string){}");
            js.println(10,"toString(){return this.value;}");
            js.println();
            Object[] enumConstants = enumClass.getEnumConstants();

            for (int i = 0; i < enumConstants.length; i++) {
                js.println(10,"static "+enumConstants[i]+" = new "+clazz.getSimpleName() + enumClass.getSimpleName() + "Enum(\""+enumConstants[i]+"\");");
            }
            js.println(5,"}");
            js.println();
        }

        for (Class<?> enumClass : interfaceEnumList) {
            js.println();
            js.println(5, "export class " + clazz.getSimpleName() + enumClass.getSimpleName() + "Enum {");
            js.println(10,"constructor(public value:string){}");
            js.println(10,"toString(){return this.value;}");
            js.println();
            Object[] enumConstants = enumClass.getEnumConstants();

            for (int i = 0; i < enumConstants.length; i++) {
                js.println(10,"static "+enumConstants[i]+" = new "+clazz.getSimpleName() + enumClass.getSimpleName() + "Enum(\""+enumConstants[i]+"\");");
            }
            js.println(5,"}");
            js.println();
        }


        ps.close();
        js.close();
    }

    private static String getGetterSetterProperty(Method method) {
        String methodName = method.getName();
        String propertyName = "UNKNOWN";
        if (methodName.startsWith("get") || methodName.startsWith("set")) {
            propertyName = methodName.substring(3, 4).toLowerCase() + methodName.substring(4);
        } else if (methodName.startsWith("is")) {
            propertyName = methodName.substring(2, 3).toLowerCase() + methodName.substring(3);
        } else if (methodName.equals("toString")) {
            return "description";
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
        } else if (primitiveName.equals("char")) {
            return "Character";
        } else {
            return primitiveName;
        }
    }

    private static String getPrimitiveTypeTS(Class<?> primitiveType) {
        String primitiveName = primitiveType.getName();
        if (primitiveName.equals("double")) {
            return "number";
        } else if (primitiveName.equals("int")) {
            return "number";
        } else if (primitiveName.equals("long")) {
            return "number";
        } else if (primitiveName.equals("byte")) {
            return "number";
        } else if (primitiveName.equals("float")) {
            return "number";
        } else if (primitiveName.equals("boolean")) {
            return "boolean";
        } else if (primitiveName.equals("char")) {
            return "string";
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

    private static void jsAppendHeader(File targetFileJS) throws IOException {
        IndentPrintStream ps = null;
        try {
            ps = new IndentPrintStream(new FileOutputStream(targetFileJS, true));
        } catch (FileNotFoundException e) {
            throw new IOException("Unable to write to stream.");
        }
        ps.println(0, "/*");
        ps.println(0, "* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================");
        ps.println(0, "*");
        ps.println(0, "* (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.");
        ps.println(0, "*");
        ps.println(0, "* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with");
        ps.println(0, "* the License. You may obtain a copy of the License at");
        ps.println(0, "*");
        ps.println(0, "*     http://www.apache.org/licenses/LICENSE-2.0");
        ps.println(0, "*");
        ps.println(0, "* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on");
        ps.println(0, "* an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the");
        ps.println(0, "* specific language governing permissions and limitations under the License.");
        ps.println(0, "*");
        ps.println(0, "* Original author:");
        ps.println(0, "*");
        ps.println(0, "*     * Carlos Lozano Diez");
        ps.println(0, "*                 <http://github.com/carloslozano>");
        ps.println(0, "*                 <http://twitter.com/adaptivecoder>");
        ps.println(0, "*                 <mailto:carlos@adaptive.me>");
        ps.println(0, "*");
        ps.println(0, "* Contributors:");
        ps.println(0, "*");
        ps.println(0, "*     *");
        ps.println(0, "*");
        ps.println(0, "* =====================================================================================================================");
        ps.println(0, "*/");
        ps.println();
    }
}
