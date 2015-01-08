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
   Interface for Managing the Network reachability operations
   Auto-generated implementation of INetworkReachability specification.
*/
public class NetworkReachabilityBridge extends BaseCommunicationBridge implements INetworkReachability, APIBridge {

     /**
        API Delegate.
     */
     private INetworkReachability delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public NetworkReachabilityBridge(INetworkReachability delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return INetworkReachability delegate that manages platform specific functions..
     */
     public final INetworkReachability getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(INetworkReachability delegate) {
          this.delegate = delegate;
     }

     /**
        Whether there is connectivity to a host, via domain name or ip address, or not.

        @param host     domain name or ip address of host.
        @param callback Callback called at the end.
        @since ARP1.0
     */
     public void isNetworkReachable(String host, INetworkReachabilityCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing isNetworkReachable({"+host+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.isNetworkReachable(host, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'isNetworkReachable' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'isNetworkReachable'.");
          }
          
     }

     /**
        Whether there is connectivity to an url of a service or not.

        @param url      to look for
        @param callback Callback called at the end
        @since ARP1.0
     */
     public void isNetworkServiceReachable(String url, INetworkReachabilityCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing isNetworkServiceReachable({"+url+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.isNetworkServiceReachable(url, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'isNetworkServiceReachable' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'isNetworkServiceReachable'.");
          }
          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return String with JSON response or a zero length string if the response is asynchronous or null if method not found.
     */
     public String invoke(APIRequest request) {
          String responseJSON = "";
          switch (request.getMethodName()) {
               case "isNetworkReachable":
                    String host0 = this.gson.fromJson(request.getParameters()[0], String.class);
                    INetworkReachabilityCallback callback0 = new NetworkReachabilityCallbackImpl(request.getAsyncId());
                    this.isNetworkReachable(host0, callback0);
                    break;
               case "isNetworkServiceReachable":
                    String url1 = this.gson.fromJson(request.getParameters()[0], String.class);
                    INetworkReachabilityCallback callback1 = new NetworkReachabilityCallbackImpl(request.getAsyncId());
                    this.isNetworkServiceReachable(url1, callback1);
                    break;
               default:
                    // 404 - response null.
                    responseJSON = null;
          }
          return responseJSON;
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
