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
///<reference path="Endpoint.ts"/>
///<reference path="IServiceMethod.ts"/>
///<reference path="IServiceType.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Represents an instance of a service.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Service = (function () {
        /**
           Constructor used by the implementation

           @param endpoint
           @param name
           @param method
           @param type
           @since ARP1.0
        */
        function Service(endpoint, name, method, type) {
            this.endpoint = endpoint;
            this.name = name;
            this.method = method;
            this.type = type;
        }
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        Service.prototype.getMethod = function () {
            return this.method;
        };
        /**
           Set the method

           @param method
           @since ARP1.0
        */
        Service.prototype.setMethod = function (method) {
            this.method = method;
        };
        /**
           Returns the type

           @return type
           @since ARP1.0
        */
        Service.prototype.getType = function () {
            return this.type;
        };
        /**
           Set the type

           @param type
           @since ARP1.0
        */
        Service.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           Returns the endpoint

           @return endpoint
           @since ARP1.0
        */
        Service.prototype.getEndpoint = function () {
            return this.endpoint;
        };
        /**
           Set the endpoint

           @param endpoint
           @since ARP1.0
        */
        Service.prototype.setEndpoint = function (endpoint) {
            this.endpoint = endpoint;
        };
        /**
           Returns the name

           @return name
           @since ARP1.0
        */
        Service.prototype.getName = function () {
            return this.name;
        };
        /**
           Set the name

           @param name
           @since ARP1.0
        */
        Service.prototype.setName = function (name) {
            this.name = name;
        };
        return Service;
    })();
    Adaptive.Service = Service;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Service.js.map