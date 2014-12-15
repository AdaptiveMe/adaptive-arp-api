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
   Interface for Managing the Network status
   Auto-generated implementation of INetworkStatus specification.
*/
public class NetworkStatusBridge extends BaseCommunicationBridge implements INetworkStatus {

     /**
        Group of API.
     */
     private INetworkStatus delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public NetworkStatusBridge(INetworkStatus delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
     */
     public final INetworkStatus getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(INetworkStatus delegate) {
          this.delegate = delegate;
     }

     /**
        Add the listener for network status changes of the app

        @param listener Listener with the result
        @since ARP1.0
     */
     public void addNetworkStatusListener(INetworkStatusListener listener) {
          // Invoke delegate
          this.delegate.addNetworkStatusListener(listener);
          
     }

     /**
        Un-registers an existing listener from receiving network status events.

        @param listener Listener with the result
        @since ARP1.0
     */
     public void removeNetworkStatusListener(INetworkStatusListener listener) {
          // Invoke delegate
          this.delegate.removeNetworkStatusListener(listener);
          
     }

     /**
        Removes all existing listeners from receiving network status events.

        @since ARP1.0
     */
     public void removeNetworkStatusListeners() {
          // Invoke delegate
          this.delegate.removeNetworkStatusListeners();
          
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
