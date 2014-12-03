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

///<reference path="ContactEmailType.ts"/>

module Adaptive {

     /**
     Structure representing the email data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ContactEmail {

          /**
             The type of the email
          */
          type : ContactEmailType;
          /**
             Email of the Contact
          */
          email : string;
          /**
             Whether the email is the primary one or not
          */
          primary : boolean;
          /**
             Constructor used by the implementation

             @param type
             @param primary
             @param email
             @since ARP1.0
          */
          constructor(type: ContactEmailType, primary: boolean, email: string) {
               this.type = type
               this.primary = primary
               this.email = email
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
