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

///<reference path="APIRequest.ts"/>
///<reference path="BaseSensorBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="GeolocationListener.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSensor.ts"/>
///<reference path="IGeolocation.ts"/>
///<reference path="IGeolocationListener.ts"/>
module Adaptive {

     /**
        Interface for Managing the Geolocation operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class GeolocationBridge extends BaseSensorBridge implements IGeolocation {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Register a new listener that will receive geolocation events.

             @param listener to be registered.
             @since ARP1.0
          */
          addGeolocationListener(listener : IGeolocationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IGeolocation","addGeolocationListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Add listener reference to local dictionary.
                    registeredGeolocationListener.add(""+listener.getId(), listener);
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.addGeolocationListener' request.");
               }
          }

          /**
             De-registers an existing listener from receiving geolocation events.

             @param listener to be registered.
             @since ARP1.0
          */
          removeGeolocationListener(listener : IGeolocationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IGeolocation","removeGeolocationListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove listener reference from local dictionary.
                    registeredGeolocationListener.remove(""+listener.getId());
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.removeGeolocationListener' request.");
               }
          }

          /**
             Removed all existing listeners from receiving geolocation events.

             @since ARP1.0
          */
          removeGeolocationListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IGeolocation","removeGeolocationListeners",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove all listeners references from local dictionary.
                    var keys = registeredGeolocationListener.keys();
                    for (var key in keys) {
                         registeredGeolocationListener.remove(key);
                    }
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.removeGeolocationListeners' request.");
               }
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
