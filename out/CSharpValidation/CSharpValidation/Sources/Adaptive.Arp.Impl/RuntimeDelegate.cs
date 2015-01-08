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

package me.adaptive.arp.impl;

import me.adaptive.arp.api.*;

/**
   Interface for Managing the Runtime operations
   Auto-generated implementation of IRuntime specification.
*/
public class RuntimeDelegate extends BaseSystemDelegate implements IRuntime {

     /**
        Register delegate with the Application Registry.
     */
     static {
          AppRegistryBridge.getInstance().getRuntimeBridge().setDelegate(new RuntimeDelegate());
     }

     /**
        Default Constructor.
     */
     public RuntimeDelegate() {
          super();
     }

     /**
        Dismiss the current Application

        @since ARP1.0
     */
     public void dismissApplication() {
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":dismissApplication");
     }

     /**
        Whether the application dismiss the splash screen successfully or not

        @return true if the application has dismissed the splash screen;false otherwise
        @since ARP1.0
     */
     public bool dismissSplashScreen() {
          bool response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":dismissSplashScreen");
          // return response;
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
