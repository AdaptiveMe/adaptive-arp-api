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

    * @version v2.0.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIBean.h>
#import <Foundation/Foundation.h>

/**
Structure representing the a physical or logical button on a device.

@author Francisco Javier Martin Bueno
@since ARP1.0
@version 1.0
*/
@interface Button : APIBean

     /**
        Button type
     */
     typedef NS_OPTIONS(NSUInteger, ICapabilitiesButton) {
          ICapabilitiesButton_HomeButton = 0,
          ICapabilitiesButton_BackButton = 1,
          ICapabilitiesButton_OptionButton = 2,
          ICapabilitiesButton_Unknown = 3
     };

     @property ICapabilitiesButton *type;

     /**
        Default constructor

        @since ARP1.0
     */
     - (id) init;

     /**
        Constructor with fields

        @param type Button type.
        @since ARP1.0
     */
     - (id) initWithType:(ICapabilitiesButton*)type;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
