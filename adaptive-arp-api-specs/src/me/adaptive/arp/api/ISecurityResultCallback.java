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
 * Interface for Managing the Security result callback
 *
 * @author Aryslan
 * @since ARP 2.0
 */
public interface ISecurityResultCallback extends IBaseCallback {

    /**
     * Correct data received.
     *
     * @param keyValues key and values
     * @since ARP 2.0
     */
    void onResult(SecureKeyPair[] keyValues);

    /**
     * Data received with warning - ie Found entries with existing key and values have been overriden
     *
     * @param keyValues key and values
     * @param warning   Warning values
     * @since ARP 2.0
     */
    void onWarning(SecureKeyPair[] keyValues, Warning warning);

    /**
     * No data received - error condition, not authorized .
     *
     * @param error Error values
     * @since ARP 2.0
     */
    void onError(Error error);

    /**
     * Possible warning values
     *
     * @since ARP 2.0
     */
    enum Warning {
        EntryOverride, Unknown
    }

    /**
     * Possible error values
     *
     * @since ARP 2.0
     */
    enum Error {
        NoPermission, NoMatchesFound, Unknown
    }
}

