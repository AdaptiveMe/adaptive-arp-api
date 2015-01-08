/// <reference path="APIBean.d.ts" />
/// <reference path="ContactAddressType.d.ts" />
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
declare module Adaptive {
    /**
       Structure representing the address data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactAddress extends APIBean {
        /**
           The address type
        */
        type: ContactAddressType;
        /**
           The Contact address
        */
        address: string;
        /**
           Constructor with fields

           @param address Address data.
           @param type    Address type.
           @since ARP1.0
        */
        constructor(address: string, type: ContactAddressType);
        /**
           Returns the type of the address

           @return AddressType Address type.
           @since ARP1.0
        */
        getType(): ContactAddressType;
        /**
           Set the address type

           @param type Address type.
           @since ARP1.0
        */
        setType(type: ContactAddressType): void;
        /**
           Returns the Contact address

           @return address Address data.
           @since ARP1.0
        */
        getAddress(): string;
        /**
           Set the address of the Contact

           @param address Address data.
           @since ARP1.0
        */
        setAddress(address: string): void;
    }
}
