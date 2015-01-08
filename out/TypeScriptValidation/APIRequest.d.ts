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
declare module Adaptive {
    /**
       Structure representing a HTML5 request to the native API.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    class APIRequest {
        /**
           Identifier of callback or listener for async operations.
        */
        asyncId: number;
        /**
           String representing the bridge type to obtain.
        */
        bridgeType: string;
        /**
           String representing the method name to call.
        */
        methodName: string;
        /**
           Parameters of the request as JSON formatted strings.
        */
        parameters: string[];
        /**
           Constructor with all the parameters

           @param bridgeType Name of the bridge to be invoked.
           @param methodName Name of the method
           @param parameters Array of parameters as JSON formatted strings.
           @param asyncId    Id of callback or listener or zero if none for synchronous calls.
           @since ARP1.0
        */
        constructor(bridgeType: string, methodName: string, parameters: string[], asyncId: number);
        /**
           Returns the callback or listener id assigned to this request OR zero if there is no associated callback or
listener.

           @return long with the unique id of the callback or listener, or zero if there is no associated async event.
        */
        getAsyncId(): number;
        /**
           Sets the callback or listener id to the request.

           @param asyncId The unique id of the callback or listener.
        */
        setAsyncId(asyncId: number): void;
        /**
           Bridge Type Getter

           @return Bridge Type
           @since ARP1.0
        */
        getBridgeType(): string;
        /**
           Bridge Type Setter

           @param bridgeType Bridge Type
           @since ARP1.0
        */
        setBridgeType(bridgeType: string): void;
        /**
           Method name Getter

           @return Method name
           @since ARP1.0
        */
        getMethodName(): string;
        /**
           Method name Setter

           @param methodName Method name
           @since ARP1.0
        */
        setMethodName(methodName: string): void;
        /**
           Parameters Getter

           @return Parameters
           @since ARP1.0
        */
        getParameters(): string[];
        /**
           Parameters Setter

           @param parameters Parameters, JSON formatted strings of objects.
           @since ARP1.0
        */
        setParameters(parameters: string[]): void;
    }
}
