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

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

import com.google.gson.Gson;

/**
   Interface for Managing the Logging operations
   Auto-generated implementation of ILogging specification.
*/
public class LoggingBridge extends BaseUtilBridge implements ILogging, APIBridge {

     /**
        API Delegate.
     */
     private ILogging delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public LoggingBridge(ILogging delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return ILogging delegate that manages platform specific functions..
     */
     public final ILogging getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(ILogging delegate) {
          this.delegate = delegate;
     }

     /**
        Logs the given message, with the given log level if specified, to the standard platform/environment.

        @param level   Log level
        @param message Message to be logged
        @since ARP 2.0
     */
     public void log(ILoggingLogLevel level, string message) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing log({"+level+"},{"+message+"}).");

          if (this.delegate != null) {
               this.delegate.log(level, message);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'log' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'log'.");
          }
          
     }

     /**
        Logs the given message, with the given log level if specified, to the standard platform/environment.

        @param level    Log level
        @param category Category/tag name to identify/filter the log.
        @param message  Message to be logged
        @since ARP 2.0
     */
     public void log(ILoggingLogLevel level, string category, string message) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing log({"+level+"},{"+category+"},{"+message+"}).");

          if (this.delegate != null) {
               this.delegate.log(level, category, message);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'log' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'log'.");
          }
          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return String with JSON response or a zero length string if the response is asynchronous or null if method not found.
     */
     public String invoke(APIRequest request) {
          String responseJSON = "";
          switch (request.getMethodName()) {
               case "log_level_message":
                    ILoggingLogLevel level0 = this.gson.fromJson(request.getParameters()[0], ILoggingLogLevel.class);
                    string message0 = this.gson.fromJson(request.getParameters()[1], string.class);
                    this.log(level0, message0);
                    break;
               case "log_level_category_message":
                    ILoggingLogLevel level1 = this.gson.fromJson(request.getParameters()[0], ILoggingLogLevel.class);
                    string category1 = this.gson.fromJson(request.getParameters()[1], string.class);
                    string message1 = this.gson.fromJson(request.getParameters()[2], string.class);
                    this.log(level1, category1, message1);
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
