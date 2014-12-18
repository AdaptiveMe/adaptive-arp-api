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
   Interface for Managing the Security operations
   Auto-generated implementation of ISecurity specification.
*/
public class SecurityBridge : BaseSecurityBridge, ISecurity, APIBridge {

     /**
        API Delegate.
     */
     private var delegate : ISecurity = nil

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public init(delegate : ISecurity) {
          super.init()
          self.delegate = delegate
     }
     /**
        Get the delegate implementation.
        @return ISecurity delegate that manages platform specific functions..
     */
     public final func getDelegate() -> ISecurity {
          return self.delegate
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final func setDelegate(delegate : ISecurity) {
          self.delegate = delegate;
     }

     /**
        Deletes from the device internal storage the entry/entries containing the specified key names.

        @param keys             Array with the key names to delete.
        @param publicAccessName The name of the shared internal storage object (if needed).
        @param callback         callback to be executed upon function result.
        @since ARP 1.0
     */
     public func deleteSecureKeyValuePairs(keys : [String] , publicAccessName : String , callback : ISecurityResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"SecurityBridge executing deleteSecureKeyValuePairs({"+keys+"},{"+publicAccessName+"},{"+callback+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.deleteSecureKeyValuePairs(keys, publicAccessName, callback)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"SecurityBridge executed 'deleteSecureKeyValuePairs' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"SecurityBridge no delegate for 'deleteSecureKeyValuePairs'.")
               }
          }
          
     }

     /**
        Retrieves from the device internal storage the entry/entries containing the specified key names.

        @param keys             Array with the key names to retrieve.
        @param publicAccessName The name of the shared internal storage object (if needed).
        @param callback         callback to be executed upon function result.
        @since ARP 1.0
     */
     public func getSecureKeyValuePairs(keys : [String] , publicAccessName : String , callback : ISecurityResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"SecurityBridge executing getSecureKeyValuePairs({"+keys+"},{"+publicAccessName+"},{"+callback+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.getSecureKeyValuePairs(keys, publicAccessName, callback)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"SecurityBridge executed 'getSecureKeyValuePairs' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"SecurityBridge no delegate for 'getSecureKeyValuePairs'.")
               }
          }
          
     }

     /**
        Returns if the device has been modified in anyhow

        @return true if the device has been modified; false otherwise
        @since ARP1.0
     */
     public func isDeviceModified() -> Bool {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"SecurityBridge executing isDeviceModified.")
          }

          var result : Bool = false
          if (self.delegate != nil) {
               result = self.delegate.isDeviceModified()
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"SecurityBridge executed 'isDeviceModified' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"SecurityBridge no delegate for 'isDeviceModified'.")
               }
          }
          return result          
     }

     /**
        Stores in the device internal storage the specified item/s.

        @param keyValues        Array containing the items to store on the device internal memory.
        @param publicAccessName The name of the shared internal storage object (if needed).
        @param callback         callback to be executed upon function result.
        @since ARP 1.0
     */
     public func setSecureKeyValuePairs(keyValues : [SecureKeyPair] , publicAccessName : String , callback : ISecurityResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"SecurityBridge executing setSecureKeyValuePairs({"+keyValues+"},{"+publicAccessName+"},{"+callback+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.setSecureKeyValuePairs(keyValues, publicAccessName, callback)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"SecurityBridge executed 'setSecureKeyValuePairs' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"SecurityBridge no delegate for 'setSecureKeyValuePairs'.")
               }
          }
          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return String with JSON response or a zero length string if the response is asynchronous or null if method not found.
     */
     public func invoke(request : APIRequest) -> String? {
          var responseJSON : String = ""
          switch (request.getMethodName()) {
               case "deleteSecureKeyValuePairs":
                    var keys0 : [String] = this.gson.fromJson(request.getParameters()[0], [String].class);
                    var publicAccessName0 : String = this.gson.fromJson(request.getParameters()[1], String.class);
                    var callback0 : ISecurityResultCallback =  SecurityResultCallbackImpl(request.getAsyncId());
                    self.deleteSecureKeyValuePairs(keys0, publicAccessName0, callback0);
                    break;
               case "getSecureKeyValuePairs":
                    var keys1 : [String] = this.gson.fromJson(request.getParameters()[0], [String].class);
                    var publicAccessName1 : String = this.gson.fromJson(request.getParameters()[1], String.class);
                    var callback1 : ISecurityResultCallback =  SecurityResultCallbackImpl(request.getAsyncId());
                    self.getSecureKeyValuePairs(keys1, publicAccessName1, callback1);
                    break;
               case "isDeviceModified":
                    Bool response2 = this.isDeviceModified();
                    responseJSON = this.gson.toJson(response2);
                    break;
               case "setSecureKeyValuePairs":
                    var keyValues3 : [SecureKeyPair] = this.gson.fromJson(request.getParameters()[0], [SecureKeyPair].class);
                    var publicAccessName3 : String = this.gson.fromJson(request.getParameters()[1], String.class);
                    var callback3 : ISecurityResultCallback =  SecurityResultCallbackImpl(request.getAsyncId());
                    self.setSecureKeyValuePairs(keyValues3, publicAccessName3, callback3);
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
