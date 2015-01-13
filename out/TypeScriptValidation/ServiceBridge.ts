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

///<reference path="APIRequest.ts"/>
///<reference path="BaseCommunicationBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseCommunication.ts"/>
///<reference path="IService.ts"/>
///<reference path="IServiceResultCallback.ts"/>
///<reference path="Service.ts"/>
///<reference path="ServiceRequest.ts"/>
///<reference path="ServiceResultCallback.ts"/>
module Adaptive {

     /**
        Interface for Managing the Services operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class ServiceBridge extends BaseCommunicationBridge implements IService {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Get a reference to a registered service by name.

             @param serviceName Name of service.
             @return A service, if registered, or null of the service does not exist.
             @since ARP1.0
          */
          getService(serviceName : string) : Service {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceName));
               var ar : APIRequest = new APIRequest("IService","getService",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : Service = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'ServiceBridge.getService' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.getService' request.");
               }
               return response;
          }

          /**
             Request async a service for an Url

             @param serviceRequest Service Request to invoke
             @param service        Service to call
             @param callback       Callback to execute with the result
             @since ARP1.0
          */
          invokeService(serviceRequest : ServiceRequest, service : Service, callback : IServiceResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceRequest));
               arParams.push(JSON.stringify(service));
               var ar : APIRequest = new APIRequest("IService","invokeService",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredServiceResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.invokeService' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredServiceResultCallback.remove(""+callback.getId());
                    callback.onError(IServiceResultCallbackError.Unknown)
               }
          }

          /**
             Register a new service

             @param service to register
             @since ARP1.0
          */
          registerService(service : Service) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(service));
               var ar : APIRequest = new APIRequest("IService","registerService",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.registerService' request.");
               }
          }

          /**
             Unregister a service

             @param service to unregister
             @since ARP1.0
          */
          unregisterService(service : Service) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(service));
               var ar : APIRequest = new APIRequest("IService","unregisterService",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.unregisterService' request.");
               }
          }

          /**
             Unregister all services.

             @since ARP1.0
          */
          unregisterServices() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IService","unregisterServices",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.unregisterServices' request.");
               }
          }

          /**
             Check whether a service by the given service is already registered.

             @param service Service to check
             @return True if the service is registered, false otherwise.
             @since ARP1.0
          */
          isRegistered_service(service : Service) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(service));
               var ar : APIRequest = new APIRequest("IService","isRegistered_service",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'ServiceBridge.isRegistered_service' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.isRegistered_service' request.");
               }
               return response;
          }

          /**
             Check whether a service by the given name is registered.

             @param serviceName Name of service.
             @return True if the service is registered, false otherwise.
             @since ARP1.0
          */
          isRegistered_serviceName(serviceName : string) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceName));
               var ar : APIRequest = new APIRequest("IService","isRegistered_serviceName",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'ServiceBridge.isRegistered_serviceName' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.isRegistered_serviceName' request.");
               }
               return response;
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
