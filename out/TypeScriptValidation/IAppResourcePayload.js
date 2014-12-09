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

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var Adaptive;
(function (Adaptive) {
    /**
       Enumeration IAppResourcePayload
    */
    var IAppResourcePayload = (function () {
        function IAppResourcePayload(value) {
            this.value = value;
        }
        IAppResourcePayload.prototype.toString = function () {
            return this.value;
        };
        IAppResourcePayload.Default = new IAppResourcePayload("Default");
        IAppResourcePayload.Embedded = new IAppResourcePayload("Embedded");
        IAppResourcePayload.Linked = new IAppResourcePayload("Linked");
        IAppResourcePayload.Unknown = new IAppResourcePayload("Unknown");
        return IAppResourcePayload;
    })();
    Adaptive.IAppResourcePayload = IAppResourcePayload;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IAppResourcePayload.js.map