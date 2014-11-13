/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.Service -> Service.swift
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

public class Service : NSObject  {

     /**
      * Field Declarations
      */
     var endpoint : Endpoint?
     var method : ServiceMethod?
     var name : String
     var type : ServiceType?
     public override var description : String {
          return "Service{endpoint=\(endpoint?.description), method=\(method?.hashValue.description), name=\(name), type=\(type?.hashValue.description)}"
     }


     /**
      * Enumeration Declarations
      */
     public enum ServiceMethod {
          /// Enum Values
          case POST, GET, Unknown

          /// toString
          public func toString() -> String {
               switch self {
                    case .POST: return "POST"
                    case .GET: return "GET"
                    case .Unknown: return "Unknown"
               }
          }

          /// toEnum
          public static func toEnum(string:String?) -> ServiceMethod {
               if let validString = string {
                    switch validString {
                         case "POST": return .POST
                         case "GET": return .GET
                         case "Unknown": return .Unknown
                         default: return .Unknown
                    }
               } else {
                    return .Unknown
               }
          }

     }
     public enum ServiceType {
          /// Enum Values
          case SERVICETYPE_AMF_SERIALIZATION, SERVICETYPE_GWT_RPC, SERVICETYPE_OCTET_BINARY, SERVICETYPE_REMOTING_SERIALIZATION, SERVICETYPE_REST_JSON, SERVICETYPE_REST_XML, SERVICETYPE_SOAP_JSON, SERVICETYPE_SOAP_XML, SERVICETYPE_XMLRPC_JSON, SERVICETYPE_XMLRPC_XML, Unknown

          /// toString
          public func toString() -> String {
               switch self {
                    case .SERVICETYPE_AMF_SERIALIZATION: return "SERVICETYPE_AMF_SERIALIZATION"
                    case .SERVICETYPE_GWT_RPC: return "SERVICETYPE_GWT_RPC"
                    case .SERVICETYPE_OCTET_BINARY: return "SERVICETYPE_OCTET_BINARY"
                    case .SERVICETYPE_REMOTING_SERIALIZATION: return "SERVICETYPE_REMOTING_SERIALIZATION"
                    case .SERVICETYPE_REST_JSON: return "SERVICETYPE_REST_JSON"
                    case .SERVICETYPE_REST_XML: return "SERVICETYPE_REST_XML"
                    case .SERVICETYPE_SOAP_JSON: return "SERVICETYPE_SOAP_JSON"
                    case .SERVICETYPE_SOAP_XML: return "SERVICETYPE_SOAP_XML"
                    case .SERVICETYPE_XMLRPC_JSON: return "SERVICETYPE_XMLRPC_JSON"
                    case .SERVICETYPE_XMLRPC_XML: return "SERVICETYPE_XMLRPC_XML"
                    case .Unknown: return "Unknown"
               }
          }

          /// toEnum
          public static func toEnum(string:String?) -> ServiceType {
               if let validString = string {
                    switch validString {
                         case "SERVICETYPE_AMF_SERIALIZATION": return .SERVICETYPE_AMF_SERIALIZATION
                         case "SERVICETYPE_GWT_RPC": return .SERVICETYPE_GWT_RPC
                         case "SERVICETYPE_OCTET_BINARY": return .SERVICETYPE_OCTET_BINARY
                         case "SERVICETYPE_REMOTING_SERIALIZATION": return .SERVICETYPE_REMOTING_SERIALIZATION
                         case "SERVICETYPE_REST_JSON": return .SERVICETYPE_REST_JSON
                         case "SERVICETYPE_REST_XML": return .SERVICETYPE_REST_XML
                         case "SERVICETYPE_SOAP_JSON": return .SERVICETYPE_SOAP_JSON
                         case "SERVICETYPE_SOAP_XML": return .SERVICETYPE_SOAP_XML
                         case "SERVICETYPE_XMLRPC_JSON": return .SERVICETYPE_XMLRPC_JSON
                         case "SERVICETYPE_XMLRPC_XML": return .SERVICETYPE_XMLRPC_XML
                         case "Unknown": return .Unknown
                         default: return .Unknown
                    }
               } else {
                    return .Unknown
               }
          }

     }

     /**
      * Initialization
      */
     public override init() {
          self.endpoint = nil
          self.name = ""
          self.method = nil
          self.type = nil
     }

     public convenience init(endpoint : Endpoint, name : String, method : ServiceMethod, type : ServiceType) {
          self.init()
          self.endpoint = endpoint
          self.name = name
          self.method = method
          self.type = type
     }


     /**
      * Function Declarations
      */
     public func getEndpoint() -> Endpoint? {
          return self.endpoint!
     }

     public func getMethod() -> ServiceMethod {
          return self.method!
     }

     public func getName() -> String? {
          return self.name
     }

     public func getType() -> ServiceType {
          return self.type!
     }

     public func setEndpoint(endpoint : Endpoint) {
          self.endpoint = endpoint
     }

     public func setMethod(method : ServiceMethod) {
          self.method = method
     }

     public func setName(name : String) {
          self.name = name
     }

     public func setType(type : ServiceType) {
          self.type = type
     }


}
