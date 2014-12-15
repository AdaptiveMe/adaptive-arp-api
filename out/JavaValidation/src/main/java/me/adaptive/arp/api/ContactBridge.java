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
public class ContactBridge extends BasePIMBridge implements IContact, APIBridge {

     /**
        API Delegate.
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
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getContact({"+contact+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.getContact(contact, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getContact' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getContact'.");
          }
          
     }

     /**
        Get the contact photo

        @param contact  id to search for
        @param callback called for return
        @since ARP1.0
     */
     public void getContactPhoto(ContactUid contact, IContactPhotoResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getContactPhoto({"+contact+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.getContactPhoto(contact, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getContactPhoto' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getContactPhoto'.");
          }
          
     }

     /**
        Get all contacts

        @param callback called for return
        @since ARP1.0
     */
     public void getContacts(IContactResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getContacts({"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.getContacts(callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getContacts' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getContacts'.");
          }
          
     }

     /**
        Get marked fields of all contacts

        @param callback called for return
        @param fields   to get for each Contact
        @since ARP1.0
     */
     public void getContactsForFields(IContactResultCallback callback, IContactFieldGroup[] fields) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getContactsForFields({"+callback+"},{"+fields+"}).");

          if (this.delegate != null) {
               this.delegate.getContactsForFields(callback, fields);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getContactsForFields' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getContactsForFields'.");
          }
          
     }

     /**
        Get marked fields of all contacts according to a filter

        @param callback called for return
        @param fields   to get for each Contact
        @param filter   to search for
        @since ARP1.0
     */
     public void getContactsWithFilter(IContactResultCallback callback, IContactFieldGroup[] fields, IContactFilter[] filter) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing getContactsWithFilter({"+callback+"},{"+fields+"},{"+filter+"}).");

          if (this.delegate != null) {
               this.delegate.getContactsWithFilter(callback, fields, filter);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'getContactsWithFilter' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'getContactsWithFilter'.");
          }
          
     }

     /**
        Search contacts according to a term and send it to the callback

        @param term     string to search
        @param callback called for return
        @since ARP1.0
     */
     public void searchContacts(String term, IContactResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing searchContacts({"+term+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.searchContacts(term, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'searchContacts' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'searchContacts'.");
          }
          
     }

     /**
        Search contacts according to a term with a filter and send it to the callback

        @param term     string to search
        @param callback called for return
        @param filter   to search for
        @since ARP1.0
     */
     public void searchContactsWithFilter(String term, IContactResultCallback callback, IContactFilter[] filter) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing searchContactsWithFilter({"+term+"},{"+callback+"},{"+filter+"}).");

          if (this.delegate != null) {
               this.delegate.searchContactsWithFilter(term, callback, filter);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'searchContactsWithFilter' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'searchContactsWithFilter'.");
          }
          
     }

     /**
        Set the contact photo

        @param contact  id to assign the photo
        @param pngImage photo as byte array
        @return true if set is successful;false otherwise
        @since ARP1.0
     */
     public boolean setContactPhoto(ContactUid contact, byte[] pngImage) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing setContactPhoto({"+contact+"},{"+pngImage+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.setContactPhoto(contact, pngImage);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'setContactPhoto' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'setContactPhoto'.");
          }
          return result;          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return String with JSON response or a zero length string is the response is asynchronous.
     */
     public String invoke(APIRequest request) {
          return null; // TODO: Implement APIRequest to Params and invoke delegate method.
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
