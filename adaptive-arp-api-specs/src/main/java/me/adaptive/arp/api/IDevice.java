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
 * Interface for Managing the Device operations
 *
 * @author Francisco Javier Martin Bueno
 * @since v2.0
 */
public interface IDevice extends IBaseSystem {

    /**
     * Returns the device information for the current device executing the runtime.
     *
     * @return DeviceInfo for the current device.
     * @since v2.0
     */
    DeviceInfo getDeviceInfo();

    /**
     * Gets the current Locale for the device.
     *
     * @return The current Locale information.
     * @since v2.0
     */
    Locale getLocaleCurrent();

    /**
     * Register a new listener that will receive button events.
     *
     * @param listener to be registered.
     * @since v2.0
     */
    void addButtonListener(IButtonListener listener);

    /**
     * De-registers an existing listener from receiving button events.
     *
     * @param listener to be removed.
     * @since v2.0
     */
    void removeButtonListener(IButtonListener listener);

    /**
     * Removed all existing listeners from receiving button events.
     *
     * @since v2.0
     */
    void removeButtonListeners();

    /**
     * Returns the current orientation of the device. Please note that this may be different from the orientation
     * of the display. For display orientation, use the IDisplay APIs.
     *
     * @return The current orientation of the device.
     * @since v2.0.5
     */
    ICapabilities.Orientation getOrientationCurrent();

    /**
     * Add a listener to start receiving device orientation change events.
     *
     * @param listener Listener to add to receive orientation change events.
     * @since v2.0.5
     */
    void addDeviceOrientationListener(IDeviceOrientationListener listener);

    /**
     * Remove a listener to stop receiving device orientation change events.
     *
     * @param listener Listener to remove from receiving orientation change events.
     * @since v2.0.5
     */
    void removeDeviceOrientationListener(IDeviceOrientationListener listener);

    /**
     * Remove all listeners receiving device orientation events.
     *
     * @since v2.0.5
     */
    void removeDeviceOrientationListeners();

}
