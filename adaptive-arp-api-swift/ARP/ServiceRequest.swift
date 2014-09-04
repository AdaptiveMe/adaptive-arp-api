//
//  Auto-generated from: me.adaptive.arp.api.ServiceRequest
//
//  ServiceRequest.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class ServiceRequest {

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

     /**
      * Enumeration Declarations
      */
     public enum ProtocolVersion {
          case HTTP_PROTOCOL_VERSION_1_0, HTTP_PROTOCOL_VERSION_1_1
     }

     /**
      * Initialization
      */
     public init() {
          self.content = ""
          self.contentType = ""
          self.contentLength = 0
          self.rawContent = nil
          self.headers = nil
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
     public func getContent() -> String {
          return self.content
     }

     public func getContentEncoding() -> String {
          return self.contentEncoding
     }

     public func getContentLength() -> Int {
          return self.contentLength
     }

     public func getContentType() -> String {
          return self.contentType
     }

     public func getHeaders() -> [Header] {
          return self.headers!
     }

     public func getMethod() -> String {
          return self.method
     }

     public func getProtocolVersion() -> ProtocolVersion {
          return self.protocolVersion!
     }

     public func getRawContent() -> [Byte] {
          return self.rawContent!
     }

     public func getSession() -> ISession {
          return self.session!
     }

     public func setContent(content : String) {
          self.content = content
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
