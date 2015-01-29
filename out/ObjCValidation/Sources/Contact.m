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

#import <Contact.h>

/**

@author Francisco Javier Martin Bueno
@since v2.0
@version 1.0
*/
@implementation Contact


     /**
        Default Constructor

        @since v2.0
     */
     - (id) init {
          self = [self init];
          return self;
     }

     /**
        Constructor used by implementation to set the Contact.

        @param contactId of the Contact
        @since v2.0
     */
     - (id) initWithContactId:(NSString*)contactId {
          self = [super initWithContactId:contactId];
          if (self) {
          }
          return self;
     }

     /**
        Constructor with all the fields

        @param contactId        Identifier of the contact
        @param personalInfo     Personal Information
        @param professionalInfo Professional Information
        @param contactAddresses Addresses of the contact
        @param contactPhones    Phones of the contact
        @param contactEmails    Emails of the contact
        @param contactWebsites  Websites of the contact
        @param contactSocials   Social Networks of the contact
        @param contactTags      Tags of the contact
        @since v2.0
     */
     - (id) initWithContactIdPersonalInfoProfessionalInfoContactAddressesContactPhonesContactEmailsContactWebsitesContactSocialsContactTags:(NSString*)contactId personalInfo:(ContactPersonalInfo*)personalInfo professionalInfo:(ContactProfessionalInfo*)professionalInfo contactAddresses:(NSArray*)contactAddresses contactPhones:(NSArray*)contactPhones contactEmails:(NSArray*)contactEmails contactWebsites:(NSArray*)contactWebsites contactSocials:(NSArray*)contactSocials contactTags:(NSArray*)contactTags {
          self = [super initWithContactIdPersonalInfoProfessionalInfoContactAddressesContactPhonesContactEmailsContactWebsitesContactSocialsContactTags:contactId, personalInfo, professionalInfo, contactAddresses, contactPhones, contactEmails, contactWebsites, contactSocials, contactTags];
          if (self) {
               [self setPersonalInfo:personalInfo];
               [self setProfessionalInfo:professionalInfo];
               [self setContactAddresses:contactAddresses];
               [self setContactPhones:contactPhones];
               [self setContactEmails:contactEmails];
               [self setContactWebsites:contactWebsites];
               [self setContactSocials:contactSocials];
               [self setContactTags:contactTags];
          }
          return self;
     }



@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
