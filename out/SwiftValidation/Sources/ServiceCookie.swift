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

    * @version v1.0.45-260-gbb1d381

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Structure representing the value of a http cookie.

   @author Aryslan
   @since ARP1.0
   @version 1.0
*/
public class ServiceCookie : APIBean {

     /**
        ServiceCookie creation timestamp in milliseconds.
     */
     var creation : Int64?
     /**
        Domain for which the cookie is valid.
     */
     var domain : String?
     /**
        ServiceCookie expiry in milliseconds or -1 for session only.
     */
     var expiry : Int64?
     /**
        Name ot the cookie
     */
     var name : String?
     /**
        URI path for which the cookie is valid.
     */
     var path : String?
     /**
        Scheme of the domain - http/https - for which the cookie is valid.
     */
     var scheme : String?
     /**
        ServiceCookie is secure (https only)
     */
     var secure : Bool?
     /**
        Value of the ServiceCookie
     */
     var value : String?

     /**
        Default constructor

        @since ARP1.0
     */
     public override init() {
          super.init()
     }

     /**
        Constructor used by the implementation

        @param name  Name of the cookie
        @param value Value of the cookie
        @since ARP1.0
     */
     public init(name: String, value: String) {
          super.init()
          self.name = name
          self.value = value
     }

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
     public init(name: String, value: String, domain: String, path: String, scheme: String, secure: Bool, expiry: Int64, creation: Int64) {
          super.init()
          self.name = name
          self.value = value
          self.domain = domain
          self.path = path
          self.scheme = scheme
          self.secure = secure
          self.expiry = expiry
          self.creation = creation
     }

     /**
        Returns the creation date

        @return Creation date of the cookie
        @since ARP1.0
     */
     public func getCreation() -> Int64? {
          return self.creation
     }

     /**
        Sets the creation date

        @param creation Creation date of the cookie
        @since ARP1.0
     */
     public func setCreation(creation: Int64) {
          self.creation = creation
     }

     /**
        Returns the domain

        @return domain
        @since ARP1.0
     */
     public func getDomain() -> String? {
          return self.domain
     }

     /**
        Set the domain

        @param domain Domain of the cookie
        @since ARP1.0
     */
     public func setDomain(domain: String) {
          self.domain = domain
     }

     /**
        Returns the expiration date in milis

        @return expiry
        @since ARP1.0
     */
     public func getExpiry() -> Int64? {
          return self.expiry
     }

     /**
        Set the expiration date in milis

        @param expiry Expiration date of the cookie
        @since ARP1.0
     */
     public func setExpiry(expiry: Int64) {
          self.expiry = expiry
     }

     /**
        Returns the cookie name

        @return name Name of the cookie
        @since ARP1.0
     */
     public func getName() -> String? {
          return self.name
     }

     /**
        Set the cookie name

        @param name Name of the cookie
        @since ARP1.0
     */
     public func setName(name: String) {
          self.name = name
     }

     /**
        Returns the path

        @return path
        @since ARP1.0
     */
     public func getPath() -> String? {
          return self.path
     }

     /**
        Set the path

        @param path Path of the cookie
        @since ARP1.0
     */
     public func setPath(path: String) {
          self.path = path
     }

     /**
        Returns the scheme

        @return scheme
        @since ARP1.0
     */
     public func getScheme() -> String? {
          return self.scheme
     }

     /**
        Set the scheme

        @param scheme Scheme of the cookie
        @since ARP1.0
     */
     public func setScheme(scheme: String) {
          self.scheme = scheme
     }

     /**
        Returns whether the cookie is secure or not

        @return true if the cookie is secure; false otherwise
        @since ARP1.0
     */
     public func getSecure() -> Bool? {
          return self.secure
     }

     /**
        Set whether the cookie is secure or not

        @param secure Privacy of the cookie
        @since ARP1.0
     */
     public func setSecure(secure: Bool) {
          self.secure = secure
     }

     /**
        Returns the cookie value

        @return Value of the cookie
        @since ARP1.0
     */
     public func getValue() -> String? {
          return self.value
     }

     /**
        Set the cookie value

        @param value Value of the cookie
        @since ARP1.0
     */
     public func setValue(value: String) {
          self.value = value
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
