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
public class ObjCGenerator extends GeneratorBase {

    private File currentFile;
    private IndentPrintStream indentPrintStream;
    private File currentFileH;
    private IndentPrintStream indentPrintStreamH;

    public ObjCGenerator(File outRootPath, List<Class> classList, List<JavaClass> sourceList) {
        super(outRootPath, classList, sourceList);
    }

    @Override
    protected void endInterface(String simpleName, Class clazz) {
        indentPrintStreamH.println("@end");
    }

    @Override
    protected void startInterface(String simpleName, Class clazz, String classComment, List<DocletTag> tagList) {
        List<String> referenceList = new ArrayList<>();
        referenceList.add("Foundation/Foundation");

        if (clazz.getInterfaces() != null && clazz.getInterfaces().length==1) {
            referenceList.add(filterClassName(clazz.getInterfaces()[0].getSimpleName()));
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
        indentPrintStreamH.println(classComment);
        if (tagList.size() > 0) {
            indentPrintStreamH.println();
            for (DocletTag tag : tagList) {
                indentPrintStreamH.println("@" + tag.getName() + " " + tag.getValue());
            }
        }
        indentPrintStreamH.println("*/");
        if (clazz.isEnum()) {
            indentPrintStreamH.println("@protocol " + filterClassName(simpleName) + " <NSObject>");
        } else if (clazz.getInterfaces() != null && clazz.getInterfaces().length == 1) {
            indentPrintStreamH.println("@protocol " + filterClassName(simpleName) + " <" + filterClassName(clazz.getInterfaces()[0].getSimpleName())+">");
        } else {
            indentPrintStreamH.println("@protocol " + filterClassName(simpleName) + " <NSObject>");
        }
        indentPrintStreamH.println();
        /**
         * Process all enums.
         */
        List<Class> enumClasses = new ArrayList<>();
        for (Method method : clazz.getDeclaredMethods()) {
            for (Parameter parameter : method.getParameters()) {
                Class enumClass = null;
                if (parameter.getType().isEnum()) {
                    enumClass = parameter.getType();
                } else if (parameter.getType().isArray() && parameter.getType().getComponentType().isEnum()) {
                    enumClass = parameter.getType().getComponentType();
                }

                if (enumClass != null) {
                    if (!enumClasses.contains(enumClass)) {
                        enumClasses.add(enumClass);
                    }
                }
            }
        }

        enumClasses.sort(new Comparator<Class>() {
            @Override
            public int compare(Class o1, Class o2) {
                return o1.getName().compareTo(o2.getName());
            }
        });
        for (Class enumClass : enumClasses) {
            indentPrintStreamH.println(5, "typedef NS_OPTIONS(NSUInteger, " + convertJavaToNativeType(enumClass) + ") {");
            for (int i = 0; i < enumClass.getDeclaredFields().length - 1; i++) {
                Field ef = enumClass.getDeclaredFields()[i];
                indentPrintStreamH.print(10, convertJavaToNativeType(enumClass) + "_" + ef.getName() + " = " + i);
                if (i < enumClass.getDeclaredFields().length - 2) {
                    indentPrintStreamH.println(",");
                } else {
                    indentPrintStreamH.println();
                }
            }
            indentPrintStreamH.println(5, "};");
            indentPrintStreamH.println();
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

            if (c.getParameters().length == 0) {
                indentPrintStream.println(5, "- (id) init {");
                indentPrintStream.println(10, "self = [self init];");
                indentPrintStream.println(10, "return self;");
                indentPrintStreamH.println(5,"- (id) init;");
            } else {
                indentPrintStream.print(5, "- (id) initWith");
                indentPrintStreamH.print(5, "- (id) initWith");
                for (int j=0;j<c.getParameters().length;j++) {
                    Parameter parameter = c.getParameters()[j];
                    indentPrintStream.print(camelCase(parameter.getName()));
                    indentPrintStreamH.print(camelCase(parameter.getName()));
                }
                indentPrintStream.print(":");
                indentPrintStreamH.print(":");
                for (int j=0;j<c.getParameters().length;j++) {
                    Parameter parameter = c.getParameters()[j];
                    if (j == 0) {
                        indentPrintStream.print("(" + convertJavaToNativeType(parameter.getType()) + "*)" + parameter.getName());
                        indentPrintStreamH.print("(" + convertJavaToNativeType(parameter.getType()) + "*)" + parameter.getName());
                    } else {
                        indentPrintStream.print(parameter.getName() + ":(" + convertJavaToNativeType(parameter.getType()) + "*)" + parameter.getName());
                        indentPrintStreamH.print(parameter.getName() + ":(" + convertJavaToNativeType(parameter.getType()) + "*)" + parameter.getName());
                    }
                    if (j<c.getParameters().length-1) {
                        indentPrintStream.print(" ");
                        indentPrintStreamH.print(" ");
                    }
                }
                indentPrintStream.println(" {");
                indentPrintStreamH.println(";");

                if (!clazz.getSuperclass().equals(Object.class)) {
                    indentPrintStream.print(10, "self = [super initWith");
                    for (int j=0;j<c.getParameters().length;j++) {
                        Parameter parameter = c.getParameters()[j];
                        indentPrintStream.print(camelCase(parameter.getName()));
                    }
                    indentPrintStream.print(":");

                    for (int j=0;j<c.getParameters().length;j++) {
                        Parameter parameter = c.getParameters()[j];
                        indentPrintStream.print(parameter.getName());
                        if (j<c.getParameters().length-1) {
                            indentPrintStream.print(", ");
                        }
                    }
                    indentPrintStream.println("];");
                    indentPrintStream.println(10, "if (self) {");
                } else {
                    indentPrintStream.println(10, "self = [self init];");
                    indentPrintStream.println(10, "if (self) {");
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
                    if (thisField) indentPrintStream.println(15, "[self set" + camelCase(parameter.getName()) + ":" + parameter.getName()+"];");
                }
                indentPrintStream.println(10, "}");
                indentPrintStream.println(10, "return self;");
            }
            indentPrintStream.println(5,"}");
        }
    }

    @Override
    protected void startConstructors(String simpleName, Class clazz) {

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
            return "NSArray";
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
            return generateEnumClassName(classType);
        } else if (classType.equals(Object.class)) {
            return "NSObject";
        } else if (classType.equals(String.class)) {
            return "NSString";
        } else {
            if (classType.isInterface()) {
                return "NSObject<"+classType.getSimpleName()+">";
            } else {
                type = classType.getSimpleName();
            }
        }
        return type;
    }

