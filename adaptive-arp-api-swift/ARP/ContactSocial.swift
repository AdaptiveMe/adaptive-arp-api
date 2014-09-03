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
     var socialNetwork : String

     /**
      * Initialization
      */
     public convenience init(socialNetwork : String, profileUrl : String) {
          self.init()
          self.socialNetwork = socialNetwork
          self.profileUrl = profileUrl
     }

     public init() {
          self.socialNetwork = ""
          self.profileUrl = ""
     }


     /**
      * Function Declarations
      */
     public func getProfileUrl() -> String {
          return self.profileUrl
     }

     public func getSocialNetwork() -> String {
          return self.socialNetwork
     }

     public func setProfileUrl(profileUrl : String) {
          self.profileUrl = profileUrl
     }

     public func setSocialNetwork(socialNetwork : String) {
          self.socialNetwork = socialNetwork
     }


}
