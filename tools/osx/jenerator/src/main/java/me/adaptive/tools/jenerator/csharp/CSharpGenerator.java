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
package me.adaptive.tools.jenerator.csharp;

import com.thoughtworks.qdox.model.*;
import me.adaptive.tools.jenerator.GeneratorBase;
import me.adaptive.tools.jenerator.utils.IndentPrintStream;
import org.reflections.Reflections;
import org.reflections.scanners.ResourcesScanner;
import org.reflections.scanners.SubTypesScanner;
import org.reflections.util.ClasspathHelper;
import org.reflections.util.ConfigurationBuilder;
import org.reflections.util.FilterBuilder;

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
public class CSharpGenerator extends GeneratorBase {

    private File currentFile;
    private IndentPrintStream indentPrintStream;
    private List<Class> enumClassList = new ArrayList<>();

    public CSharpGenerator(File outRootPath, List<Class> classList, List<JavaClass> sourceList) {
        super(outRootPath, classList, sourceList);
    }

    @Override
    protected void createDelegateImplementation(String className, Class clazz, JavaClass javaClass) {

    }

    @Override
    protected void endCustomClass(String className, Class clazz, JavaClass javaClass) {

    }

    @Override
    protected void startCustomClass(String className, Class clazz, JavaClass javaClass, boolean implementation) {

    }

    @Override
    protected void createHandlerImplementation(String simpleName, Class clazz, JavaClass javaClass) {

    }

    @Override
    protected void createCallbackImplementation(String simpleName, Class clazz, JavaClass javaClass) {

    }

