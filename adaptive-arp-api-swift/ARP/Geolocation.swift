/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.Geolocation -> Geolocation.swift
*
* (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
* the License. You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
* specific language governing permissions and limitations under the License.
*
* Original author:
*
*     * Carlos Lozano Diez
*                 <http://github.com/carloslozano>
*                 <http://twitter.com/adaptivecoder>
*                 <mailto:carlos@adaptive.me>
*
* Contributors:
*
*     *
*
* =====================================================================================================================
*/

import Foundation

public class Geolocation : NSObject  {

     /**
      * Field Declarations
      */
     var altitude : Double
     var latitude : Double
     var longitude : Double
     var xDoP : Float
     var yDoP : Float

     /**
      * Initialization
      */
     public override init() {
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
     public func getAltitude() -> Double {
          return self.altitude
     }

     public func getLatitude() -> Double {
          return self.latitude
     }

     public func getLongitude() -> Double {
          return self.longitude
     }

     public func getXDoP() -> Float {
          return self.xDoP
     }

     public func getYDoP() -> Float {
          return self.yDoP
     }

     public func setAltitude(altitude : Double) {
          self.altitude = altitude
     }

     public func setLatitude(latitude : Double) {
          self.latitude = latitude
     }

     public func setLongitude(longitude : Double) {
          self.longitude = longitude
     }


}
