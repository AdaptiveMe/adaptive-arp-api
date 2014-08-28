//
//  Auto-generated from: me.adaptive.arp.api.Database
//
//  Database.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:55 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class Database {

     /**
      * Field Declarations
      */
     var name : String
     var compress : Bool

     /**
      * Initialization
      */
     public convenience init(name : String, compress : Bool) {
          self.init()
          self.name = name
          self.compress = compress
     }

     public convenience init(name : String) {
          self.init()
          self.name = name
     }

     public init() {
          self.name = ""
          self.compress = false
     }


     /**
      * Function Declarations
      */
     public func getName() -> String {
          return self.name
     }

     public func setName(name : String) {
          self.name = name
     }

     public func setCompress(compress : Bool) {
          self.compress = compress
     }

     public func isCompress() -> Bool {
          return self.compress
     }


}
