//
//  Auto-generated from: me.adaptive.arp.api.AttachmentData
//
//  AttachmentData.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class AttachmentData {

     /**
      * Field Declarations
      */
     var data : [Byte]?
     var dataSize : Int64
     var fileName : String
     var mimeType : String
     var referenceUrl : String

     /**
      * Initialization
      */
     public convenience init(data : [Byte], dataSize : Int64, fileName : String, mimeType : String, referenceUrl : String) {
          self.init()
          self.data = data
          self.dataSize = dataSize
          self.fileName = fileName
          self.mimeType = mimeType
          self.referenceUrl = referenceUrl
     }

     public init() {
          self.data = nil
          self.dataSize = 0
          self.fileName = ""
          self.mimeType = ""
          self.referenceUrl = ""
     }


     /**
      * Function Declarations
      */
     public func getData() -> [Byte] {
          return self.data!
     }

     public func getDataSize() -> Int64 {
          return self.dataSize
     }

     public func getFileName() -> String {
          return self.fileName
     }

     public func getMimeType() -> String {
          return self.mimeType
     }

     public func getReferenceUrl() -> String {
          return self.referenceUrl
     }

     public func setData(data : [Byte]) {
          self.data = data
     }

     public func setDataSize(dataSize : Int64) {
          self.dataSize = dataSize
     }

     public func setFileName(fileName : String) {
          self.fileName = fileName
     }

     public func setMimeType(mimeType : String) {
          self.mimeType = mimeType
     }

     public func setReferenceUrl(referenceUrl : String) {
          self.referenceUrl = referenceUrl
     }


}
