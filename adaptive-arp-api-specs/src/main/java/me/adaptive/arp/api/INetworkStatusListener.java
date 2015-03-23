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
 * Interface for Managing the Network status listener networkEvents
 *
 * @author Carlos Lozano Diez
 * @since v2.0
 */
public interface INetworkStatusListener extends IBaseListener {

    /**
     * Called when network connection changes somehow.
     *
     * @param networkEvent Change to this network.
     * @since v2.0
     */
    public void onResult(NetworkEvent networkEvent);

    /**
     * Status received with warning
     *
     * @param networkEvent Change to this network.
     * @param warning Type of warning encountered during reading.
     * @since v2.0
     */
    public void onWarning(NetworkEvent networkEvent, Warning warning);

    /**
     * No data received - error condition, not authorized or hardware not available.
     *
     * @param error Type of error encountered during reading.
     * @since v2.0
     */
    public void onError(Error error);

    /**
     * Possible Errors
     *
     * @since v2.0
     */
    public enum Error {
        NoPermission, Unreachable, Unknown
    }

    /**
     * Possible Warnings
     *
     * @since v2.0
     */
    public enum Warning {
        IpAddressNotAssigned, IpAddressChanged, Unknown
    }
}
