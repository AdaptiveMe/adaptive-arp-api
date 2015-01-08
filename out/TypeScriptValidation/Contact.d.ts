/// <reference path="ContactAddress.d.ts" />
/// <reference path="ContactEmail.d.ts" />
/// <reference path="ContactPersonalInfo.d.ts" />
/// <reference path="ContactPhone.d.ts" />
/// <reference path="ContactProfessionalInfo.d.ts" />
/// <reference path="ContactSocial.d.ts" />
/// <reference path="ContactTag.d.ts" />
/// <reference path="ContactUid.d.ts" />
/// <reference path="ContactWebsite.d.ts" />
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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       Structure representing the data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class Contact extends ContactUid {
        /**
           The adresses from the contact
        */
        contactAddresses: ContactAddress[];
        /**
           The emails from the contact
        */
        contactEmails: ContactEmail[];
        /**
           The phones from the contact
        */
        contactPhones: ContactPhone[];
        /**
           The social network info from the contact
        */
        contactSocials: ContactSocial[];
        /**
           The aditional tags from the contact
        */
        contactTags: ContactTag[];
        /**
           The websites from the contact
        */
        contactWebsites: ContactWebsite[];
        /**
           The personal info from the contact
        */
        personalInfo: ContactPersonalInfo;
        /**
           The professional info from the contact
        */
        professionalInfo: ContactProfessionalInfo;
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
           @since ARP1.0
        */
        constructor(contactId: string, personalInfo: ContactPersonalInfo, professionalInfo: ContactProfessionalInfo, contactAddresses: ContactAddress[], contactPhones: ContactPhone[], contactEmails: ContactEmail[], contactWebsites: ContactWebsite[], contactSocials: ContactSocial[], contactTags: ContactTag[]);
        /**
           Returns all the addresses of the Contact

           @return ContactAddress[]
           @since ARP1.0
        */
        getContactAddresses(): ContactAddress[];
        /**
           Set the addresses of the Contact

           @param contactAddresses Addresses of the contact
           @since ARP1.0
        */
        setContactAddresses(contactAddresses: ContactAddress[]): void;
        /**
           Returns all the emails of the Contact

           @return ContactEmail[]
           @since ARP1.0
        */
        getContactEmails(): ContactEmail[];
        /**
           Set the emails of the Contact

           @param contactEmails Emails of the contact
           @since ARP1.0
        */
        setContactEmails(contactEmails: ContactEmail[]): void;
        /**
           Returns all the phones of the Contact

           @return ContactPhone[]
           @since ARP1.0
        */
        getContactPhones(): ContactPhone[];
        /**
           Set the phones of the Contact

           @param contactPhones Phones of the contact
           @since ARP1.0
        */
        setContactPhones(contactPhones: ContactPhone[]): void;
        /**
           Returns all the social network info of the Contact

           @return ContactSocial[]
           @since ARP1.0
        */
        getContactSocials(): ContactSocial[];
        /**
           Set the social network info of the Contact

           @param contactSocials Social Networks of the contact
           @since ARP1.0
        */
        setContactSocials(contactSocials: ContactSocial[]): void;
        /**
           Returns the additional tags of the Contact

           @return ContactTag[]
           @since ARP1.0
        */
        getContactTags(): ContactTag[];
        /**
           Set the additional tags of the Contact

           @param contactTags Tags of the contact
           @since ARP1.0
        */
        setContactTags(contactTags: ContactTag[]): void;
        /**
           Returns all the websites of the Contact

           @return ContactWebsite[]
           @since ARP1.0
        */
        getContactWebsites(): ContactWebsite[];
        /**
           Set the websites of the Contact

           @param contactWebsites Websites of the contact
           @since ARP1.0
        */
        setContactWebsites(contactWebsites: ContactWebsite[]): void;
        /**
           Returns the personal info of the Contact

           @return ContactPersonalInfo of the Contact
           @since ARP1.0
        */
        getPersonalInfo(): ContactPersonalInfo;
        /**
           Set the personal info of the Contact

           @param personalInfo Personal Information
           @since ARP1.0
        */
        setPersonalInfo(personalInfo: ContactPersonalInfo): void;
        /**
           Returns the professional info of the Contact

           @return Array of personal info
           @since ARP1.0
        */
        getProfessionalInfo(): ContactProfessionalInfo;
        /**
           Set the professional info of the Contact

           @param professionalInfo Professional Information
           @since ARP1.0
        */
        setProfessionalInfo(professionalInfo: ContactProfessionalInfo): void;
    }
}
