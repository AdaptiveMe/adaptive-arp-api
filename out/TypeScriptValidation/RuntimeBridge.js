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
///<reference path="BaseSystemBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSystem.ts"/>
///<reference path="IRuntime.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Runtime operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var RuntimeBridge = (function (_super) {
        __extends(RuntimeBridge, _super);
        /**
           Default constructor.
        */
        function RuntimeBridge() {
            _super.call(this);
        }
        /**
           Dismiss the current Application

           @since ARP1.0
        */
        RuntimeBridge.prototype.dismissApplication = function () {
            // Create and populate API request.
            var arParams = [];
            var ar = new Adaptive.APIRequest("IRuntime", "dismissApplication", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'RuntimeBridge.dismissApplication' request.");
            }
        };
        /**
           Whether the application dismiss the splash screen successfully or not

           @return true if the application has dismissed the splash screen;false otherwise
           @since ARP1.0
        */
        RuntimeBridge.prototype.dismissSplashScreen = function () {
            // Create and populate API request.
            var arParams = [];
            var ar = new Adaptive.APIRequest("IRuntime", "dismissSplashScreen", arParams, -1);
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
                    console.error("ERROR: 'RuntimeBridge.dismissSplashScreen' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'RuntimeBridge.dismissSplashScreen' request.");
            }
            return response;
        };
        return RuntimeBridge;
    })(Adaptive.BaseSystemBridge);
    Adaptive.RuntimeBridge = RuntimeBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=RuntimeBridge.js.map