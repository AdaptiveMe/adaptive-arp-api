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

module Adaptive {

     /**
        Structure representing the data a single geolocation reading.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Geolocation {

          /**
             The current device altitude (or Z coordinate). Measured in meters.
          */
          altitude : number;
          /**
             The Y coordinate (or latitude). Measured in degrees.
          */
          latitude : number;
          /**
             The X coordinate (or longitude). Measured in degrees.
          */
          longitude : number;
          /**
             Dilution of precision on the X measurement. Measured in meters.
          */
          xDoP : number;
          /**
             Dilution of precision on the Y measurement. Measured in meters.
          */
          yDoP : number;
          /**
             Constructor used by the implementation

             @param latitude
             @param longitude
             @param altitude
             @param xDoP
             @param yDoP
             @since ARP1.0
          */
          constructor(latitude: number, longitude: number, altitude: number, xDoP: number, yDoP: number) {
               this.latitude = latitude;
               this.longitude = longitude;
               this.altitude = altitude;
               this.xDoP = xDoP;
               this.yDoP = yDoP;
          }

          /**
             Returns altitude in meters

             @return altitude
             @since ARP1.0
          */
          getAltitude() : number {
               return this.altitude;
          }

          /**
             Set altitude in meters

             @param altitude
             @since ARP1.0
          */
          setAltitude(altitude: number) {
               this.altitude = altitude;
          }

          /**
             Returns the latitude in degrees

             @return latitude
             @since ARP1.0
          */
          getLatitude() : number {
               return this.latitude;
          }

          /**
             Set the latitude in degrees

             @param latitude
             @since ARP1.0
          */
          setLatitude(latitude: number) {
               this.latitude = latitude;
          }

          /**
             Returns the longitude in degrees

             @return longitude
             @since ARP1.0
          */
          getLongitude() : number {
               return this.longitude;
          }

          /**
             Returns the latitude in degrees

             @param longitude
             @since ARP1.0
          */
          setLongitude(longitude: number) {
               this.longitude = longitude;
          }

          /**
             Returns the Dilution of Position in the X axis (longitude)

             @return xDoP
             @since ARP1.0
          */
          getXDoP() : number {
               return this.xDoP;
          }

          /**
             Sets Dilution of precision on the X measurement. Measured in meters.

             @param xDoP Dilution of precision on the X measurement. Measured in meters.
          */
          setXDoP(xDoP: number) {
               this.xDoP = xDoP;
          }

          /**
             Returns the Dilution of Position in the Y axis (latitude)

             @return yDoP
             @since ARP1.0
          */
          getYDoP() : number {
               return this.yDoP;
          }

          /**
             Sets Dilution of precision on the Y measurement. Measured in meters.

             @param yDoP Dilution of precision on the Y measurement. Measured in meters.
          */
          setYDoP(yDoP: number) {
               this.yDoP = yDoP;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
