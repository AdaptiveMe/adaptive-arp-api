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

    * @version v1.0.45
-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Structure representing the data of a http request or response header.

   @author Aryslan
   @since ARP1.0
   @version 1.0
*/
public class ServiceHeader : APIBean {

     /**
        Value of the header
     */
     var data : String?
     /**
        Name ot the header
     */
     var name : String?

     /**
        Default constructor

        @since ARP1.0
     */
     public override init() {
          super.init()
     }

     /**
        Constructor with fields

        @param name Name of the header
        @param data Value of the header
        @since ARP1.0
     */
     public init(name: String, data: String) {
          super.init()
          self.name = name
          self.data = data
     }

     /**
        Returns the header value

        @return ServiceHeader value
        @since ARP1.0
     */
     public func getData() -> String? {
          return self.data
     }

     /**
        Set the header value

        @param data ServiceHeader value
        @since ARP1.0
     */
     public func setData(data: String) {
          self.data = data
     }

     /**
        Returns the header name

        @return ServiceHeader name
        @since ARP1.0
     */
     public func getName() -> String? {
          return self.name
     }

     /**
        Set the header name

        @param name Name of the header
        @since ARP1.0
     */
     public func setName(name: String) {
          self.name = name
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
