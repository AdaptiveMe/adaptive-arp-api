//
//  Auto-generated from: me.adaptive.arp.api.Geolocation
//
//  Geolocation.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class Geolocation {

     /**
      * Field Declarations
      */
     var latitude : Double
     var longitude : Double
     var altitude : Double
     var xDoP : Float
     var yDoP : Float

     /**
      * Initialization
      */
     public init() {
          self.latitude = 0.0
          self.longitude = 0.0
          self.altitude = 0.0
          self.xDoP = 0.0
          self.yDoP = 0.0
     }

     public convenience init(latitude : Double, longitude : Double, altitude : Double, xDoP : Float, yDoP : Float) {
          self.init()
          self.latitude = latitude
          self.longitude = longitude
          self.altitude = altitude
          self.xDoP = xDoP
          self.yDoP = yDoP
     }


     /**
      * Function Declarations
      */
     public func getYDoP() -> Float {
          return self.yDoP
     }

     public func getXDoP() -> Float {
          return self.xDoP
     }

     public func getLatitude() -> Double {
          return self.latitude
     }

     public func setLatitude(latitude : Double) {
          self.latitude = latitude
     }

     public func getLongitude() -> Double {
          return self.longitude
     }

     public func setLongitude(longitude : Double) {
          self.longitude = longitude
     }

     public func getAltitude() -> Double {
          return self.altitude
     }

     public func setAltitude(altitude : Double) {
          self.altitude = altitude
     }


}
