//
//  Auto-generated from: me.adaptive.arp.api.ContactWebsite
//
//  ContactWebsite.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

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
     public func setUrl(url : String) {
          self.url = url
     }

     public func getUrl() -> String {
          return self.url
     }


}
