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
       Structure representing the data of a single acceleration reading.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    class Acceleration extends APIBean {
        /**
           Timestamp of the acceleration reading.
        */
        timestamp: number;
        /**
           X-axis component of the acceleration.
        */
        x: number;
        /**
           Y-axis component of the acceleration.
        */
        y: number;
        /**
           Z-axis component of the acceleration.
        */
        z: number;
        /**
           Constructor with fields

           @param x         X Coordinate
           @param y         Y Coordinate
           @param z         Z Coordinate
           @param timestamp Timestamp
           @since ARP1.0
        */
        constructor(x: number, y: number, z: number, timestamp: number);
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
           X Coordinate Getter

           @return X-axis component of the acceleration.
           @since ARP1.0
        */
        getX(): number;
        /**
           X Coordinate Setter

           @param x X-axis component of the acceleration.
           @since ARP1.0
        */
        setX(x: number): void;
        /**
           Y Coordinate Getter

           @return Y-axis component of the acceleration.
           @since ARP1.0
        */
        getY(): number;
        /**
           Y Coordinate Setter

           @param y Y-axis component of the acceleration.
           @since ARP1.0
        */
        setY(y: number): void;
        /**
           Z Coordinate Getter

           @return Z-axis component of the acceleration.
           @since ARP1.0
        */
        getZ(): number;
        /**
           Z Coordinate Setter

           @param z Z Coordinate
           @since ARP1.0
        */
        setZ(z: number): void;
    }
}
