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
   Interface for Managing the Device operations
   Auto-generated implementation of IDevice specification.
*/
public class DeviceBridge : BaseSystemBridge, IDevice, APIBridge {

     /**
        API Delegate.
     */
     private var delegate : IDevice? = nil

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public init(delegate : IDevice?) {
          super.init()
          self.delegate = delegate
     }
     /**
        Get the delegate implementation.
        @return IDevice delegate that manages platform specific functions..
     */
     public final func getDelegate() -> IDevice? {
          return self.delegate
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final func setDelegate(delegate : IDevice) {
          self.delegate = delegate;
     }

     /**
        Register a new listener that will receive button events.

        @param listener to be registered.
        @since ARP1.0
     */
     public func addButtonListener(listener : IButtonListener ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DeviceBridge executing addButtonListener({\(listener)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.addButtonListener(listener)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DeviceBridge executed 'addButtonListener' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DeviceBridge no delegate for 'addButtonListener'.")
               }
          }
          
     }

     /**
        Returns the device information for the current device executing the runtime.

        @return DeviceInfo for the current device.
        @since ARP1.0
     */
     public func getDeviceInfo() -> DeviceInfo {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DeviceBridge executing getDeviceInfo.")
          }

          var result : DeviceInfo? = nil
          if (self.delegate != nil) {
               result = self.delegate!.getDeviceInfo()
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DeviceBridge executed 'getDeviceInfo' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DeviceBridge no delegate for 'getDeviceInfo'.")
               }
          }
          return result!          
     }

     /**
        Gets the current Locale for the device.

        @return The current Locale information.
        @since ARP1.0
     */
     public func getLocaleCurrent() -> Locale {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DeviceBridge executing getLocaleCurrent.")
          }

          var result : Locale? = nil
          if (self.delegate != nil) {
               result = self.delegate!.getLocaleCurrent()
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DeviceBridge executed 'getLocaleCurrent' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DeviceBridge no delegate for 'getLocaleCurrent'.")
               }
          }
          return result!          
     }

     /**
        De-registers an existing listener from receiving button events.

        @param listener to be removed.
        @since ARP1.0
     */
     public func removeButtonListener(listener : IButtonListener ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DeviceBridge executing removeButtonListener({\(listener)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.removeButtonListener(listener)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DeviceBridge executed 'removeButtonListener' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DeviceBridge no delegate for 'removeButtonListener'.")
               }
          }
          
     }

     /**
        Removed all existing listeners from receiving button events.

        @since ARP1.0
     */
     public func removeButtonListeners() {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DeviceBridge executing removeButtonListeners.")
          }

          if (self.delegate != nil) {
               self.delegate!.removeButtonListeners()
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DeviceBridge executed 'removeButtonListeners' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DeviceBridge no delegate for 'removeButtonListeners'.")
               }
          }
          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return String with JSON response or a zero length string if the response is asynchronous or null if method not found.
     */
     public override func invoke(request : APIRequest) -> String? {
          //Gson gson = new Gson();
          var responseJSON : String? = ""
          switch request.getMethodName()! {
               case "addButtonListener":
                    var listener0 : IButtonListener? =  ButtonListenerImpl(id: request.getAsyncId()!)
                    self.addButtonListener(listener0!);
               case "getDeviceInfo":
                    var response1 : DeviceInfo? = self.getDeviceInfo()
                    if (response1 != nil) {
                         responseJSON = nil //TODO - Serialize this.gson.toJson(response1);
                    } else {
                         responseJSON = nil
                    }
               case "getLocaleCurrent":
                    var response2 : Locale? = self.getLocaleCurrent()
                    if (response2 != nil) {
                         responseJSON = nil //TODO - Serialize this.gson.toJson(response2);
                    } else {
                         responseJSON = nil
                    }
               case "removeButtonListener":
                    var listener3 : IButtonListener? =  ButtonListenerImpl(id: request.getAsyncId()!)
                    self.removeButtonListener(listener3!);
               case "removeButtonListeners":
                    self.removeButtonListeners();
               default:
                    // 404 - response null.
                    responseJSON = nil
          }
          return responseJSON
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
