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
///<reference path="INetworkStatus.ts"/>
///<reference path="INetworkStatusListener.ts"/>
///<reference path="NetworkStatusListener.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Network status

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var NetworkStatusBridge = (function (_super) {
        __extends(NetworkStatusBridge, _super);
        /**
           Default constructor.
        */
        function NetworkStatusBridge() {
            _super.call(this);
        }
        /**
           Add the listener for network status changes of the app

           @param listener Listener with the result
           @since ARP1.0
        */
        NetworkStatusBridge.prototype.addNetworkStatusListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var ar = new Adaptive.APIRequest("INetworkStatus", "addNetworkStatusListener", arParams, listener.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
                // Add listener reference to local dictionary.
                Adaptive.registeredNetworkStatusListener.add("" + listener.getId(), listener);
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'NetworkStatusBridge.addNetworkStatusListener' request.");
            }
        };
        /**
           Un-registers an existing listener from receiving network status events.

           @param listener Listener with the result
           @since ARP1.0
        */
        NetworkStatusBridge.prototype.removeNetworkStatusListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var ar = new Adaptive.APIRequest("INetworkStatus", "removeNetworkStatusListener", arParams, listener.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
                // Remove listener reference from local dictionary.
                Adaptive.registeredNetworkStatusListener.remove("" + listener.getId());
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'NetworkStatusBridge.removeNetworkStatusListener' request.");
            }
        };
        /**
           Removes all existing listeners from receiving network status events.

           @since ARP1.0
        */
        NetworkStatusBridge.prototype.removeNetworkStatusListeners = function () {
            // Create and populate API request.
            var arParams = [];
            var ar = new Adaptive.APIRequest("INetworkStatus", "removeNetworkStatusListeners", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
                // Remove all listeners references from local dictionary.
                var keys = Adaptive.registeredNetworkStatusListener.keys();
                for (var key in keys) {
                    Adaptive.registeredNetworkStatusListener.remove(key);
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'NetworkStatusBridge.removeNetworkStatusListeners' request.");
            }
        };
        return NetworkStatusBridge;
    })(Adaptive.BaseCommunicationBridge);
    Adaptive.NetworkStatusBridge = NetworkStatusBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=NetworkStatusBridge.js.map