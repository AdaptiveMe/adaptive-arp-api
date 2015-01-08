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
   Structure representing the data of a http request or response header.

   @author Aryslan
   @since ARP1.0
   @version 1.0
*/
public class ServiceHeader extends APIBean {

     /**
        Value of the header
     */
     private String data;
     /**
        Name ot the header
     */
     private String name;

     /**
        Default constructor

        @since ARP1.0
     */
     public ServiceHeader() {
     }

     /**
        Constructor with fields

        @param name Name of the header
        @param data Value of the header
        @since ARP1.0
     */
     public ServiceHeader(String name, String data) {
          super();
          this.name = name;
          this.data = data;
     }

     /**
        Returns the header value

        @return ServiceHeader value
        @since ARP1.0
     */
     public String getData() {
          return this.data;
     }

     /**
        Set the header value

        @param data ServiceHeader value
        @since ARP1.0
     */
     public void setData(String data) {
          this.data = data;
     }

     /**
        Returns the header name

        @return ServiceHeader name
        @since ARP1.0
     */
     public String getName() {
          return this.name;
     }

     /**
        Set the header name

        @param name Name of the header
        @since ARP1.0
     */
     public void setName(String name) {
          this.name = name;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
