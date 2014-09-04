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
 * Represents a specific user or system locate.
 */
public class Locale {

    /**
     * A valid ISO Country Code.
     *
     * @since ARP1.0
     */
    private String country;
    /**
     * A valid ISO Language Code.
     *
     * @since ARP1.0
     */
    private String language;

    /**
     * Constructor used by the implementation
     */
    public Locale() {
    }

    /**
     * Constructor used by the implementation
     *
     * @param country
     * @param language
     * @since ARP1.0
     */
    public Locale(String country, String language) {
        this.country = country;
        this.language = language;
    }

    /**
     * Returns the country code
     *
     * @return country code
     * @since ARP1.0
     */
    public String getCountry() {
        return country;
    }

    /**
     * Set the country code
     *
     * @param country code
     * @since ARP1.0
     */
    public void setCountry(String country) {
        this.country = country;
    }

    /**
     * Returns the language code
     *
     * @return language code
     * @since ARP1.0
     */
    public String getLanguage() {
        return language;
    }

    /**
     * Set the language code
     *
     * @param language code
     * @since ARP1.0
     */
    public void setLanguage(String language) {
        this.language = language;
    }

    /**
     * Overriden method according to the expected filename
     * @return string representation of the filename with the locale content
     */
    public String toString(){
        return this.language.toLowerCase()+"-"+this.country.toUpperCase();
    }
}
