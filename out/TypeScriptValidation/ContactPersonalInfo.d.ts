/// <reference path="APIBean.d.ts" />
/// <reference path="ContactPersonalInfoTitle.d.ts" />
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
       Structure representing the personal info data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactPersonalInfo extends APIBean {
        /**
           The title of the Contact
        */
        title: ContactPersonalInfoTitle;
        /**
           The last name of the Contact
        */
        lastName: string;
        /**
           The middle name of the Contact if it proceeds
        */
        middleName: string;
        /**
           The name of the Contact
        */
        name: string;
        /**
           The Constructor used by the implementation

           @param name       of the Contact
           @param middleName of the Contact
           @param lastName   of the Contact
           @param title      of the Contact
           @since ARP1.0
        */
        constructor(name: string, middleName: string, lastName: string, title: ContactPersonalInfoTitle);
        /**
           Returns the title of the Contact

           @return Title
           @since ARP1.0
        */
        getTitle(): ContactPersonalInfoTitle;
        /**
           Set the Title of the Contact

           @param title of the Contact
           @since ARP1.0
        */
        setTitle(title: ContactPersonalInfoTitle): void;
        /**
           Returns the last name of the Contact

           @return lastName
           @since ARP1.0
        */
        getLastName(): string;
        /**
           Set the last name of the Contact

           @param lastName of the Contact
           @since ARP1.0
        */
        setLastName(lastName: string): void;
        /**
           Returns the middle name of the Contact

           @return middelName
           @since ARP1.0
        */
        getMiddleName(): string;
        /**
           Set the middle name of the Contact

           @param middleName of the Contact
           @since ARP1.0
        */
        setMiddleName(middleName: string): void;
        /**
           Returns the name of the Contact

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the name of the Contact

           @param name of the Contact
           @since ARP1.0
        */
        setName(name: string): void;
    }
}
