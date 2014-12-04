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

package me.adaptive.arp.api;

/**
   Structure representing the data of a http cookie.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Cookie {

     /**
        Cookie creation timestamp in milliseconds.
     */
     private long creation;
     /**
        Value of the Cookie
     */
     private String data;
     /**
        Domain for which the cookie is valid.
     */
     private String domain;
     /**
        Cookie expiry in milliseconds or -1 for session only.
     */
     private long expiry;
     /**
        Name ot the cookie
     */
     private String name;
     /**
        URI path for which the cookie is valid.
     */
     private String path;
     /**
        Scheme of the domain - http/https - for which the cookie is valid.
     */
     private String scheme;
     /**
        Cookie is secure (https only)
     */
     private boolean secure;

     /**
        Constructor used by the implementation
     */
     public Cookie() {
     }

     /**
        Constructor used by the implementation

        @param name
        @param data
        @since ARP1.0
     */
     public Cookie(String name, String data) {
          this();
          this.name = name;
          this.data = data;
     }
     /**
        Gets Cookie creation timestamp in milliseconds.

        @return creation Cookie creation timestamp in milliseconds.
     */
     public long getCreation() {
          return this.creation;
     }

     /**
        Sets Cookie creation timestamp in milliseconds.

        @param creation Cookie creation timestamp in milliseconds.
     */
     public void setCreation(long creation) {
          this.creation = creation;
     }

     /**
        Returns the cookie value

        @return 
        @since ARP1.0
     */
     public String getData() {
          return this.data;
     }

     /**
        Set the cookie value

        @param data
        @since ARP1.0
     */
     public void setData(String data) {
          this.data = data;
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

        @param domain
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

        @param expiry
     */
     public void setExpiry(long expiry) {
          this.expiry = expiry;
     }

     /**
        Returns the cookie name

        @return name
        @since ARP1.0
     */
     public String getName() {
          return this.name;
     }

     /**
        Set the cookie name

        @param name
        @since ARP1.0
     */
     public void setName(String name) {
          this.name = name;
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

        @param path
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

        @param scheme
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

        @param secure
     */
     public void setSecure(boolean secure) {
          this.secure = secure;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
