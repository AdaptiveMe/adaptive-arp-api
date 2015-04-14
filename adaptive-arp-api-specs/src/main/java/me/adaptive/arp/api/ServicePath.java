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
 * Structure representing a service path for one endpoint
 *
 * @author fnva
 * @since v2.0.4
 */
public class ServicePath extends APIBean {

    /**
     * The path for the endpoint.
     *
     * @since v2.0.4
     */
    private String path;

    /**
     * The methods for calling a path.
     *
     * @since v2.0.4
     */
    private IService.Method[] methods;

    /**
     * Service endpoint type.
     *
     * @since v2.0.6
     */
    private IService.Type type;

    /**
     * Default Constructor.
     *
     * @since v2.0.4
     */
    public ServicePath() {
    }

    /**
     * Constructor with parameters.
     *
     * @param path    The path for the endpoint
     * @param methods The methods for calling a path
     * @param type    Protocol type.
     * @since v2.0.6
     */
    public ServicePath(String path, IService.Method[] methods, IService.Type type) {
        this.path = path;
        this.methods = methods;
        this.type = type;
    }

    /**
     * Endpoint's Path Getter
     *
     * @return Endpoint's Path
     * @since v2.0.4
     */
    public String getPath() {
        return path;
    }

    /**
     * Endpoint's path setter
     *
     * @param path Endpoint's path
     * @since v2.0.4
     */
    public void setPath(String path) {
        this.path = path;
    }

    /**
     * Endpoint's path methods setter
     *
     * @return Endpoint's path methods
     * @since v2.0.4
     */
    public IService.Method[] getMethods() {
        return methods;
    }

    /**
     * Endpoint's path methods setter
     *
     * @param methods Endpoint's path methods
     * @since v2.0.4
     */
    public void setMethods(IService.Method[] methods) {
        this.methods = methods;
    }

    /**
     * Gets the protocol for the path.
     *
     * @return Type of protocol.
     * @since v2.0.6
     */
    public IService.Type getType() {
        return type;
    }

    /**
     * Sets the protocol for the path.
     *
     * @param type Type of protocol.
     * @since v2.0.6
     */
    public void setType(IService.Type type) {
        this.type = type;
    }
}
