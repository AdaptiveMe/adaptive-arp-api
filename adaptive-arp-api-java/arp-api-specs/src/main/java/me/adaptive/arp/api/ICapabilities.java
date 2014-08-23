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


public interface ICapabilities extends IBaseSystem {
    /**
     * Determines whether a specific Sensor capability is supported by the
     * device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    boolean hasSensorSupport(Sensor type);

    ;

    /**
     * Determines whether a specific Communication capability is supported by
     * the device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    boolean hasCommunicationSupport(Communication type);

    /**
     * Determines whether a specific Data capability is supported by the device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    boolean hasDataSupport(Data type);

    ;

    /**
     * Determines whether a specific Media capability is supported by the
     * device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    boolean hasMediaSupport(Media type);

    /**
     * Determines whether a specific Net capability is supported by the device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    boolean hasNetSupport(Net type);

    /**
     * Determines whether a specific Notification capability is supported by the
     * device.
     *
     * @param type Type of feature to check.
     * @return true if supported, false otherwise.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    boolean hasNotificationSupport(Notification type);

    /**
     * Determines whether a specific hardware button is supported for interaction.
     *
     * @param type Type of feature to check.
     * @return true is supported, false otherwise.
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    boolean hasButtonSupport(Button type);

    /**
     * Sensor type enumeration.
     *
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public enum Sensor {
        Accelerometer, AmbientLight, Barometer, Geolocation, Gyroscope, Magnetometer, Proximity
    }

    /**
     * PIM functionality support enumeration.
     *
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public enum Communication {
        Calendar, Contact, Mail, Messaging, Telephony
    }

    /**
     * Storage functionality support enumeration.
     *
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public enum Data {
        Database, File, Cloud
    }

    /**
     * Media functionality support enumeration.
     */
    public enum Media {
        Audio_Playback, Audio_Recording, Camera, Video_Playback, Video_Recording
    }

    /**
     * Connectivity support enumeration.
     *
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public enum Net {
        GSM, GPRS, HSDPA, LTE, WIFI, Ethernet
    }

    /**
     * Notification support enumeration.
     *
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public enum Notification {
        Alarm, LocalNotification, RemoteNotification, Vibration
    }

    /**
     * Hardware button support (only those that can interact with the application).
     *
     * @author Carlos Lozano Diez
     * @since ARP1.0
     */
    public enum Button {
        HomeButton, BackButton, OptionButton
    }
}
