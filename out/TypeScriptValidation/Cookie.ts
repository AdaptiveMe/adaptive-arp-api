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

module Adaptive {

     /**
        Structure representing the data of a http cookie.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Cookie {

          /**
             Cookie creation timestamp in milliseconds.
          */
          creation : number;
          /**
             Value of the Cookie
          */
          data : string;
          /**
             Domain for which the cookie is valid.
          */
          domain : string;
          /**
             Cookie expiry in milliseconds or -1 for session only.
          */
          expiry : number;
          /**
             Name ot the cookie
          */
          name : string;
          /**
             URI path for which the cookie is valid.
          */
          path : string;
          /**
             Scheme of the domain - http/https - for which the cookie is valid.
          */
          scheme : string;
          /**
             Cookie is secure (https only)
          */
          secure : boolean;
          /**
             Constructor used by the implementation

             @param name
             @param data
             @since ARP1.0
          */
          constructor(name: string, data: string) {
               this.name = name;
               this.data = data;
          }

          /**
             Gets Cookie creation timestamp in milliseconds.

             @return creation Cookie creation timestamp in milliseconds.
          */
          getCreation() : number {
               return this.creation;
          }

          /**
             Sets Cookie creation timestamp in milliseconds.

             @param creation Cookie creation timestamp in milliseconds.
          */
          setCreation(creation: number) {
               this.creation = creation;
          }

          /**
             Returns the cookie value

             @return 
             @since ARP1.0
          */
          getData() : string {
               return this.data;
          }

          /**
             Set the cookie value

             @param data
             @since ARP1.0
          */
          setData(data: string) {
               this.data = data;
          }

          /**
             Returns the domain

             @return domain
             @since ARP1.0
          */
          getDomain() : string {
               return this.domain;
          }

          /**
             Set the domain

             @param domain
          */
          setDomain(domain: string) {
               this.domain = domain;
          }

          /**
             Returns the expiration date in milis

             @return expiry
             @since ARP1.0
          */
          getExpiry() : number {
               return this.expiry;
          }

          /**
             Set the expiration date in milis

             @param expiry
          */
          setExpiry(expiry: number) {
               this.expiry = expiry;
          }

          /**
             Returns the cookie name

             @return name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Set the cookie name

             @param name
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             Returns the path

             @return path
             @since ARP1.0
          */
          getPath() : string {
               return this.path;
          }

          /**
             Set the path

             @param path
          */
          setPath(path: string) {
               this.path = path;
          }

          /**
             Returns the scheme

             @return scheme
             @since ARP1.0
          */
          getScheme() : string {
               return this.scheme;
          }

          /**
             Set the scheme

             @param scheme
          */
          setScheme(scheme: string) {
               this.scheme = scheme;
          }

          /**
             Returns whether the cookie is secure or not

             @return true if the cookie is secure; false otherwise
             @since ARP1.0
          */
          getSecure() : boolean {
               return this.secure;
          }

          /**
             Set whether the cookie is secure or not

             @param secure
          */
          setSecure(secure: boolean) {
               this.secure = secure;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
