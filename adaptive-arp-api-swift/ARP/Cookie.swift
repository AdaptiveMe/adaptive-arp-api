//
//  Auto-generated from: me.adaptive.arp.api.Cookie
//
//  Cookie.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class Cookie {

     /**
      * Field Declarations
      */
     var name : String
     var value : String
     var domain : String
     var path : String
     var scheme : String
     var secure : Bool
     var expiry : Int64
     var creation : Int64

     /**
      * Initialization
      */
     public convenience init(name : String, value : String) {
          self.init()
          self.name = name
          self.value = value
     }

     public init() {
          self.name = ""
          self.value = ""
          self.domain = ""
          self.path = ""
          self.scheme = ""
          self.secure = false
          self.expiry = 0
          self.creation = 0
     }


     /**
      * Function Declarations
      */
     public func getName() -> String {
          return self.name
     }

     public func getValue() -> String {
          return self.value
     }

     public func setName(name : String) {
          self.name = name
     }

     public func setValue(value : String) {
          self.value = value
     }

     public func getPath() -> String {
          return self.path
     }

     public func getScheme() -> String {
          return self.scheme
     }

     public func setPath(path : String) {
          self.path = path
     }

     public func setScheme(scheme : String) {
          self.scheme = scheme
     }

     public func getDomain() -> String {
          return self.domain
     }

     public func isSecure() -> Bool {
          return self.secure
     }

     public func setDomain(domain : String) {
          self.domain = domain
     }

     public func setSecure(secure : Bool) {
          self.secure = secure
     }

     public func getExpiry() -> Int64 {
          return self.expiry
     }

     public func setExpiry(expiry : Int64) {
          self.expiry = expiry
     }

     public func getCreation() -> Int64 {
          return self.creation
     }


}
