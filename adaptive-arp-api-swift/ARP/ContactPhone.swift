//
//  Auto-generated from: me.adaptive.arp.api.ContactPhone
//
//  ContactPhone.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

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
     public func getPhone() -> String {
          return self.phone
     }

     public func setPhone(phone : String) {
          self.phone = phone
     }

     public func getPhoneType() -> PhoneType {
          return self.phoneType!
     }

     public func setPhoneType(phoneType : PhoneType) {
          self.phoneType = phoneType
     }


}
