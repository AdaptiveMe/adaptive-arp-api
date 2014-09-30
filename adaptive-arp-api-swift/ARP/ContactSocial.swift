//
//  Auto-generated from: me.adaptive.arp.api.ContactSocial
//
//  ContactSocial.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class ContactSocial {

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

     public init() {
          self.socialNetwork = nil
          self.profileUrl = ""
     }


     /**
      * Function Declarations
      */
     public func getProfileUrl() -> String {
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
