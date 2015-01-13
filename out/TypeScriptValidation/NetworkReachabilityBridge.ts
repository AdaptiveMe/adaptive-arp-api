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
///<reference path="BaseCommunicationBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseCommunication.ts"/>
///<reference path="INetworkReachability.ts"/>
///<reference path="INetworkReachabilityCallback.ts"/>
///<reference path="NetworkReachabilityCallback.ts"/>
module Adaptive {

     /**
        Interface for Managing the Network reachability operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class NetworkReachabilityBridge extends BaseCommunicationBridge implements INetworkReachability {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Whether there is connectivity to a host, via domain name or ip address, or not.

             @param host     domain name or ip address of host.
             @param callback Callback called at the end.
             @since ARP1.0
          */
          isNetworkReachable(host : string, callback : INetworkReachabilityCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(host));
               var ar : APIRequest = new APIRequest("INetworkReachability","isNetworkReachable",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredNetworkReachabilityCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'NetworkReachabilityBridge.isNetworkReachable' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredNetworkReachabilityCallback.remove(""+callback.getId());
                    callback.onError(INetworkReachabilityCallbackError.Unknown)
               }
          }

          /**
             Whether there is connectivity to an url of a service or not.

             @param url      to look for
             @param callback Callback called at the end
             @since ARP1.0
          */
          isNetworkServiceReachable(url : string, callback : INetworkReachabilityCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(url));
               var ar : APIRequest = new APIRequest("INetworkReachability","isNetworkServiceReachable",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredNetworkReachabilityCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'NetworkReachabilityBridge.isNetworkServiceReachable' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredNetworkReachabilityCallback.remove(""+callback.getId());
                    callback.onError(INetworkReachabilityCallbackError.Unknown)
               }
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
