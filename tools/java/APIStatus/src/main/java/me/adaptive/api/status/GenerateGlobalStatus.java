package me.adaptive.api.status;

import org.reflections.Reflections;
import org.reflections.scanners.ResourcesScanner;
import org.reflections.scanners.SubTypesScanner;
import org.reflections.util.ClasspathHelper;
import org.reflections.util.ConfigurationBuilder;
import org.reflections.util.FilterBuilder;

import javax.tools.*;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URI;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.*;

/**
 * Created by clozano on 02/09/2014.
 */
public class GenerateGlobalStatus {

    private static final String YES = ":white_check_mark:";

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
        File targetFile = new File(targetDir, "STATUS_API.md");
        if (targetFile.exists()) {
            targetFile.delete();
        }
        PrintStream ps = new PrintStream(new FileOutputStream(targetFile));
        ps.println("# API Status");
        ps.println("This is the API status at " + new Date().toGMTString() + ".");
        ps.println();

        List<Class> classList = new ArrayList<Class>();
        List<Class> interfaceList = new ArrayList<Class>();
        List<Class> enumList = new ArrayList<Class>();

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
                    if (clazz.isInterface()) {
                        interfaceList.add(clazz);
                    } else if (clazz.isEnum()) {
                        enumList.add(clazz);
                    } else {
                        classList.add(clazz);
                    }
                }

                if (classList.size() > 0) {
                    ps.println("## Classes");
                    classList.sort(new Comparator<Class>() {
                        @Override
                        public int compare(Class o1, Class o2) {
                            return o1.getName().compareTo(o2.getName());
                        }
                    });
                    ps.println("| Class | Java | CSharp | ObjC | Swift |");
                    ps.println("|-------|------|--------|------|-------|");
                    for (Class cl : classList) {
                        ps.print("| ");
                        // name
                        ps.print(cl.getSimpleName());
                        ps.print(" | ");

                        boolean isImplemented = false;
                        if (cl.getMethods().length > 0 || cl.getFields().length > 0) {
                            isImplemented = true;
                        }

                        // Java
                        if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // CSharp
                        if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // ObjC
                        if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // Swift
                        if (isImplemented) ps.print(YES);
                        ps.println(" |");
                    }
                    ps.println();
                }

                if (enumList.size() > 0) {
                    ps.println("## Enumerations");
                    enumList.sort(new Comparator<Class>() {
                        @Override
                        public int compare(Class o1, Class o2) {
                            return o1.getName().compareTo(o2.getName());
                        }
                    });
                    ps.println("| Enum | Java | CSharp | ObjC | Swift |");
                    ps.println("|-------|------|--------|------|-------|");
                    for (Class cl : enumList) {
                        ps.print("| ");
                        // name
                        ps.print(cl.getSimpleName());
                        ps.print(" | ");

                        boolean isImplemented = false;
                        if (cl.getMethods().length > 0 || cl.getFields().length > 0) {
                            isImplemented = true;
                        }

                        // Java
                        if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // CSharp
                        if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // ObjC
                        if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // Swift
                        if (isImplemented) ps.print(YES);
                        ps.println(" |");
                    }
                    ps.println();
                }

                if (interfaceList.size() > 0) {
                    ps.println("## Interfaces/Protocols");
                    interfaceList.sort(new Comparator<Class>() {
                        @Override
                        public int compare(Class o1, Class o2) {
                            return o1.getName().compareTo(o2.getName());
                        }
                    });
                    ps.println("| Interface | Java | CSharp | ObjC | Swift |");
                    ps.println("|-------|------|--------|------|-------|");
                    for (Class cl : interfaceList) {
                        ps.print("| ");
                        // name
                        ps.print(cl.getSimpleName());
                        ps.print(" | ");

                        boolean isImplemented = false;
                        if (cl.getMethods().length > 0 || cl.getFields().length > 0) {
                            isImplemented = true;
                        }

                        // Java
                        if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // CSharp
                        if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // ObjC
                        if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // Swift
                        if (isImplemented) ps.print(YES);
                        ps.println(" |");
                    }
                    ps.println();
                }
            }
        }
        System.out.println("Processing: " + (System.currentTimeMillis() - tIn) + " ms.");

        if (!deleteDirectory(tempDir)) {
            System.out.println("Could not delete '" + tempDir.getPath() + "'.");
        }
        return true;
    }

    public static final boolean convertImpl(String sourcePath, String targetPath, String... packages) throws IOException {
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
        File targetFile = new File(targetDir, "STATUS_IMPL.md");
        if (targetFile.exists()) {
            targetFile.delete();
        }
        PrintStream ps = new PrintStream(new FileOutputStream(targetFile));
        ps.println("# Implementation Status");
        ps.println("This is the implementation status at " + new Date().toGMTString() + ".");
        ps.println();

        List<Class> classList = new ArrayList<Class>();
        List<Class> interfaceList = new ArrayList<Class>();
        List<Class> enumList = new ArrayList<Class>();

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
                    if (clazz.isInterface()) {
                        interfaceList.add(clazz);
                    } else if (clazz.isEnum()) {
                        enumList.add(clazz);
                    } else {
                        classList.add(clazz);
                    }
                }

                if (classList.size() > 0) {
                    ps.println("## Classes");
                    classList.sort(new Comparator<Class>() {
                        @Override
                        public int compare(Class o1, Class o2) {
                            return o1.getName().compareTo(o2.getName());
                        }
                    });
                    ps.println("| Name | API | Android-L |  |  |");
                    ps.println("|-------|------|--------|------|-------|");
                    for (Class cl : classList) {
                        ps.print("| ");
                        // name
                        ps.print(cl.getSimpleName());
                        ps.print(" | ");

                        boolean isImplemented = false;
                        if (cl.getMethods().length > 0 || cl.getFields().length > 0) {
                            isImplemented = true;
                        }

                        // API
                        if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // Android-L
                        //if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // NN1
                        //if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // NN2
                        //if (isImplemented) ps.print(YES);
                        ps.println(" |");
                    }
                    ps.println();
                }

                if (enumList.size() > 0) {
                    ps.println("## Enumerations");
                    enumList.sort(new Comparator<Class>() {
                        @Override
                        public int compare(Class o1, Class o2) {
                            return o1.getName().compareTo(o2.getName());
                        }
                    });
                    ps.println("| Name | API | Android-L |  |  |");
                    ps.println("|-------|------|--------|------|-------|");
                    for (Class cl : enumList) {
                        ps.print("| ");
                        // name
                        ps.print(cl.getSimpleName());
                        ps.print(" | ");

                        boolean isImplemented = false;
                        if (cl.getMethods().length > 0 || cl.getFields().length > 0) {
                            isImplemented = true;
                        }

                        // API
                        if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // Android-L
                        //if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // NN1
                        //if (isImplemented) ps.print(YES);
                        ps.print(" | ");
                        // NN2
                        //if (isImplemented) ps.print(YES);
                        ps.println(" |");
                    }
                }
                ps.println();
            }

            if (interfaceList.size() > 0) {
                ps.println("## Interfaces/Protocols");
                interfaceList.sort(new Comparator<Class>() {
                    @Override
                    public int compare(Class o1, Class o2) {
                        return o1.getName().compareTo(o2.getName());
                    }
                });
                ps.println("| Name | API | Android-L |  |  |");
                ps.println("|-------|------|--------|------|-------|");
                for (Class cl : interfaceList) {
                    ps.print("| ");
                    // name
                    ps.print(cl.getSimpleName());
                    ps.print(" | ");

                    boolean isImplemented = false;
                    if (cl.getMethods().length > 0 || cl.getFields().length > 0) {
                        isImplemented = true;
                    }

                    // API
                    if (isImplemented) ps.print(YES);
                    ps.print(" | ");
                    // Android-L
                    //if (isImplemented) ps.print(YES);
                    ps.print(" | ");
                    // NN1
                    //if (isImplemented) ps.print(YES);
                    ps.print(" | ");
                    // NN2
                    //if (isImplemented) ps.print(YES);
                    ps.println(" |");
                }
                ps.println();
            }
        }

        System.out.println("Processing: " + (System.currentTimeMillis() - tIn) + " ms.");

        if (!deleteDirectory(tempDir)) {
            System.out.println("Could not delete '" + tempDir.getPath() + "'.");
        }
        return true;
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

    private static boolean deleteDirectory(File dir) {
        if (dir.isDirectory()) {
            for (File c : dir.listFiles())
                deleteDirectory(c);
        }
        return dir.delete();
    }
}
