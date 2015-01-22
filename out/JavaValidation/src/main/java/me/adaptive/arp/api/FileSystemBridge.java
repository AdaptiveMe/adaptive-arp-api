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
   Interface for Managing the File System operations
   Auto-generated implementation of IFileSystem specification.
*/
public class FileSystemBridge extends BaseDataBridge implements IFileSystem, APIBridge {

     /**
        API Delegate.
     */
     private IFileSystem delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public FileSystemBridge(IFileSystem delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return IFileSystem delegate that manages platform specific functions..
     */
     public final IFileSystem getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IFileSystem delegate) {
          this.delegate = delegate;
     }

     /**
        Creates a new reference to a new or existing location in the filesystem.
This method does not create the actual file in the specified folder.

        @param parent Parent directory.
        @param name   Name of new file or directory.
        @return A reference to a new or existing location in the filesystem.
        @since ARP1.0
     */
     public FileDescriptor createFileDescriptor(FileDescriptor parent, String name) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing createFileDescriptor({"+parent+"},{"+name+"}).");

          FileDescriptor result = null;
          if (this.delegate != null) {
               result = this.delegate.createFileDescriptor(parent, name);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'createFileDescriptor' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'createFileDescriptor'.");
          }
          return result;          
     }

     /**
        Returns a reference to the cache folder for the current application.
This path must always be writable by the current application.
This path is volatile and may be cleaned by the OS periodically.

        @return Path to the application's cache folder.
        @since ARP1.0
     */
     public FileDescriptor getApplicationCacheFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getApplicationCacheFolder.");

          FileDescriptor result = null;
          if (this.delegate != null) {
               result = this.delegate.getApplicationCacheFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getApplicationCacheFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getApplicationCacheFolder'.");
          }
          return result;          
     }

     /**
        Returns a reference to the cloud synchronizable folder for the current application.
This path must always be writable by the current application.

        @return Path to the application's cloud storage folder.
        @since ARP1.0
     */
     public FileDescriptor getApplicationCloudFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getApplicationCloudFolder.");

          FileDescriptor result = null;
          if (this.delegate != null) {
               result = this.delegate.getApplicationCloudFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getApplicationCloudFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getApplicationCloudFolder'.");
          }
          return result;          
     }

     /**
        Returns a reference to the documents folder for the current application.
This path must always be writable by the current application.

        @return Path to the application's documents folder.
        @since ARP1.0
     */
     public FileDescriptor getApplicationDocumentsFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getApplicationDocumentsFolder.");

          FileDescriptor result = null;
          if (this.delegate != null) {
               result = this.delegate.getApplicationDocumentsFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getApplicationDocumentsFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getApplicationDocumentsFolder'.");
          }
          return result;          
     }

     /**
        Returns a reference to the application installation folder.
This path may or may not be directly readable or writable - it usually contains the app binary and data.

        @return Path to the application folder.
        @since ARP1.0
     */
     public FileDescriptor getApplicationFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getApplicationFolder.");

          FileDescriptor result = null;
          if (this.delegate != null) {
               result = this.delegate.getApplicationFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getApplicationFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getApplicationFolder'.");
          }
          return result;          
     }

     /**
        Returns a reference to the protected storage folder for the current application.
This path must always be writable by the current application.

        @return Path to the application's protected storage folder.
        @since ARP1.0
     */
     public FileDescriptor getApplicationProtectedFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getApplicationProtectedFolder.");

          FileDescriptor result = null;
          if (this.delegate != null) {
               result = this.delegate.getApplicationProtectedFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getApplicationProtectedFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getApplicationProtectedFolder'.");
          }
          return result;          
     }

     /**
        Returns the file system dependent file separator.

        @return char with the directory/file separator.
        @since ARP1.0
     */
     public char getSeparator() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getSeparator.");

          char result = ' ';
          if (this.delegate != null) {
               result = this.delegate.getSeparator();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getSeparator' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getSeparator'.");
          }
          return result;          
     }

     /**
        Returns a reference to the external storage folder provided by the OS. This may
be an external SSD card or similar. This type of storage is removable and by
definition, not secure.
This path may or may not be writable by the current application.

        @return Path to the application's documents folder.
        @since ARP1.0
     */
     public FileDescriptor getSystemExternalFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getSystemExternalFolder.");

          FileDescriptor result = null;
          if (this.delegate != null) {
               result = this.delegate.getSystemExternalFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getSystemExternalFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getSystemExternalFolder'.");
          }
          return result;          
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
               case "createFileDescriptor":
                    FileDescriptor parent0 = getJSONParser().fromJson(request.getParameters()[0], FileDescriptor.class);
                    String name0 = getJSONParser().fromJson(request.getParameters()[1], String.class);
                    FileDescriptor response0 = this.createFileDescriptor(parent0, name0);
                    if (response0 != null) {
                         responseJSON = getJSONParser().toJson(response0);
                    }
                    break;
               case "getApplicationCacheFolder":
                    FileDescriptor response1 = this.getApplicationCacheFolder();
                    if (response1 != null) {
                         responseJSON = getJSONParser().toJson(response1);
                    }
                    break;
               case "getApplicationCloudFolder":
                    FileDescriptor response2 = this.getApplicationCloudFolder();
                    if (response2 != null) {
                         responseJSON = getJSONParser().toJson(response2);
                    }
                    break;
               case "getApplicationDocumentsFolder":
                    FileDescriptor response3 = this.getApplicationDocumentsFolder();
                    if (response3 != null) {
                         responseJSON = getJSONParser().toJson(response3);
                    }
                    break;
               case "getApplicationFolder":
                    FileDescriptor response4 = this.getApplicationFolder();
                    if (response4 != null) {
                         responseJSON = getJSONParser().toJson(response4);
                    }
                    break;
               case "getApplicationProtectedFolder":
                    FileDescriptor response5 = this.getApplicationProtectedFolder();
                    if (response5 != null) {
                         responseJSON = getJSONParser().toJson(response5);
                    }
                    break;
               case "getSeparator":
                    char response6 = this.getSeparator();
                    responseJSON = getJSONParser().toJson(response6);
                    break;
               case "getSystemExternalFolder":
                    FileDescriptor response7 = this.getSystemExternalFolder();
                    if (response7 != null) {
                         responseJSON = getJSONParser().toJson(response7);
                    }
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "FileSystemBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.0.3.";
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
