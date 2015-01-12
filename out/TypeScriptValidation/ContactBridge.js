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
///<reference path="BasePIMBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="ContactUid.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBasePIM.ts"/>
///<reference path="IContact.ts"/>
///<reference path="IContactFieldGroup.ts"/>
///<reference path="IContactFilter.ts"/>
///<reference path="IContactPhotoResultCallback.ts"/>
///<reference path="IContactResultCallback.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Contact operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var ContactBridge = (function (_super) {
        __extends(ContactBridge, _super);
        /**
           Default constructor.
        */
        function ContactBridge() {
            _super.call(this);
        }
        /**
           Get all the details of a contact according to its id

           @param contact  id to search for
           @param callback called for return
           @since ARP1.0
        */
        ContactBridge.prototype.getContact = function (contact, callback) {
        };
        /**
           Get the contact photo

           @param contact  id to search for
           @param callback called for return
           @since ARP1.0
        */
        ContactBridge.prototype.getContactPhoto = function (contact, callback) {
        };
        /**
           Get all contacts

           @param callback called for return
           @since ARP1.0
        */
        ContactBridge.prototype.getContacts = function (callback) {
        };
        /**
           Get marked fields of all contacts

           @param callback called for return
           @param fields   to get for each Contact
           @since ARP1.0
        */
        ContactBridge.prototype.getContactsForFields = function (callback, fields) {
        };
        /**
           Get marked fields of all contacts according to a filter

           @param callback called for return
           @param fields   to get for each Contact
           @param filter   to search for
           @since ARP1.0
        */
        ContactBridge.prototype.getContactsWithFilter = function (callback, fields, filter) {
        };
        /**
           Search contacts according to a term and send it to the callback

           @param term     string to search
           @param callback called for return
           @since ARP1.0
        */
        ContactBridge.prototype.searchContacts = function (term, callback) {
        };
        /**
           Search contacts according to a term with a filter and send it to the callback

           @param term     string to search
           @param callback called for return
           @param filter   to search for
           @since ARP1.0
        */
        ContactBridge.prototype.searchContactsWithFilter = function (term, callback, filter) {
        };
        /**
           Set the contact photo

           @param contact  id to assign the photo
           @param pngImage photo as byte array
           @return true if set is successful;false otherwise
           @since ARP1.0
        */
        ContactBridge.prototype.setContactPhoto = function (contact, pngImage) {
            return null;
        };
        return ContactBridge;
    })(Adaptive.BasePIMBridge);
    Adaptive.ContactBridge = ContactBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ContactBridge.js.map