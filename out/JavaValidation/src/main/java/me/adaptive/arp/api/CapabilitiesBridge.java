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
public class CapabilitiesBridge extends BaseSystemBridge implements ICapabilities {

     /**
        Group of API.
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
          // Invoke delegate
          return this.delegate.hasButtonSupport(type);
          
     }

     /**
        Determines whether a specific Communication capability is supported by
the device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since ARP1.0
     */
     public boolean hasCommunicationSupport(ICapabilitiesCommunication type) {
          // Invoke delegate
          return this.delegate.hasCommunicationSupport(type);
          
     }

     /**
        Determines whether a specific Data capability is supported by the device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since ARP1.0
     */
     public boolean hasDataSupport(ICapabilitiesData type) {
          // Invoke delegate
          return this.delegate.hasDataSupport(type);
          
     }

     /**
        Determines whether a specific Media capability is supported by the
device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since ARP1.0
     */
     public boolean hasMediaSupport(ICapabilitiesMedia type) {
          // Invoke delegate
          return this.delegate.hasMediaSupport(type);
          
     }

     /**
        Determines whether a specific Net capability is supported by the device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since ARP1.0
     */
     public boolean hasNetSupport(ICapabilitiesNet type) {
          // Invoke delegate
          return this.delegate.hasNetSupport(type);
          
     }

     /**
        Determines whether a specific Notification capability is supported by the
device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since ARP1.0
     */
     public boolean hasNotificationSupport(ICapabilitiesNotification type) {
          // Invoke delegate
          return this.delegate.hasNotificationSupport(type);
          
     }

     /**
        Determines whether a specific Sensor capability is supported by the
device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since ARP1.0
     */
     public boolean hasSensorSupport(ICapabilitiesSensor type) {
          // Invoke delegate
          return this.delegate.hasSensorSupport(type);
          
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
