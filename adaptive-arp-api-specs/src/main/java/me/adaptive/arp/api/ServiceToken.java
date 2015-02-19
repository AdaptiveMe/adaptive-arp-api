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
 * =====================================================================================================================
 */
package me.adaptive.arp.api;

/**
 * Object representing a specific service, path, function and invocation method for accessing external services.
 *
 * @since v2.0.6
 */
public class ServiceToken extends APIBean {

    /**
     * Name of the service configured in the platform's services XML file.
     *
     * @since v2.0.6
     */
    private String serviceName;

    /**
     * Name of the endpoint configured in the platform's services XML file. This is a reference to a specific schema,
     * host and port combination for a given service.
     *
     * @since v2.0.6
     */
    private String endpointName;
    /**
     * Name of the function configured in the platform's services XML file for a specific endpoint. This is a reference
     * to a relative path of a function published on a remote service.
     *
     * @since v2.0.6
     */
    private String functionName;

    /**
     * Http method to be used by the invocation - this is typically GET or POST albeit the platform may support
     * other invocation methods. This is also defined per function of each endpoint in the platform's XML file.
     *
     * @since v2.0.6
     */
    private IService.Method invocationMethod;

    /**
     * Default constructor.
     *
     * @since v2.0.6
     */
    public ServiceToken() {
        super();
    }

    /**
     * Convenience constructor.
     *
     * @param serviceName      Name of the configured service.
     * @param endpointName     Name of the endpoint configured for the service.
     * @param functionName     Name of the function configured for the endpoint.
     * @param invocationMethod Method type configured for the function.
     * @since v2.0.6
     */
    public ServiceToken(String serviceName, String endpointName, String functionName, IService.Method invocationMethod) {
        this.serviceName = serviceName;
        this.endpointName = endpointName;
        this.functionName = functionName;
        this.invocationMethod = invocationMethod;
    }

    /**
     * Get token's service name.
     *
     * @return Service name.
     * @since v2.0.6
     */
    public String getServiceName() {
        return serviceName;
    }

    /**
     * Sets token's service name.
     *
     * @param serviceName Service name.
     * @since v2.0.6
     */
    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    /**
     * Get token's endpoint name.
     *
     * @return Endpoint name.
     * @since v2.0.6
     */
    public String getEndpointName() {
        return endpointName;
    }

    /**
     * Set the endpoint name.
     *
     * @param endpointName Endpoint name.
     * @since v2.0.6
     */
    public void setEndpointName(String endpointName) {
        this.endpointName = endpointName;
    }

    /**
     * Get token's function name.
     *
     * @return Function name.
     * @since v2.0.6
     */
    public String getFunctionName() {
        return functionName;
    }

    /**
     * Sets the function name.
     *
     * @param functionName Function name.
     * @since v2.0.6
     */
    public void setFunctionName(String functionName) {
        this.functionName = functionName;
    }

    /**
     * Get token's invocation method type.
     *
     * @return Invocation method type.
     * @since v2.0.6
     */
    public IService.Method getInvocationMethod() {
        return invocationMethod;
    }

    /**
     * Sets the invocation method type.
     *
     * @param invocationMethod Method type.
     * @since v2.0.6
     */
    public void setInvocationMethod(IService.Method invocationMethod) {
        this.invocationMethod = invocationMethod;
    }
}
