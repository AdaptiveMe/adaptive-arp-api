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
   Interface for Managing the Device operations
   Auto-generated implementation of IDevice specification.
*/
public class DeviceBridge extends BaseSystemBridge implements IDevice {

     /**
        Group of API.
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
        @since ARP1.0
     */
     public void addButtonListener(IButtonListener listener) {
          // Invoke delegate
          this.delegate.addButtonListener(listener);
          
     }

     /**
        Returns the device information for the current device executing the runtime.

        @return DeviceInfo for the current device.
        @since ARP1.0
     */
     public DeviceInfo getDeviceInfo() {
          // Invoke delegate
          return this.delegate.getDeviceInfo();
          
     }

     /**
        Gets the current Locale for the device.

        @return The current Locale information.
        @since ARP1.0
     */
     public Locale getLocaleCurrent() {
          // Invoke delegate
          return this.delegate.getLocaleCurrent();
          
     }

     /**
        De-registers an existing listener from receiving button events.

        @param listener
        @since ARP1.0
     */
     public void removeButtonListener(IButtonListener listener) {
          // Invoke delegate
          this.delegate.removeButtonListener(listener);
          
     }

     /**
        Removed all existing listeners from receiving button events.

        @since ARP1.0
     */
     public void removeButtonListeners() {
          // Invoke delegate
          this.delegate.removeButtonListeners();
          
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
