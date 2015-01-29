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
 * Represents an instance of a service.
 *
 * @author Aryslan
 * @since ARP 2.0
 */
public class Service extends APIBean {

    /**
     * Endpoint of the service
     */
    private ServiceEndpoint[] serviceEndpoints;

    /**
     * The service name
     */
    private String name;

    /**
     * The type of the service
     */
    private IService.ServiceType type;

    /**
     * Default constructor
     *
     * @since ARP 2.0
     */
    public Service() {
    }

    /**
     * Constructor used by the implementation
     *
     * @param serviceEndpoints Endpoints of the service
     * @param name             Name of the service
     * @param type             Type of the service
     * @since ARP 2.0
     */
    public Service(ServiceEndpoint[] serviceEndpoints, String name, IService.ServiceType type) {
        this.serviceEndpoints = serviceEndpoints;
        this.name = name;
        this.type = type;
    }

    /**
     * Returns the serviceEndpoints
     *
     * @return serviceEndpoints
     * @since ARP 2.0
     */
    public ServiceEndpoint[] getServiceEndpoints() {
        return serviceEndpoints;
    }

    /**
     * Set the serviceEndpoints
     *
     * @param serviceEndpoints Endpoint of the service
     * @since ARP 2.0
     */
    public void setServiceEndpoints(ServiceEndpoint[] serviceEndpoints) {
        this.serviceEndpoints = serviceEndpoints;
    }

    /**
     * Returns the name
     *
     * @return name
     * @since ARP 2.0
     */
    public String getName() {
        return name;
    }

    /**
     * Set the name
     *
     * @param name Name of the service
     * @since ARP 2.0
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns the type
     *
     * @return type
     * @since ARP 2.0
     */
    public IService.ServiceType getType() {
        return type;
    }

    /**
     * Set the type
     *
     * @param type Type of the service
     * @since ARP 2.0
     */
    public void setType(IService.ServiceType type) {
        this.type = type;
    }
}
