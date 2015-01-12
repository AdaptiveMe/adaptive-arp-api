/// <reference path="APIRequest.d.ts" />
/// <reference path="BaseSystemBridge.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="IAdaptiveRPGroup.d.ts" />
/// <reference path="IBaseSystem.d.ts" />
/// <reference path="ICapabilities.d.ts" />
/// <reference path="ICapabilitiesButton.d.ts" />
/// <reference path="ICapabilitiesCommunication.d.ts" />
/// <reference path="ICapabilitiesData.d.ts" />
/// <reference path="ICapabilitiesMedia.d.ts" />
/// <reference path="ICapabilitiesNet.d.ts" />
/// <reference path="ICapabilitiesNotification.d.ts" />
/// <reference path="ICapabilitiesSensor.d.ts" />
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
declare module Adaptive {
    /**
       Interface for testing the Capabilities operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class CapabilitiesBridge extends BaseSystemBridge implements ICapabilities {
        /**
           Default constructor.
        */
        constructor();
        /**
           Determines whether a specific hardware button is supported for interaction.

           @param type Type of feature to check.
           @return true is supported, false otherwise.
           @since ARP1.0
        */
        hasButtonSupport(type: ICapabilitiesButton): boolean;
        /**
           Determines whether a specific Communication capability is supported by
the device.

           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @since ARP1.0
        */
        hasCommunicationSupport(type: ICapabilitiesCommunication): boolean;
        /**
           Determines whether a specific Data capability is supported by the device.

           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @since ARP1.0
        */
        hasDataSupport(type: ICapabilitiesData): boolean;
        /**
           Determines whether a specific Media capability is supported by the
device.

           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @since ARP1.0
        */
        hasMediaSupport(type: ICapabilitiesMedia): boolean;
        /**
           Determines whether a specific Net capability is supported by the device.

           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @since ARP1.0
        */
        hasNetSupport(type: ICapabilitiesNet): boolean;
        /**
           Determines whether a specific Notification capability is supported by the
device.

           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @since ARP1.0
        */
        hasNotificationSupport(type: ICapabilitiesNotification): boolean;
        /**
           Determines whether a specific Sensor capability is supported by the
device.

           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @since ARP1.0
        */
        hasSensorSupport(type: ICapabilitiesSensor): boolean;
    }
}
