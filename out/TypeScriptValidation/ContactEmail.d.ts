/// <reference path="APIBean.d.ts" />
/// <reference path="ContactEmailType.d.ts" />
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
declare module Adaptive {
    /**
       Structure representing the email data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactEmail extends APIBean {
        /**
           The type of the email
        */
        type: ContactEmailType;
        /**
           Email of the Contact
        */
        email: string;
        /**
           Whether the email is the primary one or not
        */
        primary: boolean;
        /**
           Constructor used by the implementation

           @param type    Type of the email
           @param primary Is email primary
           @param email   Email of the contact
           @since ARP1.0
        */
        constructor(type: ContactEmailType, primary: boolean, email: string);
        /**
           Returns the type of the email

           @return EmailType
           @since ARP1.0
        */
        getType(): ContactEmailType;
        /**
           Set the type of the email

           @param type Type of the email
           @since ARP1.0
        */
        setType(type: ContactEmailType): void;
        /**
           Returns the email of the Contact

           @return email
           @since ARP1.0
        */
        getEmail(): string;
        /**
           Set the email of the Contact

           @param email Email of the contact
           @since ARP1.0
        */
        setEmail(email: string): void;
        /**
           Returns if the email is primary

           @return true if the email is primary; false otherwise
           @since ARP1.0
        */
        getPrimary(): boolean;
        /**
           Set if the email

           @param primary true if the email is primary; false otherwise
           @since ARP1.0
        */
        setPrimary(primary: boolean): void;
    }
}
