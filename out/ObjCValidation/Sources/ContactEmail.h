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
Structure representing the email data elements of a contact.

@author Francisco Javier Martin Bueno
@since v2.0
@version 1.0
*/
@interface ContactEmail : APIBean

     /**
        The type of the email
     */
     typedef NS_OPTIONS(NSUInteger, ContactEmailType) {
          ContactEmailType_Personal = 0,
          ContactEmailType_Work = 1,
          ContactEmailType_Other = 2,
          ContactEmailType_Unknown = 3
     };

     @property ContactEmailType *type;
     /**
        Email of the Contact
     */
     @property NSString *email;
     /**
        Whether the email is the primary one or not
     */
     @property bool *primary;

     /**
        Default constructor

        @since v2.0
     */
     - (id) init;

     /**
        Constructor used by the implementation

        @param type    Type of the email
        @param primary Is email primary
        @param email   Email of the contact
        @since v2.0
     */
     - (id) initWithTypePrimaryEmail:(ContactEmailType*)type primary:(bool*)primary email:(NSString*)email;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
