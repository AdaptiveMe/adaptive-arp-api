/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.Endpoint -> Endpoint.swift
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

public class Endpoint : NSObject, Printable  {

     /**
      * Field Declarations
      */
     var host : String
     var path : String
     var port : Int
     var proxy : String
     var scheme : String
     public override var description : String {
          return "Endpoint{ host="+host+",path="+path+",port="+port.description+",proxy="+proxy+",scheme="+scheme+" }"
     }


     /**
      * Initialization
      */
     public override init() {
          self.host = ""
          self.path = ""
          self.port = 0
          self.proxy = ""
          self.scheme = ""
     }

     public convenience init(host : String, path : String, port : Int, proxy : String, scheme : String) {
          self.init()
          self.host = host
          self.path = path
          self.port = port
          self.proxy = proxy
          self.scheme = scheme
     }


     /**
      * Function Declarations
      */
     public func getHost() -> String? {
          return self.host
     }

     public func getPath() -> String? {
          return self.path
     }

     public func getPort() -> Int {
          return self.port
     }

     public func getProxy() -> String? {
          return self.proxy
     }

     public func getScheme() -> String? {
          return self.scheme
     }

     public func setHost(host : String) {
          self.host = host
     }

     public func setPath(path : String) {
          self.path = path
     }

     public func setPort(port : Int) {
          self.port = port
     }

     public func setProxy(proxy : String) {
          self.proxy = proxy
     }

     public func setScheme(scheme : String) {
          self.scheme = scheme
     }


}
