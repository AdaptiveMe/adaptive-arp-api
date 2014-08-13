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
 * Created by FRMI on 12/08/2014.
 */
public interface ISession {


    /**
     * Returns the cookie array
     * @return cookie array
     * @since ARP1.0
     */
    Cookie[] getCookies();

    /**
     * Set the cookies array
     * @param cookie
     */
    void setCookies(Cookie[] cookie);

    /**
     * Set a cookie object
     * @param cookie
     */
    void setCookie(Cookie cookie);

    /**
     * Remove a cookies array
     * @param cookie
     */
    void removeCookies(Cookie[] cookie);

    /**
     * Remove a cookie
     * @param cookie
     */
    void removeCookie(Cookie cookie);

    /**
     * Returns all Session Attributes
     */
    Object[] getAttributes();

    /**
     * Returns an attribute object
     * @return object attribute
     * @since ARP1.0
     */
    Object getAttribute(String name);

    /**
     * Set an attribute
     * @param name
     * @param value
     */
    void setAttribute(String name, Object value);

    /**
     * Returns all attibute names
     * @return array with all attribute names
     */
    String[] listAttributeNames();

    /**
     * Remove an attribute by its name
     * @param name
     */
    void removeAttribute(String name);

    /**
     * Remove all attributes
     */
    void removeAttributes();
}