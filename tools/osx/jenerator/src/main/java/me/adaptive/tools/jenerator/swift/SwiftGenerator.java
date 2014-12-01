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

import com.thoughtworks.qdox.model.DocletTag;
import com.thoughtworks.qdox.model.JavaClass;
import com.thoughtworks.qdox.model.JavaField;
import me.adaptive.tools.jenerator.GeneratorBase;
import me.adaptive.tools.jenerator.utils.IndentPrintStream;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.lang.reflect.Field;
import java.util.List;

/**
 * Created by clozano on 01/12/14.
 */
public class SwiftGenerator extends GeneratorBase {

    private File currentFile;
    private IndentPrintStream indentPrintStream;

    public SwiftGenerator(File outRootPath, List<Class> classList, List<JavaClass> sourceList) {
        super(outRootPath, classList, sourceList);
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

        } else if (classType.equals(Object.class)) {
            return "AnyObject";
        } else if (classType.equals(String.class)) {
            return "string";
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
    protected void print(String literal) {
        print(0, literal);
    }

    @Override
    protected void print(int indent, String literal) {
        indentPrintStream.print(indent, literal);
    }

    @Override
    protected void println() {
        println("");
    }

    @Override
    protected void println(String literal) {
        println(0, literal);
    }

    @Override
    protected void println(int indent, String literal) {
        indentPrintStream.println(indent, literal);
    }

    @Override
    protected void endBean(String simpleName, Class clazz) {
        println("}");
    }

    @Override
    protected void startBean(String simpleName, Class clazz, String comment, List<DocletTag> tagList) {
        startComment(0);
        println(comment);
        if (tagList.size() > 0) {
            println();
            for (DocletTag tag : tagList) {
                println("@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(0);
        if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class)) {
            println("public class " + simpleName + " : " + clazz.getSuperclass().getSimpleName() + " {");
        } else {
            println("public class " + simpleName + " : NSObject {");
        }
    }

    @Override
    protected void endComment(int indent) {
        println(indent, "*/");
    }

    @Override
    protected void startComment(int indent) {
        println(indent, "/**");
    }

    @Override
    protected void applyClassFooter(Class clazz, String sourceFooter) {
        println(sourceFooter);
    }

    @Override
    protected void applyClassHeader(Class clazz, String sourceHeader) {
        println(sourceHeader);
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
}
