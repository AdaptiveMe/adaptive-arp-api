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
       Enumeration IAppResourceType
    */
    var IAppResourceType = (function () {
        function IAppResourceType(value) {
            this.value = value;
        }
        IAppResourceType.prototype.toString = function () {
            return this.value;
        };
        IAppResourceType.Html = new IAppResourceType("Html");
        IAppResourceType.Css = new IAppResourceType("Css");
        IAppResourceType.JavaScript = new IAppResourceType("JavaScript");
        IAppResourceType.Image = new IAppResourceType("Image");
        IAppResourceType.Video = new IAppResourceType("Video");
        IAppResourceType.Audio = new IAppResourceType("Audio");
        IAppResourceType.Property = new IAppResourceType("Property");
        IAppResourceType.Database = new IAppResourceType("Database");
        IAppResourceType.Other = new IAppResourceType("Other");
        IAppResourceType.Unknown = new IAppResourceType("Unknown");
        return IAppResourceType;
    })();
    Adaptive.IAppResourceType = IAppResourceType;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IAppResourceType.js.map