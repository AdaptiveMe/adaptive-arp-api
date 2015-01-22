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
   Interface for Managing the Security operations
   Auto-generated implementation of ISecurity specification.
*/
public class SecurityBridge extends BaseSecurityBridge implements ISecurity, APIBridge {

     /**
        API Delegate.
     */
     private ISecurity delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public SecurityBridge(ISecurity delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return ISecurity delegate that manages platform specific functions..
     */
     public final ISecurity getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(ISecurity delegate) {
          this.delegate = delegate;
     }

     /**
        Deletes from the device internal storage the entry/entries containing the specified key names.

        @param keys             Array with the key names to delete.
        @param publicAccessName The name of the shared internal storage object (if needed).
        @param callback         callback to be executed upon function result.
        @since ARP 1.0
     */
     public void deleteSecureKeyValuePairs(String[] keys, String publicAccessName, ISecurityResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing deleteSecureKeyValuePairs({"+keys+"},{"+publicAccessName+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.deleteSecureKeyValuePairs(keys, publicAccessName, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'deleteSecureKeyValuePairs' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'deleteSecureKeyValuePairs'.");
          }
          
     }

     /**
        Retrieves from the device internal storage the entry/entries containing the specified key names.

        @param keys             Array with the key names to retrieve.
        @param publicAccessName The name of the shared internal storage object (if needed).
        @param callback         callback to be executed upon function result.
        @since ARP 1.0
     */
     public void getSecureKeyValuePairs(String[] keys, String publicAccessName, ISecurityResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getSecureKeyValuePairs({"+keys+"},{"+publicAccessName+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.getSecureKeyValuePairs(keys, publicAccessName, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getSecureKeyValuePairs' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getSecureKeyValuePairs'.");
          }
          
     }

     /**
        Returns if the device has been modified in anyhow

        @return true if the device has been modified; false otherwise
        @since ARP1.0
     */
     public boolean isDeviceModified() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing isDeviceModified.");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.isDeviceModified();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'isDeviceModified' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'isDeviceModified'.");
          }
          return result;          
     }

     /**
        Stores in the device internal storage the specified item/s.

        @param keyValues        Array containing the items to store on the device internal memory.
        @param publicAccessName The name of the shared internal storage object (if needed).
        @param callback         callback to be executed upon function result.
        @since ARP 1.0
     */
     public void setSecureKeyValuePairs(SecureKeyPair[] keyValues, String publicAccessName, ISecurityResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing setSecureKeyValuePairs({"+keyValues+"},{"+publicAccessName+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.setSecureKeyValuePairs(keyValues, publicAccessName, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'setSecureKeyValuePairs' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'setSecureKeyValuePairs'.");
          }
          
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
               case "deleteSecureKeyValuePairs":
                    String[] keys0 = getJSONParser().fromJson(request.getParameters()[0], String[].class);
                    String publicAccessName0 = getJSONParser().fromJson(request.getParameters()[1], String.class);
                    ISecurityResultCallback callback0 = new SecurityResultCallbackImpl(request.getAsyncId());
                    this.deleteSecureKeyValuePairs(keys0, publicAccessName0, callback0);
                    break;
               case "getSecureKeyValuePairs":
                    String[] keys1 = getJSONParser().fromJson(request.getParameters()[0], String[].class);
                    String publicAccessName1 = getJSONParser().fromJson(request.getParameters()[1], String.class);
                    ISecurityResultCallback callback1 = new SecurityResultCallbackImpl(request.getAsyncId());
                    this.getSecureKeyValuePairs(keys1, publicAccessName1, callback1);
                    break;
               case "isDeviceModified":
                    boolean response2 = this.isDeviceModified();
                    responseJSON = getJSONParser().toJson(response2);
                    break;
               case "setSecureKeyValuePairs":
                    SecureKeyPair[] keyValues3 = getJSONParser().fromJson(request.getParameters()[0], SecureKeyPair[].class);
                    String publicAccessName3 = getJSONParser().fromJson(request.getParameters()[1], String.class);
                    ISecurityResultCallback callback3 = new SecurityResultCallbackImpl(request.getAsyncId());
                    this.setSecureKeyValuePairs(keyValues3, publicAccessName3, callback3);
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "SecurityBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.0.3.";
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
