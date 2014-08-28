//
//  Auto-generated from: me.adaptive.arp.api.DeviceInfo
//
//  DeviceInfo.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class DeviceInfo {

     /**
      * Field Declarations
      */
     var name : String
     var model : String
     var vendor : String
     var uuid : String

     /**
      * Initialization
      */
     public init() {
          self.name = ""
          self.model = ""
          self.vendor = ""
          self.uuid = ""
     }

     public convenience init(name : String, model : String, vendor : String, uuid : String) {
          self.init()
          self.name = name
          self.model = model
          self.vendor = vendor
          self.uuid = uuid
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

     public func getUuid() -> String {
          return self.uuid
     }

     public func getModel() -> String {
          return self.model
     }


}
