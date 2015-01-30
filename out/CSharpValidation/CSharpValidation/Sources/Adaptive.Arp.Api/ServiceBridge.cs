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

    * @version v2.1.1

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{

     /**
        Interface for Managing the Services operations
        Auto-generated implementation of IService specification.
     */
public class ServiceBridge : BaseCommunicationBridge, IService, APIBridge
{

          /**
             API Delegate.
          */
          private IService delegate;

          /**
             Constructor with delegate.

             @param delegate The delegate implementing platform specific functions.
          */
          public ServiceBridge(IService delegate) : base()
          {
               this.delegate = delegate;
          }
          /**
             Get the delegate implementation.
             @return IService delegate that manages platform specific functions..
          */
          public sealed IService GetDelegate()
          {
               return this.delegate;
          }
          /**
             Set the delegate implementation.

             @param delegate The delegate implementing platform specific functions.
          */
          public sealed void SetDelegate(IService delegate)
          {
               this.delegate = delegate;
          }

     /**
        Create a service request for the given ServiceToken. This method creates the request, populating
existing headers and cookies for the same service. The request is populated with all the defaults
for the service being invoked and requires only the request body to be set. Headers and cookies may be
manipulated as needed by the application before submitting the ServiceRequest via invokeService.

        @param serviceToken ServiceToken to be used for the creation of the request.
        @return ServiceRequest with pre-populated headers, cookies and defaults for the service.
        @since v2.0.6
     */
     public ServiceRequest getServiceRequest(ServiceToken serviceToken) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getServiceRequest({"+serviceToken+"}).");

          ServiceRequest result = null;
          if (this.delegate != null) {
               result = this.delegate.getServiceRequest(serviceToken);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getServiceRequest' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getServiceRequest'.");
          }
          return result;          
     }

     /**
        Obtains a ServiceToken for the given parameters to be used for the creation of requests.

        @param serviceName  Service name.
        @param endpointName Endpoint name.
        @param functionName Function name.
        @param method       Method type.
        @return ServiceToken to create a service request or null if the given parameter combination is not
configured in the platform's XML service definition file.
        @since v2.0.6
     */
     public ServiceToken getServiceToken(string serviceName, string endpointName, string functionName, IServiceMethod method) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getServiceToken({"+serviceName+"},{"+endpointName+"},{"+functionName+"},{"+method+"}).");

          ServiceToken result = null;
          if (this.delegate != null) {
               result = this.delegate.getServiceToken(serviceName, endpointName, functionName, method);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getServiceToken' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getServiceToken'.");
          }
          return result;          
     }

     /**
        Returns all the possible service tokens configured in the platform's XML service definition file.

        @return Array of service tokens configured.
        @since v2.0.6
     */
     public ServiceToken[] getServicesRegistered() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getServicesRegistered.");

          ServiceToken[] result = null;
          if (this.delegate != null) {
               result = this.delegate.getServicesRegistered();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getServicesRegistered' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getServicesRegistered'.");
          }
          return result;          
     }

     /**
        Executes the given ServiceRequest and provides responses to the given callback handler.

        @param serviceRequest ServiceRequest with the request body.
        @param callback       IServiceResultCallback to handle the ServiceResponse.
        @since v2.0.6
     */
     public void invokeService(ServiceRequest serviceRequest, IServiceResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing invokeService({"+serviceRequest+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.invokeService(serviceRequest, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'invokeService' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'invokeService'.");
          }
          
     }

     /**
        Checks whether a specific service, endpoint, function and method type is configured in the platform's
XML service definition file.

        @param serviceName  Service name.
        @param endpointName Endpoint name.
        @param functionName Function name.
        @param method       Method type.
        @return Returns true if the service is configured, false otherwise.
        @since v2.0.6
     */
     public bool isServiceRegistered(string serviceName, string endpointName, string functionName, IServiceMethod method) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing isServiceRegistered({"+serviceName+"},{"+endpointName+"},{"+functionName+"},{"+method+"}).");

          bool result = false;
          if (this.delegate != null) {
               result = this.delegate.isServiceRegistered(serviceName, endpointName, functionName, method);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'isServiceRegistered' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'isServiceRegistered'.");
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
               case "getServiceRequest":
                    ServiceToken serviceToken0 = getJSONParser().fromJson(request.getParameters()[0], ServiceToken.class);
                    ServiceRequest response0 = this.getServiceRequest(serviceToken0);
                    if (response0 != null) {
                         responseJSON = getJSONParser().toJson(response0);
                    }
                    break;
               case "getServiceToken":
                    string serviceName1 = getJSONParser().fromJson(request.getParameters()[0], string.class);
                    string endpointName1 = getJSONParser().fromJson(request.getParameters()[1], string.class);
                    string functionName1 = getJSONParser().fromJson(request.getParameters()[2], string.class);
                    IServiceMethod method1 = getJSONParser().fromJson(request.getParameters()[3], IServiceMethod.class);
                    ServiceToken response1 = this.getServiceToken(serviceName1, endpointName1, functionName1, method1);
                    if (response1 != null) {
                         responseJSON = getJSONParser().toJson(response1);
                    }
                    break;
               case "getServicesRegistered":
                    ServiceToken[] response2 = this.getServicesRegistered();
                    if (response2 != null) {
                         responseJSON = getJSONParser().toJson(response2);
                    }
                    break;
               case "invokeService":
                    ServiceRequest serviceRequest3 = getJSONParser().fromJson(request.getParameters()[0], ServiceRequest.class);
                    IServiceResultCallback callback3 = new ServiceResultCallbackImpl(request.getAsyncId());
                    this.invokeService(serviceRequest3, callback3);
                    break;
               case "isServiceRegistered":
                    string serviceName4 = getJSONParser().fromJson(request.getParameters()[0], string.class);
                    string endpointName4 = getJSONParser().fromJson(request.getParameters()[1], string.class);
                    string functionName4 = getJSONParser().fromJson(request.getParameters()[2], string.class);
                    IServiceMethod method4 = getJSONParser().fromJson(request.getParameters()[3], IServiceMethod.class);
                    bool response4 = this.isServiceRegistered(serviceName4, endpointName4, functionName4, method4);
                    responseJSON = getJSONParser().toJson(response4);
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "ServiceBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.1.1.";
          }
          response.setResponse(responseJSON);
          response.setStatusCode(responseCode);
          response.setStatusMessage(responseMessage);
          return response;
     }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
