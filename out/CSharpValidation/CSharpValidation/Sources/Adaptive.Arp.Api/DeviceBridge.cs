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
   Interface for Managing the Device operations
   Auto-generated implementation of IDevice specification.
*/
public class DeviceBridge extends BaseSystemBridge implements IDevice, APIBridge {

     /**
        API Delegate.
     */
     private IDevice delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public DeviceBridge(IDevice delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return IDevice delegate that manages platform specific functions..
     */
     public final IDevice getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IDevice delegate) {
          this.delegate = delegate;
     }

     /**
        Register a new listener that will receive button events.

        @param listener to be registered.
        @since v2.0
     */
     public void addButtonListener(IButtonListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing addButtonListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.addButtonListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'addButtonListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'addButtonListener'.");
          }
          
     }

     /**
        Add a listener to start receiving device orientation change events.

        @param listener Listener to add to receive orientation change events.
        @since v2.0.5
     */
     public void addDeviceOrientationListener(IDeviceOrientationListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing addDeviceOrientationListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.addDeviceOrientationListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'addDeviceOrientationListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'addDeviceOrientationListener'.");
          }
          
     }

     /**
        Returns the device information for the current device executing the runtime.

        @return DeviceInfo for the current device.
        @since v2.0
     */
     public DeviceInfo getDeviceInfo() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getDeviceInfo.");

          DeviceInfo result = null;
          if (this.delegate != null) {
               result = this.delegate.getDeviceInfo();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getDeviceInfo' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getDeviceInfo'.");
          }
          return result;          
     }

     /**
        Gets the current Locale for the device.

        @return The current Locale information.
        @since v2.0
     */
     public Locale getLocaleCurrent() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getLocaleCurrent.");

          Locale result = null;
          if (this.delegate != null) {
               result = this.delegate.getLocaleCurrent();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getLocaleCurrent' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getLocaleCurrent'.");
          }
          return result;          
     }

     /**
        Returns the current orientation of the device. Please note that this may be different from the orientation
of the display. For display orientation, use the IDisplay APIs.

        @return The current orientation of the device.
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
        De-registers an existing listener from receiving button events.

        @param listener to be removed.
        @since v2.0
     */
     public void removeButtonListener(IButtonListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing removeButtonListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.removeButtonListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'removeButtonListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'removeButtonListener'.");
          }
          
     }

     /**
        Removed all existing listeners from receiving button events.

        @since v2.0
     */
     public void removeButtonListeners() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing removeButtonListeners.");

          if (this.delegate != null) {
               this.delegate.removeButtonListeners();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'removeButtonListeners' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'removeButtonListeners'.");
          }
          
     }

     /**
        Remove a listener to stop receiving device orientation change events.

        @param listener Listener to remove from receiving orientation change events.
        @since v2.0.5
     */
     public void removeDeviceOrientationListener(IDeviceOrientationListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing removeDeviceOrientationListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.removeDeviceOrientationListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'removeDeviceOrientationListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'removeDeviceOrientationListener'.");
          }
          
     }

     /**
        Remove all listeners receiving device orientation events.

        @since v2.0.5
     */
     public void removeDeviceOrientationListeners() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing removeDeviceOrientationListeners.");

          if (this.delegate != null) {
               this.delegate.removeDeviceOrientationListeners();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'removeDeviceOrientationListeners' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'removeDeviceOrientationListeners'.");
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
               case "addButtonListener":
                    IButtonListener listener0 = new ButtonListenerImpl(request.getAsyncId());
                    this.addButtonListener(listener0);
                    break;
               case "addDeviceOrientationListener":
                    IDeviceOrientationListener listener1 = new DeviceOrientationListenerImpl(request.getAsyncId());
                    this.addDeviceOrientationListener(listener1);
                    break;
               case "getDeviceInfo":
                    DeviceInfo response2 = this.getDeviceInfo();
                    if (response2 != null) {
                         responseJSON = this.gson.toJson(response2);
                    } else {
                         responseJSON = null;
                    }
                    break;
               case "getLocaleCurrent":
                    Locale response3 = this.getLocaleCurrent();
                    if (response3 != null) {
                         responseJSON = this.gson.toJson(response3);
                    } else {
                         responseJSON = null;
                    }
                    break;
               case "getOrientationCurrent":
                    ICapabilitiesOrientation response4 = this.getOrientationCurrent();
                    if (response4 != null) {
                         responseJSON = this.gson.toJson(response4);
                    } else {
                         responseJSON = null;
                    }
                    break;
               case "removeButtonListener":
                    IButtonListener listener5 = new ButtonListenerImpl(request.getAsyncId());
                    this.removeButtonListener(listener5);
                    break;
               case "removeButtonListeners":
                    this.removeButtonListeners();
                    break;
               case "removeDeviceOrientationListener":
                    IDeviceOrientationListener listener7 = new DeviceOrientationListenerImpl(request.getAsyncId());
                    this.removeDeviceOrientationListener(listener7);
                    break;
               case "removeDeviceOrientationListeners":
                    this.removeDeviceOrientationListeners();
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
