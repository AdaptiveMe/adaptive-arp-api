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
 * Interface for Managing the Contact operations
 *
 * @author Francisco Javier Martin Bueno
 * @since v2.0
 */
public interface IContact extends IBasePIM {

    /**
     * Search contacts according to a term and send it to the callback
     *
     * @param term     string to search
     * @param callback called for return
     * @since v2.0
     */
    void searchContacts(String term, IContactResultCallback callback);

    /**
     * Search contacts according to a term with a filter and send it to the callback
     *
     * @param term     string to search
     * @param callback called for return
     * @param filter   to search for
     * @since v2.0
     */
    void searchContactsWithFilter(String term, IContactResultCallback callback, Filter... filter);

    /**
     * Get all the details of a contact according to its id
     *
     * @param contact  id to search for
     * @param callback called for return
     * @since v2.0
     */
    void getContact(ContactUid contact, IContactResultCallback callback);

    /**
     * Get the contact photo
     *
     * @param contact  id to search for
     * @param callback called for return
     * @since v2.0
     */
    void getContactPhoto(ContactUid contact, IContactPhotoResultCallback callback);

    /**
     * Set the contact photo
     *
     * @param contact  id to assign the photo
     * @param pngImage photo as byte array
     * @return true if set is successful;false otherwise
     * @since v2.0
     */
    boolean setContactPhoto(ContactUid contact, byte[] pngImage);

    /**
     * Get all contacts
     *
     * @param callback called for return
     * @since v2.0
     */
    void getContacts(IContactResultCallback callback);

    /**
     * Get marked fields of all contacts
     *
     * @param callback called for return
     * @param fields   to get for each Contact
     * @since v2.0
     */
    void getContactsForFields(IContactResultCallback callback, FieldGroup... fields);

    /**
     * Get marked fields of all contacts according to a filter
     *
     * @param callback called for return
     * @param fields   to get for each Contact
     * @param filter   to search for
     * @since v2.0
     */
    void getContactsWithFilter(IContactResultCallback callback, FieldGroup[] fields, Filter... filter);

    /**
     * Filter that can be used
     *
     * @since v2.0
     */
    public enum Filter {
        HasPhone, HasEmail, HasAddress, Unknown
    }

    /**
     * Group that can be retrieved
     *
     * @since v2.0
     */
    public enum FieldGroup {
        PersonalInfo, ProfessionalInfo, Addresses, Phones, Emails, Websites, Socials, Tags, Unknown
    }

}
