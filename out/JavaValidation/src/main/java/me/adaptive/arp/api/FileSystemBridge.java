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

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

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
     public IFile createFileDescriptor(IFile parent, String name) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing createFileDescriptor({"+parent+"},{"+name+"}).");

          IFile result = null;
          if (this.delegate != null) {
               result = this.delegate.createFileDescriptor(parent, name);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'createFileDescriptor' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'createFileDescriptor'.");
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
     public IFile getApplicationCacheFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getApplicationCacheFolder.");

          IFile result = null;
          if (this.delegate != null) {
               result = this.delegate.getApplicationCacheFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getApplicationCacheFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getApplicationCacheFolder'.");
          }
          return result;          
     }

     /**
        Returns a reference to the cloud synchronizable folder for the current application.
This path must always be writable by the current application.

        @return Path to the application's cloud storage folder.
        @since ARP1.0
     */
     public IFile getApplicationCloudFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getApplicationCloudFolder.");

          IFile result = null;
          if (this.delegate != null) {
               result = this.delegate.getApplicationCloudFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getApplicationCloudFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getApplicationCloudFolder'.");
          }
          return result;          
     }

     /**
        Returns a reference to the documents folder for the current application.
This path must always be writable by the current application.

        @return Path to the application's documents folder.
        @since ARP1.0
     */
     public IFile getApplicationDocumentsFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getApplicationDocumentsFolder.");

          IFile result = null;
          if (this.delegate != null) {
               result = this.delegate.getApplicationDocumentsFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getApplicationDocumentsFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getApplicationDocumentsFolder'.");
          }
          return result;          
     }

     /**
        Returns a reference to the application installation folder.
This path may or may not be directly readable or writable - it usually contains the app binary and data.

        @return Path to the application folder.
        @since ARP1.0
     */
     public IFile getApplicationFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getApplicationFolder.");

          IFile result = null;
          if (this.delegate != null) {
               result = this.delegate.getApplicationFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getApplicationFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getApplicationFolder'.");
          }
          return result;          
     }

     /**
        Returns a reference to the protected storage folder for the current application.
This path must always be writable by the current application.

        @return Path to the application's protected storage folder.
        @since ARP1.0
     */
     public IFile getApplicationProtectedFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getApplicationProtectedFolder.");

          IFile result = null;
          if (this.delegate != null) {
               result = this.delegate.getApplicationProtectedFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getApplicationProtectedFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getApplicationProtectedFolder'.");
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
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getSeparator.");

          char result = ' ';
          if (this.delegate != null) {
               result = this.delegate.getSeparator();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getSeparator' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getSeparator'.");
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
     public IFile getSystemExternalFolder() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getSystemExternalFolder.");

          IFile result = null;
          if (this.delegate != null) {
               result = this.delegate.getSystemExternalFolder();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getSystemExternalFolder' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getSystemExternalFolder'.");
          }
          return result;          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return String with JSON response or a zero length string if the response is asynchronous or null if method not found.
     */
     public String invoke(APIRequest request) {
          String responseJSON = "";
          switch (request.getMethodName()) {
               case "createFileDescriptor":
                    break;
               case "getApplicationCacheFolder":
                    break;
               case "getApplicationCloudFolder":
                    break;
               case "getApplicationDocumentsFolder":
                    break;
               case "getApplicationFolder":
                    break;
               case "getApplicationProtectedFolder":
                    break;
               case "getSeparator":
                    break;
               case "getSystemExternalFolder":
                    break;
               default:
                    // 404 - response null.
                    responseJSON = null;
          }
          return responseJSON;
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
