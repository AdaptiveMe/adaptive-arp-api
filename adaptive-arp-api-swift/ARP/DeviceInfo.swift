/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.DeviceInfo -> DeviceInfo.swift
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

public class DeviceInfo : NSObject  {

     /**
      * Field Declarations
      */
     var model : String
     var name : String
     var uuid : String
     var vendor : String

     /**
      * Initialization
      */
     public override init() {
          self.name = ""
          self.model = ""
          self.vendor = ""
          self.uuid = ""
     }

     public convenience init(name : String, model : String, vendor : String, uuid : String) {
          self.init()
          self.name = name
          self.model = model
          self.vendor = vendor
          self.uuid = uuid
     }


     /**
      * Function Declarations
      */
     public func getModel() -> String {
          return self.model
     }

     public func getName() -> String {
          return self.name
     }

     public func getUuid() -> String {
          return self.uuid
     }

     public func getVendor() -> String {
          return self.vendor
     }


}
