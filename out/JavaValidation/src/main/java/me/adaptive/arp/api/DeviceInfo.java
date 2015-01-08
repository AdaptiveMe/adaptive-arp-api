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

package me.adaptive.arp.api;

/**
   Structure representing the basic device information.

   @author Francisco Javier Martin Bueno
   @since ARP1.0
   @version 1.0
*/
public class DeviceInfo extends APIBean {

     /**
        Model of device - equivalent to device release or version.
     */
     private String model;
     /**
        Name of device - equivalent to brand.
     */
     private String name;
     /**
        Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
     */
     private String uuid;
     /**
        Vendor of the device hardware.
     */
     private String vendor;

     /**
        Default constructor

        @since ARP1.0
     */
     public DeviceInfo() {
     }

     /**
        Constructor for the implementation of the platform.

        @param name   or brand of the device.
        @param model  of the device.
        @param vendor of the device.
        @param uuid   unique* identifier (* platform dependent).
        @since ARP1.0
     */
     public DeviceInfo(String name, String model, String vendor, String uuid) {
          super();
          this.name = name;
          this.model = model;
          this.vendor = vendor;
          this.uuid = uuid;
     }

     /**
        Returns the model of the device.

        @return String with the model of the device.
        @since ARP1.0
     */
     public String getModel() {
          return this.model;
     }

     /**
        Sets Model of device - equivalent to device release or version.

        @param model Model of device - equivalent to device release or version.
     */
     public void setModel(String model) {
          this.model = model;
     }

     /**
        Returns the name of the device.

        @return String with device name.
        @since ARP1.0
     */
     public String getName() {
          return this.name;
     }

     /**
        Sets Name of device - equivalent to brand.

        @param name Name of device - equivalent to brand.
     */
     public void setName(String name) {
          this.name = name;
     }

     /**
        Returns the platform dependent UUID of the device.

        @return String with the 128-bit device identifier.
        @since ARP1.0
     */
     public String getUuid() {
          return this.uuid;
     }

     /**
        Sets Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.

        @param uuid Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
     */
     public void setUuid(String uuid) {
          this.uuid = uuid;
     }

     /**
        Returns the vendor of the device.

        @return String with the vendor name.
        @since ARP1.0
     */
     public String getVendor() {
          return this.vendor;
     }

     /**
        Sets Vendor of the device hardware.

        @param vendor Vendor of the device hardware.
     */
     public void setVendor(String vendor) {
          this.vendor = vendor;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
