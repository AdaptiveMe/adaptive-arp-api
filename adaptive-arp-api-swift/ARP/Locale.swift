/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.Locale -> Locale.swift
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

public class Locale : NSObject  {

     /**
      * Field Declarations
      */
     var country : String
     var language : String
     public override var description : String {
          return "Locale{ country="+country+",language="+language+" }"
     }


     /**
      * Initialization
      */
     public override init() {
          self.country = ""
          self.language = ""
     }

     public convenience init(language : String, country : String) {
          self.init()
          self.language = language
          self.country = country
     }


     /**
      * Function Declarations
      */
     public func getCountry() -> String? {
          return self.country
     }

     public func getLanguage() -> String? {
          return self.language
     }

     public func setCountry(country : String) {
          self.country = country
     }

     public func setLanguage(language : String) {
          self.language = language
     }

     public func toString() -> String? {
          return self.description
     }


}
