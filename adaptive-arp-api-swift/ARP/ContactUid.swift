//
//  Auto-generated from: me.adaptive.arp.api.ContactUid
//
//  ContactUid.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class ContactUid {

     /**
      * Field Declarations
      */
     var contactId : String

     /**
      * Initialization
      */
     public convenience init(contactId : String) {
          self.init()
          self.contactId = contactId
     }

     public init() {
          self.contactId = ""
     }


     /**
      * Function Declarations
      */
     public func getContactId() -> String {
          return self.contactId
     }

     public func setContactId(contactId : String) {
          self.contactId = contactId
     }


}
