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

/**
 * Structure representing the data of a http cookie.
 */
public class Cookie {
    /**
     * Name ot the cookie
     *
     * @since ARP1.0
     */
    private String name;
    /**
     * Value of the Cookie
     *
     * @since ARP1.0
     */
    private String value;
    /**
     * Domain for which the cookie is valid.
     */
    private String domain;

    /**
     * URI path for which the cookie is valid.
     */
    private String path;
    /**
     * Scheme of the domain - http/https - for which the cookie is valid.
     */
    private String scheme;

    /**
     * Cookie is secure (https only)
     */
    private boolean secure;

    /**
     * Cookie expiry in milliseconds or -1 for session only.
     */
    private long expiry;

    /**
     * Cookie creation timestamp in milliseconds.
     */
    private long creation;

    /**
     * Constructor used by the implementation
     *
     * @param name
     * @param value
     * @since ARP1.0
     */
    public Cookie(String name, String value) {
        this.name = name;
        this.value = value;
    }

    /**
     * Returns the domain
     *
     * @return domain
     * @since ARP1.0
     */
    public String getDomain() {
        return domain;
    }

    /**
     * Set the domain
     *
     * @param domain
     */
    public void setDomain(String domain) {
        this.domain = domain;
    }

    /**
     * Returns the path
     *
     * @return path
     * @since ARP1.0
     */
    public String getPath() {
        return path;
    }

    /**
     * Set the path
     *
     * @param path
     */
    public void setPath(String path) {
        this.path = path;
    }

    /**
     * Returns the scheme
     *
     * @return scheme
     * @since ARP1.0
     */
    public String getScheme() {
        return scheme;
    }

    /**
     * Set the scheme
     *
     * @param scheme
     */
    public void setScheme(String scheme) {
        this.scheme = scheme;
    }

    /**
     * Returns whether the cookie is secure or not
     *
     * @return true if the cookie is secure; false otherwise
     * @since ARP1.0
     */
    public boolean isSecure() {
        return secure;
    }

    /**
     * Set whether the cookie is secure or not
     *
     * @param secure
     */
    public void setSecure(boolean secure) {
        this.secure = secure;
    }

    /**
     * Returns the expiration date in milis
     *
     * @return expiry
     * @since ARP1.0
     */
    public long getExpiry() {
        return expiry;
    }

    /**
     * Set the expiration date in milis
     *
     * @param expiry
     */
    public void setExpiry(long expiry) {
        this.expiry = expiry;
    }

    /**
     * Returns the cookie name
     *
     * @return name
     * @since ARP1.0
     */
    public String getName() {
        return name;
    }

    /**
     * Set the cookie name
     *
     * @param name
     * @since ARP1.0
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns the cookie value
     *
     * @return
     * @since ARP1.0
     */
    public String getValue() {
        return value;
    }

    /**
     * Set the cookie value
     *
     * @param value
     * @since ARP1.0
     */
    public void setValue(String value) {
        this.value = value;
    }

    /**
     * @return
     * @since ARP1.0
     */
    public long getCreation() {
        return creation;
    }
}
