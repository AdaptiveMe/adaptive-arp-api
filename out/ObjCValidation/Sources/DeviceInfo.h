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

    * @version v2.0.8

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIBean.h>
#import <Foundation/Foundation.h>

/**
Structure representing the basic device information.

@author Francisco Javier Martin Bueno
@since v2.0
@version 1.0
*/
@interface DeviceInfo : APIBean

     /**
        Model of device - equivalent to device release or version.
     */
     @property NSString *model;
     /**
        Name of device - equivalent to brand.
     */
     @property NSString *name;
     /**
        Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
     */
     @property NSString *uuid;
     /**
        Vendor of the device hardware.
     */
     @property NSString *vendor;

     /**
        Default constructor

        @since v2.0
     */
     - (id) init;

     /**
        Constructor for the implementation of the platform.

        @param name   or brand of the device.
        @param model  of the device.
        @param vendor of the device.
        @param uuid   unique* identifier (* platform dependent).
        @since v2.0
     */
     - (id) initWithNameModelVendorUuid:(NSString*)name model:(NSString*)model vendor:(NSString*)vendor uuid:(NSString*)uuid;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
