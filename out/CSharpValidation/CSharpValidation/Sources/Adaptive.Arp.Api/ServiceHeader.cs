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

    * @version v1.0.45
-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing the data of a http request or response header.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     public class ServiceHeader : APIBean
     {

          /**
             Value of the header
          */
          public string Data { get; set; }
          /**
             Name ot the header
          */
          public string Name { get; set; }

          /**
             Default constructor

             @since ARP1.0
          */
          public ServiceHeader()  {
          }

          /**
             Constructor with fields

             @param Name Name of the header
             @param Data Value of the header
             @since ARP1.0
          */
          public ServiceHeader(string Name, string Data) : base () {
               this.Name = Name;
               this.Data = Data;
          }

          /**
             Returns the header value

             @return ServiceHeader value
             @since ARP1.0
          */
          public string GetData() {
               return this.Data;
          }

          /**
             Set the header value

             @param Data ServiceHeader value
             @since ARP1.0
          */
          public void SetData(string Data) {
               this.Data = Data;
          }

          /**
             Returns the header name

             @return ServiceHeader name
             @since ARP1.0
          */
          public string GetName() {
               return this.Name;
          }

          /**
             Set the header name

             @param Name Name of the header
             @since ARP1.0
          */
          public void SetName(string Name) {
               this.Name = Name;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
