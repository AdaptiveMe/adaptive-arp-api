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

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

module Adaptive {

     /**
        Structure representing a HTML5 request to the native API.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export class APIRequest {

          /**
             String representing the method name to call
          */
          methodName : string;
          /**
             Types of the request parameters
          */
          parameterTypes : Array<string>;
          /**
             Parameters of the request
          */
          parameters : Array<any>;
          /**
             Constructor with all the parameters

             @param methodName     Name of the method
             @param parameters     Array of parameters
             @param parameterTypes Array of parameters types
             @since ARP1.0
          */
          constructor(methodName: string, parameters: Array<any>, parameterTypes: Array<string>) {
               this.methodName = methodName;
               this.parameters = parameters;
               this.parameterTypes = parameterTypes;
          }

          /**
             Method name Getter

             @return Method name
             @since ARP1.0
          */
          getMethodName() : string {
               return this.methodName;
          }

          /**
             Method name Setter

             @param methodName Method name
             @since ARP1.0
          */
          setMethodName(methodName: string) {
               this.methodName = methodName;
          }

          /**
             Parameter types Getter

             @return Parameter types
             @since ARP1.0
          */
          getParameterTypes() : Array<string> {
               return this.parameterTypes;
          }

          /**
             Parameter types setter

             @param parameterTypes Parameter types
             @since ARP1.0
          */
          setParameterTypes(parameterTypes: Array<string>) {
               this.parameterTypes = parameterTypes;
          }

          /**
             Parameters Getter

             @return Parameters
             @since ARP1.0
          */
          getParameters() : Array<any> {
               return this.parameters;
          }

          /**
             Parameters Setter

             @param parameters Parameters
             @since ARP1.0
          */
          setParameters(parameters: Array<any>) {
               this.parameters = parameters;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
