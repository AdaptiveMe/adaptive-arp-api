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

    * @version v2.0.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIBean.h>
#import <Foundation/Foundation.h>

/**
Represents the basic information about the operating system.

@author Francisco Javier Martin Bueno
@since v2.0
@version 1.0
*/
@interface OSInfo : APIBean

     /**
        The name of the operating system.
     */
     typedef NS_OPTIONS(NSUInteger, IOSType) {
          IOSType_iOS = 0,
          IOSType_OSX = 1,
          IOSType_Windows = 2,
          IOSType_WindowsPhone = 3,
          IOSType_Android = 4,
          IOSType_Linux = 5,
          IOSType_Blackberry = 6,
          IOSType_Tizen = 7,
          IOSType_FirefoxOS = 8,
          IOSType_Chromium = 9,
          IOSType_Unspecified = 10,
          IOSType_Unknown = 11
     };

     @property IOSType *name;
     /**
        The vendor of the operating system.
     */
     @property NSString *vendor;
     /**
        The version/identifier of the operating system.
     */
     @property NSString *version;

     /**
        Default constructor

        @since v2.0
     */
     - (id) init;

     /**
        Constructor used by implementation to set the OS information.

        @param name    of the OS.
        @param version of the OS.
        @param vendor  of the OS.
        @since v2.0
     */
     - (id) initWithNameVersionVendor:(IOSType*)name version:(NSString*)version vendor:(NSString*)vendor;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
