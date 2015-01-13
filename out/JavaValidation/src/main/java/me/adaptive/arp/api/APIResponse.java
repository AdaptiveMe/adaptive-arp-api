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

/**
   Structure representing a JSON response to the HTML5 layer.

   @author Carlos Lozano Diez
   @since ARP1.0
   @version 1.0
*/
public class APIResponse {

     /**
        String representing the JavaScript value or JSON object representation of the response.
     */
     private String response;
     /**
        Status code of the response
     */
     private int statusCode;
     /**
        Status message of the response
     */
     private String statusMessage;

     /**
        Default constructor

        @since ARP1.0
     */
     public APIResponse() {
     }

     /**
        Constructor with parameters.

        @param response   String representing the JavaScript value or JSON object representation of the response.
        @param statusCode Status code of the response (200 = OK, others are warning or error conditions).
        @since ARP1.0
     */
     public APIResponse(String response, int statusCode) {
          this();
          this.response = response;
          this.statusCode = statusCode;
     }

     /**
        Constructor with parameters.

        @param response      String representing the JavaScript value or JSON object representation of the response.
        @param statusCode    Status code of the response (200 = OK, others are warning or error conditions).
        @param statusMessage Status message of the response.
     */
     public APIResponse(String response, int statusCode, String statusMessage) {
          this();
          this.response = response;
          this.statusCode = statusCode;
          this.statusMessage = statusMessage;
     }

     /**
        Response getter

        @return String representing the JavaScript value or JSON object representation of the response.
        @since ARP1.0
     */
     public String getResponse() {
          return this.response;
     }

     /**
        Response setter

        @param response String representing the JavaScript value or JSON object representation of the response.
     */
     public void setResponse(String response) {
          this.response = response;
     }

     /**
        Status code getter

        @return Status code of the response (200 = OK, others are warning or error conditions).
     */
     public int getStatusCode() {
          return this.statusCode;
     }

     /**
        Status code setter

        @param statusCode Status code of the response  (200 = OK, others are warning or error conditions).
     */
     public void setStatusCode(int statusCode) {
          this.statusCode = statusCode;
     }

     /**
        Status message getter

        @return Status message of the response.
     */
     public String getStatusMessage() {
          return this.statusMessage;
     }

     /**
        Status message setter.

        @param statusMessage Status message of the response
     */
     public void setStatusMessage(String statusMessage) {
          this.statusMessage = statusMessage;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
