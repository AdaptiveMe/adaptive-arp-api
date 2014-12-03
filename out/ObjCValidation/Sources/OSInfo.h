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

#import <Foundation/Foundation.h>

/**
Represents the basic information about the operating system.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
@interface OSInfo : NSObject

     /**
        The name of the operating system.
     */
     @property NSString *name;
     /**
        The vendor of the operating system.
     */
     @property NSString *vendor;
     /**
        The version/identifier of the operating system.
     */
     @property NSString *version;

     /**
        Constructor used by the implementation
     */
     - (id) init;

     /**
        Constructor used by implementation to set the OS information.

        @param name    of the OS.
        @param version of the OS.
        @param vendor  of the OS.
     */
     - (id) initWithNameVersionVendor:(NSString*)name version:(NSString*)version vendor:(NSString*)vendor;

@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
