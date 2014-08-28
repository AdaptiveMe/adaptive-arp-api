//
//  Auto-generated from: me.adaptive.arp.api.Header
//
//  Header.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:55 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class Header {

     /**
      * Field Declarations
      */
     var name : String
     var value : String

     /**
      * Initialization
      */
     public init() {
          self.name = ""
          self.value = ""
     }

     public convenience init(name : String, value : String) {
          self.init()
          self.name = name
          self.value = value
     }


     /**
      * Function Declarations
      */
     public func getName() -> String {
          return self.name
     }

     public func getValue() -> String {
          return self.value
     }

     public func setName(name : String) {
          self.name = name
     }

     public func setValue(value : String) {
          self.value = value
     }


}
