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
 * Structure representing a database reference.
 *
 * @author Ferran Vila Conesa
 * @since v2.0
 */
public class Database extends APIBean {

    /**
     * Database Name (name of the .db local file).
     */
    private String name;

    /**
     * Indicates if database was created or needs to be created as Compressed.
     */
    private boolean compress;

    /**
     * Default constructor
     *
     * @since v2.0
     */
    public Database() {
    }

    /**
     * Default constructor. The compress param is setted to false.
     *
     * @param name Name of the table.
     * @since v2.0
     */
    public Database(String name) {
        this.name = name;
        this.compress = false;
    }

    /**
     * Constructor using fields.
     *
     * @param name     Name of the DatabaseTable.
     * @param compress Compression enabled.
     * @since v2.0
     */
    public Database(String name, boolean compress) {
        this.name = name;
        this.compress = compress;
    }

    /**
     * Returns the name.
     *
     * @return The name of the table.
     * @since v2.0
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name of the table.
     *
     * @param name The name of the table.
     * @since v2.0
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns if the table is compressed
     *
     * @return Compression enabled
     * @since v2.0
     */
    public boolean isCompress() {
        return compress;
    }

    /**
     * Sets if the table is compressed or not.
     *
     * @param compress Compression enabled
     * @since v2.0
     */
    public void setCompress(boolean compress) {
        this.compress = compress;
    }
}
