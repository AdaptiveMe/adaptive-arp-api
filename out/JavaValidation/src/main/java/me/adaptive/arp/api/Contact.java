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

package me.adaptive.arp.api;

/**
   Structure representing the data elements of a contact.

   @author Francisco Javier Martin Bueno
   @since ARP1.0
   @version 1.0
*/
public class Contact extends ContactUid {

     /**
        The adresses from the contact
     */
     private ContactAddress[] contactAddresses;
     /**
        The emails from the contact
     */
     private ContactEmail[] contactEmails;
     /**
        The phones from the contact
     */
     private ContactPhone[] contactPhones;
     /**
        The social network info from the contact
     */
     private ContactSocial[] contactSocials;
     /**
        The aditional tags from the contact
     */
     private ContactTag[] contactTags;
     /**
        The websites from the contact
     */
     private ContactWebsite[] contactWebsites;
     /**
        The personal info from the contact
     */
     private ContactPersonalInfo personalInfo;
     /**
        The professional info from the contact
     */
     private ContactProfessionalInfo professionalInfo;

     /**
        Default Constructor

        @since ARP1.0
     */
     public Contact() {
     }

     /**
        Constructor used by implementation to set the Contact.

        @param contactId of the Contact
        @since ARP1.0
     */
     public Contact(String contactId) {
          super(contactId);
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
        @since ARP1.0
     */
     public Contact(String contactId, ContactPersonalInfo personalInfo, ContactProfessionalInfo professionalInfo, ContactAddress[] contactAddresses, ContactPhone[] contactPhones, ContactEmail[] contactEmails, ContactWebsite[] contactWebsites, ContactSocial[] contactSocials, ContactTag[] contactTags) {
          super(contactId);
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
     public ContactAddress[] getContactAddresses() {
          return this.contactAddresses;
     }

     /**
        Set the addresses of the Contact

        @param contactAddresses Addresses of the contact
        @since ARP1.0
     */
     public void setContactAddresses(ContactAddress[] contactAddresses) {
          this.contactAddresses = contactAddresses;
     }

     /**
        Returns all the emails of the Contact

        @return ContactEmail[]
        @since ARP1.0
     */
     public ContactEmail[] getContactEmails() {
          return this.contactEmails;
     }

     /**
        Set the emails of the Contact

        @param contactEmails Emails of the contact
        @since ARP1.0
     */
     public void setContactEmails(ContactEmail[] contactEmails) {
          this.contactEmails = contactEmails;
     }

     /**
        Returns all the phones of the Contact

        @return ContactPhone[]
        @since ARP1.0
     */
     public ContactPhone[] getContactPhones() {
          return this.contactPhones;
     }

     /**
        Set the phones of the Contact

        @param contactPhones Phones of the contact
        @since ARP1.0
     */
     public void setContactPhones(ContactPhone[] contactPhones) {
          this.contactPhones = contactPhones;
     }

     /**
        Returns all the social network info of the Contact

        @return ContactSocial[]
        @since ARP1.0
     */
     public ContactSocial[] getContactSocials() {
          return this.contactSocials;
     }

     /**
        Set the social network info of the Contact

        @param contactSocials Social Networks of the contact
        @since ARP1.0
     */
     public void setContactSocials(ContactSocial[] contactSocials) {
          this.contactSocials = contactSocials;
     }

     /**
        Returns the additional tags of the Contact

        @return ContactTag[]
        @since ARP1.0
     */
     public ContactTag[] getContactTags() {
          return this.contactTags;
     }

     /**
        Set the additional tags of the Contact

        @param contactTags Tags of the contact
        @since ARP1.0
     */
     public void setContactTags(ContactTag[] contactTags) {
          this.contactTags = contactTags;
     }

     /**
        Returns all the websites of the Contact

        @return ContactWebsite[]
        @since ARP1.0
     */
     public ContactWebsite[] getContactWebsites() {
          return this.contactWebsites;
     }

     /**
        Set the websites of the Contact

        @param contactWebsites Websites of the contact
        @since ARP1.0
     */
     public void setContactWebsites(ContactWebsite[] contactWebsites) {
          this.contactWebsites = contactWebsites;
     }

     /**
        Returns the personal info of the Contact

        @return ContactPersonalInfo of the Contact
        @since ARP1.0
     */
     public ContactPersonalInfo getPersonalInfo() {
          return this.personalInfo;
     }

     /**
        Set the personal info of the Contact

        @param personalInfo Personal Information
        @since ARP1.0
     */
     public void setPersonalInfo(ContactPersonalInfo personalInfo) {
          this.personalInfo = personalInfo;
     }

     /**
        Returns the professional info of the Contact

        @return Array of personal info
        @since ARP1.0
     */
     public ContactProfessionalInfo getProfessionalInfo() {
          return this.professionalInfo;
     }

     /**
        Set the professional info of the Contact

        @param professionalInfo Professional Information
        @since ARP1.0
     */
     public void setProfessionalInfo(ContactProfessionalInfo professionalInfo) {
          this.professionalInfo = professionalInfo;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
