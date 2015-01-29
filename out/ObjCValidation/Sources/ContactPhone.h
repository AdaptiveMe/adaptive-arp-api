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

    * @version v2.1.1

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIBean.h>
#import <Foundation/Foundation.h>

/**
Structure representing the phone data elements of a contact.

@author Francisco Javier Martin Bueno
@since v2.0
@version 1.0
*/
@interface ContactPhone : APIBean

     /**
        The phone number phoneType
     */
     typedef NS_OPTIONS(NSUInteger, ContactPhoneType) {
          ContactPhoneType_Mobile = 0,
          ContactPhoneType_Work = 1,
          ContactPhoneType_Home = 2,
          ContactPhoneType_Main = 3,
          ContactPhoneType_HomeFax = 4,
          ContactPhoneType_WorkFax = 5,
          ContactPhoneType_Other = 6,
          ContactPhoneType_Unknown = 7
     };

     @property ContactPhoneType *phoneType;
     /**
        The phone number
     */
     @property NSString *phone;

     /**
        Default constructor

        @since v2.0
     */
     - (id) init;

     /**
        Constructor used by implementation to set the contact Phone

        @param phone     Phone number
        @param phoneType Type of Phone number
        @since v2.0
     */
     - (id) initWithPhonePhoneType:(NSString*)phone phoneType:(ContactPhoneType*)phoneType;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
