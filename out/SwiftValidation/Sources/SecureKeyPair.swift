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

/**
   Represents a single secureKey-value pair.

   @author Aryslan
   @since ARP1.0
   @version 1.0
*/
public class SecureKeyPair : APIBean {

     /**
        Value of the secured element
     */
     var secureData : String?
     /**
        Key of the secured element
     */
     var secureKey : String?

     /**
        Default constructor

        @since ARP1.0
     */
     public override init() {
          super.init()
     }

     /**
        Constructor with parameters

        @param secureKey  name of the keypair
        @param secureData value of the keypair
        @since ARP1.0
     */
     public init(secureKey: String, secureData: String) {
          super.init()
          self.secureKey = secureKey
          self.secureData = secureData
     }

     /**
        Returns the object value

        @return Value.
        @since ARP 1.0
     */
     public func getSecureData() -> String? {
          return self.secureData
     }

     /**
        Sets the value for this object

        @param secureData value to set.
        @since ARP 1.0
     */
     public func setSecureData(secureData: String) {
          self.secureData = secureData
     }

     /**
        Returns the object secureKey name.

        @return Key name.
        @since ARP 1.0
     */
     public func getSecureKey() -> String? {
          return self.secureKey
     }

     /**
        Sets the secureKey name for this object.

        @param secureKey Key name.
        @since ARP 1.0
     */
     public func setSecureKey(secureKey: String) {
          self.secureKey = secureKey
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
