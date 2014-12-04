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
   Represents an instance of a service.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Service : NSObject {

     /**
        The method used
     */
     var method : IServiceMethod?
     /**
        The type of the service
     */
     var type : IServiceType?
     /**
        Enpoint of the service
     */
     var endpoint : Endpoint?
     /**
        The service name
     */
     var name : String?

     /**
        Constructor used by the implementation
     */
     public override init() {
     }

     /**
        Constructor used by the implementation

        @param endpoint
        @param name
        @param method
        @param type
        @since ARP1.0
     */
     public convenience init(endpoint: Endpoint, name: String, method: IServiceMethod, type: IServiceType) {
          self.init()
          self.endpoint = endpoint
          self.name = name
          self.method = method
          self.type = type
     }
     /**
        Returns the method

        @return method
        @since ARP1.0
     */
     public func getMethod() -> IServiceMethod? {
          return self.method
     }

     /**
        Set the method

        @param method
        @since ARP1.0
     */
     public func setMethod(method: IServiceMethod) {
          self.method = method
     }

     /**
        Returns the type

        @return type
        @since ARP1.0
     */
     public func getType() -> IServiceType? {
          return self.type
     }

     /**
        Set the type

        @param type
        @since ARP1.0
     */
     public func setType(type: IServiceType) {
          self.type = type
     }

     /**
        Returns the endpoint

        @return endpoint
        @since ARP1.0
     */
     public func getEndpoint() -> Endpoint? {
          return self.endpoint
     }

     /**
        Set the endpoint

        @param endpoint
        @since ARP1.0
     */
     public func setEndpoint(endpoint: Endpoint) {
          self.endpoint = endpoint
     }

     /**
        Returns the name

        @return name
        @since ARP1.0
     */
     public func getName() -> String? {
          return self.name
     }

     /**
        Set the name

        @param name
        @since ARP1.0
     */
     public func setName(name: String) {
          self.name = name
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
