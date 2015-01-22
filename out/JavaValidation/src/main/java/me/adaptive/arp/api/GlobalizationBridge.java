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
   Interface for Managing the Globalization results
   Auto-generated implementation of IGlobalization specification.
*/
public class GlobalizationBridge extends BaseApplicationBridge implements IGlobalization, APIBridge {

     /**
        API Delegate.
     */
     private IGlobalization delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public GlobalizationBridge(IGlobalization delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return IGlobalization delegate that manages platform specific functions..
     */
     public final IGlobalization getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IGlobalization delegate) {
          this.delegate = delegate;
     }

     /**
        Returns the default locale of the application defined in the configuration file

        @return Default Locale of the application
        @since ARP1.0
     */
     public Locale getDefaultLocale() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getDefaultLocale.");

          Locale result = null;
          if (this.delegate != null) {
               result = this.delegate.getDefaultLocale();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getDefaultLocale' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getDefaultLocale'.");
          }
          return result;          
     }

     /**
        List of supported locales for the application defined in the configuration file

        @return List of locales
        @since ARP1.0
     */
     public Locale[] getLocaleSupportedDescriptors() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getLocaleSupportedDescriptors.");

          Locale[] result = null;
          if (this.delegate != null) {
               result = this.delegate.getLocaleSupportedDescriptors();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getLocaleSupportedDescriptors' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getLocaleSupportedDescriptors'.");
          }
          return result;          
     }

     /**
        Gets the text/message corresponding to the given key and locale.

        @param key    to match text
        @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
        @return Localized text.
        @since ARP1.0
     */
     public String getResourceLiteral(String key, Locale locale) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getResourceLiteral({"+key+"},{"+locale+"}).");

          String result = null;
          if (this.delegate != null) {
               result = this.delegate.getResourceLiteral(key, locale);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getResourceLiteral' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getResourceLiteral'.");
          }
          return result;          
     }

     /**
        Gets the full application configured literals (key/message pairs) corresponding to the given locale.

        @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
        @return Localized texts in the form of an object.
        @since ARP1.0
     */
     public KeyPair[] getResourceLiterals(Locale locale) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getResourceLiterals({"+locale+"}).");

          KeyPair[] result = null;
          if (this.delegate != null) {
               result = this.delegate.getResourceLiterals(locale);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getResourceLiterals' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getResourceLiterals'.");
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
               case "getDefaultLocale":
                    Locale response0 = this.getDefaultLocale();
                    if (response0 != null) {
                         responseJSON = getJSONParser().toJson(response0);
                    }
                    break;
               case "getLocaleSupportedDescriptors":
                    Locale[] response1 = this.getLocaleSupportedDescriptors();
                    if (response1 != null) {
                         responseJSON = getJSONParser().toJson(response1);
                    }
                    break;
               case "getResourceLiteral":
                    String key2 = getJSONParser().fromJson(request.getParameters()[0], String.class);
                    Locale locale2 = getJSONParser().fromJson(request.getParameters()[1], Locale.class);
                    String response2 = this.getResourceLiteral(key2, locale2);
                    if (response2 != null) {
                         responseJSON = getJSONParser().toJson(response2);
                    }
                    break;
               case "getResourceLiterals":
                    Locale locale3 = getJSONParser().fromJson(request.getParameters()[0], Locale.class);
                    KeyPair[] response3 = this.getResourceLiterals(locale3);
                    if (response3 != null) {
                         responseJSON = getJSONParser().toJson(response3);
                    }
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "GlobalizationBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.0.3.";
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
