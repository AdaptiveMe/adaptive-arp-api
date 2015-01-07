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
    protected void createDelegateImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        println(0, "import Foundation");
        println();
        startComment(0);
        if (javaClass.getComment() != null && javaClass.getComment().length() > 0) {
            println(3, javaClass.getComment());
        }
        println(3, "Auto-generated implementation of " + clazz.getSimpleName() + " specification.");
        endComment(0);

        if (clazz.getSimpleName().startsWith("IBase")) {
            println("public class " + simpleName + " : NSObject, " + clazz.getSimpleName() + " {");
            println();

            startComment(4);
            println(7, "Group of API.");
            endComment(4);
            println(4, "private var apiGroup : IAdaptiveRPGroup?");
            println();

            startComment(4);
            println(7, "Default constructor.");
            endComment(4);
            //println(4, "public " + simpleName + "() {");
            println(4, "public override init() {");
            println(8, "self.apiGroup = IAdaptiveRPGroup." + getInterfaceGroup(clazz));
            println(4, "}");
            println();

            startComment(4);
            println(7, "Return the API group for the given interface.");
            endComment(4);
            println(4, "public final func getAPIGroup() -> IAdaptiveRPGroup? {");
            println(8, "return self.apiGroup!");
            println(4, "}");
        } else {
            if (clazz.getInterfaces().length > 0) {
                println("public class " + simpleName + " : " + clazz.getInterfaces()[0].getSimpleName().substring(1) + "Delegate, " + clazz.getSimpleName() + " {");
            } else {
                println("public class " + simpleName + " : NSObject, " + clazz.getSimpleName() + " {");
            }
            println();

            /*
            if (!simpleName.startsWith("AppRegistry") && !simpleName.startsWith("AppContext")) {
                startComment(4);
                println(7, "Register delegate with the Application Registry.");
                endComment(4);
                println(4, "//static {");
                println(8, "//AppRegistryBridge.getInstance().get" + clazz.getSimpleName().substring(1) + "Bridge().setDelegate(new " + simpleName + "());");
                println(4, "//}");
                println();
            }
            */
            startComment(4);
            println(7, "Default Constructor.");
            endComment(4);
            println(4, "public override init() {");
            println(8, "super.init()");
            println(4, "}");
        }
        println();

        List<Method> classMethods = new ArrayList<>();
        Map<Method, JavaMethod> javaMethods = new HashMap<>();
        for (Method m : clazz.getDeclaredMethods()) {
            classMethods.add(m);
            for (JavaMethod jm : javaClass.getMethods()) {
                if (jm.getName().equals(m.getName()) && m.getParameterCount() == 0) {
                    javaMethods.put(m, jm);
                } else if (jm.getName().equals(m.getName()) && (jm.getParameters().size() == m.getParameterCount())) {
                    for (Parameter p : m.getParameters()) {
                        for (JavaParameter jp : jm.getParameters()) {
                            if (jp.getName().equals(p.getName())) {
                                javaMethods.put(m, jm);
                            }
                        }
                    }

                }
            }
        }
        classMethods.sort(new Comparator<Method>() {
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
        for (Method m : classMethods) {
            if (m.getName().equals("get$Synthetic$")) {

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
                startComment(4);
                println(7, "Bridge references.");
                endComment(4);
                for (Class serviceClass : serviceClasses) {
                    println(4, "private var __" + serviceClass.getSimpleName().substring(1).toLowerCase() + "Bridge : " + serviceClass.getSimpleName().substring(1) + "Bridge? = nil");
                }
                println();

                for (Class serviceClass : serviceClasses) {
                    startComment(4);
                    println(7, "Returns a reference to the registered " + serviceClass.getSimpleName().substring(1) + "Bridge.");
                    println();
                    println(7, "@return " + serviceClass.getSimpleName().substring(1) + "Bridge reference or nil if a bridge of this type is not registered.");
                    endComment(4);
                    println(4, "public final func get" + serviceClass.getSimpleName().substring(1) + "Bridge() -> " + serviceClass.getSimpleName().substring(1) + "Bridge {");
                    println(8, " if(__" + serviceClass.getSimpleName().substring(1).toLowerCase() + "Bridge == nil) {");
                    println(12, "__" + serviceClass.getSimpleName().substring(1).toLowerCase() + "Bridge = " + serviceClass.getSimpleName().substring(1) + "Bridge(delegate: nil);");//+serviceClass.getSimpleName().substring(1)+"Delegate());");
                    println(8, "}");
                    println(8, "return __" + serviceClass.getSimpleName().substring(1).toLowerCase() + "Bridge!");
                    println(4, "}");
                    println();
                }
                // APIBridge specific
                startComment(4);
                println(7, "Provides a bridge to handle API calls for the given interface name.");
                println();
                println(7, "@param bridgeType String with the interface name required.");
                println(7, "@return APIBridge That handles calls for the specified interface or nil if the given bridge is not registered.");
                endComment(4);
                println(4, "public final func getBridge(bridgeType : String) -> APIBridge? {");
                println(8, "switch(bridgeType) {");
                println();

                for (Class serviceClass : serviceClasses) {
                    println(12, "case \"" + serviceClass.getSimpleName() + "\":");
                    println(16, "return get" + serviceClass.getSimpleName().substring(1) + "Bridge()");
                    println();
                }
                println(12, "default:");
                println(16, "return nil");
                println(8, "}");
                println(4, "}");
                println();
            } else if (javaMethods.get(m) != null) {
                if (simpleName.startsWith("AppRegistry")) {
                    startComment(4);
                    println(7, javaMethods.get(m).getComment());
                    endComment(4);
                    println(4, "private var __" + m.getReturnType().getSimpleName().substring(1).toLowerCase() + "Bridge : " + m.getReturnType().getSimpleName().substring(1) + "Bridge? = nil");
                    println();
                    startComment(4);
                    println(7, javaMethods.get(m).getComment());
                    println();
                    for (DocletTag tag : javaMethods.get(m).getTags()) {
                        println(7, "@" + tag.getName() + " " + tag.getValue());
                    }
                    endComment(4);
                    print(4, "public func ");
                    print(m.getName() + "()");
                    println(" -> " + m.getReturnType().getSimpleName().substring(1) + "Bridge {");
                    println(8, " if(__" + m.getReturnType().getSimpleName().substring(1).toLowerCase() + "Bridge == nil) {");
                    println(12, "__" + m.getReturnType().getSimpleName().substring(1).toLowerCase() + "Bridge = " + m.getReturnType().getSimpleName().substring(1) + "Bridge(delegate: nil)");
                    println(8, "}");
                    println(8, "return __" + m.getReturnType().getSimpleName().substring(1).toLowerCase() + "Bridge!");
                    println(4, "}");
                    println();
                } else {
                    startComment(4);
                    println(7, javaMethods.get(m).getComment());
                    println();
                    for (DocletTag tag : javaMethods.get(m).getTags()) {
                        println(7, "@" + tag.getName() + " " + tag.getValue());
                    }
                    endComment(4);
                    print(4, "public func ");

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
                        println("-> " + convertJavaToNativeType(m.getReturnType()) + " {");
                    }

                    if (m.getReturnType().equals(Void.TYPE)) {
                        println(8, "// TODO: Not implemented.");
                    } else {
                        println(8, "var response : " + convertJavaToNativeType(m.getReturnType()));
                        println(8, "// TODO: Not implemented.");
                        if (m.getReturnType().isPrimitive()) {
                            if (m.getReturnType().equals(Boolean.TYPE)) {
                                println(8, "return false");
                            } else if (m.getReturnType().equals(Character.TYPE)) {
                                println(8, "return \" \"");
                            } else {
                                println(8, "return UNHANDLED");
                            }
                        } else if (m.getReturnType().equals(Object.class)) {
                            println(8, "return \"\"");
                        } else if (m.getReturnType().isEnum()) {
                            println(8, "return " + convertJavaToNativeType(m.getReturnType()) + ".Unknown");
                        } else {
                            println(8, "return " + convertJavaToNativeType(m.getReturnType()) + "()");
                        }
                    }
                    println(4, "}");
                    println();
                }
            }
        }
        println("}");
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
            String parent = getOutputRootDirectory().getAbsolutePath().substring(0, getOutputRootDirectory().getAbsolutePath().lastIndexOf('.')) + ".Impl";
            currentFile = new File(parent, File.separator + className + ".swift");
        } else {
            currentFile = new File(getOutputRootDirectory(), className + ".swift");
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
        println(0, "import Foundation");
        println();
        startComment(0);
        if (javaClass.getComment() != null && javaClass.getComment().length() > 0) {
            println(3, javaClass.getComment());
        }
        println(3, "Auto-generated implementation of " + clazz.getSimpleName() + " specification.");
        endComment(0);

        if (clazz.getSimpleName().startsWith("IBase")) {
            println("public class " + simpleName + " : NSObject, " + clazz.getSimpleName() + " {");
            println();

            startComment(4);
            println(7, "Group of API.");
            endComment(4);
            println(4, "private var apiGroup : IAdaptiveRPGroup? = nil");
            println();
            /*
            startComment(4);
            println(7, "JSON API.");
            endComment(4);
            println(4, "//protected Gson gson;");
            println();
            */
            startComment(4);
            println(7, "Default constructor.");
            endComment(4);
            println(4, "public override init() {");
            println(8, "self.apiGroup = IAdaptiveRPGroup." + getInterfaceGroup(clazz));

            println(4, "}");
            println();

            startComment(4);
            println(7, "Return the API group for the given interface.");
            endComment(4);
            println(4, "public final func getAPIGroup() -> IAdaptiveRPGroup? {");
            println(8, "return self.apiGroup!");
            println(4, "}");
            /*
            startComment(4);
            println(7, "Return the JSON serializer.");
            println(7, "@return Current JSON serializer.");
            endComment(4);
            println(4, "//public final Gson getJSONAPI() {");
            println(8, "//return this.gson;");
            println(4, "//}");
            */
        } else {
            if (clazz.getInterfaces().length > 0) {
                println("public class " + simpleName + " : " + clazz.getInterfaces()[0].getSimpleName().substring(1) + "Bridge, " + clazz.getSimpleName() + ", APIBridge {");
            } else {
                println("public class " + simpleName + " : NSObject, " + clazz.getSimpleName() + " {");
                println();
                startComment(4);
                println(7, "Group of API.");
                endComment(4);
                println(4, "private var apiGroup : IAdaptiveRPGroup = IAdaptiveRPGroup.Kernel;");
                println();
                println(4, "public func getAPIGroup() -> IAdaptiveRPGroup? {");
                println(8, "return self.apiGroup");
                println(4, "}");
            }
            println();

            startComment(4);
            println(7, "API Delegate.");
            endComment(4);
            println(4, "private var delegate : " + clazz.getSimpleName() + "? = nil");
            println();

            startComment(4);
            println(7, "Constructor with delegate.");
            println();
            println(7, "@param delegate The delegate implementing platform specific functions.");
            endComment(4);
            println(4, "public init(delegate : " + clazz.getSimpleName() + "?) {");
            println(8, "super.init()");
            println(8, "self.delegate = delegate");
            println(4, "}");

            startComment(4);
            println(7, "Get the delegate implementation.");
            println(7, "@return " + clazz.getSimpleName() + " delegate that manages platform specific functions..");
            endComment(4);
            println(4, "public final func getDelegate() -> " + clazz.getSimpleName() + "? {");
            println(8, "return self.delegate");
            println(4, "}");

            startComment(4);
            println(7, "Set the delegate implementation.");
            println();
            println(7, "@param delegate The delegate implementing platform specific functions.");
            endComment(4);
            println(4, "public final func setDelegate(delegate : " + clazz.getSimpleName() + ") {");
            println(8, "self.delegate = delegate;");
            println(4, "}");


        }
        println();

        List<Method> classMethods = new ArrayList<>();
        Map<Method, JavaMethod> javaMethods = new HashMap<>();
        for (Method m : clazz.getDeclaredMethods()) {
            classMethods.add(m);
            for (JavaMethod jm : javaClass.getMethods()) {
                if (jm.getName().equals(m.getName()) && m.getParameterCount() == 0) {
                    javaMethods.put(m, jm);
                } else if (jm.getName().equals(m.getName()) && (jm.getParameters().size() == m.getParameterCount())) {
                    for (Parameter p : m.getParameters()) {
                        for (JavaParameter jp : jm.getParameters()) {
                            if (jp.getName().equals(p.getName())) {
                                javaMethods.put(m, jm);
                            }
                        }
                    }

                }
            }
        }
        classMethods.sort(new Comparator<Method>() {
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
        for (Method m : classMethods) {
            if (m.getName().equals("get$Synthetic$")) {

                startComment(4);
                println(7, "Singleton instance.");
                endComment(4);
                println(4, "class var sharedInstance : " + simpleName + " {");
                println(8, "struct Static {");
                println(12, "static let instance : " + simpleName + " = " + simpleName + "(delegate: " + clazz.getSimpleName().substring(1) + "Delegate())");
                println(8, "}");
                println(8, "return Static.instance");
                println(4, "}");
                println();


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
                    startComment(4);
                    println(7, "Returns a reference to the registered " + serviceClass.getSimpleName().substring(1) + "Bridge.");
                    println();
                    println(7, "@return " + serviceClass.getSimpleName().substring(1) + "Bridge reference or null if a bridge of this type is not registered.");
                    endComment(4);
                    println(4, "public final func get" + serviceClass.getSimpleName().substring(1) + "Bridge() -> " + serviceClass.getSimpleName().substring(1) + "Bridge {");

                    boolean isLoggingClass = serviceClass.getSimpleName().startsWith("ILogging");
                    if (!isLoggingClass) {
                        println(8, "// Start logging elapsed time.");
                        println(8, "var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()");
                        println(8, "var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()");
                    }
                    println(8, "var result : " + serviceClass.getSimpleName().substring(1) + "Bridge? = nil");
                    if (!isLoggingClass) {
                        println();
                        println(8, "if (logger != nil) {");
                        println(12, "logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup()!.toString(), message: \"" + simpleName + " executing get" + serviceClass.getSimpleName().substring(1) + "Bridge().\")");
                        println(8, "}");
                        println();
                    }
                    println(8, "if (self.delegate != nil) {");
                    println(12, "result = self.delegate!.get" + serviceClass.getSimpleName().substring(1) + "Bridge()");
                    if (!isLoggingClass) {
                        println(12, "if (logger != nil) {");
                        println(16, "logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup()!.toString(), message: \"" + simpleName + " executed 'get" + serviceClass.getSimpleName().substring(1) + "Bridge' in \\(UInt(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.\")");
                        println(12, "}");
                        println(8, "} else {");
                        println(12, "if (logger != nil) {");
                        println(16, "logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup()!.toString(), message: \"" + simpleName + " no delegate for 'get" + serviceClass.getSimpleName().substring(1) + "Bridge'.\")");
                        println(12, "}");
                    }
                    println(8, "}");
                    if (!m.getReturnType().equals(Void.TYPE)) {
                        print(8, "return result!");
                    }
                    println(8, "");
                    println(4, "}");
                    println();
                }
                // APIBridge specific
                startComment(4);
                println(7, "Provides a bridge to handle API calls for the given interface name.");
                println();
                println(7, "@param bridgeType String with the interface name required.");
                println(7, "@return APIBridge That handles calls for the specified interface or null if the given bridge is not registered.");
                endComment(4);
                println(4, "public final func getBridge(bridgeType : String) -> APIBridge? {");
                println(8, "// Start logging elapsed time.");
                println(8, "var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()");
                println(8, "var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()");
                println(8, "var result : APIBridge? = nil");
                println();
                println(8, "if (logger != nil) {");
                println(12, "logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup()!.toString(), message: \"" + simpleName + " executing getBridge(\\(bridgeType)).\")");
                println(8, "}");
                println();
                println(8, "if (self.delegate != nil) {");
                println(12, "result = self.delegate!.getBridge(bridgeType)");
                println(12, "if (logger != nil) {");
                println(16, "logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup()!.toString(), message: \"" + simpleName + " executed 'getBridge' in \\(UInt(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.\")");
                println(12, "}");
                println(8, "} else {");
                println(12, "if (logger != nil) {");
                println(16, "logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup()!.toString(), message: \"" + simpleName + " no delegate for 'getBridge'.\")");
                println(12, "}");
                println(8, "}");
                if (!m.getReturnType().equals(Void.TYPE)) {
                    print(8, "return result!");
                }
                println(8, "");
                println(4, "}");
                println();
            } else if (javaMethods.get(m) != null) {
                startComment(4);
                println(7, javaMethods.get(m).getComment());
                println();
                for (DocletTag tag : javaMethods.get(m).getTags()) {
                    println(7, "@" + tag.getName() + " " + tag.getValue());
                }
                endComment(4);
                print(4, "public func ");
                print(m.getName() + "(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];

                    print(p.getName());
                    print(" : " + convertJavaToNativeType(p.getType()) + " ");
                    if (i < m.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                print(") ");
                if (m.getReturnType().equals(Void.TYPE)) {
                    //print("void ");
                } else {
                    if (simpleName.startsWith("AppRegistry")) {
                        print("-> " + m.getReturnType().getSimpleName().substring(1) + "Bridge ");
                    } else {
                        print("-> " + convertJavaToNativeType(m.getReturnType()) + "? ");
                    }
                }
                println("{");
                boolean isLoggingClass = clazz.getSimpleName().startsWith("ILogging");
                if (!isLoggingClass) {
                    println(8, "// Start logging elapsed time.");
                    println(8, "var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()");
                    println(8, "var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()");
                    println();
                    println(8, "if (logger != nil) {");
                    print(12, "logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup()!.toString(), message: \"" + simpleName + " executing " + m.getName() + "");
                    if (m.getParameterCount() > 0) {
                        print("(");
                    }
                    for (int i = 0; i < m.getParameterCount(); i++) {
                        Parameter p = m.getParameters()[i];
                        print("{\\(" + p.getName() + ")}");
                        if (i < m.getParameterCount() - 1) {
                            print(",");
                        }
                    }
                    if (m.getParameterCount() > 0) {
                        print(")");
                    }
                    println(".\")");
                    println(8, "}");
                    println();
                }
                if (!m.getReturnType().equals(Void.TYPE)) {
                    if (m.getReturnType().isPrimitive()) {
                        if (m.getReturnType().equals(Boolean.TYPE)) {
                            println(8, "var result : " + convertJavaToNativeType(m.getReturnType()) + "? = false");
                        } else if (m.getReturnType().equals(Character.TYPE)) {
                            println(8, "var result : " + convertJavaToNativeType(m.getReturnType()) + "? = \" \"");
                        } else {
                            println(8, "var result : " + convertJavaToNativeType(m.getReturnType()) + "? = " + m.getReturnType());
                        }
                    } else {
                        if (simpleName.startsWith("AppRegistry")) {
                            println(8, "var result : " + m.getReturnType().getSimpleName().substring(1) + "Bridge? = nil");
                        } else {
                            println(8, "var result : " + convertJavaToNativeType(m.getReturnType()) + "? = nil");
                        }
                    }
                }

                println(8, "if (self.delegate != nil) {");
                if (m.getReturnType().equals(Void.TYPE)) {
                    print(12, "");
                } else {
                    print(12, "result = ");
                }

                print("self.delegate!." + m.getName() + "(");
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    if (i > 0) {
                        print(p.getName() + ": ");
                    }
                    print(p.getName());
                    if (i < m.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                println(")");
                if (!isLoggingClass) {
                    println(12, "if (logger != nil) {");
                    println(16, "logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup()!.toString(), message: \"" + simpleName + " executed '" + m.getName() + "' in \\(UInt(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.\")");
                    println(12, " }");
                    println(8, "} else {");
                    println(12, "if (logger != nil) {");
                    println(16, "logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup()!.toString(), message: \"" + simpleName + " no delegate for '" + m.getName() + "'.\")");
                    println(12, "}");
                }
                println(8, "}");
                if (!m.getReturnType().equals(Void.TYPE)) {
                    if (m.getReturnType().isPrimitive()) {
                        print(8, "return result");
                    } else {
                        print(8, "return result!");
                    }
                }
                if (!isLoggingClass) {
                    println(8, "");
                }
                println(4, "}");
                println();
            }
        }
        if (clazz.getInterfaces().length > 0) {
            // APIBridge specific
            startComment(4);
            println(7, "Invokes the given method specified in the API request object.");
            println();
            println(7, "@param request APIRequest object containing method name and parameters.");
            println(7, "@return String with JSON response or a zero length string if the response is asynchronous or null if method not found.");
            endComment(4);
            if (!clazz.getInterfaces()[0].getSimpleName().startsWith("IBase")) {
                println(4, "public func invoke(request : APIRequest) -> String? {");
            } else {
                println(4, "public override func invoke(request : APIRequest) -> String? {");
            }
            println(8, "var responseJSON : String? = \"\"");
            println(8, "switch request.getMethodName()! {");
            List<Method> methodUniqueList = new ArrayList<>();
            List<Method> methodOverloadedList = new ArrayList<>();
            for (Method m : classMethods) {
                int count = 0;
                for (Method m1 : classMethods) {
                    if (m1.getName().equals(m.getName())) {
                        count++;
                    }
                }
                if (count == 1) {
                    methodUniqueList.add(m);
                } else {
                    methodOverloadedList.add(m);
                }
            }

            int parameterIndex = 0;
            for (Method m : methodUniqueList) {
                println(12, "case \"" + m.getName() + "\":");
                int pIndex = 0;
                for (Parameter p : m.getParameters()) {
                    print(16, "var " + p.getName() + parameterIndex + " : " + convertJavaToNativeType(p.getType()) + "? = ");
                    if (p.getType().getSimpleName().endsWith("Callback") || p.getType().getSimpleName().endsWith("Listener")) {
                        print(" " + p.getType().getSimpleName().substring(1) + "Impl(id: request.getAsyncId()!)");
                    } else {
                        if (p.getType().isPrimitive()) {
                            if (p.getType().equals(Boolean.TYPE)) {
                                print("(request.getParameters()![" + pIndex + "] as NSString).boolValue");
                            } else {
                                print("UNSUPPORTED. Donate generously.");
                            }
                        } else if (p.getType().equals(String.class)) {
                            print("request.getParameters()![" + pIndex + "]");
                        } else if (p.getType().isEnum()) {
                            print(convertJavaToNativeType(p.getType()) + ".toEnum(JSONUtil.dictionifyJSON(request.getParameters()![" + pIndex + "])[\"value\"] as String!)");
                        } else if (p.getType().isArray()) {
                            println(convertJavaToNativeType(p.getType()) + "()");
                            println(16, "var " + p.getName() + "Array" + parameterIndex + " : [String] = JSONUtil.stringElementToArray(request.getParameters()![" + pIndex + "])");
                            println(16, "for " + p.getName() + "Element" + parameterIndex + " in " + p.getName() + "Array" + parameterIndex + " {");
                            if (p.getType().getComponentType().isPrimitive()) {
                                if (p.getType().getComponentType().equals(Byte.TYPE)) {
                                    println(20, p.getName() + parameterIndex + "!.append(Byte((" + p.getName() + "Element" + parameterIndex + " as NSString).intValue))");
                                } else {
                                    println(20, "UNSUPPORTED. Donate generously.");
                                }
                            } else if (p.getType().getComponentType().equals(String.class)) {
                                println(20, p.getName() + parameterIndex + "!.append(" + p.getName() + "Element" + parameterIndex + ")");
                            } else if (p.getType().getComponentType().isEnum()) {
                                println(20, p.getName() + parameterIndex + "!.append(" + convertJavaToNativeType(p.getType().getComponentType()) + ".toEnum(JSONUtil.dictionifyJSON(" + p.getName() + "Element" + parameterIndex + ")[\"value\"] as String!))");
                            } else {
                                println(20, p.getName() + parameterIndex + "!.append(" + convertJavaToNativeType(p.getType().getComponentType()) + ".Serializer.fromJSON(" + p.getName() + "Element" + parameterIndex + "))");
                            }

                            print(16, "}");
                        } else {
                            print(convertJavaToNativeType(p.getType()) + ".Serializer.fromJSON(request.getParameters()![" + pIndex + "])");
                        }
                    }
                    println("");
                    pIndex++;
                }

                if (m.getReturnType().equals(Void.TYPE)) {
                    print(16, "self." + m.getName() + "(");
                    for (int i = 0; i < m.getParameterCount(); i++) {
                        Parameter p = m.getParameters()[i];
                        if (i > 0) {
                            print(p.getName() + ": ");
                        }
                        print(p.getName() + parameterIndex + "!");
                        if (i < m.getParameterCount() - 1) {
                            print(", ");
                        }
                    }
                    println(");");
                } else {
                    print(16, "var response" + parameterIndex + " : " + convertJavaToNativeType(m.getReturnType()) + "? = ");
                    print("self." + m.getName() + "(");
                    for (int i = 0; i < m.getParameterCount(); i++) {
                        Parameter p = m.getParameters()[i];
                        if (i > 0) {
                            print(p.getName() + ": ");
                        }
                        print(p.getName() + parameterIndex + "!");
                        if (i < m.getParameterCount() - 1) {
                            print(", ");
                        }
                    }
                    println(")");
                    if (m.getReturnType().isPrimitive()) {
                        println(16, "responseJSON = nil //TODO - Serialize this.gson.toJson(response" + parameterIndex + ");");
                    } else {
                        println(16, "if (response" + parameterIndex + " != nil) {");
                        println(20, "responseJSON = nil //TODO - Serialize this.gson.toJson(response" + parameterIndex + ");");
                        println(16, "} else {");
                        println(20, "responseJSON = nil");
                        println(16, "}");
                    }
                }
                parameterIndex++;
            }

            for (Method m : methodOverloadedList) {
                print(12, "case \"" + m.getName());
                if (m.getParameterCount() == 0) {
                    println("\":");
                } else {
                    print("_");
                    for (int i = 0; i < m.getParameterCount(); i++) {
                        Parameter p = m.getParameters()[i];
                        print(p.getName());
                        if (i < m.getParameterCount() - 1) {
                            print("_");
                        }
                    }
                    println("\":");
                }

                int pIndex = 0;
                for (Parameter p : m.getParameters()) {
                    print(16, "var " + p.getName() + parameterIndex + " : " + convertJavaToNativeType(p.getType()) + "? = ");
                    if (p.getType().getSimpleName().endsWith("Callback") || p.getType().getSimpleName().endsWith("Listener")) {
                        print(p.getType().getSimpleName().substring(1) + "Impl(request.getAsyncId())");
                    } else {
                        if (p.getType().isPrimitive()) {
                            print("nil //TODO Deserialize this.gson.fromJson(request.getParameters()[" + pIndex + "], " + p.getType().getSimpleName() + ".class)");
                        } else {
                            print("nil //TODO Deserialize this.gson.fromJson(request.getParameters()[" + pIndex + "], " + convertJavaToNativeType(p.getType()) + ".class)");
                        }
                    }
                    println("");
                    pIndex++;
                }

                if (m.getReturnType().equals(Void.TYPE)) {
                    print(16, "self." + m.getName() + "(");
                    for (int i = 0; i < m.getParameterCount(); i++) {
                        Parameter p = m.getParameters()[i];
                        if (i > 0) {
                            print(p.getName() + ": ");
                        }
                        print(p.getName() + parameterIndex + "!");
                        if (i < m.getParameterCount() - 1) {
                            print(", ");
                        }
                    }
                    println(")");
                } else {
                    print(16, "var response" + parameterIndex + " : " + convertJavaToNativeType(m.getReturnType()) + "? = ");
                    print("self." + m.getName() + "(");
                    for (int i = 0; i < m.getParameterCount(); i++) {
                        Parameter p = m.getParameters()[i];
                        if (i > 0) {
                            print(p.getName() + ": ");
                        }
                        print(p.getName() + parameterIndex + "!");
                        if (i < m.getParameterCount() - 1) {
                            print(", ");
                        }
                    }
                    println(")");
                    if (m.getReturnType().isPrimitive()) {
                        println(16, "responseJSON = nil //TODO Serialize this.gson.toJson(response" + parameterIndex + ");");
                    } else {
                        println(16, "if (response" + parameterIndex + " != null) {");
                        println(20, "responseJSON = nil //TODO Serialize this.gson.toJson(response" + parameterIndex + ");");
                        println(16, "} else {");
                        println(20, "responseJSON = nil");
                        println(16, "}");
                    }
                }
                parameterIndex++;
            }
            println(12, "default:");
            println(16, "// 404 - response null.");
            println(16, "responseJSON = nil");
            println(8, "}");
            println(8, "return responseJSON");
            println(4, "}");
        }
        println("}");
    }

    @Override
    protected void createCallbackImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        println(0, "import Foundation");
        println();
        startComment(0);
        if (javaClass.getComment() != null && javaClass.getComment().length() > 0) {
            println(3, javaClass.getComment());
        }
        println(3, "Auto-generated implementation of " + clazz.getSimpleName() + " specification.");
        endComment(0);

        if (clazz.getSimpleName().equals("IBaseCallback")) {
            println("public class " + simpleName + " : NSObject, " + clazz.getSimpleName() + " {");
            println();

            startComment(4);
            println(7, "Unique id of callback.");
            endComment(4);
            println(4, "private var id : Int");
            println();

            startComment(4);
            println(7, "Group of API.");
            endComment(4);
            println(4, "private var apiGroup : IAdaptiveRPGroup?");
            println();

            startComment(4);
            println(7, "Constructor with callback id.");
            println();
            println(7, "@param id  The id of the callback.");
            endComment(4);
            println(4, "public init(id : Int) {");
            println(8, "self.id = id");
            println(8, "self.apiGroup = IAdaptiveRPGroup.Application");
            println(4, "}");
            println();

            startComment(4);
            println(7, "Get the callback id.");
            println(7, "@return long with the identifier of the callback.");
            endComment(4);
            println(4, "public final func getId() -> Int {");
            println(8, "return self.id");
            println(4, "}");
            println();

            startComment(4);
            println(7, "Return the API group for the given interface.");
            endComment(4);
            println(4, "public func getAPIGroup() -> IAdaptiveRPGroup? {");
            println(8, "return self.apiGroup!");
            println(4, "}");

        } else {
            println("public class " + simpleName + " : BaseCallbackImpl, " + clazz.getSimpleName() + " {");
            println();
            startComment(4);
            println(7, "Constructor with callback id.");
            println();
            println(7, "@param id  The id of the callback.");
            endComment(4);
            println(4, "public override init(id : Int) {");
            println(8, "super.init(id: id)");
            println(4, "}");
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
                startComment(4);
                println(7, javaMethods.get(m).getComment());
                println();
                for (DocletTag tag : javaMethods.get(m).getTags()) {
                    println(7, "@" + tag.getName() + " " + tag.getValue());
                }
                endComment(4);
                print(4, "public func ");
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
                    println("{ ");
                } else {
                    println("-> " + convertJavaToNativeType(m.getReturnType()) + " {");
                }

                print(8, "AppRegistryBridge.sharedInstance.getPlatformContextWeb().executeJavaScript(\"handle" + m.getDeclaringClass().getSimpleName().substring(1) + m.getName().substring(2) + "( '\\(getId())', ");
                StringBuffer todos = new StringBuffer();
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    print("JSON.parse(\\\"\\\")");
                    todos.append("/** TODO: this.gson.toJson(\" + p.getName() + \")**/ ");
                    if (i < m.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                println("\" )");
                println(8, todos.toString());
                println(4, "}");
                println();
            }
        }
        println("}");

    }

    @Override
    protected void createListenerImplementation(String simpleName, Class clazz, JavaClass javaClass) {
        println(0, "import Foundation");
        println();
        startComment(0);
        if (javaClass.getComment() != null && javaClass.getComment().length() > 0) {
            println(3, javaClass.getComment());
        }
        println(3, "Auto-generated implementation of " + clazz.getSimpleName() + " specification.");
        endComment(0);

        if (clazz.getSimpleName().equals("IBaseListener")) {
            println("public class " + simpleName + " : NSObject, " + clazz.getSimpleName() + " {");
            println();

            startComment(4);
            println(7, "Unique id of listener.");
            endComment(4);
            println(4, "private var id : Int");
            println();

            startComment(4);
            println(7, "Group of API.");
            endComment(4);
            println(4, "private var apiGroup : IAdaptiveRPGroup?");
            println();

            startComment(4);
            println(7, "Constructor with listener id.");
            println();
            println(7, "@param id  The id of the listener.");
            endComment(4);
            println(4, "public init(id : Int) {");
            println(8, "self.id = id");
            println(8, "self.apiGroup = IAdaptiveRPGroup.Application");
            println(4, "}");
            println();

            startComment(4);
            println(7, "Get the listener id.");
            println(7, "@return long with the identifier of the listener.");
            endComment(4);
            println(4, "public final func getId() -> Int {");
            println(8, "return self.id");
            println(4, "}");
            println();

            startComment(4);
            println(7, "Return the API group for the given interface.");
            endComment(4);
            println(4, "public final func getAPIGroup() -> IAdaptiveRPGroup? {");
            println(8, "return self.apiGroup!");
            println(4, "}");

        } else {
            println("public class " + simpleName + " : BaseListenerImpl, " + clazz.getSimpleName() + " {");
            println();
            startComment(4);
            println(7, "Constructor with listener id.");
            println();
            println(7, "@param id  The id of the listener.");
            endComment(4);
            println(4, "public override init(id : Int) {");
            println(8, "super.init(id: id);");
            println(4, "}");
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
                startComment(4);
                println(7, javaMethods.get(m).getComment());
                println();
                for (DocletTag tag : javaMethods.get(m).getTags()) {
                    println(7, "@" + tag.getName() + " " + tag.getValue());
                }
                endComment(4);
                print(4, "public func ");

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
                    println(" {");
                } else {
                    print(" -> " + convertJavaToNativeType(m.getReturnType()) + " {");
                }

                print(8, "AppRegistryBridge.sharedInstance.getPlatformContextWeb().executeJavaScript(\"handle" + m.getDeclaringClass().getSimpleName().substring(1) + m.getName().substring(2) + "( '\\(getId())', ");

                StringBuffer todos = new StringBuffer();
                for (int i = 0; i < m.getParameterCount(); i++) {
                    Parameter p = m.getParameters()[i];
                    print("JSON.parse(\\\"\\\")");
                    todos.append("/** TODO: this.gson.toJson(\" + p.getName() + \")**/ ");
                    if (i < m.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                println("\" )");
                println(8, todos.toString());
                println(4, "}");
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
                    startComment(4);
                    println(7, "Returns a reference to the registered " + serviceClass.getSimpleName().substring(1) + "Bridge.");
                    println();
                    println(7, "@return " + serviceClass.getSimpleName().substring(1) + "Bridge reference or null if a bridge of this type is not registered.");
                    endComment(4);
                    println(4, "func get" + serviceClass.getSimpleName().substring(1) + "Bridge() -> " + serviceClass.getSimpleName().substring(1) + "Bridge");
                    println();
                }
                // APIBridge specific
                startComment(4);
                println(7, "Provides a bridge to handle API calls for the given interface name.");
                println();
                println(7, "@param bridgeType String with the interface name required.");
                println(7, "@return APIBridge That handles calls for the specified interface or null if the given bridge is not registered.");
                endComment(4);
                println(4, "func getBridge(bridgeType : String) -> APIBridge?");
                println();
            } else {
                startComment(4);
                JavaMethod javaMethod = null;
                for (JavaMethod jm : interfaceMethodsDoc) {
                    if (jm.getName().equals(method.getName()) && method.getParameterCount() == 0) {
                        javaMethod = jm;
                    } else if (jm.getName().equals(method.getName()) && (jm.getParameters().size() == method.getParameterCount())) {
                        for (Parameter p : method.getParameters()) {
                            for (JavaParameter jp : jm.getParameters()) {
                                if (jp.getName().equals(p.getName())) {
                                    javaMethod = jm;
                                }
                            }
                        }

                    }
                }
                if (javaMethod != null) {
                    println(7, javaMethod.getComment());
                    println();
                    for (DocletTag tag : javaMethod.getTags()) {
                        println(7, "@" + tag.getName() + " " + tag.getValue());
                    }
                }
                endComment(4);

                print(4, "func " + method.getName());
                print("(");
                for (int i = 0; i < method.getParameterCount(); i++) {
                    Parameter p = method.getParameters()[i];
                    print(p.getName());
                    print(" : ");
                    print(convertJavaToNativeType(p.getType()));
                    if (i < method.getParameterCount() - 1) {
                        print(", ");
                    }
                }
                print(")");
                if (method.getReturnType().equals(Void.TYPE)) {
                    println();
                } else {
                    if (simpleName.startsWith("IAppRegistry")) {
                        println(" -> " + method.getReturnType().getSimpleName().substring(1) + "Bridge ");
                    } else if (simpleName.equals("APIBridge")) {
                        println(" -> " + convertJavaToNativeType(method.getReturnType()) + "?");
                    } else {
                        println(" -> " + convertJavaToNativeType(method.getReturnType()) + "?");
                    }
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
        println(0, "import Foundation");
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
            print(4, "var ");
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
        startComment(4);
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            println(7, getter.getComment());
        } else {
            println(7, "Gets " + fieldByName.getComment());
        }
        println();
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            for (DocletTag tag : getter.getTags()) {
                println(7, "@" + tag.getName() + " " + tag.getValue());
            }
        } else {
            println(7, "@return " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(4);
        if (field.getType().equals(Boolean.class)) {
            println(4, "public func is" + fieldName + "() -> " + convertJavaToNativeType(field.getType()) + optionalOrMandatory(field.getType()) + " {");
        } else {
            println(4, "public func get" + fieldName + "() -> " + convertJavaToNativeType(field.getType()) + optionalOrMandatory(field.getType()) + " {");
        }

        println(8, "return self." + field.getName());
        println(4, "}");
        println();
        /**
         * Setters
         */
        startComment(4);
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            println(7, setter.getComment());
        } else {
            println(7, "Sets " + fieldByName.getComment());
        }
        println();
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            for (DocletTag tag : setter.getTags()) {
                println(7, "@" + tag.getName() + " " + tag.getValue());
            }
        } else {
            println(7, "@param " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(4);
        println(4, "public func set" + fieldName + "(" + field.getName() + ": " + convertJavaToNativeType(field.getType()) + ") {");
        println(8, "self." + field.getName() + " = " + field.getName() + "");
        println(4, "}");
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

            startComment(4);
            if (d.getComment() != null && d.getComment().trim().length() > 0) {
                println(7, d.getComment());
            } else {
                println(7, "Convenience constructor.");
            }
            if (d.getTags().size() > 0) {
                println();
            }
            for (DocletTag tag : d.getTags()) {
                println(7, "@" + tag.getName() + " " + tag.getValue());
            }
            endComment(4);

            if (c.getParameters().length == 0) {
                println(4, "public override init() {");
                println(8, "super.init()");
            } else {
                if (clazz.getSuperclass().equals(Object.class)) {
                    print(4, "public init(");
                } else if (clazz.getSuperclass().getSimpleName().equals("APIBean")) {
                    print(4, "public init(");
                } else {
                    boolean isOverride = false;
                    for (Constructor sc : clazz.getSuperclass().getConstructors()) {
                        if (sc.getParameterCount() == c.getParameterCount()) {
                            isOverride = true;
                        }
                    }
                    if (isOverride) {
                        print(4, "public override init(");
                    } else {
                        print(4, "public init(");
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
                    println(8, "super.init()");
                } else if (!clazz.getSuperclass().equals(Object.class)) {
                    print(8, "super.init(");
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
                    println(8, "super.init()");
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
                    if (thisField) println(8, "self." + parameter.getName() + " = " + parameter.getName());
                }
            }
            println(4, "}");
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
                return "Int";
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
            startComment(4);
            println(7, fieldByName.getComment());
            endComment(4);
        }
        println(4, "var " + field.getName() + " : " + convertJavaToNativeType(field.getType()) + optionalOrMandatory(field.getType()));
    }

    @Override
    protected IndentPrintStream getIndentStream() {
        return this.indentPrintStream;
    }


    private void handleJSONField(Field f, Class clazz, boolean last) {
        if (f.getType().isArray()) {
            println(12, "if (object." + f.getName() + " != nil) {");
            println(16, "// Start array of objects.");
            println(16, "jsonString.appendString(\"\\\"" + f.getName() + "\\\": [\");");
            println();
            println(16, "for var i = 0; i < object." + f.getName() + "!.count; i++ {");

            if (f.getType().getComponentType().isPrimitive()) {
                println(20, "jsonString.appendString(\"\\(object." + f.getName() + "![i])\");");
            } else if (f.getType().getComponentType().isEnum()) {
                println(20, "jsonString.appendString(\"{ \"value\": \\\"\\(object." + f.getName() + "![i].toString())\\\" }\");");
            } else if (f.getType().getComponentType().equals(String.class)) {
                println(20, "jsonString.appendString(\"\\\"\\(JSONUtil.escapeString(object." + f.getName() + "![i]))\\\"\");");
            } else {
                println(20, "jsonString.appendString(" + f.getType().getComponentType().getSimpleName() + ".Serializer.toJSON(object." + f.getName() + "![i]))");
            }
            println(20, "if (i < object." + f.getName() + "!.count-1) {");
            println(24, "jsonString.appendString(\", \");");
            println(20, "}");
            println(16, "}");
            println();
            println(16, "// End array of objects.");
            print(16, "jsonString.appendString(\"]");
            if (!last) {
                println(", \");");
            } else {
                println("\");");
            }
            println(12, "} else {");
            print(16, "jsonString.appendString(\"\\\"" + f.getName() + "\\\": null");
            if (!last) {
                print(", \"");
            } else {
                print("\"");
            }
            println(")");
            println(12, "}");
        } else {
            print(12, "object." + f.getName() + " != nil ? ");
            print("jsonString.appendString(");
            print("\"\\\"" + f.getName() + "\\\": ");
            if (f.getType().isPrimitive()) {
                print("\\(object." + f.getName() + "!)");
            } else if (f.getType().isEnum()) {
                print("{ \\\"value\\\": \\\"\\(JSONUtil.escapeString(object." + f.getName() + "!.toString()))\\\"}");
            } else if (f.getType().equals(String.class)) {
                print("\\\"\\(object." + f.getName() + "!)\\\"");
            } else {
                print("\\(" + f.getType().getSimpleName() + ".Serializer.toJSON(object." + f.getName() + "!))");
            }

            if (!last) {
                print(", \"");
            } else {
                print("\"");
            }
            print(")");
            print(" : jsonString.appendString(\"");
            print("\\\"" + f.getName() + "\\\": null");
            if (!last) {
                println(", \")");
            } else {
                println("\")");
            }
        }
    }

    @Override
    protected void endBean(String simpleName, Class clazz) {
        if (!clazz.isEnum()) {

            List<Field> fieldList = new ArrayList<>();
            for (Field f : clazz.getDeclaredFields()) {
                fieldList.add(f);
            }
            if (!clazz.getSuperclass().equals(Object.class)) {
                if (clazz.getSuperclass().getDeclaredFields().length > 0) {
                    for (Field f : clazz.getSuperclass().getDeclaredFields()) {
                        fieldList.add(f);
                    }
                }
            }
            fieldList.sort(new Comparator<Field>() {
                @Override
                public int compare(Field o1, Field o2) {
                    return o1.getName().compareTo(o2.getName());
                }
            });

            startComment(4);
            println(7, "JSON Serialization and deserialization support.");
            endComment(4);
            println(4, "struct Serializer {");
            println(8, "static func fromJSON(json : String) -> " + simpleName + " {");
            println(12, "var data:NSData = json.dataUsingEncoding(NSUTF8StringEncoding)!");
            println(12, "var jsonError: NSError?");
            println(12, "let dict = NSJSONSerialization.JSONObjectWithData(data, options: NSJSONReadingOptions.MutableContainers, error: &jsonError) as NSDictionary");
            println(12, "return fromDictionary(dict)");
            println(8, "}");
            println();
            println(8, "static func fromDictionary(dict : NSDictionary) -> " + simpleName + " {");
            println(12, "var resultObject : " + simpleName + " = " + simpleName + "()");
            for (Field field : fieldList) {
                println();
                println(12, "if let value : AnyObject = dict.objectForKey(\"" + field.getName() + "\") {");
                println(16, "if \"\\(value)\" as NSString != \"<null>\" {");
                if (field.getType().isPrimitive() || field.getType().equals(String.class)) {
                    println(20, "resultObject." + field.getName() + " = (value as " + convertJavaToNativeType(field.getType()) + ")");
                } else if (field.getType().isEnum()) {
                    println(20, "resultObject." + field.getName() + " = " + convertJavaToNativeType(field.getType()) + ".toEnum(((value as NSDictionary)[\"value\"]) as NSString)");
                } else if (field.getType().isArray()) {
                    if (!field.getType().getComponentType().equals(Byte.TYPE)) {
                        println(20, "var " + field.getName() + " : " + convertJavaToNativeType(field.getType()) + " = " + convertJavaToNativeType(field.getType()) + "()");
                        println(20, "for (var i = 0;i < (value as NSArray).count ; i++) {");
                    }
                    if (field.getType().getComponentType().isPrimitive() || field.getType().getComponentType().equals(String.class)) {
                        if (field.getType().getComponentType().equals(Byte.TYPE)) {
                            println(20, "var " + field.getName() + " : " + convertJavaToNativeType(field.getType()) + " = " + convertJavaToNativeType(field.getType()) + "(count: (value as NSArray).count, repeatedValue: 0)");
                            println(20, "var " + field.getName() + "Data : NSData = (value as NSData)");
                            println(20, field.getName() + "Data.getBytes(&" + field.getName() + ", length: (value as NSArray).count * sizeof(UInt8))");
                        } else {
                            println(24, field.getName() + ".append((value as NSArray)[i] as " + convertJavaToNativeType(field.getType().getComponentType()) + ")");
                        }
                    } else if (field.getType().getComponentType().isEnum()) {
                        println(24, field.getName() + ".append(" + convertJavaToNativeType(field.getType().getComponentType()) + ".toEnum(((value as NSDictionary)[\"value\"]) as NSString)");
                    } else {
                        println(24, field.getName() + ".append(" + convertJavaToNativeType(field.getType().getComponentType()) + ".Serializer.fromDictionary((value as NSArray)[i] as NSDictionary))");
                    }
                    if (!field.getType().getComponentType().equals(Byte.TYPE)) {
                        println(20, "}");
                    }
                    println(20, "resultObject." + field.getName() + " = " + field.getName());
                } else {
                    println(20, "resultObject." + field.getName() + " = " + convertJavaToNativeType(field.getType()) + ".Serializer.fromDictionary(value as NSDictionary)");
                }
                println(16, "}");
                println(12, "}");

            }
            println();
            println(12, "return resultObject");
            println(8, "}");
            println();
            println(8, "static func toJSON(object: " + simpleName + ") -> String {");
            println(12, "var jsonString : NSMutableString = NSMutableString()");
            println(12, "// Start Object to JSON");
            println(12, "jsonString.appendString(\"{ \")");

            if (fieldList.size() > 0) {
                println();
                println(12, "// Fields.");
                boolean isLast = false;
                for (int i = 0; i < fieldList.size(); i++) {
                    Field f = fieldList.get(i);

                    if (i < fieldList.size() - 1) {
                        isLast = false;
                    } else {
                        isLast = true;
                    }

                    handleJSONField(f, clazz, isLast);
                }
            }
            println();
            println(12, "// End Object to JSON");
            println(12, "jsonString.appendString(\" }\")");
            println(12, "return jsonString");
            println(8, "}");
            println(4, "}");

        }
        println("}");
    }

    @Override
    protected void startBean(String simpleName, Class clazz, String comment, List<DocletTag> tagList) {
        println(0, "import Foundation");
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
            println(4, "case " + field.getName());
        }
        println();
        startComment(4);
        println(4, "Convert current enum to its string representation value.");
        endComment(4);
        println(4, "public func toString() -> String {");
        println(8, "switch self {");
        for (int i = 0; i < clazz.getDeclaredFields().length - 1; i++) {
            Field field = clazz.getDeclaredFields()[i];
            println(12, "case ." + field.getName() + ": return \"" + field.getName() + "\"");
        }
        println(8, "}");
        println(4, "}");
        println();

        startComment(4);
        println(4, "Create enum from its string representation value.");
        endComment(4);
        println(4, "public static func toEnum(string:String?) -> " + generateEnumClassName(clazz) + " {");
        println(8, "if let validString = string {");
        println(12, "switch validString {");
        for (int i = 0; i < clazz.getDeclaredFields().length - 1; i++) {
            Field field = clazz.getDeclaredFields()[i];
            println(16, "case \"" + field.getName() + "\": return ." + field.getName());
        }
        println(12, "default: return .Unknown");
        println(12, "}");
        println(8, "} else {");
        println(12, "return .Unknown");
        println(8, "}");
        println(4, "}");
        println();
        endBean(generateEnumClassName(clazz), clazz);


        indentPrintStream.flush();
        indentPrintStream.close();
    }
}
