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
 *     * Francisco Javier Martin Bueno
 *             <https://github.com/kechis>
 *             <mailto:kechis@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

/**
 * Structure representing the data a single geolocation reading.
 */
public class Geolocation {

    /**
     * The Y coordinate (or latitude). Measured in degrees.
     *
     * @since ARP1.0
     */
    private double latitude;
    /**
     * The X coordinate (or longitude). Measured in degrees.
     *
     * @since ARP1.0
     */
    private double longitude;
    /**
     * The current device altitude (or Z coordinate). Measured in meters.
     *
     * @since ARP1.0
     */
    private double altitude;
    /**
     * Dilution of precision on the X measurement. Measured in meters.
     *
     * @since ARP1.0
     */
    private float XDoP;
    /**
     * Dilution of precision on the Y measurement. Measured in meters.
     *
     * @since ARP1.0
     */
    private float YDoP;

    /**
     * Constructor used by the implementation
     *
     * @param latitude
     * @param longitude
     * @param altitude
     * @param XDoP
     * @param YDoP
     * @since ARP1.0
     */
    public Geolocation(double latitude, double longitude, double altitude, float XDoP, float YDoP) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.XDoP = XDoP;
        this.YDoP = YDoP;
    }

    /**
     * Returns the latitude in degrees
     *
     * @return latitude
     * @since ARP1.0
     */
    public double getLatitude() {
        return latitude;
    }

    /**
     * Set the latitude in degrees
     *
     * @param latitude
     * @since ARP1.0
     */
    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    /**
     * Returns the longitude in degrees
     *
     * @return longitude
     * @since ARP1.0
     */
    public double getLongitude() {
        return longitude;
    }

    /**
     * Returns the latitude in degrees
     *
     * @param longitude
     * @since ARP1.0
     */
    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    /**
     * Returns altitude in meters
     *
     * @return altitude
     * @since ARP1.0
     */
    public double getAltitude() {
        return altitude;
    }

    /**
     * Set altitude in meters
     *
     * @param altitude
     * @since ARP1.0
     */
    public void setAltitude(double altitude) {
        this.altitude = altitude;
    }

    /**
     * Returns the Dilution of Position in the X axis (longitude)
     *
     * @return XDoP
     * @since ARP1.0
     */
    public float getXDoP() {
        return XDoP;
    }

    /**
     * Returns the Dilution of Position in the Y axis (latitude)
     *
     * @return YDoP
     * @since ARP1.0
     */
    public float getYDoP() {
        return YDoP;
    }
}
