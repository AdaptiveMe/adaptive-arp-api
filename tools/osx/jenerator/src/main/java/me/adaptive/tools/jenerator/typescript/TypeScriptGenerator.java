/*
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * See source code files for contributors.

------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
 */
package me.adaptive.tools.jenerator.typescript;

import com.thoughtworks.qdox.model.*;
import me.adaptive.tools.jenerator.GeneratorBase;
import me.adaptive.tools.jenerator.utils.IndentPrintStream;
import org.reflections.Reflections;
import org.reflections.scanners.ResourcesScanner;
import org.reflections.scanners.SubTypesScanner;
import org.reflections.util.ClasspathHelper;
import org.reflections.util.ConfigurationBuilder;
import org.reflections.util.FilterBuilder;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.*;

/**
 * Created by clozano on 02/12/14.
 */
public class TypeScriptGenerator extends GeneratorBase {

    private File currentFile;
    private IndentPrintStream indentPrintStream;
    private File currentFileGlobal;
    private IndentPrintStream indentPrintStreamGlobal;
    private List<String> arrayOfClasses = new ArrayList<>();
    private List<Class> enumClassList = new ArrayList<>();
    private List<Class> utilClassList = new ArrayList<>();

    public TypeScriptGenerator(File outRootPath, List<Class> classList, List<JavaClass> sourceList) {
        super(outRootPath, classList, sourceList);
    }

    @Override
    protected void createDelegateImplementation(String className, Class clazz, JavaClass javaClass) {

    }

    @Override
    protected void endCustomClass(String className, Class clazz, JavaClass javaClass) {
        startComment(0);
        applyClassHeader(clazz, getSourceFooter());
        endComment(0);
        indentPrintStream.flush();
        indentPrintStream.close();
    }

