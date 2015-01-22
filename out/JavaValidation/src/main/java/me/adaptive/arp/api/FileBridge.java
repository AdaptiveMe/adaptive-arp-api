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

package me.adaptive.arp.api;

import com.google.gson.Gson;

/**
   Interface for Managing the File operations
   Auto-generated implementation of IFile specification.
*/
public class FileBridge extends BaseDataBridge implements IFile, APIBridge {

     /**
        API Delegate.
     */
     private IFile delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public FileBridge(IFile delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return IFile delegate that manages platform specific functions..
     */
     public final IFile getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IFile delegate) {
          this.delegate = delegate;
     }

     /**
        Determine whether the current file/folder can be read from.

        @param descriptor File descriptor of file or folder used for operation.
        @return True if the folder/file is readable, false otherwise.
        @since ARP1.0
     */
     public boolean canRead(FileDescriptor descriptor) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing canRead({"+descriptor+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.canRead(descriptor);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'canRead' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'canRead'.");
          }
          return result;          
     }

     /**
        Determine whether the current file/folder can be written to.

        @param descriptor File descriptor of file or folder used for operation.
        @return True if the folder/file is writable, false otherwise.
        @since ARP1.0
     */
     public boolean canWrite(FileDescriptor descriptor) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing canWrite({"+descriptor+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.canWrite(descriptor);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'canWrite' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'canWrite'.");
          }
          return result;          
     }

     /**
        Creates a file with the specified name.

        @param descriptor File descriptor of file or folder used for operation.
        @param callback   Result of the operation.
        @since ARP1.0
     */
     public void create(FileDescriptor descriptor, IFileResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing create({"+descriptor+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.create(descriptor, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'create' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'create'.");
          }
          
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
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing delete({"+descriptor+"},{"+cascade+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.delete(descriptor, cascade);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'delete' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'delete'.");
          }
          return result;          
     }

     /**
        Check whether the file/path exists.

        @param descriptor File descriptor of file or folder used for operation.
        @return True if the file exists in the filesystem, false otherwise.
        @since ARP1.0
     */
     public boolean exists(FileDescriptor descriptor) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing exists({"+descriptor+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.exists(descriptor);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'exists' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'exists'.");
          }
          return result;          
     }

     /**
        Loads the content of the file.

        @param descriptor File descriptor of file or folder used for operation.
        @param callback   Result of the operation.
        @since ARP1.0
     */
     public void getContent(FileDescriptor descriptor, IFileDataLoadResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getContent({"+descriptor+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.getContent(descriptor, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getContent' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getContent'.");
          }
          
     }

     /**
        Returns the file storage type of the file

        @param descriptor File descriptor of file or folder used for operation.
        @return Storage Type file
        @since ARP1.0
     */
     public IFileSystemStorageType getFileStorageType(FileDescriptor descriptor) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getFileStorageType({"+descriptor+"}).");

          IFileSystemStorageType result = null;
          if (this.delegate != null) {
               result = this.delegate.getFileStorageType(descriptor);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getFileStorageType' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getFileStorageType'.");
          }
          return result;          
     }

     /**
        Returns the file type

        @param descriptor File descriptor of file or folder used for operation.
        @return Returns the file type of the file
        @since ARP1.0
     */
     public IFileSystemType getFileType(FileDescriptor descriptor) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getFileType({"+descriptor+"}).");

          IFileSystemType result = null;
          if (this.delegate != null) {
               result = this.delegate.getFileType(descriptor);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getFileType' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getFileType'.");
          }
          return result;          
     }

     /**
        Returns the security type of the file

        @param descriptor File descriptor of file or folder used for operation.
        @return Security Level of the file
        @since ARP1.0
     */
     public IFileSystemSecurity getSecurityType(FileDescriptor descriptor) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getSecurityType({"+descriptor+"}).");

          IFileSystemSecurity result = null;
          if (this.delegate != null) {
               result = this.delegate.getSecurityType(descriptor);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getSecurityType' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getSecurityType'.");
          }
          return result;          
     }

     /**
        Check whether this is a path of a file.

        @param descriptor File descriptor of file or folder used for operation.
        @return true if this is a path to a folder/directory, false if this is a path to a file.
        @since ARP1.0
     */
     public boolean isDirectory(FileDescriptor descriptor) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing isDirectory({"+descriptor+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.isDirectory(descriptor);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'isDirectory' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'isDirectory'.");
          }
          return result;          
     }

     /**
        List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.

        @param descriptor File descriptor of file or folder used for operation.
        @param callback   Result of operation.
        @since ARP1.0
     */
     public void listFiles(FileDescriptor descriptor, IFileListResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing listFiles({"+descriptor+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.listFiles(descriptor, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'listFiles' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'listFiles'.");
          }
          
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
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing listFilesForRegex({"+descriptor+"},{"+regex+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.listFilesForRegex(descriptor, regex, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'listFilesForRegex' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'listFilesForRegex'.");
          }
          
     }

     /**
        Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.

        @param descriptor File descriptor of file or folder used for operation.
        @param recursive  Whether to create all parent path elements.
        @return True if the path was created, false otherwise (or it exists already).
        @since ARP1.0
     */
     public boolean mkDir(FileDescriptor descriptor, boolean recursive) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing mkDir({"+descriptor+"},{"+recursive+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.mkDir(descriptor, recursive);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'mkDir' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'mkDir'.");
          }
          return result;          
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
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing move({"+source+"},{"+destination+"},{"+createPath+"},{"+overwrite+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.move(source, destination, createPath, overwrite, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'move' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'move'.");
          }
          
     }

     /**
        Sets the content of the file.

        @param descriptor File descriptor of file or folder used for operation.
        @param content    Binary content to store in the file.
        @param callback   Result of the operation.
        @since ARP1.0
     */
     public void setContent(FileDescriptor descriptor, byte[] content, IFileDataStoreResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing setContent({"+descriptor+"},{"+content+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.setContent(descriptor, content, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'setContent' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'setContent'.");
          }
          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return APIResponse with status code, message and JSON response or a JSON null string for void functions. Status code 200 is OK, all others are HTTP standard error conditions.
     */
     public APIResponse invoke(APIRequest request) {
          APIResponse response = new APIResponse();
          int responseCode = 200;
          String responseMessage = "OK";
          String responseJSON = "null";
          switch (request.getMethodName()) {
               case "canRead":
                    FileDescriptor descriptor0 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    boolean response0 = this.canRead(descriptor0);
                    responseJSON = getJSONParser().toJson(response0);
                    break;
               case "canWrite":
                    FileDescriptor descriptor1 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    boolean response1 = this.canWrite(descriptor1);
                    responseJSON = getJSONParser().toJson(response1);
                    break;
               case "create":
                    FileDescriptor descriptor2 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    IFileResultCallback callback2 = new FileResultCallbackImpl(request.getAsyncId());
                    this.create(descriptor2, callback2);
                    break;
               case "delete":
                    FileDescriptor descriptor3 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    boolean cascade3 = getJSONParser().fromJson(request.getParameters()[1], boolean.class);
                    boolean response3 = this.delete(descriptor3, cascade3);
                    responseJSON = getJSONParser().toJson(response3);
                    break;
               case "exists":
                    FileDescriptor descriptor4 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    boolean response4 = this.exists(descriptor4);
                    responseJSON = getJSONParser().toJson(response4);
                    break;
               case "getContent":
                    FileDescriptor descriptor5 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    IFileDataLoadResultCallback callback5 = new FileDataLoadResultCallbackImpl(request.getAsyncId());
                    this.getContent(descriptor5, callback5);
                    break;
               case "getFileStorageType":
                    FileDescriptor descriptor6 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    IFileSystemStorageType response6 = this.getFileStorageType(descriptor6);
                    if (response6 != null) {
                         responseJSON = getJSONParser().toJson(response6);
                    }
                    break;
               case "getFileType":
                    FileDescriptor descriptor7 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    IFileSystemType response7 = this.getFileType(descriptor7);
                    if (response7 != null) {
                         responseJSON = getJSONParser().toJson(response7);
                    }
                    break;
               case "getSecurityType":
                    FileDescriptor descriptor8 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    IFileSystemSecurity response8 = this.getSecurityType(descriptor8);
                    if (response8 != null) {
                         responseJSON = getJSONParser().toJson(response8);
                    }
                    break;
               case "isDirectory":
                    FileDescriptor descriptor9 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    boolean response9 = this.isDirectory(descriptor9);
                    responseJSON = getJSONParser().toJson(response9);
                    break;
               case "listFiles":
                    FileDescriptor descriptor10 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    IFileListResultCallback callback10 = new FileListResultCallbackImpl(request.getAsyncId());
                    this.listFiles(descriptor10, callback10);
                    break;
               case "listFilesForRegex":
                    FileDescriptor descriptor11 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    String regex11 = getJSONParser().fromJson(request.getParameters()[1], String.class);
                    IFileListResultCallback callback11 = new FileListResultCallbackImpl(request.getAsyncId());
                    this.listFilesForRegex(descriptor11, regex11, callback11);
                    break;
               case "mkDir":
                    FileDescriptor descriptor12 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    boolean recursive12 = getJSONParser().fromJson(request.getParameters()[1], boolean.class);
                    boolean response12 = this.mkDir(descriptor12, recursive12);
                    responseJSON = getJSONParser().toJson(response12);
                    break;
               case "move":
                    FileDescriptor source13 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    FileDescriptor destination13 = getJSONParser().fromJson(request.getParameters()[1], FileDescriptor.class);
                    boolean createPath13 = getJSONParser().fromJson(request.getParameters()[2], boolean.class);
                    boolean overwrite13 = getJSONParser().fromJson(request.getParameters()[3], boolean.class);
                    IFileResultCallback callback13 = new FileResultCallbackImpl(request.getAsyncId());
                    this.move(source13, destination13, createPath13, overwrite13, callback13);
                    break;
               case "setContent":
                    FileDescriptor descriptor14 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    byte[] content14 = getJSONParser().fromJson(request.getParameters()[1], byte[].class);
                    IFileDataStoreResultCallback callback14 = new FileDataStoreResultCallbackImpl(request.getAsyncId());
                    this.setContent(descriptor14, content14, callback14);
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "FileBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.0.3.";
          }
          response.setResponse(responseJSON);
          response.setStatusCode(responseCode);
          response.setStatusMessage(responseMessage);
          return response;
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
