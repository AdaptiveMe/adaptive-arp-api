//
//  Auto-generated from: me.adaptive.arp.api.Locale
//
//  Locale.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class Locale {

     /**
      * Field Declarations
      */
     var country : String
     var language : String

     /**
      * Initialization
      */
     public init() {
          self.country = ""
          self.language = ""
     }

     public convenience init(country : String, language : String) {
          self.init()
          self.country = country
          self.language = language
     }


     /**
      * Function Declarations
      */
     public func getCountry() -> String {
          return self.country
     }

     public func getLanguage() -> String {
          return self.language
     }

     public func setCountry(country : String) {
          self.country = country
     }

     public func setLanguage(language : String) {
          self.language = language
     }

     public func toString() -> String {
        return self.language+"-"+self.country;
     }


}
