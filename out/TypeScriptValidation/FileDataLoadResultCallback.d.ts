/// <reference path="BaseCallback.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="IFileDataLoadResultCallback.d.ts" />
/// <reference path="IFileDataLoadResultCallbackError.d.ts" />
/// <reference path="IFileDataLoadResultCallbackWarning.d.ts" />
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
declare module Adaptive {
    /**
       Interface for Managing the File loading callback responses
       Auto-generated implementation of IFileDataLoadResultCallback specification.
    */
    /**
       FileDataLoadResultCallback control dictionary.
    */
    var registeredFileDataLoadResultCallback: Dictionary<IFileDataLoadResultCallback>;
    /**
       FileDataLoadResultCallback global callback handlers.
    */
    function handleFileDataLoadResultCallbackError(id: number, error: IFileDataLoadResultCallbackError): void;
    function handleFileDataLoadResultCallbackResult(id: number, data: number[]): void;
    function handleFileDataLoadResultCallbackWarning(id: number, data: number[], warning: IFileDataLoadResultCallbackWarning): void;
    class FileDataLoadResultCallback extends BaseCallback implements IFileDataLoadResultCallback {
        onErrorFunction: (error: IFileDataLoadResultCallbackError) => void;
        onResultFunction: (data: number[]) => void;
        onWarningFunction: (data: number[], warning: IFileDataLoadResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: IFileDataLoadResultCallbackError
           @param onResultFunction Function receiving parameters of type: Array<number>
           @param onWarningFunction Function receiving parameters of type: Array<number>, IFileDataLoadResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IFileDataLoadResultCallbackError) => void, onResultFunction: (data: number[]) => void, onWarningFunction: (data: number[], warning: IFileDataLoadResultCallbackWarning) => void);
        /**
           Error processing data retrieval/storage operation.

           @param error Error condition encountered.
           @since ARP1.0
        */
        onError(error: IFileDataLoadResultCallbackError): void;
        /**
           Result of data retrieval operation.

           @param data Data loaded.
           @since ARP1.0
        */
        onResult(data: number[]): void;
        /**
           Result with warning of data retrieval/storage operation.

           @param data    File being loaded.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        onWarning(data: number[], warning: IFileDataLoadResultCallbackWarning): void;
    }
}
