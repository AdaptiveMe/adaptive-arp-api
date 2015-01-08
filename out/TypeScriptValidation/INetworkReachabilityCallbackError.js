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
       Enumeration INetworkReachabilityCallbackError
    */
    var INetworkReachabilityCallbackError = (function () {
        function INetworkReachabilityCallbackError(value) {
            this.value = value;
        }
        INetworkReachabilityCallbackError.prototype.toString = function () {
            return this.value;
        };
        INetworkReachabilityCallbackError.Forbidden = new INetworkReachabilityCallbackError("Forbidden");
        INetworkReachabilityCallbackError.NotFound = new INetworkReachabilityCallbackError("NotFound");
        INetworkReachabilityCallbackError.MethodNotAllowed = new INetworkReachabilityCallbackError("MethodNotAllowed");
        INetworkReachabilityCallbackError.NotAllowed = new INetworkReachabilityCallbackError("NotAllowed");
        INetworkReachabilityCallbackError.NotAuthenticated = new INetworkReachabilityCallbackError("NotAuthenticated");
        INetworkReachabilityCallbackError.TimeOut = new INetworkReachabilityCallbackError("TimeOut");
        INetworkReachabilityCallbackError.NoResponse = new INetworkReachabilityCallbackError("NoResponse");
        INetworkReachabilityCallbackError.Unreachable = new INetworkReachabilityCallbackError("Unreachable");
        INetworkReachabilityCallbackError.Wrong_Params = new INetworkReachabilityCallbackError("Wrong_Params");
        INetworkReachabilityCallbackError.MalformedUrl = new INetworkReachabilityCallbackError("MalformedUrl");
        INetworkReachabilityCallbackError.DomainUnresolvable = new INetworkReachabilityCallbackError("DomainUnresolvable");
        INetworkReachabilityCallbackError.Unknown = new INetworkReachabilityCallbackError("Unknown");
        return INetworkReachabilityCallbackError;
    })();
    Adaptive.INetworkReachabilityCallbackError = INetworkReachabilityCallbackError;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=INetworkReachabilityCallbackError.js.map