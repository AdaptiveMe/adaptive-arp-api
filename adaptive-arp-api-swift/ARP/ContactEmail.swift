//
//  Auto-generated from: me.adaptive.arp.api.ContactEmail
//
//  ContactEmail.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class ContactEmail {

     /**
      * Field Declarations
      */
     var type : EmailType?
     var primary : Bool
     var email : String

     /**
      * Enumeration Declarations
      */
     public enum EmailType {
          case Personal, Work, Other
     }

     /**
      * Initialization
      */
     public convenience init(type : EmailType, primary : Bool, email : String) {
          self.init()
          self.type = type
          self.primary = primary
          self.email = email
     }

     public init() {
          self.type = nil
          self.primary = false
          self.email = ""
     }


     /**
      * Function Declarations
      */
     public func getType() -> EmailType {
          return self.type!
     }

     public func setEmail(email : String) {
          self.email = email
     }

     public func getEmail() -> String {
          return self.email
     }

     public func isPrimary() -> Bool {
          return self.primary
     }

     public func setPrimary(primary : Bool) {
          self.primary = primary
     }

     public func setType(type : EmailType) {
          self.type = type
     }


}
