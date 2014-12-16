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

    * @version v1.0.45-260-gbb1d381

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

import com.google.gson.Gson;

/**
   Interface for Managing the Services operations
   Auto-generated implementation of IService specification.
*/
public class ServiceBridge extends BaseCommunicationBridge implements IService, APIBridge {

     /**
        API Delegate.
     */
     private IService delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public ServiceBridge(IService delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
     */
     public final IService getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IService delegate) {
          this.delegate = delegate;
     }

     /**
        Get a reference to a registered service by name.

        @param serviceName Name of service.
        @return A service, if registered, or null of the service does not exist.
        @since ARP1.0
     */
     public Service getService(String serviceName) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getService({"+serviceName+"}).");

          Service result = null;
          if (this.delegate != null) {
               result = this.delegate.getService(serviceName);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getService' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getService'.");
          }
          return result;          
     }

     /**
        Request async a service for an Url

        @param serviceRequest Service Request to invoke
        @param service        Service to call
        @param callback       Callback to execute with the result
        @since ARP1.0
     */
     public void invokeService(ServiceRequest serviceRequest, Service service, IServiceResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing invokeService({"+serviceRequest+"},{"+service+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.invokeService(serviceRequest, service, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'invokeService' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'invokeService'.");
          }
          
     }

     /**
        Check whether a service by the given service is already registered.

        @param service Service to check
        @return True if the service is registered, false otherwise.
        @since ARP1.0
     */
     public boolean isRegistered(Service service) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing isRegistered({"+service+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.isRegistered(service);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'isRegistered' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'isRegistered'.");
          }
          return result;          
     }

     /**
        Check whether a service by the given name is registered.

        @param serviceName Name of service.
        @return True if the service is registered, false otherwise.
        @since ARP1.0
     */
     public boolean isRegistered(String serviceName) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing isRegistered({"+serviceName+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.isRegistered(serviceName);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'isRegistered' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'isRegistered'.");
          }
          return result;          
     }

     /**
        Register a new service

        @param service to register
        @since ARP1.0
     */
     public void registerService(Service service) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing registerService({"+service+"}).");

          if (this.delegate != null) {
               this.delegate.registerService(service);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'registerService' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'registerService'.");
          }
          
     }

     /**
        Unregister a service

        @param service to unregister
        @since ARP1.0
     */
     public void unregisterService(Service service) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing unregisterService({"+service+"}).");

          if (this.delegate != null) {
               this.delegate.unregisterService(service);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'unregisterService' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'unregisterService'.");
          }
          
     }

     /**
        Unregister all services.

        @since ARP1.0
     */
     public void unregisterServices() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing unregisterServices.");

          if (this.delegate != null) {
               this.delegate.unregisterServices();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'unregisterServices' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'unregisterServices'.");
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
               case "getService":
                    String serviceName0 = this.gson.fromJson(request.getParameters()[0], String.class);
                    Service response0 = this.getService(serviceName0);
                    if (response0 != null) {
                         responseJSON = this.gson.toJson(response0);
                    } else {
                         responseJSON = null;
                    }
                    break;
               case "invokeService":
                    ServiceRequest serviceRequest1 = this.gson.fromJson(request.getParameters()[0], ServiceRequest.class);
                    Service service1 = this.gson.fromJson(request.getParameters()[1], Service.class);
                    IServiceResultCallback callback1 = new ServiceResultCallbackImpl(request.getAsyncId());
                    this.invokeService(serviceRequest1, service1, callback1);
                    break;
               case "registerService":
                    Service service2 = this.gson.fromJson(request.getParameters()[0], Service.class);
                    this.registerService(service2);
                    break;
               case "unregisterService":
                    Service service3 = this.gson.fromJson(request.getParameters()[0], Service.class);
                    this.unregisterService(service3);
                    break;
               case "unregisterServices":
                    this.unregisterServices();
                    break;
               case "isRegistered_service":
                    Service service5 = this.gson.fromJson(request.getParameters()[0], Service.class);
                    boolean response5 = this.isRegistered(service5);
                    responseJSON = this.gson.toJson(response5);
                    break;
               case "isRegistered_serviceName":
                    String serviceName6 = this.gson.fromJson(request.getParameters()[0], String.class);
                    boolean response6 = this.isRegistered(serviceName6);
                    responseJSON = this.gson.toJson(response6);
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
