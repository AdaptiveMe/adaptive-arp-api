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
   Interface for Managing the Logging operations
   Auto-generated implementation of ILogging specification.
*/
public class LoggingBridge : BaseUtilBridge, ILogging, APIBridge {

     /**
        API Delegate.
     */
     private var delegate : ILogging? = nil

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public init(delegate : ILogging?) {
          super.init()
          self.delegate = delegate
     }
     /**
        Get the delegate implementation.
        @return ILogging delegate that manages platform specific functions..
     */
     public final func getDelegate() -> ILogging? {
          return self.delegate
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final func setDelegate(delegate : ILogging) {
          self.delegate = delegate;
     }

     /**
        Logs the given message, with the given log level if specified, to the standard platform/environment.

        @param level   Log level
        @param message Message to be logged
        @since ARP1.0
     */
     public func log(level : ILoggingLogLevel , message : String ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LoggingBridge executing log({\(level)},{\(message)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.log(level, message: message)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LoggingBridge executed 'log' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "LoggingBridge no delegate for 'log'.")
               }
          }
          
     }

     /**
        Logs the given message, with the given log level if specified, to the standard platform/environment.

        @param level    Log level
        @param category Category/tag name to identify/filter the log.
        @param message  Message to be logged
        @since ARP1.0
     */
     public func log(level : ILoggingLogLevel , category : String , message : String ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LoggingBridge executing log({\(level)},{\(category)},{\(message)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.log(level, category: category, message: message)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "LoggingBridge executed 'log' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "LoggingBridge no delegate for 'log'.")
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
               case "log_level_message":
                    var level0 : ILoggingLogLevel? = nil //TODO Deserialize this.gson.fromJson(request.getParameters()[0], ILoggingLogLevel.class)
                    var message0 : String? = nil //TODO Deserialize this.gson.fromJson(request.getParameters()[1], String.class)
                    self.log(level0!, message: message0!)
               case "log_level_category_message":
                    var level1 : ILoggingLogLevel? = nil //TODO Deserialize this.gson.fromJson(request.getParameters()[0], ILoggingLogLevel.class)
                    var category1 : String? = nil //TODO Deserialize this.gson.fromJson(request.getParameters()[1], String.class)
                    var message1 : String? = nil //TODO Deserialize this.gson.fromJson(request.getParameters()[2], String.class)
                    self.log(level1!, category: category1!, message: message1!)
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
