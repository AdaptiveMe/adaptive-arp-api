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
        Represents an instance of a service.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     public class Service : APIBean
     {

          /**
             The method used
          */
          public IServiceMethod Method { get; set; }
          /**
             The type of the service
          */
          public IServiceType Type { get; set; }
          /**
             The service name
          */
          public string Name { get; set; }
          /**
             Endpoint of the service
          */
          public ServiceEndpoint ServiceEndpoint { get; set; }

          /**
             Default constructor

             @since ARP1.0
          */
          public Service()  {
          }

          /**
             Constructor used by the implementation

             @param ServiceEndpoint Endpoint of the service
             @param Name            Name of the service
             @param Method          Method of the service
             @param Type            Type of the service
             @since ARP1.0
          */
          public Service(ServiceEndpoint ServiceEndpoint, string Name, IServiceMethod Method, IServiceType Type) : base () {
               this.ServiceEndpoint = ServiceEndpoint;
               this.Name = Name;
               this.Method = Method;
               this.Type = Type;
          }

          /**
             Returns the method

             @return Method
             @since ARP1.0
          */
          public IServiceMethod GetMethod() {
               return this.Method;
          }

          /**
             Set the method

             @param Method Method of the service
             @since ARP1.0
          */
          public void SetMethod(IServiceMethod Method) {
               this.Method = Method;
          }

          /**
             Returns the type

             @return Type
             @since ARP1.0
          */
          public IServiceType GetType() {
               return this.Type;
          }

          /**
             Set the type

             @param Type Type of the service
             @since ARP1.0
          */
          public void SetType(IServiceType Type) {
               this.Type = Type;
          }

          /**
             Returns the name

             @return Name
             @since ARP1.0
          */
          public string GetName() {
               return this.Name;
          }

          /**
             Set the name

             @param Name Name of the service
             @since ARP1.0
          */
          public void SetName(string Name) {
               this.Name = Name;
          }

          /**
             Returns the serviceEndpoint

             @return ServiceEndpoint
             @since ARP1.0
          */
          public ServiceEndpoint GetServiceEndpoint() {
               return this.ServiceEndpoint;
          }

          /**
             Set the serviceEndpoint

             @param ServiceEndpoint Endpoint of the service
             @since ARP1.0
          */
          public void SetServiceEndpoint(ServiceEndpoint ServiceEndpoint) {
               this.ServiceEndpoint = ServiceEndpoint;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
