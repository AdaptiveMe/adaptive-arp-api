/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.Cookie -> Cookie.swift
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

public class Cookie : NSObject  {

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

     public override init() {
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
