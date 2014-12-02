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
    protected String convertJavaToNativeType(Class clazzType) {
        return null;
    }

    @Override
    protected void declareField(Class clazz, Field field, JavaField fieldByName) {

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
        indentPrintStreamH.println("#import <Foundation/Foundation.h>");
        if (clazz.getSuperclass() != null && !clazz.getSuperclass().equals(Object.class)) {
            indentPrintStreamH.println("#import <"+clazz.getSuperclass().getSimpleName()+".h>");
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
            indentPrintStreamH.println("@interface "+simpleName+" : "+ clazz.getSuperclass().getSimpleName());
        } else {
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
            indentPrintStreamH.println("@interface "+simpleName+" : NSObject");
        }
        indentPrintStream.println("#import <"+simpleName+".h>");
        indentPrintStream.println("");
        indentPrintStream.println("/**");
        if (tagList.size() > 0) {
            indentPrintStream.println();
            for (DocletTag tag : tagList) {
                indentPrintStream.println("@" + tag.getName() + " " + tag.getValue());
            }
        }
        indentPrintStream.println("*/");
        indentPrintStream.println("@implementation "+simpleName+" {");
    }

    @Override
    protected void startClass(Class clazz) {
        if (clazz.isInterface()) {
            currentFileH = new File(getOutputRootDirectory(), clazz.getSimpleName() + ".h");
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
            currentFileH = new File(getOutputRootDirectory(), clazz.getSimpleName() + ".h");
            if (currentFileH.exists()) {
                currentFileH.delete();
            }
            try {
                indentPrintStreamH = new IndentPrintStream(new FileOutputStream(currentFileH));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            currentFile = new File(getOutputRootDirectory(), clazz.getSimpleName() + ".m");
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
        if (indentPrintStream!=null) indentPrintStream.print(indent, literal);
        if (indentPrintStreamH!=null) indentPrintStreamH.print(indent, literal);
    }

    @Override
    protected final void println(int indent, String literal) {
        if (indentPrintStream!=null) indentPrintStream.println(indent, literal);
        if (indentPrintStreamH!=null) indentPrintStreamH.println(indent, literal);
    }
}
