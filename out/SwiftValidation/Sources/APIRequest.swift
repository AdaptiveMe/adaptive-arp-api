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

/**
   Created by clozano on 05/12/14.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class APIRequest : NSObject {

     /**
        { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }
     */
     var methodName : String?
     var parameterTypes : [String]?
     var parameters : [AnyObject]?

     /**
        Convenience constructor.
     */
     public override init() {
          super.init()
     }

     /**
        Gets { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }

        @return methodName { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }
     */
     public func getMethodName() -> String? {
          return self.methodName
     }

     /**
        Sets { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }

        @param methodName { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }
     */
     public func setMethodName(methodName: String) {
          self.methodName = methodName
     }

     /**
        Gets null

        @return parameterTypes null
     */
     public func getParameterTypes() -> [String]? {
          return self.parameterTypes
     }

     /**
        Sets null

        @param parameterTypes null
     */
     public func setParameterTypes(parameterTypes: [String]) {
          self.parameterTypes = parameterTypes
     }

     /**
        Gets null

        @return parameters null
     */
     public func getParameters() -> [AnyObject]? {
          return self.parameters
     }

     /**
        Sets null

        @param parameters null
     */
     public func setParameters(parameters: [AnyObject]) {
          self.parameters = parameters
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
