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
            return null;
        };
        /**
           Request async a service for an Url

           @param serviceRequest Service Request to invoke
           @param service        Service to call
           @param callback       Callback to execute with the result
           @since ARP1.0
        */
        ServiceBridge.prototype.invokeService = function (serviceRequest, service, callback) {
        };
        /**
           Register a new service

           @param service to register
           @since ARP1.0
        */
        ServiceBridge.prototype.registerService = function (service) {
        };
        /**
           Unregister a service

           @param service to unregister
           @since ARP1.0
        */
        ServiceBridge.prototype.unregisterService = function (service) {
        };
        /**
           Unregister all services.

           @since ARP1.0
        */
        ServiceBridge.prototype.unregisterServices = function () {
        };
        /**
           Check whether a service by the given service is already registered.

           @param service Service to check
           @return True if the service is registered, false otherwise.
           @since ARP1.0
        */
        ServiceBridge.prototype.isRegistered_service = function (service) {
            return null;
        };
        /**
           Check whether a service by the given name is registered.

           @param serviceName Name of service.
           @return True if the service is registered, false otherwise.
           @since ARP1.0
        */
        ServiceBridge.prototype.isRegistered_serviceName = function (serviceName) {
            return null;
        };
        return ServiceBridge;
    })(Adaptive.BaseCommunicationBridge);
    Adaptive.ServiceBridge = ServiceBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceBridge.js.map