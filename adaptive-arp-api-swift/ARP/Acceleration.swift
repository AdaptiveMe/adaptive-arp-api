//
//  Auto-generated from: me.adaptive.arp.api.Acceleration
//
//  Acceleration.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class Acceleration {

     /**
      * Field Declarations
      */
     var timeStamp : Int64
     var x : Double
     var y : Double
     var z : Double

     /**
      * Initialization
      */
     public convenience init(x : Double, y : Double, z : Double, timeStamp : Int64) {
          self.init()
          self.x = x
          self.y = y
          self.z = z
          self.timeStamp = timeStamp
     }

     public init() {
          self.x = 0.0
          self.y = 0.0
          self.z = 0.0
          self.timeStamp = 0
     }


     /**
      * Function Declarations
      */
     public func getX() -> Double {
          return self.x
     }

     public func getY() -> Double {
          return self.y
     }

     public func getZ() -> Double {
          return self.z
     }

     public func setTimeStamp(timeStamp : Int64) {
          self.timeStamp = timeStamp
     }

     public func setX(x : Double) {
          self.x = x
     }

     public func setY(y : Double) {
          self.y = y
     }

     public func setZ(z : Double) {
          self.z = z
     }


}
