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

    * @version v2.0.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

import com.google.gson.Gson;

/**
   Interface for Managing the Display operations
   Auto-generated implementation of IDisplay specification.
*/
public class DisplayBridge extends BaseSystemBridge implements IDisplay, APIBridge {

     /**
        API Delegate.
     */
     private IDisplay delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public DisplayBridge(IDisplay delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return IDisplay delegate that manages platform specific functions..
     */
     public final IDisplay getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IDisplay delegate) {
          this.delegate = delegate;
     }

     /**
        Add a listener to start receiving display orientation change events.

        @param listener Listener to add to receive orientation change events.
        @since ARP 2.0.5
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
        @since ARP 2.0.5
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
        @since ARP 2.0.5
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

        @since ARP 2.0.5
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
        @return String with JSON response or a zero length string if the response is asynchronous or null if method not found.
     */
     public String invoke(APIRequest request) {
          String responseJSON = "";
          switch (request.getMethodName()) {
               case "addDisplayOrientationListener":
                    IDisplayOrientationListener listener0 = new DisplayOrientationListenerImpl(request.getAsyncId());
                    this.addDisplayOrientationListener(listener0);
                    break;
               case "getOrientationCurrent":
                    ICapabilitiesOrientation response1 = this.getOrientationCurrent();
                    if (response1 != null) {
                         responseJSON = this.gson.toJson(response1);
                    } else {
                         responseJSON = null;
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
                    responseJSON = null;
          }
          return responseJSON;
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
