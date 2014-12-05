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

public interface INetworkReachability extends IBaseCommunication {

    /**
     * Whether there is connectivity to an url of a service or not.
     *
     * @param url      to look for
     * @param callback Callback called at the end
     */
    void isNetworkServiceReachable(String url, INetworkReachabilityCallback callback);

    /**
     * Whether there is connectivity to a host, via domain name or ip address, or not.
     *
     * @param host     domain name or ip address of host.
     * @param callback Callback called at the end.
     */
    void isNetworkReachable(String host, INetworkReachabilityCallback callback);

}
