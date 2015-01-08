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
       Enumeration LifecycleState
    */
    var LifecycleState = (function () {
        function LifecycleState(value) {
            this.value = value;
        }
        LifecycleState.prototype.toString = function () {
            return this.value;
        };
        LifecycleState.Starting = new LifecycleState("Starting");
        LifecycleState.Started = new LifecycleState("Started");
        LifecycleState.Running = new LifecycleState("Running");
        LifecycleState.Pausing = new LifecycleState("Pausing");
        LifecycleState.PausedIdle = new LifecycleState("PausedIdle");
        LifecycleState.PausedRun = new LifecycleState("PausedRun");
        LifecycleState.Resuming = new LifecycleState("Resuming");
        LifecycleState.Stopping = new LifecycleState("Stopping");
        LifecycleState.Unknown = new LifecycleState("Unknown");
        return LifecycleState;
    })();
    Adaptive.LifecycleState = LifecycleState;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=LifecycleState.js.map