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
   Interface for Managing the browser operations
   Auto-generated implementation of IBrowser specification.
*/
public class BrowserBridge extends BaseUIBridge implements IBrowser, APIBridge {

     /**
        API Delegate.
     */
     private IBrowser delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public BrowserBridge(IBrowser delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return IBrowser delegate that manages platform specific functions..
     */
     public final IBrowser getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IBrowser delegate) {
          this.delegate = delegate;
     }

     /**
        Method for opening a URL like a link in the native default browser

        @param url Url to open
        @return The result of the operation
        @since ARP1.0
     */
     public boolean openExtenalBrowser(String url) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing openExtenalBrowser({"+url+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.openExtenalBrowser(url);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'openExtenalBrowser' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'openExtenalBrowser'.");
          }
          return result;          
     }

     /**
        Method for opening a browser embedded into the application

        @param url            Url to open
        @param title          Title of the Navigation bar
        @param backButtonText Title of the Back button bar
        @return The result of the operation
        @since ARP1.0
     */
     public boolean openInternalBrowser(String url, String title, String backButtonText) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing openInternalBrowser({"+url+"},{"+title+"},{"+backButtonText+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.openInternalBrowser(url, title, backButtonText);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'openInternalBrowser' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'openInternalBrowser'.");
          }
          return result;          
     }

     /**
        Method for opening a browser embedded into the application in a modal window

        @param url            Url to open
        @param title          Title of the Navigation bar
        @param backButtonText Title of the Back button bar
        @return The result of the operation
        @since ARP1.0
     */
     public boolean openInternalBrowserModal(String url, String title, String backButtonText) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing openInternalBrowserModal({"+url+"},{"+title+"},{"+backButtonText+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.openInternalBrowserModal(url, title, backButtonText);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'openInternalBrowserModal' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'openInternalBrowserModal'.");
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
               case "openExtenalBrowser":
                    String url0 = getJSONParser().fromJson(request.getParameters()[0], String.class);
                    boolean response0 = this.openExtenalBrowser(url0);
                    responseJSON = getJSONParser().toJson(response0);
                    break;
               case "openInternalBrowser":
                    String url1 = getJSONParser().fromJson(request.getParameters()[0], String.class);
                    String title1 = getJSONParser().fromJson(request.getParameters()[1], String.class);
                    String backButtonText1 = getJSONParser().fromJson(request.getParameters()[2], String.class);
                    boolean response1 = this.openInternalBrowser(url1, title1, backButtonText1);
                    responseJSON = getJSONParser().toJson(response1);
                    break;
               case "openInternalBrowserModal":
                    String url2 = getJSONParser().fromJson(request.getParameters()[0], String.class);
                    String title2 = getJSONParser().fromJson(request.getParameters()[1], String.class);
                    String backButtonText2 = getJSONParser().fromJson(request.getParameters()[2], String.class);
                    boolean response2 = this.openInternalBrowserModal(url2, title2, backButtonText2);
                    responseJSON = getJSONParser().toJson(response2);
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "BrowserBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.0.3.";
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
