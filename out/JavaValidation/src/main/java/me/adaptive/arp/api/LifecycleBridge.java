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
   Interface for Managing the Lifecycle listeners
   Auto-generated implementation of ILifecycle specification.
*/
public class LifecycleBridge extends BaseApplicationBridge implements ILifecycle, APIBridge {

     /**
        API Delegate.
     */
     private ILifecycle delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public LifecycleBridge(ILifecycle delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return ILifecycle delegate that manages platform specific functions..
     */
     public final ILifecycle getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(ILifecycle delegate) {
          this.delegate = delegate;
     }

     /**
        Add the listener for the lifecycle of the app

        @param listener Lifecycle listener
        @since ARP1.0
     */
     public void addLifecycleListener(ILifecycleListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing addLifecycleListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.addLifecycleListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'addLifecycleListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'addLifecycleListener'.");
          }
          
     }

     /**
        Whether the application is in background or not

        @return true if the application is in background;false otherwise
        @since ARP1.0
     */
     public boolean isBackground() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing isBackground.");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.isBackground();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'isBackground' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'isBackground'.");
          }
          return result;          
     }

     /**
        Un-registers an existing listener from receiving lifecycle events.

        @param listener Lifecycle listener
        @since ARP1.0
     */
     public void removeLifecycleListener(ILifecycleListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing removeLifecycleListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.removeLifecycleListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'removeLifecycleListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'removeLifecycleListener'.");
          }
          
     }

     /**
        Removes all existing listeners from receiving lifecycle events.

        @since ARP1.0
     */
     public void removeLifecycleListeners() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing removeLifecycleListeners.");

          if (this.delegate != null) {
               this.delegate.removeLifecycleListeners();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'removeLifecycleListeners' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'removeLifecycleListeners'.");
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
               case "addLifecycleListener":
                    ILifecycleListener listener0 = new LifecycleListenerImpl(request.getAsyncId());
                    this.addLifecycleListener(listener0);
                    break;
               case "isBackground":
                    boolean response1 = this.isBackground();
                    responseJSON = getJSONParser().toJson(response1);
                    break;
               case "removeLifecycleListener":
                    ILifecycleListener listener2 = new LifecycleListenerImpl(request.getAsyncId());
                    this.removeLifecycleListener(listener2);
                    break;
               case "removeLifecycleListeners":
                    this.removeLifecycleListeners();
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "LifecycleBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.0.3.";
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
