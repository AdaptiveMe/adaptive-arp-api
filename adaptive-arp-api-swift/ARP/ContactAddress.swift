//
//  Auto-generated from: me.adaptive.arp.api.ContactAddress
//
//  ContactAddress.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class ContactAddress {

     /**
      * Field Declarations
      */
     var address : String
     var type : AddressType?

     /**
      * Enumeration Declarations
      */
     public enum AddressType {
          case Home, Work, Other
     }

     /**
      * Initialization
      */
     public convenience init(address : String, type : AddressType) {
          self.init()
          self.address = address
          self.type = type
     }

     public init() {
          self.address = ""
          self.type = nil
     }


     /**
      * Function Declarations
      */
     public func getAddress() -> String {
          return self.address
     }

     public func getType() -> AddressType {
          return self.type!
     }

     public func setType(type : AddressType) {
          self.type = type
     }

     public func setAddress(address : String) {
          self.address = address
     }


}
