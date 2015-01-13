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
///<reference path="BaseApplicationBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseApplication.ts"/>
///<reference path="IGlobalization.ts"/>
///<reference path="KeyPair.ts"/>
///<reference path="Locale.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Globalization results

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var GlobalizationBridge = (function (_super) {
        __extends(GlobalizationBridge, _super);
        /**
           Default constructor.
        */
        function GlobalizationBridge() {
            _super.call(this);
        }
        /**
           List of supported locales for the application

           @return List of locales
           @since ARP1.0
        */
        GlobalizationBridge.prototype.getLocaleSupportedDescriptors = function () {
            // Create and populate API request.
            var arParams = [];
            var ar = new Adaptive.APIRequest("IGlobalization", "getLocaleSupportedDescriptors", arParams, -1);
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
                    console.error("ERROR: 'GlobalizationBridge.getLocaleSupportedDescriptors' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'GlobalizationBridge.getLocaleSupportedDescriptors' request.");
            }
            return response;
        };
        /**
           Gets the text/message corresponding to the given key and locale.

           @param key    to match text
           @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
           @return Localized text.
           @since ARP1.0
        */
        GlobalizationBridge.prototype.getResourceLiteral = function (key, locale) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(key));
            arParams.push(JSON.stringify(locale));
            var ar = new Adaptive.APIRequest("IGlobalization", "getResourceLiteral", arParams, -1);
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
                    console.error("ERROR: 'GlobalizationBridge.getResourceLiteral' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'GlobalizationBridge.getResourceLiteral' request.");
            }
            return response;
        };
        /**
           Gets the full application configured literals (key/message pairs) corresponding to the given locale.

           @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
           @return Localized texts in the form of an object.
           @since ARP1.0
        */
        GlobalizationBridge.prototype.getResourceLiterals = function (locale) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(locale));
            var ar = new Adaptive.APIRequest("IGlobalization", "getResourceLiterals", arParams, -1);
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
                    console.error("ERROR: 'GlobalizationBridge.getResourceLiterals' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'GlobalizationBridge.getResourceLiterals' request.");
            }
            return response;
        };
        return GlobalizationBridge;
    })(Adaptive.BaseApplicationBridge);
    Adaptive.GlobalizationBridge = GlobalizationBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=GlobalizationBridge.js.map