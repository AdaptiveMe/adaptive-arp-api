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
package me.adaptive.tools.jenerator.typescript;

import com.thoughtworks.qdox.model.*;
import me.adaptive.tools.jenerator.GeneratorBase;
import me.adaptive.tools.jenerator.utils.IndentPrintStream;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * Created by clozano on 02/12/14.
 */
public class TypeScriptGenerator extends GeneratorBase {

    private File currentFile;
    private IndentPrintStream indentPrintStream;
    private File currentFileGlobal;
    private IndentPrintStream indentPrintStreamGlobal;
    private List<String> arrayOfClasses = new ArrayList<>();
    private List<Class> enumClassList = new ArrayList<>();

    public TypeScriptGenerator(File outRootPath, List<Class> classList, List<JavaClass> sourceList) {
        super(outRootPath, classList, sourceList);
    }

    @Override
    protected void endInterface(String simpleName, Class clazz) {
        println(5, "}"); // Class
        indentPrintStreamGlobal.println(5, "}");
        println("}"); // Module
    }

    @Override
    protected void startInterface(String simpleName, Class clazz, String classComment, List<DocletTag> tagList) {
        List<String> referenceList = new ArrayList<>();
        if (!clazz.isEnum()) {
            if (clazz.getInterfaces() != null && clazz.getInterfaces().length==1) {
                referenceList.add(clazz.getInterfaces()[0].getSimpleName());
            }
            for (Field field : clazz.getDeclaredFields()) {
                if (field.getType().isArray()) {
                    if (!field.getType().getComponentType().isPrimitive() && !field.getType().getComponentType().equals(String.class) && !field.getType().getComponentType().equals(Object.class)) {
                        if (!referenceList.contains(field.getType().getComponentType().getSimpleName())) {
                            referenceList.add(field.getType().getComponentType().getSimpleName());
                        }
                    }
                } else if (field.getType().isEnum()) {
                    if (!referenceList.contains(generateEnumClassName(field.getType()))) {
                        referenceList.add(generateEnumClassName(field.getType()));
                    }
                } else if (!field.getType().isPrimitive() && !field.getType().equals(String.class) && !field.getType().equals(Object.class) && !field.getType().equals(clazz)) {
                    if (!referenceList.contains(field.getType().getSimpleName())) {
                        referenceList.add(field.getType().getSimpleName());
                    }
                }
            }
            referenceList.sort(new Comparator<String>() {
                @Override
                public int compare(String o1, String o2) {
                    return o1.compareTo(o2);
                }
            });

            if (referenceList.size() > 0) {
                for (String reference : referenceList) {
                    println("///<reference path=\"" + reference + ".ts\"/>");
                }
                println();
            }
        }

        println("module Adaptive {"); // Module
        println();
        startComment(5);
        startCommentGlobal(5);
        println(8, classComment);
        printlnGlobal(8, classComment);
        if (tagList.size() > 0) {
            println();
            printlnGlobal();
            for (DocletTag tag : tagList) {
                println(8, "@" + tag.getName() + " " + tag.getValue());
                printlnGlobal(8, "@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(5);
        endCommentGlobal(5);
        if (clazz.isEnum()) {
            println(5, "export interface " + generateEnumClassName(clazz) + " {");
            printlnGlobal(5, "export interface " + generateEnumClassName(clazz) + " {");
        } else if (clazz.getInterfaces() != null && clazz.getInterfaces().length == 1) {
            println(5, "export interface " + simpleName + " extends " + clazz.getInterfaces()[0].getSimpleName() + " {");
            printlnGlobal(5, "export interface " + simpleName + " extends " + clazz.getInterfaces()[0].getSimpleName() + " {");
        } else {
            println(5, "export interface " + simpleName + " {");
            printlnGlobal(5, "export interface " + simpleName + " {");
        }
        /**
         * Fields
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
        startComment(10);
        startCommentGlobal(10);
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            println(13, getter.getComment());
            printlnGlobal(13, getter.getComment());
        } else {
            println(13, "Gets " + fieldByName.getComment());
            printlnGlobal(13, "Gets " + fieldByName.getComment());
        }
        println();
        printlnGlobal();
        if (getter != null && getter.getComment() != null && getter.getComment().trim().length() > 0) {
            for (DocletTag tag : getter.getTags()) {
                println(13, "@" + tag.getName() + " " + tag.getValue());
                printlnGlobal(13, "@" + tag.getName() + " " + tag.getValue());
            }
        } else {
            println(13, "@return " + field.getName() + " " + fieldByName.getComment());
            printlnGlobal(13, "@return " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(10);
        endCommentGlobal(10);
        if (field.getType().equals(Boolean.class)) {
            println(10, "is" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
            printlnGlobal(10, "is" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
        } else {
            println(10, "get" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
            printlnGlobal(10, "get" + fieldName + "() : " + convertJavaToNativeType(field.getType()) + " {");
        }

        println(15, "return this." + field.getName() + ";");
        printlnGlobal(15, "return this." + field.getName() + ";");
        println(10, "}");
        printlnGlobal(10, "}");
        println();
        printlnGlobal();
        /**
         * Setters
         */
        startComment(10);
        startCommentGlobal(10);
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            println(13, setter.getComment());
            printlnGlobal(13, setter.getComment());
        } else {
            println(13, "Sets " + fieldByName.getComment());
            printlnGlobal(13, "Sets " + fieldByName.getComment());
        }
        println();
        printlnGlobal();
        if (setter != null && setter.getComment() != null && setter.getComment().trim().length() > 0) {
            for (DocletTag tag : setter.getTags()) {
                println(13, "@" + tag.getName() + " " + tag.getValue());
                printlnGlobal(13, "@" + tag.getName() + " " + tag.getValue());
            }
        } else {
            println(13, "@param " + field.getName() + " " + fieldByName.getComment());
            printlnGlobal(13, "@param " + field.getName() + " " + fieldByName.getComment());
        }
        endComment(10);
        endCommentGlobal(10);
        println(10, "set" + fieldName + "(" + field.getName() + ": " + convertJavaToNativeType(field.getType()) + ") {");
        println(15, "this." + field.getName() + " = " + field.getName() + ";");
        println(10, "}");
        println();
        printlnGlobal(10, "set" + fieldName + "(" + field.getName() + ": " + convertJavaToNativeType(field.getType()) + ") {");
        printlnGlobal(15, "this." + field.getName() + " = " + field.getName() + ";");
        printlnGlobal(10, "}");
        printlnGlobal();
    }

    @Override
    protected void endConstructors(String simpleName, Class clazz) {

    }

    @Override
    protected void declareConstructors(String simpleName, Class clazz, List<Constructor> javaConstructors, List<JavaConstructor> docConstructors) {
        // TS can only have one constructor - pick most complete convenience constructor.
        int selectedIndex = 0;
        int selectedCount = 0;
        for (int i = 0; i < javaConstructors.size(); i++) {
            Constructor constructor = javaConstructors.get(i);
            if (constructor.getParameterCount() > selectedCount) {
                selectedCount = constructor.getParameterCount();
                selectedIndex = i;
            }
        }
        Constructor c = javaConstructors.get(selectedIndex);
        JavaConstructor d = docConstructors.get(selectedIndex);

        startComment(10);
        startCommentGlobal(10);
        if (d.getComment() != null && d.getComment().trim().length() > 0) {
            println(13, d.getComment());
            printlnGlobal(13, d.getComment());
        } else {
            println(13, "Constructor.");
            printGlobal(13, "Constructor.");
        }
        if (d.getTags().size() > 0) {
            println();
            printlnGlobal();
        }
        for (DocletTag tag : d.getTags()) {
            println(13, "@" + tag.getName() + " " + tag.getValue());
            printlnGlobal(13, "@" + tag.getName() + " " + tag.getValue());
        }
        endComment(10);
        endCommentGlobal(10);

        print(10, "constructor(");
        printGlobal(10, "constructor(");
        for (int i = 0; i < c.getParameterCount(); i++) {
            Parameter p = c.getParameters()[i];
            print(p.getName() + ": " + convertJavaToNativeType(p.getType()));
            printGlobal(0, p.getName() + ": " + convertJavaToNativeType(p.getType()));
            if (i < c.getParameterCount() - 1) {
                print(", ");
                printGlobal(0, ", ");
            }
        }
        println(") {");
        printlnGlobal(0, ") {");

        if (!clazz.getSuperclass().equals(Object.class)) {
            print(15, "super(");
            printGlobal(15, "super(");
            for (int j = 0; j < c.getParameters().length; j++) {
                Parameter parameter = c.getParameters()[j];
                print(parameter.getName());
                printGlobal(0, parameter.getName());
                if (j < c.getParameters().length - 1) {
                    print(", ");
                    printGlobal(0, ", ");
                }
            }
            println(");");
            printlnGlobal(0, ");");
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
            if (thisField) {
                println(15, "this." + parameter.getName() + " = " + parameter.getName() + ";");
                printlnGlobal(15, "this." + parameter.getName() + " = " + parameter.getName() + ";");
            }
        }
        println(10, "}");
        printlnGlobal(10, "}");
    }

    @Override
    protected void startConstructors(String simpleName, Class clazz) {

    }

    @Override
    protected void endGeneration() {
        currentFile = new File(getOutputRootDirectory(), "join.sh");
        if (currentFile.exists()) {
            currentFile.delete();
        }
        try {
            indentPrintStream = new IndentPrintStream(new FileOutputStream(currentFile));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        println("#!/bin/sh");
        println("# Join all scripts into a combined JavaScript file. NOTE: you *must* include files in their precise order");
        println("# of inheritance and dependency; failing to do this will report errors when creating instances of classes");
        println("# from JavaScript and you're going to have a very bad time. As Mc Hammer would say: 'You can't touch dis!'");
        println("# unless you *really* know what you're doing.");
        println();
        println("# ps. This file is AUTO-GENERATED.");
        println();
        print("tsc --out adaptive-full.js");
        for (String name : arrayOfClasses) {
            print(" " + name);
        }
        println();

        indentPrintStream.flush();
        indentPrintStream.close();
        for (Class enumClass : enumClassList) {
            generateEnumClass(enumClass);
        }

        indentPrintStreamGlobal.println();
        indentPrintStreamGlobal.println("}");
        indentPrintStreamGlobal.println("/**");
        indentPrintStreamGlobal.println(super.getSourceFooter());
        indentPrintStreamGlobal.println("*/");
        indentPrintStreamGlobal.flush();
        indentPrintStreamGlobal.close();
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
            return "Array<" + convertJavaToNativeType(classType.getComponentType()) + ">";
        } else if (classType.isPrimitive()) {
            if (classType.equals(Double.TYPE)) {
                return "number";
            } else if (classType.equals(Integer.TYPE)) {
                return "number";
            } else if (classType.equals(Long.TYPE)) {
                return "number";
            } else if (classType.equals(Byte.TYPE)) {
                return "number";
            } else if (classType.equals(Float.TYPE)) {
                return "number";
            } else if (classType.equals(Boolean.TYPE)) {
                return "boolean";
            } else if (classType.equals(Character.TYPE)) {
                return "string";
            }
        } else if (classType.isEnum()) {
            if (!enumClassList.contains(classType)) {
                enumClassList.add(classType);
            }
            return generateEnumClassName(classType);
        } else if (classType.equals(Object.class)) {
            return "any";
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
            startCommentGlobal(10);
            println(13, fieldByName.getComment());
            printlnGlobal(13, fieldByName.getComment());
            endComment(10);
            endCommentGlobal(10);
        }
        println(10, field.getName() + " : " + convertJavaToNativeType(field.getType()) + ";");
        printlnGlobal(10, field.getName() + " : " + convertJavaToNativeType(field.getType()) + ";");
    }

    @Override
    protected IndentPrintStream getIndentStream() {
        return this.indentPrintStream;
    }

    @Override
    protected void endBean(String simpleName, Class clazz) {
        println(5, "}"); // Class
        indentPrintStreamGlobal.println(5, "}");
        println("}"); // Module
    }

    @Override
    protected void startBean(String simpleName, Class clazz, String comment, List<DocletTag> tagList) {
        List<String> referenceList = new ArrayList<>();
        if (!clazz.isEnum()) {
            if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class) && !clazz.getSuperclass().equals(Enum.class)) {
                referenceList.add(clazz.getSuperclass().getSimpleName());
            }
            for (Field field : clazz.getDeclaredFields()) {
                if (field.getType().isArray()) {
                    if (!field.getType().getComponentType().isPrimitive() && !field.getType().getComponentType().equals(String.class) && !field.getType().getComponentType().equals(Object.class)) {
                        if (!referenceList.contains(field.getType().getComponentType().getSimpleName())) {
                            referenceList.add(field.getType().getComponentType().getSimpleName());
                        }
                    }
                } else if (field.getType().isEnum()) {
                    if (!referenceList.contains(generateEnumClassName(field.getType()))) {
                        referenceList.add(generateEnumClassName(field.getType()));
                    }
                } else if (!field.getType().isPrimitive() && !field.getType().equals(String.class) && !field.getType().equals(Object.class) && !field.getType().equals(clazz)) {
                    if (!referenceList.contains(field.getType().getSimpleName())) {
                        referenceList.add(field.getType().getSimpleName());
                    }
                }
            }
            referenceList.sort(new Comparator<String>() {
                @Override
                public int compare(String o1, String o2) {
                    return o1.compareTo(o2);
                }
            });

            if (referenceList.size() > 0) {
                for (String reference : referenceList) {
                    println("///<reference path=\"" + reference + ".ts\"/>");
                }
                println();
            }
        }

        println("module Adaptive {"); // Module
        println();
        startComment(5);
        startCommentGlobal(5);
        println(8, comment);
        printlnGlobal(8, comment);
        if (tagList.size() > 0) {
            println();
            printlnGlobal();
            for (DocletTag tag : tagList) {
                println(8, "@" + tag.getName() + " " + tag.getValue());
                printlnGlobal(8, "@" + tag.getName() + " " + tag.getValue());
            }
        }
        endComment(5);
        endCommentGlobal(5);
        if (clazz.isEnum()) {
            println(5, "export class " + generateEnumClassName(clazz) + " {");
            printlnGlobal(5, "export class " + generateEnumClassName(clazz) + " {");
        } else if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class)) {
            println(5, "export class " + simpleName + " extends " + clazz.getSuperclass().getSimpleName() + " {");
            printlnGlobal(5, "export class " + simpleName + " extends " + clazz.getSuperclass().getSimpleName() + " {");
        } else {
            println(5, "export class " + simpleName + " {");
            printlnGlobal(5, "export class " + simpleName + " {");
        }
    }

    private void printGlobal(int indent, String value) {
        if (indentPrintStreamGlobal != null) {
            indentPrintStreamGlobal.print(indent, value);
        }
    }

    private void printGlobal(int indent) {
        this.printlnGlobal(indent, "");
    }

    private void printlnGlobal(int indent, String value) {
        if (indentPrintStreamGlobal != null) {
            indentPrintStreamGlobal.println(indent, value);
        }
    }

    private void printlnGlobal(int indent) {
        this.printlnGlobal(indent, "");
    }

    private void printlnGlobal() {
        this.printlnGlobal(0);
    }

    private void startCommentGlobal(int indent) {
        if (indentPrintStreamGlobal != null) {
            indentPrintStreamGlobal.println(indent, "/**");
        }
    }

    private void endCommentGlobal(int indent) {
        if (indentPrintStreamGlobal != null) {
            indentPrintStreamGlobal.println(indent, "*/");
        }
    }

    @Override
    protected void startClass(Class clazz) {
        currentFile = new File(getOutputRootDirectory(), clazz.getSimpleName() + ".ts");
        if (currentFile.exists()) {
            currentFile.delete();
        }
        try {
            indentPrintStream = new IndentPrintStream(new FileOutputStream(currentFile));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        if (currentFileGlobal == null) {
            currentFileGlobal = new File(getOutputRootDirectory(), "Adaptive.ts");
            if (currentFileGlobal.exists()) {
                currentFileGlobal.delete();
            }
            try {
                indentPrintStreamGlobal = new IndentPrintStream(new FileOutputStream(currentFileGlobal));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            indentPrintStreamGlobal.println("/**");
            indentPrintStreamGlobal.println(super.getSourceHeader());
            indentPrintStreamGlobal.println("*/");
            indentPrintStreamGlobal.println("module Adaptive {");
            indentPrintStreamGlobal.println();
        }
        this.arrayOfClasses.add(clazz.getSimpleName() + ".ts");
    }

    @Override
    protected void endClass(Class clazz) {
        indentPrintStream.flush();
        indentPrintStream.close();
    }

    private void generateEnumClass(Class clazz) {
        currentFile = new File(getOutputRootDirectory(), generateEnumClassName(clazz) + ".ts");
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
        printlnGlobal();
        println(10, "constructor(public value:string){}");
        println(10, "toString(){return this.value;}");
        printlnGlobal(10, "constructor(public value:string){}");
        printlnGlobal(10, "toString(){return this.value;}");
        println();
        printlnGlobal();
        for (int i = 0; i < clazz.getDeclaredFields().length - 1; i++) {
            Field field = clazz.getDeclaredFields()[i];
            println(10, "static " + field.getName() + " = new " + generateEnumClassName(clazz) + "(\"" + field.getName() + "\");");
            printlnGlobal(10, "static " + field.getName() + " = new " + generateEnumClassName(clazz) + "(\"" + field.getName() + "\");");
        }
        println();
        printlnGlobal();
        endBean(generateEnumClassName(clazz), clazz);


        indentPrintStream.flush();
        indentPrintStream.close();
    }
}
