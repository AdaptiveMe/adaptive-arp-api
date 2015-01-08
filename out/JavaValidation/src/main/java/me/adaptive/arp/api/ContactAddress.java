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
   Structure representing the address data elements of a contact.

   @author Francisco Javier Martin Bueno
   @since ARP1.0
   @version 1.0
*/
public class ContactAddress extends APIBean {

     /**
        The address type
     */
     private ContactAddressType type;
     /**
        The Contact address
     */
     private String address;

     /**
        Default constructor

        @since ARP1.0
     */
     public ContactAddress() {
     }

     /**
        Constructor with fields

        @param address Address data.
        @param type    Address type.
        @since ARP1.0
     */
     public ContactAddress(String address, ContactAddressType type) {
          super();
          this.address = address;
          this.type = type;
     }

     /**
        Returns the type of the address

        @return AddressType Address type.
        @since ARP1.0
     */
     public ContactAddressType getType() {
          return this.type;
     }

     /**
        Set the address type

        @param type Address type.
        @since ARP1.0
     */
     public void setType(ContactAddressType type) {
          this.type = type;
     }

     /**
        Returns the Contact address

        @return address Address data.
        @since ARP1.0
     */
     public String getAddress() {
          return this.address;
     }

     /**
        Set the address of the Contact

        @param address Address data.
        @since ARP1.0
     */
     public void setAddress(String address) {
          this.address = address;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
