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

    * @version v2.1.1

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{

     /**
        Interface for Managing the Display operations
        Auto-generated implementation of IDisplay specification.
     */
public class DisplayBridge : BaseSystemBridge, IDisplay, APIBridge
{

          /**
             API Delegate.
          */
          private IDisplay delegate;

          /**
             Constructor with delegate.

             @param delegate The delegate implementing platform specific functions.
          */
          public DisplayBridge(IDisplay delegate) : base()
          {
               this.delegate = delegate;
          }
          /**
             Get the delegate implementation.
             @return IDisplay delegate that manages platform specific functions..
          */
          public sealed IDisplay GetDelegate()
          {
               return this.delegate;
          }
          /**
             Set the delegate implementation.

             @param delegate The delegate implementing platform specific functions.
          */
          public sealed void SetDelegate(IDisplay delegate)
          {
               this.delegate = delegate;
          }

     /**
        Add a listener to start receiving display orientation change events.

        @param listener Listener to add to receive orientation change events.
        @since v2.0.5
     */
     public void addDisplayOrientationListener(IDisplayOrientationListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing addDisplayOrientationListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.addDisplayOrientationListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'addDisplayOrientationListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'addDisplayOrientationListener'.");
          }
          
     }

     /**
        Returns the current orientation of the display. Please note that this may be different from the orientation
of the device. For device orientation, use the IDevice APIs.

        @return The current orientation of the display.
        @since v2.0.5
     */
     public ICapabilitiesOrientation getOrientationCurrent() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getOrientationCurrent.");

          ICapabilitiesOrientation result = null;
          if (this.delegate != null) {
               result = this.delegate.getOrientationCurrent();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getOrientationCurrent' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getOrientationCurrent'.");
          }
          return result;          
     }

     /**
        Remove a listener to stop receiving display orientation change events.

        @param listener Listener to remove from receiving orientation change events.
        @since v2.0.5
     */
     public void removeDisplayOrientationListener(IDisplayOrientationListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing removeDisplayOrientationListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.removeDisplayOrientationListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'removeDisplayOrientationListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'removeDisplayOrientationListener'.");
          }
          
     }

     /**
        Remove all listeners receiving display orientation events.

        @since v2.0.5
     */
     public void removeDisplayOrientationListeners() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing removeDisplayOrientationListeners.");

          if (this.delegate != null) {
               this.delegate.removeDisplayOrientationListeners();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'removeDisplayOrientationListeners' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'removeDisplayOrientationListeners'.");
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
               case "addDisplayOrientationListener":
                    IDisplayOrientationListener listener0 = new DisplayOrientationListenerImpl(request.getAsyncId());
                    this.addDisplayOrientationListener(listener0);
                    break;
               case "getOrientationCurrent":
                    ICapabilitiesOrientation response1 = this.getOrientationCurrent();
                    if (response1 != null) {
                         responseJSON = getJSONParser().toJson(response1);
                    }
                    break;
               case "removeDisplayOrientationListener":
                    IDisplayOrientationListener listener2 = new DisplayOrientationListenerImpl(request.getAsyncId());
                    this.removeDisplayOrientationListener(listener2);
                    break;
               case "removeDisplayOrientationListeners":
                    this.removeDisplayOrientationListeners();
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "DisplayBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.1.1.";
          }
          response.setResponse(responseJSON);
          response.setStatusCode(responseCode);
          response.setStatusMessage(responseMessage);
          return response;
     }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
