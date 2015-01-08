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

package me.adaptive.arp.api;

/**
   Represents an instance of a service.

   @author Aryslan
   @since ARP1.0
   @version 1.0
*/
public class Service extends APIBean {

     /**
        The method used
     */
     private IServiceMethod method;
     /**
        The type of the service
     */
     private IServiceType type;
     /**
        The service name
     */
     private String name;
     /**
        Endpoint of the service
     */
     private ServiceEndpoint serviceEndpoint;

     /**
        Default constructor

        @since ARP1.0
     */
     public Service() {
     }

     /**
        Constructor used by the implementation

        @param serviceEndpoint Endpoint of the service
        @param name            Name of the service
        @param method          Method of the service
        @param type            Type of the service
        @since ARP1.0
     */
     public Service(ServiceEndpoint serviceEndpoint, String name, IServiceMethod method, IServiceType type) {
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
     public IServiceMethod getMethod() {
          return this.method;
     }

     /**
        Set the method

        @param method Method of the service
        @since ARP1.0
     */
     public void setMethod(IServiceMethod method) {
          this.method = method;
     }

     /**
        Returns the type

        @return type
        @since ARP1.0
     */
     public IServiceType getType() {
          return this.type;
     }

     /**
        Set the type

        @param type Type of the service
        @since ARP1.0
     */
     public void setType(IServiceType type) {
          this.type = type;
     }

     /**
        Returns the name

        @return name
        @since ARP1.0
     */
     public String getName() {
          return this.name;
     }

     /**
        Set the name

        @param name Name of the service
        @since ARP1.0
     */
     public void setName(String name) {
          this.name = name;
     }

     /**
        Returns the serviceEndpoint

        @return serviceEndpoint
        @since ARP1.0
     */
     public ServiceEndpoint getServiceEndpoint() {
          return this.serviceEndpoint;
     }

     /**
        Set the serviceEndpoint

        @param serviceEndpoint Endpoint of the service
        @since ARP1.0
     */
     public void setServiceEndpoint(ServiceEndpoint serviceEndpoint) {
          this.serviceEndpoint = serviceEndpoint;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
