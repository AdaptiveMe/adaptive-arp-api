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

    * @version v2.0.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Interface for Managing the Contact operations
   Auto-generated implementation of IContact specification.
*/
public class ContactBridge : BasePIMBridge, IContact, APIBridge {

     /**
        API Delegate.
     */
     private var delegate : IContact = nil

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public init(delegate : IContact) {
          super.init()
          self.delegate = delegate
     }
     /**
        Get the delegate implementation.
        @return IContact delegate that manages platform specific functions..
     */
     public final func getDelegate() -> IContact {
          return self.delegate
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final func setDelegate(delegate : IContact) {
          self.delegate = delegate;
     }

     /**
        Get all the details of a contact according to its id

        @param contact  id to search for
        @param callback called for return
        @since ARP1.0
     */
     public func getContact(contact : ContactUid , callback : IContactResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executing getContact({"+contact+"},{"+callback+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.getContact(contact, callback)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executed 'getContact' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"ContactBridge no delegate for 'getContact'.")
               }
          }
          
     }

     /**
        Get the contact photo

        @param contact  id to search for
        @param callback called for return
        @since ARP1.0
     */
     public func getContactPhoto(contact : ContactUid , callback : IContactPhotoResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executing getContactPhoto({"+contact+"},{"+callback+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.getContactPhoto(contact, callback)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executed 'getContactPhoto' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"ContactBridge no delegate for 'getContactPhoto'.")
               }
          }
          
     }

     /**
        Get all contacts

        @param callback called for return
        @since ARP1.0
     */
     public func getContacts(callback : IContactResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executing getContacts({"+callback+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.getContacts(callback)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executed 'getContacts' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"ContactBridge no delegate for 'getContacts'.")
               }
          }
          
     }

     /**
        Get marked fields of all contacts

        @param callback called for return
        @param fields   to get for each Contact
        @since ARP1.0
     */
     public func getContactsForFields(callback : IContactResultCallback , fields : [IContactFieldGroup] ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executing getContactsForFields({"+callback+"},{"+fields+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.getContactsForFields(callback, fields)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executed 'getContactsForFields' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"ContactBridge no delegate for 'getContactsForFields'.")
               }
          }
          
     }

     /**
        Get marked fields of all contacts according to a filter

        @param callback called for return
        @param fields   to get for each Contact
        @param filter   to search for
        @since ARP1.0
     */
     public func getContactsWithFilter(callback : IContactResultCallback , fields : [IContactFieldGroup] , filter : [IContactFilter] ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executing getContactsWithFilter({"+callback+"},{"+fields+"},{"+filter+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.getContactsWithFilter(callback, fields, filter)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executed 'getContactsWithFilter' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"ContactBridge no delegate for 'getContactsWithFilter'.")
               }
          }
          
     }

     /**
        Search contacts according to a term and send it to the callback

        @param term     string to search
        @param callback called for return
        @since ARP1.0
     */
     public func searchContacts(term : String , callback : IContactResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executing searchContacts({"+term+"},{"+callback+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.searchContacts(term, callback)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executed 'searchContacts' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"ContactBridge no delegate for 'searchContacts'.")
               }
          }
          
     }

     /**
        Search contacts according to a term with a filter and send it to the callback

        @param term     string to search
        @param callback called for return
        @param filter   to search for
        @since ARP1.0
     */
     public func searchContactsWithFilter(term : String , callback : IContactResultCallback , filter : [IContactFilter] ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executing searchContactsWithFilter({"+term+"},{"+callback+"},{"+filter+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.searchContactsWithFilter(term, callback, filter)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executed 'searchContactsWithFilter' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"ContactBridge no delegate for 'searchContactsWithFilter'.")
               }
          }
          
     }

     /**
        Set the contact photo

        @param contact  id to assign the photo
        @param pngImage photo as byte array
        @return true if set is successful;false otherwise
        @since ARP1.0
     */
     public func setContactPhoto(contact : ContactUid , pngImage : [Byte] ) -> Bool {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executing setContactPhoto({"+contact+"},{"+pngImage+"}).")
          }

          var result : Bool = false
          if (self.delegate != nil) {
               result = self.delegate.setContactPhoto(contact, pngImage)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"ContactBridge executed 'setContactPhoto' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"ContactBridge no delegate for 'setContactPhoto'.")
               }
          }
          return result          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return String with JSON response or a zero length string if the response is asynchronous or null if method not found.
     */
     public func invoke(request : APIRequest) -> String? {
          var responseJSON : String = ""
          switch (request.getMethodName()) {
               case "getContact":
                    var contact0 : ContactUid = this.gson.fromJson(request.getParameters()[0], ContactUid.class);
                    var callback0 : IContactResultCallback =  ContactResultCallbackImpl(request.getAsyncId());
                    self.getContact(contact0, callback0);
                    break;
               case "getContactPhoto":
                    var contact1 : ContactUid = this.gson.fromJson(request.getParameters()[0], ContactUid.class);
                    var callback1 : IContactPhotoResultCallback =  ContactPhotoResultCallbackImpl(request.getAsyncId());
                    self.getContactPhoto(contact1, callback1);
                    break;
               case "getContacts":
                    var callback2 : IContactResultCallback =  ContactResultCallbackImpl(request.getAsyncId());
                    self.getContacts(callback2);
                    break;
               case "getContactsForFields":
                    var callback3 : IContactResultCallback =  ContactResultCallbackImpl(request.getAsyncId());
                    var fields3 : [IContactFieldGroup] = this.gson.fromJson(request.getParameters()[1], [IContactFieldGroup].class);
                    self.getContactsForFields(callback3, fields3);
                    break;
               case "getContactsWithFilter":
                    var callback4 : IContactResultCallback =  ContactResultCallbackImpl(request.getAsyncId());
                    var fields4 : [IContactFieldGroup] = this.gson.fromJson(request.getParameters()[1], [IContactFieldGroup].class);
                    var filter4 : [IContactFilter] = this.gson.fromJson(request.getParameters()[2], [IContactFilter].class);
                    self.getContactsWithFilter(callback4, fields4, filter4);
                    break;
               case "searchContacts":
                    var term5 : String = this.gson.fromJson(request.getParameters()[0], String.class);
                    var callback5 : IContactResultCallback =  ContactResultCallbackImpl(request.getAsyncId());
                    self.searchContacts(term5, callback5);
                    break;
               case "searchContactsWithFilter":
                    var term6 : String = this.gson.fromJson(request.getParameters()[0], String.class);
                    var callback6 : IContactResultCallback =  ContactResultCallbackImpl(request.getAsyncId());
                    var filter6 : [IContactFilter] = this.gson.fromJson(request.getParameters()[2], [IContactFilter].class);
                    self.searchContactsWithFilter(term6, callback6, filter6);
                    break;
               case "setContactPhoto":
                    var contact7 : ContactUid = this.gson.fromJson(request.getParameters()[0], ContactUid.class);
                    var pngImage7 : [Byte] = this.gson.fromJson(request.getParameters()[1], [Byte].class);
                    Bool response7 = this.setContactPhoto(contact7, pngImage7);
                    responseJSON = this.gson.toJson(response7);
                    break;
               default:
                    // 404 - response null.
                    responseJSON = nil;
          }
          return responseJSON;
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
