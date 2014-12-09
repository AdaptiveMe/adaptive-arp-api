/// <reference path="IAdaptiveRPGroup.d.ts" />
/// <reference path="IBaseCommunication.d.ts" />
/// <reference path="IServiceResultCallback.d.ts" />
/// <reference path="Service.d.ts" />
/// <reference path="ServiceRequest.d.ts" />
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

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       Definition of IService interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IService extends IBaseCommunication {
        /**
           Get a reference to a registered service by name.
           @param serviceName Name of service.
           @return A service, if registered, or null of the service does not exist.
        */
        getService(serviceName: string): Service;
        /**
           Request async a service for an Url
           @param serviceRequest
           @param service
           @param callback
        */
        invokeService(serviceRequest: ServiceRequest, service: Service, callback: IServiceResultCallback): any;
        /**
           Check whether a service by the given name is registered.
           @param serviceName
           @return True if the service is registered, false otherwise.
        */
        isRegistered(serviceName: string): boolean;
        /**
           Check whether a service by the given name is registered.
           @param serviceName
           @return True if the service is registered, false otherwise.
        */
        isRegistered(service: Service): boolean;
        /**
           Register a new service
           @param service to register
        */
        registerService(service: Service): any;
        /**
           Unregister all services.
        */
        unregisterServices(): any;
        /**
           Unregister a service
           @param service to unregister
        */
        unregisterService(service: Service): any;
    }
}
