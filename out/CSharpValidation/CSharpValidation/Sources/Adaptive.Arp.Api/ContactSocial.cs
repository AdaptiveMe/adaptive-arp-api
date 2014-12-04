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

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing the social data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public class ContactSocial
     {

          /**
             The social network
          */
          public ContactSocialNetwork SocialNetwork { get; set; }
          /**
             The profileUrl
          */
          public string ProfileUrl { get; set; }

          /**
             Constructor used by the implementation
          */
          public ContactSocial()  {
          }

          /**
             Constructor used by the implementation

             @param SocialNetwork of the profile
             @param ProfileUrl    of the user
             @since ARP1.0
          */
          public ContactSocial(ContactSocialNetwork SocialNetwork, string ProfileUrl) : base () {
               this.SocialNetwork = SocialNetwork;
               this.ProfileUrl = ProfileUrl;
          }

          /**
             Returns the social network

             @return socialNetwork
             @since ARP1.0
          */
          public ContactSocialNetwork GetSocialNetwork() {
               return this.SocialNetwork;
          }

          /**
             Set the social network

             @param socialNetwork
             @since ARP1.0
          */
          public void SetSocialNetwork(ContactSocialNetwork SocialNetwork) {
               this.SocialNetwork = SocialNetwork;
          }

          /**
             Returns the profile url of the user

             @return profileUrl
             @since ARP1.0
          */
          public string GetProfileUrl() {
               return this.ProfileUrl;
          }

          /**
             Set the profile url of the iser

             @param profileUrl
             @since ARP1.0
          */
          public void SetProfileUrl(string ProfileUrl) {
               this.ProfileUrl = ProfileUrl;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
