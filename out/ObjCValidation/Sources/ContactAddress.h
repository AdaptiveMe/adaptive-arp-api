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

#import <APIBean.h>
#import <Foundation/Foundation.h>

/**
Structure representing the address data elements of a contact.

@author Francisco Javier Martin Bueno
@since ARP1.0
@version 1.0
*/
@interface ContactAddress : APIBean

     /**
        The address type
     */
     typedef NS_OPTIONS(NSUInteger, ContactAddressType) {
          ContactAddressType_Home = 0,
          ContactAddressType_Work = 1,
          ContactAddressType_Other = 2,
          ContactAddressType_Unknown = 3
     };

     @property ContactAddressType *type;
     /**
        The Contact address
     */
     @property NSString *address;

     /**
        Default constructor

        @since ARP1.0
     */
     - (id) init;

     /**
        Constructor with fields

        @param address Address data.
        @param type    Address type.
        @since ARP1.0
     */
     - (id) initWithAddressType:(NSString*)address type:(ContactAddressType*)type;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
