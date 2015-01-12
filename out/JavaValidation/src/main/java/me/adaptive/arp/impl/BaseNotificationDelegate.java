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
   Base application for Notification purposes
   Auto-generated implementation of IBaseNotification specification.
*/
public class BaseNotificationDelegate implements IBaseNotification {

     /**
        Group of API.
     */
     private IAdaptiveRPGroup apiGroup;

     /**
        Default constructor.
     */
     public BaseNotificationDelegate() {
          this.apiGroup = IAdaptiveRPGroup.Notification;
     }

     /**
        Return the API group for the given interface.
     */
     @Override
     public final IAdaptiveRPGroup getAPIGroup() {
          return this.apiGroup;
     }

     /**
        Return the API version for the given interface.
     */
     @Override
     public String getAPIVersion() {
          return "v2.0.3";
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
