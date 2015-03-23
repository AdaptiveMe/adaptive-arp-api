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
 * Interface for testing the Capabilities operations
 *
 * @author Carlos Lozano Diez
 * @since v2.0
 */
public interface ICapabilities extends IBaseSystem {

    /**
     * Determines whether a specific Sensor capability is supported by the
     * device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @since v2.0
     */
    boolean hasSensorSupport(Sensor type);

    /**
     * Determines whether a specific Communication capability is supported by
     * the device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @since v2.0
     */
    boolean hasCommunicationSupport(Communication type);

    /**
     * Determines whether a specific Data capability is supported by the device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @since v2.0
     */
    boolean hasDataSupport(Data type);

    /**
     * Determines whether a specific Media capability is supported by the
     * device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @since v2.0
     */
    boolean hasMediaSupport(Media type);

    /**
     * Determines whether a specific Net capability is supported by the device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @since v2.0
     */
    boolean hasNetSupport(Net type);

    /**
     * Determines whether a specific Notification capability is supported by the
     * device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @since v2.0
     */
    boolean hasNotificationSupport(Notification type);

    /**
     * Determines whether a specific hardware button is supported for interaction.
     *
     * @param type Type of feature to check.
     * @return true is supported, false otherwise.
     * @since v2.0
     */
    boolean hasButtonSupport(Button type);

    /**
     * Determines whether the device/display supports a given orientation.
     *
     * @param orientation Orientation type.
     * @return True if the given orientation is supported, false otherwise.
     * @since v2.0.5
     */
    boolean hasOrientationSupport(Orientation orientation);

    /**
     * Obtains the default orientation of the device/display. If no default orientation is available on
     * the platform, this method will return the current orientation. To capture device or display orientation
     * changes please use the IDevice and IDisplay functions and listeners API respectively.
     *
     * @return The default orientation for the device/display.
     * @since v2.0.5
     */
    Orientation getOrientationDefault();

    /**
     * Provides the device/display orientations supported by the platform. A platform will usually
     * support at least one orientation. This is usually PortaitUp.
     *
     * @return The orientations supported by the device/display of the platform.
     * @since v2.0.5
     */
    Orientation[] getOrientationsSupported();

    /**
     * Sensor type enumeration.
     *
     * @since v2.0
     */
    public enum Sensor {
        Accelerometer, AmbientLight, Barometer, Geolocation, Gyroscope, Magnetometer, Proximity, Unknown
    }

    /**
     * PIM functionality support enumeration.
     *
     * @since v2.0
     */
    public enum Communication {
        Calendar, Contact, Mail, Messaging, Telephony, Unknown
    }

    /**
     * Storage functionality support enumeration.
     *
     * @since v2.0
     */
    public enum Data {
        Database, File, Cloud, Unknown
    }

    /**
     * Media functionality support enumeration.
     *
     * @since v2.0
     */
    public enum Media {
        AudioPlayback, AudioRecording, Camera, VideoPlayback, VideoRecording, Unknown
    }

    /**
     * Connectivity support enumeration.
     *
     * @since v2.0
     */
    public enum Net {
        GSM, GPRS, HSDPA, LTE, WIFI, Ethernet, Unavailable, Unknown
    }

    /**
     * Notification support enumeration.
     *
     * @since v2.0
     */
    public enum Notification {
        Alarm, LocalNotification, RemoteNotification, Vibration, Unknown
    }

    /**
     * Hardware button support (only those that can interact with the application).
     *
     * @since v2.0
     */
    public enum Button {
        HomeButton, BackButton, OptionButton, Unknown
    }

    /**
     * Orientations supported by the device and display.
     *
     * @since v2.0.5
     */
    public enum Orientation {
        PortraitUp, PortraitDown, LandscapeLeft, LandscapeRight, Unknown
    }
}
