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

package me.adaptive.arp.api;

/**
   Structure representing the data of a single acceleration reading.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Acceleration {

     /**
        Timestamp of the acceleration reading.
     */
     private long timeStamp;
     /**
        X-axis component of the acceleration.
     */
     private double x;
     /**
        Y-axis component of the acceleration.
     */
     private double y;
     /**
        Z-axis component of the acceleration.
     */
     private double z;

     /**
        Constructor used by the implementation
     */
     public Acceleration() {
     }

     /**
        Convenience constructor.

        @param x X Coordinate
        @param y Y Coordinate
        @param z Z Coordinate
        @author Carlos Lozano Diez
        @since ARP1.0
     */
     public Acceleration(double x, double y, double z, long timeStamp) {
          this();
          this.x = x;
          this.y = y;
          this.z = z;
          this.timeStamp = timeStamp;
     }
     /**
        Gets Timestamp of the acceleration reading.

        @return timeStamp Timestamp of the acceleration reading.
     */
     public long getTimeStamp() {
          return this.timeStamp;
     }

     /**
        Sets Timestamp of the acceleration reading.

        @param timeStamp Timestamp of the acceleration reading.
     */
     public void setTimeStamp(long timeStamp) {
          this.timeStamp = timeStamp;
     }

     /**
        Gets X-axis component of the acceleration.

        @return x X-axis component of the acceleration.
     */
     public double getX() {
          return this.x;
     }

     /**
        Sets X-axis component of the acceleration.

        @param x X-axis component of the acceleration.
     */
     public void setX(double x) {
          this.x = x;
     }

     /**
        Gets Y-axis component of the acceleration.

        @return y Y-axis component of the acceleration.
     */
     public double getY() {
          return this.y;
     }

     /**
        Sets Y-axis component of the acceleration.

        @param y Y-axis component of the acceleration.
     */
     public void setY(double y) {
          this.y = y;
     }

     /**
        Gets Z-axis component of the acceleration.

        @return z Z-axis component of the acceleration.
     */
     public double getZ() {
          return this.z;
     }

     /**
        Sets Z-axis component of the acceleration.

        @param z Z-axis component of the acceleration.
     */
     public void setZ(double z) {
          this.z = z;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
