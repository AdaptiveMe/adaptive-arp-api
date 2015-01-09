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
///<reference path="CommonUtil.ts"/>
///<reference path="IContactPhotoResultCallback.ts"/>
///<reference path="IContactPhotoResultCallbackError.ts"/>
///<reference path="IContactPhotoResultCallbackWarning.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Contact operations
       Auto-generated implementation of IContactPhotoResultCallback specification.
    */
    var ContactPhotoResultCallbackImpl = (function (_super) {
        __extends(ContactPhotoResultCallbackImpl, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: IContactPhotoResultCallbackError
           @param onResultFunction Function receiving parameters of type: Array<number>
           @param onWarningFunction Function receiving parameters of type: Array<number>, IContactPhotoResultCallbackWarning
        */
        function ContactPhotoResultCallbackImpl(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: ContactPhotoResultCallbackImpl onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: ContactPhotoResultCallbackImpl onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: ContactPhotoResultCallbackImpl onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        ContactPhotoResultCallbackImpl.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: ContactPhotoResultCallbackImpl contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           This method is called on Result

           @param contactPhoto returned by the platform
           @since ARP1.0
        */
        ContactPhotoResultCallbackImpl.prototype.onResult = function (contactPhoto) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: ContactPhotoResultCallbackImpl contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(contactPhoto);
            }
        };
        /**
           This method is called on Warning

           @param contactPhoto returned by the platform
           @param warning      returned by the platform
           @since ARP1.0
        */
        ContactPhotoResultCallbackImpl.prototype.onWarning = function (contactPhoto, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: ContactPhotoResultCallbackImpl contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(contactPhoto, warning);
            }
        };
        return ContactPhotoResultCallbackImpl;
    })(Adaptive.BaseCallbackImpl);
    Adaptive.ContactPhotoResultCallbackImpl = ContactPhotoResultCallbackImpl;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ContactPhotoResultCallbackImpl.js.map