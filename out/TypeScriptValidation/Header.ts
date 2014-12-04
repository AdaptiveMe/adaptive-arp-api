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
        Structure representing the data of a http request or response header.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Header {

          /**
             Value of the header
          */
          data : string;
          /**
             Name ot the header
          */
          name : string;
          /**
             Constructor used by the implementation

             @param name
             @param data
             @since ARP1.0
          */
          constructor(name: string, data: string) {
               this.name = name;
               this.data = data;
          }

          /**
             Returns the header value

             @return 
             @since ARP1.0
          */
          getData() : string {
               return this.data;
          }

          /**
             Set the header value

             @param data
             @since ARP1.0
          */
          setData(data: string) {
               this.data = data;
          }

          /**
             Returns the header name

             @return name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Set the header name

             @param name
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
