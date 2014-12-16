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
package me.adaptive.tools.jenerator;

import com.thoughtworks.qdox.model.*;
import me.adaptive.tools.jenerator.utils.IndentPrintStream;
import org.reflections.Reflections;
import org.reflections.scanners.ResourcesScanner;
import org.reflections.scanners.SubTypesScanner;
import org.reflections.util.ClasspathHelper;
import org.reflections.util.ConfigurationBuilder;
import org.reflections.util.FilterBuilder;

import java.io.*;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.*;

/**
 * Created by clozano on 01/12/14.
 */
public abstract class GeneratorBase {

    private List<Class> classList;
    private List<JavaClass> sourceList;
    private File outRootPath;
    private Map<Class, JavaClass> mapClassSource;

    public GeneratorBase(File outRootPath, List<Class> classList, List<JavaClass> sourceList) {
        this.outRootPath = outRootPath;
        this.classList = classList;
        this.sourceList = sourceList;
        this.mapClassSource = buildMap(this.classList, this.sourceList);
    }

    private static final Map<Class, JavaClass> buildMap(List<Class> classList, List<JavaClass> sourceList) {
        Map<Class, JavaClass> mapClassSource = new HashMap<>();
        for (JavaClass sourceClass : sourceList) {
            boolean compiledClassFound = false;
            for (Class compiledClass : classList) {
                if (compiledClass.getName().equals(sourceClass.getFullyQualifiedName())) {
                    compiledClassFound = true;
                    mapClassSource.put(compiledClass, sourceClass);
                    break;
                }
            }
            if (!compiledClassFound) {
                System.out.println("WARNING: " + sourceClass.getFullyQualifiedName() + " not found.");
            }
        }

        return mapClassSource;
    }

