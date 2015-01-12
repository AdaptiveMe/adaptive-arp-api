/// <reference path="BaseCallback.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="FileDescriptor.d.ts" />
/// <reference path="IFileDataStoreResultCallback.d.ts" />
/// <reference path="IFileDataStoreResultCallbackError.d.ts" />
/// <reference path="IFileDataStoreResultCallbackWarning.d.ts" />
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
       Interface for Managing the File store operations callback
       Auto-generated implementation of IFileDataStoreResultCallback specification.
    */
    /**
       FileDataStoreResultCallback control dictionary.
    */
    var registeredFileDataStoreResultCallback: Dictionary<IFileDataStoreResultCallback>;
    /**
       FileDataStoreResultCallback global callback handlers.
    */
    function handleFileDataStoreResultCallbackError(id: number, error: IFileDataStoreResultCallbackError): void;
    function handleFileDataStoreResultCallbackResult(id: number, file: FileDescriptor): void;
    function handleFileDataStoreResultCallbackWarning(id: number, file: FileDescriptor, warning: IFileDataStoreResultCallbackWarning): void;
    class FileDataStoreResultCallback extends BaseCallback implements IFileDataStoreResultCallback {
        onErrorFunction: (error: IFileDataStoreResultCallbackError) => void;
        onResultFunction: (file: FileDescriptor) => void;
        onWarningFunction: (file: FileDescriptor, warning: IFileDataStoreResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: IFileDataStoreResultCallbackError
           @param onResultFunction Function receiving parameters of type: FileDescriptor
           @param onWarningFunction Function receiving parameters of type: FileDescriptor, IFileDataStoreResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IFileDataStoreResultCallbackError) => void, onResultFunction: (file: FileDescriptor) => void, onWarningFunction: (file: FileDescriptor, warning: IFileDataStoreResultCallbackWarning) => void);
        /**
           Error processing data retrieval/storage operation.

           @param error Error condition encountered.
           @since ARP1.0
        */
        onError(error: IFileDataStoreResultCallbackError): void;
        /**
           Result of data storage operation.

           @param file File reference to stored data.
           @since ARP1.0
        */
        onResult(file: FileDescriptor): void;
        /**
           Result with warning of data retrieval/storage operation.

           @param file    File being loaded/stored.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        onWarning(file: FileDescriptor, warning: IFileDataStoreResultCallbackWarning): void;
    }
}
