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

public class TypeScriptGenerator extends GeneratorBase {

    private File currentFile;
    private IndentPrintStream indentPrintStream;
    private File currentFileSF;
    private IndentPrintStream indentPrintStreamSF;
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
        if (className.contains("Delegate") || className.startsWith("AppContext")) {
            indentPrintStream = new IndentPrintStream(new ByteArrayOutputStream());
        } else {
            if (clazz.getSimpleName().endsWith("Listener") || clazz.getSimpleName().endsWith("Callback") && className.endsWith("Impl")) {
                className = className.substring(0, className.length() - 4);
            }

            currentFile = new File(getOutputRootDirectory(), className + ".ts");
            if (currentFile.exists()) {
                currentFile.delete();
            }
            try {
                indentPrintStream = new IndentPrintStream(new FileOutputStream(currentFile));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            if (currentFileSF == null) {
                currentFileSF = new File(getOutputRootDirectory(), "Adaptive.ts");
                if (currentFileSF.exists()) {
                    currentFileSF.delete();
                }
                try {
                    indentPrintStreamSF = new IndentPrintStream(new FileOutputStream(currentFileSF));
                } catch (FileNotFoundException e) {
                    e.printStackTrace();
                }
                indentPrintStreamSF.println("/**");
                indentPrintStreamSF.println(super.getSourceHeader());
                indentPrintStreamSF.println("*/");
                indentPrintStreamSF.println("module Adaptive {");
                indentPrintStreamSF.println();
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
        if (!clazz.getSimpleName().startsWith("IAppContext")) {
            List<String> referenceList = new ArrayList<>();
            List<Class> serviceClasses = new ArrayList<>();

            referenceList.add("CommonUtil");

            if (clazz.getInterfaces().length > 0 && clazz.getInterfaces()[0].getSimpleName().substring(1).startsWith("Base")) {
                if (!simpleName.startsWith(clazz.getInterfaces()[0].getSimpleName().substring(1))) {
                    referenceList.add(clazz.getInterfaces()[0].getSimpleName().substring(1) + "Bridge");
                }
            }
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
                            if (typeName.startsWith("I") && (typeName.endsWith("Listener") || typeName.endsWith("Callback")) && simpleName.endsWith("Bridge")) {
                                referenceList.add(typeName.substring(1));
                            }
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

                        if (typeName != null && !referenceList.contains(typeName) && !clazz.getSimpleName().equals(typeName) && !typeName.startsWith("IAppContext")) {
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

                    for (Class subClass : allClassesSet) {
                        if (!subClass.getName().endsWith("Callback") && !subClass.getName().endsWith("Listener") && !subClass.getSimpleName().startsWith("IBase") && !subClass.getSimpleName().startsWith("IAppContext")) {
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
                        referenceList.add(serviceClass.getSimpleName().substring(1) + "Bridge");
                    }
                    referenceList.add("IAdaptiveRPGroup");
                    referenceList.add(clazz.getSimpleName());
                } else {
                    referenceList.add(clazz.getSimpleName());
                    referenceList.add("APIRequest");
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
                }
            }


            println("module Adaptive {");
            printlnGlobal();

            startCommentGlobal(5);
            printlnGlobal(8, javaClass.getComment());
            printlnGlobal();
            for (DocletTag t : javaClass.getTags()) {
                printlnGlobal(8, "@" + t.getName() + " " + t.getValue());
            }
            endCommentGlobal(5);
            if (clazz.getSimpleName().startsWith("IBase") || clazz.getSimpleName().startsWith("IAppRegistry")) {
                printlnGlobal(5, "export class " + simpleName + " implements " + clazz.getSimpleName() + " {");

                if (clazz.getSimpleName().startsWith("IAppRegistry")) {

                    printlnGlobal();
                    startCommentGlobal(10);
                    printlnGlobal(13, "Singleton instance of AppRegistry.");
                    endCommentGlobal(10);
                    printlnGlobal(10, "private static instance : IAppRegistry = null;");
                    printlnGlobal();
                    printlnGlobal(10, "public static getInstance() : IAppRegistry {");
                    printlnGlobal(15, "if (AppRegistryBridge.instance === null) {");
                    printlnGlobal(20, "AppRegistryBridge.instance = new AppRegistryBridge();");
                    printlnGlobal(15, "}");
                    printlnGlobal(15, "return AppRegistryBridge.instance;");
                    printlnGlobal(10, "}");
                    printlnGlobal();
                    startCommentGlobal(10);
                    printlnGlobal(13, "Singleton instances of Bridges.");
                    endCommentGlobal(10);
                    for (Class c : serviceClasses) {
                        printlnGlobal(10, "private static instance" + c.getSimpleName().substring(1) + " : " + c.getSimpleName() + " = null;");
                    }
                    printlnGlobal();

                    for (Class c : serviceClasses) {
                        startCommentGlobal(10);
                        printlnGlobal(13, "Obtain a reference to the " + c.getSimpleName() + " bridge.");
                        printlnGlobal();
                        printlnGlobal(13, "@return " + c.getSimpleName() + " bridge instance.");
                        endCommentGlobal(10);
                        printlnGlobal(10, "public get" + c.getSimpleName().substring(1) + "Bridge() : " + c.getSimpleName() + " {");
                        printlnGlobal(15, "if (AppRegistryBridge.instance" + c.getSimpleName().substring(1) + " === null) {");
                        printlnGlobal(20, "AppRegistryBridge.instance" + c.getSimpleName().substring(1) + "= new " + c.getSimpleName().substring(1) + "Bridge();");
                        printlnGlobal(15, "}");
                        printlnGlobal(15, "return AppRegistryBridge.instance" + c.getSimpleName().substring(1) + ";");
                        printlnGlobal(10, "}");
                        printlnGlobal();
                    }
                    startCommentGlobal(10);
                    printlnGlobal(13, "Return the API version for the given interface.");
                    endCommentGlobal(10);
                    printlnGlobal(10, "public getAPIVersion() : string {");
                    printlnGlobal(15, "return \"" + getGenerationTagVersion() + "\"");
                    printlnGlobal(10, "}");
                }
            } else {
                println(5, "export class " + simpleName + " extends " + clazz.getInterfaces()[0].getSimpleName().substring(1) + "Bridge implements " + clazz.getSimpleName() + " {");
                printlnSF(5, "class " + simpleName + " extends " + clazz.getInterfaces()[0].getSimpleName().substring(1) + "Bridge implements " + clazz.getSimpleName() + " {");
            }

            List<Method> methodList = new ArrayList<>();
            List<JavaMethod> methodListDocs = new ArrayList<>();

            for (Method m : clazz.getDeclaredMethods()) {
                methodList.add(m);
            }
            for (JavaMethod m : javaClass.getMethods()) {
                methodListDocs.add(m);
            }

            methodList.sort(new Comparator<Method>() {
                @Override
                public int compare(Method o1, Method o2) {
                    String first = o1.getName() + o1.getParameterCount();
                    for (Parameter p : o1.getParameters()) {
                        first += p.getName();
                    }

                    String second = o2.getName() + o2.getParameterCount();
                    for (Parameter p : o2.getParameters()) {
                        second += p.getName();
                    }
                    return first.compareTo(second);
                }
            });
            methodListDocs.sort(new Comparator<JavaMethod>() {
                @Override
                public int compare(JavaMethod o1, JavaMethod o2) {
                    String first = o1.getName() + o1.getParameters().size();
                    for (JavaParameter p : o1.getParameters()) {
                        first += p.getName();
                    }

                    String second = o2.getName() + o2.getParameters().size();
                    for (JavaParameter p : o2.getParameters()) {
                        second += p.getName();
                    }
                    return first.compareTo(second);
                }
            });

            if (clazz.getSimpleName().equals("IAppRegistry")) {
                // TODO: singletons
            } else {
                if (clazz.getSimpleName().startsWith("IBase")) {
                    printlnGlobal();
                    startCommentGlobal(10);
                    printlnGlobal(13, "Group of API.");
                    endCommentGlobal(10);
                    printlnGlobal(10, "apiGroup : IAdaptiveRPGroup;");
                    printlnGlobal();

                    startCommentGlobal(10);
                    printlnGlobal(13, "Default constructor.");
                    endCommentGlobal(10);
                    printlnGlobal(10, "constructor() {");
                    printlnGlobal(15, "this.apiGroup = IAdaptiveRPGroup." + getInterfaceGroup(clazz) + ";");
                    printlnGlobal(10, "}");
                    printlnGlobal();

                    startCommentGlobal(10);
                    printlnGlobal(13, "Return the API group for the given interface.");
                    endCommentGlobal(10);
                    printlnGlobal(10, "getAPIGroup() : IAdaptiveRPGroup {");
                    printlnGlobal(15, "return this.apiGroup;");
                    printlnGlobal(10, "}");
                    printlnGlobal();

                    startCommentGlobal(10);
                    printlnGlobal(13, "Return the API version for the given interface.");
                    endCommentGlobal(10);
                    printlnGlobal(10, "getAPIVersion() : string {");
                    printlnGlobal(15, "return \"" + getGenerationTagVersion() + "\"");
                    printlnGlobal(10, "}");
                } else {
                    printlnGlobal();
                    startCommentGlobal(10);
                    printlnGlobal(13, "Default constructor.");
                    endCommentGlobal(10);
                    printlnGlobal(10, "constructor() {");
                    printlnGlobal(15, "super();");
                    printlnGlobal(10, "}");

                    List<Method> methodUniqueList = new ArrayList<>();
                    List<Method> methodOverloadedList = new ArrayList<>();
                    List<JavaMethod> methodUniqueListDocs = new ArrayList<>();
                    List<JavaMethod> methodOverloadedListDocs = new ArrayList<>();
                    String currentMethodName = null;
                    for (int j = 0; j < methodList.size(); j++) {
                        Method m = methodList.get(j);
                        JavaMethod md = methodListDocs.get(j);
                        int count = 0;
                        for (Method m1 : methodList) {
                            if (m1.getName().equals(m.getName())) {
                                count++;
                            }
                        }
                        if (count == 1) {
                            methodUniqueList.add(m);
                            methodUniqueListDocs.add(md);
                        } else {
                            methodOverloadedList.add(m);
                            methodOverloadedListDocs.add(md);
                        }
                    }

                    for (int j = 0; j < methodUniqueList.size(); j++) {

                        Method m = methodUniqueList.get(j);
                        currentMethodName = m.getName();
                        JavaMethod md = methodUniqueListDocs.get(j);
                        printlnGlobal();

                        startCommentGlobal(10);
                        printlnGlobal(13, md.getComment());
                        printlnGlobal();
                        for (DocletTag t : md.getTags()) {
                            printlnGlobal(13, "@" + t.getName() + " " + t.getValue());
                        }
                        endCommentGlobal(10);
                        printGlobal(10, m.getName() + "(");
                        for (int i = 0; i < m.getParameterCount(); i++) {
                            Parameter p = m.getParameters()[i];
                            printGlobal(p.getName() + " : " + convertJavaToNativeType(p.getType()));
                            if (i < m.getParameterCount() - 1) {
                                printGlobal(", ");
                            }
                        }
                        printGlobal(") : ");
                        if (m.getReturnType().equals(Void.TYPE)) {
                            printlnGlobal("void {");
                        } else {
                            printlnGlobal(convertJavaToNativeType(m.getReturnType()) + " {");
                        }

                        implementHandler(m,simpleName,clazz,currentMethodName);

                        printlnGlobal(10, "}");
                    }

                    for (int j = 0; j < methodOverloadedList.size(); j++) {
                        Method m = methodOverloadedList.get(j);
                        currentMethodName = m.getName();
                        JavaMethod md = methodOverloadedListDocs.get(j);
                        printlnGlobal();

                        startCommentGlobal(10);
                        printlnGlobal(13, md.getComment());
                        printlnGlobal();
                        for (DocletTag t : md.getTags()) {
                            printlnGlobal(13, "@" + t.getName() + " " + t.getValue());
                        }
                        endCommentGlobal(10);

                        currentMethodName = m.getName();
                        printGlobal(10, m.getName());
                        if (m.getParameterCount() == 0) {
                            printGlobal("(");
                        } else {
                            currentMethodName+= "_";
                            printGlobal("_");
                            for (int i = 0; i < m.getParameterCount(); i++) {
                                Parameter p = m.getParameters()[i];
                                currentMethodName+=p.getName();
                                printGlobal(p.getName());
                                if (i < m.getParameterCount() - 1) {
                                    printGlobal("_");
                                    currentMethodName+="_";
                                }
                            }
                            printGlobal("(");
                        }

                        for (int i = 0; i < m.getParameterCount(); i++) {
                            Parameter p = m.getParameters()[i];
                            printGlobal(p.getName() + " : " + convertJavaToNativeType(p.getType()));
                            if (i < m.getParameterCount() - 1) {
                                printGlobal(", ");
                            }
                        }
                        printGlobal(") : ");
                        if (m.getReturnType().equals(Void.TYPE)) {
                            printlnGlobal("void {");
                        } else {
                            printlnGlobal(convertJavaToNativeType(m.getReturnType()) + " {");
                        }

                        implementHandler(m, simpleName, clazz, currentMethodName);

                        printlnGlobal(10, "}");
                    }
                }
            }
            printlnGlobal(5, "}");

            println("}");
        }
    }

    private void implementHandler(Method m, String simpleName, Class clazz, String currentMethodName) {
        printlnGlobal(15, "// Create and populate API request.");
        printlnGlobal(15, "var arParams : string[] = [];");
        String cblsName = null;
        String cblsType = null;
        for (Parameter p : m.getParameters()) {
            if (!p.getType().getSimpleName().endsWith("Listener") && !p.getType().getSimpleName().endsWith("Callback")) {
                printlnGlobal(15, "arParams.push(JSON.stringify(" + p.getName() + "));");
            } else {
                cblsName = p.getName();
                cblsType = p.getType().getSimpleName();
            }
        }
        printlnGlobal(15, "var ar : APIRequest = new APIRequest(\"" + clazz.getSimpleName() + "\",\"" + currentMethodName + "\",arParams, " + (cblsName != null ? cblsName + ".getId()" : "-1 /* = synchronous call */") + ");");
        printlnGlobal(15, "// Create and send JSON request.");
        printlnGlobal(15, "var xhr = new XMLHttpRequest();");
        printlnGlobal(15, "xhr.open(\"POST\", bridgePath, false);");
        // Manage callbacks
        if (cblsType != null && cblsType.endsWith("Callback")) {
            printlnGlobal(15, "// Add callback reference to local dictionary.");
            printlnGlobal(15, "registered" + cblsType.substring(1) + ".add(\"\"+" + cblsName + ".getId(), " + cblsName + ");");
        }
        printlnGlobal(15, "xhr.send(JSON.stringify(ar));");
        if (!m.getReturnType().equals(Void.TYPE)) {
            printlnGlobal(15, "// Prepare response.");
            if (m.getReturnType().isPrimitive()) {
                printGlobal(15, "var response : " + convertJavaToNativeType(m.getReturnType()) + " = ");
                if (m.getReturnType().equals(Boolean.TYPE)) {
                    printGlobal("false");
                } else if (m.getReturnType().equals(Integer.TYPE) || m.getReturnType().equals(Byte.TYPE) || m.getReturnType().equals(Long.TYPE) || m.getReturnType().equals(Double.TYPE) || m.getReturnType().equals(Float.TYPE)) {
                    printGlobal("-1");
                } else if (m.getReturnType().equals(Character.TYPE)) {
                    printGlobal("null");
                } else {
                    printGlobal("PLEASE DONATE. Unsupported.");
                }
                printlnGlobal(";");
            } else {
                printlnGlobal(15, "var response : " + convertJavaToNativeType(m.getReturnType()) + " = null;");
            }
        }
        printlnGlobal(15, "// Check response.");
        printlnGlobal(15, "if (xhr.status == 200) {");
        // Manage listeners
        if (m.getName().endsWith("Listener") || m.getName().endsWith("Listeners")) {
            if (m.getName().startsWith("add")) {
                printlnGlobal(20, "// Add listener reference to local dictionary.");
                printlnGlobal(20, "registered" + cblsType.substring(1) + ".add(\"\"+" + cblsName + ".getId(), " + cblsName + ");");
            }
            if (m.getName().startsWith("remove")) {
                if (m.getParameterCount() == 0) {
                    printlnGlobal(20, "// Remove all listeners references from local dictionary.");
                    printlnGlobal(20, "var keys = registered" + m.getName().substring(6, m.getName().length() - 1) + ".keys();");
                    printlnGlobal(20, "for (var key in keys) {");
                    printlnGlobal(25, "registered" + m.getName().substring(6, m.getName().length() - 1) + ".remove(key);");
                    printlnGlobal(20, "}");
                } else {
                    printlnGlobal(20, "// Remove listener reference from local dictionary.");
                    printlnGlobal(20, "registered" + cblsType.substring(1) + ".remove(\"\"+" + cblsName + ".getId());");
                }
            }
        }

        // Manage returns
        if (!m.getReturnType().equals(Void.TYPE)) {
            printlnGlobal(20, "// Process response.");
            printlnGlobal(20, "if (xhr.responseText != null && xhr.responseText != '') {");
            printlnGlobal(25, "response = JSON.parse(xhr.responseText);");
            printlnGlobal(20, "} else {");
            printlnGlobal(25, "console.error(\"ERROR: '" + simpleName + "." + currentMethodName + "' incorrect response received.\");");
            // Manage callbacks
            if (cblsType != null && cblsType.endsWith("Callback")) {
                printlnGlobal(25, "// Unknown error - remove from dictionary and notify callback.");
                printlnGlobal(25, "registered" + cblsType.substring(1) + ".remove(\"\"+" + cblsName + ".getId());");
                printlnGlobal(25, cblsName+".onError("+cblsType+"Error.Unknown)");
            }
            printlnGlobal(20, "}");
        } else {
            printlnGlobal(20, "// Result void - All OK, nothing else todo.");
        }
        printlnGlobal(15, "} else {");
        printlnGlobal(20, "console.error(\"ERROR: \"+xhr.status+\" sending '" + simpleName + "." + currentMethodName + "' request.\");");
        if (cblsType != null && cblsType.endsWith("Callback")) {
            printlnGlobal(20, "// Unknown error - remove from dictionary and notify callback.");
            printlnGlobal(20, "registered" + cblsType.substring(1) + ".remove(\"\"+" + cblsName + ".getId());");
            printlnGlobal(20, cblsName+".onError("+cblsType+"Error.Unknown)");
        }
        printlnGlobal(15, "}");
        if (!m.getReturnType().equals(Void.TYPE)) {
            printlnGlobal(15, "return response;");
        }
    }

    @Override
    protected void createCallbackImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        simpleName = simpleName.substring(0, simpleName.length() - 4);

        List<String> referenceList = new ArrayList<>();
        if (clazz.getSimpleName().equals("IBaseCallback")) {
            referenceList.add("IAdaptiveRPGroup");
        } else {
            referenceList.add("BaseCallback");
            referenceList.add("CommonUtil");
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
        printlnGlobal();
        startComment(5);
        if (javaClass.getComment() != null && javaClass.getComment().length() > 0) {
            println(8, javaClass.getComment());
        }
        println(8, "Auto-generated implementation of " + clazz.getSimpleName() + " specification.");
        endComment(5);

        if (clazz.getSimpleName().equals("IBaseCallback")) {
            printlnGlobal(5, "export class " + simpleName + " implements " + clazz.getSimpleName() + " {");
            printlnGlobal();

            startCommentGlobal(10);
            printlnGlobal(13, "Unique id of callback.");
            endCommentGlobal(10);
            printlnGlobal(10, "id : number;");
            printlnGlobal();

            startCommentGlobal(10);
            printlnGlobal(13, "Group of API.");
            endCommentGlobal(10);
            printlnGlobal(10, "apiGroup : IAdaptiveRPGroup;");
            printlnGlobal();


            startCommentGlobal(10);
            printlnGlobal(13, "Constructor with callback id.");
            printlnGlobal();
            printlnGlobal(13, "@param id  The id of the callback.");
            endCommentGlobal(10);
            printlnGlobal(10, "constructor(id : number) {");
            printlnGlobal(15, "this.id = id;");
            printlnGlobal(15, "this.apiGroup = IAdaptiveRPGroup.Application;");
            printlnGlobal(10, "}");
            printlnGlobal();

            startCommentGlobal(10);
            printlnGlobal(13, "Get the listener id.");
            printlnGlobal(13, "@return long with the identifier of the callback.");
            endCommentGlobal(10);
            printlnGlobal(10, "getId() : number {");
            printlnGlobal(15, "return this.id;");
            printlnGlobal(10, "}");
            printlnGlobal();

            startCommentGlobal(10);
            printlnGlobal(13, "Return the API group for the given interface.");
            endCommentGlobal(10);
            printlnGlobal(10, "getAPIGroup() : IAdaptiveRPGroup {");
            printlnGlobal(15, "return this.apiGroup;");
            printlnGlobal(10, "}");
            printlnGlobal();

            startCommentGlobal(10);
            printlnGlobal(13, "Return the API version for the given interface.");
            endCommentGlobal(10);
            printlnGlobal(10, "getAPIVersion() : string {");
            printlnGlobal(15, "return \"" + getGenerationTagVersion() + "\"");
            printlnGlobal(10, "}");
        } else {
            List<Method> methodList = new ArrayList<>();
            for (Method m : clazz.getDeclaredMethods()) {
                methodList.add(m);
            }
            methodList.sort(new Comparator<Method>() {
                @Override
                public int compare(Method o1, Method o2) {
                    return (o1.getName() + o1.getParameterCount()).compareTo((o2.getName() + o2.getParameterCount()));
                }
            });

            printlnGlobal();
            startCommentGlobal(5);
            printlnGlobal(8, clazz.getSimpleName().substring(1) + " control dictionary.");
            endCommentGlobal(5);
            printlnGlobal(5, "export var registered" + clazz.getSimpleName().substring(1) + " = new Dictionary<" + clazz.getSimpleName() + ">([]);");
            printlnGlobal();
            startCommentGlobal(5);
            printlnGlobal(8, clazz.getSimpleName().substring(1) + " global callback handlers.");
            endCommentGlobal(5);
            for (Method m : methodList) {
                printGlobal(5, "export function handle" + clazz.getSimpleName().substring(1) + m.getName().substring(2) + "(id : number, ");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName() + " : " + convertJavaToNativeType(p.getType()));
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printlnGlobal(") : void {");

                printlnGlobal(10, "var callback : " + clazz.getSimpleName() + " = registered" + clazz.getSimpleName().substring(1) + "[\"\"+id];");
                printlnGlobal(10, "if (typeof callback === 'undefined' || callback == null) {");
                printlnGlobal(15, "console.error(\"ERROR: No callback with id \"+id+\" registered in registered" + clazz.getSimpleName().substring(1) + " dictionary.\");");
                printlnGlobal(10, "} else {");
                printlnGlobal(15, "registered" + clazz.getSimpleName().substring(1) + ".remove(\"\"+id);");
                printGlobal(15, "callback." + m.getName() + "(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName());
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printlnGlobal(");");
                printlnGlobal(10, "}");

                printlnGlobal(5, "}");
            }

            printlnGlobal();
            printlnGlobal(5, "export class " + simpleName + " extends BaseCallback implements " + clazz.getSimpleName() + " {");
            printlnGlobal();


            for (Method m : methodList) {
                printGlobal(10, m.getName() + "Function : (");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName() + " : " + convertJavaToNativeType(p.getType()));
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printlnGlobal(") => void;");
            }

            printlnGlobal();
            startCommentGlobal(10);
            printlnGlobal(13, "Constructor with anonymous handler functions for callback.");
            printlnGlobal();
            for (Method m : methodList) {
                printGlobal(13, "@param " + m.getName() + "Function Function receiving parameters of type: ");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(convertJavaToNativeType(p.getType()));
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printlnGlobal();
            }
            endCommentGlobal(10);
            printGlobal(10, "constructor(");
            for (int j = 0; j < methodList.size(); j++) {
                Method m = methodList.get(j);
                printGlobal(m.getName() + "Function : (");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName() + " : " + convertJavaToNativeType(p.getType()));

                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printGlobal(") => void");
                if (j < methodList.size() - 1) {
                    printGlobal(", ");
                }
            }

            printlnGlobal(") {");
            printlnGlobal(15, "super(++registeredCounter);");
            for (Method m : methodList) {
                printlnGlobal(15, "if (" + m.getName() + "Function == null) {");
                printlnGlobal(20, "console.error(\"ERROR: " + simpleName + " " + m.getName() + "Function is not defined.\");");
                printlnGlobal(15, "} else {");
                printlnGlobal(20, "this." + m.getName() + "Function = " + m.getName() + "Function;");
                printlnGlobal(15, "}");
            }
            printlnGlobal(10, "}");
        }
        printlnGlobal();

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
                startCommentGlobal(10);
                printlnGlobal(13, javaMethods.get(m).getComment());
                printlnGlobal();
                for (DocletTag tag : javaMethods.get(m).getTags()) {
                    printlnGlobal(13, "@" + tag.getName() + " " + tag.getValue());
                }
                endCommentGlobal(10);
                printGlobal(10, "public ");
                printGlobal(m.getName() + "(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName());
                    printGlobal(" : " + convertJavaToNativeType(p.getType()));
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printGlobal(") ");

                if (m.getReturnType().equals(Void.TYPE)) {
                    printlnGlobal(": void {");
                } else {
                    printlnGlobal(": " + convertJavaToNativeType(m.getReturnType()) + " {");
                }

                printlnGlobal(15, "if (typeof this." + m.getName() + "Function === 'undefined' || this." + m.getName() + "Function == null) {");
                printlnGlobal(20, "console.warn(\"WARNING: " + simpleName + " contains a null reference to " + m.getName() + "Function.\");");
                printlnGlobal(15, "} else {");
                printGlobal(20, "this." + m.getName() + "Function(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName());
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printlnGlobal(");");
                printlnGlobal(15, "}");
                printlnGlobal(10, "}");
                printlnGlobal();
            }
        }
        printlnGlobal(5, "}");
        println("}");
    }

