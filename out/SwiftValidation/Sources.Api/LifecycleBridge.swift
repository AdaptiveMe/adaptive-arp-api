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
   Interface for Managing the Lifecycle listeners
   Auto-generated implementation of ILifecycle specification.
*/
public class LifecycleBridge : BaseApplicationBridge, ILifecycle, APIBridge {

     /**
        API Delegate.
     */
     private var delegate : ILifecycle? = nil

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public init(delegate : ILifecycle?) {
          super.init()
          self.delegate = delegate
     }
     /**
        Get the delegate implementation.
        @return ILifecycle delegate that manages platform specific functions..
     */
     public final func getDelegate() -> ILifecycle? {
          return self.delegate
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final func setDelegate(delegate : ILifecycle) {
          self.delegate = delegate;
     }

     /**
        Add the listener for the lifecycle of the app

        @param listener Lifecycle listener
        @since ARP1.0
     */
     public func addLifecycleListener(listener : ILifecycleListener ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LifecycleBridge executing addLifecycleListener({\(listener)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.addLifecycleListener(listener)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LifecycleBridge executed 'addLifecycleListener' in \(UInt(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "LifecycleBridge no delegate for 'addLifecycleListener'.")
               }
          }
          
     }

     /**
        Whether the application is in background or not

        @return true if the application is in background;false otherwise
        @since ARP1.0
     */
     public func isBackground() -> Bool {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LifecycleBridge executing isBackground.")
          }

          var result : Bool = false
          if (self.delegate != nil) {
               result = self.delegate!.isBackground()
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LifecycleBridge executed 'isBackground' in \(UInt(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "LifecycleBridge no delegate for 'isBackground'.")
               }
          }
          return result          
     }

     /**
        Un-registers an existing listener from receiving lifecycle events.

        @param listener Lifecycle listener
        @since ARP1.0
     */
     public func removeLifecycleListener(listener : ILifecycleListener ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LifecycleBridge executing removeLifecycleListener({\(listener)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.removeLifecycleListener(listener)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LifecycleBridge executed 'removeLifecycleListener' in \(UInt(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "LifecycleBridge no delegate for 'removeLifecycleListener'.")
               }
          }
          
     }

     /**
        Removes all existing listeners from receiving lifecycle events.

        @since ARP1.0
     */
     public func removeLifecycleListeners() {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LifecycleBridge executing removeLifecycleListeners.")
          }

          if (self.delegate != nil) {
               self.delegate!.removeLifecycleListeners()
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LifecycleBridge executed 'removeLifecycleListeners' in \(UInt(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "LifecycleBridge no delegate for 'removeLifecycleListeners'.")
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
               case "addLifecycleListener":
                    var listener0 : ILifecycleListener? =  LifecycleListenerImpl(id: request.getAsyncId()!)
                    self.addLifecycleListener(listener0!);
               case "isBackground":
                    var response1 : Bool? = self.isBackground()
                    responseJSON = nil //TODO - Serialize this.gson.toJson(response1);
               case "removeLifecycleListener":
                    var listener2 : ILifecycleListener? =  LifecycleListenerImpl(id: request.getAsyncId()!)
                    self.removeLifecycleListener(listener2!);
               case "removeLifecycleListeners":
                    self.removeLifecycleListeners();
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
