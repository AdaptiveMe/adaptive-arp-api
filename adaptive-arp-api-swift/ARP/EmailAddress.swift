//
//  Auto-generated from: me.adaptive.arp.api.EmailAddress
//
//  EmailAddress.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class EmailAddress {

     /**
      * Field Declarations
      */
     var address : String

     /**
      * Initialization
      */
     public init() {
          self.address = ""
     }

     public convenience init(address : String) {
          self.init()
          self.address = address
     }


     /**
      * Function Declarations
      */
     public func getAddress() -> String {
          return self.address
     }

     public func setAddress(address : String) {
          self.address = address
     }


}
