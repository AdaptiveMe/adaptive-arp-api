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

package me.adaptive.arp.impl;

import me.adaptive.arp.api.*;

/**
   Interface for Managing the File operations
   Auto-generated implementation of IFile specification.
*/
public class FileDelegate extends BaseDataDelegate implements IFile {

     /**
        Default Constructor.
     */
     public FileDelegate() {
          super();
     }

     /**
        Determine whether the current file/folder can be read from.

        @param descriptor File descriptor of file or folder used for operation.
        @return True if the folder/file is readable, false otherwise.
        @since ARP1.0
     */
     public boolean canRead(FileDescriptor descriptor) {
          boolean response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":canRead");
          // return response;
     }

     /**
        Determine whether the current file/folder can be written to.

        @param descriptor File descriptor of file or folder used for operation.
        @return True if the folder/file is writable, false otherwise.
        @since ARP1.0
     */
     public boolean canWrite(FileDescriptor descriptor) {
          boolean response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":canWrite");
          // return response;
     }

     /**
        Creates a file with the specified name.

        @param descriptor File descriptor of file or folder used for operation.
        @param callback   Result of the operation.
        @since ARP1.0
     */
     public void create(FileDescriptor descriptor, IFileResultCallback callback) {
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":create");
     }

     /**
        Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
deleted if the cascade parameter is set to true.

        @param descriptor File descriptor of file or folder used for operation.
        @param cascade    Whether to delete sub-files and sub-folders.
        @return True if files (and sub-files and folders) whether deleted.
        @since ARP1.0
     */
     public boolean delete(FileDescriptor descriptor, boolean cascade) {
          boolean response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":delete");
          // return response;
     }

     /**
        Check whether the file/path exists.

        @param descriptor File descriptor of file or folder used for operation.
        @return True if the file exists in the filesystem, false otherwise.
        @since ARP1.0
     */
     public boolean exists(FileDescriptor descriptor) {
          boolean response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":exists");
          // return response;
     }

     /**
        Loads the content of the file.

        @param descriptor File descriptor of file or folder used for operation.
        @param callback   Result of the operation.
        @since ARP1.0
     */
     public void getContent(FileDescriptor descriptor, IFileDataLoadResultCallback callback) {
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":getContent");
     }

     /**
        Returns the file storage type of the file

        @param descriptor File descriptor of file or folder used for operation.
        @return Storage Type file
        @since ARP1.0
     */
     public IFileSystemStorageType getFileStorageType(FileDescriptor descriptor) {
          IFileSystemStorageType response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":getFileStorageType");
          // return response;
     }

     /**
        Returns the file type

        @param descriptor File descriptor of file or folder used for operation.
        @return Returns the file type of the file
        @since ARP1.0
     */
     public IFileSystemType getFileType(FileDescriptor descriptor) {
          IFileSystemType response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":getFileType");
          // return response;
     }

     /**
        Returns the security type of the file

        @param descriptor File descriptor of file or folder used for operation.
        @return Security Level of the file
        @since ARP1.0
     */
     public IFileSystemSecurity getSecurityType(FileDescriptor descriptor) {
          IFileSystemSecurity response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":getSecurityType");
          // return response;
     }

     /**
        Check whether this is a path of a file.

        @param descriptor File descriptor of file or folder used for operation.
        @return true if this is a path to a folder/directory, false if this is a path to a file.
        @since ARP1.0
     */
     public boolean isDirectory(FileDescriptor descriptor) {
          boolean response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":isDirectory");
          // return response;
     }

     /**
        List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.

        @param descriptor File descriptor of file or folder used for operation.
        @param callback   Result of operation.
        @since ARP1.0
     */
     public void listFiles(FileDescriptor descriptor, IFileListResultCallback callback) {
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":listFiles");
     }

     /**
        List all the files matching the speficied regex filter within this file/path reference. If the reference
is a file, it will not yield any results.

        @param descriptor File descriptor of file or folder used for operation.
        @param regex      Filter (eg. *.jpg, *.png, Fil*) name string.
        @param callback   Result of operation.
        @since ARP1.0
     */
     public void listFilesForRegex(FileDescriptor descriptor, String regex, IFileListResultCallback callback) {
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":listFilesForRegex");
     }

     /**
        Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.

        @param descriptor File descriptor of file or folder used for operation.
        @param recursive  Whether to create all parent path elements.
        @return True if the path was created, false otherwise (or it exists already).
        @since ARP1.0
     */
     public boolean mkDir(FileDescriptor descriptor, boolean recursive) {
          boolean response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":mkDir");
          // return response;
     }

     /**
        Moves the current file to the given file destination, optionally overwriting and creating the path to the
new destination file.

        @param source      File descriptor of file or folder used for operation as source.
        @param destination File descriptor of file or folder used for operation as destination.
        @param createPath  True to create the path if it does not already exist.
        @param callback    Result of the operation.
        @param overwrite   True to create the path if it does not already exist.
        @since ARP1.0
     */
     public void move(FileDescriptor source, FileDescriptor destination, boolean createPath, boolean overwrite, IFileResultCallback callback) {
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":move");
     }

     /**
        Sets the content of the file.

        @param descriptor File descriptor of file or folder used for operation.
        @param content    Binary content to store in the file.
        @param callback   Result of the operation.
        @since ARP1.0
     */
     public void setContent(FileDescriptor descriptor, byte[] content, IFileDataStoreResultCallback callback) {
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":setContent");
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
