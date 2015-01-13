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
///<reference path="AccelerationListener.ts"/>
///<reference path="BaseSensorBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAcceleration.ts"/>
///<reference path="IAccelerationListener.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSensor.ts"/>
module Adaptive {

     /**
        Interface defining methods about the acceleration sensor

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class AccelerationBridge extends BaseSensorBridge implements IAcceleration {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Register a new listener that will receive acceleration events.

             @param listener to be registered.
             @since ARP1.0
          */
          addAccelerationListener(listener : IAccelerationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IAcceleration","addAccelerationListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Add listener reference to local dictionary.
                    registeredAccelerationListener.add(""+listener.getId(), listener);
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'AccelerationBridge.addAccelerationListener' request.");
               }
          }

          /**
             De-registers an existing listener from receiving acceleration events.

             @param listener to be registered.
             @since ARP1.0
          */
          removeAccelerationListener(listener : IAccelerationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IAcceleration","removeAccelerationListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove listener reference from local dictionary.
                    registeredAccelerationListener.remove(""+listener.getId());
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'AccelerationBridge.removeAccelerationListener' request.");
               }
          }

          /**
             Removed all existing listeners from receiving acceleration events.

             @since ARP1.0
          */
          removeAccelerationListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IAcceleration","removeAccelerationListeners",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove all listeners references from local dictionary.
                    var keys = registeredAccelerationListener.keys();
                    for (var key in keys) {
                         registeredAccelerationListener.remove(key);
                    }
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'AccelerationBridge.removeAccelerationListeners' request.");
               }
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
