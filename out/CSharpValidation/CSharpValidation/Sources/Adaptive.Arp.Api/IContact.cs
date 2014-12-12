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

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{
     /**
        Interface for Managing the Contact operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     public interface IContact : IBasePIM {
          /**
             Get the contact photo
             @param contact  id to search for
             @param callback called for return
             @since ARP1.0
          */
          void GetContactPhoto(ContactUid Contact, IContactPhotoResultCallback Callback);

          /**
             Get all the details of a contact according to its id
             @param contact  id to search for
             @param callback called for return
             @since ARP1.0
          */
          void GetContact(ContactUid Contact, IContactResultCallback Callback);

          /**
             Get marked fields of all contacts
             @param callback called for return
             @param fields   to get for each Contact
             @since ARP1.0
          */
          void GetContactsForFields(IContactResultCallback Callback, IContactFieldGroup[] Fields);

          /**
             Get marked fields of all contacts according to a filter
             @param callback called for return
             @param fields   to get for each Contact
             @param filter   to search for
             @since ARP1.0
          */
          void GetContactsWithFilter(IContactResultCallback Callback, IContactFieldGroup[] Fields, IContactFilter[] Filter);

          /**
             Get all contacts
             @param callback called for return
             @since ARP1.0
          */
          void GetContacts(IContactResultCallback Callback);

          /**
             Search contacts according to a term with a filter and send it to the callback
             @param term     string to search
             @param callback called for return
             @param filter   to search for
             @since ARP1.0
          */
          void SearchContactsWithFilter(string Term, IContactResultCallback Callback, IContactFilter[] Filter);

          /**
             Search contacts according to a term and send it to the callback
             @param term     string to search
             @param callback called for return
             @since ARP1.0
          */
          void SearchContacts(string Term, IContactResultCallback Callback);

          /**
             Set the contact photo
             @param contact  id to assign the photo
             @param pngImage photo as byte array
             @return true if set is successful;false otherwise
             @since ARP1.0
          */
          bool SetContactPhoto(ContactUid Contact, byte[] PngImage);

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
