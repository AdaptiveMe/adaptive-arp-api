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

///<reference path="BaseListenerImpl.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="ILifecycleListener.ts"/>
///<reference path="ILifecycleListenerError.ts"/>
///<reference path="ILifecycleListenerWarning.ts"/>
///<reference path="Lifecycle.ts"/>

module Adaptive {

     /**
        Interface for Managing the Lifecycle listeners
        Auto-generated implementation of ILifecycleListener specification.
     */
     export class LifecycleListenerImpl extends BaseListenerImpl implements ILifecycleListener {

          onErrorFunction : (error : ILifecycleListenerError) => Function;
          onResultFunction : (lifecycle : Lifecycle) => Function;
          onWarningFunction : (lifecycle : Lifecycle, warning : ILifecycleListenerWarning) => Function;

          /**
             Constructor with anonymous handler functions for listener.

             @param onErrorFunction Function receiving parameters of type: ILifecycleListenerError
             @param onResultFunction Function receiving parameters of type: Lifecycle
             @param onWarningFunction Function receiving parameters of type: Lifecycle, ILifecycleListenerWarning
          */
          constructor(onErrorFunction : (error : ILifecycleListenerError) => Function, onResultFunction : (lifecycle : Lifecycle) => Function, onWarningFunction : (lifecycle : Lifecycle, warning : ILifecycleListenerWarning) => Function) {
               super(++registeredCounter);
               if (onWarningFunction == null) {
                    console.error("ERROR: LifecycleListenerImpl onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: LifecycleListenerImpl onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onErrorFunction == null) {
                    console.error("ERROR: LifecycleListenerImpl onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
          }

          /**
             No data received - error condition, not authorized or hardware not available.

             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          public onError(error : ILifecycleListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: LifecycleListenerImpl contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Called when lifecycle changes somehow.

             @param lifecycle Lifecycle element
             @since ARP1.0
          */
          public onResult(lifecycle : Lifecycle) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: LifecycleListenerImpl contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(lifecycle);
               }
          }

          /**
             Data received with warning

             @param lifecycle Lifecycle element
             @param warning Type of warning encountered during reading.
             @since ARP1.0
          */
          public onWarning(lifecycle : Lifecycle, warning : ILifecycleListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: LifecycleListenerImpl contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(lifecycle, warning);
               }
          }

     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
