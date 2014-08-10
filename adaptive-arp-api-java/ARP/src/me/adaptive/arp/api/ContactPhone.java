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
 *     * Francisco Javier Martin Bueno
 *             <https://github.com/kechis>
 *             <mailto:kechis@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

import java.io.Serializable;

/**
 * Created by clozano on 08/08/14.
 */
public class ContactPhone implements Serializable {
    /**
     * The destination of the phone
     * @since ARP1.0
     */
    enum Description {
        Mobile, Work, Home, Main, HomeFax, WorkFax, Other
    }

    /**
     * The phone number
     * @since ARP1.0
     */
    private string phone;

    /**
     * The phone number description
     * @since ARP1.0
     */
    private Description description;

    /**
     * Constructor used by implementation to set the contact Phone
     * @param phone number
     * @param description of the phone number
     * @since ARP1.0
     */
    public ContactPhone(string phone, Description description) {
        this.phone = phone;
        this.description = description;
    }

    /**
     * Returns the phone number
     * @return phone number
     * @since ARP1.0
     */
    public string getPhone() {
        return phone;
    }

    /**
     * Set the phone number
     * @param phone number
     * @since ARP1.0
     */
    public void setPhone(string phone) {
        this.phone = phone;
    }

    /**
     * Returns the phone description
     * @return description of the phone number
     * @since ARP1.0
     */
    public me.adaptive.arp.api.ContactPhone.Description getDescription() {
        return description;
    }

    /**
     * Set the description of the phone number
     * @param description of the phone number
     * @since ARP1.0
     */
    public void setDescription(me.adaptive.arp.api.ContactPhone.Description description) {
        this.description = description;
    }
}
