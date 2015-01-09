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

///<reference path="Acceleration.ts"/>
///<reference path="BaseListenerImpl.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAccelerationListener.ts"/>
///<reference path="IAccelerationListenerError.ts"/>
///<reference path="IAccelerationListenerWarning.ts"/>

module Adaptive {

     /**
        Interface defines the response methods of the acceleration operations
        Auto-generated implementation of IAccelerationListener specification.
     */
     export class AccelerationListenerImpl extends BaseListenerImpl implements IAccelerationListener {

          onErrorFunction : (error : IAccelerationListenerError) => Function;
          onResultFunction : (acceleration : Acceleration) => Function;
          onWarningFunction : (acceleration : Acceleration, warning : IAccelerationListenerWarning) => Function;

          /**
             Constructor with anonymous handler functions for listener.

             @param onErrorFunction Function receiving parameters of type: IAccelerationListenerError
             @param onResultFunction Function receiving parameters of type: Acceleration
             @param onWarningFunction Function receiving parameters of type: Acceleration, IAccelerationListenerWarning
          */
          constructor(onErrorFunction : (error : IAccelerationListenerError) => Function, onResultFunction : (acceleration : Acceleration) => Function, onWarningFunction : (acceleration : Acceleration, warning : IAccelerationListenerWarning) => Function) {
               super(++registeredCounter);
               if (onWarningFunction == null) {
                    console.error("ERROR: AccelerationListenerImpl onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: AccelerationListenerImpl onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onErrorFunction == null) {
                    console.error("ERROR: AccelerationListenerImpl onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
          }

          /**
             No data received - error condition, not authorized or hardware not available. This will be reported once for the
listener and subsequently, the listener will be deactivated and removed from the internal list of listeners.

             @param error Error fired
             @since ARP1.0
          */
          public onError(error : IAccelerationListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: AccelerationListenerImpl contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Correct data received.

             @param acceleration Acceleration received
             @since ARP1.0
          */
          public onResult(acceleration : Acceleration) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: AccelerationListenerImpl contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(acceleration);
               }
          }

          /**
             Data received with warning - ie. Needs calibration.

             @param acceleration Acceleration received
             @param warning      Warning fired
             @since ARP1.0
          */
          public onWarning(acceleration : Acceleration, warning : IAccelerationListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: AccelerationListenerImpl contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(acceleration, warning);
               }
          }

     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
