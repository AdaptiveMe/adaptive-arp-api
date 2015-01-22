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
        @since ARP1.0
     */
     public void log(ILoggingLogLevel level, String message) {
          if (this.delegate != null) {
               this.delegate.log(level, message);
          }
          
     }

     /**
        Logs the given message, with the given log level if specified, to the standard platform/environment.

        @param level    Log level
        @param category Category/tag name to identify/filter the log.
        @param message  Message to be logged
        @since ARP1.0
     */
     public void log(ILoggingLogLevel level, String category, String message) {
          if (this.delegate != null) {
               this.delegate.log(level, category, message);
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
               case "log_level_message":
                    ILoggingLogLevel level0 = getJSONParser().fromJson(request.getParameters()[0], ILoggingLogLevel.class);
                    String message0 = getJSONParser().fromJson(request.getParameters()[1], String.class);
                    this.log(level0, message0);
                    break;
               case "log_level_category_message":
                    ILoggingLogLevel level1 = getJSONParser().fromJson(request.getParameters()[0], ILoggingLogLevel.class);
                    String category1 = getJSONParser().fromJson(request.getParameters()[1], String.class);
                    String message1 = getJSONParser().fromJson(request.getParameters()[2], String.class);
                    this.log(level1, category1, message1);
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "LoggingBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.0.3.";
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
