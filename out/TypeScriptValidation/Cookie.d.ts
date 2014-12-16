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
declare module Adaptive {
    /**
       Structure representing the data of a http cookie.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Cookie {
        /**
           Cookie creation timestamp in milliseconds.
        */
        creation: number;
        /**
           Value of the Cookie
        */
        data: string;
        /**
           Domain for which the cookie is valid.
        */
        domain: string;
        /**
           Cookie expiry in milliseconds or -1 for session only.
        */
        expiry: number;
        /**
           Name ot the cookie
        */
        name: string;
        /**
           URI path for which the cookie is valid.
        */
        path: string;
        /**
           Scheme of the domain - http/https - for which the cookie is valid.
        */
        scheme: string;
        /**
           Cookie is secure (https only)
        */
        secure: boolean;
        /**
           Constructor used by the implementation

           @param name
           @param data
           @since ARP1.0
        */
        constructor(name: string, data: string);
        /**
           Gets Cookie creation timestamp in milliseconds.

           @return creation Cookie creation timestamp in milliseconds.
        */
        getCreation(): number;
        /**
           Sets Cookie creation timestamp in milliseconds.

           @param creation Cookie creation timestamp in milliseconds.
        */
        setCreation(creation: number): void;
        /**
           Returns the cookie value

           @return
           @since ARP1.0
        */
        getData(): string;
        /**
           Set the cookie value

           @param data
           @since ARP1.0
        */
        setData(data: string): void;
        /**
           Returns the domain

           @return domain
           @since ARP1.0
        */
        getDomain(): string;
        /**
           Set the domain

           @param domain
        */
        setDomain(domain: string): void;
        /**
           Returns the expiration date in milis

           @return expiry
           @since ARP1.0
        */
        getExpiry(): number;
        /**
           Set the expiration date in milis

           @param expiry
        */
        setExpiry(expiry: number): void;
        /**
           Returns the cookie name

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the cookie name

           @param name
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           Returns the path

           @return path
           @since ARP1.0
        */
        getPath(): string;
        /**
           Set the path

           @param path
        */
        setPath(path: string): void;
        /**
           Returns the scheme

           @return scheme
           @since ARP1.0
        */
        getScheme(): string;
        /**
           Set the scheme

           @param scheme
        */
        setScheme(scheme: string): void;
        /**
           Returns whether the cookie is secure or not

           @return true if the cookie is secure; false otherwise
           @since ARP1.0
        */
        getSecure(): boolean;
        /**
           Set whether the cookie is secure or not

           @param secure
        */
        setSecure(secure: boolean): void;
    }
}