    private static final String streamToStrings(final InputStream is, final int bufferSize) {
        final char[] buffer = new char[bufferSize];
        final StringBuilder out = new StringBuilder();
        try {
            final Reader in = new InputStreamReader(is, "UTF-8");
            try {
                for (; ; ) {
                    int rsz = in.read(buffer, 0, buffer.length);
                    if (rsz < 0)
                        break;
                    out.append(buffer, 0, rsz);
                }
            } finally {
                in.close();
            }
        } catch (UnsupportedEncodingException ex) {
            ex.printStackTrace();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return out.toString();
    }

    private static void deleteTempFile(File f) {
        if (f.isDirectory()) {
            for (File c : f.listFiles())
                deleteTempFile(c);
        }
        if (!f.delete())
            System.out.println("WARNING: Unable to delete " + f.getAbsolutePath());
    }

    private static final List<DocletTag> enrichTags(List<DocletTag> tags) {
        List<DocletTag> tagList = new ArrayList<>();

        if (tags != null) {
            tagList.addAll(tags);
        }
        boolean hasAuthor = false;
        boolean hasVersion = false;
        boolean hasSince = false;
        for (DocletTag tag : tagList) {
            if (tag.getName().equals("author")) {
                hasAuthor = true;
            }
            if (tag.getName().equals("version")) {
                hasVersion = true;
            }
            if (tag.getName().equals("since")) {
                hasSince = true;
            }
        }
        if (!hasAuthor) {
            tagList.add(new DocletTag() {
                @Override
                public String getName() {
                    return "author";
                }

                @Override
                public String getValue() {
                    return "Carlos Lozano Diez";
                }

                @Override
                public List<String> getParameters() {
                    return null;
                }

                @Override
                public String getNamedParameter(String key) {
                    return null;
                }

                @Override
                public Map<String, String> getNamedParameterMap() {
                    return null;
                }

                @Override
                public int getLineNumber() {
                    return 0;
                }

                @Override
                public JavaAnnotatedElement getContext() {
                    return null;
                }
            });
        }

        if (!hasVersion) {
            tagList.add(new DocletTag() {
                @Override
                public String getName() {
                    return "version";
                }

                @Override
                public String getValue() {
                    return "1.0";
                }

                @Override
                public List<String> getParameters() {
                    return null;
                }

                @Override
                public String getNamedParameter(String key) {
                    return null;
                }

                @Override
                public Map<String, String> getNamedParameterMap() {
                    return null;
                }

                @Override
                public int getLineNumber() {
                    return 0;
                }

                @Override
                public JavaAnnotatedElement getContext() {
                    return null;
                }
            });
        }

        if (!hasSince) {
            tagList.add(new DocletTag() {
                @Override
                public String getName() {
                    return "since";
                }

                @Override
                public String getValue() {
                    return "1.0";
                }

                @Override
                public List<String> getParameters() {
                    return null;
                }

                @Override
                public String getNamedParameter(String key) {
                    return null;
                }

                @Override
                public Map<String, String> getNamedParameterMap() {
                    return null;
                }

                @Override
                public int getLineNumber() {
                    return 0;
                }

                @Override
                public JavaAnnotatedElement getContext() {
                    return null;
                }
            });
        }

        tagList.sort(new Comparator<DocletTag>() {
            @Override
            public int compare(DocletTag o1, DocletTag o2) {
                return o1.getName().compareTo(o2.getName());
            }
        });

        return tagList;
    }

    protected static String generateEnumClassName(Class clazz) {
        List<String> nameComponents = new ArrayList<>();
        StringBuffer word = null;
        for (char c : (clazz.getDeclaringClass().getSimpleName() + clazz.getSimpleName()).toCharArray()) {
            if (Character.isUpperCase(c)) {
                if (word == null) {
                    word = new StringBuffer();
                    word.append(c);
                } else {
                    if (!nameComponents.contains(word.toString())) {
                        nameComponents.add(word.toString());
                    }
                    word = new StringBuffer();
                    word.append(c);
                }
            } else {
                word.append(c);
            }
        }

        if (!nameComponents.contains(word.toString())) {
            nameComponents.add(word.toString());
        }

        word = new StringBuffer();
        for (String name : nameComponents) {
            word.append(name);
        }
        return word.toString();
    }

    public void generateSourceCode(GeneratorCallback callback) throws Exception {
        if (outRootPath.exists()) {
            outRootPath.delete();
        }
        outRootPath.mkdirs();

        startGeneration();
        for (Class clazz : classList) {
            /**
             * START - Class
             */
            startClass(clazz);
            /**
             * Add standard header.
             */
            startComment(0);
            applyClassHeader(clazz, getSourceHeader());
            endComment(0);
            println();

            if (clazz.isEnum()) {
                System.out.println("Unhandled: " + clazz);
            } else if (clazz.isInterface()) {
                /**
                 * Retrieve class comment from source file.
                 */
                String classComment = mapClassSource.get(clazz).getComment();
                if (classComment == null || classComment.length() == 0) {
                    classComment = "Definition of " + clazz.getSimpleName() + " interface/protocol.";
                }
                /**
                 * Retrieve class comment tags from source file.
                 */
                List<DocletTag> tagList = enrichTags(mapClassSource.get(clazz).getTags());
                /**
                 * Start interface.
                 */
                startInterface(clazz.getSimpleName(), clazz, classComment, tagList);
                /**
                 * Declare methods.
                 */
                List<Method> interfaceMethods = new ArrayList<>();
                List<JavaMethod> interfaceMethodsDoc = mapClassSource.get(clazz).getMethods();
                for (Method method : clazz.getDeclaredMethods()) {
                    interfaceMethods.add(method);
                }
                interfaceMethods.sort(new Comparator<Method>() {
                    @Override
                    public int compare(Method o1, Method o2) {
                        StringBuffer a = new StringBuffer();
                        StringBuffer b = new StringBuffer();

                        a.append(o1.getName());
                        for (Parameter p : o1.getParameters()) {
                            a.append(p.getName());
                            a.append(p.getType());
                            a.append(",");
                        }

                        b.append(o2.getName());
                        for (Parameter p : o2.getParameters()) {
                            b.append(p.getName());
                            b.append(p.getType());
                            b.append(",");
                        }
                        return a.toString().compareTo(b.toString());
                    }
                });
                interfaceMethodsDoc.sort(new Comparator<JavaMethod>() {
                    @Override
                    public int compare(JavaMethod o1, JavaMethod o2) {
                        StringBuffer a = new StringBuffer();
                        StringBuffer b = new StringBuffer();

                        a.append(o1.getName());
                        for (JavaParameter p : o1.getParameters()) {
                            a.append(p.getName());
                            a.append(p.getType());
                            a.append(",");
                        }

                        b.append(o2.getName());
                        for (JavaParameter p : o2.getParameters()) {
                            b.append(p.getName());
                            b.append(p.getType());
                            b.append(",");
                        }

                        return a.toString().compareTo(b.toString());
                    }
                });
                declareInterfaceMethods(clazz.getSimpleName(), clazz, interfaceMethods, interfaceMethodsDoc);
                /**
                 * End interface.
                 */
                endInterface(clazz.getSimpleName(), clazz);
            } else {
                /**
                 * Retrieve class comment from source file.
                 */
                String classComment = mapClassSource.get(clazz).getComment();
                if (classComment == null || classComment.length() == 0) {
                    classComment = "Implementation of " + clazz.getSimpleName() + " bean.";
                }
                /**
                 * Retrieve class comment tags from source file.
                 */
                List<DocletTag> tagList = enrichTags(mapClassSource.get(clazz).getTags());
                /**
                 * Start bean
                 */
                startBean(clazz.getSimpleName(), clazz, classComment, tagList);
                println();
                /**
                 * Start fields.
                 */
                startFields(clazz.getSimpleName(), clazz);

                /**
                 * Process fields.
                 */
                List<Field> normalFields = new ArrayList<>();
                List<Field> enumFields = new ArrayList<>();
                for (Field field : clazz.getDeclaredFields()) {
                    if (field.getType().isEnum()) {
                        enumFields.add(field);
                    } else {
                        normalFields.add(field);
                    }
                }
                normalFields.sort(new Comparator<Field>() {
                    @Override
                    public int compare(Field o1, Field o2) {
                        return o1.getName().compareTo(o2.getName());
                    }
                });
                enumFields.sort(new Comparator<Field>() {
                    @Override
                    public int compare(Field o1, Field o2) {
                        return o1.getName().compareTo(o2.getName());
                    }
                });
                for (Field field : enumFields) {
                    declareField(clazz, field, mapClassSource.get(clazz).getFieldByName(field.getName()));
                }

                for (Field field : normalFields) {
                    declareField(clazz, field, mapClassSource.get(clazz).getFieldByName(field.getName()));
                }

                /**
                 * End fields.
                 */
                endFields(clazz.getSimpleName(), clazz);

                /**
                 * Prepare constructors.
                 */
                List<JavaConstructor> docConstructors = mapClassSource.get(clazz).getConstructors();
                docConstructors.sort(new Comparator<JavaConstructor>() {
                    @Override
                    public int compare(JavaConstructor o1, JavaConstructor o2) {
                        StringBuffer a = new StringBuffer();
                        StringBuffer b = new StringBuffer();

                        a.append(o1.getName());
                        for (JavaParameter p : o1.getParameters()) {
                            a.append(p.getName());
                            a.append(p.getType());
                            a.append(",");
                        }

                        b.append(o2.getName());
                        for (JavaParameter p : o2.getParameters()) {
                            b.append(p.getName());
                            b.append(p.getType());
                            b.append(",");
                        }

                        return a.toString().compareTo(b.toString());
                    }
                });

                List<Constructor> javaConstructors = new ArrayList<>();
                for (Constructor c : clazz.getConstructors()) {
                    javaConstructors.add(c);
                }
                javaConstructors.sort(new Comparator<Constructor>() {
                    @Override
                    public int compare(Constructor o1, Constructor o2) {
                        StringBuffer a = new StringBuffer();
                        StringBuffer b = new StringBuffer();

                        a.append(o1.getName());
                        for (Parameter p : o1.getParameters()) {
                            a.append(p.getName());
                            a.append(p.getType());
                            a.append(",");
                        }

                        b.append(o2.getName());
                        for (Parameter p : o2.getParameters()) {
                            b.append(p.getName());
                            b.append(p.getType());
                            b.append(",");
                        }

                        return a.toString().compareTo(b.toString());
                    }
                });
                /**
                 * Start constructors.
                 */
                startConstructors(clazz.getSimpleName(), clazz);
                /**
                 * Process constructors.
                 */
                declareConstructors(clazz.getSimpleName(), clazz, javaConstructors, docConstructors);
                /**
                 * End constructors.
                 */
                endConstructors(clazz.getSimpleName(), clazz);
                /**
                 * Start getter/setter
                 */
                startGetterSetters(clazz.getSimpleName(), clazz);
                /**
                 * Process getter/setter
                 */
                println();
                for (Field field : enumFields) {
                    declareGetterSetter(clazz, field, mapClassSource.get(clazz).getFieldByName(field.getName()), mapClassSource.get(clazz).getMethods());
                }

                for (Field field : normalFields) {
                    declareGetterSetter(clazz, field, mapClassSource.get(clazz).getFieldByName(field.getName()), mapClassSource.get(clazz).getMethods());
                }
                /**
                 * End getter/setter
                 */
                endGetterSetters(clazz.getSimpleName(), clazz);
                /**
                 * End Bean.
                 */
                println();
                endBean(clazz.getSimpleName(), clazz);
            }
            /**
             * Add standard footer.
             */
            println();
            startComment(0);
            applyClassFooter(clazz, getSourceFooter());
            endComment(0);

            /**
             * END - Class
             */
            endClass(clazz);
            callback.onSuccess(this, clazz);
        }

        List<Class> listenerClasses = getListeners();
        listenerClasses.sort(new InterfaceComparator());
        for (Class clazz : listenerClasses) {
            String className = clazz.getSimpleName();
            if (className.startsWith("I")) className = className.substring(1);
            className = className + "Impl";

            startCustomClass(className, clazz, mapClassSource.get(clazz), false);
            createListenerImplementation(className, clazz, mapClassSource.get(clazz));
            endCustomClass(className, clazz, mapClassSource.get(clazz));
            callback.onSuccess(this, clazz);
        }

        List<Class> callbackClasses = getCallbacks();
        callbackClasses.sort(new InterfaceComparator());
        for (Class clazz : callbackClasses) {
            String className = clazz.getSimpleName();
            if (className.startsWith("I")) className = className.substring(1);
            className = className + "Impl";

            startCustomClass(className, clazz, mapClassSource.get(clazz), false);
            createCallbackImplementation(className, clazz, mapClassSource.get(clazz));
            endCustomClass(className, clazz, mapClassSource.get(clazz));
            callback.onSuccess(this, clazz);
        }

        List<Class> delegateClasses = getDelegates();
        delegateClasses.sort(new InterfaceComparator());
        for (Class clazz : delegateClasses) {
            String className = clazz.getSimpleName();
            if (className.startsWith("I")) className = className.substring(1);
            className = className + "Bridge";

            startCustomClass(className, clazz, mapClassSource.get(clazz), false);
            createHandlerImplementation(className, clazz, mapClassSource.get(clazz));
            endCustomClass(className, clazz, mapClassSource.get(clazz));
            callback.onSuccess(this, clazz);
        }

        for (Class clazz : delegateClasses) {
            if (clazz.getSimpleName().contains("Base") || clazz.getDeclaredMethods().length > 0) {
                String className = clazz.getSimpleName();
                if (className.startsWith("I")) className = className.substring(1);
                className = className + "Delegate";

                startCustomClass(className, clazz, mapClassSource.get(clazz), true);
                createDelegateImplementation(className, clazz, mapClassSource.get(clazz));
                endCustomClass(className, clazz, mapClassSource.get(clazz));
                callback.onSuccess(this, clazz);
            }
        }
        /**
         * Special delegates
         */
        delegateClasses.clear();
        delegateClasses.add(Class.forName("me.adaptive.arp.api.IAppRegistry"));
        delegateClasses.add(Class.forName("me.adaptive.arp.api.IAppContext"));
        delegateClasses.add(Class.forName("me.adaptive.arp.api.IAppContextWebview"));
        for (Class clazz : delegateClasses) {
            String className = clazz.getSimpleName();
            if (className.startsWith("I")) className = className.substring(1);
            className = className + "Bridge";

            startCustomClass(className, clazz, mapClassSource.get(clazz), false);
            createHandlerImplementation(className, clazz, mapClassSource.get(clazz));
            endCustomClass(className, clazz, mapClassSource.get(clazz));
            callback.onSuccess(this, clazz);
        }
        for (Class clazz : delegateClasses) {
            String className = clazz.getSimpleName();
            if (className.startsWith("I")) className = className.substring(1);
            className = className + "Delegate";
            if (clazz.getSimpleName().equals("IAppRegistry")) {
                startCustomClass(className, clazz, mapClassSource.get(clazz), false);
            } else {
                startCustomClass(className, clazz, mapClassSource.get(clazz), true);
            }
            createDelegateImplementation(className, clazz, mapClassSource.get(clazz));
            endCustomClass(className, clazz, mapClassSource.get(clazz));
            callback.onSuccess(this, clazz);
        }
        endGeneration();
        callback.onSuccess(this, this.getClass());
    }

    protected abstract void createDelegateImplementation(String className, Class clazz, JavaClass javaClass);

    protected String getInterfaceGroup(Class clazz) {
        String simpleName = clazz.getSimpleName();
        String groupName = "Invalid";
        switch (simpleName) {
            case "IBaseSensor":
                groupName = "Sensor";
                break;
            case "IBaseNotification":
                groupName = "Notification";
                break;
            case "IBaseSecurity":
                groupName = "Security";
                break;
            case "IBaseApplication":
                groupName = "Application";
                break;
            case "IBaseCommunication":
                groupName = "Communication";
                break;
            case "IBaseData":
                groupName = "Data";
                break;
            case "IBaseUI":
                groupName = "UI";
                break;
            case "IBaseReader":
                groupName = "Reader";
                break;
            case "IBaseSocial":
                groupName = "Social";
                break;
            case "IBasePIM":
                groupName = "PIM";
                break;
            case "IBaseUtil":
                groupName = "Util";
                break;
            case "IBaseMedia":
                groupName = "Media";
                break;
            case "IBaseCommerce":
                groupName = "Commerce";
                break;
            case "IBaseSystem":
                groupName = "System";
                break;
            default:
                groupName = "Invalid";
        }
        return groupName;
    }

    protected abstract void endCustomClass(String className, Class clazz, JavaClass javaClass);

    protected abstract void startCustomClass(String className, Class clazz, JavaClass javaClass, boolean implementation);

    protected abstract void createHandlerImplementation(String simpleName, Class clazz, JavaClass javaClass);

    protected abstract void createCallbackImplementation(String simpleName, Class clazz, JavaClass javaClass);

    protected abstract void createListenerImplementation(String simpleName, Class clazz, JavaClass javaClass);

    private List<Class> getDelegates() {
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
            if (!subClass.getName().endsWith("Callback") && !subClass.getName().endsWith("Listener")) {
                serviceClasses.add(subClass);
            }
        }
        return serviceClasses;
    }

