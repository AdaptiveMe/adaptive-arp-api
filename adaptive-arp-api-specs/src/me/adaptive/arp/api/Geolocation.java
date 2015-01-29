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
 *     * Ferran Vila Conesa
 *                 <http://github.com/fnva>
 *                 <http://twitter.com/ferran_vila>
 *                 <mailto:ferran.vila.conesa@gmail.com>
 *
 *     * Aryslan
 *                 <http://github.com/Aryslan>
 *                 <http://twitter.com/Aryslan>
 *                 <mailto:ddbc@gft.com>
 *
 *     * Francisco Javier Martin Bueno
 *                 <https://github.com/kechis>
 *                 <mailto:kechis@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

/**
 * Structure representing the data a single geolocation reading.
 *
 * @author Francisco Javier Martin Bueno
 * @since ARP 2.0
 */
public class Geolocation extends APIBean {

    /**
     * The Y coordinate (or latitude). Measured in degrees.
     */
    private double latitude;

    /**
     * The X coordinate (or longitude). Measured in degrees.
     */
    private double longitude;

    /**
     * The current device altitude (or Z coordinate). Measured in meters.
     */
    private double altitude;

    /**
     * Dilution of precision on the X measurement. Measured in meters.
     */
    private float xDoP;

    /**
     * Dilution of precision on the Y measurement. Measured in meters.
     */
    private float yDoP;

    /**
     * Timestamp of the geolocation reading.
     */
    private long timestamp;


    /**
     * Default constructor
     *
     * @since ARP 2.0
     */
    public Geolocation() {
    }

    /**
     * Constructor with parameters
     *
     * @param latitude  Latitude of the measurement
     * @param longitude Longitude of the measurement
     * @param timestamp Timestamp of the measurement
     * @since ARP 2.0
     */
    public Geolocation(double latitude, double longitude, long timestamp) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.timestamp = timestamp;
    }

    /**
     * Constructor with parameters
     *
     * @param latitude  Latitude of the measurement
     * @param longitude Longitude of the measurement
     * @param altitude  Altitude of the measurement
     * @param xDoP      Dilution of precision on the X measurement
     * @param yDoP      Dilution of precision on the Y measurement
     * @param timestamp Timestamp of the measurement
     * @since ARP 2.0
     */
    public Geolocation(double latitude, double longitude, double altitude, float xDoP, float yDoP, long timestamp) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.xDoP = xDoP;
        this.yDoP = yDoP;
        this.timestamp = timestamp;
    }

    /**
     * Returns the latitude in degrees
     *
     * @return Latitude of the measurement
     * @since ARP 2.0
     */
    public double getLatitude() {
        return latitude;
    }

    /**
     * Set the latitude in degrees
     *
     * @param latitude Latitude of the measurement
     * @since ARP 2.0
     */
    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    /**
     * Returns the longitude in degrees
     *
     * @return Longitude of the measurement
     * @since ARP 2.0
     */
    public double getLongitude() {
        return longitude;
    }

    /**
     * Returns the latitude in degrees
     *
     * @param longitude Longitude of the measurement
     * @since ARP 2.0
     */
    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    /**
     * Returns altitude in meters
     *
     * @return Altitude of the measurement
     * @since ARP 2.0
     */
    public double getAltitude() {
        return altitude;
    }

    /**
     * Set altitude in meters
     *
     * @param altitude Altitude of the measurement
     * @since ARP 2.0
     */
    public void setAltitude(double altitude) {
        this.altitude = altitude;
    }

    /**
     * Getter for Dilution of precision on the X measurement
     *
     * @return Dilution of precision on the X measurement
     * @since ARP 2.0
     */
    public float getxDoP() {
        return xDoP;
    }

    /**
     * Setter for Dilution of precision on the X measurement
     *
     * @param xDoP Dilution of precision on the X measurement
     * @since ARP 2.0
     */
    public void setxDoP(float xDoP) {
        this.xDoP = xDoP;
    }

    /**
     * Getter for Dilution of precision on the Y measurement
     *
     * @return Dilution of precision on the Y measurement
     * @since ARP 2.0
     */
    public float getyDoP() {
        return yDoP;
    }

    /**
     * Setter for Dilution of precision on the Y measurement
     *
     * @param yDoP Dilution of precision on the Y measurement
     * @since ARP 2.0
     */
    public void setyDoP(float yDoP) {
        this.yDoP = yDoP;
    }

    /**
     * Timestamp Getter
     *
     * @return Timestamp
     * @since ARP 2.0
     */
    public long getTimestamp() {
        return timestamp;
    }

    /**
     * Timestamp Setter
     *
     * @param timestamp Timestamp
     * @since ARP 2.0
     */
    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
}
