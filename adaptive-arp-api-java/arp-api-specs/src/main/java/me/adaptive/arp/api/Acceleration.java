/*
 * =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
 *
 * (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * Original author:
 *
 *     * Carlos Lozano Diez
 *                 <http://github.com/carloslozano>
 *                 <http://twitter.com/adaptivecoder>
 *                 <mailto:carlos@adaptive.me>
 *
 * Contributors:
 *
 *     *
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

/**
 * Structure representing the data of a single acceleration reading.
 */
public class Acceleration {
    // X-axis component of the acceleration.
    double x;
    // Y-axis component of the acceleration.
    double y;
    // Z-axis component of the acceleration.
    double z;
    // Timestamp of the acceleration reading.
    long timeStamp;

    /**
     * @param x X Coordinate
     * @param y Y Coordinate
     * @param z Z Coordinate
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public Acceleration(double x, double y, double z, long timeStamp) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.timeStamp = timeStamp;
    }

    /**
     * Constructor used by the implementation
     */
    public Acceleration() {
    }

    /**
     * @return X-axis component of the acceleration.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    /**
     * @return Y-axis component of the acceleration.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    /**
     * @return Z-axis component of the acceleration.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public double getZ() {
        return z;
    }

    public void setZ(double z) {
        this.z = z;
    }

    public void setTimeStamp(long timeStamp) {
        this.timeStamp = timeStamp;
    }
}

