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
   Structure representing the cookieValue of a http cookie.

   @author Aryslan
   @since ARP1.0
   @version 1.0
*/
public class ServiceCookie extends APIBean {

     /**
        Name ot the cookie
     */
     private String cookieName;
     /**
        Value of the ServiceCookie
     */
     private String cookieValue;
     /**
        ServiceCookie creation timestamp in milliseconds.
     */
     private long creation;
     /**
        Domain for which the cookie is valid.
     */
     private String domain;
     /**
        ServiceCookie expiry in milliseconds or -1 for session only.
     */
     private long expiry;
     /**
        URI path for which the cookie is valid.
     */
     private String path;
     /**
        Scheme of the domain - http/https - for which the cookie is valid.
     */
     private String scheme;
     /**
        ServiceCookie is secure (https only)
     */
     private boolean secure;

     /**
        Default constructor

        @since ARP1.0
     */
     public ServiceCookie() {
     }

     /**
        Constructor used by the implementation

        @param cookieName  Name of the cookie
        @param cookieValue Value of the cookie
        @since ARP1.0
     */
     public ServiceCookie(String cookieName, String cookieValue) {
          super();
          this.cookieName = cookieName;
          this.cookieValue = cookieValue;
     }

     /**
        Contructor with fields

        @param cookieName  Name of the cookie
        @param cookieValue Value of the cookie
        @param domain      Domain of the cookie
        @param path        Path of the cookie
        @param scheme      Scheme of the cookie
        @param secure      Privacy of the cookie
        @param expiry      Expiration date of the cookie
        @param creation    Creation date of the cookie
        @since ARP1.0
     */
     public ServiceCookie(String cookieName, String cookieValue, String domain, String path, String scheme, boolean secure, long expiry, long creation) {
          super();
          this.cookieName = cookieName;
          this.cookieValue = cookieValue;
          this.domain = domain;
          this.path = path;
          this.scheme = scheme;
          this.secure = secure;
          this.expiry = expiry;
          this.creation = creation;
     }

     /**
        Returns the cookie cookieName

        @return cookieName Name of the cookie
        @since ARP1.0
     */
     public String getCookieName() {
          return this.cookieName;
     }

     /**
        Set the cookie cookieName

        @param cookieName Name of the cookie
        @since ARP1.0
     */
     public void setCookieName(String cookieName) {
          this.cookieName = cookieName;
     }

     /**
        Returns the cookie cookieValue

        @return Value of the cookie
        @since ARP1.0
     */
     public String getCookieValue() {
          return this.cookieValue;
     }

     /**
        Set the cookie cookieValue

        @param cookieValue Value of the cookie
        @since ARP1.0
     */
     public void setCookieValue(String cookieValue) {
          this.cookieValue = cookieValue;
     }

     /**
        Returns the creation date

        @return Creation date of the cookie
        @since ARP1.0
     */
     public long getCreation() {
          return this.creation;
     }

     /**
        Sets the creation date

        @param creation Creation date of the cookie
        @since ARP1.0
     */
     public void setCreation(long creation) {
          this.creation = creation;
     }

     /**
        Returns the domain

        @return domain
        @since ARP1.0
     */
     public String getDomain() {
          return this.domain;
     }

     /**
        Set the domain

        @param domain Domain of the cookie
        @since ARP1.0
     */
     public void setDomain(String domain) {
          this.domain = domain;
     }

     /**
        Returns the expiration date in milis

        @return expiry
        @since ARP1.0
     */
     public long getExpiry() {
          return this.expiry;
     }

     /**
        Set the expiration date in milis

        @param expiry Expiration date of the cookie
        @since ARP1.0
     */
     public void setExpiry(long expiry) {
          this.expiry = expiry;
     }

     /**
        Returns the path

        @return path
        @since ARP1.0
     */
     public String getPath() {
          return this.path;
     }

     /**
        Set the path

        @param path Path of the cookie
        @since ARP1.0
     */
     public void setPath(String path) {
          this.path = path;
     }

     /**
        Returns the scheme

        @return scheme
        @since ARP1.0
     */
     public String getScheme() {
          return this.scheme;
     }

     /**
        Set the scheme

        @param scheme Scheme of the cookie
        @since ARP1.0
     */
     public void setScheme(String scheme) {
          this.scheme = scheme;
     }

     /**
        Returns whether the cookie is secure or not

        @return true if the cookie is secure; false otherwise
        @since ARP1.0
     */
     public boolean getSecure() {
          return this.secure;
     }

     /**
        Set whether the cookie is secure or not

        @param secure Privacy of the cookie
        @since ARP1.0
     */
     public void setSecure(boolean secure) {
          this.secure = secure;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
