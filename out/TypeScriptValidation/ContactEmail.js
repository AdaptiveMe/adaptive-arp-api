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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
///<reference path="ContactEmailType.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing the email data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactEmail = (function (_super) {
        __extends(ContactEmail, _super);
        /**
           Constructor used by the implementation

           @param type    Type of the email
           @param primary Is email primary
           @param email   Email of the contact
           @since ARP1.0
        */
        function ContactEmail(type, primary, email) {
            _super.call(this);
            this.type = type;
            this.primary = primary;
            this.email = email;
        }
        /**
           Returns the type of the email

           @return EmailType
           @since ARP1.0
        */
        ContactEmail.prototype.getType = function () {
            return this.type;
        };
        /**
           Set the type of the email

           @param type Type of the email
           @since ARP1.0
        */
        ContactEmail.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           Returns the email of the Contact

           @return email
           @since ARP1.0
        */
        ContactEmail.prototype.getEmail = function () {
            return this.email;
        };
        /**
           Set the email of the Contact

           @param email Email of the contact
           @since ARP1.0
        */
        ContactEmail.prototype.setEmail = function (email) {
            this.email = email;
        };
        /**
           Returns if the email is primary

           @return true if the email is primary; false otherwise
           @since ARP1.0
        */
        ContactEmail.prototype.getPrimary = function () {
            return this.primary;
        };
        /**
           Set if the email

           @param primary true if the email is primary; false otherwise
           @since ARP1.0
        */
        ContactEmail.prototype.setPrimary = function (primary) {
            this.primary = primary;
        };
        return ContactEmail;
    })(Adaptive.APIBean);
    Adaptive.ContactEmail = ContactEmail;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ContactEmail.js.map