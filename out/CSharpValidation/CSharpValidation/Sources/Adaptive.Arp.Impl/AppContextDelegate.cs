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

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.impl;

import me.adaptive.arp.api.*;

/**
   Interface for context management purposes
   Auto-generated implementation of IAppContext specification.
*/
public class AppContextDelegate implements IAppContext {

     /**
        Default Constructor.
     */
     public AppContextDelegate() {
          super();
     }

     /**
        The main application context. This should be cast to the platform specific implementation.

        @return Object representing the specific singleton application context provided by the OS.
        @since ARP 2.0
     */
     public Object getContext() {
          Object response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":getContext");
          // return response;
     }

     /**
        The type of context provided by the getContext method.

        @return Type of platform context.
        @since ARP 2.0
     */
     public IOSType getContextType() {
          IOSType response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":getContextType");
          // return response;
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
