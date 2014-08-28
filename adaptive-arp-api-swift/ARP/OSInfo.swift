//
//  Auto-generated from: me.adaptive.arp.api.OSInfo
//
//  OSInfo.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class OSInfo {

     /**
      * Field Declarations
      */
     var name : String
     var version : String
     var vendor : String

     /**
      * Initialization
      */
     public init() {
          self.name = ""
          self.version = ""
          self.vendor = ""
     }

     public convenience init(name : String, version : String, vendor : String) {
          self.init()
          self.name = name
          self.version = version
          self.vendor = vendor
     }


     /**
      * Function Declarations
      */
     public func getName() -> String {
          return self.name
     }

     public func getVendor() -> String {
          return self.vendor
     }

     public func getVersion() -> String {
          return self.version
     }


}
