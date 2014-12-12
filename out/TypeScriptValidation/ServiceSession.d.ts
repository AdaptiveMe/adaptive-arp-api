/// <reference path="ServiceCookie.d.ts" />
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
       Represents a session object for HTTP request and responses

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    class ServiceSession {
        /**
           The attributes of the response
        */
        attributes: any[];
        /**
           The cookies of the response
        */
        cookies: ServiceCookie[];
        /**
           Constructor with fields

           @param cookies    The cookies of the response
           @param attributes Attributes of the response
           @since ARP1.0
        */
        constructor(cookies: ServiceCookie[], attributes: any[]);
        /**
           Gets the attributes of the response

           @return Attributes of the response
           @since ARP1.0
        */
        getAttributes(): any[];
        /**
           Sets the attributes for the response

           @param attributes Attributes of the response
           @since ARP1.0
        */
        setAttributes(attributes: any[]): void;
        /**
           Returns the cookies of the response

           @return The cookies of the response
           @since ARP1.0
        */
        getCookies(): ServiceCookie[];
        /**
           Sets the cookies of the response

           @param cookies The cookies of the response
           @since ARP1.0
        */
        setCookies(cookies: ServiceCookie[]): void;
    }
}
