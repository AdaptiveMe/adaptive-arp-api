//
//  Auto-generated from: me.adaptive.arp.api.Row
//
//  Row.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class Row {

     /**
      * Field Declarations
      */
     var values : [AnyObject]?

     /**
      * Initialization
      */
     public init() {
          self.values = nil
     }

     public convenience init(values : [AnyObject]) {
          self.init()
          self.values = values
     }


     /**
      * Function Declarations
      */
     public func getValues() -> [AnyObject] {
          return self.values!
     }

     public func setValues(values : [AnyObject]) {
          self.values = values
     }


}
