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
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing hasButtonSupport({"+type+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.hasButtonSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'hasButtonSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'hasButtonSupport'.");
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
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing hasCommunicationSupport({"+type+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.hasCommunicationSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'hasCommunicationSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'hasCommunicationSupport'.");
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
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing hasDataSupport({"+type+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.hasDataSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'hasDataSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'hasDataSupport'.");
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
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing hasMediaSupport({"+type+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.hasMediaSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'hasMediaSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'hasMediaSupport'.");
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
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing hasNetSupport({"+type+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.hasNetSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'hasNetSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'hasNetSupport'.");
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
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing hasNotificationSupport({"+type+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.hasNotificationSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'hasNotificationSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'hasNotificationSupport'.");
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
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing hasSensorSupport({"+type+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.hasSensorSupport(type);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'hasSensorSupport' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'hasSensorSupport'.");
          }
          return result;          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return String with JSON response or a zero length string if the response is asynchronous or null if method not found.
     */
     public String invoke(APIRequest request) {
          String methodName = request.getMethodName();
          switch (methodName) {
               case "hasButtonSupport":
                    break;
               case "hasCommunicationSupport":
                    break;
               case "hasDataSupport":
                    break;
               case "hasMediaSupport":
                    break;
               case "hasNetSupport":
                    break;
               case "hasNotificationSupport":
                    break;
               case "hasSensorSupport":
                    break;
               default:
                    // TODO: Nothing to invoke!!!
          }
          return null; // TODO: Implement APIRequest to Params and invoke delegate method.
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
