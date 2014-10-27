/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.SecureKeyPair -> SecureKeyPair.swift
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

public class SecureKeyPair : NSObject, Printable  {

     /**
      * Field Declarations
      */
     var key : String
     var value : String
     public override var description : String {
          return "SecureKeyPair{ key="+key+",value="+value+" }"
     }


     /**
      * Initialization
      */
     public override init() {
          self.key = ""
          self.value = ""
     }

     public convenience init(key : String, value : String) {
          self.init()
          self.key = key
          self.value = value
     }


     /**
      * Function Declarations
      */
     public func getKey() -> String? {
          return self.key
     }

     public func getValue() -> String? {
          return self.value
     }

     public func setKey(key : String) {
          self.key = key
     }

     public func setValue(value : String) {
          self.value = value
     }


}
