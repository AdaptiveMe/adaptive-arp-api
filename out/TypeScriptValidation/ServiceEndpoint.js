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
///<reference path="APIBean.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing a remote or local service access end-point.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceEndpoint = (function (_super) {
        __extends(ServiceEndpoint, _super);
        /**
           Constructor with parameters

           @param host   Remote service host
           @param path   Remote service Path
           @param port   Remote service Port
           @param proxy  Proxy url "http://IP_ADDRESS:PORT_NUMBER"
           @param scheme Remote service scheme
           @since ARP1.0
        */
        function ServiceEndpoint(host, path, port, proxy, scheme) {
            _super.call(this);
            this.host = host;
            this.path = path;
            this.port = port;
            this.proxy = proxy;
            this.scheme = scheme;
        }
        /**
           Returns the Remote service host

           @return Remote service host
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getHost = function () {
            return this.host;
        };
        /**
           Set the Remote service host

           @param host Remote service host
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setHost = function (host) {
            this.host = host;
        };
        /**
           Returns the Remote service Path

           @return Remote service Path
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getPath = function () {
            return this.path;
        };
        /**
           Set the Remote service Path

           @param path Remote service Path
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setPath = function (path) {
            this.path = path;
        };
        /**
           Returns the Remote service Port

           @return Remote service Port
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getPort = function () {
            return this.port;
        };
        /**
           Set the Remote service Port

           @param port Remote service Port
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setPort = function (port) {
            this.port = port;
        };
        /**
           Return the Proxy url

           @return Proxy url
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getProxy = function () {
            return this.proxy;
        };
        /**
           Set the Proxy url

           @param proxy Proxy url
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setProxy = function (proxy) {
            this.proxy = proxy;
        };
        /**
           Returns the Remote service scheme

           @return Remote service scheme
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getScheme = function () {
            return this.scheme;
        };
        /**
           Set the Remote service scheme

           @param scheme Remote service scheme
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setScheme = function (scheme) {
            this.scheme = scheme;
        };
        return ServiceEndpoint;
    })(Adaptive.APIBean);
    Adaptive.ServiceEndpoint = ServiceEndpoint;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceEndpoint.js.map