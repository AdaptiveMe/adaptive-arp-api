/*
 * =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
 *
 * (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * Original author:
 *
 *     * Carlos Lozano Diez
 *                 <http://github.com/carloslozano>
 *                 <http://twitter.com/adaptivecoder>
 *                 <mailto:carlos@adaptive.me>
 *
 * Contributors:
 *
 *     * Ferran Vila Conesa
 *                 <http://github.com/fnva>
 *                 <http://twitter.com/ferran_vila>
 *                 <mailto:ferran.vila.conesa@gmail.com>
 *
 *     * Aryslan
 *                 <http://github.com/Aryslan>
 *                 <http://twitter.com/Aryslan>
 *                 <mailto:ddbc@gft.com>
 *
 *     * Francisco Javier Martin Bueno
 *                 <https://github.com/kechis>
 *                 <mailto:kechis@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

/**
 * Structure representing the address data elements of a contact.
 *
 * @author Francisco Javier Martin Bueno
 * @since ARP 2.0
 */
public class ContactAddress extends APIBean {

    /**
     * The Contact address
     */
    private String address;

    /**
     * The address type
     */
    private AddressType type;

    /**
     * Default constructor
     *
     * @since ARP 2.0
     */
    public ContactAddress() {
    }

    /**
     * Constructor with fields
     *
     * @param address Address data.
     * @param type    Address type.
     * @since ARP 2.0
     */
    public ContactAddress(String address, AddressType type) {
        this.address = address;
        this.type = type;
    }

    /**
     * Returns the Contact address
     *
     * @return address Address data.
     * @since ARP 2.0
     */
    public String getAddress() {
        return address;
    }

    /**
     * Set the address of the Contact
     *
     * @param address Address data.
     * @since ARP 2.0
     */
    public void setAddress(String address) {
        this.address = address;
    }

    /**
     * Returns the type of the address
     *
     * @return AddressType Address type.
     * @since ARP 2.0
     */
    public AddressType getType() {
        return type;
    }

    /**
     * Set the address type
     *
     * @param type Address type.
     * @since ARP 2.0
     */
    public void setType(AddressType type) {
        this.type = type;
    }

    /**
     * Types that can be used
     *
     * @since ARP 2.0
     */
    public enum AddressType {
        Home, Work, Other, Unknown
    }


}
