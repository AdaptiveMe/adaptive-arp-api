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
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing the data of a http cookie.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Cookie = (function () {
        /**
           Constructor used by the implementation

           @param name
           @param data
           @since ARP1.0
        */
        function Cookie(name, data) {
            this.name = name;
            this.data = data;
        }
        /**
           Gets Cookie creation timestamp in milliseconds.

           @return creation Cookie creation timestamp in milliseconds.
        */
        Cookie.prototype.getCreation = function () {
            return this.creation;
        };
        /**
           Sets Cookie creation timestamp in milliseconds.

           @param creation Cookie creation timestamp in milliseconds.
        */
        Cookie.prototype.setCreation = function (creation) {
            this.creation = creation;
        };
        /**
           Returns the cookie value

           @return
           @since ARP1.0
        */
        Cookie.prototype.getData = function () {
            return this.data;
        };
        /**
           Set the cookie value

           @param data
           @since ARP1.0
        */
        Cookie.prototype.setData = function (data) {
            this.data = data;
        };
        /**
           Returns the domain

           @return domain
           @since ARP1.0
        */
        Cookie.prototype.getDomain = function () {
            return this.domain;
        };
        /**
           Set the domain

           @param domain
        */
        Cookie.prototype.setDomain = function (domain) {
            this.domain = domain;
        };
        /**
           Returns the expiration date in milis

           @return expiry
           @since ARP1.0
        */
        Cookie.prototype.getExpiry = function () {
            return this.expiry;
        };
        /**
           Set the expiration date in milis

           @param expiry
        */
        Cookie.prototype.setExpiry = function (expiry) {
            this.expiry = expiry;
        };
        /**
           Returns the cookie name

           @return name
           @since ARP1.0
        */
        Cookie.prototype.getName = function () {
            return this.name;
        };
        /**
           Set the cookie name

           @param name
           @since ARP1.0
        */
        Cookie.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Returns the path

           @return path
           @since ARP1.0
        */
        Cookie.prototype.getPath = function () {
            return this.path;
        };
        /**
           Set the path

           @param path
        */
        Cookie.prototype.setPath = function (path) {
            this.path = path;
        };
        /**
           Returns the scheme

           @return scheme
           @since ARP1.0
        */
        Cookie.prototype.getScheme = function () {
            return this.scheme;
        };
        /**
           Set the scheme

           @param scheme
        */
        Cookie.prototype.setScheme = function (scheme) {
            this.scheme = scheme;
        };
        /**
           Returns whether the cookie is secure or not

           @return true if the cookie is secure; false otherwise
           @since ARP1.0
        */
        Cookie.prototype.getSecure = function () {
            return this.secure;
        };
        /**
           Set whether the cookie is secure or not

           @param secure
        */
        Cookie.prototype.setSecure = function (secure) {
            this.secure = secure;
        };
        return Cookie;
    })();
    Adaptive.Cookie = Cookie;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Cookie.js.map