/*
 *
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
 *
 */

package me.adaptive.arp.api;


public interface IService extends IBaseData {

    /**
     * Register a new service
     *
     * @param service to register
     */
    void registerService(Service service);

    /**
     * Unregister a service
     *
     * @param service to unregister
     */
    void unregisterService(Service service);

    /**
     * Unregister all services.
     */
    void unregisterServices();

    /**
     * Check whether a service by the given service is already registered.
     *
     * @param service
     * @return True if the service is registered, false otherwise.
     */
    boolean isRegistered(Service service);

    /**
     * Check whether a service by the given name is registered.
     *
     * @param serviceName
     * @return True if the service is registered, false otherwise.
     */
    boolean isRegistered(String serviceName);

    /**
     * Get a reference to a registered service by name.
     *
     * @param serviceName Name of service.
     * @return A service, if registered, or null of the service does not exist.
     */
    Service getService(String serviceName);

    /**
     * Request async a service for an Url
     *
     * @param serviceRequest
     * @param service
     * @param callback
     */
    void InvokeService(ServiceRequest serviceRequest, Service service, IServiceResultCallback callback);

    /**
     * Type of available services
     *
     * @since ARP1.0
     */
    public enum ServiceType {
        SERVICETYPE_AMF_SERIALIZATION,
        SERVICETYPE_GWT_RPC,
        SERVICETYPE_OCTET_BINARY,
        SERVICETYPE_REMOTING_SERIALIZATION,
        SERVICETYPE_REST_JSON,
        SERVICETYPE_REST_XML,
        SERVICETYPE_SOAP_JSON,
        SERVICETYPE_SOAP_XML,
        SERVICETYPE_XMLRPC_JSON,
        SERVICETYPE_XMLRPC_XML
    }

    /**
     * Protocol version supported
     *
     * @since ARP1.0
     */
    public enum ProtocolVersion {
        HTTP_PROTOCOL_VERSION_1_0, HTTP_PROTOCOL_VERSION_1_1
    }

    /**
     * Available methods
     *
     * @since ARP1.0
     */
    public enum ServiceMethod {
        POST, GET
    }
}
