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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="ContactAddress.ts"/>
///<reference path="ContactEmail.ts"/>
///<reference path="ContactPersonalInfo.ts"/>
///<reference path="ContactPhone.ts"/>
///<reference path="ContactProfessionalInfo.ts"/>
///<reference path="ContactSocial.ts"/>
///<reference path="ContactTag.ts"/>
///<reference path="ContactUid.ts"/>
///<reference path="ContactWebsite.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing the data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Contact = (function (_super) {
        __extends(Contact, _super);
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
        function Contact(contactId, personalInfo, professionalInfo, contactAddresses, contactPhones, contactEmails, contactWebsites, contactSocials, contactTags) {
            _super.call(this, contactId);
            this.personalInfo = personalInfo;
            this.professionalInfo = professionalInfo;
            this.contactAddresses = contactAddresses;
            this.contactPhones = contactPhones;
            this.contactEmails = contactEmails;
            this.contactWebsites = contactWebsites;
            this.contactSocials = contactSocials;
            this.contactTags = contactTags;
        }
        /**
           Returns all the addresses of the Contact

           @return ContactAddress[]
           @since ARP1.0
        */
        Contact.prototype.getContactAddresses = function () {
            return this.contactAddresses;
        };
        /**
           Set the addresses of the Contact

           @param contactAddresses Addresses of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactAddresses = function (contactAddresses) {
            this.contactAddresses = contactAddresses;
        };
        /**
           Returns all the emails of the Contact

           @return ContactEmail[]
           @since ARP1.0
        */
        Contact.prototype.getContactEmails = function () {
            return this.contactEmails;
        };
        /**
           Set the emails of the Contact

           @param contactEmails Emails of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactEmails = function (contactEmails) {
            this.contactEmails = contactEmails;
        };
        /**
           Returns all the phones of the Contact

           @return ContactPhone[]
           @since ARP1.0
        */
        Contact.prototype.getContactPhones = function () {
            return this.contactPhones;
        };
        /**
           Set the phones of the Contact

           @param contactPhones Phones of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactPhones = function (contactPhones) {
            this.contactPhones = contactPhones;
        };
        /**
           Returns all the social network info of the Contact

           @return ContactSocial[]
           @since ARP1.0
        */
        Contact.prototype.getContactSocials = function () {
            return this.contactSocials;
        };
        /**
           Set the social network info of the Contact

           @param contactSocials Social Networks of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactSocials = function (contactSocials) {
            this.contactSocials = contactSocials;
        };
        /**
           Returns the additional tags of the Contact

           @return ContactTag[]
           @since ARP1.0
        */
        Contact.prototype.getContactTags = function () {
            return this.contactTags;
        };
        /**
           Set the additional tags of the Contact

           @param contactTags Tags of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactTags = function (contactTags) {
            this.contactTags = contactTags;
        };
        /**
           Returns all the websites of the Contact

           @return ContactWebsite[]
           @since ARP1.0
        */
        Contact.prototype.getContactWebsites = function () {
            return this.contactWebsites;
        };
        /**
           Set the websites of the Contact

           @param contactWebsites Websites of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactWebsites = function (contactWebsites) {
            this.contactWebsites = contactWebsites;
        };
        /**
           Returns the personal info of the Contact

           @return ContactPersonalInfo of the Contact
           @since ARP1.0
        */
        Contact.prototype.getPersonalInfo = function () {
            return this.personalInfo;
        };
        /**
           Set the personal info of the Contact

           @param personalInfo Personal Information
           @since ARP1.0
        */
        Contact.prototype.setPersonalInfo = function (personalInfo) {
            this.personalInfo = personalInfo;
        };
        /**
           Returns the professional info of the Contact

           @return Array of personal info
           @since ARP1.0
        */
        Contact.prototype.getProfessionalInfo = function () {
            return this.professionalInfo;
        };
        /**
           Set the professional info of the Contact

           @param professionalInfo Professional Information
           @since ARP1.0
        */
        Contact.prototype.setProfessionalInfo = function (professionalInfo) {
            this.professionalInfo = professionalInfo;
        };
        return Contact;
    })(Adaptive.ContactUid);
    Adaptive.Contact = Contact;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Contact.js.map