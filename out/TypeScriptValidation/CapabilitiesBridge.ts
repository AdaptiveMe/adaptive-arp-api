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

///<reference path="APIRequest.ts"/>
///<reference path="BaseSystemBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSystem.ts"/>
///<reference path="ICapabilities.ts"/>
///<reference path="ICapabilitiesButton.ts"/>
///<reference path="ICapabilitiesCommunication.ts"/>
///<reference path="ICapabilitiesData.ts"/>
///<reference path="ICapabilitiesMedia.ts"/>
///<reference path="ICapabilitiesNet.ts"/>
///<reference path="ICapabilitiesNotification.ts"/>
///<reference path="ICapabilitiesSensor.ts"/>
module Adaptive {

     /**
        Interface for testing the Capabilities operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class CapabilitiesBridge extends BaseSystemBridge implements ICapabilities {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Determines whether a specific hardware button is supported for interaction.

             @param type Type of feature to check.
             @return true is supported, false otherwise.
             @since ARP1.0
          */
          hasButtonSupport(type : ICapabilitiesButton) : boolean {
               return null;
          }

          /**
             Determines whether a specific Communication capability is supported by
the device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasCommunicationSupport(type : ICapabilitiesCommunication) : boolean {
               return null;
          }

          /**
             Determines whether a specific Data capability is supported by the device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasDataSupport(type : ICapabilitiesData) : boolean {
               return null;
          }

          /**
             Determines whether a specific Media capability is supported by the
device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasMediaSupport(type : ICapabilitiesMedia) : boolean {
               return null;
          }

          /**
             Determines whether a specific Net capability is supported by the device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasNetSupport(type : ICapabilitiesNet) : boolean {
               return null;
          }

          /**
             Determines whether a specific Notification capability is supported by the
device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasNotificationSupport(type : ICapabilitiesNotification) : boolean {
               return null;
          }

          /**
             Determines whether a specific Sensor capability is supported by the
device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasSensorSupport(type : ICapabilitiesSensor) : boolean {
               return null;
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
