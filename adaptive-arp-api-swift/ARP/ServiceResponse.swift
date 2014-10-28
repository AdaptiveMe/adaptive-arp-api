/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.ServiceResponse -> ServiceResponse.swift
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

public class ServiceResponse : NSObject, Printable  {

     /**
      * Field Declarations
      */
     var content : String
     var contentBinary : [Byte]?
     var contentBinaryLength : Int
     var contentEncoding : String
     var contentLength : String
     var contentType : String
     var headers : [Header]?
     var session : ISession?
     public override var description : String {
          return "ServiceResponse{ content="+content+",contentBinary="+contentBinary!.description+",contentBinaryLength="+contentBinaryLength.description+",contentEncoding="+contentEncoding+",contentLength="+contentLength+",contentType="+contentType+",headers="+headers!.description+",session="+session!.description+" }"
     }


     /**
      * Initialization
      */
     public override init() {
          self.content = ""
          self.contentType = ""
          self.contentLength = ""
          self.contentBinary = nil
          self.contentBinaryLength = 0
          self.headers = nil
          self.session = nil
          self.contentEncoding = ""
     }

     public convenience init(content : String, contentType : String, contentLength : String, contentBinary : [Byte], contentBinaryLength : Int, headers : [Header], session : ISession, contentEncoding : String) {
          self.init()
          self.content = content
          self.contentType = contentType
          self.contentLength = contentLength
          self.contentBinary = contentBinary
          self.contentBinaryLength = contentBinaryLength
          self.headers = headers
          self.session = session
          self.contentEncoding = contentEncoding
     }


     /**
      * Function Declarations
      */
     public func getContent() -> String? {
          return self.content
     }

     public func getContentBinary() -> [Byte]? {
          return self.contentBinary
     }

     public func getContentBinaryLength() -> Int {
          return self.contentBinaryLength
     }

     public func getContentEncoding() -> String? {
          return self.contentEncoding
     }

     public func getContentLength() -> String? {
          return self.contentLength
     }

     public func getContentType() -> String? {
          return self.contentType
     }

     public func getHeaders() -> [Header]? {
          return self.headers
     }

     public func getSession() -> ISession? {
          return self.session!
     }

     public func setContent(content : String) {
          self.content = content
     }

     public func setContentBinary(contentBinary : [Byte]) {
          self.contentBinary = contentBinary
     }

     public func setContentBinaryLength(contentBinaryLength : Int) {
          self.contentBinaryLength = contentBinaryLength
     }

     public func setContentEncoding(contentEncoding : String) {
          self.contentEncoding = contentEncoding
     }

     public func setContentLength(contentLength : String) {
          self.contentLength = contentLength
     }

     public func setContentType(contentType : String) {
          self.contentType = contentType
     }

     public func setHeaders(headers : [Header]) {
          self.headers = headers
     }

     public func setSession(session : ISession) {
          self.session = session
     }


}
