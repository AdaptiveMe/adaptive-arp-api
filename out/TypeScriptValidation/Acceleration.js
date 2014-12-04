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
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing the data of a single acceleration reading.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Acceleration = (function () {
        /**
           Constructor.

           @param x X Coordinate
           @param y Y Coordinate
           @param z Z Coordinate
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        function Acceleration(x, y, z, timeStamp) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.timeStamp = timeStamp;
        }
        /**
           Gets Timestamp of the acceleration reading.

           @return timeStamp Timestamp of the acceleration reading.
        */
        Acceleration.prototype.getTimeStamp = function () {
            return this.timeStamp;
        };
        /**
           Sets Timestamp of the acceleration reading.

           @param timeStamp Timestamp of the acceleration reading.
        */
        Acceleration.prototype.setTimeStamp = function (timeStamp) {
            this.timeStamp = timeStamp;
        };
        /**
           Gets X-axis component of the acceleration.

           @return x X-axis component of the acceleration.
        */
        Acceleration.prototype.getX = function () {
            return this.x;
        };
        /**
           Sets X-axis component of the acceleration.

           @param x X-axis component of the acceleration.
        */
        Acceleration.prototype.setX = function (x) {
            this.x = x;
        };
        /**
           Gets Y-axis component of the acceleration.

           @return y Y-axis component of the acceleration.
        */
        Acceleration.prototype.getY = function () {
            return this.y;
        };
        /**
           Sets Y-axis component of the acceleration.

           @param y Y-axis component of the acceleration.
        */
        Acceleration.prototype.setY = function (y) {
            this.y = y;
        };
        /**
           Gets Z-axis component of the acceleration.

           @return z Z-axis component of the acceleration.
        */
        Acceleration.prototype.getZ = function () {
            return this.z;
        };
        /**
           Sets Z-axis component of the acceleration.

           @param z Z-axis component of the acceleration.
        */
        Acceleration.prototype.setZ = function (z) {
            this.z = z;
        };
        return Acceleration;
    })();
    Adaptive.Acceleration = Acceleration;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Acceleration.js.map