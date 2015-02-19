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
 * Structure representing the cookieValue of a http cookie.
 *
 * @author Aryslan
 * @since v2.0
 */
public class ServiceSessionCookie extends APIBean {

    /**
     * Name ot the cookie.
     *
     * @since v2.0
     */
    private String cookieName;

    /**
     * Value of the ServiceCookie.
     *
     * @since v2.0
     */
    private String cookieValue;

    /**
     * Domain for which the cookie is valid.
     *
     * @since v2.0
     */
    private String domain;

    /**
     * URI path for which the cookie is valid.
     *
     * @since v2.0
     */
    private String path;
    /**
     * Scheme of the domain - http/https - for which the cookie is valid.
     *
     * @since v2.0
     */
    private String scheme;

    /**
     * ServiceCookie is secure (https only).
     *
     * @since v2.0
     */
    private boolean secure;

    /**
     * ServiceCookie expiry in milliseconds or -1 for session only.
     *
     * @since v2.0
     */
    private long expiry;

    /**
     * ServiceCookie creation timestamp in milliseconds.
     *
     * @since v2.0
     */
    private long creation;

    /**
     * Default constructor.
     *
     * @since v2.0
     */
    public ServiceSessionCookie() {
    }

    /**
     * Constructor used by the implementation
     *
     * @param cookieName  Name of the cookie
     * @param cookieValue Value of the cookie
     * @since v2.0
     */
    public ServiceSessionCookie(String cookieName, String cookieValue) {
        this.cookieName = cookieName;
        this.cookieValue = cookieValue;
    }

    /**
     * Returns the domain
     *
     * @return domain
     * @since v2.0
     */
    public String getDomain() {
        return domain;
    }

    /**
     * Set the domain
     *
     * @param domain Domain of the cookie
     * @since v2.0
     */
    public void setDomain(String domain) {
        this.domain = domain;
    }

    /**
     * Returns the path
     *
     * @return path
     * @since v2.0
     */
    public String getPath() {
        return path;
    }

    /**
     * Set the path
     *
     * @param path Path of the cookie
     * @since v2.0
     */
    public void setPath(String path) {
        this.path = path;
    }

    /**
     * Returns the scheme
     *
     * @return scheme
     * @since v2.0
     */
    public String getScheme() {
        return scheme;
    }

    /**
     * Set the scheme
     *
     * @param scheme Scheme of the cookie
     * @since v2.0
     */
    public void setScheme(String scheme) {
        this.scheme = scheme;
    }

    /**
     * Returns whether the cookie is secure or not
     *
     * @return true if the cookie is secure; false otherwise
     * @since v2.0
     */
    public boolean isSecure() {
        return secure;
    }

    /**
     * Set whether the cookie is secure or not
     *
     * @param secure Privacy of the cookie
     * @since v2.0
     */
    public void setSecure(boolean secure) {
        this.secure = secure;
    }

    /**
     * Returns the expiration date in milis
     *
     * @return expiry
     * @since v2.0
     */
    public long getExpiry() {
        return expiry;
    }

    /**
     * Set the expiration date in milis
     *
     * @param expiry Expiration date of the cookie
     * @since v2.0
     */
    public void setExpiry(long expiry) {
        this.expiry = expiry;
    }

    /**
     * Returns the cookie cookieName
     *
     * @return cookieName Name of the cookie
     * @since v2.0
     */
    public String getCookieName() {
        return cookieName;
    }

    /**
     * Set the cookie cookieName
     *
     * @param cookieName Name of the cookie
     * @since v2.0
     */
    public void setCookieName(String cookieName) {
        this.cookieName = cookieName;
    }

    /**
     * Returns the cookie cookieValue
     *
     * @return Value of the cookie
     * @since v2.0
     */
    public String getCookieValue() {
        return cookieValue;
    }

    /**
     * Set the cookie cookieValue
     *
     * @param cookieValue Value of the cookie
     * @since v2.0
     */
    public void setCookieValue(String cookieValue) {
        this.cookieValue = cookieValue;
    }

    /**
     * Returns the creation date
     *
     * @return Creation date of the cookie
     * @since v2.0
     */
    public long getCreation() {
        return creation;
    }

    /**
     * Sets the creation date
     *
     * @param creation Creation date of the cookie
     * @since v2.0
     */
    public void setCreation(long creation) {
        this.creation = creation;
    }
}
