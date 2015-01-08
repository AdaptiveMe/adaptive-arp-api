/// <reference path="APIBean.d.ts" />
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
       Structure representing the basic device information.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class DeviceInfo extends APIBean {
        /**
           Model of device - equivalent to device release or version.
        */
        model: string;
        /**
           Name of device - equivalent to brand.
        */
        name: string;
        /**
           Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
        */
        uuid: string;
        /**
           Vendor of the device hardware.
        */
        vendor: string;
        /**
           Constructor for the implementation of the platform.

           @param name   or brand of the device.
           @param model  of the device.
           @param vendor of the device.
           @param uuid   unique* identifier (* platform dependent).
           @since ARP1.0
        */
        constructor(name: string, model: string, vendor: string, uuid: string);
        /**
           Returns the model of the device.

           @return String with the model of the device.
           @since ARP1.0
        */
        getModel(): string;
        /**
           Sets Model of device - equivalent to device release or version.

           @param model Model of device - equivalent to device release or version.
        */
        setModel(model: string): void;
        /**
           Returns the name of the device.

           @return String with device name.
           @since ARP1.0
        */
        getName(): string;
        /**
           Sets Name of device - equivalent to brand.

           @param name Name of device - equivalent to brand.
        */
        setName(name: string): void;
        /**
           Returns the platform dependent UUID of the device.

           @return String with the 128-bit device identifier.
           @since ARP1.0
        */
        getUuid(): string;
        /**
           Sets Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.

           @param uuid Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
        */
        setUuid(uuid: string): void;
        /**
           Returns the vendor of the device.

           @return String with the vendor name.
           @since ARP1.0
        */
        getVendor(): string;
        /**
           Sets Vendor of the device hardware.

           @param vendor Vendor of the device hardware.
        */
        setVendor(vendor: string): void;
    }
}
