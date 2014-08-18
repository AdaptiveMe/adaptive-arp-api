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
 *              <http://github.com/fnva>
 *              <http://twitter.com/ferran_vila>
 *              <mailto:ferran.vila.conesa@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

/**
 * @author Ferran Vila Conesa
 * @see me.adaptive.arp.api.IDatabase
 * @see me.adaptive.arp.api.Database
 * @see me.adaptive.arp.api.Table
 * @since ARP1.0
 */
public class Column {

    /**
     * Name of the column
     */
    private String name;

    /**
     * Constructor for implementation using.
     *
     * @param name Name of the column
     */
    public Column(String name) {
        this.name = name;
    }

    /**
     * Returns the name of the column.
     *
     * @return The name of the column.
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name of the column.
     *
     * @param name The name of the column.
     */
    public void setName(String name) {
        this.name = name;
    }
}
