//
//  Auto-generated from: me.adaptive.arp.api.Column
//
//  Column.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

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
