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

package me.adaptive.arp.api;

/**
   Represents an instance of a service.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Service {

     /**
        The method used
     */
     private IServiceMethod method;
     /**
        The type of the service
     */
     private IServiceType type;
     /**
        Enpoint of the service
     */
     private Endpoint endpoint;
     /**
        The service name
     */
     private String name;

     /**
        Constructor used by the implementation
     */
     public Service() {
     }

     /**
        Constructor used by the implementation

        @param endpoint
        @param name
        @param method
        @param type
        @since ARP1.0
     */
     public Service(Endpoint endpoint, String name, IServiceMethod method, IServiceType type) {
          this();
          this.endpoint = endpoint;
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

        @param method
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

        @param type
        @since ARP1.0
     */
     public void setType(IServiceType type) {
          this.type = type;
     }

     /**
        Returns the endpoint

        @return endpoint
        @since ARP1.0
     */
     public Endpoint getEndpoint() {
          return this.endpoint;
     }

     /**
        Set the endpoint

        @param endpoint
        @since ARP1.0
     */
     public void setEndpoint(Endpoint endpoint) {
          this.endpoint = endpoint;
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

        @param name
        @since ARP1.0
     */
     public void setName(String name) {
          this.name = name;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
