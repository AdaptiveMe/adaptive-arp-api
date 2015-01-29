/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.0.8

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.impl;

import me.adaptive.arp.api.*;

/**
   Interface for Managing the Services operations
   Auto-generated implementation of IService specification.
*/
public class ServiceDelegate extends BaseCommunicationDelegate implements IService {

     /**
        Register delegate with the Application Registry.
     */
     static {
          AppRegistryBridge.getInstance().getServiceBridge().setDelegate(new ServiceDelegate());
     }

     /**
        Default Constructor.
     */
     public ServiceDelegate() {
          super();
     }

     /**
        Create a service request for the given ServiceToken. This method creates the request, populating
existing headers and cookies for the same service. The request is populated with all the defaults
for the service being invoked and requires only the request body to be set. Headers and cookies may be
manipulated as needed by the application before submitting the ServiceRequest via invokeService.

        @param serviceToken ServiceToken to be used for the creation of the request.
        @return ServiceRequest with pre-populated headers, cookies and defaults for the service.
        @since v2.0.6
     */
     public ServiceRequest getServiceRequest(ServiceToken serviceToken) {
          ServiceRequest response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":getServiceRequest");
          // return response;
     }

     /**
        Obtains a ServiceToken for the given parameters to be used for the creation of requests.

        @param serviceName  Service name.
        @param endpointName Endpoint name.
        @param functionName Function name.
        @param method       Method type.
        @return ServiceToken to create a service request or null if the given parameter combination is not
configured in the platform's XML service definition file.
        @since v2.0.6
     */
     public ServiceToken getServiceToken(string serviceName, string endpointName, string functionName, IServiceMethod method) {
          ServiceToken response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":getServiceToken");
          // return response;
     }

     /**
        Returns all the possible service tokens configured in the platform's XML service definition file.

        @return Array of service tokens configured.
        @since v2.0.6
     */
     public ServiceToken[] getServicesRegistered() {
          ServiceToken[] response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":getServicesRegistered");
          // return response;
     }

     /**
        Executes the given ServiceRequest and provides responses to the given callback handler.

        @param serviceRequest ServiceRequest with the request body.
        @param callback       IServiceResultCallback to handle the ServiceResponse.
        @since v2.0.6
     */
     public void invokeService(ServiceRequest serviceRequest, IServiceResultCallback callback) {
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":invokeService");
     }

     /**
        Checks whether a specific service, endpoint, function and method type is configured in the platform's
XML service definition file.

        @param serviceName  Service name.
        @param endpointName Endpoint name.
        @param functionName Function name.
        @param method       Method type.
        @return Returns true if the service is configured, false otherwise.
        @since v2.0.6
     */
     public bool isServiceRegistered(string serviceName, string endpointName, string functionName, IServiceMethod method) {
          bool response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":isServiceRegistered");
          // return response;
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