    @Override
    protected void declareField(Class clazz, Field field, JavaField fieldByName) {
        if (fieldByName.getComment() != null && fieldByName.getComment().length() > 0) {
            indentPrintStreamH.println(5, "/**");
            indentPrintStreamH.println(8, fieldByName.getComment());
            if (field.getType().isArray()) {
                indentPrintStreamH.println(8, "Array objects must be of " + filterClassName(field.getType().getComponentType().getSimpleName()) + " type.");
            }
            indentPrintStreamH.println(5, "*/");
        }

        boolean fieldIsEnum = false;
        if (field.getType().isArray() && field.getType().getComponentType().isEnum()) {
            fieldIsEnum = true;
        } else if (field.getType().isEnum()) {
            fieldIsEnum = true;
        }

        if (fieldIsEnum) {
            indentPrintStreamH.println(5, "typedef NS_OPTIONS(NSUInteger, " + convertJavaToNativeType(field.getType()) + ") {");
            for (int i = 0; i < field.getType().getDeclaredFields().length - 1; i++) {
                Field ef = field.getType().getDeclaredFields()[i];
                indentPrintStreamH.print(10, convertJavaToNativeType(field.getType()) + "_" + ef.getName() + " = " + i);
                if (i < field.getType().getDeclaredFields().length - 2) {
                    indentPrintStreamH.println(",");
                } else {
                    indentPrintStreamH.println();
                }
            }
            indentPrintStreamH.println(5, "};");
            indentPrintStreamH.println();
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
        if (!clazz.isEnum()) {
            indentPrintStream.println("");
            indentPrintStream.println("@end");
        }
    }

    @Override
    protected void startBean(String simpleName, Class clazz, String comment, List<DocletTag> tagList) {
        List<String> referenceList = new ArrayList<>();
        referenceList.add("Foundation/Foundation");

        if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class) && !clazz.getSuperclass().equals(Enum.class)) {
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
        if (clazz.isEnum()) {
            indentPrintStreamH.println("@interface " + filterClassName(simpleName) + " : NSObject");
        } else if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class)) {
            indentPrintStreamH.println("@interface " + filterClassName(simpleName) + " : " + filterClassName(clazz.getSuperclass().getSimpleName()));
        } else {
            indentPrintStreamH.println("@interface " + filterClassName(simpleName) + " : NSObject");
        }

        if (!clazz.isEnum()) {
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
            indentPrintStream.println("@implementation " + filterClassName(simpleName) + "");
        }
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

    private static String camelCase(String name) {
        return Character.toUpperCase(name.charAt(0)) + name.substring(1);
    }

}
