/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.ContactPhone -> ContactPhone.swift
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

public class ContactPhone : NSObject  {

     /**
      * Field Declarations
      */
     var phone : String
     var phoneType : PhoneType?

     /**
      * Enumeration Declarations
      */
     public enum PhoneType {
          case Mobile, Work, Home, Main, HomeFax, WorkFax, Other
     }

     /**
      * Initialization
      */
     public convenience init(phone : String, phoneType : PhoneType) {
          self.init()
          self.phone = phone
          self.phoneType = phoneType
     }

     public override init() {
          self.phone = ""
          self.phoneType = nil
     }


     /**
      * Function Declarations
      */
     public func getPhone() -> String? {
          return self.phone
     }

     public func getPhoneType() -> PhoneType {
          return self.phoneType!
     }

     public func setPhone(phone : String) {
          self.phone = phone
     }

     public func setPhoneType(phoneType : PhoneType) {
          self.phoneType = phoneType
     }


}
