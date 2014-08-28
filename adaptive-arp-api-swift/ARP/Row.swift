//
//  Auto-generated from: me.adaptive.arp.api.Row
//
//  Row.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

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
