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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

///<reference path="BaseCallbackImpl.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IFileDataLoadResultCallback.ts"/>
///<reference path="IFileDataLoadResultCallbackError.ts"/>
///<reference path="IFileDataLoadResultCallbackWarning.ts"/>

module Adaptive {

     /**
        Interface for Managing the File loading callback responses
        Auto-generated implementation of IFileDataLoadResultCallback specification.
     */
     export class FileDataLoadResultCallbackImpl extends BaseCallbackImpl implements IFileDataLoadResultCallback {

          onErrorFunction : (error : IFileDataLoadResultCallbackError) => Function;
          onResultFunction : (data : Array<number>) => Function;
          onWarningFunction : (data : Array<number>, warning : IFileDataLoadResultCallbackWarning) => Function;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IFileDataLoadResultCallbackError
             @param onResultFunction Function receiving parameters of type: Array<number>
             @param onWarningFunction Function receiving parameters of type: Array<number>, IFileDataLoadResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IFileDataLoadResultCallbackError) => Function, onResultFunction : (data : Array<number>) => Function, onWarningFunction : (data : Array<number>, warning : IFileDataLoadResultCallbackWarning) => Function) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: FileDataLoadResultCallbackImpl onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: FileDataLoadResultCallbackImpl onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: FileDataLoadResultCallbackImpl onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             Error processing data retrieval/storage operation.

             @param error Error condition encountered.
             @since ARP1.0
          */
          public onError(error : IFileDataLoadResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: FileDataLoadResultCallbackImpl contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Result of data retrieval operation.

             @param data Data loaded.
             @since ARP1.0
          */
          public onResult(data : Array<number>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: FileDataLoadResultCallbackImpl contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(data);
               }
          }

          /**
             Result with warning of data retrieval/storage operation.

             @param data    File being loaded.
             @param warning Warning condition encountered.
             @since ARP1.0
          */
          public onWarning(data : Array<number>, warning : IFileDataLoadResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: FileDataLoadResultCallbackImpl contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(data, warning);
               }
          }

     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/