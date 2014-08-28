//
//  Auto-generated from: me.adaptive.arp.api.Button
//
//  Button.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

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
