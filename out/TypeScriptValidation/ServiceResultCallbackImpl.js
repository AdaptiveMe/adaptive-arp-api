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
///<reference path="BaseCallbackImpl.ts"/>
///<reference path="IServiceResultCallback.ts"/>
///<reference path="IServiceResultCallbackError.ts"/>
///<reference path="IServiceResultCallbackWarning.ts"/>
///<reference path="ServiceResponse.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Services operations
       Auto-generated implementation of IServiceResultCallback specification.
    */
    var ServiceResultCallbackImpl = (function (_super) {
        __extends(ServiceResultCallbackImpl, _super);
        /**
           Constructor with callback id.

           @param id  The id of the callback.
        */
        function ServiceResultCallbackImpl(id) {
            _super.call(this, id);
        }
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        ServiceResultCallbackImpl.prototype.onError = function (error) {
        };
        /**
           This method is called on Result

           @param response data
           @since ARP1.0
        */
        ServiceResultCallbackImpl.prototype.onResult = function (response) {
        };
        /**
           This method is called on Warning

           @param response data
           @param warning  returned by the platform
           @since ARP1.0
        */
        ServiceResultCallbackImpl.prototype.onWarning = function (response, warning) {
        };
        return ServiceResultCallbackImpl;
    })(Adaptive.BaseCallbackImpl);
    Adaptive.ServiceResultCallbackImpl = ServiceResultCallbackImpl;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceResultCallbackImpl.js.map