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
    // Status of the acceleration reading.
    IAccelerometer.Status status;
    long timeStamp;

    /**
     * @param x X Coordinate
     * @param y Y Coordinate
     * @param z Z Coordinate
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public Acceleration(double x, double y, double z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.status = IAccelerometer.Status.Success;
        this.timeStamp = System.currentTimeMillis();
    }

    /**
     * @param status Status of the data.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public Acceleration(IAccelerometer.Status status) {
        this.status = status;
        this.timeStamp = System.currentTimeMillis();
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

    /**
     * @return Y-axis component of the acceleration.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public double getY() {
        return y;
    }

    /**
     * @return Z-axis component of the acceleration.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public double getZ() {
        return z;
    }

    /**
     * Status of this acceleration data. If status is Success, then the readings
     * are given. Any other status represents a fail condition that needs to be
     * managed.
     *
     * @return status of the orientation data.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public IAccelerometer.Status getStatus() {
        return status;
    }
}