    @Override
    protected void createListenerImplementation(String simpleName, Class clazz, JavaClass javaClass) {

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
                    println(13, "Returns a reference to the registered "+serviceClass.getSimpleName().substring(1)+"Handler.");
                    println();
                    println(13, "@return "+serviceClass.getSimpleName().substring(1)+"Handler reference or null if a handler of this type is not registered.");
                    endComment(10);
                    println(10, serviceClass.getSimpleName()+" Get"+serviceClass.getSimpleName().substring(1)+"Handler();");
                    println();
                }
            } else {
                startComment(10);
                JavaMethod javaMethod = null;
                for (JavaMethod m : interfaceMethodsDoc) {
                    if (m.getName().equals(method.getName()) && m.getParameters().size() == method.getParameterCount()) {
                        javaMethod = m;
                        break;
                    }
                }
                if (javaMethod != null) {
                    println(13, javaMethod.getComment());
                    for (DocletTag tag : javaMethod.getTags()) {
                        println(13, "@" + tag.getName() + " " + tag.getValue());
                    }
                }
                endComment(10);
                if (method.getReturnType().equals(Void.TYPE)) {
                    print(10, "void ");
                } else {
                    print(10, convertJavaToNativeType(method.getReturnType()) + " ");
                }
                print(camelCase(method.getName()));
                print("(");
                for (int i = 0; i < method.getParameterCount(); i++) {
                    Parameter p = method.getParameters()[i];
                    print(convertJavaToNativeType(p.getType()));
                    print(" ");
                    print(camelCase(p.getName()));
                    if (i < method.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                println(");");
                println();
            }
        }
    }

    private static String camelCase(Package _package) {
        StringBuffer out = new StringBuffer();
        boolean capitalize = true;
        // Strip first part of package name
        for (char c : _package.getName().substring(_package.getName().indexOf('.') + 1).toCharArray()) {
            if (capitalize) {
                out.append(Character.toUpperCase(c));
                capitalize = false;
            } else {
                if (c == '.') {
                    capitalize = true;
                }
                out.append(c);
            }
        }
        return out.toString();
    }

    private static String camelCase(String name) {
        if (name != null && name.trim().length() > 0) {
            return Character.toUpperCase(name.charAt(0)) + name.substring(1);
        } else {
            return name;
        }
    }

    @Override
    protected void endInterface(String simpleName, Class clazz) {
        println(5, "}");
        println("}");
    }

    @Override
    protected void startInterface(String simpleName, Class clazz, String classComment, List<DocletTag> tagList) {
        println("using System;");
        println();
        println("namespace " + camelCase(clazz.getPackage()));
        println("{");
        startComment(5);
        println(8, classComment);
        if (tagList.size() > 0) {
            println();
            for (DocletTag tag : tagList) {
                println(8, "@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(5);
        if (clazz.isEnum()) {
            println(5, "public enum " + generateEnumClassName(clazz) + " {");
        } else if (clazz.getInterfaces() != null && clazz.getInterfaces().length > 0) {
            print(5, "public interface " + simpleName + " : ");
            for (int i = 0; i < clazz.getInterfaces().length; i++) {
                Class iClass = clazz.getInterfaces()[i];
                print(iClass.getSimpleName());
                if (i < clazz.getInterfaces().length - 1) {
                    print(", ");
                }
            }
            println(" {");
        } else {
            println(5, "public interface " + simpleName + " {");
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
        /*
        for (Field field : clazz.getDeclaredFields()) {
            print(5, convertJavaToNativeType(field.getType()));
            print(" ");
            if (field.getName().equals("API_VERSION")) {
                print(camelCase(field.getName()));
                print(" = ");
                print("\"TO_BE_REPLACED\"");
                println(";");
            }
        }
        */
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
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            println(13, getter.getComment());
        } else {
            println(13, "Gets " + fieldByName.getComment());
        }
        println();
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            for (DocletTag tag : getter.getTags()) {
                println(13, "@" + tag.getName() + " " + camelCase(tag.getValue()));
            }
        } else {
            println(13, "@return " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(10);
        if (field.getType().equals(Boolean.class)) {
            println(10, "public " + convertJavaToNativeType(field.getType()) + " Is" + fieldName + "() {");
        } else {
            println(10, "public " + convertJavaToNativeType(field.getType()) + " Get" + fieldName + "() {");
        }

        println(15, "return this." + camelCase(field.getName()) + ";");
        println(10, "}");
        println();
        /**
         * Setters
         */
        startComment(10);
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            println(13, setter.getComment());
        } else {
            println(13, "Sets " + fieldByName.getComment());
        }
        println();
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            for (DocletTag tag : setter.getTags()) {
                println(13, "@" + tag.getName() + " " + camelCase(tag.getValue()));
            }
        } else {
            println(13, "@param " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(10);
        println(10, "public void Set" + fieldName + "(" + convertJavaToNativeType(field.getType()) + " " + camelCase(field.getName()) + ") {");
        println(15, "this." + camelCase(field.getName()) + " = " + camelCase(field.getName()) + ";");
        println(10, "}");
        println();
    }

    @Override
    protected void endConstructors(String simpleName, Class clazz) {

    }

    @Override
    protected void declareConstructors(String simpleName, Class clazz, List<Constructor> javaConstructors, List<JavaConstructor> docConstructors) {
        for (int i = 0; i < javaConstructors.size(); i++) {
            Constructor c = javaConstructors.get(i);
            JavaConstructor d = docConstructors.get(i);
            println();

            startComment(10);
            if (d.getComment() != null && d.getComment().trim().length() > 0) {
                println(13, d.getComment());
            } else {
                println(13, "Convenience constructor.");
            }
            if (d.getTags().size() > 0) {
                println();
            }
            for (DocletTag tag : d.getTags()) {
                println(13, "@" + tag.getName() + " " + camelCase(tag.getValue()));
            }
            endComment(10);


            print(10, "public " + clazz.getSimpleName() + "(");
            for (int j = 0; j < c.getParameters().length; j++) {
                Parameter parameter = c.getParameters()[j];
                print(convertJavaToNativeType(parameter.getType()) + " " + camelCase(parameter.getName()));
                if (j < c.getParameters().length - 1) {
                    print(", ");
                }
            }
            print(") ");
            if (c.getParameters().length > 0) {
                if (!clazz.getSuperclass().equals(Object.class) && !clazz.getSuperclass().getSimpleName().equals("APIBean")) {
                    print(": base(");
                    for (int j = 0; j < c.getParameters().length; j++) {
                        Parameter parameter = c.getParameters()[j];

                        boolean thisField = false;
                        for (Field field : clazz.getDeclaredFields()) {
                            if (parameter.getName().equals(field.getName())) {
                                thisField = true;
                            }
                        }
                        if (!thisField) print(camelCase(parameter.getName()));
                    }
                    println(") {");
                } else {
                    println(": base () {");
                }
            } else {
                println(" {");
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
                if (thisField)
                    println(15, "this." + camelCase(parameter.getName()) + " = " + camelCase(parameter.getName()) + ";");
            }
            println(10, "}");
        }
    }

    @Override
    protected void startConstructors(String simpleName, Class clazz) {

    }

    @Override
    protected void endGeneration() {
        enumClassList.sort(new Comparator<Class>() {
            @Override
            public int compare(Class o1, Class o2) {
                return o1.getName().compareTo(o2.getName());
            }
        });
        for (Class enumClass : enumClassList) {
            generateEnumClass(enumClass);
        }
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
            return convertJavaToNativeType(classType.getComponentType()) + "[]";
        } else if (classType.isPrimitive()) {
            if (classType.equals(Double.TYPE)) {
                return "double";
            } else if (classType.equals(Integer.TYPE)) {
                return "int";
            } else if (classType.equals(Long.TYPE)) {
                return "long";
            } else if (classType.equals(Byte.TYPE)) {
                return "byte";
            } else if (classType.equals(Float.TYPE)) {
                return "float";
            } else if (classType.equals(Boolean.TYPE)) {
                return "bool";
            } else if (classType.equals(Character.TYPE)) {
                return "char";
            }
        } else if (classType.isEnum()) {
            if (!enumClassList.contains(classType)) {
                enumClassList.add(classType);
            }
            return generateEnumClassName(classType);
        } else if (classType.equals(Object.class)) {
            return "Object";
        } else if (classType.equals(String.class)) {
            return "string";
        } else if (classType.equals(Map.class)) {
            return "System.Collections.Generic.Dictionary<String,String>";
        } else {
            type = classType.getSimpleName();
        }
        return type;
    }

    @Override
    protected void declareField(Class clazz, Field field, JavaField fieldByName) {
        if (fieldByName.getComment() != null && fieldByName.getComment().length() > 0) {
            startComment(10);
            println(13, fieldByName.getComment());
            endComment(10);
        }
        println(10, "public " + convertJavaToNativeType(field.getType()) + " " + camelCase(field.getName()) + " { get; set; }");
    }

    @Override
    protected IndentPrintStream getIndentStream() {
        return this.indentPrintStream;
    }

    @Override
    protected void endBean(String simpleName, Class clazz) {
        println(5, "}");
        println("}");
    }

    @Override
    protected void startBean(String simpleName, Class clazz, String comment, List<DocletTag> tagList) {
        println("using System;");
        println();
        println("namespace " + camelCase(clazz.getPackage()));
        println("{");
        startComment(5);
        println(8, comment);
        if (tagList.size() > 0) {
            println();
            for (DocletTag tag : tagList) {
                println(8, "@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(5);
        if (clazz.isEnum()) {
            println(5, "public enum " + generateEnumClassName(clazz) + " {");
        } else if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class)) {
            println(5, "public class " + simpleName + " : " + clazz.getSuperclass().getSimpleName());
            println(5, "{");
        } else {
            println(5, "public class " + simpleName);
            println(5, "{");
        }
    }

    @Override
    protected void startClass(Class clazz) {
        currentFile = new File(getOutputRootDirectory(), camelCase(clazz.getPackage()) + File.separator + clazz.getSimpleName() + ".cs");
        currentFile.mkdirs();
        if (currentFile.exists()) {
            currentFile.delete();
        }
        try {
            indentPrintStream = new IndentPrintStream(new FileOutputStream(currentFile));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void endClass(Class clazz) {
        indentPrintStream.flush();
        indentPrintStream.close();
    }

    private void generateEnumClass(Class clazz) {
        currentFile = new File(getOutputRootDirectory(), camelCase(clazz.getPackage()) + File.separator + generateEnumClassName(clazz) + ".cs");
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
        for (int i = 0; i < clazz.getDeclaredFields().length - 1; i++) {
            Field field = clazz.getDeclaredFields()[i];
            print(10, field.getName());
            if (i < clazz.getDeclaredFields().length - 2) {
                println(",");
            }
        }
        println();
        println();
        endBean(generateEnumClassName(clazz), clazz);

        indentPrintStream.flush();
        indentPrintStream.close();
    }

}
