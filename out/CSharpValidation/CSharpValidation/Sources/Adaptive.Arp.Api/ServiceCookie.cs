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

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing the value of a http cookie.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     public class ServiceCookie : APIBean
     {

          /**
             ServiceCookie creation timestamp in milliseconds.
          */
          public long Creation { get; set; }
          /**
             Domain for which the cookie is valid.
          */
          public string Domain { get; set; }
          /**
             ServiceCookie expiry in milliseconds or -1 for session only.
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
             ServiceCookie is secure (https only)
          */
          public bool Secure { get; set; }
          /**
             Value of the ServiceCookie
          */
          public string Value { get; set; }

          /**
             Default constructor

             @since ARP1.0
          */
          public ServiceCookie()  {
          }

          /**
             Constructor used by the implementation

             @param Name  Name of the cookie
             @param Value Value of the cookie
             @since ARP1.0
          */
          public ServiceCookie(string Name, string Value) : base () {
               this.Name = Name;
               this.Value = Value;
          }

          /**
             Contructor with fields

             @param Name     Name of the cookie
             @param Value    Value of the cookie
             @param Domain   Domain of the cookie
             @param Path     Path of the cookie
             @param Scheme   Scheme of the cookie
             @param Secure   Privacy of the cookie
             @param Expiry   Expiration date of the cookie
             @param Creation Creation date of the cookie
             @since ARP1.0
          */
          public ServiceCookie(string Name, string Value, string Domain, string Path, string Scheme, bool Secure, long Expiry, long Creation) : base () {
               this.Name = Name;
               this.Value = Value;
               this.Domain = Domain;
               this.Path = Path;
               this.Scheme = Scheme;
               this.Secure = Secure;
               this.Expiry = Expiry;
               this.Creation = Creation;
          }

          /**
             Returns the creation date

             @return Creation date of the cookie
             @since ARP1.0
          */
          public long GetCreation() {
               return this.Creation;
          }

          /**
             Sets the creation date

             @param Creation Creation date of the cookie
             @since ARP1.0
          */
          public void SetCreation(long Creation) {
               this.Creation = Creation;
          }

          /**
             Returns the domain

             @return Domain
             @since ARP1.0
          */
          public string GetDomain() {
               return this.Domain;
          }

          /**
             Set the domain

             @param Domain Domain of the cookie
             @since ARP1.0
          */
          public void SetDomain(string Domain) {
               this.Domain = Domain;
          }

          /**
             Returns the expiration date in milis

             @return Expiry
             @since ARP1.0
          */
          public long GetExpiry() {
               return this.Expiry;
          }

          /**
             Set the expiration date in milis

             @param Expiry Expiration date of the cookie
             @since ARP1.0
          */
          public void SetExpiry(long Expiry) {
               this.Expiry = Expiry;
          }

          /**
             Returns the cookie name

             @return Name Name of the cookie
             @since ARP1.0
          */
          public string GetName() {
               return this.Name;
          }

          /**
             Set the cookie name

             @param Name Name of the cookie
             @since ARP1.0
          */
          public void SetName(string Name) {
               this.Name = Name;
          }

          /**
             Returns the path

             @return Path
             @since ARP1.0
          */
          public string GetPath() {
               return this.Path;
          }

          /**
             Set the path

             @param Path Path of the cookie
             @since ARP1.0
          */
          public void SetPath(string Path) {
               this.Path = Path;
          }

          /**
             Returns the scheme

             @return Scheme
             @since ARP1.0
          */
          public string GetScheme() {
               return this.Scheme;
          }

          /**
             Set the scheme

             @param Scheme Scheme of the cookie
             @since ARP1.0
          */
          public void SetScheme(string Scheme) {
               this.Scheme = Scheme;
          }

          /**
             Returns whether the cookie is secure or not

             @return True if the cookie is secure; false otherwise
             @since ARP1.0
          */
          public bool GetSecure() {
               return this.Secure;
          }

          /**
             Set whether the cookie is secure or not

             @param Secure Privacy of the cookie
             @since ARP1.0
          */
          public void SetSecure(bool Secure) {
               this.Secure = Secure;
          }

          /**
             Returns the cookie value

             @return Value of the cookie
             @since ARP1.0
          */
          public string GetValue() {
               return this.Value;
          }

          /**
             Set the cookie value

             @param Value Value of the cookie
             @since ARP1.0
          */
          public void SetValue(string Value) {
               this.Value = Value;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
