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

    * @version v2.0.2
    
-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing a HTML5 request to the native API.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     public class APIRequest
     {

          /**
             Identifier of callback or listener for async operations.
          */
          public long AsyncId { get; set; }
          /**
             String representing the method name to call
          */
          public string MethodName { get; set; }
          /**
             Types of the request parameters
          */
          public string[] ParameterTypes { get; set; }
          /**
             Parameters of the request as JSON formatted strings.
          */
          public string[] Parameters { get; set; }

          /**
             Default constructor

             @since ARP1.0
          */
          public APIRequest()  {
          }

          /**
             Constructor with method name. No parameters

             @param MethodName Name of the method
             @since ARP1.0
          */
          public APIRequest(string MethodName) : base () {
               this.MethodName = MethodName;
          }

          /**
             Constructor with all the parameters

             @param MethodName     Name of the method
             @param Parameters     Array of parameters as JSON formatted strings.
             @param ParameterTypes Array of parameters types
             @param AsyncId        Id of callback or listener or zero if none for synchronous calls.
             @since ARP1.0
          */
          public APIRequest(string MethodName, string[] Parameters, string[] ParameterTypes, long AsyncId) : base () {
               this.MethodName = MethodName;
               this.Parameters = Parameters;
               this.ParameterTypes = ParameterTypes;
               this.AsyncId = AsyncId;
          }

          /**
             Returns the callback or listener id assigned to this request OR zero if there is no associated callback or
listener.

             @return Long with the unique id of the callback or listener, or zero if there is no associated async event.
          */
          public long GetAsyncId() {
               return this.AsyncId;
          }

          /**
             Sets the callback or listener id to the request.

             @param AsyncId The unique id of the callback or listener.
          */
          public void SetAsyncId(long AsyncId) {
               this.AsyncId = AsyncId;
          }

          /**
             Method name Getter

             @return Method name
             @since ARP1.0
          */
          public string GetMethodName() {
               return this.MethodName;
          }

          /**
             Method name Setter

             @param MethodName Method name
             @since ARP1.0
          */
          public void SetMethodName(string MethodName) {
               this.MethodName = MethodName;
          }

          /**
             Parameter types Getter

             @return Parameter types
             @since ARP1.0
          */
          public string[] GetParameterTypes() {
               return this.ParameterTypes;
          }

          /**
             Parameter types setter

             @param ParameterTypes Parameter types
             @since ARP1.0
          */
          public void SetParameterTypes(string[] ParameterTypes) {
               this.ParameterTypes = ParameterTypes;
          }

          /**
             Parameters Getter

             @return Parameters
             @since ARP1.0
          */
          public string[] GetParameters() {
               return this.Parameters;
          }

          /**
             Parameters Setter

             @param Parameters Parameters, JSON formatted strings of objects.
             @since ARP1.0
          */
          public void SetParameters(string[] Parameters) {
               this.Parameters = Parameters;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
