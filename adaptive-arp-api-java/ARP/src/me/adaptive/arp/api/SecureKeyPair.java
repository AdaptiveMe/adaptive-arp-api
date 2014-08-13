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
 *     * DBarranco
 *                 <http://github.com/Aryslan>
 *                 <http://twitter.com/Aryslan>
 *                 <mailto:ddbc@gft.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;


/**
 * Created by DBarranco on 11/08/14.
 */
public class SecureKeyPair {

    private String key;

    private String value;

    /**
     * Returns the object key name.
     *
     * @return Key name.
     * @since ARP 1.0
     */
    public String getKey() {
        return key;
    }

    /**
     * Sets the key name for this object.
     *
     * @param key Key name.
     * @since ARP 1.0
     */
    public void setKey(String key) {
        this.key = key;
    }

    /**
     * Returns the object value
     *
     * @return Value.
     * @since ARP 1.0
     */
    public String getValue() {
        return value;
    }

    /**
     * Sets the value for this object
     *
     * @param value value to set.
     * @since ARP 1.0
     */
    public void setValue(String value) {
        this.value = value;
    }

}
