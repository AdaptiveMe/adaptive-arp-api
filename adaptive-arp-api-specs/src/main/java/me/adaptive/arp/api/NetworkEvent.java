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
 * Represents a network handover event on the system.
 *
 * @author Ferran Vila Conesa
 * @since v2.2.1
 */
public class NetworkEvent extends APIBean {

    /**
     * New type of network of the event
     *
     * @since v2.2.1
     */
    private ICapabilities.Net network;

    /**
     * The timestamps in milliseconds when the event was fired.
     *
     * @since v2.2.1
     */
    private long timestamp;

    /**
     * Default constructor
     *
     * @since v2.2.1
     */
    public NetworkEvent() {
    }

    /**
     * Constructor used by the implementation
     *
     * @param network   of the app
     * @param timestamp Timestamp of the event
     * @since v2.2.1
     */
    public NetworkEvent(ICapabilities.Net network, long timestamp) {
        this.network = network;
        this.timestamp = timestamp;
    }

    /**
     * Network event getter
     *
     * @return New network switched
     * @since v2.2.1
     */
    public ICapabilities.Net getNetwork() {
        return network;
    }

    /**
     * Network setter
     *
     * @param network New network switched
     * @since v2.2.1
     */
    public void setNetwork(ICapabilities.Net network) {
        this.network = network;
    }

    /**
     * Returns the timestamp of the event
     *
     * @return Timestamp of the event
     * @since v2.2.1
     */
    public long getTimestamp() {
        return timestamp;
    }

    /**
     * Sets the timestamp of the event
     *
     * @param timestamp Timestamp of the event
     * @since v2.2.1
     */
    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
}
