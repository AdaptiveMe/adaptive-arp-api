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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Definition of IService interface/protocol.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public interface IService : IBaseCommunication {
          /**
             Get a reference to a registered service by name.
             @param serviceName Name of service.
             @return A service, if registered, or null of the service does not exist.
          */
          Service GetService(string ServiceName);

          /**
             Request async a service for an Url
             @param serviceRequest
             @param service
             @param callback
          */
          void InvokeService(ServiceRequest ServiceRequest, Service Service, IServiceResultCallback Callback);

          /**
             Check whether a service by the given name is registered.
             @param serviceName
             @return True if the service is registered, false otherwise.
          */
          bool IsRegistered(string ServiceName);

          /**
             Check whether a service by the given name is registered.
             @param serviceName
             @return True if the service is registered, false otherwise.
          */
          bool IsRegistered(Service Service);

          /**
             Register a new service
             @param service to register
          */
          void RegisterService(Service Service);

          /**
             Unregister all services.
          */
          void UnregisterServices();

          /**
             Unregister a service
             @param service to unregister
          */
          void UnregisterService(Service Service);

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
