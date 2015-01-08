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
var Adaptive;
(function (Adaptive) {
    /**
       Enumeration IAdaptiveRPGroup
    */
    var IAdaptiveRPGroup = (function () {
        function IAdaptiveRPGroup(value) {
            this.value = value;
        }
        IAdaptiveRPGroup.prototype.toString = function () {
            return this.value;
        };
        IAdaptiveRPGroup.Application = new IAdaptiveRPGroup("Application");
        IAdaptiveRPGroup.Commerce = new IAdaptiveRPGroup("Commerce");
        IAdaptiveRPGroup.Communication = new IAdaptiveRPGroup("Communication");
        IAdaptiveRPGroup.Data = new IAdaptiveRPGroup("Data");
        IAdaptiveRPGroup.Media = new IAdaptiveRPGroup("Media");
        IAdaptiveRPGroup.Notification = new IAdaptiveRPGroup("Notification");
        IAdaptiveRPGroup.PIM = new IAdaptiveRPGroup("PIM");
        IAdaptiveRPGroup.Reader = new IAdaptiveRPGroup("Reader");
        IAdaptiveRPGroup.Security = new IAdaptiveRPGroup("Security");
        IAdaptiveRPGroup.Sensor = new IAdaptiveRPGroup("Sensor");
        IAdaptiveRPGroup.Social = new IAdaptiveRPGroup("Social");
        IAdaptiveRPGroup.System = new IAdaptiveRPGroup("System");
        IAdaptiveRPGroup.UI = new IAdaptiveRPGroup("UI");
        IAdaptiveRPGroup.Util = new IAdaptiveRPGroup("Util");
        IAdaptiveRPGroup.Kernel = new IAdaptiveRPGroup("Kernel");
        IAdaptiveRPGroup.Unknown = new IAdaptiveRPGroup("Unknown");
        return IAdaptiveRPGroup;
    })();
    Adaptive.IAdaptiveRPGroup = IAdaptiveRPGroup;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IAdaptiveRPGroup.js.map