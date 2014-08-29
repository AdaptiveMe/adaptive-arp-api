//
//  Auto-generated from: me.adaptive.arp.api.Column
//
//  Column.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class Column {

     /**
      * Field Declarations
      */
     var name : String

     /**
      * Initialization
      */
     public convenience init(name : String) {
          self.init()
          self.name = name
     }

     public init() {
          self.name = ""
     }


     /**
      * Function Declarations
      */
     public func getName() -> String {
          return self.name
     }

     public func setName(name : String) {
          self.name = name
     }


}
