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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing the data a single geolocation reading.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Geolocation = (function (_super) {
        __extends(Geolocation, _super);
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
        function Geolocation(latitude, longitude, altitude, xDoP, yDoP, timestamp) {
            _super.call(this);
            this.latitude = latitude;
            this.longitude = longitude;
            this.altitude = altitude;
            this.xDoP = xDoP;
            this.yDoP = yDoP;
            this.timestamp = timestamp;
        }
        /**
           Returns altitude in meters

           @return Altitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.getAltitude = function () {
            return this.altitude;
        };
        /**
           Set altitude in meters

           @param altitude Altitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setAltitude = function (altitude) {
            this.altitude = altitude;
        };
        /**
           Returns the latitude in degrees

           @return Latitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.getLatitude = function () {
            return this.latitude;
        };
        /**
           Set the latitude in degrees

           @param latitude Latitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setLatitude = function (latitude) {
            this.latitude = latitude;
        };
        /**
           Returns the longitude in degrees

           @return Longitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.getLongitude = function () {
            return this.longitude;
        };
        /**
           Returns the latitude in degrees

           @param longitude Longitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setLongitude = function (longitude) {
            this.longitude = longitude;
        };
        /**
           Timestamp Getter

           @return Timestamp
           @since ARP1.0
        */
        Geolocation.prototype.getTimestamp = function () {
            return this.timestamp;
        };
        /**
           Timestamp Setter

           @param timestamp Timestamp
           @since ARP1.0
        */
        Geolocation.prototype.setTimestamp = function (timestamp) {
            this.timestamp = timestamp;
        };
        /**
           Gets Dilution of precision on the X measurement. Measured in meters.

           @return xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        Geolocation.prototype.getXDoP = function () {
            return this.xDoP;
        };
        /**
           Sets Dilution of precision on the X measurement. Measured in meters.

           @param xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        Geolocation.prototype.setXDoP = function (xDoP) {
            this.xDoP = xDoP;
        };
        /**
           Gets Dilution of precision on the Y measurement. Measured in meters.

           @return yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        Geolocation.prototype.getYDoP = function () {
            return this.yDoP;
        };
        /**
           Sets Dilution of precision on the Y measurement. Measured in meters.

           @param yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        Geolocation.prototype.setYDoP = function (yDoP) {
            this.yDoP = yDoP;
        };
        return Geolocation;
    })(Adaptive.APIBean);
    Adaptive.Geolocation = Geolocation;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Geolocation.js.map