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
///<reference path="Geolocation.ts"/>
///<reference path="IGeolocationListener.ts"/>
///<reference path="IGeolocationListenerError.ts"/>
///<reference path="IGeolocationListenerWarning.ts"/>

module Adaptive {

     /**
        Interface for Managing the Geolocation results
        Auto-generated implementation of IGeolocationListener specification.
     */
     export class GeolocationListenerImpl extends BaseListenerImpl implements IGeolocationListener {

          onErrorFunction : (error : IGeolocationListenerError) => Function;
          onResultFunction : (geolocation : Geolocation) => Function;
          onWarningFunction : (geolocation : Geolocation, warning : IGeolocationListenerWarning) => Function;

          /**
             Constructor with anonymous handler functions for listener.

             @param onErrorFunction Function receiving parameters of type: IGeolocationListenerError
             @param onResultFunction Function receiving parameters of type: Geolocation
             @param onWarningFunction Function receiving parameters of type: Geolocation, IGeolocationListenerWarning
          */
          constructor(onErrorFunction : (error : IGeolocationListenerError) => Function, onResultFunction : (geolocation : Geolocation) => Function, onWarningFunction : (geolocation : Geolocation, warning : IGeolocationListenerWarning) => Function) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: GeolocationListenerImpl onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: GeolocationListenerImpl onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: GeolocationListenerImpl onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             No data received - error condition, not authorized or hardware not available.

             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          public onError(error : IGeolocationListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: GeolocationListenerImpl contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Correct data received.

             @param geolocation Geolocation Bean
             @since ARP1.0
          */
          public onResult(geolocation : Geolocation) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: GeolocationListenerImpl contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(geolocation);
               }
          }

          /**
             Data received with warning - ie. HighDoP

             @param geolocation Geolocation Bean
             @param warning Type of warning encountered during reading.
             @since ARP1.0
          */
          public onWarning(geolocation : Geolocation, warning : IGeolocationListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: GeolocationListenerImpl contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(geolocation, warning);
               }
          }

     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
