/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.Database -> Database.swift
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

public class Database : NSObject  {

     /**
      * Field Declarations
      */
     var compress : Bool
     var name : String
     public override var description : String {
          return "Database{ compress="+compress.description+",name="+name+" }"
     }


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

     public override init() {
          self.name = ""
          self.compress = false
     }


     /**
      * Function Declarations
      */
     public func getName() -> String? {
          return self.name
     }

     public func isCompress() -> Bool {
          return self.compress
     }

     public func setCompress(compress : Bool) {
          self.compress = compress
     }

     public func setName(name : String) {
          self.name = name
     }


}