    private List<Class> getCallbacks() {
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
            if (subClass.getName().endsWith("Callback")) {
                serviceClasses.add(subClass);
            }
        }
        return serviceClasses;
    }

    private List<Class> getListeners() {
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
            if (subClass.getName().endsWith("Listener")) {
                serviceClasses.add(subClass);
            }
        }
        return serviceClasses;
    }

    protected abstract void declareInterfaceMethods(String simpleName, Class clazz, List<Method> interfaceMethods, List<JavaMethod> interfaceMethodsDoc);

    protected abstract void endInterface(String simpleName, Class clazz);

    protected abstract void startInterface(String simpleName, Class clazz, String classComment, List<DocletTag> tagList);

    protected abstract void endGetterSetters(String simpleName, Class clazz);

    protected abstract void startGetterSetters(String simpleName, Class clazz);

    protected abstract void declareGetterSetter(Class clazz, Field field, JavaField fieldByName, List<JavaMethod> methods);

    protected abstract void endConstructors(String simpleName, Class clazz);

    protected abstract void declareConstructors(String simpleName, Class clazz, List<Constructor> javaConstructors, List<JavaConstructor> docConstructors);

    protected abstract void startConstructors(String simpleName, Class clazz);

    protected abstract void endGeneration();

    protected abstract void startGeneration();

    protected abstract void endFields(String simpleName, Class clazz);

    protected abstract void startFields(String simpleName, Class clazz);

    protected abstract String convertJavaToNativeType(Class clazzType);

    protected abstract void declareField(Class clazz, Field field, JavaField fieldByName);

    protected abstract IndentPrintStream getIndentStream();

    protected void print(String literal) {
        print(0, literal);
    }

    protected void print(int indent, String literal) {
        getIndentStream().print(indent, literal);
    }

    protected void println() {
        println("");
    }

    protected void println(String literal) {
        println(0, literal);
    }

    protected void println(int indent, String literal) {
        getIndentStream().println(indent, literal);
    }

    protected abstract void endBean(String simpleName, Class clazz);

    protected abstract void startBean(String simpleName, Class clazz, String comment, List<DocletTag> tagList);

    protected void endComment(int indent) {
        println(indent, "*/");
    }

    protected void startComment(int indent) {
        println(indent, "/**");
    }

    protected void applyClassFooter(Class clazz, String sourceFooter) {
        println(sourceFooter);
    }

    protected void applyClassHeader(Class clazz, String sourceHeader) {
        println(sourceHeader);
    }

    protected final File getOutputRootDirectory() {
        return this.outRootPath;
    }

    protected abstract void startClass(Class clazz);

    protected abstract void endClass(Class clazz);

    private String versionString = null;

    protected final String getSourceHeader() {
        String result = "Undefined.";
        try {
            InputStream is = getResourceStream("defaultHeader");
            result = streamToStrings(is, 512);
            if (versionString == null) {
                try {
                    Process p = Runtime.getRuntime().exec("git describe --tags");
                    p.waitFor();
                    byte[] buffer = new byte[p.getInputStream().available()];
                    p.getInputStream().read(buffer);
                    versionString = new String(buffer);
                    versionString = versionString.substring(0, versionString.indexOf('-'));
                } catch (IOException e) {
                    e.printStackTrace();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            result = result.replace("$VERSION$", "@version "+versionString);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return result;
    }

    protected final String getSourceFooter() {
        String result = "Undefined.";
        try {
            InputStream is = getResourceStream("defaultFooter");
            result = streamToStrings(is, 512);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return result;
    }

    private InputStream getResourceStream(String resourceName) throws URISyntaxException, FileNotFoundException {
        // Try implementation specific resource.
        URL url = this.getClass().getResource(resourceName);
        if (url == null) {
            // Use defaults of there's no specific header.
            url = GeneratorBase.class.getResource(resourceName);
        }
        return new FileInputStream(new File(url.toURI()));
    }

    class InterfaceComparator implements Comparator<Class> {

        @Override
        public int compare(Class o1, Class o2) {
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
    }
}
