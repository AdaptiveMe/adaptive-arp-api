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

import com.thoughtworks.qdox.JavaProjectBuilder;
import com.thoughtworks.qdox.model.JavaClass;
import com.thoughtworks.qdox.model.JavaSource;
import org.reflections.Reflections;
import org.reflections.scanners.ResourcesScanner;
import org.reflections.scanners.SubTypesScanner;
import org.reflections.util.ClasspathHelper;
import org.reflections.util.ConfigurationBuilder;
import org.reflections.util.FilterBuilder;

import javax.tools.*;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URI;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.*;

/**
 * Created by clozano on 01/12/14.
 */
public class GeneratorCompiler {

    public static final List<JavaClass> describeSources(File sourceRootDir) {
        long tIn = System.currentTimeMillis();
        List<JavaClass> targetClassList = new ArrayList<>();
        System.out.print("Pre-processing sources");
        JavaProjectBuilder builder = new JavaProjectBuilder();
        builder.addSourceTree(sourceRootDir);

        for (JavaSource source : builder.getSources()) {
            targetClassList.addAll(source.getClasses());
            System.out.print(".");
        }
        System.out.println("DONE");
        System.out.println("Pre-processing sources completed in " + (System.currentTimeMillis() - tIn) + "ms (" + targetClassList.size() + " sources).");
        return targetClassList;
    }

    public static final List<Class> compileSources(File sourceRootDir, String... packages) throws IOException {
        long tIn = System.currentTimeMillis();
        File tempRootDir = File.createTempFile("temp", Long.toString(System.nanoTime()));
        if (tempRootDir.exists()) {
            tempRootDir.delete();
        }
        tempRootDir.mkdirs();
        List<File> sourceFileList = new ArrayList<File>();
        System.out.print("Pre-processing classes");
        processFile(sourceFileList, sourceRootDir);

        List<Class> targetClassList = new ArrayList<>();
        if (compile(sourceFileList, tempRootDir)) {

            for (String package_ : packages) {
                Reflections reflections = new Reflections(new ConfigurationBuilder()
                        .setScanners(new SubTypesScanner(false /* don't exclude Object.class */), new ResourcesScanner())
                        .setUrls(ClasspathHelper.forPackage(package_))
                        .filterInputsBy(new FilterBuilder().include(FilterBuilder.prefix(package_))));

                Set<Class<? extends Object>> allClassesSet = reflections.getSubTypesOf(Object.class);
                List<Class<? extends Object>> allClasses = new ArrayList<>();
                List<Class<? extends Object>> allInterfaces = new ArrayList<>();
                for (Class clazz : allClassesSet) {
                    if (clazz.isInterface()) {
                        allInterfaces.add(clazz);
                    } else {
                        allClasses.add(clazz);
                    }
                    System.out.print(".");
                }

                Collections.sort(allClasses, new NameComparator());
                Collections.sort(allClasses, new InheritanceComparator());


                Collections.sort(allInterfaces, new NameComparator());
                Collections.sort(allInterfaces, new InheritanceComparator());

                targetClassList.addAll(0, allInterfaces);
                targetClassList.addAll(allClasses);
            }
            System.out.println("DONE");
        }
        System.out.println("Pre-processing classes completed in " + (System.currentTimeMillis() - tIn) + "ms (" + targetClassList.size() + " classes).");
        if (tempRootDir.exists()) {
            tempRootDir.deleteOnExit();
        }
        return targetClassList;
    }

    private static void deleteTempFile(File f) {
        if (f.isDirectory()) {
            for (File c : f.listFiles())
                deleteTempFile(c);
        }
        if (!f.delete())
            System.out.println("WARNING: Unable to delete " + f.getAbsolutePath());
    }

    private static void processFile(List<File> sourceFileList, File file) {
        if (file.isDirectory()) {
            File[] files = file.listFiles();
            for (File subFile : files) {
                processFile(sourceFileList, subFile);
            }
        } else {
            if (file.getPath().endsWith(".java")) {
                sourceFileList.add(file);
            }
        }
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
