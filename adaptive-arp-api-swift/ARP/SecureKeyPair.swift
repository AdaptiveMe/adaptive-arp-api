//
//  Auto-generated from: me.adaptive.arp.api.SecureKeyPair
//
//  SecureKeyPair.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class SecureKeyPair {

     /**
      * Field Declarations
      */
     var key : String
     var value : String

     /**
      * Initialization
      */
     public init() {
          self.key = ""
          self.value = ""
     }


     /**
      * Function Declarations
      */
     public func getValue() -> String {
          return self.value
     }

     public func getKey() -> String {
          return self.key
     }

     public func setValue(value : String) {
          self.value = value
     }

     public func setKey(key : String) {
          self.key = key
     }


}
