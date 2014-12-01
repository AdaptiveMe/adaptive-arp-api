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

import com.thoughtworks.qdox.model.JavaClass;
import me.adaptive.tools.jenerator.swift.SwiftGenerator;

import java.io.File;
import java.util.Collections;
import java.util.List;

/**
 * Created by clozano on 01/12/14.
 */
public class Jenerator {

    public static void main(String[] args) throws Exception {
        String sourcePath = "/Users/clozano/Github/Runtime/adaptive-arp-api/adaptive-arp-api-java/arp-api-specs/src/main/java";
        String targetPath = "/Users/clozano/Github/Runtime/adaptive-arp-api/adaptive-arp-api-swift/ARP";
        String targetPathJS = "/Users/clozano/Github/Runtime/adaptive-arp-api/adaptive-arp-api-js";
        String[] packages = {"me.adaptive.arp.api"};


        List<JavaClass> targetSources = GeneratorCompiler.describeSources(new File(sourcePath));
        List<JavaClass> unmodifiableSourceList = Collections.unmodifiableList(targetSources);
        List<Class> targetClasses = GeneratorCompiler.compileSources(new File(sourcePath), packages);
        List<Class> unmodifiableClassList = Collections.unmodifiableList(targetClasses);

        GeneratorBase generator = new SwiftGenerator(new File("/Users/clozano/Github/Runtime/adaptive-arp-api/out/swift"), unmodifiableClassList, unmodifiableSourceList);
        generator.generateSourceCode(new GeneratorCallback() {
            @Override
            public void onSuccess(Class clazz) {

            }

            @Override
            public void onWarning(Class clazz, String warning) {

            }

            @Override
            public void onException(Class clazz, Throwable ex) {

            }
        });
    }
}
