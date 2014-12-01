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

import com.thoughtworks.qdox.model.DocletTag;
import com.thoughtworks.qdox.model.JavaAnnotatedElement;
import com.thoughtworks.qdox.model.JavaClass;
import com.thoughtworks.qdox.model.JavaField;

import java.io.*;
import java.lang.reflect.Field;
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

    public void generateSourceCode(GeneratorCallback callback) throws Exception {
        if (outRootPath.exists()) {
            outRootPath.delete();
        }
        outRootPath.mkdirs();

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

            } else if (clazz.isInterface()) {

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
                 * Bean Class start.
                 */
                startBean(clazz.getSimpleName(), clazz, classComment, tagList);
                println();
                /**
                 * Start declaring fields.
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
                    System.out.println(clazz + " " + field);
                }

                for (Field field : normalFields) {
                    declareField(clazz, field, mapClassSource.get(clazz).getFieldByName(field.getName()));
                }

                /**
                 * Start declaring fields.
                 */
                endFields(clazz.getSimpleName(), clazz);

                /**
                 * Bean Class end.
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
            callback.onSuccess(clazz);
        }
    }

    protected abstract void endFields(String simpleName, Class clazz);

    protected abstract void startFields(String simpleName, Class clazz);

    protected abstract String convertJavaToNativeType(Class clazzType);

    protected abstract void declareField(Class clazz, Field field, JavaField fieldByName);

    protected abstract void print(String literal);

    protected abstract void print(int indent, String literal);

    protected abstract void println();

    protected abstract void println(String literal);

    protected abstract void println(int indent, String literal);

    protected abstract void endBean(String simpleName, Class clazz);

    protected abstract void startBean(String simpleName, Class clazz, String comment, List<DocletTag> tagList);

    protected abstract void endComment(int indent);

    protected abstract void startComment(int indent);

    protected final File getOutputRootDirectory() {
        return this.outRootPath;
    }

    protected abstract void applyClassFooter(Class clazz, String sourceFooter);

    protected abstract void applyClassHeader(Class clazz, String sourceHeader);

    protected abstract void startClass(Class clazz);

    protected abstract void endClass(Class clazz);

    private final String getSourceHeader() {
        String result = "Undefined.";
        try {
            InputStream is = getResourceStream("defaultHeader");
            result = streamToStrings(is, 512);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return result;
    }

    private final String getSourceFooter() {
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
}
