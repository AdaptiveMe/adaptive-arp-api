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

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.0.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Structure representing the data of a single acceleration reading.

   @author Carlos Lozano Diez
   @since ARP1.0
   @version 1.0
*/
public class Acceleration : APIBean {

     /**
        Timestamp of the acceleration reading.
     */
     var timestamp : Int64?
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
        Default constructor

        @since ARP1.0
     */
     public override init() {
          super.init()
     }

     /**
        Constructor with fields

        @param x         X Coordinate
        @param y         Y Coordinate
        @param z         Z Coordinate
        @param timestamp Timestamp
        @since ARP1.0
     */
     public init(x: Double, y: Double, z: Double, timestamp: Int64) {
          super.init()
          self.x = x
          self.y = y
          self.z = z
          self.timestamp = timestamp
     }

     /**
        Timestamp Getter

        @return Timestamp
        @since ARP1.0
     */
     public func getTimestamp() -> Int64? {
          return self.timestamp
     }

     /**
        Timestamp Setter

        @param timestamp Timestamp
        @since ARP1.0
     */
     public func setTimestamp(timestamp: Int64) {
          self.timestamp = timestamp
     }

     /**
        X Coordinate Getter

        @return X-axis component of the acceleration.
        @since ARP1.0
     */
     public func getX() -> Double? {
          return self.x
     }

     /**
        X Coordinate Setter

        @param x X-axis component of the acceleration.
        @since ARP1.0
     */
     public func setX(x: Double) {
          self.x = x
     }

     /**
        Y Coordinate Getter

        @return Y-axis component of the acceleration.
        @since ARP1.0
     */
     public func getY() -> Double? {
          return self.y
     }

     /**
        Y Coordinate Setter

        @param y Y-axis component of the acceleration.
        @since ARP1.0
     */
     public func setY(y: Double) {
          self.y = y
     }

     /**
        Z Coordinate Getter

        @return Z-axis component of the acceleration.
        @since ARP1.0
     */
     public func getZ() -> Double? {
          return self.z
     }

     /**
        Z Coordinate Setter

        @param z Z Coordinate
        @since ARP1.0
     */
     public func setZ(z: Double) {
          self.z = z
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
