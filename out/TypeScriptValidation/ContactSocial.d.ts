/// <reference path="APIBean.d.ts" />
/// <reference path="ContactSocialNetwork.d.ts" />
/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       Structure representing the social data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactSocial extends APIBean {
        /**
           The social network
        */
        socialNetwork: ContactSocialNetwork;
        /**
           The profileUrl
        */
        profileUrl: string;
        /**
           Constructor used by the implementation

           @param socialNetwork of the profile
           @param profileUrl    of the user
           @since ARP1.0
        */
        constructor(socialNetwork: ContactSocialNetwork, profileUrl: string);
        /**
           Returns the social network

           @return socialNetwork
           @since ARP1.0
        */
        getSocialNetwork(): ContactSocialNetwork;
        /**
           Set the social network

           @param socialNetwork of the profile
           @since ARP1.0
        */
        setSocialNetwork(socialNetwork: ContactSocialNetwork): void;
        /**
           Returns the profile url of the user

           @return profileUrl
           @since ARP1.0
        */
        getProfileUrl(): string;
        /**
           Set the profile url of the iser

           @param profileUrl of the user
           @since ARP1.0
        */
        setProfileUrl(profileUrl: string): void;
    }
}
