/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.ContactWebsite -> ContactWebsite.swift
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

public class ContactWebsite : NSObject, Printable  {

     /**
      * Field Declarations
      */
     var url : String
     public override var description : String {
          return "ContactWebsite{ url="+url+" }"
     }


     /**
      * Initialization
      */
     public convenience init(url : String) {
          self.init()
          self.url = url
     }

     public override init() {
          self.url = ""
     }


     /**
      * Function Declarations
      */
     public func getUrl() -> String? {
          return self.url
     }

     public func setUrl(url : String) {
          self.url = url
     }


}
