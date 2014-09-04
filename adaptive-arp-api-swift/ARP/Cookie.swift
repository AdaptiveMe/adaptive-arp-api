//
//  Auto-generated from: me.adaptive.arp.api.Cookie
//
//  Cookie.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class Cookie {

     /**
      * Field Declarations
      */
     var creation : Int64
     var domain : String
     var expiry : Int64
     var name : String
     var path : String
     var scheme : String
     var secure : Bool
     var value : String

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
     public func getCreation() -> Int64 {
          return self.creation
     }

     public func getDomain() -> String {
          return self.domain
     }

     public func getExpiry() -> Int64 {
          return self.expiry
     }

     public func getName() -> String {
          return self.name
     }

     public func getPath() -> String {
          return self.path
     }

     public func getScheme() -> String {
          return self.scheme
     }

     public func getValue() -> String {
          return self.value
     }

     public func isSecure() -> Bool {
          return self.secure
     }

     public func setDomain(domain : String) {
          self.domain = domain
     }

     public func setExpiry(expiry : Int64) {
          self.expiry = expiry
     }

     public func setName(name : String) {
          self.name = name
     }

     public func setPath(path : String) {
          self.path = path
     }

     public func setScheme(scheme : String) {
          self.scheme = scheme
     }

     public func setSecure(secure : Bool) {
          self.secure = secure
     }

     public func setValue(value : String) {
          self.value = value
     }


}
