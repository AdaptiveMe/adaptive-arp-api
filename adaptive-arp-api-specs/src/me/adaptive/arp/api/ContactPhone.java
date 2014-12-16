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
 * Structure representing the phone data elements of a contact.
 *
 * @author Francisco Javier Martin Bueno
 * @since ARP1.0
 */
public class ContactPhone extends APIBean {

    /**
     * The phone number
     */
    private String phone;

    /**
     * The phone number phoneType
     */
    private PhoneType phoneType;

    /**
     * Default constructor
     *
     * @since ARP1.0
     */
    public ContactPhone() {
    }

    /**
     * Constructor used by implementation to set the contact Phone
     *
     * @param phone     Phone number
     * @param phoneType Type of Phone number
     * @since ARP1.0
     */
    public ContactPhone(String phone, PhoneType phoneType) {
        this.phone = phone;
        this.phoneType = phoneType;
    }

    /**
     * Returns the phone number
     *
     * @return phone number
     * @since ARP1.0
     */
    public String getPhone() {
        return phone;
    }

    /**
     * Set the phone number
     *
     * @param phone number
     * @since ARP1.0
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * Returns the phone phoneType
     *
     * @return phoneType
     * @since ARP1.0
     */
    public me.adaptive.arp.api.ContactPhone.PhoneType getPhoneType() {
        return phoneType;
    }

    /**
     * Set the phoneType of the phone number
     *
     * @param phoneType Type of Phone number
     * @since ARP1.0
     */
    public void setPhoneType(me.adaptive.arp.api.ContactPhone.PhoneType phoneType) {
        this.phoneType = phoneType;
    }

    /**
     * Types that can be used
     *
     * @since ARP1.0
     */
    public enum PhoneType {
        Mobile, Work, Home, Main, HomeFax, WorkFax, Other, Unknown
    }
}
