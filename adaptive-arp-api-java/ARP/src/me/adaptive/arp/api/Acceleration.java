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
 * @author Carlos Lozano Diez
 * @see me.adaptive.arp.api.AccelerationListener
 * @see me.adaptive.arp.api.IAccelerometer
 * @since ARP1.0
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

    public Acceleration(double x, double y, double z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.status = IAccelerometer.Status.Success;
        this.timeStamp = System.currentTimeMillis();
    }

    public Acceleration(IAccelerometer.Status status) {
        this.status = status;
        this.timeStamp = System.currentTimeMillis();
    }

    /**
     * @return X-axis component of the acceleration.
     */
    public double getX() {
        return x;
    }

    /**
     * @return Y-axis component of the acceleration.
     */
    public double getY() {
        return y;
    }

    /**
     * @return Z-axis component of the acceleration.
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
     */
    public IAccelerometer.Status getStatus() {
        return status;
    }
}

