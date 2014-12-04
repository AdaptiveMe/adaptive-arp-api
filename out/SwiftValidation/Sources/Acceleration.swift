/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Structure representing the data of a single acceleration reading.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Acceleration : NSObject {

     /**
        Timestamp of the acceleration reading.
     */
     var timeStamp : Int64?
     /**
        X-axis component of the acceleration.
     */
     var x : Double?
     /**
        Y-axis component of the acceleration.
     */
     var y : Double?
     /**
        Z-axis component of the acceleration.
     */
     var z : Double?

     /**
        Constructor used by the implementation
     */
     public override init() {
     }

     /**
        Convenience constructor.

        @param x X Coordinate
        @param y Y Coordinate
        @param z Z Coordinate
        @author Carlos Lozano Diez
        @since ARP1.0
     */
     public convenience init(x: Double, y: Double, z: Double, timeStamp: Int64) {
          self.init()
          self.x = x
          self.y = y
          self.z = z
          self.timeStamp = timeStamp
     }
     /**
        Gets Timestamp of the acceleration reading.

        @return timeStamp Timestamp of the acceleration reading.
     */
     public func getTimeStamp() -> Int64? {
          return self.timeStamp
     }

     /**
        Sets Timestamp of the acceleration reading.

        @param timeStamp Timestamp of the acceleration reading.
     */
     public func setTimeStamp(timeStamp: Int64) {
          self.timeStamp = timeStamp
     }

     /**
        Gets X-axis component of the acceleration.

        @return x X-axis component of the acceleration.
     */
     public func getX() -> Double? {
          return self.x
     }

     /**
        Sets X-axis component of the acceleration.

        @param x X-axis component of the acceleration.
     */
     public func setX(x: Double) {
          self.x = x
     }

     /**
        Gets Y-axis component of the acceleration.

        @return y Y-axis component of the acceleration.
     */
     public func getY() -> Double? {
          return self.y
     }

     /**
        Sets Y-axis component of the acceleration.

        @param y Y-axis component of the acceleration.
     */
     public func setY(y: Double) {
          self.y = y
     }

     /**
        Gets Z-axis component of the acceleration.

        @return z Z-axis component of the acceleration.
     */
     public func getZ() -> Double? {
          return self.z
     }

     /**
        Sets Z-axis component of the acceleration.

        @param z Z-axis component of the acceleration.
     */
     public func setZ(z: Double) {
          self.z = z
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
