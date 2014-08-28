//
//  Auto-generated from: me.adaptive.arp.api.Acceleration
//
//  Acceleration.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class Acceleration {

     /**
      * Field Declarations
      */
     var x : Double
     var y : Double
     var z : Double
     var status : Status?
     var timeStamp : Int64

     /**
      * Enumeration Declarations
      */
     public enum Status {
          case Success, Unauthorized, NeedsCalibration, Stale, Unavailable
     }

     /**
      * Initialization
      */
     public init() {
          self.x = 0.0
          self.y = 0.0
          self.z = 0.0
          self.status = nil
          self.timeStamp = 0
     }

     public convenience init(status : Status) {
          self.init()
          self.status = status
     }

     public convenience init(x : Double, y : Double, z : Double) {
          self.init()
          self.x = x
          self.y = y
          self.z = z
     }


     /**
      * Function Declarations
      */
     public func getZ() -> Double {
          return self.z
     }

     public func getY() -> Double {
          return self.y
     }

     public func getX() -> Double {
          return self.x
     }

     public func getStatus() -> Status {
          return self.status!
     }


}
