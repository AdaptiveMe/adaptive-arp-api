//
//  Auto-generated from: me.adaptive.arp.api.ContactPersonalInfo
//
//  ContactPersonalInfo.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class ContactPersonalInfo {

     /**
      * Field Declarations
      */
     var name : String
     var middleName : String
     var lastName : String
     var title : Title?

     /**
      * Enumeration Declarations
      */
     public enum Title {
          case Mr, Mrs, Ms, Dr
     }

     /**
      * Initialization
      */
     public convenience init(name : String, middleName : String, lastName : String, title : Title) {
          self.init()
          self.name = name
          self.middleName = middleName
          self.lastName = lastName
          self.title = title
     }

     public init() {
          self.name = ""
          self.middleName = ""
          self.lastName = ""
          self.title = nil
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

     public func setTitle(title : Title) {
          self.title = title
     }

     public func getMiddleName() -> String {
          return self.middleName
     }

     public func getTitle() -> Title {
          return self.title!
     }

     public func setMiddleName(middleName : String) {
          self.middleName = middleName
     }

     public func getLastName() -> String {
          return self.lastName
     }

     public func setLastName(lastName : String) {
          self.lastName = lastName
     }


}
