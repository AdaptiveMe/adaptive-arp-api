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
///<reference path="BaseSystemBridge.ts"/>
///<reference path="ButtonListener.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="DeviceInfo.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSystem.ts"/>
///<reference path="IButtonListener.ts"/>
///<reference path="IDevice.ts"/>
///<reference path="Locale.ts"/>
module Adaptive {

     /**
        Interface for Managing the Device operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class DeviceBridge extends BaseSystemBridge implements IDevice {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Register a new listener that will receive button events.

             @param listener to be registered.
             @since ARP1.0
          */
          addButtonListener(listener : IButtonListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IDevice","addButtonListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Add listener reference to local dictionary.
                    registeredButtonListener.add(""+listener.getId(), listener);
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.addButtonListener' request.");
               }
          }

          /**
             Returns the device information for the current device executing the runtime.

             @return DeviceInfo for the current device.
             @since ARP1.0
          */
          getDeviceInfo() : DeviceInfo {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IDevice","getDeviceInfo",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : DeviceInfo = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'DeviceBridge.getDeviceInfo' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.getDeviceInfo' request.");
               }
               return response;
          }

          /**
             Gets the current Locale for the device.

             @return The current Locale information.
             @since ARP1.0
          */
          getLocaleCurrent() : Locale {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IDevice","getLocaleCurrent",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : Locale = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'DeviceBridge.getLocaleCurrent' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.getLocaleCurrent' request.");
               }
               return response;
          }

          /**
             De-registers an existing listener from receiving button events.

             @param listener to be removed.
             @since ARP1.0
          */
          removeButtonListener(listener : IButtonListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IDevice","removeButtonListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove listener reference from local dictionary.
                    registeredButtonListener.remove(""+listener.getId());
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.removeButtonListener' request.");
               }
          }

          /**
             Removed all existing listeners from receiving button events.

             @since ARP1.0
          */
          removeButtonListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IDevice","removeButtonListeners",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove all listeners references from local dictionary.
                    var keys = registeredButtonListener.keys();
                    for (var key in keys) {
                         registeredButtonListener.remove(key);
                    }
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.removeButtonListeners' request.");
               }
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
