//
//  Auto-generated from: me.adaptive.arp.api.EmailAddress
//
//  EmailAddress.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:55 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class EmailAddress {

     /**
      * Field Declarations
      */
     var address : String

     /**
      * Initialization
      */
     public init() {
          self.address = ""
     }

     public convenience init(address : String) {
          self.init()
          self.address = address
     }


     /**
      * Function Declarations
      */
     public func getAddress() -> String {
          return self.address
     }

     public func setAddress(address : String) {
          self.address = address
     }


}
