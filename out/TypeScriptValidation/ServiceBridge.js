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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Services operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var ServiceBridge = (function (_super) {
        __extends(ServiceBridge, _super);
        /**
           Default constructor.
        */
        function ServiceBridge() {
            _super.call(this);
        }
        /**
           Get a reference to a registered service by name.

           @param serviceName Name of service.
           @return A service, if registered, or null of the service does not exist.
           @since ARP1.0
        */
        ServiceBridge.prototype.getService = function (serviceName) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(serviceName));
            var ar = new Adaptive.APIRequest("IService", "getService", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'ServiceBridge.getService' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.getService' request.");
            }
            return response;
        };
        /**
           Request async a service for an Url

           @param serviceRequest Service Request to invoke
           @param service        Service to call
           @param callback       Callback to execute with the result
           @since ARP1.0
        */
        ServiceBridge.prototype.invokeService = function (serviceRequest, service, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(serviceRequest));
            arParams.push(JSON.stringify(service));
            var ar = new Adaptive.APIRequest("IService", "invokeService", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredServiceResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.invokeService' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredServiceResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IServiceResultCallbackError.Unknown);
            }
        };
        /**
           Register a new service

           @param service to register
           @since ARP1.0
        */
        ServiceBridge.prototype.registerService = function (service) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(service));
            var ar = new Adaptive.APIRequest("IService", "registerService", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.registerService' request.");
            }
        };
        /**
           Unregister a service

           @param service to unregister
           @since ARP1.0
        */
        ServiceBridge.prototype.unregisterService = function (service) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(service));
            var ar = new Adaptive.APIRequest("IService", "unregisterService", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.unregisterService' request.");
            }
        };
        /**
           Unregister all services.

           @since ARP1.0
        */
        ServiceBridge.prototype.unregisterServices = function () {
            // Create and populate API request.
            var arParams = [];
            var ar = new Adaptive.APIRequest("IService", "unregisterServices", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.unregisterServices' request.");
            }
        };
        /**
           Check whether a service by the given service is already registered.

           @param service Service to check
           @return True if the service is registered, false otherwise.
           @since ARP1.0
        */
        ServiceBridge.prototype.isRegistered_service = function (service) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(service));
            var ar = new Adaptive.APIRequest("IService", "isRegistered_service", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'ServiceBridge.isRegistered_service' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.isRegistered_service' request.");
            }
            return response;
        };
        /**
           Check whether a service by the given name is registered.

           @param serviceName Name of service.
           @return True if the service is registered, false otherwise.
           @since ARP1.0
        */
        ServiceBridge.prototype.isRegistered_serviceName = function (serviceName) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(serviceName));
            var ar = new Adaptive.APIRequest("IService", "isRegistered_serviceName", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'ServiceBridge.isRegistered_serviceName' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.isRegistered_serviceName' request.");
            }
            return response;
        };
        return ServiceBridge;
    })(Adaptive.BaseCommunicationBridge);
    Adaptive.ServiceBridge = ServiceBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceBridge.js.map