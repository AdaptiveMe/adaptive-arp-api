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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

/**
   Interface for Managing the Services operations

   @author Francisco Javier Martin Bueno
   @since ARP1.0
   @version 1.0
*/
public interface IService extends IBaseCommunication {
     /**
        Get a reference to a registered service by name.

        @param serviceName Name of service.
        @return A service, if registered, or null of the service does not exist.
        @since ARP1.0
     */
     Service getService(String serviceName);

     /**
        Request async a service for an Url

        @param serviceRequest Service Request to invoke
        @param service        Service to call
        @param callback       Callback to execute with the result
        @since ARP1.0
     */
     void invokeService(ServiceRequest serviceRequest, Service service, IServiceResultCallback callback);

     /**
        Check whether a service by the given name is registered.

        @param serviceName Name of service.
        @return True if the service is registered, false otherwise.
        @since ARP1.0
     */
     boolean isRegistered(String serviceName);

     /**
        Check whether a service by the given service is already registered.

        @param service Service to check
        @return True if the service is registered, false otherwise.
        @since ARP1.0
     */
     boolean isRegistered(Service service);

     /**
        Register a new service

        @param service to register
        @since ARP1.0
     */
     void registerService(Service service);

     /**
        Unregister all services.

        @since ARP1.0
     */
     void unregisterServices();

     /**
        Unregister a service

        @param service to unregister
        @since ARP1.0
     */
     void unregisterService(Service service);

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