    @Override
    protected void startCustomClass(String className, Class clazz, JavaClass javaClass, boolean implementation) {
        if (className.contains("Delegate")) {
            indentPrintStream = new IndentPrintStream(new ByteArrayOutputStream());
        } else {
            currentFile = new File(getOutputRootDirectory(), className + ".ts");
            if (currentFile.exists()) {
                currentFile.delete();
            }
            try {
                indentPrintStream = new IndentPrintStream(new FileOutputStream(currentFile));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            if (currentFileGlobal == null) {
                currentFileGlobal = new File(getOutputRootDirectory(), "Adaptive.ts");
                if (currentFileGlobal.exists()) {
                    currentFileGlobal.delete();
                }
                try {
                    indentPrintStreamGlobal = new IndentPrintStream(new FileOutputStream(currentFileGlobal));
                } catch (FileNotFoundException e) {
                    e.printStackTrace();
                }
                indentPrintStreamGlobal.println("/**");
                indentPrintStreamGlobal.println(super.getSourceHeader());
                indentPrintStreamGlobal.println("*/");
                indentPrintStreamGlobal.println("module Adaptive {");
                indentPrintStreamGlobal.println();
            }
            this.arrayOfClasses.add(className + ".ts");
            startComment(0);
            applyClassHeader(clazz, getSourceHeader());
            endComment(0);
            println();
        }
    }

    @Override
    protected void createHandlerImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        List<String> referenceList = new ArrayList<>();
        if (clazz.getSimpleName().startsWith("IBase")) {
            referenceList.add("IAdaptiveRPGroup");
        }

        referenceList.add(clazz.getSimpleName());

        if (!simpleName.equals("AppRegistryBridge")) {
            for (Method m : clazz.getDeclaredMethods()) {
                for (Parameter p : m.getParameters()) {
                    if (!p.getType().isPrimitive() && !p.getType().equals(String.class) && !p.getType().equals(Object.class) && !p.getType().isArray()) {
                        if (!referenceList.contains(convertJavaToNativeType(p.getType()))) {
                            referenceList.add(convertJavaToNativeType(p.getType()));
                        }
                    } else if (p.getType().isArray() && !p.getType().getComponentType().isPrimitive() && !p.getType().getComponentType().equals(String.class) && !p.getType().getComponentType().equals(Object.class)) {
                        if (!referenceList.contains(convertJavaToNativeType(p.getType().getComponentType()))) {
                            referenceList.add(convertJavaToNativeType(p.getType().getComponentType()));
                        }
                    }
                }
            }
        }
        
        referenceList.sort(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.compareTo(o2);
            }
        });

        if (referenceList.size() > 0) {
            for (String reference : referenceList) {
                println("///<reference path=\"" + reference + ".ts\"/>");
            }
            println();
        }


        println("module Adaptive {");
        println();
        println("}");
    }

    @Override
    protected void createCallbackImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        List<String> referenceList = new ArrayList<>();
        if (clazz.getSimpleName().equals("IBaseCallback")) {
            referenceList.add("IAdaptiveRPGroup");
        } else {
            referenceList.add("BaseCallbackImpl");
        }
        referenceList.add(clazz.getSimpleName());

        for (Method m : clazz.getDeclaredMethods()) {
            for (Parameter p : m.getParameters()) {
                if (!p.getType().isPrimitive() && !p.getType().equals(String.class) && !p.getType().equals(Object.class) && !p.getType().isArray()) {
                    if (!referenceList.contains(convertJavaToNativeType(p.getType()))) {
                        referenceList.add(convertJavaToNativeType(p.getType()));
                    }
                } else if (p.getType().isArray() && !p.getType().getComponentType().isPrimitive() && !p.getType().getComponentType().equals(String.class) && !p.getType().getComponentType().equals(Object.class)) {
                    if (!referenceList.contains(convertJavaToNativeType(p.getType().getComponentType()))) {
                        referenceList.add(convertJavaToNativeType(p.getType().getComponentType()));
                    }
                }
            }
        }

        referenceList.sort(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.compareTo(o2);
            }
        });

        if (referenceList.size() > 0) {
            for (String reference : referenceList) {
                println("///<reference path=\"" + reference + ".ts\"/>");
            }
            println();
        }


        println("module Adaptive {");
        println();
        println("}");
    }

    @Override
    protected void createListenerImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        List<String> referenceList = new ArrayList<>();
        if (clazz.getSimpleName().equals("IBaseListener")) {
            referenceList.add("IAdaptiveRPGroup");
        } else {
            referenceList.add("BaseListenerImpl");
        }
        referenceList.add(clazz.getSimpleName());

        for (Method m : clazz.getDeclaredMethods()) {
            for (Parameter p : m.getParameters()) {
                if (!p.getType().isPrimitive() && !p.getType().equals(String.class) && !p.getType().equals(Object.class) && !p.getType().isArray()) {
                    if (!referenceList.contains(convertJavaToNativeType(p.getType()))) {
                        referenceList.add(convertJavaToNativeType(p.getType()));
                    }
                } else if (p.getType().isArray() && !p.getType().getComponentType().isPrimitive() && !p.getType().getComponentType().equals(String.class) && !p.getType().getComponentType().equals(Object.class)) {
                    if (!referenceList.contains(convertJavaToNativeType(p.getType().getComponentType()))) {
                        referenceList.add(convertJavaToNativeType(p.getType().getComponentType()));
                    }
                }
            }
        }

        referenceList.sort(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.compareTo(o2);
            }
        });

        if (referenceList.size() > 0) {
            for (String reference : referenceList) {
                println("///<reference path=\"" + reference + ".ts\"/>");
            }
            println();
        }


        println("module Adaptive {");
        println();
        startComment(5);
        if (javaClass.getComment() != null && javaClass.getComment().length() > 0) {
            println(8, javaClass.getComment());
        }
        println(8, "Auto-generated implementation of " + clazz.getSimpleName() + " specification.");
        endComment(5);

        if (clazz.getSimpleName().equals("IBaseListener")) {
            println(5, "export class " + simpleName + " implements " + clazz.getSimpleName() + " {");
            println();

            startComment(10);
            println(13, "Unique id of listener.");
            endComment(10);
            println(10, "id : number;");
            println();

            startComment(10);
            println(13, "Group of API.");
            endComment(10);
            println(10, "apiGroup : IAdaptiveRPGroup;");
            println();


            startComment(10);
            println(13, "Constructor with listener id.");
            println();
            println(13, "@param id  The id of the listener.");
            endComment(10);
            println(10, "constructor(id : number) {");
            println(15, "this.id = id;");
            println(15, "this.apiGroup = IAdaptiveRPGroup.Application;");
            println(10, "}");
            println();

            startComment(10);
            println(13, "Get the listener id.");
            println(13, "@return long with the identifier of the listener.");
            endComment(10);
            println(10, "getId() : number {");
            println(15, "return this.id;");
            println(10, "}");
            println();

            startComment(10);
            println(13, "Return the API group for the given interface.");
            endComment(10);
            println(10, "getAPIGroup() : IAdaptiveRPGroup {");
            println(15, "return this.apiGroup;");
            println(10, "}");

        } else {
            println(5, "export class " + simpleName + " extends BaseListenerImpl implements " + clazz.getSimpleName() + " {");
            println();
            startComment(10);
            println(13, "Constructor with listener id.");
            println();
            println(13, "@param id  The id of the listener.");
            endComment(10);
            println(10, "constructor(id : number) {");
            println(15, "super(id);");
            println(10, "}");
        }
        println();

        List<Method> classMethods = new ArrayList<>();
        Map<Method, JavaMethod> javaMethods = new HashMap<>();
        for (Method m : clazz.getDeclaredMethods()) {
            classMethods.add(m);
            for (JavaMethod jm : javaClass.getMethods()) {
                if (jm.getName().equals(m.getName()) && jm.getParameters().size() == m.getParameterCount()) {
                    javaMethods.put(m, jm);
                }
            }
        }
        classMethods.sort(new Comparator<Method>() {
            @Override
            public int compare(Method o1, Method o2) {
                return (o1.getName() + o1.getParameterCount()).compareTo((o2.getName() + o2.getParameterCount()));
            }
        });
        for (Method m : classMethods) {
            if (javaMethods.get(m) != null) {
                startComment(10);
                println(13, javaMethods.get(m).getComment());
                println();
                for (DocletTag tag : javaMethods.get(m).getTags()) {
                    println(13, "@" + tag.getName() + " " + tag.getValue());
                }
                endComment(10);
                print(10, "public ");
                print(m.getName() + "(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    print(p.getName());
                    print(" : " + convertJavaToNativeType(p.getType()));
                    if (i < m.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                print(") ");

                if (m.getReturnType().equals(Void.TYPE)) {
                    println("{");
                } else {
                    println(": " + convertJavaToNativeType(m.getReturnType()) + " {");
                }

                println(10, "}");
                println();
            }
        }
        println(5, "}");
        println("}");
    }

    @Override
    protected void declareInterfaceMethods(String simpleName, Class clazz, List<Method> interfaceMethods, List<JavaMethod> interfaceMethodsDoc) {
        for (Method method : interfaceMethods) {
            if (method.getName().equals("get$Synthetic$")) {
                // getters for all service classes!
                Class superInterface = null;
                try {
                    superInterface = Class.forName("me.adaptive.arp.api.IAdaptiveRP");
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                }
                Reflections reflections = new Reflections(new ConfigurationBuilder()
                        .setScanners(new SubTypesScanner(false /* don't exclude Object.class */), new ResourcesScanner())
                        .setUrls(ClasspathHelper.forPackage(superInterface.getPackage().getName()))
                        .filterInputsBy(new FilterBuilder().include(FilterBuilder.prefix(superInterface.getPackage().getName()))));

                Set<Class<? extends Object>> allClassesSet = reflections.getSubTypesOf(superInterface);
                List<Class> serviceClasses = new ArrayList<>();
                for (Class subClass : allClassesSet) {
                    if (!subClass.getName().endsWith("Callback") && !subClass.getName().endsWith("Listener") && !subClass.getSimpleName().startsWith("IBase")) {
                        serviceClasses.add(subClass);
                    }
                }
                serviceClasses.sort(new Comparator<Class>() {
                    @Override
                    public int compare(Class o1, Class o2) {
                        return o1.getName().compareTo(o2.getName());
                    }
                });
                for (Class serviceClass : serviceClasses) {
                    startComment(10);
                    startCommentGlobal(10);
                    println(13, "Returns a reference to the registered " + serviceClass.getSimpleName().substring(1) + "Bridge.");
                    println();
                    println(13, "@return " + serviceClass.getSimpleName().substring(1) + "Bridge reference or null if a bridge of this type is not registered.");
                    printlnGlobal(13, "Returns a reference to the registered " + serviceClass.getSimpleName().substring(1) + "Bridge.");
                    printlnGlobal();
                    printlnGlobal(13, "@return " + serviceClass.getSimpleName().substring(1) + "Bridge reference or null if a bridge of this type is not registered.");
                    endComment(10);
                    endCommentGlobal(10);
                    println(10, "get" + serviceClass.getSimpleName().substring(1) + "Bridge() : " + serviceClass.getSimpleName());
                    println();
                    printlnGlobal(10, "get" + serviceClass.getSimpleName().substring(1) + "Bridge() : " + serviceClass.getSimpleName());
                    printlnGlobal();
                }
            } else {
                startComment(10);
                startCommentGlobal(10);
                JavaMethod javaMethod = null;
                for (JavaMethod m : interfaceMethodsDoc) {
                    if (m.getName().equals(method.getName()) && m.getParameters().size() == method.getParameterCount()) {
                        javaMethod = m;
                        break;
                    }
                }
                if (javaMethod != null) {
                    println(13, javaMethod.getComment());
                    printlnGlobal(13, javaMethod.getComment());
                    for (DocletTag tag : javaMethod.getTags()) {
                        println(13, "@" + tag.getName() + " " + tag.getValue());
                        printlnGlobal(13, "@" + tag.getName() + " " + tag.getValue());
                    }
                }
                endComment(10);
                print(10, method.getName());
                print("(");
                endCommentGlobal(10);
                printGlobal(10, method.getName());
                printGlobal(0, "(");
                for (int i = 0; i < method.getParameterCount(); i++) {
                    Parameter p = method.getParameters()[i];
                    print(p.getName());
                    print(":");
                    print(convertJavaToNativeType(p.getType()));
                    printGlobal(0, p.getName());
                    printGlobal(0, ":");
                    printGlobal(0, convertJavaToNativeType(p.getType()));
                    if (i < method.getParameterCount() - 1) {
                        print(", ");
                        printGlobal(0, ", ");
                    }
                }
                print(")");
                printGlobal(0, ")");

                if (!method.getReturnType().equals(Void.TYPE)) {
                    print(" : ");
                    print(convertJavaToNativeType(method.getReturnType()));
                    printGlobal(0, " : ");
                    printGlobal(0, convertJavaToNativeType(method.getReturnType()));
                }
                println(";");
                printlnGlobal(0, ";");
            }
        }
    }

    @Override
    protected void endInterface(String simpleName, Class clazz) {
        println(5, "}"); // Class
        indentPrintStreamGlobal.println(5, "}");
        println("}"); // Module
    }

    @Override
    protected void startInterface(String simpleName, Class clazz, String classComment, List<DocletTag> tagList) {
        List<String> referenceList = new ArrayList<>();
        if (!clazz.isEnum()) {
            if (clazz.getInterfaces() != null && clazz.getInterfaces().length == 1) {
                referenceList.add(clazz.getInterfaces()[0].getSimpleName());
            }
            for (Field field : clazz.getDeclaredFields()) {
                if (field.getType().isArray()) {
                    if (!field.getType().getComponentType().isPrimitive() && !field.getType().getComponentType().equals(String.class) && !field.getType().getComponentType().equals(Object.class)) {
                        if (!referenceList.contains(field.getType().getComponentType().getSimpleName())) {
                            referenceList.add(field.getType().getComponentType().getSimpleName());
                        }
                    }
                } else if (field.getType().isEnum()) {
                    if (!referenceList.contains(generateEnumClassName(field.getType()))) {
                        referenceList.add(generateEnumClassName(field.getType()));
                    }
                } else if (!field.getType().isPrimitive() && !field.getType().equals(String.class) && !field.getType().equals(Object.class) && !field.getType().equals(clazz)) {
                    if (!referenceList.contains(field.getType().getSimpleName())) {
                        referenceList.add(field.getType().getSimpleName());
                    }
                }
            }
            for (Method method : clazz.getMethods()) {
                for (Parameter parameter : method.getParameters()) {
                    String typeName = null;
                    if (parameter.getType().isArray()) {
                        if (parameter.getType().getComponentType().isEnum()) {
                            typeName = generateEnumClassName(parameter.getType().getComponentType());
                        } else if (!parameter.getType().getComponentType().isPrimitive() && !parameter.getType().getComponentType().equals(String.class) && !parameter.getType().getComponentType().equals(Object.class) && !parameter.getType().getComponentType().equals(Class.class)) {
                            typeName = parameter.getType().getComponentType().getSimpleName();
                        }
                    } else if (!parameter.getType().isPrimitive() && !parameter.getType().equals(String.class) && !parameter.getType().equals(Object.class) && !parameter.getType().equals(Class.class)) {
                        if (parameter.getType().isEnum()) {
                            typeName = generateEnumClassName(parameter.getType());
                        } else {
                            typeName = parameter.getType().getSimpleName();
                        }
                    }

                    if (typeName != null && !referenceList.contains(typeName) && !clazz.getSimpleName().equals(typeName)) {
                        referenceList.add(typeName);
                    }
                }
                if (!method.getReturnType().equals(Void.TYPE)) {
                    String typeName = null;
                    if (method.getReturnType().isArray()) {
                        if (method.getReturnType().getComponentType().isEnum()) {
                            typeName = generateEnumClassName(method.getReturnType().getComponentType());
                        } else if (!method.getReturnType().getComponentType().isPrimitive() && !method.getReturnType().getComponentType().equals(String.class) && !method.getReturnType().getComponentType().equals(Object.class) && !method.getReturnType().getComponentType().equals(Class.class)) {
                            typeName = method.getReturnType().getComponentType().getSimpleName();
                        }
                    } else if (!method.getReturnType().isPrimitive() && !method.getReturnType().equals(String.class) && !method.getReturnType().equals(Object.class) && !method.getReturnType().equals(Class.class)) {
                        if (method.getReturnType().isEnum()) {
                            typeName = generateEnumClassName(method.getReturnType());
                        } else if (method.getReturnType().equals(Map.class)) {
                            typeName = "Dictionary";
                        } else {
                            typeName = method.getReturnType().getSimpleName();
                        }
                    }

                    if (typeName != null && !referenceList.contains(typeName) && !clazz.getSimpleName().equals(typeName)) {
                        referenceList.add(typeName);
                    }
                }

            }
            if (clazz.getSimpleName().equals("IAppRegistry")) {

                // getters for all service classes!
                Class superInterface = null;
                try {
                    superInterface = Class.forName("me.adaptive.arp.api.IAdaptiveRP");
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                }
                Reflections reflections = new Reflections(new ConfigurationBuilder()
                        .setScanners(new SubTypesScanner(false /* don't exclude Object.class */), new ResourcesScanner())
                        .setUrls(ClasspathHelper.forPackage(superInterface.getPackage().getName()))
                        .filterInputsBy(new FilterBuilder().include(FilterBuilder.prefix(superInterface.getPackage().getName()))));

                Set<Class<? extends Object>> allClassesSet = reflections.getSubTypesOf(superInterface);
                List<Class> serviceClasses = new ArrayList<>();
                for (Class subClass : allClassesSet) {
                    if (!subClass.getName().endsWith("Callback") && !subClass.getName().endsWith("Listener") && !subClass.getSimpleName().startsWith("IBase")) {
                        serviceClasses.add(subClass);
                    }
                }
                serviceClasses.sort(new Comparator<Class>() {
                    @Override
                    public int compare(Class o1, Class o2) {
                        return o1.getName().compareTo(o2.getName());
                    }
                });
                for (Class serviceClass : serviceClasses) {
                    referenceList.add(serviceClass.getSimpleName());
                }

            }
            referenceList.sort(new Comparator<String>() {
                @Override
                public int compare(String o1, String o2) {
                    return o1.compareTo(o2);
                }
            });

            if (referenceList.size() > 0) {
                for (String reference : referenceList) {
                    println("///<reference path=\"" + reference + ".ts\"/>");
                }
                println();
            }
        }

        println("module Adaptive {"); // Module
        println();
        startComment(5);
        startCommentGlobal(5);
        println(8, classComment);
        printlnGlobal(8, classComment);
        if (tagList.size() > 0) {
            println();
            printlnGlobal();
            for (DocletTag tag : tagList) {
                println(8, "@" + tag.getName() + " " + tag.getValue());
                printlnGlobal(8, "@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(5);
        endCommentGlobal(5);
        if (clazz.isEnum()) {
            println(5, "export interface " + generateEnumClassName(clazz) + " {");
            printlnGlobal(5, "export interface " + generateEnumClassName(clazz) + " {");
        } else if (clazz.getInterfaces() != null && clazz.getInterfaces().length == 1) {
            println(5, "export interface " + simpleName + " extends " + clazz.getInterfaces()[0].getSimpleName() + " {");
            printlnGlobal(5, "export interface " + simpleName + " extends " + clazz.getInterfaces()[0].getSimpleName() + " {");
        } else {
            println(5, "export interface " + simpleName + " {");
            printlnGlobal(5, "export interface " + simpleName + " {");
        }
        /**
         * Process all enums.
         */
        for (Method method : clazz.getDeclaredMethods()) {
            for (Parameter parameter : method.getParameters()) {
                if (parameter.getType().isEnum()) {
                    convertJavaToNativeType(parameter.getType());
                } else if (parameter.getType().isArray() && parameter.getType().getComponentType().isEnum()) {
                    convertJavaToNativeType(parameter.getType().getComponentType());
                }
            }
        }
        for (Field field : clazz.getDeclaredFields()) {
            print(10, field.getName());
            print(" : ");
            print(convertJavaToNativeType(field.getType()));
            println(";");
            printGlobal(10, field.getName());
            printGlobal(0, " : ");
            printGlobal(0, convertJavaToNativeType(field.getType()));
            printlnGlobal(0, ";");
        }
    }

    @Override
    protected void endGetterSetters(String simpleName, Class clazz) {

    }

    @Override
    protected void startGetterSetters(String simpleName, Class clazz) {

    }

    @Override
    protected void declareGetterSetter(Class clazz, Field field, JavaField fieldByName, List<JavaMethod> methods) {
        JavaMethod getter = null;
        JavaMethod setter = null;
        String fieldName = field.getName().substring(0, 1).toUpperCase() + field.getName().substring(1);

        for (JavaMethod method : methods) {
            if (method.getName().equals("set" + fieldName)) {
                setter = method;
            } else if (method.getName().equals("get" + fieldName)) {
                getter = method;
            } else if (method.getName().equals("is" + fieldName)) {
                getter = method;
            }
        }
        /**
         * Getters
         */
        startComment(10);
        startCommentGlobal(10);
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            println(13, getter.getComment());
            printlnGlobal(13, getter.getComment());
        } else {
            println(13, "Gets " + fieldByName.getComment());
            printlnGlobal(13, "Gets " + fieldByName.getComment());
        }
        println();
        printlnGlobal();
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            for (DocletTag tag : getter.getTags()) {
                println(13, "@" + tag.getName() + " " + tag.getValue());
                printlnGlobal(13, "@" + tag.getName() + " " + tag.getValue());
            }
        } else {
            println(13, "@return " + field.getName() + " " + fieldByName.getComment());
            printlnGlobal(13, "@return " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(10);
        endCommentGlobal(10);
        if (field.getType().equals(Boolean.class)) {
            println(10, "is" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
            printlnGlobal(10, "is" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
        } else {
            println(10, "get" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
            printlnGlobal(10, "get" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
        }

        println(15, "return this." + field.getName() + ";");
        printlnGlobal(15, "return this." + field.getName() + ";");
        println(10, "}");
        printlnGlobal(10, "}");
        println();
        printlnGlobal();
        /**
         * Setters
         */
        startComment(10);
        startCommentGlobal(10);
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            println(13, setter.getComment());
            printlnGlobal(13, setter.getComment());
        } else {
            println(13, "Sets " + fieldByName.getComment());
            printlnGlobal(13, "Sets " + fieldByName.getComment());
        }
        println();
        printlnGlobal();
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            for (DocletTag tag : setter.getTags()) {
                println(13, "@" + tag.getName() + " " + tag.getValue());
                printlnGlobal(13, "@" + tag.getName() + " " + tag.getValue());
            }
        } else {
            println(13, "@param " + field.getName() + " " + fieldByName.getComment());
            printlnGlobal(13, "@param " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(10);
        endCommentGlobal(10);
        println(10, "set" + fieldName + "(" + field.getName() + ": " + convertJavaToNativeType(field.getType()) + ") {");
        println(15, "this." + field.getName() + " = " + field.getName() + ";");
        println(10, "}");
        println();
        printlnGlobal(10, "set" + fieldName + "(" + field.getName() + ": " + convertJavaToNativeType(field.getType()) + ") {");
        printlnGlobal(15, "this." + field.getName() + " = " + field.getName() + ";");
        printlnGlobal(10, "}");
        printlnGlobal();
    }

    @Override
    protected void endConstructors(String simpleName, Class clazz) {

    }

    @Override
    protected void declareConstructors(String simpleName, Class clazz, List<Constructor> javaConstructors, List<JavaConstructor> docConstructors) {
        // TS can only have one constructor - pick most complete convenience constructor.
        int selectedIndex = 0;
        int selectedCount = 0;
        for (int i = 0; i < javaConstructors.size(); i++) {
            Constructor constructor = javaConstructors.get(i);
            if (constructor.getParameterCount() > selectedCount) {
                selectedCount = constructor.getParameterCount();
                selectedIndex = i;
            }
        }
        Constructor c = javaConstructors.get(selectedIndex);
        JavaConstructor d = docConstructors.get(selectedIndex);

        startComment(10);
        startCommentGlobal(10);
        if (d.getComment() != null && d.getComment().trim().length() > 0) {
            println(13, d.getComment());
            printlnGlobal(13, d.getComment());
        } else {
            println(13, "Constructor.");
            printGlobal(13, "Constructor.");
        }
        if (d.getTags().size() > 0) {
            println();
            printlnGlobal();
        }
        for (DocletTag tag : d.getTags()) {
            println(13, "@" + tag.getName() + " " + tag.getValue());
            printlnGlobal(13, "@" + tag.getName() + " " + tag.getValue());
        }
        endComment(10);
        endCommentGlobal(10);

        print(10, "constructor(");
        printGlobal(10, "constructor(");
        for (int i = 0; i < c.getParameterCount(); i++) {
            Parameter p = c.getParameters()[i];
            print(p.getName() + ": " + convertJavaToNativeType(p.getType()));
            printGlobal(0, p.getName() + ": " + convertJavaToNativeType(p.getType()));
            if (i < c.getParameterCount() - 1) {
                print(", ");
                printGlobal(0, ", ");
            }
        }
        println(") {");
        printlnGlobal(0, ") {");

        if (clazz.getSuperclass().getSimpleName().equals("APIBean")) {
            println(15, "super();");
            printlnGlobal(15, "super();");
        } else if (!clazz.getSuperclass().equals(Object.class)) {
            print(15, "super(");
            printGlobal(15, "super(");
            for (int j = 0; j < c.getParameters().length; j++) {
                Parameter parameter = c.getParameters()[j];

                boolean thisField = false;
                for (Field field : clazz.getDeclaredFields()) {
                    if (parameter.getName().equals(field.getName())) {
                        thisField = true;
                    }
                }
                if (!thisField) {
                    print(parameter.getName());
                    printGlobal(0, parameter.getName());
                }

            }
            println(");");
            printlnGlobal(0, ");");
        }

        for (int j = 0; j < c.getParameters().length; j++) {
            Parameter parameter = c.getParameters()[j];
            boolean thisField = false;
            for (Field field : clazz.getDeclaredFields()) {
                if (parameter.getName().equals(field.getName())) {
                    thisField = true;
                    break;
                }
            }
            if (thisField) {
                println(15, "this." + parameter.getName() + " = " + parameter.getName() + ";");
                printlnGlobal(15, "this." + parameter.getName() + " = " + parameter.getName() + ";");
            }
        }
        println(10, "}");
        printlnGlobal(10, "}");
    }

    @Override
    protected void startConstructors(String simpleName, Class clazz) {

    }

    @Override
    protected void endGeneration() {
        currentFile = new File(getOutputRootDirectory(), "join.sh");
        if (currentFile.exists()) {
            currentFile.delete();
        }
        try {
            indentPrintStream = new IndentPrintStream(new FileOutputStream(currentFile));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        println("#!/bin/sh");
        println("# Join all scripts into a combined JavaScript file. NOTE: you *must* include files in their precise order");
        println("# of inheritance and dependency; failing to do this will report errors when creating instances of classes");
        println("# from JavaScript and you're going to have a very bad time. As Mc Hammer would say: 'You can't touch dis!'");
        println("# unless you *really* know what you're doing.");
        println();
        println("# ps. This file is AUTO-GENERATED.");
        println();
        print("tsc --out adaptive-full.js");
        for (String name : arrayOfClasses) {
            print(" " + name);
        }
        println();

        for (String name : arrayOfClasses) {
            println("# " + name);
        }

        indentPrintStream.flush();
        indentPrintStream.close();

        enumClassList.sort(new Comparator<Class>() {
            @Override
            public int compare(Class o1, Class o2) {
                return o1.getName().compareTo(o2.getName());
            }
        });
        for (Class enumClass : enumClassList) {
            generateEnumClass(enumClass);
        }
        for (Class utilClass : utilClassList) {
            String className = utilClass.getSimpleName();
            if (className.equals("Map")) {
                className = "Dictionary";
            }
            generateUtilClass(className, utilClass);
        }
        indentPrintStreamGlobal.println();
        indentPrintStreamGlobal.println("}");
        indentPrintStreamGlobal.println("/**");
        indentPrintStreamGlobal.println(super.getSourceFooter());
        indentPrintStreamGlobal.println("*/");
        indentPrintStreamGlobal.flush();
        indentPrintStreamGlobal.close();
    }

    @Override
    protected void startGeneration() {

    }

    @Override
    protected void endFields(String simpleName, Class clazz) {

    }

    @Override
    protected void startFields(String simpleName, Class clazz) {

    }

    @Override
    protected String convertJavaToNativeType(Class classType) {
        String type = "Unknown";
        if (classType.isArray()) {
            return "Array<" + convertJavaToNativeType(classType.getComponentType()) + ">";
        } else if (classType.isPrimitive()) {
            if (classType.equals(Double.TYPE)) {
                return "number";
            } else if (classType.equals(Integer.TYPE)) {
                return "number";
            } else if (classType.equals(Long.TYPE)) {
                return "number";
            } else if (classType.equals(Byte.TYPE)) {
                return "number";
            } else if (classType.equals(Float.TYPE)) {
                return "number";
            } else if (classType.equals(Boolean.TYPE)) {
                return "boolean";
            } else if (classType.equals(Character.TYPE)) {
                return "string";
            }
        } else if (classType.isEnum()) {
            if (!enumClassList.contains(classType)) {
                enumClassList.add(classType);
            }
            return generateEnumClassName(classType);
        } else if (classType.equals(Object.class)) {
            return "any";
        } else if (classType.equals(String.class)) {
            return "string";
        } else if (classType.equals(Map.class)) {
            if (!utilClassList.contains(classType)) {
                utilClassList.add(classType);
            }
            return "Dictionary<String>";
        } else {
            type = classType.getSimpleName();
        }
        return type;
    }

    @Override
    protected void declareField(Class clazz, Field field, JavaField fieldByName) {
        if (fieldByName.getComment() != null && fieldByName.getComment().length() > 0) {
            startComment(10);
            startCommentGlobal(10);
            println(13, fieldByName.getComment());
            printlnGlobal(13, fieldByName.getComment());
            endComment(10);
            endCommentGlobal(10);
        }
        println(10, field.getName() + " : " + convertJavaToNativeType(field.getType()) + ";");
        printlnGlobal(10, field.getName() + " : " + convertJavaToNativeType(field.getType()) + ";");
    }

    @Override
    protected IndentPrintStream getIndentStream() {
        return this.indentPrintStream;
    }

    @Override
    protected void endBean(String simpleName, Class clazz) {
        if (clazz.equals(Map.class)) {
            println("}"); // Module
            return;
        }
        println(5, "}"); // Class
        indentPrintStreamGlobal.println(5, "}");
        println("}"); // Module
    }

    @Override
    protected void startBean(String simpleName, Class clazz, String comment, List<DocletTag> tagList) {

        List<String> referenceList = new ArrayList<>();
        if (!clazz.isEnum()) {
            if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class) && !clazz.getSuperclass().equals(Enum.class)) {
                referenceList.add(clazz.getSuperclass().getSimpleName());
            }
            for (Field field : clazz.getDeclaredFields()) {
                if (field.getType().isArray()) {
                    if (!field.getType().getComponentType().isPrimitive() && !field.getType().getComponentType().equals(String.class) && !field.getType().getComponentType().equals(Object.class)) {
                        if (!referenceList.contains(field.getType().getComponentType().getSimpleName())) {
                            referenceList.add(field.getType().getComponentType().getSimpleName());
                        }
                    }
                } else if (field.getType().isEnum()) {
                    if (!referenceList.contains(generateEnumClassName(field.getType()))) {
                        referenceList.add(generateEnumClassName(field.getType()));
                    }
                } else if (!field.getType().isPrimitive() && !field.getType().equals(String.class) && !field.getType().equals(Object.class) && !field.getType().equals(clazz)) {
                    if (!referenceList.contains(field.getType().getSimpleName())) {
                        referenceList.add(field.getType().getSimpleName());
                    }
                }
            }
            referenceList.sort(new Comparator<String>() {
                @Override
                public int compare(String o1, String o2) {
                    return o1.compareTo(o2);
                }
            });

            if (referenceList.size() > 0) {
                for (String reference : referenceList) {
                    println("///<reference path=\"" + reference + ".ts\"/>");
                }
                println();
            }
        }

        println("module Adaptive {"); // Module
        println();
        startComment(5);
        startCommentGlobal(5);
        println(8, comment);
        printlnGlobal(8, comment);
        if (tagList.size() > 0) {
            println();
            printlnGlobal();
            for (DocletTag tag : tagList) {
                println(8, "@" + tag.getName() + " " + tag.getValue());
                printlnGlobal(8, "@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(5);
        endCommentGlobal(5);
        if (clazz.equals(Map.class)) {
            return;
        }
        if (clazz.isEnum()) {
            println(5, "export class " + generateEnumClassName(clazz) + " {");
            printlnGlobal(5, "export class " + generateEnumClassName(clazz) + " {");
        } else if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class)) {
            println(5, "export class " + simpleName + " extends " + clazz.getSuperclass().getSimpleName() + " {");
            printlnGlobal(5, "export class " + simpleName + " extends " + clazz.getSuperclass().getSimpleName() + " {");
        } else {
            println(5, "export class " + simpleName + " {");
            printlnGlobal(5, "export class " + simpleName + " {");
        }
    }

    private void printGlobal(int indent, String value) {
        if (indentPrintStreamGlobal != null) {
            indentPrintStreamGlobal.print(indent, value);
        }
    }

    private void printGlobal(int indent) {
        this.printlnGlobal(indent, "");
    }

    private void printlnGlobal(int indent, String value) {
        if (indentPrintStreamGlobal != null) {
            indentPrintStreamGlobal.println(indent, value);
        }
    }

    private void printlnGlobal(int indent) {
        this.printlnGlobal(indent, "");
    }

    private void printlnGlobal() {
        this.printlnGlobal(0);
    }

    private void startCommentGlobal(int indent) {
        if (indentPrintStreamGlobal != null) {
            indentPrintStreamGlobal.println(indent, "/**");
        }
    }

    private void endCommentGlobal(int indent) {
        if (indentPrintStreamGlobal != null) {
            indentPrintStreamGlobal.println(indent, "*/");
        }
    }

    @Override
    protected void startClass(Class clazz) {
        currentFile = new File(getOutputRootDirectory(), clazz.getSimpleName() + ".ts");
        if (currentFile.exists()) {
            currentFile.delete();
        }
        try {
            indentPrintStream = new IndentPrintStream(new FileOutputStream(currentFile));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        if (currentFileGlobal == null) {
            currentFileGlobal = new File(getOutputRootDirectory(), "Adaptive.ts");
            if (currentFileGlobal.exists()) {
                currentFileGlobal.delete();
            }
            try {
                indentPrintStreamGlobal = new IndentPrintStream(new FileOutputStream(currentFileGlobal));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            indentPrintStreamGlobal.println("/**");
            indentPrintStreamGlobal.println(super.getSourceHeader());
            indentPrintStreamGlobal.println("*/");
            indentPrintStreamGlobal.println("module Adaptive {");
            indentPrintStreamGlobal.println();
        }
        this.arrayOfClasses.add(clazz.getSimpleName() + ".ts");
    }

    @Override
    protected void endClass(Class clazz) {
        indentPrintStream.flush();
        indentPrintStream.close();
    }

    private void generateEnumClass(Class clazz) {
        currentFile = new File(getOutputRootDirectory(), generateEnumClassName(clazz) + ".ts");
        currentFile.mkdirs();
        if (currentFile.exists()) {
            currentFile.delete();
        }
        try {
            indentPrintStream = new IndentPrintStream(new FileOutputStream(currentFile));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        startComment(0);
        applyClassHeader(clazz, getSourceHeader());
        endComment(0);
        println();

        startBean(generateEnumClassName(clazz), clazz, "Enumeration " + generateEnumClassName(clazz), new ArrayList<DocletTag>());
        println();
        printlnGlobal();
        println(10, "constructor(public value:string){}");
        println(10, "toString(){return this.value;}");
        printlnGlobal(10, "constructor(public value:string){}");
        printlnGlobal(10, "toString(){return this.value;}");
        println();
        printlnGlobal();
        for (int i = 0; i < clazz.getDeclaredFields().length - 1; i++) {
            Field field = clazz.getDeclaredFields()[i];
            println(10, "static " + field.getName() + " = new " + generateEnumClassName(clazz) + "(\"" + field.getName() + "\");");
            printlnGlobal(10, "static " + field.getName() + " = new " + generateEnumClassName(clazz) + "(\"" + field.getName() + "\");");
        }
        println();
        printlnGlobal();
        endBean(generateEnumClassName(clazz), clazz);


        indentPrintStream.flush();
        indentPrintStream.close();
    }

    private void generateUtilClass(String className, Class clazz) {
        currentFile = new File(getOutputRootDirectory(), className + ".ts");
        currentFile.mkdirs();
        if (currentFile.exists()) {
            currentFile.delete();
        }
        try {
            indentPrintStream = new IndentPrintStream(new FileOutputStream(currentFile));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        startComment(0);
        applyClassHeader(clazz, getSourceHeader());
        endComment(0);
        println();

        startBean(className, clazz, "Utility class of type " + clazz.getSimpleName(), new ArrayList<DocletTag>());
        println();
        printlnGlobal();
        println(10, "     /** Dictionary Definition **/\n" +
                "     export interface IDictionary<V> {\n" +
                "          add(key: string, value: V): void;\n" +
                "          remove(key: string): void;\n" +
                "          containsKey(key: string): boolean;\n" +
                "          keys(): string[];\n" +
                "          values(): V[];\n" +
                "     }\n" +
                "\n" +
                "     export class Dictionary<V> implements IDictionary<V>{\n" +
                "     \n" +
                "         _keys: Array<string> = new Array<string>();\n" +
                "         _values: Array<V> = new Array<V>();\n" +
                "     \n" +
                "         constructor(init: { key: string; value: V; }[]) {\n" +
                "     \n" +
                "             for (var x = 0; x < init.length; x++) {\n" +
                "                 this[init[x].key] = init[x].value;\n" +
                "                 this._keys.push(init[x].key);\n" +
                "                 this._values.push(init[x].value);\n" +
                "             }\n" +
                "         }\n" +
                "     \n" +
                "         add(key: string, value: V) {\n" +
                "             this[key] = value;\n" +
                "             this._keys.push(key);\n" +
                "             this._values.push(value);\n" +
                "         }\n" +
                "     \n" +
                "         remove(key: string) {\n" +
                "             var index = this._keys.indexOf(key, 0);\n" +
                "             this._keys.splice(index, 1);\n" +
                "             this._values.splice(index, 1);\n" +
                "     \n" +
                "             delete this[key];\n" +
                "         }\n" +
                "     \n" +
                "         keys(): string[] {\n" +
                "             return this._keys;\n" +
                "         }\n" +
                "     \n" +
                "         values(): V[] {\n" +
                "             return this._values;\n" +
                "         }\n" +
                "     \n" +
                "         containsKey(key: string) {\n" +
                "             if (typeof this[key] === \"undefined\") {\n" +
                "                 return false;\n" +
                "             }\n" +
                "     \n" +
                "             return true;\n" +
                "         }\n" +
                "     \n" +
                "         toLookup(): IDictionary<V> {\n" +
                "             return this;\n" +
                "         }\n" +
                "     }");
        printlnGlobal(10, "     /** Dictionary Definition **/\n" +
                "     export interface IDictionary<V> {\n" +
                "          add(key: string, value: V): void;\n" +
                "          remove(key: string): void;\n" +
                "          containsKey(key: string): boolean;\n" +
                "          keys(): string[];\n" +
                "          values(): V[];\n" +
                "     }\n" +
                "\n" +
                "     export class Dictionary<V> implements IDictionary<V>{\n" +
                "     \n" +
                "         _keys: Array<string> = new Array<string>();\n" +
                "         _values: Array<V> = new Array<V>();\n" +
                "     \n" +
                "         constructor(init: { key: string; value: V; }[]) {\n" +
                "     \n" +
                "             for (var x = 0; x < init.length; x++) {\n" +
                "                 this[init[x].key] = init[x].value;\n" +
                "                 this._keys.push(init[x].key);\n" +
                "                 this._values.push(init[x].value);\n" +
                "             }\n" +
                "         }\n" +
                "     \n" +
                "         add(key: string, value: V) {\n" +
                "             this[key] = value;\n" +
                "             this._keys.push(key);\n" +
                "             this._values.push(value);\n" +
                "         }\n" +
                "     \n" +
                "         remove(key: string) {\n" +
                "             var index = this._keys.indexOf(key, 0);\n" +
                "             this._keys.splice(index, 1);\n" +
                "             this._values.splice(index, 1);\n" +
                "     \n" +
                "             delete this[key];\n" +
                "         }\n" +
                "     \n" +
                "         keys(): string[] {\n" +
                "             return this._keys;\n" +
                "         }\n" +
                "     \n" +
                "         values(): V[] {\n" +
                "             return this._values;\n" +
                "         }\n" +
                "     \n" +
                "         containsKey(key: string) {\n" +
                "             if (typeof this[key] === \"undefined\") {\n" +
                "                 return false;\n" +
                "             }\n" +
                "     \n" +
                "             return true;\n" +
                "         }\n" +
                "     \n" +
                "         toLookup(): IDictionary<V> {\n" +
                "             return this;\n" +
                "         }\n" +
                "     }");

        println();
        printlnGlobal();
        endBean(className, clazz);


        indentPrintStream.flush();
        indentPrintStream.close();
    }

}
