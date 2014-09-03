//
//  Auto-generated from: me.adaptive.arp.api.Contact
//
//  Contact.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

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
     public func getContactAddresses() -> [ContactAddress] {
          return self.contactAddresses!
     }

     public func getContactEmails() -> [ContactEmail] {
          return self.contactEmails!
     }

     public func getContactPhones() -> [ContactPhone] {
          return self.contactPhones!
     }

     public func getContactSocials() -> [ContactSocial] {
          return self.contactSocials!
     }

     public func getContactTags() -> [ContactTag] {
          return self.contactTags!
     }

     public func getContactWebsites() -> [ContactWebsite] {
          return self.contactWebsites!
     }

     public func getPersonalInfo() -> ContactPersonalInfo {
          return self.personalInfo!
     }

     public func getProfessionalInfo() -> ContactProfessionalInfo {
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
