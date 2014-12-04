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

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing the data of a http cookie.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public class Cookie
     {

          /**
             Cookie creation timestamp in milliseconds.
          */
          public long Creation { get; set; }
          /**
             Value of the Cookie
          */
          public string Data { get; set; }
          /**
             Domain for which the cookie is valid.
          */
          public string Domain { get; set; }
          /**
             Cookie expiry in milliseconds or -1 for session only.
          */
          public long Expiry { get; set; }
          /**
             Name ot the cookie
          */
          public string Name { get; set; }
          /**
             URI path for which the cookie is valid.
          */
          public string Path { get; set; }
          /**
             Scheme of the domain - http/https - for which the cookie is valid.
          */
          public string Scheme { get; set; }
          /**
             Cookie is secure (https only)
          */
          public bool Secure { get; set; }

          /**
             Constructor used by the implementation
          */
          public Cookie()  {
          }

          /**
             Constructor used by the implementation

             @param Name
             @param Data
             @since ARP1.0
          */
          public Cookie(string Name, string Data) : base () {
               this.Name = Name;
               this.Data = Data;
          }

          /**
             Gets Cookie creation timestamp in milliseconds.

             @return creation Cookie creation timestamp in milliseconds.
          */
          public long GetCreation() {
               return this.Creation;
          }

          /**
             Sets Cookie creation timestamp in milliseconds.

             @param creation Cookie creation timestamp in milliseconds.
          */
          public void SetCreation(long Creation) {
               this.Creation = Creation;
          }

          /**
             Returns the cookie value

             @return 
             @since ARP1.0
          */
          public string GetData() {
               return this.Data;
          }

          /**
             Set the cookie value

             @param data
             @since ARP1.0
          */
          public void SetData(string Data) {
               this.Data = Data;
          }

          /**
             Returns the domain

             @return domain
             @since ARP1.0
          */
          public string GetDomain() {
               return this.Domain;
          }

          /**
             Set the domain

             @param domain
          */
          public void SetDomain(string Domain) {
               this.Domain = Domain;
          }

          /**
             Returns the expiration date in milis

             @return expiry
             @since ARP1.0
          */
          public long GetExpiry() {
               return this.Expiry;
          }

          /**
             Set the expiration date in milis

             @param expiry
          */
          public void SetExpiry(long Expiry) {
               this.Expiry = Expiry;
          }

          /**
             Returns the cookie name

             @return name
             @since ARP1.0
          */
          public string GetName() {
               return this.Name;
          }

          /**
             Set the cookie name

             @param name
             @since ARP1.0
          */
          public void SetName(string Name) {
               this.Name = Name;
          }

          /**
             Returns the path

             @return path
             @since ARP1.0
          */
          public string GetPath() {
               return this.Path;
          }

          /**
             Set the path

             @param path
          */
          public void SetPath(string Path) {
               this.Path = Path;
          }

          /**
             Returns the scheme

             @return scheme
             @since ARP1.0
          */
          public string GetScheme() {
               return this.Scheme;
          }

          /**
             Set the scheme

             @param scheme
          */
          public void SetScheme(string Scheme) {
               this.Scheme = Scheme;
          }

          /**
             Returns whether the cookie is secure or not

             @return true if the cookie is secure; false otherwise
             @since ARP1.0
          */
          public bool GetSecure() {
               return this.Secure;
          }

          /**
             Set whether the cookie is secure or not

             @param secure
          */
          public void SetSecure(bool Secure) {
               this.Secure = Secure;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
