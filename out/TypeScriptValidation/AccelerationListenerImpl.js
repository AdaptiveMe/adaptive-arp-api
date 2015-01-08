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
///<reference path="Acceleration.ts"/>
///<reference path="BaseListenerImpl.ts"/>
///<reference path="IAccelerationListener.ts"/>
///<reference path="IAccelerationListenerError.ts"/>
///<reference path="IAccelerationListenerWarning.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface defines the response methods of the acceleration operations
       Auto-generated implementation of IAccelerationListener specification.
    */
    var AccelerationListenerImpl = (function (_super) {
        __extends(AccelerationListenerImpl, _super);
        /**
           Constructor with listener id.

           @param id  The id of the listener.
        */
        function AccelerationListenerImpl(id) {
            _super.call(this, id);
        }
        /**
           No data received - error condition, not authorized or hardware not available. This will be reported once for the
listener and subsequently, the listener will be deactivated and removed from the internal list of listeners.

           @param error Error fired
           @since ARP1.0
        */
        AccelerationListenerImpl.prototype.onError = function (error) {
        };
        /**
           Correct data received.

           @param acceleration Acceleration received
           @since ARP1.0
        */
        AccelerationListenerImpl.prototype.onResult = function (acceleration) {
        };
        /**
           Data received with warning - ie. Needs calibration.

           @param acceleration Acceleration received
           @param warning      Warning fired
           @since ARP1.0
        */
        AccelerationListenerImpl.prototype.onWarning = function (acceleration, warning) {
        };
        return AccelerationListenerImpl;
    })(Adaptive.BaseListenerImpl);
    Adaptive.AccelerationListenerImpl = AccelerationListenerImpl;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=AccelerationListenerImpl.js.map