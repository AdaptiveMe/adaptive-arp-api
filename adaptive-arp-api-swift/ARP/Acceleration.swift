/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.Acceleration -> Acceleration.swift
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

public class Acceleration : NSObject  {

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

     public override init() {
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
