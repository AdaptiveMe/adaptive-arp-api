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
///<reference path="BasePIMBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBasePIM.ts"/>
///<reference path="IMessaging.ts"/>
///<reference path="IMessagingCallback.ts"/>
///<reference path="MessagingCallback.ts"/>
module Adaptive {

     /**
        Interface for Managing the Messaging operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class MessagingBridge extends BasePIMBridge implements IMessaging {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Send text SMS

             @param number   to send
             @param text     to send
             @param callback with the result
             @since ARP1.0
          */
          sendSMS(number : string, text : string, callback : IMessagingCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(number));
               arParams.push(JSON.stringify(text));
               var ar : APIRequest = new APIRequest("IMessaging","sendSMS",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredMessagingCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'MessagingBridge.sendSMS' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredMessagingCallback.remove(""+callback.getId());
                    callback.onError(IMessagingCallbackError.Unknown)
               }
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
