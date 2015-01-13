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
///<reference path="INetworkReachability.ts"/>
///<reference path="INetworkReachabilityCallback.ts"/>
///<reference path="NetworkReachabilityCallback.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Network reachability operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var NetworkReachabilityBridge = (function (_super) {
        __extends(NetworkReachabilityBridge, _super);
        /**
           Default constructor.
        */
        function NetworkReachabilityBridge() {
            _super.call(this);
        }
        /**
           Whether there is connectivity to a host, via domain name or ip address, or not.

           @param host     domain name or ip address of host.
           @param callback Callback called at the end.
           @since ARP1.0
        */
        NetworkReachabilityBridge.prototype.isNetworkReachable = function (host, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(host));
            var ar = new Adaptive.APIRequest("INetworkReachability", "isNetworkReachable", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredNetworkReachabilityCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'NetworkReachabilityBridge.isNetworkReachable' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredNetworkReachabilityCallback.remove("" + callback.getId());
                callback.onError(Adaptive.INetworkReachabilityCallbackError.Unknown);
            }
        };
        /**
           Whether there is connectivity to an url of a service or not.

           @param url      to look for
           @param callback Callback called at the end
           @since ARP1.0
        */
        NetworkReachabilityBridge.prototype.isNetworkServiceReachable = function (url, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(url));
            var ar = new Adaptive.APIRequest("INetworkReachability", "isNetworkServiceReachable", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredNetworkReachabilityCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'NetworkReachabilityBridge.isNetworkServiceReachable' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredNetworkReachabilityCallback.remove("" + callback.getId());
                callback.onError(Adaptive.INetworkReachabilityCallbackError.Unknown);
            }
        };
        return NetworkReachabilityBridge;
    })(Adaptive.BaseCommunicationBridge);
    Adaptive.NetworkReachabilityBridge = NetworkReachabilityBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=NetworkReachabilityBridge.js.map