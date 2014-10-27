/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.ContactSocial -> ContactSocial.swift
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
*     *
*
* =====================================================================================================================
*/

import Foundation

public class ContactSocial : NSObject  {

     /**
      * Field Declarations
      */
     var profileUrl : String
     var socialNetwork : SocialNetwork?

     /**
      * Enumeration Declarations
      */
     public enum SocialNetwork {
          case Twitter, Facebook, GooglePlus, LinkedIn, Flickr
     }

     /**
      * Initialization
      */
     public convenience init(socialNetwork : SocialNetwork, profileUrl : String) {
          self.init()
          self.socialNetwork = socialNetwork
          self.profileUrl = profileUrl
     }

     public override init() {
          self.socialNetwork = nil
          self.profileUrl = ""
     }


     /**
      * Function Declarations
      */
     public func getProfileUrl() -> String? {
          return self.profileUrl
     }

     public func getSocialNetwork() -> SocialNetwork {
          return self.socialNetwork!
     }

     public func setProfileUrl(profileUrl : String) {
          self.profileUrl = profileUrl
     }

     public func setSocialNetwork(socialNetwork : SocialNetwork) {
          self.socialNetwork = socialNetwork
     }


}
