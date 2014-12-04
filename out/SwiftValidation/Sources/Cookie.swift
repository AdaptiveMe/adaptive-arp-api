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

/**
   Structure representing the data of a http cookie.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Cookie : NSObject {

     /**
        Cookie creation timestamp in milliseconds.
     */
     var creation : Int64?
     /**
        Value of the Cookie
     */
     var data : String?
     /**
        Domain for which the cookie is valid.
     */
     var domain : String?
     /**
        Cookie expiry in milliseconds or -1 for session only.
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
        Cookie is secure (https only)
     */
     var secure : Bool?

     /**
        Constructor used by the implementation
     */
     public override init() {
          super.init()
     }

     /**
        Constructor used by the implementation

        @param name
        @param data
        @since ARP1.0
     */
     public init(name: String, data: String) {
          super.init()
          self.name = name
          self.data = data
     }

     /**
        Gets Cookie creation timestamp in milliseconds.

        @return creation Cookie creation timestamp in milliseconds.
     */
     public func getCreation() -> Int64? {
          return self.creation
     }

     /**
        Sets Cookie creation timestamp in milliseconds.

        @param creation Cookie creation timestamp in milliseconds.
     */
     public func setCreation(creation: Int64) {
          self.creation = creation
     }

     /**
        Returns the cookie value

        @return 
        @since ARP1.0
     */
     public func getData() -> String? {
          return self.data
     }

     /**
        Set the cookie value

        @param data
        @since ARP1.0
     */
     public func setData(data: String) {
          self.data = data
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

        @param domain
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

        @param expiry
     */
     public func setExpiry(expiry: Int64) {
          self.expiry = expiry
     }

     /**
        Returns the cookie name

        @return name
        @since ARP1.0
     */
     public func getName() -> String? {
          return self.name
     }

     /**
        Set the cookie name

        @param name
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

        @param path
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

        @param scheme
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

        @param secure
     */
     public func setSecure(secure: Bool) {
          self.secure = secure
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
