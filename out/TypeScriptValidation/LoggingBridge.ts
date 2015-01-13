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
///<reference path="BaseUtilBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseUtil.ts"/>
///<reference path="ILogging.ts"/>
///<reference path="ILoggingLogLevel.ts"/>
module Adaptive {

     /**
        Interface for Managing the Logging operations

        @author Ferran Vila Conesa
        @since ARP1.0
     */
     export class LoggingBridge extends BaseUtilBridge implements ILogging {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Logs the given message, with the given log level if specified, to the standard platform/environment.

             @param level   Log level
             @param message Message to be logged
             @since ARP1.0
          */
          log_level_message(level : ILoggingLogLevel, message : string) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(level));
               arParams.push(JSON.stringify(message));
               var ar : APIRequest = new APIRequest("ILogging","log_level_message",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LoggingBridge.log_level_message' request.");
               }
          }

          /**
             Logs the given message, with the given log level if specified, to the standard platform/environment.

             @param level    Log level
             @param category Category/tag name to identify/filter the log.
             @param message  Message to be logged
             @since ARP1.0
          */
          log_level_category_message(level : ILoggingLogLevel, category : string, message : string) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(level));
               arParams.push(JSON.stringify(category));
               arParams.push(JSON.stringify(message));
               var ar : APIRequest = new APIRequest("ILogging","log_level_category_message",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LoggingBridge.log_level_category_message' request.");
               }
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
