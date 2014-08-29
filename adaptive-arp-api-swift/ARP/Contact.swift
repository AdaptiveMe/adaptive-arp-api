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
     var personalInfo : ContactPersonalInfo?
     var professionalInfo : ContactProfessionalInfo?
     var contactAddresses : [ContactAddress]?
     var contactPhones : [ContactPhone]?
     var contactEmails : [ContactEmail]?
     var contactWebsites : [ContactWebsite]?
     var contactSocials : [ContactSocial]?
     var contactTags : [ContactTag]?

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
     public func getPersonalInfo() -> ContactPersonalInfo {
          return self.personalInfo!
     }

     public func setPersonalInfo(personalInfo : ContactPersonalInfo) {
          self.personalInfo = personalInfo
     }

     public func getProfessionalInfo() -> ContactProfessionalInfo {
          return self.professionalInfo!
     }

     public func setProfessionalInfo(professionalInfo : ContactProfessionalInfo) {
          self.professionalInfo = professionalInfo
     }

     public func getContactAddresses() -> [ContactAddress] {
          return self.contactAddresses!
     }

     public func setContactAddresses(contactAddresses : [ContactAddress]) {
          self.contactAddresses = contactAddresses
     }

     public func getContactPhones() -> [ContactPhone] {
          return self.contactPhones!
     }

     public func setContactPhones(contactPhones : [ContactPhone]) {
          self.contactPhones = contactPhones
     }

     public func getContactEmails() -> [ContactEmail] {
          return self.contactEmails!
     }

     public func setContactEmails(contactEmails : [ContactEmail]) {
          self.contactEmails = contactEmails
     }

     public func getContactWebsites() -> [ContactWebsite] {
          return self.contactWebsites!
     }

     public func setContactWebsites(contactWebsites : [ContactWebsite]) {
          self.contactWebsites = contactWebsites
     }

     public func getContactSocials() -> [ContactSocial] {
          return self.contactSocials!
     }

     public func setContactSocials(contactSocials : [ContactSocial]) {
          self.contactSocials = contactSocials
     }

     public func getContactTags() -> [ContactTag] {
          return self.contactTags!
     }

     public func setContactTags(contactTags : [ContactTag]) {
          self.contactTags = contactTags
     }


}
