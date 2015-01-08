/// <reference path="APIBean.d.ts" />
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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       Structure representing the data a single geolocation reading.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class Geolocation extends APIBean {
        /**
           The current device altitude (or Z coordinate). Measured in meters.
        */
        altitude: number;
        /**
           The Y coordinate (or latitude). Measured in degrees.
        */
        latitude: number;
        /**
           The X coordinate (or longitude). Measured in degrees.
        */
        longitude: number;
        /**
           Timestamp of the geolocation reading.
        */
        timestamp: number;
        /**
           Dilution of precision on the X measurement. Measured in meters.
        */
        xDoP: number;
        /**
           Dilution of precision on the Y measurement. Measured in meters.
        */
        yDoP: number;
        /**
           Constructor with parameters

           @param latitude  Latitude of the measurement
           @param longitude Longitude of the measurement
           @param altitude  Altitude of the measurement
           @param xDoP      Dilution of precision on the X measurement
           @param yDoP      Dilution of precision on the Y measurement
           @param timestamp Timestamp of the measurement
           @since ARP1.0
        */
        constructor(latitude: number, longitude: number, altitude: number, xDoP: number, yDoP: number, timestamp: number);
        /**
           Returns altitude in meters

           @return Altitude of the measurement
           @since ARP1.0
        */
        getAltitude(): number;
        /**
           Set altitude in meters

           @param altitude Altitude of the measurement
           @since ARP1.0
        */
        setAltitude(altitude: number): void;
        /**
           Returns the latitude in degrees

           @return Latitude of the measurement
           @since ARP1.0
        */
        getLatitude(): number;
        /**
           Set the latitude in degrees

           @param latitude Latitude of the measurement
           @since ARP1.0
        */
        setLatitude(latitude: number): void;
        /**
           Returns the longitude in degrees

           @return Longitude of the measurement
           @since ARP1.0
        */
        getLongitude(): number;
        /**
           Returns the latitude in degrees

           @param longitude Longitude of the measurement
           @since ARP1.0
        */
        setLongitude(longitude: number): void;
        /**
           Timestamp Getter

           @return Timestamp
           @since ARP1.0
        */
        getTimestamp(): number;
        /**
           Timestamp Setter

           @param timestamp Timestamp
           @since ARP1.0
        */
        setTimestamp(timestamp: number): void;
        /**
           Gets Dilution of precision on the X measurement. Measured in meters.

           @return xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        getXDoP(): number;
        /**
           Sets Dilution of precision on the X measurement. Measured in meters.

           @param xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        setXDoP(xDoP: number): void;
        /**
           Gets Dilution of precision on the Y measurement. Measured in meters.

           @return yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        getYDoP(): number;
        /**
           Sets Dilution of precision on the Y measurement. Measured in meters.

           @param yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        setYDoP(yDoP: number): void;
    }
}
