//
//  Auto-generated from: me.adaptive.arp.api.ServiceResponse
//
//  ServiceResponse.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class ServiceResponse {

     /**
      * Field Declarations
      */
     var content : String
     var contentType : String
     var contentLength : String
     var contentBinary : [Byte]?
     var contentBinaryLength : Int
     var headers : [Header]?
     var session : ISession?
     var contentEncoding : String

     /**
      * Initialization
      */
     public init() {
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
     public func getContent() -> String {
          return self.content
     }

     public func setContent(content : String) {
          self.content = content
     }

     public func getContentBinary() -> [Byte] {
          return self.contentBinary!
     }

     public func setContentBinary(contentBinary : [Byte]) {
          self.contentBinary = contentBinary
     }

     public func getContentBinaryLength() -> Int {
          return self.contentBinaryLength
     }

     public func setContentBinaryLength(contentBinaryLength : Int) {
          self.contentBinaryLength = contentBinaryLength
     }

     public func setHeaders(headers : [Header]) {
          self.headers = headers
     }

     public func getSession() -> ISession {
          return self.session!
     }

     public func setSession(session : ISession) {
          self.session = session
     }

     public func setContentEncoding(contentEncoding : String) {
          self.contentEncoding = contentEncoding
     }

     public func getContentLength() -> String {
          return self.contentLength
     }

     public func getContentType() -> String {
          return self.contentType
     }

     public func setContentType(contentType : String) {
          self.contentType = contentType
     }

     public func setContentLength(contentLength : String) {
          self.contentLength = contentLength
     }

     public func getContentEncoding() -> String {
          return self.contentEncoding
     }

     public func getHeaders() -> [Header] {
          return self.headers!
     }


}
