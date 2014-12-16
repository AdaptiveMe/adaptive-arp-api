/// <reference path="APIBean.d.ts" />
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
declare module Adaptive {
    /**
       Structure representing the value of a http cookie.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class ServiceCookie extends APIBean {
        /**
           ServiceCookie creation timestamp in milliseconds.
        */
        creation: number;
        /**
           Domain for which the cookie is valid.
        */
        domain: string;
        /**
           ServiceCookie expiry in milliseconds or -1 for session only.
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
           ServiceCookie is secure (https only)
        */
        secure: boolean;
        /**
           Value of the ServiceCookie
        */
        value: string;
        /**
           Contructor with fields

           @param name     Name of the cookie
           @param value    Value of the cookie
           @param domain   Domain of the cookie
           @param path     Path of the cookie
           @param scheme   Scheme of the cookie
           @param secure   Privacy of the cookie
           @param expiry   Expiration date of the cookie
           @param creation Creation date of the cookie
           @since ARP1.0
        */
        constructor(name: string, value: string, domain: string, path: string, scheme: string, secure: boolean, expiry: number, creation: number);
        /**
           Returns the creation date

           @return Creation date of the cookie
           @since ARP1.0
        */
        getCreation(): number;
        /**
           Sets the creation date

           @param creation Creation date of the cookie
           @since ARP1.0
        */
        setCreation(creation: number): void;
        /**
           Returns the domain

           @return domain
           @since ARP1.0
        */
        getDomain(): string;
        /**
           Set the domain

           @param domain Domain of the cookie
           @since ARP1.0
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

           @param expiry Expiration date of the cookie
           @since ARP1.0
        */
        setExpiry(expiry: number): void;
        /**
           Returns the cookie name

           @return name Name of the cookie
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the cookie name

           @param name Name of the cookie
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

           @param path Path of the cookie
           @since ARP1.0
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

           @param scheme Scheme of the cookie
           @since ARP1.0
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

           @param secure Privacy of the cookie
           @since ARP1.0
        */
        setSecure(secure: boolean): void;
        /**
           Returns the cookie value

           @return Value of the cookie
           @since ARP1.0
        */
        getValue(): string;
        /**
           Set the cookie value

           @param value Value of the cookie
           @since ARP1.0
        */
        setValue(value: string): void;
    }
}
