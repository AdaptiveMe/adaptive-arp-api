//
//  Auto-generated from: me.adaptive.arp.api.Button
//
//  Button.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class Button {

     /**
      * Field Declarations
      */
     var type : Button?

     /**
      * Enumeration Declarations
      */
     public enum Button {
          case HomeButton, BackButton, OptionButton
     }

     /**
      * Initialization
      */
     public convenience init(type : Button) {
          self.init()
          self.type = type
     }

     public init() {
          self.type = nil
     }


     /**
      * Function Declarations
      */
     public func getType() -> Button {
          return self.type!
     }


}
