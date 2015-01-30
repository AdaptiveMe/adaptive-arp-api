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
        Interface for testing the Capabilities operations
        Auto-generated implementation of ICapabilities specification.
     */
public class CapabilitiesBridge : BaseSystemBridge, ICapabilities, APIBridge
{

          /**
             API Delegate.
          */
          private ICapabilities delegate;

          /**
             Constructor with delegate.

             @param delegate The delegate implementing platform specific functions.
          */
          public CapabilitiesBridge(ICapabilities delegate) : base()
          {
               this.delegate = delegate;
          }
          /**
             Get the delegate implementation.
             @return ICapabilities delegate that manages platform specific functions..
          */
          public sealed ICapabilities GetDelegate()
          {
               return this.delegate;
          }
          /**
             Set the delegate implementation.

             @param delegate The delegate implementing platform specific functions.
          */
          public sealed void SetDelegate(ICapabilities delegate)
          {
               this.delegate = delegate;
          }

     /**
        Obtains the default orientation of the device/display. If no default orientation is available on
the platform, this method will return the current orientation. To capture device or display orientation
changes please use the IDevice and IDisplay functions and listeners API respectively.

        @return The default orientation for the device/display.
        @since v2.0.5
     */
     public ICapabilitiesOrientation getOrientationDefault() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getOrientationDefault.");

          ICapabilitiesOrientation result = null;
          if (this.delegate != null) {
               result = this.delegate.getOrientationDefault();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getOrientationDefault' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getOrientationDefault'.");
          }
          return result;          
     }

     /**
        Provides the device/display orientations supported by the platform. A platform will usually
support at least one orientation. This is usually PortaitUp.

        @return The orientations supported by the device/display of the platform.
        @since v2.0.5
     */
     public ICapabilitiesOrientation[] getOrientationsSupported() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getOrientationsSupported.");

          ICapabilitiesOrientation[] result = null;
          if (this.delegate != null) {
               result = this.delegate.getOrientationsSupported();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getOrientationsSupported' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getOrientationsSupported'.");
          }
          return result;          
     }

     /**
        Determines whether a specific hardware button is supported for interaction.

        @param type Type of feature to check.
        @return true is supported, false otherwise.
        @since v2.0
     */
     public bool hasButtonSupport(ICapabilitiesButton type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasButtonSupport({"+type+"}).");

          bool result = false;
          if (this.delegate != null) {
               result = this.delegate.hasButtonSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'hasButtonSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'hasButtonSupport'.");
          }
          return result;          
     }

     /**
        Determines whether a specific Communication capability is supported by
the device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasCommunicationSupport(ICapabilitiesCommunication type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasCommunicationSupport({"+type+"}).");

          bool result = false;
          if (this.delegate != null) {
               result = this.delegate.hasCommunicationSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'hasCommunicationSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'hasCommunicationSupport'.");
          }
          return result;          
     }

     /**
        Determines whether a specific Data capability is supported by the device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasDataSupport(ICapabilitiesData type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasDataSupport({"+type+"}).");

          bool result = false;
          if (this.delegate != null) {
               result = this.delegate.hasDataSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'hasDataSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'hasDataSupport'.");
          }
          return result;          
     }

     /**
        Determines whether a specific Media capability is supported by the
device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasMediaSupport(ICapabilitiesMedia type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasMediaSupport({"+type+"}).");

          bool result = false;
          if (this.delegate != null) {
               result = this.delegate.hasMediaSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'hasMediaSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'hasMediaSupport'.");
          }
          return result;          
     }

     /**
        Determines whether a specific Net capability is supported by the device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasNetSupport(ICapabilitiesNet type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasNetSupport({"+type+"}).");

          bool result = false;
          if (this.delegate != null) {
               result = this.delegate.hasNetSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'hasNetSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'hasNetSupport'.");
          }
          return result;          
     }

     /**
        Determines whether a specific Notification capability is supported by the
device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasNotificationSupport(ICapabilitiesNotification type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasNotificationSupport({"+type+"}).");

          bool result = false;
          if (this.delegate != null) {
               result = this.delegate.hasNotificationSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'hasNotificationSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'hasNotificationSupport'.");
          }
          return result;          
     }

     /**
        Determines whether the device/display supports a given orientation.

        @param orientation Orientation type.
        @return True if the given orientation is supported, false otherwise.
        @since v2.0.5
     */
     public bool hasOrientationSupport(ICapabilitiesOrientation orientation) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasOrientationSupport({"+orientation+"}).");

          bool result = false;
          if (this.delegate != null) {
               result = this.delegate.hasOrientationSupport(orientation);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'hasOrientationSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'hasOrientationSupport'.");
          }
          return result;          
     }

     /**
        Determines whether a specific Sensor capability is supported by the
device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasSensorSupport(ICapabilitiesSensor type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasSensorSupport({"+type+"}).");

          bool result = false;
          if (this.delegate != null) {
               result = this.delegate.hasSensorSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'hasSensorSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'hasSensorSupport'.");
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
               case "getOrientationDefault":
                    ICapabilitiesOrientation response0 = this.getOrientationDefault();
                    if (response0 != null) {
                         responseJSON = getJSONParser().toJson(response0);
                    }
                    break;
               case "getOrientationsSupported":
                    ICapabilitiesOrientation[] response1 = this.getOrientationsSupported();
                    if (response1 != null) {
                         responseJSON = getJSONParser().toJson(response1);
                    }
                    break;
               case "hasButtonSupport":
                    ICapabilitiesButton type2 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesButton.class);
                    bool response2 = this.hasButtonSupport(type2);
                    responseJSON = getJSONParser().toJson(response2);
                    break;
               case "hasCommunicationSupport":
                    ICapabilitiesCommunication type3 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesCommunication.class);
                    bool response3 = this.hasCommunicationSupport(type3);
                    responseJSON = getJSONParser().toJson(response3);
                    break;
               case "hasDataSupport":
                    ICapabilitiesData type4 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesData.class);
                    bool response4 = this.hasDataSupport(type4);
                    responseJSON = getJSONParser().toJson(response4);
                    break;
               case "hasMediaSupport":
                    ICapabilitiesMedia type5 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesMedia.class);
                    bool response5 = this.hasMediaSupport(type5);
                    responseJSON = getJSONParser().toJson(response5);
                    break;
               case "hasNetSupport":
                    ICapabilitiesNet type6 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesNet.class);
                    bool response6 = this.hasNetSupport(type6);
                    responseJSON = getJSONParser().toJson(response6);
                    break;
               case "hasNotificationSupport":
                    ICapabilitiesNotification type7 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesNotification.class);
                    bool response7 = this.hasNotificationSupport(type7);
                    responseJSON = getJSONParser().toJson(response7);
                    break;
               case "hasOrientationSupport":
                    ICapabilitiesOrientation orientation8 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesOrientation.class);
                    bool response8 = this.hasOrientationSupport(orientation8);
                    responseJSON = getJSONParser().toJson(response8);
                    break;
               case "hasSensorSupport":
                    ICapabilitiesSensor type9 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesSensor.class);
                    bool response9 = this.hasSensorSupport(type9);
                    responseJSON = getJSONParser().toJson(response9);
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "CapabilitiesBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.1.1.";
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
