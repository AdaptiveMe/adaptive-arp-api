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

/**
 * Represents an instance of a service.
 */
public class Service {

    /**
     * Enpoint of the service
     *
     * @since ARP1.0
     */
    private Endpoint endpoint;
    /**
     * The service name
     *
     * @since ARP1.0
     */
    private String name;
    /**
     * The method used
     *
     * @since ARP1.0
     */
    private IService.ServiceMethod method;
    /**
     * The type of the service
     *
     * @since ARP1.0
     */
    private IService.ServiceType type;

    /**
     * Constructor used by the implementation
     */
    public Service() {
    }

    /**
     * Constructor used by the implementation
     *
     * @param endpoint
     * @param name
     * @param method
     * @param type
     * @since ARP1.0
     */
    public Service(Endpoint endpoint, String name, IService.ServiceMethod method, IService.ServiceType type) {
        this.endpoint = endpoint;
        this.name = name;
        this.method = method;
        this.type = type;
    }

    /**
     * Returns the endpoint
     *
     * @return endpoint
     * @since ARP1.0
     */
    public Endpoint getEndpoint() {
        return endpoint;
    }

    /**
     * Set the endpoint
     *
     * @param endpoint
     * @since ARP1.0
     */
    public void setEndpoint(Endpoint endpoint) {
        this.endpoint = endpoint;
    }

    /**
     * Returns the name
     *
     * @return name
     * @since ARP1.0
     */
    public String getName() {
        return name;
    }

    /**
     * Set the name
     *
     * @param name
     * @since ARP1.0
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns the method
     *
     * @return method
     * @since ARP1.0
     */
    public IService.ServiceMethod getMethod() {
        return method;
    }

    /**
     * Set the method
     *
     * @param method
     * @since ARP1.0
     */
    public void setMethod(IService.ServiceMethod method) {
        this.method = method;
    }

    /**
     * Returns the type
     *
     * @return type
     * @since ARP1.0
     */
    public IService.ServiceType getType() {
        return type;
    }

    /**
     * Set the type
     *
     * @param type
     * @since ARP1.0
     */
    public void setType(IService.ServiceType type) {
        this.type = type;
    }
}
