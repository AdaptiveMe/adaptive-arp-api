//
//  Auto-generated from: me.adaptive.arp.api.ContactUid
//
//  ContactUid.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

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
     public func setContactId(contactId : String) {
          self.contactId = contactId
     }

     public func getContactId() -> String {
          return self.contactId
     }


}
