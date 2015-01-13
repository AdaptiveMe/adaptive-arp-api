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
///<reference path="BaseMediaBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseMedia.ts"/>
///<reference path="IVideo.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Video operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var VideoBridge = (function (_super) {
        __extends(VideoBridge, _super);
        /**
           Default constructor.
        */
        function VideoBridge() {
            _super.call(this);
        }
        /**
           Play url video stream

           @param url of the video
           @since ARP1.0
        */
        VideoBridge.prototype.playStream = function (url) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(url));
            var ar = new Adaptive.APIRequest("IVideo", "playStream", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'VideoBridge.playStream' request.");
            }
        };
        return VideoBridge;
    })(Adaptive.BaseMediaBridge);
    Adaptive.VideoBridge = VideoBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=VideoBridge.js.map