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
package me.adaptive.tools.jenerator.java;

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
public class JavaGenerator extends GeneratorBase {
    private File currentFile;
    private IndentPrintStream indentPrintStream;

    public JavaGenerator(File outRootPath, List<Class> classList, List<JavaClass> sourceList) {
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
        println("}");
    }

    @Override
    protected void startBean(String simpleName, Class clazz, String comment, List<DocletTag> tagList) {
        println("package " + clazz.getPackage().getName() + ";");
        println();
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
            println("public class " + simpleName + " extends " + clazz.getSuperclass().getSimpleName() + " {");
        } else {
            println("public class " + simpleName + " {");
        }
    }


    @Override
    protected void startClass(Class clazz) {

        currentFile = new File(getOutputRootDirectory(), clazz.getPackage().getName().replace('.',File.separatorChar)+File.separatorChar+clazz.getSimpleName() + ".java");
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
}
