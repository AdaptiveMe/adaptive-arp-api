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

    * @version v1.0.48
    
-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Interface for Managing the File operations

   @author Carlos Lozano Diez
   @since ARP1.0
   @version 1.0
*/
public protocol IFile : NSObjectProtocol {
     /**
        Determine whether the current file/folder can be read from.
        @return True if the folder/file is readable, false otherwise.
        @since ARP1.0
     */
     func canRead() -> Bool

     /**
        Determine whether the current file/folder can be written to.
        @return True if the folder/file is writable, false otherwise.
        @since ARP1.0
     */
     func canWrite() -> Bool

     /**
        Creates a file with the specified name.
        @param callback Result of the operation.
        @since ARP1.0
     */
     func create(callback:IFileResultCallback)
     /**
        Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
deleted if the cascade parameter is set to true.
        @param cascade Whether to delete sub-files and sub-folders.
        @return True if files (and sub-files and folders) whether deleted.
        @since ARP1.0
     */
     func delete(cascade:Bool) -> Bool

     /**
        Check whether the file/path exists.
        @return True if the file exists in the filesystem, false otherwise.
        @since ARP1.0
     */
     func exists() -> Bool

     /**
        Loads the content of the file.
        @param callback Result of the operation.
        @since ARP1.0
     */
     func getContent(callback:IFileDataLoadResultCallback)
     /**
        Returns the milliseconds passed since 1/1/1970 since the file was created.
        @return Timestamp in milliseconds.
        @since ARP1.0
     */
     func getDateCreated() -> Int64

     /**
        Returns the milliseconds passed since 1/1/1970 since the file was modified.
        @return Timestamp in milliseconds.
        @since ARP1.0
     */
     func getDateModified() -> Int64

     /**
        Returns the file storage type of the file
        @return Storage Type file
        @since ARP1.0
     */
     func getFileStorageType() -> IFileSystemStorageType

     /**
        Returns the file type
        @return Returns the file type of the file
        @since ARP1.0
     */
     func getFileType() -> IFileSystemType

     /**
        Returns the name of the file if the reference is a file or the last path element of the folder.
        @return The name of the file.
        @since ARP1.0
     */
     func getName() -> String

     /**
        Returns the path element of the file or folder (excluding the last path element if it's a directory).
        @return The path to the file.
        @since ARP1.0
     */
     func getPath() -> String

     /**
        Returns the resolved absolute path elements of the file and/or folders (including the last path element).
        @return The absolute path to the file.
        @since ARP1.0
     */
     func getPathAbsolute() -> String

     /**
        Returns the security type of the file
        @return Security Level of the file
        @since ARP1.0
     */
     func getSecurityType() -> IFileSystemSecurity

     /**
        Returns the size in bytes of the file or -1 if the reference is a folder.
        @return Size in bytes of file.
        @since ARP1.0
     */
     func getSize() -> Int64

     /**
        Check whether this is a path of a file.
        @return true if this is a path to a folder/directory, false if this is a path to a file.
        @since ARP1.0
     */
     func isDirectory() -> Bool

     /**
        List all the files matching the speficied regex filter within this file/path reference. If the reference
is a file, it will not yield any results.
        @param regex    Filter (eg. *.jpg, *.png, Fil*) name string.
        @param callback Result of operation.
        @since ARP1.0
     */
     func listFilesForRegex(regex:String, callback:IFileListResultCallback)
     /**
        List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.
        @param callback Result of operation.
        @since ARP1.0
     */
     func listFiles(callback:IFileListResultCallback)
     /**
        Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.
        @param recursive Whether to create all parent path elements.
        @return True if the path was created, false otherwise (or it exists already).
        @since ARP1.0
     */
     func mkDir(recursive:Bool) -> Bool

     /**
        Moves the current file to the given file destination, optionally overwriting and creating the path to the
new destination file.
        @param newFile    Destination path/file for the move.
        @param createPath True to create the path if it does not already exist.
        @param callback   Result of the operation.
        @param overwrite  True to create the path if it does not already exist.
        @since ARP1.0
     */
     func move(newFile:IFile, createPath:Bool, overwrite:Bool, callback:IFileResultCallback)
     /**
        Sets the content of the file.
        @param content  Binary content to store in the file.
        @param callback Result of the operation.
        @since ARP1.0
     */
     func setContent(content:[Byte], callback:IFileDataStoreResultCallback)
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
