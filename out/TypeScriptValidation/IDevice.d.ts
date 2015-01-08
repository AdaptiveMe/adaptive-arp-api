/// <reference path="DeviceInfo.d.ts" />
/// <reference path="IAdaptiveRPGroup.d.ts" />
/// <reference path="IBaseSystem.d.ts" />
/// <reference path="IButtonListener.d.ts" />
/// <reference path="Locale.d.ts" />
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
       Interface for Managing the Device operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    interface IDevice extends IBaseSystem {
        /**
           Register a new listener that will receive button events.
           @param listener to be registered.
           @since ARP1.0
        */
        addButtonListener(listener: IButtonListener): any;
        /**
           Returns the device information for the current device executing the runtime.
           @return DeviceInfo for the current device.
           @since ARP1.0
        */
        getDeviceInfo(): DeviceInfo;
        /**
           Gets the current Locale for the device.
           @return The current Locale information.
           @since ARP1.0
        */
        getLocaleCurrent(): Locale;
        /**
           De-registers an existing listener from receiving button events.
           @param listener to be removed.
           @since ARP1.0
        */
        removeButtonListener(listener: IButtonListener): any;
        /**
           Removed all existing listeners from receiving button events.
           @since ARP1.0
        */
        removeButtonListeners(): any;
    }
}
