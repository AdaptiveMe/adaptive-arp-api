/**
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

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.0.0
    
-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

import com.google.gson.Gson;

/**
   Interface for Managing the File operations callback
   Auto-generated implementation of IFileResultCallback specification.
*/
public class FileResultCallbackImpl extends BaseCallbackImpl implements IFileResultCallback {

     /**
        Constructor with callback id.

        @param id  The id of the callback.
     */
     public FileResultCallbackImpl(long id) {
          super(id);
     }

     /**
        On error result of a file operation.

        @param error Error processing the request.
        @since ARP1.0
     */
     public void onError(IFileResultCallbackError error) {
          AppRegistryBridge.getInstance().getPlatformContextWeb().executeJavaScript("handleFileResultCallbackError( '"+getId()+"', JSON.parse(" + this.gson.toJson(error) +") )");
     }

     /**
        On correct result of a file operation.

        @param storageFile Reference to the resulting file.
        @since ARP1.0
     */
     public void onResult(IFile storageFile) {
          AppRegistryBridge.getInstance().getPlatformContextWeb().executeJavaScript("handleFileResultCallbackResult( '"+getId()+"', JSON.parse(" + this.gson.toJson(storageFile) +") )");
     }

     /**
        On partial result of a file operation, containing a warning.

        @param file    Reference to the offending file.
        @param warning Warning processing the request.
        @since ARP1.0
     */
     public void onWarning(IFile file, IFileResultCallbackWarning warning) {
          AppRegistryBridge.getInstance().getPlatformContextWeb().executeJavaScript("handleFileResultCallbackWarning( '"+getId()+"', JSON.parse(" + this.gson.toJson(file) +"), JSON.parse(" + this.gson.toJson(warning) +") )");
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
