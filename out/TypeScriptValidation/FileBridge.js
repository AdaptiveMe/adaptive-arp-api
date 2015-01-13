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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIRequest.ts"/>
///<reference path="BaseDataBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="FileDataLoadResultCallback.ts"/>
///<reference path="FileDataStoreResultCallback.ts"/>
///<reference path="FileDescriptor.ts"/>
///<reference path="FileListResultCallback.ts"/>
///<reference path="FileResultCallback.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseData.ts"/>
///<reference path="IFile.ts"/>
///<reference path="IFileDataLoadResultCallback.ts"/>
///<reference path="IFileDataStoreResultCallback.ts"/>
///<reference path="IFileListResultCallback.ts"/>
///<reference path="IFileResultCallback.ts"/>
///<reference path="IFileSystemSecurity.ts"/>
///<reference path="IFileSystemStorageType.ts"/>
///<reference path="IFileSystemType.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the File operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var FileBridge = (function (_super) {
        __extends(FileBridge, _super);
        /**
           Default constructor.
        */
        function FileBridge() {
            _super.call(this);
        }
        /**
           Determine whether the current file/folder can be read from.

           @param descriptor File descriptor of file or folder used for operation.
           @return True if the folder/file is readable, false otherwise.
           @since ARP1.0
        */
        FileBridge.prototype.canRead = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var ar = new Adaptive.APIRequest("IFile", "canRead", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'FileBridge.canRead' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.canRead' request.");
            }
            return response;
        };
        /**
           Determine whether the current file/folder can be written to.

           @param descriptor File descriptor of file or folder used for operation.
           @return True if the folder/file is writable, false otherwise.
           @since ARP1.0
        */
        FileBridge.prototype.canWrite = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var ar = new Adaptive.APIRequest("IFile", "canWrite", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'FileBridge.canWrite' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.canWrite' request.");
            }
            return response;
        };
        /**
           Creates a file with the specified name.

           @param descriptor File descriptor of file or folder used for operation.
           @param callback Result of the operation.
           @since ARP1.0
        */
        FileBridge.prototype.create = function (descriptor, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var ar = new Adaptive.APIRequest("IFile", "create", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredFileResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.create' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IFileResultCallbackError.Unknown);
            }
        };
        /**
           Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
deleted if the cascade parameter is set to true.

           @param descriptor File descriptor of file or folder used for operation.
           @param cascade Whether to delete sub-files and sub-folders.
           @return True if files (and sub-files and folders) whether deleted.
           @since ARP1.0
        */
        FileBridge.prototype.delete = function (descriptor, cascade) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            arParams.push(JSON.stringify(cascade));
            var ar = new Adaptive.APIRequest("IFile", "delete", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'FileBridge.delete' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.delete' request.");
            }
            return response;
        };
        /**
           Check whether the file/path exists.

           @param descriptor File descriptor of file or folder used for operation.
           @return True if the file exists in the filesystem, false otherwise.
           @since ARP1.0
        */
        FileBridge.prototype.exists = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var ar = new Adaptive.APIRequest("IFile", "exists", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'FileBridge.exists' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.exists' request.");
            }
            return response;
        };
        /**
           Loads the content of the file.

           @param descriptor File descriptor of file or folder used for operation.
           @param callback Result of the operation.
           @since ARP1.0
        */
        FileBridge.prototype.getContent = function (descriptor, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var ar = new Adaptive.APIRequest("IFile", "getContent", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredFileDataLoadResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.getContent' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileDataLoadResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IFileDataLoadResultCallbackError.Unknown);
            }
        };
        /**
           Returns the file storage type of the file

           @param descriptor File descriptor of file or folder used for operation.
           @return Storage Type file
           @since ARP1.0
        */
        FileBridge.prototype.getFileStorageType = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var ar = new Adaptive.APIRequest("IFile", "getFileStorageType", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'FileBridge.getFileStorageType' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.getFileStorageType' request.");
            }
            return response;
        };
        /**
           Returns the file type

           @param descriptor File descriptor of file or folder used for operation.
           @return Returns the file type of the file
           @since ARP1.0
        */
        FileBridge.prototype.getFileType = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var ar = new Adaptive.APIRequest("IFile", "getFileType", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'FileBridge.getFileType' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.getFileType' request.");
            }
            return response;
        };
        /**
           Returns the security type of the file

           @param descriptor File descriptor of file or folder used for operation.
           @return Security Level of the file
           @since ARP1.0
        */
        FileBridge.prototype.getSecurityType = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var ar = new Adaptive.APIRequest("IFile", "getSecurityType", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'FileBridge.getSecurityType' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.getSecurityType' request.");
            }
            return response;
        };
        /**
           Check whether this is a path of a file.

           @param descriptor File descriptor of file or folder used for operation.
           @return true if this is a path to a folder/directory, false if this is a path to a file.
           @since ARP1.0
        */
        FileBridge.prototype.isDirectory = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var ar = new Adaptive.APIRequest("IFile", "isDirectory", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'FileBridge.isDirectory' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.isDirectory' request.");
            }
            return response;
        };
        /**
           List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.

           @param descriptor File descriptor of file or folder used for operation.
           @param callback Result of operation.
           @since ARP1.0
        */
        FileBridge.prototype.listFiles = function (descriptor, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var ar = new Adaptive.APIRequest("IFile", "listFiles", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredFileListResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.listFiles' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileListResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IFileListResultCallbackError.Unknown);
            }
        };
        /**
           List all the files matching the speficied regex filter within this file/path reference. If the reference
is a file, it will not yield any results.

           @param descriptor File descriptor of file or folder used for operation.
           @param regex    Filter (eg. *.jpg, *.png, Fil*) name string.
           @param callback Result of operation.
           @since ARP1.0
        */
        FileBridge.prototype.listFilesForRegex = function (descriptor, regex, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            arParams.push(JSON.stringify(regex));
            var ar = new Adaptive.APIRequest("IFile", "listFilesForRegex", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredFileListResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.listFilesForRegex' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileListResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IFileListResultCallbackError.Unknown);
            }
        };
        /**
           Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.

           @param descriptor File descriptor of file or folder used for operation.
           @param recursive Whether to create all parent path elements.
           @return True if the path was created, false otherwise (or it exists already).
           @since ARP1.0
        */
        FileBridge.prototype.mkDir = function (descriptor, recursive) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            arParams.push(JSON.stringify(recursive));
            var ar = new Adaptive.APIRequest("IFile", "mkDir", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'FileBridge.mkDir' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.mkDir' request.");
            }
            return response;
        };
        /**
           Moves the current file to the given file destination, optionally overwriting and creating the path to the
new destination file.

           @param source File descriptor of file or folder used for operation as source.
           @param destination File descriptor of file or folder used for operation as destination.
           @param createPath True to create the path if it does not already exist.
           @param callback   Result of the operation.
           @param overwrite  True to create the path if it does not already exist.
           @since ARP1.0
        */
        FileBridge.prototype.move = function (source, destination, createPath, overwrite, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(source));
            arParams.push(JSON.stringify(destination));
            arParams.push(JSON.stringify(createPath));
            arParams.push(JSON.stringify(overwrite));
            var ar = new Adaptive.APIRequest("IFile", "move", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredFileResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.move' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IFileResultCallbackError.Unknown);
            }
        };
        /**
           Sets the content of the file.

           @param descriptor File descriptor of file or folder used for operation.
           @param content  Binary content to store in the file.
           @param callback Result of the operation.
           @since ARP1.0
        */
        FileBridge.prototype.setContent = function (descriptor, content, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            arParams.push(JSON.stringify(content));
            var ar = new Adaptive.APIRequest("IFile", "setContent", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredFileDataStoreResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.setContent' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileDataStoreResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IFileDataStoreResultCallbackError.Unknown);
            }
        };
        return FileBridge;
    })(Adaptive.BaseDataBridge);
    Adaptive.FileBridge = FileBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=FileBridge.js.map