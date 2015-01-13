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

///<reference path="APIRequest.ts"/>
///<reference path="BasePIMBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="ContactPhotoResultCallback.ts"/>
///<reference path="ContactResultCallback.ts"/>
///<reference path="ContactUid.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBasePIM.ts"/>
///<reference path="IContact.ts"/>
///<reference path="IContactFieldGroup.ts"/>
///<reference path="IContactFilter.ts"/>
///<reference path="IContactPhotoResultCallback.ts"/>
///<reference path="IContactResultCallback.ts"/>
module Adaptive {

     /**
        Interface for Managing the Contact operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class ContactBridge extends BasePIMBridge implements IContact {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Get all the details of a contact according to its id

             @param contact  id to search for
             @param callback called for return
             @since ARP1.0
          */
          getContact(contact : ContactUid, callback : IContactResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(contact));
               var ar : APIRequest = new APIRequest("IContact","getContact",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContact' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Get the contact photo

             @param contact  id to search for
             @param callback called for return
             @since ARP1.0
          */
          getContactPhoto(contact : ContactUid, callback : IContactPhotoResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(contact));
               var ar : APIRequest = new APIRequest("IContact","getContactPhoto",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactPhotoResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContactPhoto' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactPhotoResultCallback.remove(""+callback.getId());
                    callback.onError(IContactPhotoResultCallbackError.Unknown)
               }
          }

          /**
             Get all contacts

             @param callback called for return
             @since ARP1.0
          */
          getContacts(callback : IContactResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IContact","getContacts",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContacts' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Get marked fields of all contacts

             @param callback called for return
             @param fields   to get for each Contact
             @since ARP1.0
          */
          getContactsForFields(callback : IContactResultCallback, fields : Array<IContactFieldGroup>) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(fields));
               var ar : APIRequest = new APIRequest("IContact","getContactsForFields",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContactsForFields' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Get marked fields of all contacts according to a filter

             @param callback called for return
             @param fields   to get for each Contact
             @param filter   to search for
             @since ARP1.0
          */
          getContactsWithFilter(callback : IContactResultCallback, fields : Array<IContactFieldGroup>, filter : Array<IContactFilter>) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(fields));
               arParams.push(JSON.stringify(filter));
               var ar : APIRequest = new APIRequest("IContact","getContactsWithFilter",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContactsWithFilter' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Search contacts according to a term and send it to the callback

             @param term     string to search
             @param callback called for return
             @since ARP1.0
          */
          searchContacts(term : string, callback : IContactResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(term));
               var ar : APIRequest = new APIRequest("IContact","searchContacts",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.searchContacts' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Search contacts according to a term with a filter and send it to the callback

             @param term     string to search
             @param callback called for return
             @param filter   to search for
             @since ARP1.0
          */
          searchContactsWithFilter(term : string, callback : IContactResultCallback, filter : Array<IContactFilter>) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(term));
               arParams.push(JSON.stringify(filter));
               var ar : APIRequest = new APIRequest("IContact","searchContactsWithFilter",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.searchContactsWithFilter' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Set the contact photo

             @param contact  id to assign the photo
             @param pngImage photo as byte array
             @return true if set is successful;false otherwise
             @since ARP1.0
          */
          setContactPhoto(contact : ContactUid, pngImage : Array<number>) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(contact));
               arParams.push(JSON.stringify(pngImage));
               var ar : APIRequest = new APIRequest("IContact","setContactPhoto",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'ContactBridge.setContactPhoto' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.setContactPhoto' request.");
               }
               return response;
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
