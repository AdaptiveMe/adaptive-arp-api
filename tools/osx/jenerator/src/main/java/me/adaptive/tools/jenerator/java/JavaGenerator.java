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
package me.adaptive.tools.jenerator.java;

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
public class JavaGenerator extends GeneratorBase {
    private File currentFile;
    private IndentPrintStream indentPrintStream;
    private List<Class> enumClassList = new ArrayList<>();

    public JavaGenerator(File outRootPath, List<Class> classList, List<JavaClass> sourceList) {
        super(outRootPath, classList, sourceList);
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
    protected void startCustomClass(String className, Class clazz, JavaClass javaClass) {
        currentFile = new File(getOutputRootDirectory(), clazz.getPackage().getName().replace('.', File.separatorChar) + File.separatorChar + className + ".java");
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
        println("package " + clazz.getPackage().getName() + ";");
        println();
        startComment(0);
        if (javaClass.getComment() != null && javaClass.getComment().length() > 0) {
            println(3, javaClass.getComment());
        }
        println(3, "Auto-generated implementation of " + clazz.getSimpleName() + " specification.");
        endComment(0);

        if (clazz.getSimpleName().startsWith("IBase")) {
            println("public class " + simpleName + " implements " + clazz.getSimpleName() + " {");
            println();

            startComment(5);
            println(8, "Group of API.");
            endComment(5);
            println(5, "private IAdaptiveRPGroup apiGroup;");
            println();

            startComment(5);
            println(8, "Default constructor.");
            endComment(5);
            println(5, "public " + simpleName + "() {");
            println(10, "this.apiGroup = IAdaptiveRPGroup."+getInterfaceGroup(clazz)+";");
            println(5, "}");
            println();

            startComment(5);
            println(8, "Return the API group for the given interface.");
            endComment(5);
            println(5, "@Override");
            println(5, "public final IAdaptiveRPGroup getAPIGroup() {");
            println(10, "return this.apiGroup;");
            println(5, "}");
        } else {
            println("public class " + simpleName + " extends "+clazz.getInterfaces()[0].getSimpleName().substring(1)+"Bridge implements " + clazz.getSimpleName() + " {");
            println();

            startComment(5);
            println(8, "Group of API.");
            endComment(5);
            println(5, "private "+clazz.getSimpleName()+" delegate;");
            println();

            startComment(5);
            println(8, "Constructor with delegate.");
            println();
            println(8, "@param delegate The delegate implementing platform specific functions.");
            endComment(5);
            println(5, "public " + simpleName + "("+clazz.getSimpleName()+" delegate) {");
            println(10, "super();");
            println(10, "this.delegate = delegate;");
            println(5, "}");

            startComment(5);
            println(8, "Get the delegate implementation.");
            endComment(5);
            println(5, "public final "+clazz.getSimpleName()+" getDelegate() {");
            println(10, "return this.delegate;");
            println(5, "}");

            startComment(5);
            println(8, "Set the delegate implementation.");
            println();
            println(8, "@param delegate The delegate implementing platform specific functions.");
            endComment(5);
            println(5, "public final void setDelegate("+clazz.getSimpleName()+" delegate) {");
            println(10, "this.delegate = delegate;");
            println(5, "}");


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
                startComment(5);
                println(8, javaMethods.get(m).getComment());
                println();
                for (DocletTag tag : javaMethods.get(m).getTags()) {
                    println(8, "@" + tag.getName() + " " + tag.getValue());
                }
                endComment(5);
                print(5, "public ");
                if (m.getReturnType().equals(Void.TYPE)) {
                    print("void ");
                } else {
                    print(convertJavaToNativeType(m.getReturnType()) + " ");
                }
                print(m.getName() + "(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    print(convertJavaToNativeType(p.getType()) + " ");
                    print(p.getName());
                    if (i < m.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                println(") {");
                println(10, "// Invoke delegate");
                if (m.getReturnType().equals(Void.TYPE)) {
                    print(10,"");
                } else {
                    print(10,"return ");
                }

                print("this.delegate."+m.getName() + "(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    print(p.getName());
                    if (i < m.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                println(");");
                println(10, "");
                println(5, "}");
                println();
            }
        }
        println("}");
    }

    @Override
    protected void createCallbackImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        println("package " + clazz.getPackage().getName() + ";");
        println();
        startComment(0);
        if (javaClass.getComment() != null && javaClass.getComment().length() > 0) {
            println(3, javaClass.getComment());
        }
        println(3, "Auto-generated implementation of " + clazz.getSimpleName() + " specification.");
        endComment(0);

        if (clazz.getSimpleName().equals("IBaseCallback")) {
            println("public class " + simpleName + " implements " + clazz.getSimpleName() + " {");
            println();

            startComment(5);
            println(8, "Unique id of callback.");
            endComment(5);
            println(5, "private long id;");
            println();

            startComment(5);
            println(8, "Group of API.");
            endComment(5);
            println(5, "private IAdaptiveRPGroup apiGroup;");
            println();

            startComment(5);
            println(8, "Constructor with callback id.");
            println();
            println(8, "@param id  The id of the callback.");
            endComment(5);
            println(5, "public " + simpleName + "(long id) {");
            println(10, "this.id = id;");
            println(10, "this.apiGroup = IAdaptiveRPGroup.Application;");
            println(5, "}");
            println();

            startComment(5);
            println(8, "Get the callback id.");
            endComment(5);
            println(5, "public final long getId() {");
            println(10, "return this.id;");
            println(5, "}");
            println();

            startComment(5);
            println(8, "Return the API group for the given interface.");
            endComment(5);
            println(5, "@Override");
            println(5, "public IAdaptiveRPGroup getAPIGroup() {");
            println(10, "return this.apiGroup;");
            println(5, "}");
        } else {
            println("public class " + simpleName + " extends BaseCallbackImpl implements " + clazz.getSimpleName() + " {");
            println();
            startComment(5);
            println(8, "Constructor with callback id.");
            println();
            println(8, "@param id  The id of the callback.");
            endComment(5);
            println(5, "public " + simpleName + "(long id) {");
            println(10, "super(id);");
            println(5, "}");
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
                startComment(5);
                println(8, javaMethods.get(m).getComment());
                println();
                for (DocletTag tag : javaMethods.get(m).getTags()) {
                    println(8, "@" + tag.getName() + " " + tag.getValue());
                }
                endComment(5);
                print(5, "public ");
                if (m.getReturnType().equals(Void.TYPE)) {
                    print("void ");
                } else {
                    print(convertJavaToNativeType(m.getReturnType()) + " ");
                }
                print(m.getName() + "(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    print(convertJavaToNativeType(p.getType()) + " ");
                    print(p.getName());
                    if (i < m.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                println(") {");
                println(10, "//TODO: Implement callback " + m.getDeclaringClass().getSimpleName() + "." + m.getName());
                println(5, "}");
                println();
            }
        }
        println("}");

    }

    @Override
    protected void createListenerImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        println("package " + clazz.getPackage().getName() + ";");
        println();
        startComment(0);
        if (javaClass.getComment() != null && javaClass.getComment().length() > 0) {
            println(3, javaClass.getComment());
        }
        println(3, "Auto-generated implementation of " + clazz.getSimpleName() + " specification.");
        endComment(0);

        if (clazz.getSimpleName().equals("IBaseListener")) {
            println("public class " + simpleName + " implements " + clazz.getSimpleName() + " {");
            println();

            startComment(5);
            println(8, "Unique id of listener.");
            endComment(5);
            println(5, "private long id;");
            println();

            startComment(5);
            println(8, "Group of API.");
            endComment(5);
            println(5, "private IAdaptiveRPGroup apiGroup;");
            println();

            startComment(5);
            println(8, "Constructor with listener id.");
            println();
            println(8, "@param id  The id of the listener.");
            endComment(5);
            println(5, "public " + simpleName + "(long id) {");
            println(10, "this.id = id;");
            println(10, "this.apiGroup = IAdaptiveRPGroup.Application;");
            println(5, "}");
            println();

            startComment(5);
            println(8, "Get the listener id.");
            endComment(5);
            println(5, "public final long getId() {");
            println(10, "return this.id;");
            println(5, "}");
            println();

            startComment(5);
            println(8, "Return the API group for the given interface.");
            endComment(5);
            println(5, "@Override");
            println(5, "public final IAdaptiveRPGroup getAPIGroup() {");
            println(10, "return this.apiGroup;");
            println(5, "}");
        } else {
            println("public class " + simpleName + " extends BaseListenerImpl implements " + clazz.getSimpleName() + " {");
            println();
            startComment(5);
            println(8, "Constructor with listener id.");
            println();
            println(8, "@param id  The id of the listener.");
            endComment(5);
            println(5, "public " + simpleName + "(long id) {");
            println(10, "super(id);");
            println(5, "}");
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
                startComment(5);
                println(8, javaMethods.get(m).getComment());
                println();
                for (DocletTag tag : javaMethods.get(m).getTags()) {
                    println(8, "@" + tag.getName() + " " + tag.getValue());
                }
                endComment(5);
                print(5, "public ");
                if (m.getReturnType().equals(Void.TYPE)) {
                    print("void ");
                } else {
                    print(convertJavaToNativeType(m.getReturnType()) + " ");
                }
                print(m.getName() + "(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    print(convertJavaToNativeType(p.getType()) + " ");
                    print(p.getName());
                    if (i < m.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                println(") {");
                println(10, "//TODO: Implement listener " + m.getDeclaringClass().getSimpleName() + "." + m.getName());
                println(5, "}");
                println();
            }
        }
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
                    startComment(5);
                    println(8, "Returns a reference to the registered " + serviceClass.getSimpleName().substring(1) + "Handler.");
                    println();
                    println(8, "@return " + serviceClass.getSimpleName().substring(1) + "Handler reference or null if a handler of this type is not registered.");
                    endComment(5);
                    println(5, serviceClass.getSimpleName() + " get" + serviceClass.getSimpleName().substring(1) + "Handler();");
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
                if (method.getReturnType().equals(Void.TYPE)) {
                    print(5, "void ");
                } else {
                    print(5, convertJavaToNativeType(method.getReturnType()) + " ");
                }
                print(method.getName());
                print("(");
                for (int i = 0; i < method.getParameterCount(); i++) {
                    Parameter p = method.getParameters()[i];
                    print(convertJavaToNativeType(p.getType()));
                    print(" ");
                    print(p.getName());
                    if (i < method.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                println(");");
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
        println("package " + clazz.getPackage().getName() + ";");
        println();
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
        } else if (clazz.getInterfaces() != null && clazz.getInterfaces().length > 0) {
            print("public interface " + simpleName + " extends ");
            for (int i = 0; i < clazz.getInterfaces().length; i++) {
                Class iClass = clazz.getInterfaces()[i];
                print(iClass.getSimpleName());
                if (i < clazz.getInterfaces().length - 1) {
                    print(", ");
                }
            }
            println(" {");
        } else {
            println("public interface " + simpleName + " {");
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
            print(5, convertJavaToNativeType(field.getType()));
            print(" ");
            if (field.getName().equals("API_VERSION")) {
                print(field.getName());
                print(" = ");
                print("\"TO_BE_REPLACED\"");
                println(";");
            }
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
            println(5, "public " + convertJavaToNativeType(field.getType()) + " is" + fieldName + "() {");
        } else {
            println(5, "public " + convertJavaToNativeType(field.getType()) + " get" + fieldName + "() {");
        }

        println(10, "return this." + field.getName() + ";");
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
        println(5, "public void set" + fieldName + "(" + convertJavaToNativeType(field.getType()) + " " + field.getName() + ") {");
        println(10, "this." + field.getName() + " = " + field.getName() + ";");
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


            print(5, "public " + clazz.getSimpleName() + "(");
            for (int j = 0; j < c.getParameters().length; j++) {
                Parameter parameter = c.getParameters()[j];
                print(convertJavaToNativeType(parameter.getType()) + " " + parameter.getName());
                if (j < c.getParameters().length - 1) {
                    print(", ");
                }
            }
            println(") {");
            if (c.getParameters().length > 0) {
                if (clazz.getSuperclass().getSimpleName().equals("APIBean")) {
                    println(10, "super();");
                } else if (!clazz.getSuperclass().equals(Object.class)) {
                    print(10, "super(");
                    for (int j = 0; j < c.getParameters().length; j++) {
                        Parameter parameter = c.getParameters()[j];

                        boolean thisField = false;
                        for (Field field : clazz.getDeclaredFields()) {
                            if (parameter.getName().equals(field.getName())) {
                                thisField = true;
                            }
                        }
                        if (!thisField) print(parameter.getName());
                    }
                    println(");");
                } else {
                    println(10, "this();");
                }
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
                if (thisField) println(10, "this." + parameter.getName() + " = " + parameter.getName() + ";");
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
                return "boolean";
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
            return "String";
        } else if (classType.equals(Map.class)) {
            return "java.util.Map<String, String>";
        } else {
            type = classType.getSimpleName();
        }
        return type;
    }

    @Override
    protected void declareField(Class clazz, Field field, JavaField fieldByName) {
        if (fieldByName != null && fieldByName.getComment() != null && fieldByName.getComment().length() > 0) {
            startComment(5);
            println(8, fieldByName.getComment());
            endComment(5);
        }
        println(5, "private " + convertJavaToNativeType(field.getType()) + " " + field.getName() + ";");
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
        println("package " + clazz.getPackage().getName() + ";");
        println();
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
            println("public class " + simpleName + " extends " + clazz.getSuperclass().getSimpleName() + " {");
        } else {
            println("public class " + simpleName + " {");
        }
    }


    @Override
    protected void startClass(Class clazz) {

        currentFile = new File(getOutputRootDirectory(), clazz.getPackage().getName().replace('.', File.separatorChar) + File.separatorChar + clazz.getSimpleName() + ".java");
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
        currentFile = new File(getOutputRootDirectory(), clazz.getPackage().getName().replace('.', File.separatorChar) + File.separatorChar + generateEnumClassName(clazz) + ".java");
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
            print(5, field.getName());
            if (i < clazz.getDeclaredFields().length - 2) {
                println(",");
            }
        }
        println();
        println();
        endBean(generateEnumClassName(clazz), clazz);

        startComment(0);
        applyClassHeader(clazz, getSourceFooter());
        endComment(0);

        indentPrintStream.flush();
        indentPrintStream.close();
    }
}
