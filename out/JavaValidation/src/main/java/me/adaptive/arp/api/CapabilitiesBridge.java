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
   Interface for testing the Capabilities operations
   Auto-generated implementation of ICapabilities specification.
*/
public class CapabilitiesBridge extends BaseSystemBridge implements ICapabilities, APIBridge {

     /**
        API Delegate.
     */
     private ICapabilities delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public CapabilitiesBridge(ICapabilities delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return ICapabilities delegate that manages platform specific functions..
     */
     public final ICapabilities getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(ICapabilities delegate) {
          this.delegate = delegate;
     }

     /**
        Determines whether a specific hardware button is supported for interaction.

        @param type Type of feature to check.
        @return true is supported, false otherwise.
        @since ARP1.0
     */
     public boolean hasButtonSupport(ICapabilitiesButton type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasButtonSupport({"+type+"}).");

          boolean result = false;
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
        @since ARP1.0
     */
     public boolean hasCommunicationSupport(ICapabilitiesCommunication type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasCommunicationSupport({"+type+"}).");

          boolean result = false;
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
        @since ARP1.0
     */
     public boolean hasDataSupport(ICapabilitiesData type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasDataSupport({"+type+"}).");

          boolean result = false;
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
        @since ARP1.0
     */
     public boolean hasMediaSupport(ICapabilitiesMedia type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasMediaSupport({"+type+"}).");

          boolean result = false;
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
        @since ARP1.0
     */
     public boolean hasNetSupport(ICapabilitiesNet type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasNetSupport({"+type+"}).");

          boolean result = false;
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
        @since ARP1.0
     */
     public boolean hasNotificationSupport(ICapabilitiesNotification type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasNotificationSupport({"+type+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.hasNotificationSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'hasNotificationSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'hasNotificationSupport'.");
          }
          return result;          
     }

     /**
        Determines whether a specific Sensor capability is supported by the
device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since ARP1.0
     */
     public boolean hasSensorSupport(ICapabilitiesSensor type) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing hasSensorSupport({"+type+"}).");

          boolean result = false;
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
               case "hasButtonSupport":
                    ICapabilitiesButton type0 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesButton.class);
                    boolean response0 = this.hasButtonSupport(type0);
                    responseJSON = getJSONParser().toJson(response0);
                    break;
               case "hasCommunicationSupport":
                    ICapabilitiesCommunication type1 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesCommunication.class);
                    boolean response1 = this.hasCommunicationSupport(type1);
                    responseJSON = getJSONParser().toJson(response1);
                    break;
               case "hasDataSupport":
                    ICapabilitiesData type2 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesData.class);
                    boolean response2 = this.hasDataSupport(type2);
                    responseJSON = getJSONParser().toJson(response2);
                    break;
               case "hasMediaSupport":
                    ICapabilitiesMedia type3 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesMedia.class);
                    boolean response3 = this.hasMediaSupport(type3);
                    responseJSON = getJSONParser().toJson(response3);
                    break;
               case "hasNetSupport":
                    ICapabilitiesNet type4 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesNet.class);
                    boolean response4 = this.hasNetSupport(type4);
                    responseJSON = getJSONParser().toJson(response4);
                    break;
               case "hasNotificationSupport":
                    ICapabilitiesNotification type5 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesNotification.class);
                    boolean response5 = this.hasNotificationSupport(type5);
                    responseJSON = getJSONParser().toJson(response5);
                    break;
               case "hasSensorSupport":
                    ICapabilitiesSensor type6 = getJSONParser().fromJson(request.getParameters()[0], ICapabilitiesSensor.class);
                    boolean response6 = this.hasSensorSupport(type6);
                    responseJSON = getJSONParser().toJson(response6);
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "CapabilitiesBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.0.3.";
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
