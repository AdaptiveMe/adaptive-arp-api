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

///<reference path="APIBean.ts"/>
///<reference path="IServiceMethod.ts"/>
///<reference path="IServiceType.ts"/>
///<reference path="ServiceEndpoint.ts"/>

module Adaptive {

     /**
        Represents an instance of a service.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class Service extends APIBean {

          /**
             The method used
          */
          method : IServiceMethod;
          /**
             The type of the service
          */
          type : IServiceType;
          /**
             The service name
          */
          name : string;
          /**
             Endpoint of the service
          */
          serviceEndpoint : ServiceEndpoint;
          /**
             Constructor used by the implementation

             @param serviceEndpoint Endpoint of the service
             @param name            Name of the service
             @param method          Method of the service
             @param type            Type of the service
             @since ARP1.0
          */
          constructor(serviceEndpoint: ServiceEndpoint, name: string, method: IServiceMethod, type: IServiceType) {
               super();
               this.serviceEndpoint = serviceEndpoint;
               this.name = name;
               this.method = method;
               this.type = type;
          }

          /**
             Returns the method

             @return method
             @since ARP1.0
          */
          getMethod() : IServiceMethod {
               return this.method;
          }

          /**
             Set the method

             @param method Method of the service
             @since ARP1.0
          */
          setMethod(method: IServiceMethod) {
               this.method = method;
          }

          /**
             Returns the type

             @return type
             @since ARP1.0
          */
          getType() : IServiceType {
               return this.type;
          }

          /**
             Set the type

             @param type Type of the service
             @since ARP1.0
          */
          setType(type: IServiceType) {
               this.type = type;
          }

          /**
             Returns the name

             @return name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Set the name

             @param name Name of the service
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             Returns the serviceEndpoint

             @return serviceEndpoint
             @since ARP1.0
          */
          getServiceEndpoint() : ServiceEndpoint {
               return this.serviceEndpoint;
          }

          /**
             Set the serviceEndpoint

             @param serviceEndpoint Endpoint of the service
             @since ARP1.0
          */
          setServiceEndpoint(serviceEndpoint: ServiceEndpoint) {
               this.serviceEndpoint = serviceEndpoint;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
