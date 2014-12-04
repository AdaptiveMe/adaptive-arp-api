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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing the data a single geolocation reading.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public class Geolocation
     {

          /**
             The current device altitude (or Z coordinate). Measured in meters.
          */
          public double Altitude { get; set; }
          /**
             The Y coordinate (or latitude). Measured in degrees.
          */
          public double Latitude { get; set; }
          /**
             The X coordinate (or longitude). Measured in degrees.
          */
          public double Longitude { get; set; }
          /**
             Dilution of precision on the X measurement. Measured in meters.
          */
          public float XDoP { get; set; }
          /**
             Dilution of precision on the Y measurement. Measured in meters.
          */
          public float YDoP { get; set; }

          /**
             Constructor used by the implementation
          */
          public Geolocation()  {
          }

          /**
             Constructor used by the implementation

             @param Latitude
             @param Longitude
             @param Altitude
             @param XDoP
             @param YDoP
             @since ARP1.0
          */
          public Geolocation(double Latitude, double Longitude, double Altitude, float XDoP, float YDoP) : base () {
               this.Latitude = Latitude;
               this.Longitude = Longitude;
               this.Altitude = Altitude;
               this.XDoP = XDoP;
               this.YDoP = YDoP;
          }

          /**
             Returns altitude in meters

             @return altitude
             @since ARP1.0
          */
          public double GetAltitude() {
               return this.Altitude;
          }

          /**
             Set altitude in meters

             @param altitude
             @since ARP1.0
          */
          public void SetAltitude(double Altitude) {
               this.Altitude = Altitude;
          }

          /**
             Returns the latitude in degrees

             @return latitude
             @since ARP1.0
          */
          public double GetLatitude() {
               return this.Latitude;
          }

          /**
             Set the latitude in degrees

             @param latitude
             @since ARP1.0
          */
          public void SetLatitude(double Latitude) {
               this.Latitude = Latitude;
          }

          /**
             Returns the longitude in degrees

             @return longitude
             @since ARP1.0
          */
          public double GetLongitude() {
               return this.Longitude;
          }

          /**
             Returns the latitude in degrees

             @param longitude
             @since ARP1.0
          */
          public void SetLongitude(double Longitude) {
               this.Longitude = Longitude;
          }

          /**
             Returns the Dilution of Position in the X axis (longitude)

             @return xDoP
             @since ARP1.0
          */
          public float GetXDoP() {
               return this.XDoP;
          }

          /**
             Sets Dilution of precision on the X measurement. Measured in meters.

             @param xDoP Dilution of precision on the X measurement. Measured in meters.
          */
          public void SetXDoP(float XDoP) {
               this.XDoP = XDoP;
          }

          /**
             Returns the Dilution of Position in the Y axis (latitude)

             @return yDoP
             @since ARP1.0
          */
          public float GetYDoP() {
               return this.YDoP;
          }

          /**
             Sets Dilution of precision on the Y measurement. Measured in meters.

             @param yDoP Dilution of precision on the Y measurement. Measured in meters.
          */
          public void SetYDoP(float YDoP) {
               this.YDoP = YDoP;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
