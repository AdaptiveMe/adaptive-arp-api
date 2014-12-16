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
package me.adaptive.tools.jenerator.swift;

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
 * Created by clozano on 01/12/14.
 */
public class SwiftGenerator extends GeneratorBase {

    private File currentFile;
    private IndentPrintStream indentPrintStream;
    private List<Class> enumClassList = new ArrayList<>();

    public SwiftGenerator(File outRootPath, List<Class> classList, List<JavaClass> sourceList) {
        super(outRootPath, classList, sourceList);
    }

    @Override
    protected void createDelegateImplementation(String className, Class clazz, JavaClass javaClass) {
        // TODO: delegate.
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
        if (implementation) {
            currentFile = new File(getOutputRootDirectory(), "impl"+File.separator+clazz.getSimpleName() + ".swift");
        } else {
            currentFile = new File(getOutputRootDirectory(), clazz.getSimpleName() + ".swift");
        }
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
    }

    @Override
    protected void createHandlerImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        // TODO: handler.
    }

    @Override
    protected void createCallbackImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        // TODO: callback.
    }

    @Override
    protected void createListenerImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        // TODO: listener.
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
                    startComment(5);
                    println(8, "Returns a reference to the registered " + serviceClass.getSimpleName().substring(1) + "Handler.");
                    println();
                    println(8, "@return " + serviceClass.getSimpleName().substring(1) + "Handler reference or null if a handler of this type is not registered.");
                    endComment(5);
                    println(5, "func get" + serviceClass.getSimpleName().substring(1) + "Handler() -> " + serviceClass.getSimpleName());
                    println();
                }
            } else {
                startComment(5);
                JavaMethod javaMethod = null;
                for (JavaMethod m : interfaceMethodsDoc) {
                    if (m.getName().equals(method.getName()) && m.getParameters().size() == method.getParameterCount()) {
                        javaMethod = m;
                        break;
                    }
                }
                if (javaMethod != null) {
                    println(8, javaMethod.getComment());
                    for (DocletTag tag : javaMethod.getTags()) {
                        println(8, "@" + tag.getName() + " " + tag.getValue());
                    }
                }
                endComment(5);
                print(5, "func " + method.getName());
                print("(");
                for (int i = 0; i < method.getParameterCount(); i++) {
                    Parameter p = method.getParameters()[i];
                    print(p.getName());
                    print(":");
                    print(convertJavaToNativeType(p.getType()));
                    if (i < method.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                print(")");

                if (!method.getReturnType().equals(Void.TYPE)) {
                    print(" -> ");
                    println(convertJavaToNativeType(method.getReturnType()));
                }
                println();
            }
        }
    }

    @Override
    protected void endInterface(String simpleName, Class clazz) {
        println("}");
    }

    @Override
    protected void startInterface(String simpleName, Class clazz, String classComment, List<DocletTag> tagList) {
        startComment(0);
        println(3, classComment);
        if (tagList.size() > 0) {
            println();
            for (DocletTag tag : tagList) {
                println(3, "@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(0);
        if (clazz.isEnum()) {
            println("public enum " + generateEnumClassName(clazz) + " {");
        } else if (clazz.getInterfaces() != null && clazz.getInterfaces().length == 1) {
            println("public protocol " + simpleName + " : " + clazz.getInterfaces()[0].getSimpleName() + " {");
        } else {
            println("public protocol " + simpleName + " : NSObjectProtocol {");
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
            println();
            print(5, "var ");
            print(field.getName());
            print(" : ");
            print(convertJavaToNativeType(field.getType()));
            print(" ");
            print("{ get }");
            println("");
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
        startComment(5);
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            println(8, getter.getComment());
        } else {
            println(8, "Gets " + fieldByName.getComment());
        }
        println();
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            for (DocletTag tag : getter.getTags()) {
                println(8, "@" + tag.getName() + " " + tag.getValue());
            }
        } else {
            println(8, "@return " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(5);
        if (field.getType().equals(Boolean.class)) {
            println(5, "public func is" + fieldName + "() -> " + convertJavaToNativeType(field.getType()) + optionalOrMandatory(field.getType()) + " {");
        } else {
            println(5, "public func get" + fieldName + "() -> " + convertJavaToNativeType(field.getType()) + optionalOrMandatory(field.getType()) + " {");
        }

        println(10, "return self." + field.getName());
        println(5, "}");
        println();
        /**
         * Setters
         */
        startComment(5);
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            println(8, setter.getComment());
        } else {
            println(8, "Sets " + fieldByName.getComment());
        }
        println();
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            for (DocletTag tag : setter.getTags()) {
                println(8, "@" + tag.getName() + " " + tag.getValue());
            }
        } else {
            println(8, "@param " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(5);
        println(5, "public func set" + fieldName + "(" + field.getName() + ": " + convertJavaToNativeType(field.getType()) + ") {");
        println(10, "self." + field.getName() + " = " + field.getName() + "");
        println(5, "}");
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

            startComment(5);
            if (d.getComment() != null && d.getComment().trim().length() > 0) {
                println(8, d.getComment());
            } else {
                println(8, "Convenience constructor.");
            }
            if (d.getTags().size() > 0) {
                println();
            }
            for (DocletTag tag : d.getTags()) {
                println(8, "@" + tag.getName() + " " + tag.getValue());
            }
            endComment(5);

            if (c.getParameters().length == 0) {
                println(5, "public override init() {");
                println(10, "super.init()");
            } else {
                if (clazz.getSuperclass().equals(Object.class)) {
                    print(5, "public init(");
                } else if (clazz.getSuperclass().getSimpleName().equals("APIBean")) {
                    print(5, "public init(");
                } else {
                    boolean isOverride = false;
                    for (Constructor sc : clazz.getSuperclass().getConstructors()) {
                        if (sc.getParameterCount() == c.getParameterCount()) {
                            isOverride = true;
                        }
                    }
                    if (isOverride) {
                        print(5, "public override init(");
                    } else {
                        print(5, "public init(");
                    }
                }
                for (int j = 0; j < c.getParameters().length; j++) {
                    Parameter parameter = c.getParameters()[j];
                    print(parameter.getName() + ": " + convertJavaToNativeType(parameter.getType()));
                    if (j < c.getParameters().length - 1) {
                        print(", ");
                    }
                }
                println(") {");

                if (clazz.getSuperclass().getSimpleName().equals("APIBean")) {
                    println(10, "super.init()");
                } else if (!clazz.getSuperclass().equals(Object.class)) {
                    print(10, "super.init(");
                    for (int j = 0; j < c.getParameters().length; j++) {
                        Parameter parameter = c.getParameters()[j];
                        boolean thisField = false;
                        for (Field field : clazz.getDeclaredFields()) {
                            if (parameter.getName().equals(field.getName())) {
                                thisField = true;
                            }
                        }
                        if (!thisField) print(parameter.getName() + ": " + parameter.getName());
                    }
                    println(")");
                } else {
                    println(10, "super.init()");
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
                    if (thisField) println(10, "self." + parameter.getName() + " = " + parameter.getName());
                }
            }
            println(5, "}");
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
            return "[" + convertJavaToNativeType(classType.getComponentType()) + "]";
        } else if (classType.isPrimitive()) {
            if (classType.equals(Double.TYPE)) {
                return "Double";
            } else if (classType.equals(Integer.TYPE)) {
                return "Int";
            } else if (classType.equals(Long.TYPE)) {
                return "Int64";
            } else if (classType.equals(Byte.TYPE)) {
                return "Byte";
            } else if (classType.equals(Float.TYPE)) {
                return "Float";
            } else if (classType.equals(Boolean.TYPE)) {
                return "Bool";
            } else if (classType.equals(Character.TYPE)) {
                return "Character";
            }
        } else if (classType.isEnum()) {
            if (!enumClassList.contains(classType)) {
                enumClassList.add(classType);
            }
            return generateEnumClassName(classType);
        } else if (classType.equals(Object.class)) {
            return "AnyObject";
        } else if (classType.equals(String.class)) {
            return "String";
        } else if (classType.equals(Class.class)) {
            return "AnyClass";
        } else if (classType.equals(Map.class)) {
            return "Dictionary<String,String>";
        } else {
            type = classType.getSimpleName();
        }
        return type;
    }

    private String optionalOrMandatory(Class clazzType) {
        return "?";
    }

    @Override
    protected void declareField(Class clazz, Field field, JavaField fieldByName) {
        if (fieldByName.getComment() != null && fieldByName.getComment().length() > 0) {
            startComment(5);
            println(8, fieldByName.getComment());
            endComment(5);
        }
        println(5, "var " + field.getName() + " : " + convertJavaToNativeType(field.getType()) + optionalOrMandatory(field.getType()));
    }

    @Override
    protected IndentPrintStream getIndentStream() {
        return this.indentPrintStream;
    }


    @Override
    protected void endBean(String simpleName, Class clazz) {
        println("}");
    }

    @Override
    protected void startBean(String simpleName, Class clazz, String comment, List<DocletTag> tagList) {
        startComment(0);
        println(3, comment);
        if (tagList.size() > 0) {
            println();
            for (DocletTag tag : tagList) {
                println(3, "@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(0);
        if (clazz.isEnum()) {
            println("public enum " + generateEnumClassName(clazz) + " {");
        } else if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class)) {
            println("public class " + simpleName + " : " + clazz.getSuperclass().getSimpleName() + " {");
        } else {
            println("public class " + simpleName + " : NSObject {");
        }
    }

    @Override
    protected void startClass(Class clazz) {
        currentFile = new File(getOutputRootDirectory(), clazz.getSimpleName() + ".swift");
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
        currentFile = new File(getOutputRootDirectory(), generateEnumClassName(clazz) + ".swift");
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
            println(5, "case " + field.getName());
        }
        println();
        startComment(5);
        println(5, "Convert current enum to its string representation value.");
        endComment(5);
        println(5, "public func toString() -> String {");
        println(10, "switch self {");
        for (int i = 0; i < clazz.getDeclaredFields().length - 1; i++) {
            Field field = clazz.getDeclaredFields()[i];
            println(15, "case ." + field.getName() + ": return \"" + field.getName() + "\"");
        }
        println(10, "}");
        println(5, "}");
        println();

        startComment(5);
        println(5, "Create enum from its string representation value.");
        endComment(5);
        println(5, "public static func toEnum(string:String?) -> " + generateEnumClassName(clazz) + " {");
        println(10, "if let validString = string {");
        println(15, "switch validString {");
        for (int i = 0; i < clazz.getDeclaredFields().length - 1; i++) {
            Field field = clazz.getDeclaredFields()[i];
            println(20, "case \"" + field.getName() + "\": return ." + field.getName());
        }
        println(15, "default: return .Unknown");
        println(15, "}");
        println(10, "} else {");
        println(15, "return .Unknown");
        println(10, "}");
        println(5, "}");
        println();
        endBean(generateEnumClassName(clazz), clazz);


        indentPrintStream.flush();
        indentPrintStream.close();
    }
}
