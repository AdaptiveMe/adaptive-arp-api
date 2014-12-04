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
        Structure representing the data of a single acceleration reading.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Acceleration {

          /**
             Timestamp of the acceleration reading.
          */
          timeStamp : number;
          /**
             X-axis component of the acceleration.
          */
          x : number;
          /**
             Y-axis component of the acceleration.
          */
          y : number;
          /**
             Z-axis component of the acceleration.
          */
          z : number;
          /**
             Constructor.

             @param x X Coordinate
             @param y Y Coordinate
             @param z Z Coordinate
             @author Carlos Lozano Diez
             @since ARP1.0
          */
          constructor(x: number, y: number, z: number, timeStamp: number) {
               this.x = x;
               this.y = y;
               this.z = z;
               this.timeStamp = timeStamp;
          }

          /**
             Gets Timestamp of the acceleration reading.

             @return timeStamp Timestamp of the acceleration reading.
          */
          getTimeStamp() : number {
               return this.timeStamp;
          }

          /**
             Sets Timestamp of the acceleration reading.

             @param timeStamp Timestamp of the acceleration reading.
          */
          setTimeStamp(timeStamp: number) {
               this.timeStamp = timeStamp;
          }

          /**
             Gets X-axis component of the acceleration.

             @return x X-axis component of the acceleration.
          */
          getX() : number {
               return this.x;
          }

          /**
             Sets X-axis component of the acceleration.

             @param x X-axis component of the acceleration.
          */
          setX(x: number) {
               this.x = x;
          }

          /**
             Gets Y-axis component of the acceleration.

             @return y Y-axis component of the acceleration.
          */
          getY() : number {
               return this.y;
          }

          /**
             Sets Y-axis component of the acceleration.

             @param y Y-axis component of the acceleration.
          */
          setY(y: number) {
               this.y = y;
          }

          /**
             Gets Z-axis component of the acceleration.

             @return z Z-axis component of the acceleration.
          */
          getZ() : number {
               return this.z;
          }

          /**
             Sets Z-axis component of the acceleration.

             @param z Z-axis component of the acceleration.
          */
          setZ(z: number) {
               this.z = z;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
