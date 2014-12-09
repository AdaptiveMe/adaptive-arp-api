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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Created by clozano on 05/12/14.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public class APIRequest
     {

          /**
             { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }
          */
          public string MethodName { get; set; }
          public string[] ParameterTypes { get; set; }
          public Object[] Parameters { get; set; }

          /**
             Convenience constructor.
          */
          public APIRequest()  {
          }

          /**
             Gets { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }

             @return methodName { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }
          */
          public string GetMethodName() {
               return this.MethodName;
          }

          /**
             Sets { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }

             @param methodName { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }
          */
          public void SetMethodName(string MethodName) {
               this.MethodName = MethodName;
          }

          /**
             Gets null

             @return parameterTypes null
          */
          public string[] GetParameterTypes() {
               return this.ParameterTypes;
          }

          /**
             Sets null

             @param parameterTypes null
          */
          public void SetParameterTypes(string[] ParameterTypes) {
               this.ParameterTypes = ParameterTypes;
          }

          /**
             Gets null

             @return parameters null
          */
          public Object[] GetParameters() {
               return this.Parameters;
          }

          /**
             Sets null

             @param parameters null
          */
          public void SetParameters(Object[] Parameters) {
               this.Parameters = Parameters;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
