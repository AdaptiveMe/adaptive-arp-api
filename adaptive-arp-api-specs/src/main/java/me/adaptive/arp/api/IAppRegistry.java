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
 * Interface to retrieve auto-registered service implementation references.
 *
 * @author Carlos Lozano Diez
 * @since v2.0
 */
public interface IAppRegistry {

    /**
     * Returns a reference to the Platform Context
     *
     * @return Reference to the platform context
     * @since v2.0
     */
    IAppContext getPlatformContext();

    /**
     * Returns a reference to the Webview platform context
     *
     * @return Reference to the Webview Context
     * @since v2.0
     */
    IAppContextWebview getPlatformContextWeb();

    /**
     * Method that returns the API version of the implementation.
     *
     * @return API Version string.
     * @since v2.0
     */
    String getAPIVersion();

    /**
     * Synthetic method for autogeneration.
     * @param interfaceClass The interface class.
     * @return The reference to the generated interface class.
     */
    Object get$Synthetic$(Class<? extends IAdaptiveRP> interfaceClass);


}
