/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.ContactEmail -> ContactEmail.swift
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

public class ContactEmail : NSObject  {

     /**
      * Field Declarations
      */
     var email : String
     var primary : Bool
     var type : EmailType?
     public override var description : String {
          return "ContactEmail{ email="+email+",primary="+primary.description+",type="+type!.hashValue.description+" }"
     }


     /**
      * Enumeration Declarations
      */
     public enum EmailType {
          case Personal, Work, Other
     }

     /**
      * Initialization
      */
     public convenience init(type : EmailType, primary : Bool, email : String) {
          self.init()
          self.type = type
          self.primary = primary
          self.email = email
     }

     public override init() {
          self.type = nil
          self.primary = false
          self.email = ""
     }


     /**
      * Function Declarations
      */
     public func getEmail() -> String? {
          return self.email
     }

     public func getType() -> EmailType {
          return self.type!
     }

     public func isPrimary() -> Bool {
          return self.primary
     }

     public func setEmail(email : String) {
          self.email = email
     }

     public func setPrimary(primary : Bool) {
          self.primary = primary
     }

     public func setType(type : EmailType) {
          self.type = type
     }


}
