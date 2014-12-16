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
 * This interface manages the responses of the resource callback
 *
 * @author Carlos Lozano Diez
 * @since ARP1.0
 */
public interface IAppResourceCallback extends IBaseCallback {

    /**
     * Correct result of the App Resource operation
     *
     * @param resource Resource
     * @since ARP1.0
     */
    void onResult(IAppResource resource);

    /**
     * Warning result of the App Resource operation
     *
     * @param resource Resource
     * @param warning  Warning fired
     * @since ARP1.0
     */
    void onWarning(IAppResource resource, Warning warning);

    /**
     * Error result of the App resource operation
     *
     * @param error Error fired
     * @since ARP1.0
     */
    void onError(Error error);

    /**
     * Warning enumerator to handle the responses
     *
     * @since ARP1.0
     */
    enum Warning {
        PartialContent, TooLarge, LinkedResource, Unknown
    }

    /**
     * Error enumerator to handle the responses
     *
     * @since ARP1.0
     */
    enum Error {
        NotFound, NoPermission, Unknown
    }

}
