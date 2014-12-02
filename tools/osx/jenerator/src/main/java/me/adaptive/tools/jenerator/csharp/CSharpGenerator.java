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
 * Created by clozano on 02/12/14.
 */
public class CSharpGenerator extends GeneratorBase {

    private File currentFile;
    private IndentPrintStream indentPrintStream;

    public CSharpGenerator(File outRootPath, List<Class> classList, List<JavaClass> sourceList) {
        super(outRootPath, classList, sourceList);
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

        } else if (classType.equals(Object.class)) {
            return "Object";
        } else if (classType.equals(String.class)) {
            return "string";
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
        println(10, "public "+convertJavaToNativeType(field.getType())+" " + camelCase(field.getName()) + " { get; set; }");
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
        println(5, comment);
        if (tagList.size() > 0) {
            println();
            for (DocletTag tag : tagList) {
                println(5, "@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(5);
        if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class)) {
            println(5, "public class " + simpleName + " : " + clazz.getSuperclass().getSimpleName());
            println(5, "{");
        } else {
            println(5, "public class " + simpleName);
            println(5, "{");
        }
    }

    @Override
    protected void startClass(Class clazz) {
        currentFile = new File(getOutputRootDirectory(), camelCase(clazz.getPackage())+File.separator+clazz.getSimpleName() + ".cs");
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

    private static String camelCase(Package _package) {
        StringBuffer out = new StringBuffer();
        boolean capitalize = true;
        // Strip first part of package name
        for (char c : _package.getName().substring(_package.getName().indexOf('.')+1).toCharArray()) {
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
        return Character.toUpperCase(name.charAt(0))+name.substring(1);
    }
}
