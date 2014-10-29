/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.ContactPersonalInfo -> ContactPersonalInfo.swift
*
* (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
* the License. You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
* specific language governing permissions and limitations under the License.
*
* Original author:
*
*     * Carlos Lozano Diez
*                 <http://github.com/carloslozano>
*                 <http://twitter.com/adaptivecoder>
*                 <mailto:carlos@adaptive.me>
*
* Contributors:
*
*     *
*
* =====================================================================================================================
*/

import Foundation

public class ContactPersonalInfo : NSObject  {

     /**
      * Field Declarations
      */
     var lastName : String
     var middleName : String
     var name : String
     var title : Title?
     public override var description : String {
          return "ContactPersonalInfo{ lastName="+lastName+",middleName="+middleName+",name="+name+",title="+title!.hashValue.description+" }"
     }


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

     public override init() {
          self.name = ""
          self.middleName = ""
          self.lastName = ""
          self.title = nil
     }


     /**
      * Function Declarations
      */
     public func getLastName() -> String? {
          return self.lastName
     }

     public func getMiddleName() -> String? {
          return self.middleName
     }

     public func getName() -> String? {
          return self.name
     }

     public func getTitle() -> Title {
          return self.title!
     }

     public func setLastName(lastName : String) {
          self.lastName = lastName
     }

     public func setMiddleName(middleName : String) {
          self.middleName = middleName
     }

     public func setName(name : String) {
          self.name = name
     }

     public func setTitle(title : Title) {
          self.title = title
     }


}
