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

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing the basic device information.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var DeviceInfo = (function () {
        /**
           Constructor for the implementation of the platform.

           @param name   or brand of the device.
           @param model  of the device.
           @param vendor of the device.
           @param uuid   unique* identifier (* platform dependent).
        */
        function DeviceInfo(name, model, vendor, uuid) {
            this.name = name;
            this.model = model;
            this.vendor = vendor;
            this.uuid = uuid;
        }
        /**
           Returns the model of the device.

           @return String with the model of the device.
        */
        DeviceInfo.prototype.getModel = function () {
            return this.model;
        };
        /**
           Sets Model of device - equivalent to device release or version.

           @param model Model of device - equivalent to device release or version.
        */
        DeviceInfo.prototype.setModel = function (model) {
            this.model = model;
        };
        /**
           Returns the name of the device.

           @return String with device name.
        */
        DeviceInfo.prototype.getName = function () {
            return this.name;
        };
        /**
           Sets Name of device - equivalent to brand.

           @param name Name of device - equivalent to brand.
        */
        DeviceInfo.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Returns the platform dependent UUID of the device.

           @return String with the 128-bit device identifier.
        */
        DeviceInfo.prototype.getUuid = function () {
            return this.uuid;
        };
        /**
           Sets Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.

           @param uuid Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
        */
        DeviceInfo.prototype.setUuid = function (uuid) {
            this.uuid = uuid;
        };
        /**
           Returns the vendor of the device.

           @return String with the vendor name.
        */
        DeviceInfo.prototype.getVendor = function () {
            return this.vendor;
        };
        /**
           Sets Vendor of the device hardware.

           @param vendor Vendor of the device hardware.
        */
        DeviceInfo.prototype.setVendor = function (vendor) {
            this.vendor = vendor;
        };
        return DeviceInfo;
    })();
    Adaptive.DeviceInfo = DeviceInfo;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=DeviceInfo.js.map