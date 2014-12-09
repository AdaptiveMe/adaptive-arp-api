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
       Enumeration IAppContextType
    */
    var IAppContextType = (function () {
        function IAppContextType(value) {
            this.value = value;
        }
        IAppContextType.prototype.toString = function () {
            return this.value;
        };
        IAppContextType.iOS = new IAppContextType("iOS");
        IAppContextType.OSX = new IAppContextType("OSX");
        IAppContextType.Windows = new IAppContextType("Windows");
        IAppContextType.WindowsPhone = new IAppContextType("WindowsPhone");
        IAppContextType.Android = new IAppContextType("Android");
        IAppContextType.Linux = new IAppContextType("Linux");
        IAppContextType.Blackberry = new IAppContextType("Blackberry");
        IAppContextType.Tizen = new IAppContextType("Tizen");
        IAppContextType.FirefoxOS = new IAppContextType("FirefoxOS");
        IAppContextType.Chromium = new IAppContextType("Chromium");
        IAppContextType.Unspecified = new IAppContextType("Unspecified");
        IAppContextType.Unknown = new IAppContextType("Unknown");
        return IAppContextType;
    })();
    Adaptive.IAppContextType = IAppContextType;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IAppContextType.js.map