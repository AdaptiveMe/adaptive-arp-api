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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing the email data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public class ContactEmail
     {

          /**
             The type of the email
          */
          public ContactEmailType Type { get; set; }
          /**
             Email of the Contact
          */
          public string Email { get; set; }
          /**
             Whether the email is the primary one or not
          */
          public bool Primary { get; set; }

          /**
             Constructor used by the implementation
          */
          public ContactEmail()  {
          }

          /**
             Constructor used by the implementation

             @param Type
             @param Primary
             @param Email
             @since ARP1.0
          */
          public ContactEmail(ContactEmailType Type, bool Primary, string Email) : base () {
               this.Type = Type;
               this.Primary = Primary;
               this.Email = Email;
          }

          /**
             Returns the type of the email

             @return EmailType
             @since ARP1.0
          */
          public ContactEmailType GetType() {
               return this.Type;
          }

          /**
             Set the type of the email

             @param type
             @since ARP1.0
          */
          public void SetType(ContactEmailType Type) {
               this.Type = Type;
          }

          /**
             Returns the email of the Contact

             @return email
             @since ARP1.0
          */
          public string GetEmail() {
               return this.Email;
          }

          /**
             Set the email of the Contact

             @param email
             @since ARP1.0
          */
          public void SetEmail(string Email) {
               this.Email = Email;
          }

          /**
             Returns if the email is primary

             @return true if the email is primary; false otherwise
             @since ARP1.0
          */
          public bool GetPrimary() {
               return this.Primary;
          }

          /**
             Set if the email

             @param primary true if the email is primary; false otherwise
             @since ARP1.0
          */
          public void SetPrimary(bool Primary) {
               this.Primary = Primary;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
