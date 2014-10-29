/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.ContactAddress -> ContactAddress.swift
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

public class ContactAddress : NSObject  {

     /**
      * Field Declarations
      */
     var address : String
     var type : AddressType?
     public override var description : String {
          return "ContactAddress{ address="+address+",type="+type!.hashValue.description+" }"
     }


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

     public override init() {
          self.address = ""
          self.type = nil
     }


     /**
      * Function Declarations
      */
     public func getAddress() -> String? {
          return self.address
     }

     public func getType() -> AddressType {
          return self.type!
     }

     public func setAddress(address : String) {
          self.address = address
     }

     public func setType(type : AddressType) {
          self.type = type
     }


}
