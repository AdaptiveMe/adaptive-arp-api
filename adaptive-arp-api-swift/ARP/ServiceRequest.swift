/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.ServiceRequest -> ServiceRequest.swift
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

public class ServiceRequest : NSObject  {

     /**
      * Field Declarations
      */
     var content : String
     var contentEncoding : String
     var contentLength : Int
     var contentType : String
     var headers : [Header]?
     var method : String
     var protocolVersion : ProtocolVersion?
     var rawContent : [Byte]?
     var session : ISession?
     public override var description : String {
          return "ServiceRequest{content=\(content), contentEncoding=\(contentEncoding), contentLength=\(contentLength.description), contentType=\(contentType), headers=\(headers!.description), method=\(method), protocolVersion=\(protocolVersion?.hashValue.description), rawContent=\(rawContent!.description), session=\(session?.description)}"
     }


     /**
      * Enumeration Declarations
      */
     public enum ProtocolVersion {
          /// Enum Values
          case HTTP_PROTOCOL_VERSION_1_0, HTTP_PROTOCOL_VERSION_1_1, Unknown

          /// toString
          public func toString() -> String {
               switch self {
                    case .HTTP_PROTOCOL_VERSION_1_0: return "HTTP_PROTOCOL_VERSION_1_0"
                    case .HTTP_PROTOCOL_VERSION_1_1: return "HTTP_PROTOCOL_VERSION_1_1"
                    case .Unknown: return "Unknown"
               }
          }

          /// toEnum
          public static func toEnum(string:String?) -> ProtocolVersion {
               if let validString = string {
                    switch validString {
                         case "HTTP_PROTOCOL_VERSION_1_0": return .HTTP_PROTOCOL_VERSION_1_0
                         case "HTTP_PROTOCOL_VERSION_1_1": return .HTTP_PROTOCOL_VERSION_1_1
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
          self.content = ""
          self.contentType = ""
          self.contentLength = 0
          self.rawContent = [Byte]()
          self.headers = [Header]()
          self.method = ""
          self.protocolVersion = nil
          self.session = nil
          self.contentEncoding = ""
     }

     public convenience init(content : String, contentType : String, contentLength : Int, rawContent : [Byte], headers : [Header], method : String, protocolVersion : ProtocolVersion, session : ISession, contentEncoding : String) {
          self.init()
          self.content = content
          self.contentType = contentType
          self.contentLength = contentLength
          self.rawContent = rawContent
          self.headers = headers
          self.method = method
          self.protocolVersion = protocolVersion
          self.session = session
          self.contentEncoding = contentEncoding
     }


     /**
      * Function Declarations
      */
     public func getContent() -> String? {
          return self.content
     }

     public func getContentEncoding() -> String? {
          return self.contentEncoding
     }

     public func getContentLength() -> Int {
          return self.contentLength
     }

     public func getContentType() -> String? {
          return self.contentType
     }

     public func getHeaders() -> [Header]? {
          return self.headers
     }

     public func getMethod() -> String? {
          return self.method
     }

     public func getProtocolVersion() -> ProtocolVersion {
          return self.protocolVersion!
     }

     public func getRawContent() -> [Byte]? {
          return self.rawContent
     }

     public func getSession() -> ISession? {
          return self.session!
     }

     public func setContentEncoding(contentEncoding : String) {
          self.contentEncoding = contentEncoding
     }

     public func setContentLength(contentLength : Int) {
          self.contentLength = contentLength
     }

     public func setContentType(contentType : String) {
          self.contentType = contentType
     }

     public func setContent(content : String) {
          self.content = content
     }

     public func setHeaders(headers : [Header]) {
          self.headers = headers
     }

     public func setMethod(method : String) {
          self.method = method
     }

     public func setProtocolVersion(protocolVersion : ProtocolVersion) {
          self.protocolVersion = protocolVersion
     }

     public func setRawContent(rawContent : [Byte]) {
          self.rawContent = rawContent
     }

     public func setSession(session : ISession) {
          self.session = session
     }


}
