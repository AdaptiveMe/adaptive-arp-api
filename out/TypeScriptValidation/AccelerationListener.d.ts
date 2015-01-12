/// <reference path="Acceleration.d.ts" />
/// <reference path="BaseListener.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="IAccelerationListener.d.ts" />
/// <reference path="IAccelerationListenerError.d.ts" />
/// <reference path="IAccelerationListenerWarning.d.ts" />
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
declare module Adaptive {
    /**
       Interface defines the response methods of the acceleration operations
       Auto-generated implementation of IAccelerationListener specification.
    */
    /**
       AccelerationListener control dictionary.
    */
    var registeredAccelerationListener: Dictionary<IAccelerationListener>;
    /**
       AccelerationListener global listener handlers.
    */
    function handleAccelerationListenerError(id: number, error: IAccelerationListenerError): void;
    function handleAccelerationListenerResult(id: number, acceleration: Acceleration): void;
    function handleAccelerationListenerWarning(id: number, acceleration: Acceleration, warning: IAccelerationListenerWarning): void;
    class AccelerationListener extends BaseListener implements IAccelerationListener {
        onErrorFunction: (error: IAccelerationListenerError) => void;
        onResultFunction: (acceleration: Acceleration) => void;
        onWarningFunction: (acceleration: Acceleration, warning: IAccelerationListenerWarning) => void;
        /**
           Constructor with anonymous handler functions for listener.

           @param onErrorFunction Function receiving parameters of type: IAccelerationListenerError
           @param onResultFunction Function receiving parameters of type: Acceleration
           @param onWarningFunction Function receiving parameters of type: Acceleration, IAccelerationListenerWarning
        */
        constructor(onErrorFunction: (error: IAccelerationListenerError) => void, onResultFunction: (acceleration: Acceleration) => void, onWarningFunction: (acceleration: Acceleration, warning: IAccelerationListenerWarning) => void);
        /**
           No data received - error condition, not authorized or hardware not available. This will be reported once for the
listener and subsequently, the listener will be deactivated and removed from the internal list of listeners.

           @param error Error fired
           @since ARP1.0
        */
        onError(error: IAccelerationListenerError): void;
        /**
           Correct data received.

           @param acceleration Acceleration received
           @since ARP1.0
        */
        onResult(acceleration: Acceleration): void;
        /**
           Data received with warning - ie. Needs calibration.

           @param acceleration Acceleration received
           @param warning      Warning fired
           @since ARP1.0
        */
        onWarning(acceleration: Acceleration, warning: IAccelerationListenerWarning): void;
    }
}
