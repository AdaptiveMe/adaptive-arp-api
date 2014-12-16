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

    * @version v2.0.0
    
-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Structure representing the phone data elements of a contact.

   @author Francisco Javier Martin Bueno
   @since ARP1.0
   @version 1.0
*/
public class ContactPhone : APIBean {

     /**
        The phone number phoneType
     */
     var phoneType : ContactPhoneType?
     /**
        The phone number
     */
     var phone : String?

     /**
        Default constructor

        @since ARP1.0
     */
     public override init() {
          super.init()
     }

     /**
        Constructor used by implementation to set the contact Phone

        @param phone     Phone number
        @param phoneType Type of Phone number
        @since ARP1.0
     */
     public init(phone: String, phoneType: ContactPhoneType) {
          super.init()
          self.phone = phone
          self.phoneType = phoneType
     }

     /**
        Returns the phone phoneType

        @return phoneType
        @since ARP1.0
     */
     public func getPhoneType() -> ContactPhoneType? {
          return self.phoneType
     }

     /**
        Set the phoneType of the phone number

        @param phoneType Type of Phone number
        @since ARP1.0
     */
     public func setPhoneType(phoneType: ContactPhoneType) {
          self.phoneType = phoneType
     }

     /**
        Returns the phone number

        @return phone number
        @since ARP1.0
     */
     public func getPhone() -> String? {
          return self.phone
     }

     /**
        Set the phone number

        @param phone number
        @since ARP1.0
     */
     public func setPhone(phone: String) {
          self.phone = phone
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
