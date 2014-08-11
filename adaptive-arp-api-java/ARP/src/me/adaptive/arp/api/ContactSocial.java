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

import java.io.Serializable;

/**
 * Created by clozano on 08/08/14.
 */
public class ContactSocial implements Serializable {

    /**
     * The social network
     * @since ARP1.0
     */
    private String socialNetwork;
    /**
     * The profileUrl
     * @since ARP1.0
     */
    private String profileUrl;

    /**
     * Constructor used by the implementation
     * @param socialNetwork of the profile
     * @param profileUrl of the user
     * @since ARP1.0
     */
    public ContactSocial(String socialNetwork, String profileUrl) {
        this.socialNetwork = socialNetwork;
        this.profileUrl = profileUrl;
    }

    /**
     * Returns the social network
     * @return socialNetwork
     * @since ARP1.0
     */
    public String getSocialNetwork() {
        return socialNetwork;
    }

    /**
     * Set the social network
     * @param socialNetwork
     * @since ARP1.0
     */
    public void setSocialNetwork(String socialNetwork) {
        this.socialNetwork = socialNetwork;
    }

    /**
     * Returns the profile url of the user
     * @return profileUrl
     * @since ARP1.0
     */
    public String getProfileUrl() {
        return profileUrl;
    }

    /**
     * Set the profile url of the iser
     * @param profileUrl
     * @since ARP1.0
     */
    public void setProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
    }
}
