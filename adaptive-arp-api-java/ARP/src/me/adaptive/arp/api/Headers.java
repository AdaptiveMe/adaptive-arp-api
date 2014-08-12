/*
 *
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
 *
 */

package me.adaptive.arp.api;

import java.lang.String;

/**
 * Created by FRMI on 12/08/2014.
 */
public class Header {
    /**
     * Name ot the header
     * @since ARP1.0
     */
    private String name;
    /**
     * Value of the header
     * @since ARP1.0
     */
    private String value;

    /**
     * Constructor used by the implementation
     * @param name
     * @param value
     * @since ARP1.0
     */
    public Cookie(String name, String value) {
        this.name = name;
        this.value = value;
    }

    /**
     * Returns the header name
     * @return name
     * @since ARP1.0
     */
    public String getName() {
        return name;
    }

    /**
     * Set the header name
     * @param name
     * @since ARP1.0
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns the header value
     * @return
     * @since ARP1.0
     */
    public String getValue() {
        return value;
    }

    /**
     * Set the header value
     * @param value
     * @since ARP1.0
     */
    public void setValue(String value) {
        this.value = value;
    }
}