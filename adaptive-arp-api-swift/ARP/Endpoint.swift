//
//  Auto-generated from: me.adaptive.arp.api.Endpoint
//
//  Endpoint.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class Endpoint {

     /**
      * Field Declarations
      */
     var host : String
     var path : String
     var port : Int
     var proxy : String
     var scheme : String

     /**
      * Initialization
      */
     public init() {
          self.host = ""
          self.path = ""
          self.port = 0
          self.proxy = ""
          self.scheme = ""
     }

     public convenience init(host : String, path : String, port : Int, proxy : String, scheme : String) {
          self.init()
          self.host = host
          self.path = path
          self.port = port
          self.proxy = proxy
          self.scheme = scheme
     }


     /**
      * Function Declarations
      */
     public func getHost() -> String {
          return self.host
     }

     public func getPath() -> String {
          return self.path
     }

     public func getPort() -> Int {
          return self.port
     }

     public func getProxy() -> String {
          return self.proxy
     }

     public func getScheme() -> String {
          return self.scheme
     }

     public func setHost(host : String) {
          self.host = host
     }

     public func setPath(path : String) {
          self.path = path
     }

     public func setPort(port : Int) {
          self.port = port
     }

     public func setProxy(proxy : String) {
          self.proxy = proxy
     }

     public func setScheme(scheme : String) {
          self.scheme = scheme
     }


}
