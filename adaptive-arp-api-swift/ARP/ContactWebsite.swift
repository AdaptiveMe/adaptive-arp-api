//
//  Auto-generated from: me.adaptive.arp.api.ContactWebsite
//
//  ContactWebsite.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class ContactWebsite {

     /**
      * Field Declarations
      */
     var url : String

     /**
      * Initialization
      */
     public convenience init(url : String) {
          self.init()
          self.url = url
     }

     public init() {
          self.url = ""
     }


     /**
      * Function Declarations
      */
     public func getUrl() -> String {
          return self.url
     }

     public func setUrl(url : String) {
          self.url = url
     }


}
