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
///<reference path="IBaseListener.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Base application for Listener purposes
       Auto-generated implementation of IBaseListener specification.
    */
    var BaseListener = (function () {
        /**
           Constructor with listener id.

           @param id  The id of the listener.
        */
        function BaseListener(id) {
            this.id = id;
            this.apiGroup = Adaptive.IAdaptiveRPGroup.Application;
        }
        /**
           Get the listener id.
           @return long with the identifier of the listener.
        */
        BaseListener.prototype.getId = function () {
            return this.id;
        };
        /**
           Return the API group for the given interface.
        */
        BaseListener.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           Return the API version for the given interface.
        */
        BaseListener.prototype.getAPIVersion = function () {
            return "v2.0.3";
        };
        return BaseListener;
    })();
    Adaptive.BaseListener = BaseListener;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=BaseListener.js.map