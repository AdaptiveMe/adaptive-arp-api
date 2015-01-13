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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing a JSON response to the HTML5 layer.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     public class APIResponse
     {

          /**
             String representing the response
          */
          public string Response { get; set; }
          /**
             Status code of the response
          */
          public int StatusCode { get; set; }

          /**
             Default constructor

             @since ARP1.0
          */
          public APIResponse()  {
          }

          /**
             Constructor with parameters

             @param Response   String representing the response
             @param StatusCode Status code of the response
             @since ARP1.0
          */
          public APIResponse(string Response, int StatusCode) : base () {
               this.Response = Response;
               this.StatusCode = StatusCode;
          }

          /**
             Response getter

             @return String representing the response
             @since ARP1.0
          */
          public string GetResponse() {
               return this.Response;
          }

          /**
             Response setter

             @param Response String representing the response
          */
          public void SetResponse(string Response) {
               this.Response = Response;
          }

          /**
             Status code getter

             @return Status code of the response
          */
          public int GetStatusCode() {
               return this.StatusCode;
          }

          /**
             Status code setter

             @param StatusCode Status code of the response
          */
          public void SetStatusCode(int StatusCode) {
               this.StatusCode = StatusCode;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
