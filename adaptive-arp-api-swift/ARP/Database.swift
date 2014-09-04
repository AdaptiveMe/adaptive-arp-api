//
//  Auto-generated from: me.adaptive.arp.api.Database
//
//  Database.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class Database {

     /**
      * Field Declarations
      */
     var compress : Bool
     var name : String

     /**
      * Initialization
      */
     public convenience init(name : String, compress : Bool) {
          self.init()
          self.name = name
          self.compress = compress
     }

     public convenience init(name : String) {
          self.init()
          self.name = name
     }

     public init() {
          self.name = ""
          self.compress = false
     }


     /**
      * Function Declarations
      */
     public func getName() -> String {
          return self.name
     }

     public func isCompress() -> Bool {
          return self.compress
     }

     public func setCompress(compress : Bool) {
          self.compress = compress
     }

     public func setName(name : String) {
          self.name = name
     }


}
