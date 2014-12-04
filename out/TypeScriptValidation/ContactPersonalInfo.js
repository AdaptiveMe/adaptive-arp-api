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
///<reference path="ContactPersonalInfoTitle.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing the personal info data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ContactPersonalInfo = (function () {
        /**
           The Constructor used by the implementation

           @param name       of the Contact
           @param middleName of the Contact
           @param lastName   of the Contact
           @param title      of the Contact
           @since ARP1.0
        */
        function ContactPersonalInfo(name, middleName, lastName, title) {
            this.name = name;
            this.middleName = middleName;
            this.lastName = lastName;
            this.title = title;
        }
        /**
           Returns the title of the Contact

           @return Title
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getTitle = function () {
            return this.title;
        };
        /**
           Set the Title of the Contact

           @param title
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setTitle = function (title) {
            this.title = title;
        };
        /**
           Returns the last name of the Contact

           @return lastName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getLastName = function () {
            return this.lastName;
        };
        /**
           Set the last name of the Contact

           @param lastName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setLastName = function (lastName) {
            this.lastName = lastName;
        };
        /**
           Returns the middle name of the Contact

           @return middelName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getMiddleName = function () {
            return this.middleName;
        };
        /**
           Set the middle name of the Contact

           @param middleName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setMiddleName = function (middleName) {
            this.middleName = middleName;
        };
        /**
           Returns the name of the Contact

           @return name
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getName = function () {
            return this.name;
        };
        /**
           Set the name of the Contact

           @param name
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setName = function (name) {
            this.name = name;
        };
        return ContactPersonalInfo;
    })();
    Adaptive.ContactPersonalInfo = ContactPersonalInfo;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ContactPersonalInfo.js.map