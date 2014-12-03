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
package me.adaptive.tools.jenerator.objc;

import com.thoughtworks.qdox.model.DocletTag;
import com.thoughtworks.qdox.model.JavaClass;
import com.thoughtworks.qdox.model.JavaField;
import me.adaptive.tools.jenerator.GeneratorBase;
import me.adaptive.tools.jenerator.utils.IndentPrintStream;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * Created by clozano on 02/12/14.
 */
public class ObjCGenerator extends GeneratorBase {

    private File currentFile;
    private IndentPrintStream indentPrintStream;
    private File currentFileH;
    private IndentPrintStream indentPrintStreamH;

    public ObjCGenerator(File outRootPath, List<Class> classList, List<JavaClass> sourceList) {
        super(outRootPath, classList, sourceList);
    }

    private static String filterClassName(String simpleName) {
        if (simpleName.equals("Locale")) {
            simpleName = "Local" + simpleName;
        }

        return simpleName;
    }

    @Override
    protected void endGeneration() {

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
            return "NSArray";//convertJavaToNativeType(classType.getComponentType()) + "[]";
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

        } else if (classType.equals(Object.class)) {
            return "NSObject";
        } else if (classType.equals(String.class)) {
            return "NSString";
        } else {
            type = classType.getSimpleName();
        }
        return type;
    }

    @Override
    protected void declareField(Class clazz, Field field, JavaField fieldByName) {
        if (fieldByName.getComment() != null && fieldByName.getComment().length() > 0) {
            indentPrintStreamH.println(5, "/**");
            indentPrintStreamH.println(8, fieldByName.getComment());
            if (field.getType().isArray()) {
                indentPrintStreamH.println(8, "Array objects must be of "+filterClassName(field.getType().getComponentType().getSimpleName())+" type.");
            }
            indentPrintStreamH.println(5, "*/");
        }
        indentPrintStreamH.println(5, "@property " + convertJavaToNativeType(field.getType()) + " *" + field.getName() + ";");
    }

    @Override
    protected IndentPrintStream getIndentStream() {
        return this.indentPrintStream;
    }

    @Override
    protected void endBean(String simpleName, Class clazz) {
        indentPrintStreamH.println("@end");
        indentPrintStream.println("}");
        indentPrintStream.println("@end");
    }

    @Override
    protected void startBean(String simpleName, Class clazz, String comment, List<DocletTag> tagList) {
        List<String> referenceList = new ArrayList<>();
        referenceList.add("Foundation/Foundation");

        if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class)) {
            referenceList.add(filterClassName(clazz.getSuperclass().getSimpleName()));
        }
        for (Field field : clazz.getDeclaredFields()) {
            Class type = field.getType();
            if (!type.isPrimitive() && !type.equals(Object.class) && !type.equals(String.class) && !type.isArray() && !type.isEnum()) {
                if (!referenceList.contains(filterClassName(type.getSimpleName()))) {
                    referenceList.add(filterClassName(type.getSimpleName()));
                }
            } else if (type.isArray()) {
                Class component = type.getComponentType();
                if (!component.isPrimitive() && !component.equals(Object.class) && !component.equals(String.class) && !component.isArray() && !type.isEnum()) {
                    if (!referenceList.contains(filterClassName(component.getSimpleName()))) {
                        referenceList.add(filterClassName(component.getSimpleName()));
                    }
                }
            } else if (type.isEnum()) {
                // TODO: Process enum references.
            }
        }

        referenceList.sort(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.compareTo(o2);
            }
        });

        for (String reference : referenceList) {
            indentPrintStreamH.println("#import <" + reference + ".h>");
        }

        indentPrintStreamH.println();
        indentPrintStreamH.println("/**");
        indentPrintStreamH.println(comment);
        if (tagList.size() > 0) {
            indentPrintStreamH.println();
            for (DocletTag tag : tagList) {
                indentPrintStreamH.println("@" + tag.getName() + " " + tag.getValue());
            }
        }
        indentPrintStreamH.println("*/");

        if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class)) {
            indentPrintStreamH.println("@interface " + filterClassName(simpleName) + " : " + filterClassName(clazz.getSuperclass().getSimpleName()));
        } else {
            indentPrintStreamH.println("@interface " + filterClassName(simpleName) + " : NSObject");
        }


        indentPrintStream.println("#import <" + filterClassName(simpleName) + ".h>");
        indentPrintStream.println("");
        indentPrintStream.println("/**");
        if (tagList.size() > 0) {
            indentPrintStream.println();
            for (DocletTag tag : tagList) {
                indentPrintStream.println("@" + tag.getName() + " " + tag.getValue());
            }
        }
        indentPrintStream.println("*/");
        indentPrintStream.println("@implementation " + filterClassName(simpleName) + " {");
    }

    @Override
    protected void startClass(Class clazz) {
        String className = filterClassName(clazz.getSimpleName());
        if (clazz.isInterface()) {
            currentFileH = new File(getOutputRootDirectory(), className + ".h");
            if (currentFileH.exists()) {
                currentFileH.delete();
            }
            try {
                indentPrintStreamH = new IndentPrintStream(new FileOutputStream(currentFileH));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            currentFile = null;
            indentPrintStream = null;
        } else {
            currentFileH = new File(getOutputRootDirectory(), className + ".h");
            if (currentFileH.exists()) {
                currentFileH.delete();
            }
            try {
                indentPrintStreamH = new IndentPrintStream(new FileOutputStream(currentFileH));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            currentFile = new File(getOutputRootDirectory(), className + ".m");
            if (currentFile.exists()) {
                currentFile.delete();
            }
            try {
                indentPrintStream = new IndentPrintStream(new FileOutputStream(currentFile));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    protected void endClass(Class clazz) {
        if (clazz.isInterface()) {
            indentPrintStreamH.flush();
            indentPrintStreamH.close();
        } else {
            indentPrintStream.flush();
            indentPrintStream.close();
            indentPrintStreamH.flush();
            indentPrintStreamH.close();
        }
        indentPrintStream = null;
        indentPrintStreamH = null;
    }

    @Override
    protected void print(int indent, String literal) {
        if (indentPrintStream != null) indentPrintStream.print(indent, literal);
        if (indentPrintStreamH != null) indentPrintStreamH.print(indent, literal);
    }

    @Override
    protected final void println(int indent, String literal) {
        if (indentPrintStream != null) indentPrintStream.println(indent, literal);
        if (indentPrintStreamH != null) indentPrintStreamH.println(indent, literal);
    }
}
