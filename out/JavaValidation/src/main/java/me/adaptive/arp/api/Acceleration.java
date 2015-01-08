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

package me.adaptive.arp.api;

/**
   Structure representing the data of a single acceleration reading.

   @author Carlos Lozano Diez
   @since ARP1.0
   @version 1.0
*/
public class Acceleration extends APIBean {

     /**
        Timestamp of the acceleration reading.
     */
     private long timestamp;
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
        Default constructor

        @since ARP1.0
     */
     public Acceleration() {
     }

     /**
        Constructor with fields

        @param x         X Coordinate
        @param y         Y Coordinate
        @param z         Z Coordinate
        @param timestamp Timestamp
        @since ARP1.0
     */
     public Acceleration(double x, double y, double z, long timestamp) {
          super();
          this.x = x;
          this.y = y;
          this.z = z;
          this.timestamp = timestamp;
     }

     /**
        Timestamp Getter

        @return Timestamp
        @since ARP1.0
     */
     public long getTimestamp() {
          return this.timestamp;
     }

     /**
        Timestamp Setter

        @param timestamp Timestamp
        @since ARP1.0
     */
     public void setTimestamp(long timestamp) {
          this.timestamp = timestamp;
     }

     /**
        X Coordinate Getter

        @return X-axis component of the acceleration.
        @since ARP1.0
     */
     public double getX() {
          return this.x;
     }

     /**
        X Coordinate Setter

        @param x X-axis component of the acceleration.
        @since ARP1.0
     */
     public void setX(double x) {
          this.x = x;
     }

     /**
        Y Coordinate Getter

        @return Y-axis component of the acceleration.
        @since ARP1.0
     */
     public double getY() {
          return this.y;
     }

     /**
        Y Coordinate Setter

        @param y Y-axis component of the acceleration.
        @since ARP1.0
     */
     public void setY(double y) {
          this.y = y;
     }

     /**
        Z Coordinate Getter

        @return Z-axis component of the acceleration.
        @since ARP1.0
     */
     public double getZ() {
          return this.z;
     }

     /**
        Z Coordinate Setter

        @param z Z Coordinate
        @since ARP1.0
     */
     public void setZ(double z) {
          this.z = z;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
