//
//  Auto-generated from: me.adaptive.arp.api.Locale
//
//  Locale.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:55 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

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
     public func getLanguage() -> String {
          return self.language
     }

     public func getCountry() -> String {
          return self.country
     }

     public func setCountry(country : String) {
          self.country = country
     }

     public func setLanguage(language : String) {
          self.language = language
     }


}
