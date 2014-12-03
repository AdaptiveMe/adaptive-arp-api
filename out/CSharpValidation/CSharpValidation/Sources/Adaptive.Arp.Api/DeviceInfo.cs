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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing the basic device information.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public class DeviceInfo
     {

          /**
             Model of device - equivalent to device release or version.
          */
          public string Model { get; set; }
          /**
             Name of device - equivalent to brand.
          */
          public string Name { get; set; }
          /**
             Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
          */
          public string Uuid { get; set; }
          /**
             Vendor of the device hardware.
          */
          public string Vendor { get; set; }

          /**
             Constructor used by the implementation
          */
          public DeviceInfo()  {
          }

          /**
             Constructor for the implementation of the platform.

             @param Name   or brand of the device.
             @param Model  of the device.
             @param Vendor of the device.
             @param Uuid   unique* identifier (* platform dependent).
          */
          public DeviceInfo(string Name, string Model, string Vendor, string Uuid) : base () {
               this.Name = Name;
               this.Model = Model;
               this.Vendor = Vendor;
               this.Uuid = Uuid;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
