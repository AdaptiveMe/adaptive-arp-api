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
   Structure representing the data a single geolocation reading.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Geolocation : NSObject {

     /**
        The current device altitude (or Z coordinate). Measured in meters.
     */
     var altitude : Double?
     /**
        The Y coordinate (or latitude). Measured in degrees.
     */
     var latitude : Double?
     /**
        The X coordinate (or longitude). Measured in degrees.
     */
     var longitude : Double?
     /**
        Dilution of precision on the X measurement. Measured in meters.
     */
     var xDoP : Float?
     /**
        Dilution of precision on the Y measurement. Measured in meters.
     */
     var yDoP : Float?

     /**
        Constructor used by the implementation
     */
     public override init() {
     }

     /**
        Constructor used by the implementation

        @param latitude
        @param longitude
        @param altitude
        @param xDoP
        @param yDoP
        @since ARP1.0
     */
     public convenience init(latitude: Double, longitude: Double, altitude: Double, xDoP: Float, yDoP: Float) {
          self.init()
          self.latitude = latitude
          self.longitude = longitude
          self.altitude = altitude
          self.xDoP = xDoP
          self.yDoP = yDoP
     }
     /**
        Returns altitude in meters

        @return altitude
        @since ARP1.0
     */
     public func getAltitude() -> Double? {
          return self.altitude
     }

     /**
        Set altitude in meters

        @param altitude
        @since ARP1.0
     */
     public func setAltitude(altitude: Double) {
          self.altitude = altitude
     }

     /**
        Returns the latitude in degrees

        @return latitude
        @since ARP1.0
     */
     public func getLatitude() -> Double? {
          return self.latitude
     }

     /**
        Set the latitude in degrees

        @param latitude
        @since ARP1.0
     */
     public func setLatitude(latitude: Double) {
          self.latitude = latitude
     }

     /**
        Returns the longitude in degrees

        @return longitude
        @since ARP1.0
     */
     public func getLongitude() -> Double? {
          return self.longitude
     }

     /**
        Returns the latitude in degrees

        @param longitude
        @since ARP1.0
     */
     public func setLongitude(longitude: Double) {
          self.longitude = longitude
     }

     /**
        Returns the Dilution of Position in the X axis (longitude)

        @return xDoP
        @since ARP1.0
     */
     public func getXDoP() -> Float? {
          return self.xDoP
     }

     /**
        Sets Dilution of precision on the X measurement. Measured in meters.

        @param xDoP Dilution of precision on the X measurement. Measured in meters.
     */
     public func setXDoP(xDoP: Float) {
          self.xDoP = xDoP
     }

     /**
        Returns the Dilution of Position in the Y axis (latitude)

        @return yDoP
        @since ARP1.0
     */
     public func getYDoP() -> Float? {
          return self.yDoP
     }

     /**
        Sets Dilution of precision on the Y measurement. Measured in meters.

        @param yDoP Dilution of precision on the Y measurement. Measured in meters.
     */
     public func setYDoP(yDoP: Float) {
          self.yDoP = yDoP
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
