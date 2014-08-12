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

/**
 * Created by clozano on 08/08/14.
 */
public class ContactTag {

    /**
     * The name of the Tag
     * @since ARP1.0
     */
    private String name;
    /**
     * The value of the Tag
     * @since ARP1.0
     */
    private String value;

    /**
     * Constructor used by the implementation
     * @param value
     * @param name
     * @since ARP1.0
     */
    public ContactTag(String name, String value) {
        this.value = value;
        this.name = name;
    }

    /**
     * Returns the name of the Tag
     * @return name
     * @since ARP1.0
     */
    public String getName() {
        return name;
    }

    /**
     * Set the name of the Tag
     * @param name
     * @since ARP1.0
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns the value of the Tag
     * @return value
     * @since ARP1.0
     */
    public String getValue() {
        return value;
    }

    /**
     * Set the value of the Tag
     * @param value
     * @since ARP1.0
     */
    public void setValue(String value) {
        this.value = value;
    }
}

