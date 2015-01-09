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
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseCallback.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Base application for Callback purposes
       Auto-generated implementation of IBaseCallback specification.
    */
    var BaseCallbackImpl = (function () {
        /**
           Constructor with callback id.

           @param id  The id of the callback.
        */
        function BaseCallbackImpl(id) {
            this.id = id;
            this.apiGroup = Adaptive.IAdaptiveRPGroup.Application;
        }
        /**
           Get the listener id.
           @return long with the identifier of the callback.
        */
        BaseCallbackImpl.prototype.getId = function () {
            return this.id;
        };
        /**
           Return the API group for the given interface.
        */
        BaseCallbackImpl.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        return BaseCallbackImpl;
    })();
    Adaptive.BaseCallbackImpl = BaseCallbackImpl;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=BaseCallbackImpl.js.map