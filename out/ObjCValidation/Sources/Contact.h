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

#import <ContactAddress.h>
#import <ContactEmail.h>
#import <ContactPersonalInfo.h>
#import <ContactPhone.h>
#import <ContactProfessionalInfo.h>
#import <ContactSocial.h>
#import <ContactTag.h>
#import <ContactUid.h>
#import <ContactWebsite.h>
#import <Foundation/Foundation.h>

/**
Structure representing the data elements of a contact.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
@interface Contact : ContactUid

     /**
        The adresses from the contact
        Array objects must be of ContactAddress type.
     */
     @property NSArray *contactAddresses;
     /**
        The emails from the contact
        Array objects must be of ContactEmail type.
     */
     @property NSArray *contactEmails;
     /**
        The phones from the contact
        Array objects must be of ContactPhone type.
     */
     @property NSArray *contactPhones;
     /**
        The social network info from the contact
        Array objects must be of ContactSocial type.
     */
     @property NSArray *contactSocials;
     /**
        The aditional tags from the contact
        Array objects must be of ContactTag type.
     */
     @property NSArray *contactTags;
     /**
        The websites from the contact
        Array objects must be of ContactWebsite type.
     */
     @property NSArray *contactWebsites;
     /**
        The personal info from the contact
     */
     @property ContactPersonalInfo *personalInfo;
     /**
        The professional info from the contact
     */
     @property ContactProfessionalInfo *professionalInfo;

@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
