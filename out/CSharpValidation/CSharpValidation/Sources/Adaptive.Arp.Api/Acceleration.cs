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
        Structure representing the data of a single acceleration reading.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public class Acceleration
     {

          /**
             Timestamp of the acceleration reading.
          */
          public long TimeStamp { get; set; }
          /**
             X-axis component of the acceleration.
          */
          public double X { get; set; }
          /**
             Y-axis component of the acceleration.
          */
          public double Y { get; set; }
          /**
             Z-axis component of the acceleration.
          */
          public double Z { get; set; }

          /**
             Constructor used by the implementation
          */
          public Acceleration()  {
          }

          /**
             Convenience constructor.

             @param X X Coordinate
             @param Y Y Coordinate
             @param Z Z Coordinate
             @author Carlos Lozano Diez
             @since ARP1.0
          */
          public Acceleration(double X, double Y, double Z, long TimeStamp) : base () {
               this.X = X;
               this.Y = Y;
               this.Z = Z;
               this.TimeStamp = TimeStamp;
          }

          /**
             Gets Timestamp of the acceleration reading.

             @return timeStamp Timestamp of the acceleration reading.
          */
          public long GetTimeStamp() {
               return this.TimeStamp;
          }

          /**
             Sets Timestamp of the acceleration reading.

             @param timeStamp Timestamp of the acceleration reading.
          */
          public void SetTimeStamp(long TimeStamp) {
               this.TimeStamp = TimeStamp;
          }

          /**
             Gets X-axis component of the acceleration.

             @return x X-axis component of the acceleration.
          */
          public double GetX() {
               return this.X;
          }

          /**
             Sets X-axis component of the acceleration.

             @param x X-axis component of the acceleration.
          */
          public void SetX(double X) {
               this.X = X;
          }

          /**
             Gets Y-axis component of the acceleration.

             @return y Y-axis component of the acceleration.
          */
          public double GetY() {
               return this.Y;
          }

          /**
             Sets Y-axis component of the acceleration.

             @param y Y-axis component of the acceleration.
          */
          public void SetY(double Y) {
               this.Y = Y;
          }

          /**
             Gets Z-axis component of the acceleration.

             @return z Z-axis component of the acceleration.
          */
          public double GetZ() {
               return this.Z;
          }

          /**
             Sets Z-axis component of the acceleration.

             @param z Z-axis component of the acceleration.
          */
          public void SetZ(double Z) {
               this.Z = Z;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
