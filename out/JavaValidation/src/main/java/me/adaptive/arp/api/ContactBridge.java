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

package me.adaptive.arp.api;

/**
   Interface for Managing the Contact operations
   Auto-generated implementation of IContact specification.
*/
public class ContactBridge extends BasePIMBridge implements IContact {

     /**
        Group of API.
     */
     private IContact delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public ContactBridge(IContact delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
     */
     public final IContact getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IContact delegate) {
          this.delegate = delegate;
     }

     /**
        Get all the details of a contact according to its id

        @param contact  id to search for
        @param callback called for return
        @since ARP1.0
     */
     public void getContact(ContactUid contact, IContactResultCallback callback) {
          // Invoke delegate
          this.delegate.getContact(contact, callback);
          
     }

     /**
        Get the contact photo

        @param contact  id to search for
        @param callback called for return
        @since ARP1.0
     */
     public void getContactPhoto(ContactUid contact, IContactPhotoResultCallback callback) {
          // Invoke delegate
          this.delegate.getContactPhoto(contact, callback);
          
     }

     /**
        Get all contacts

        @param callback called for return
        @since ARP1.0
     */
     public void getContacts(IContactResultCallback callback) {
          // Invoke delegate
          this.delegate.getContacts(callback);
          
     }

     /**
        Get marked fields of all contacts

        @param callback called for return
        @param fields   to get for each Contact
        @since ARP1.0
     */
     public void getContactsForFields(IContactResultCallback callback, IContactFieldGroup[] fields) {
          // Invoke delegate
          this.delegate.getContactsForFields(callback, fields);
          
     }

     /**
        Get marked fields of all contacts according to a filter

        @param callback called for return
        @param fields   to get for each Contact
        @param filter   to search for
        @since ARP1.0
     */
     public void getContactsWithFilter(IContactResultCallback callback, IContactFieldGroup[] fields, IContactFilter[] filter) {
          // Invoke delegate
          this.delegate.getContactsWithFilter(callback, fields, filter);
          
     }

     /**
        Search contacts according to a term and send it to the callback

        @param term     string to search
        @param callback called for return
        @since ARP1.0
     */
     public void searchContacts(String term, IContactResultCallback callback) {
          // Invoke delegate
          this.delegate.searchContacts(term, callback);
          
     }

     /**
        Search contacts according to a term with a filter and send it to the callback

        @param term     string to search
        @param callback called for return
        @param filter   to search for
        @since ARP1.0
     */
     public void searchContactsWithFilter(String term, IContactResultCallback callback, IContactFilter[] filter) {
          // Invoke delegate
          this.delegate.searchContactsWithFilter(term, callback, filter);
          
     }

     /**
        Set the contact photo

        @param contact  id to assign the photo
        @param pngImage photo as byte array
        @return true if set is successful;false otherwise
        @since ARP1.0
     */
     public boolean setContactPhoto(ContactUid contact, byte[] pngImage) {
          // Invoke delegate
          return this.delegate.setContactPhoto(contact, pngImage);
          
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
