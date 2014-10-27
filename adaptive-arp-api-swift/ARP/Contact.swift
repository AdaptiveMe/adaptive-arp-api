/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.Contact -> Contact.swift
*
* (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
* the License. You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
* specific language governing permissions and limitations under the License.
*
* Original author:
*
*     * Carlos Lozano Diez
*                 <http://github.com/carloslozano>
*                 <http://twitter.com/adaptivecoder>
*                 <mailto:carlos@adaptive.me>
*
* Contributors:
*
*     *
*
* =====================================================================================================================
*/

import Foundation

public class Contact : ContactUid {

     /**
      * Field Declarations
      */
     var contactAddresses : [ContactAddress]?
     var contactEmails : [ContactEmail]?
     var contactPhones : [ContactPhone]?
     var contactSocials : [ContactSocial]?
     var contactTags : [ContactTag]?
     var contactWebsites : [ContactWebsite]?
     var personalInfo : ContactPersonalInfo?
     var professionalInfo : ContactProfessionalInfo?
     public override var description : String {
          return "Contact{ contactAddresses="+contactAddresses!.description+",contactEmails="+contactEmails!.description+",contactPhones="+contactPhones!.description+",contactSocials="+contactSocials!.description+",contactTags="+contactTags!.description+",contactWebsites="+contactWebsites!.description+",personalInfo="+personalInfo!.description+",professionalInfo="+professionalInfo!.description+" }"
     }


     /**
      * Initialization
      */
     public convenience init(contactId : String) {
          self.init()
          self.contactId = contactId
     }

     public override init() {
          super.init()
          self.personalInfo = nil
          self.professionalInfo = nil
          self.contactAddresses = nil
          self.contactPhones = nil
          self.contactEmails = nil
          self.contactWebsites = nil
          self.contactSocials = nil
          self.contactTags = nil
     }


     /**
      * Function Declarations
      */
     public func getContactAddresses() -> [ContactAddress]? {
          return self.contactAddresses
     }

     public func getContactEmails() -> [ContactEmail]? {
          return self.contactEmails
     }

     public func getContactPhones() -> [ContactPhone]? {
          return self.contactPhones
     }

     public func getContactSocials() -> [ContactSocial]? {
          return self.contactSocials
     }

     public func getContactTags() -> [ContactTag]? {
          return self.contactTags
     }

     public func getContactWebsites() -> [ContactWebsite]? {
          return self.contactWebsites
     }

     public func getPersonalInfo() -> ContactPersonalInfo? {
          return self.personalInfo!
     }

     public func getProfessionalInfo() -> ContactProfessionalInfo? {
          return self.professionalInfo!
     }

     public func setContactAddresses(contactAddresses : [ContactAddress]) {
          self.contactAddresses = contactAddresses
     }

     public func setContactEmails(contactEmails : [ContactEmail]) {
          self.contactEmails = contactEmails
     }

     public func setContactPhones(contactPhones : [ContactPhone]) {
          self.contactPhones = contactPhones
     }

     public func setContactSocials(contactSocials : [ContactSocial]) {
          self.contactSocials = contactSocials
     }

     public func setContactTags(contactTags : [ContactTag]) {
          self.contactTags = contactTags
     }

     public func setContactWebsites(contactWebsites : [ContactWebsite]) {
          self.contactWebsites = contactWebsites
     }

     public func setPersonalInfo(personalInfo : ContactPersonalInfo) {
          self.personalInfo = personalInfo
     }

     public func setProfessionalInfo(professionalInfo : ContactProfessionalInfo) {
          self.professionalInfo = professionalInfo
     }


}
