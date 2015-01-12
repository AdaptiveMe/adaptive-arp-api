/// <reference path="BaseCallback.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="FileDescriptor.d.ts" />
/// <reference path="IFileListResultCallback.d.ts" />
/// <reference path="IFileListResultCallbackError.d.ts" />
/// <reference path="IFileListResultCallbackWarning.d.ts" />
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
       Interface for Managing the File result operations
       Auto-generated implementation of IFileListResultCallback specification.
    */
    /**
       FileListResultCallback control dictionary.
    */
    var registeredFileListResultCallback: Dictionary<IFileListResultCallback>;
    /**
       FileListResultCallback global callback handlers.
    */
    function handleFileListResultCallbackError(id: number, error: IFileListResultCallbackError): void;
    function handleFileListResultCallbackResult(id: number, files: FileDescriptor[]): void;
    function handleFileListResultCallbackWarning(id: number, files: FileDescriptor[], warning: IFileListResultCallbackWarning): void;
    class FileListResultCallback extends BaseCallback implements IFileListResultCallback {
        onErrorFunction: (error: IFileListResultCallbackError) => void;
        onResultFunction: (files: FileDescriptor[]) => void;
        onWarningFunction: (files: FileDescriptor[], warning: IFileListResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: IFileListResultCallbackError
           @param onResultFunction Function receiving parameters of type: Array<FileDescriptor>
           @param onWarningFunction Function receiving parameters of type: Array<FileDescriptor>, IFileListResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IFileListResultCallbackError) => void, onResultFunction: (files: FileDescriptor[]) => void, onWarningFunction: (files: FileDescriptor[], warning: IFileListResultCallbackWarning) => void);
        /**
           On error result of a file operation.

           @param error Error processing the request.
           @since ARP1.0
        */
        onError(error: IFileListResultCallbackError): void;
        /**
           On correct result of a file operation.

           @param files Array of resulting files/folders.
           @since ARP1.0
        */
        onResult(files: FileDescriptor[]): void;
        /**
           On partial result of a file operation, containing a warning.

           @param files   Array of resulting files/folders.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        onWarning(files: FileDescriptor[], warning: IFileListResultCallbackWarning): void;
    }
}
