//
//  Auto-generated from: me.adaptive.arp.api.SecureKeyPair
//
//  SecureKeyPair.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class SecureKeyPair {

     /**
      * Field Declarations
      */
     var key : String
     var value : String

     /**
      * Initialization
      */
     public init() {
          self.key = ""
          self.value = ""
     }


     /**
      * Function Declarations
      */
     public func getKey() -> String {
          return self.key
     }

     public func getValue() -> String {
          return self.value
     }

     public func setKey(key : String) {
          self.key = key
     }

     public func setValue(value : String) {
          self.value = value
     }


}
