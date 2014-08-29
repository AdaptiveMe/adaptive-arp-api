//
//  Auto-generated from: me.adaptive.arp.api.OSInfo
//
//  OSInfo.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class OSInfo {

     /**
      * Field Declarations
      */
     var name : String
     var version : String
     var vendor : String

     /**
      * Initialization
      */
     public init() {
          self.name = ""
          self.version = ""
          self.vendor = ""
     }

     public convenience init(name : String, version : String, vendor : String) {
          self.init()
          self.name = name
          self.version = version
          self.vendor = vendor
     }


     /**
      * Function Declarations
      */
     public func getName() -> String {
          return self.name
     }

     public func getVersion() -> String {
          return self.version
     }

     public func getVendor() -> String {
          return self.vendor
     }


}