    @Override
    protected void createListenerImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        simpleName = simpleName.substring(0, simpleName.length() - 4);
        List<String> referenceList = new ArrayList<>();
        if (clazz.getSimpleName().equals("IBaseListener")) {
            referenceList.add("IAdaptiveRPGroup");
        } else {
            referenceList.add("BaseListener");
            referenceList.add("CommonUtil");
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
            printlnGlobal(5, "export class " + simpleName + " implements " + clazz.getSimpleName() + " {");
            printlnGlobal();

            startCommentGlobal(10);
            printlnGlobal(13, "Unique id of listener.");
            endCommentGlobal(10);
            printlnGlobal(10, "id : number;");
            printlnGlobal();

            startCommentGlobal(10);
            printlnGlobal(13, "Group of API.");
            endCommentGlobal(10);
            printlnGlobal(10, "apiGroup : IAdaptiveRPGroup;");
            printlnGlobal();


            startCommentGlobal(10);
            printlnGlobal(13, "Constructor with listener id.");
            printlnGlobal();
            printlnGlobal(13, "@param id  The id of the listener.");
            endCommentGlobal(10);
            printlnGlobal(10, "constructor(id : number) {");
            printlnGlobal(15, "this.id = id;");
            printlnGlobal(15, "this.apiGroup = IAdaptiveRPGroup.Application;");
            printlnGlobal(10, "}");
            printlnGlobal();

            startCommentGlobal(10);
            printlnGlobal(13, "Get the listener id.");
            printlnGlobal(13, "@return long with the identifier of the listener.");
            endCommentGlobal(10);
            printlnGlobal(10, "getId() : number {");
            printlnGlobal(15, "return this.id;");
            printlnGlobal(10, "}");
            printlnGlobal();

            startCommentGlobal(10);
            printlnGlobal(13, "Return the API group for the given interface.");
            endCommentGlobal(10);
            printlnGlobal(10, "getAPIGroup() : IAdaptiveRPGroup {");
            printlnGlobal(15, "return this.apiGroup;");
            printlnGlobal(10, "}");
            printlnGlobal();

            startCommentGlobal(10);
            printlnGlobal(13, "Return the API version for the given interface.");
            endCommentGlobal(10);
            printlnGlobal(10, "getAPIVersion() : string {");
            printlnGlobal(15, "return \"" + getGenerationTagVersion() + "\"");
            printlnGlobal(10, "}");

        } else {

            List<Method> methodList = new ArrayList<>();
            for (Method m : clazz.getDeclaredMethods()) {
                methodList.add(m);
            }
            methodList.sort(new Comparator<Method>() {
                @Override
                public int compare(Method o1, Method o2) {
                    return (o1.getName() + o1.getParameterCount()).compareTo((o2.getName() + o2.getParameterCount()));
                }
            });

            printlnGlobal();
            startCommentGlobal(5);
            printlnGlobal(8, clazz.getSimpleName().substring(1) + " control dictionary.");
            endCommentGlobal(5);
            printlnGlobal(5, "export var registered" + clazz.getSimpleName().substring(1) + " = new Dictionary<" + clazz.getSimpleName() + ">([]);");
            printlnGlobal();
            startCommentGlobal(5);
            printlnGlobal(8, clazz.getSimpleName().substring(1) + " global listener handlers.");
            endCommentGlobal(5);
            for (Method m : methodList) {
                printGlobal(5, "export function handle" + clazz.getSimpleName().substring(1) + m.getName().substring(2) + "(id : number, ");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName() + " : " + convertJavaToNativeType(p.getType()));
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printlnGlobal(") : void {");

                printlnGlobal(10, "var listener : " + clazz.getSimpleName() + " = registered" + clazz.getSimpleName().substring(1) + "[\"\"+id];");
                printlnGlobal(10, "if (typeof listener === 'undefined' || listener == null) {");
                printlnGlobal(15, "console.error(\"ERROR: No listener with id \"+id+\" registered in registered" + clazz.getSimpleName().substring(1) + " dictionary.\");");
                printlnGlobal(10, "} else {");
                printGlobal(15, "listener." + m.getName() + "(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName());
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printlnGlobal(");");
                printlnGlobal(10, "}");

                printlnGlobal(5, "}");
            }

            printlnGlobal();
            printlnGlobal(5, "export class " + simpleName + " extends BaseListener implements " + clazz.getSimpleName() + " {");
            printlnGlobal();


            for (Method m : methodList) {
                printGlobal(10, m.getName() + "Function : (");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName() + " : " + convertJavaToNativeType(p.getType()));
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printlnGlobal(") => void;");
            }

