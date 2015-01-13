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
///<reference path="BaseApplicationBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseApplication.ts"/>
///<reference path="ILifecycle.ts"/>
///<reference path="ILifecycleListener.ts"/>
///<reference path="LifecycleListener.ts"/>
module Adaptive {

     /**
        Interface for Managing the Lifecycle listeners

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class LifecycleBridge extends BaseApplicationBridge implements ILifecycle {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Add the listener for the lifecycle of the app

             @param listener Lifecycle listener
             @since ARP1.0
          */
          addLifecycleListener(listener : ILifecycleListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("ILifecycle","addLifecycleListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Add listener reference to local dictionary.
                    registeredLifecycleListener.add(""+listener.getId(), listener);
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.addLifecycleListener' request.");
               }
          }

          /**
             Whether the application is in background or not

             @return true if the application is in background;false otherwise
             @since ARP1.0
          */
          isBackground() : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("ILifecycle","isBackground",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'LifecycleBridge.isBackground' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.isBackground' request.");
               }
               return response;
          }

          /**
             Un-registers an existing listener from receiving lifecycle events.

             @param listener Lifecycle listener
             @since ARP1.0
          */
          removeLifecycleListener(listener : ILifecycleListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("ILifecycle","removeLifecycleListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove listener reference from local dictionary.
                    registeredLifecycleListener.remove(""+listener.getId());
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.removeLifecycleListener' request.");
               }
          }

          /**
             Removes all existing listeners from receiving lifecycle events.

             @since ARP1.0
          */
          removeLifecycleListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("ILifecycle","removeLifecycleListeners",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove all listeners references from local dictionary.
                    var keys = registeredLifecycleListener.keys();
                    for (var key in keys) {
                         registeredLifecycleListener.remove(key);
                    }
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.removeLifecycleListeners' request.");
               }
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
