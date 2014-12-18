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
   Interface for Managing the Network reachability operations
   Auto-generated implementation of INetworkReachability specification.
*/
public class NetworkReachabilityBridge : BaseCommunicationBridge, INetworkReachability, APIBridge {

     /**
        API Delegate.
     */
     private var delegate : INetworkReachability = nil

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public init(delegate : INetworkReachability) {
          super.init()
          self.delegate = delegate
     }
     /**
        Get the delegate implementation.
        @return INetworkReachability delegate that manages platform specific functions..
     */
     public final func getDelegate() -> INetworkReachability {
          return self.delegate
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final func setDelegate(delegate : INetworkReachability) {
          self.delegate = delegate;
     }

     /**
        Whether there is connectivity to a host, via domain name or ip address, or not.

        @param host     domain name or ip address of host.
        @param callback Callback called at the end.
        @since ARP1.0
     */
     public func isNetworkReachable(host : String , callback : INetworkReachabilityCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"NetworkReachabilityBridge executing isNetworkReachable({"+host+"},{"+callback+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.isNetworkReachable(host, callback)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"NetworkReachabilityBridge executed 'isNetworkReachable' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"NetworkReachabilityBridge no delegate for 'isNetworkReachable'.")
               }
          }
          
     }

     /**
        Whether there is connectivity to an url of a service or not.

        @param url      to look for
        @param callback Callback called at the end
        @since ARP1.0
     */
     public func isNetworkServiceReachable(url : String , callback : INetworkReachabilityCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"NetworkReachabilityBridge executing isNetworkServiceReachable({"+url+"},{"+callback+"}).")
          }

          if (self.delegate != nil) {
               self.delegate.isNetworkServiceReachable(url, callback)
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"NetworkReachabilityBridge executed 'isNetworkServiceReachable' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"NetworkReachabilityBridge no delegate for 'isNetworkServiceReachable'.")
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
               case "isNetworkReachable":
                    var host0 : String = this.gson.fromJson(request.getParameters()[0], String.class);
                    var callback0 : INetworkReachabilityCallback =  NetworkReachabilityCallbackImpl(request.getAsyncId());
                    self.isNetworkReachable(host0, callback0);
                    break;
               case "isNetworkServiceReachable":
                    var url1 : String = this.gson.fromJson(request.getParameters()[0], String.class);
                    var callback1 : INetworkReachabilityCallback =  NetworkReachabilityCallbackImpl(request.getAsyncId());
                    self.isNetworkServiceReachable(url1, callback1);
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
