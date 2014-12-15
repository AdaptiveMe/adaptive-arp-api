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
   Interface for Managing the Lifecycle listeners
   Auto-generated implementation of ILifecycle specification.
*/
public class LifecycleBridge extends BaseApplicationBridge implements ILifecycle {

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
          // Invoke delegate
          this.delegate.addLifecycleListener(listener);
          
     }

     /**
        Whether the application is in background or not

        @return true if the application is in background;false otherwise
        @since ARP1.0
     */
     public boolean isBackground() {
          // Invoke delegate
          return this.delegate.isBackground();
          
     }

     /**
        Un-registers an existing listener from receiving lifecycle events.

        @param listener Lifecycle listener
        @since ARP1.0
     */
     public void removeLifecycleListener(ILifecycleListener listener) {
          // Invoke delegate
          this.delegate.removeLifecycleListener(listener);
          
     }

     /**
        Removes all existing listeners from receiving lifecycle events.

        @since ARP1.0
     */
     public void removeLifecycleListeners() {
          // Invoke delegate
          this.delegate.removeLifecycleListeners();
          
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
