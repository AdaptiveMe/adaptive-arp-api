//
//  Auto-generated from: me.adaptive.arp.api.ContactSocial
//
//  ContactSocial.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:55 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class ContactSocial {

     /**
      * Field Declarations
      */
     var socialNetwork : String
     var profileUrl : String

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
     public func getSocialNetwork() -> String {
          return self.socialNetwork
     }

     public func setSocialNetwork(socialNetwork : String) {
          self.socialNetwork = socialNetwork
     }

     public func getProfileUrl() -> String {
          return self.profileUrl
     }

     public func setProfileUrl(profileUrl : String) {
          self.profileUrl = profileUrl
     }


}
