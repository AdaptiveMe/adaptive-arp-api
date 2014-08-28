//
//  Auto-generated from: me.adaptive.arp.api.ContactAddress
//
//  ContactAddress.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class ContactAddress {

     /**
      * Field Declarations
      */
     var address : String
     var type : AddressType?

     /**
      * Enumeration Declarations
      */
     public enum AddressType {
          case Home, Work, Other
     }

     /**
      * Initialization
      */
     public convenience init(address : String, type : AddressType) {
          self.init()
          self.address = address
          self.type = type
     }

     public init() {
          self.address = ""
          self.type = nil
     }


     /**
      * Function Declarations
      */
     public func getAddress() -> String {
          return self.address
     }

     public func getType() -> AddressType {
          return self.type!
     }

     public func setType(type : AddressType) {
          self.type = type
     }

     public func setAddress(address : String) {
          self.address = address
     }


}
