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

package me.adaptive.arp.api;

import com.google.gson.Gson;

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
        @return IContact delegate that manages platform specific functions..
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
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getContact({"+contact+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.getContact(contact, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getContact' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getContact'.");
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
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getContactPhoto({"+contact+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.getContactPhoto(contact, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getContactPhoto' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getContactPhoto'.");
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
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getContacts({"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.getContacts(callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getContacts' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getContacts'.");
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
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getContactsForFields({"+callback+"},{"+fields+"}).");

          if (this.delegate != null) {
               this.delegate.getContactsForFields(callback, fields);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getContactsForFields' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getContactsForFields'.");
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
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getContactsWithFilter({"+callback+"},{"+fields+"},{"+filter+"}).");

          if (this.delegate != null) {
               this.delegate.getContactsWithFilter(callback, fields, filter);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getContactsWithFilter' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getContactsWithFilter'.");
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
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing searchContacts({"+term+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.searchContacts(term, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'searchContacts' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'searchContacts'.");
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
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing searchContactsWithFilter({"+term+"},{"+callback+"},{"+filter+"}).");

          if (this.delegate != null) {
               this.delegate.searchContactsWithFilter(term, callback, filter);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'searchContactsWithFilter' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'searchContactsWithFilter'.");
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
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing setContactPhoto({"+contact+"},{"+pngImage+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.setContactPhoto(contact, pngImage);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'setContactPhoto' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'setContactPhoto'.");
          }
          return result;          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return APIResponse with status code, message and JSON response or a JSON null string for void functions. Status code 200 is OK, all others are HTTP standard error conditions.
     */
     public APIResponse invoke(APIRequest request) {
          APIResponse response = new APIResponse();
          int responseCode = 200;
          String responseMessage = "OK";
          String responseJSON = "null";
          switch (request.getMethodName()) {
               case "getContact":
                    ContactUid contact0 = getJSONParser().fromJson(request.getParameters()[0], ContactUid.class);
                    IContactResultCallback callback0 = new ContactResultCallbackImpl(request.getAsyncId());
                    this.getContact(contact0, callback0);
                    break;
               case "getContactPhoto":
                    ContactUid contact1 = getJSONParser().fromJson(request.getParameters()[0], ContactUid.class);
                    IContactPhotoResultCallback callback1 = new ContactPhotoResultCallbackImpl(request.getAsyncId());
                    this.getContactPhoto(contact1, callback1);
                    break;
               case "getContacts":
                    IContactResultCallback callback2 = new ContactResultCallbackImpl(request.getAsyncId());
                    this.getContacts(callback2);
                    break;
               case "getContactsForFields":
                    IContactResultCallback callback3 = new ContactResultCallbackImpl(request.getAsyncId());
                    IContactFieldGroup[] fields3 = getJSONParser().fromJson(request.getParameters()[1], IContactFieldGroup[].class);
                    this.getContactsForFields(callback3, fields3);
                    break;
               case "getContactsWithFilter":
                    IContactResultCallback callback4 = new ContactResultCallbackImpl(request.getAsyncId());
                    IContactFieldGroup[] fields4 = getJSONParser().fromJson(request.getParameters()[1], IContactFieldGroup[].class);
                    IContactFilter[] filter4 = getJSONParser().fromJson(request.getParameters()[2], IContactFilter[].class);
                    this.getContactsWithFilter(callback4, fields4, filter4);
                    break;
               case "searchContacts":
                    String term5 = getJSONParser().fromJson(request.getParameters()[0], String.class);
                    IContactResultCallback callback5 = new ContactResultCallbackImpl(request.getAsyncId());
                    this.searchContacts(term5, callback5);
                    break;
               case "searchContactsWithFilter":
                    String term6 = getJSONParser().fromJson(request.getParameters()[0], String.class);
                    IContactResultCallback callback6 = new ContactResultCallbackImpl(request.getAsyncId());
                    IContactFilter[] filter6 = getJSONParser().fromJson(request.getParameters()[2], IContactFilter[].class);
                    this.searchContactsWithFilter(term6, callback6, filter6);
                    break;
               case "setContactPhoto":
                    ContactUid contact7 = getJSONParser().fromJson(request.getParameters()[0], ContactUid.class);
                    byte[] pngImage7 = getJSONParser().fromJson(request.getParameters()[1], byte[].class);
                    boolean response7 = this.setContactPhoto(contact7, pngImage7);
                    responseJSON = getJSONParser().toJson(response7);
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "ContactBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.0.3.";
          }
          response.setResponse(responseJSON);
          response.setStatusCode(responseCode);
          response.setStatusMessage(responseMessage);
          return response;
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
