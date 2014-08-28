//
//  Auto-generated from: me.adaptive.arp.api.ContactPhone
//
//  ContactPhone.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class ContactPhone {

     /**
      * Field Declarations
      */
     var phone : String
     var phoneType : PhoneType?

     /**
      * Enumeration Declarations
      */
     public enum PhoneType {
          case Mobile, Work, Home, Main, HomeFax, WorkFax, Other
     }

     /**
      * Initialization
      */
     public convenience init(phone : String, phoneType : PhoneType) {
          self.init()
          self.phone = phone
          self.phoneType = phoneType
     }

     public init() {
          self.phone = ""
          self.phoneType = nil
     }


     /**
      * Function Declarations
      */
     public func setPhone(phone : String) {
          self.phone = phone
     }

     public func getPhone() -> String {
          return self.phone
     }

     public func getPhoneType() -> PhoneType {
          return self.phoneType!
     }

     public func setPhoneType(phoneType : PhoneType) {
          self.phoneType = phoneType
     }


}