            printlnGlobal();
            startCommentGlobal(10);
            printlnGlobal(13, "Constructor with anonymous handler functions for listener.");
            printlnGlobal();
            for (Method m : methodList) {
                printGlobal(13, "@param " + m.getName() + "Function Function receiving parameters of type: ");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(convertJavaToNativeType(p.getType()));
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printlnGlobal();
            }
            endCommentGlobal(10);
            printGlobal(10, "constructor(");
            for (int j = 0; j < methodList.size(); j++) {
                Method m = methodList.get(j);
                printGlobal(m.getName() + "Function : (");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName() + " : " + convertJavaToNativeType(p.getType()));

                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printGlobal(") => void");
                if (j < methodList.size() - 1) {
                    printGlobal(", ");
                }
            }

            printlnGlobal(") {");
            printlnGlobal(15, "super(++registeredCounter);");
            for (Method m : methodList) {
                printlnGlobal(15, "if (" + m.getName() + "Function == null) {");
                printlnGlobal(20, "console.error(\"ERROR: " + simpleName + " " + m.getName() + "Function is not defined.\");");
                printlnGlobal(15, "} else {");
                printlnGlobal(20, "this." + m.getName() + "Function = " + m.getName() + "Function;");
                printlnGlobal(15, "}");
            }
            printlnGlobal(10, "}");
        }
        printlnGlobal();

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
                startCommentGlobal(10);
                printlnGlobal(13, javaMethods.get(m).getComment());
                printlnGlobal();
                for (DocletTag tag : javaMethods.get(m).getTags()) {
                    printlnGlobal(13, "@" + tag.getName() + " " + tag.getValue());
                }
                endCommentGlobal(10);
                printGlobal(10, "public ");
                printGlobal(m.getName() + "(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName());
                    printGlobal(" : " + convertJavaToNativeType(p.getType()));
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printGlobal(") ");

                if (m.getReturnType().equals(Void.TYPE)) {
                    printlnGlobal(": void {");
                } else {
                    printlnGlobal(": " + convertJavaToNativeType(m.getReturnType()) + " {");
                }

                printlnGlobal(15, "if (typeof this." + m.getName() + "Function === 'undefined' || this." + m.getName() + "Function == null) {");
                printlnGlobal(20, "console.warn(\"WARNING: " + simpleName + " contains a null reference to " + m.getName() + "Function.\");");
                printlnGlobal(15, "} else {");
                printGlobal(20, "this." + m.getName() + "Function(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    printGlobal(p.getName());
                    if (i < m.getParameterCount() - 1) {
                        printGlobal(", ");
                    }
                }
                printlnGlobal(");");
                printlnGlobal(15, "}");
                printlnGlobal(10, "}");
                printlnGlobal();
            }
        }
        printlnGlobal(5, "}");
        println("}");
    }

    @Override
    protected void declareInterfaceMethods(String simpleName, Class clazz, List<Method> _interfaceMethods, List<JavaMethod> _interfaceMethodsDoc) {
        List<Method> methodUniqueList = new ArrayList<>();
        List<Method> methodOverloadedList = new ArrayList<>();
        List<JavaMethod> methodUniqueListDocs = new ArrayList<>();
        List<JavaMethod> methodOverloadedListDocs = new ArrayList<>();
        for (int j = 0; j < _interfaceMethods.size(); j++) {
            Method m = _interfaceMethods.get(j);
            JavaMethod md = _interfaceMethodsDoc.get(j);
            int count = 0;
            for (Method m1 : _interfaceMethods) {
                if (m1.getName().equals(m.getName())) {
                    count++;
                }
            }
            if (count == 1) {
                methodUniqueList.add(m);
                methodUniqueListDocs.add(md);
            } else {
                methodOverloadedList.add(m);
                methodOverloadedListDocs.add(md);
            }
        }


        if (!clazz.getSimpleName().startsWith("IAppContext")) {

            if (clazz.getSimpleName().startsWith("IBaseListener") || clazz.getSimpleName().startsWith("IBaseCallback")) {
                printlnGlobal();
                startCommentGlobal(10);
                printlnGlobal(13, "Retrieve unique id of callback/listener.");
                printlnGlobal();
                printlnGlobal(13, "@return Callback/listener unique id.");
                endCommentGlobal(10);
                printlnGlobal(10, "getId() : number;");
                printlnGlobal();
            }
            for (Method method : methodUniqueList) {
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
                        startCommentSF(10);
                        println(13, "Returns a reference to the registered " + serviceClass.getSimpleName().substring(1) + "Bridge.");
                        println();
                        println(13, "@return " + serviceClass.getSimpleName().substring(1) + "Bridge reference or null if a bridge of this type is not registered.");
                        printlnSF(13, "Returns a reference to the registered " + serviceClass.getSimpleName().substring(1) + "Bridge.");
                        printlnSF();
                        printlnSF(13, "@return " + serviceClass.getSimpleName().substring(1) + "Bridge reference or null if a bridge of this type is not registered.");
                        endComment(10);
                        endCommentSF(10);
                        println(10, "get" + serviceClass.getSimpleName().substring(1) + "Bridge() : " + serviceClass.getSimpleName() + ";");
                        println();
                        printlnSF(10, "get" + serviceClass.getSimpleName().substring(1) + "Bridge() : " + serviceClass.getSimpleName() + ";");
                        printlnSF();
                    }
                    startCommentGlobal(10);
                    printlnGlobal(13, "Return the API version for the given interface.");
                    endCommentGlobal(10);
                    printlnGlobal(10, "getAPIVersion() : string;");
                } else {
                    if (!clazz.getSimpleName().equals("IAppRegistry")) {
                        startComment(10);
                        startCommentSF(10);
                        JavaMethod javaMethod = null;
                        for (JavaMethod m : methodUniqueListDocs) {
                            if (m.getName().equals(method.getName()) && m.getParameters().size() == method.getParameterCount()) {
                                javaMethod = m;
                                break;
                            }
                        }
                        if (javaMethod != null) {
                            println(13, javaMethod.getComment());
                            printlnSF(13, javaMethod.getComment());
                            for (DocletTag tag : javaMethod.getTags()) {
                                println(13, "@" + tag.getName() + " " + tag.getValue());
                                printlnSF(13, "@" + tag.getName() + " " + tag.getValue());
                            }
                        }
                        endComment(10);
                        print(10, method.getName());
                        print("(");
                        endCommentSF(10);
                        printSF(10, method.getName());
                        printSF(0, "(");
                        for (int i = 0; i < method.getParameterCount(); i++) {
                            Parameter p = method.getParameters()[i];
                            print(p.getName());
                            print(":");
                            print(convertJavaToNativeType(p.getType()));
                            printSF(0, p.getName());
                            printSF(0, ":");
                            printSF(0, convertJavaToNativeType(p.getType()));
                            if (i < method.getParameterCount() - 1) {
                                print(", ");
                                printSF(0, ", ");
                            }
                        }
                        print(")");
                        printSF(0, ")");

                        if (!method.getReturnType().equals(Void.TYPE)) {
                            print(" : ");
                            print(convertJavaToNativeType(method.getReturnType()));
                            printSF(0, " : ");
                            printSF(0, convertJavaToNativeType(method.getReturnType()));
                        }
                        println(";");
                        printlnSF(0, ";");
                    }
                }
            }

            for (Method method : methodOverloadedList) {
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
                        startCommentSF(10);
                        println(13, "Returns a reference to the registered " + serviceClass.getSimpleName().substring(1) + "Bridge.");
                        println();
                        println(13, "@return " + serviceClass.getSimpleName().substring(1) + "Bridge reference or null if a bridge of this type is not registered.");
                        printlnSF(13, "Returns a reference to the registered " + serviceClass.getSimpleName().substring(1) + "Bridge.");
                        printlnSF();
                        printlnSF(13, "@return " + serviceClass.getSimpleName().substring(1) + "Bridge reference or null if a bridge of this type is not registered.");
                        endComment(10);
                        endCommentSF(10);
                        println(10, "get" + serviceClass.getSimpleName().substring(1) + "Bridge() : " + serviceClass.getSimpleName() + ";");
                        println();
                        printlnSF(10, "get" + serviceClass.getSimpleName().substring(1) + "Bridge() : " + serviceClass.getSimpleName() + ";");
                        printlnSF();
                    }
                    startCommentGlobal(10);
                    printlnGlobal(13, "Return the API version for the given interface.");
                    endCommentGlobal(10);
                    printlnGlobal(10, "getAPIVersion() : string;");
                } else {
                    if (!clazz.getSimpleName().equals("IAppRegistry")) {
                        startComment(10);
                        startCommentSF(10);
                        JavaMethod javaMethod = null;
                        for (JavaMethod m : methodOverloadedListDocs) {
                            if (m.getName().equals(method.getName()) && m.getParameters().size() == method.getParameterCount()) {
                                javaMethod = m;
                                break;
                            }
                        }
                        if (javaMethod != null) {
                            println(13, javaMethod.getComment());
                            printlnSF(13, javaMethod.getComment());
                            for (DocletTag tag : javaMethod.getTags()) {
                                println(13, "@" + tag.getName() + " " + tag.getValue());
                                printlnSF(13, "@" + tag.getName() + " " + tag.getValue());
                            }
                        }
                        endComment(10);
                        endCommentSF(10);

                        printGlobal(10, method.getName());
                        if (method.getParameterCount() == 0) {
                            printGlobal("(");
                        } else {
                            printGlobal("_");
                            for (int i = 0; i < method.getParameterCount(); i++) {
                                Parameter p = method.getParameters()[i];
                                printGlobal(p.getName());
                                if (i < method.getParameterCount() - 1) {
                                    printGlobal("_");
                                }
                            }
                            printGlobal("(");
                        }

                        for (int i = 0; i < method.getParameterCount(); i++) {
                            Parameter p = method.getParameters()[i];
                            print(p.getName());
                            print(":");
                            print(convertJavaToNativeType(p.getType()));
                            printSF(0, p.getName());
                            printSF(0, ":");
                            printSF(0, convertJavaToNativeType(p.getType()));
                            if (i < method.getParameterCount() - 1) {
                                print(", ");
                                printSF(0, ", ");
                            }
                        }
                        print(")");
                        printSF(0, ")");

                        if (!method.getReturnType().equals(Void.TYPE)) {
                            print(" : ");
                            print(convertJavaToNativeType(method.getReturnType()));
                            printSF(0, " : ");
                            printSF(0, convertJavaToNativeType(method.getReturnType()));
                        }
                        println(";");
                        printlnSF(0, ";");
                    }
                }
            }
        }
    }

    @Override
    protected void endInterface(String simpleName, Class clazz) {
        println(5, "}"); // Class
        if (!clazz.getSimpleName().startsWith("IAppContext")) indentPrintStreamSF.println(5, "}");
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
                        if (!typeName.startsWith("IAppContext")) {
                            referenceList.add(typeName);
                        }
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
                    if (!subClass.getName().endsWith("Callback") && !subClass.getName().endsWith("Listener") && !subClass.getSimpleName().startsWith("IBase") && !subClass.getSimpleName().startsWith("IAppContext")) {
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
                    if (!serviceClass.getSimpleName().startsWith("IAppContext")) {
                        referenceList.add(serviceClass.getSimpleName());
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
        if (!clazz.getSimpleName().startsWith("IAppContext")) startCommentSF(5);
        println(8, classComment);
        if (!clazz.getSimpleName().startsWith("IAppContext")) printlnSF(8, classComment);
        if (tagList.size() > 0) {
            println();
            if (!clazz.getSimpleName().startsWith("IAppContext")) printlnSF();
            for (DocletTag tag : tagList) {
                println(8, "@" + tag.getName() + " " + tag.getValue());
                if (!clazz.getSimpleName().startsWith("IAppContext"))
                    printlnSF(8, "@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(5);
        if (!clazz.getSimpleName().startsWith("IAppContext")) endCommentSF(5);
        if (clazz.isEnum()) {
            println(5, "export interface " + generateEnumClassName(clazz) + " {");
            if (!clazz.getSimpleName().startsWith("IAppContext"))
                printlnSF(5, "export interface " + generateEnumClassName(clazz) + " {");
        } else if (clazz.getInterfaces() != null && clazz.getInterfaces().length == 1) {
            println(5, "export interface " + simpleName + " extends " + clazz.getInterfaces()[0].getSimpleName() + " {");
            if (!clazz.getSimpleName().startsWith("IAppContext"))
                printlnSF(5, "export interface " + simpleName + " extends " + clazz.getInterfaces()[0].getSimpleName() + " {");
        } else {
            println(5, "export interface " + simpleName + " {");
            if (!clazz.getSimpleName().startsWith("IAppContext")) printlnSF(5, "export interface " + simpleName + " {");
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
            if (!clazz.getSimpleName().startsWith("IAppContext")) printSF(10, field.getName());
            if (!clazz.getSimpleName().startsWith("IAppContext")) printSF(0, " : ");
            if (!clazz.getSimpleName().startsWith("IAppContext")) printSF(0, convertJavaToNativeType(field.getType()));
            if (!clazz.getSimpleName().startsWith("IAppContext")) printlnSF(0, ";");
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
        startCommentSF(10);
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            println(13, getter.getComment());
            printlnSF(13, getter.getComment());
        } else {
            println(13, "Gets " + fieldByName.getComment());
            printlnSF(13, "Gets " + fieldByName.getComment());
        }
        println();
        printlnSF();
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            for (DocletTag tag : getter.getTags()) {
                println(13, "@" + tag.getName() + " " + tag.getValue());
                printlnSF(13, "@" + tag.getName() + " " + tag.getValue());
            }
        } else {
            println(13, "@return " + field.getName() + " " + fieldByName.getComment());
            printlnSF(13, "@return " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(10);
        endCommentSF(10);
        if (field.getType().equals(Boolean.class)) {
            println(10, "is" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
            printlnSF(10, "is" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
        } else {
            println(10, "get" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
            printlnSF(10, "get" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
        }

        println(15, "return this." + field.getName() + ";");
        printlnSF(15, "return this." + field.getName() + ";");
        println(10, "}");
        printlnSF(10, "}");
        println();
        printlnSF();
        /**
         * Setters
         */
        startComment(10);
        startCommentSF(10);
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            println(13, setter.getComment());
            printlnSF(13, setter.getComment());
        } else {
            println(13, "Sets " + fieldByName.getComment());
            printlnSF(13, "Sets " + fieldByName.getComment());
        }
        println();
        printlnSF();
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            for (DocletTag tag : setter.getTags()) {
                println(13, "@" + tag.getName() + " " + tag.getValue());
                printlnSF(13, "@" + tag.getName() + " " + tag.getValue());
            }
        } else {
            println(13, "@param " + field.getName() + " " + fieldByName.getComment());
            printlnSF(13, "@param " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(10);
        endCommentSF(10);
        println(10, "set" + fieldName + "(" + field.getName() + ": " + convertJavaToNativeType(field.getType()) + ") {");
        println(15, "this." + field.getName() + " = " + field.getName() + ";");
        println(10, "}");
        println();
        printlnSF(10, "set" + fieldName + "(" + field.getName() + ": " + convertJavaToNativeType(field.getType()) + ") {");
        printlnSF(15, "this." + field.getName() + " = " + field.getName() + ";");
        printlnSF(10, "}");
        printlnSF();
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
        startCommentSF(10);
        if (d.getComment() != null && d.getComment().trim().length() > 0) {
            println(13, d.getComment());
            printlnSF(13, d.getComment());
        } else {
            println(13, "Constructor.");
            printSF(13, "Constructor.");
        }
        if (d.getTags().size() > 0) {
            println();
            printlnSF();
        }
        for (DocletTag tag : d.getTags()) {
            println(13, "@" + tag.getName() + " " + tag.getValue());
            printlnSF(13, "@" + tag.getName() + " " + tag.getValue());
        }
        endComment(10);
        endCommentSF(10);

        print(10, "constructor(");
        printSF(10, "constructor(");
        for (int i = 0; i < c.getParameterCount(); i++) {
            Parameter p = c.getParameters()[i];
            print(p.getName() + ": " + convertJavaToNativeType(p.getType()));
            printSF(0, p.getName() + ": " + convertJavaToNativeType(p.getType()));
            if (i < c.getParameterCount() - 1) {
                print(", ");
                printSF(0, ", ");
            }
        }
        println(") {");
        printlnSF(0, ") {");

        if (clazz.getSuperclass().getSimpleName().equals("APIBean")) {
            println(15, "super();");
            printlnSF(15, "super();");
        } else if (!clazz.getSuperclass().equals(Object.class)) {
            print(15, "super(");
            printSF(15, "super(");
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
                    printSF(0, parameter.getName());
                }

            }
            println(");");
            printlnSF(0, ");");
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
                printlnSF(15, "this." + parameter.getName() + " = " + parameter.getName() + ";");
            }
        }
        println(10, "}");
        printlnSF(10, "}");
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

        indentPrintStreamSF.println();
        indentPrintStreamSF.println("}");
        indentPrintStreamSF.println("/**");
        indentPrintStreamSF.println(super.getSourceFooter());
        indentPrintStreamSF.println("*/");
        indentPrintStreamSF.flush();
        indentPrintStreamSF.close();
    }

    @Override
    protected void startGeneration() {
        if (currentFileSF == null) {
            currentFileSF = new File(getOutputRootDirectory(), "Adaptive.ts");
            if (currentFileSF.exists()) {
                currentFileSF.delete();
            }
            try {
                indentPrintStreamSF = new IndentPrintStream(new FileOutputStream(currentFileSF));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            indentPrintStreamSF.println("/**");
            indentPrintStreamSF.println(super.getSourceHeader());
            indentPrintStreamSF.println("*/");
            indentPrintStreamSF.println("module Adaptive {");
            indentPrintStreamSF.println();
        }
        /*
            Generate utility classes.
        */
        generateUtilClass("CommonUtil", Object.class);
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
            startCommentSF(10);
            println(13, fieldByName.getComment());
            printlnSF(13, fieldByName.getComment());
            endComment(10);
            endCommentSF(10);
        }
        println(10, field.getName() + " : " + convertJavaToNativeType(field.getType()) + ";");
        printlnSF(10, field.getName() + " : " + convertJavaToNativeType(field.getType()) + ";");
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
        indentPrintStreamSF.println(5, "}");
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
        startCommentSF(5);
        println(8, comment);
        printlnSF(8, comment);
        if (tagList.size() > 0) {
            println();
            printlnSF();
            for (DocletTag tag : tagList) {
                println(8, "@" + tag.getName() + " " + tag.getValue());
                printlnSF(8, "@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(5);
        endCommentSF(5);
        if (clazz.equals(Map.class)) {
            return;
        }
        if (clazz.isEnum()) {
            println(5, "export class " + generateEnumClassName(clazz) + " {");
            printlnSF(5, "export class " + generateEnumClassName(clazz) + " {");
        } else if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class)) {
            println(5, "export class " + simpleName + " extends " + clazz.getSuperclass().getSimpleName() + " {");
            printlnSF(5, "export class " + simpleName + " extends " + clazz.getSuperclass().getSimpleName() + " {");
        } else {
            println(5, "export class " + simpleName + " {");
            printlnSF(5, "export class " + simpleName + " {");
        }
    }

    private void printGlobal() {
        print("");
        printSF(0, "");
    }

    private void printGlobal(int indent, String value) {
        print(indent, value);
        printSF(indent, value);
    }

    private void printGlobal(String value) {
        print(value);
        printSF(0, value);
    }

    private void printlnGlobal() {
        println();
        printlnSF();
    }

    private void printlnGlobal(String value) {
        println(value);
        printlnSF(0, value);
    }

    private void printlnGlobal(int indent, String value) {
        println(indent, value);
        printlnSF(indent, value);
    }

    private void startCommentGlobal(int indent) {
        startComment(indent);
        startCommentSF(indent);
    }

    private void endCommentGlobal(int indent) {
        endComment(indent);
        endCommentSF(indent);
    }


    private void printSF(int indent, String value) {
        if (indentPrintStreamSF != null) {
            indentPrintStreamSF.print(indent, value);
        }
    }

    private void printSF(int indent) {
        this.printlnSF(indent, "");
    }

    private void printlnSF(int indent, String value) {
        if (indentPrintStreamSF != null) {
            indentPrintStreamSF.println(indent, value);
        }
    }

    private void printlnSF(int indent) {
        this.printlnSF(indent, "");
    }

    private void printlnSF() {
        this.printlnSF(0);
    }

    private void startCommentSF(int indent) {
        if (indentPrintStreamSF != null) {
            indentPrintStreamSF.println(indent, "/**");
        }
    }

    private void endCommentSF(int indent) {
        if (indentPrintStreamSF != null) {
            indentPrintStreamSF.println(indent, "*/");
        }
    }

    @Override
    protected void startClass(Class clazz) {
        if (clazz.getSimpleName().startsWith("IAppContext")) {
            indentPrintStream = new IndentPrintStream(new ByteArrayOutputStream());
        } else {
            currentFile = new File(getOutputRootDirectory(), clazz.getSimpleName() + ".ts");
            if (currentFile.exists()) {
                currentFile.delete();
            }
            try {
                indentPrintStream = new IndentPrintStream(new FileOutputStream(currentFile));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            this.arrayOfClasses.add(clazz.getSimpleName() + ".ts");
        }

        if (currentFileSF == null) {
            currentFileSF = new File(getOutputRootDirectory(), "Adaptive.ts");
            if (currentFileSF.exists()) {
                currentFileSF.delete();
            }
            try {
                indentPrintStreamSF = new IndentPrintStream(new FileOutputStream(currentFileSF));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            indentPrintStreamSF.println("/**");
            indentPrintStreamSF.println(super.getSourceHeader());
            indentPrintStreamSF.println("*/");
            indentPrintStreamSF.println("module Adaptive {");
            indentPrintStreamSF.println();
        }

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
        printlnSF();
        println(10, "constructor(public value:string){}");
        println(10, "toString(){return this.value;}");
        printlnSF(10, "constructor(public value:string){}");
        printlnSF(10, "toString(){return this.value;}");
        println();
        printlnSF();
        for (int i = 0; i < clazz.getDeclaredFields().length - 1; i++) {
            Field field = clazz.getDeclaredFields()[i];
            println(10, "static " + field.getName() + " = new " + generateEnumClassName(clazz) + "(\"" + field.getName() + "\");");
            printlnSF(10, "static " + field.getName() + " = new " + generateEnumClassName(clazz) + "(\"" + field.getName() + "\");");
        }
        println();
        printlnSF();
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
        if (className.equals("CommonUtil") && clazz.equals(Object.class)) {
            println("module Adaptive {");
            println();

            // Variables
            startCommentGlobal(5);
            printlnGlobal(8, "Global unique id for listeners and callbacks.");
            endCommentGlobal(5);
            printlnGlobal(5, "export var registeredCounter : number = 0;");
            printlnGlobal();

            startCommentGlobal(5);
            printlnGlobal(8, "Base url for for http/https JSON requests.");
            endCommentGlobal(5);
            printlnGlobal(5, "export var bridgePath : string = \"https://adaptiveapp\";");
            printlnGlobal();

            startCommentGlobal(5);
            printlnGlobal(8, "Utility class for Dictionary type support.");
            endCommentGlobal(5);
            // Dictionary
            printlnGlobal(5, "export interface IDictionary<V> {\n" +
                    "          add(key: string, value: V): void;\n" +
                    "          remove(key: string): void;\n" +
                    "          containsKey(key: string): boolean;\n" +
                    "          keys(): string[];\n" +
                    "          values(): V[];\n" +
                    "     }");
            printlnGlobal();
            printlnGlobal(5, "export class Dictionary<V> implements IDictionary<V>{\n" +
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
            printlnGlobal();
            println("}");

        } else {
            startBean(className, clazz, "Utility class of type " + clazz.getSimpleName(), new ArrayList<DocletTag>());
            println();
            printlnSF();
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
            printlnSF(10, "     /** Dictionary Definition **/\n" +
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
            printlnSF();
            endBean(className, clazz);
        }

        startComment(0);
        applyClassFooter(clazz, getSourceFooter());
        endComment(0);
        println();
        indentPrintStream.flush();
        indentPrintStream.close();
    }

}
