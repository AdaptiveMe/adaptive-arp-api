/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.Email -> Email.swift
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

public class Email : NSObject  {

     /**
      * Field Declarations
      */
     var attachmentData : [AttachmentData]?
     var bccRecipients : [EmailAddress]?
     var ccRecipients : [EmailAddress]?
     var messageBody : String
     var messageBodyMimeType : String
     var subject : String
     var toRecipients : [EmailAddress]?
     public override var description : String {
          return "Email{attachmentData=\(attachmentData!.description), bccRecipients=\(bccRecipients!.description), ccRecipients=\(ccRecipients!.description), messageBody=\(messageBody), messageBodyMimeType=\(messageBodyMimeType), subject=\(subject), toRecipients=\(toRecipients!.description)}"
     }


     /**
      * Initialization
      */
     public convenience init(toRecipients : [EmailAddress], subject : String, messageBody : String) {
          self.init()
          self.toRecipients = toRecipients
          self.subject = subject
          self.messageBody = messageBody
     }

     public convenience init(toRecipients : [EmailAddress], ccRecipients : [EmailAddress], bccRecipients : [EmailAddress], attachmentData : [AttachmentData], messageBody : String, messageBodyMimeType : String, subject : String) {
          self.init()
          self.toRecipients = toRecipients
          self.ccRecipients = ccRecipients
          self.bccRecipients = bccRecipients
          self.attachmentData = attachmentData
          self.messageBody = messageBody
          self.messageBodyMimeType = messageBodyMimeType
          self.subject = subject
     }

     public override init() {
          self.toRecipients = [EmailAddress]()
          self.ccRecipients = [EmailAddress]()
          self.bccRecipients = [EmailAddress]()
          self.attachmentData = [AttachmentData]()
          self.messageBody = ""
          self.messageBodyMimeType = ""
          self.subject = ""
     }


     /**
      * Function Declarations
      */
     public func getAttachmentData() -> [AttachmentData]? {
          return self.attachmentData
     }

     public func getBccRecipients() -> [EmailAddress]? {
          return self.bccRecipients
     }

     public func getCcRecipients() -> [EmailAddress]? {
          return self.ccRecipients
     }

     public func getMessageBody() -> String? {
          return self.messageBody
     }

     public func getMessageBodyMimeType() -> String? {
          return self.messageBodyMimeType
     }

     public func getSubject() -> String? {
          return self.subject
     }

     public func getToRecipients() -> [EmailAddress]? {
          return self.toRecipients
     }

     public func setAttachmentData(attachmentData : [AttachmentData]) {
          self.attachmentData = attachmentData
     }

     public func setBccRecipients(bccRecipients : [EmailAddress]) {
          self.bccRecipients = bccRecipients
     }

     public func setCcRecipients(ccRecipients : [EmailAddress]) {
          self.ccRecipients = ccRecipients
     }

     public func setMessageBody(messageBody : String) {
          self.messageBody = messageBody
     }

     public func setMessageBodyMimeType(messageBodyMimeType : String) {
          self.messageBodyMimeType = messageBodyMimeType
     }

     public func setSubject(subject : String) {
          self.subject = subject
     }

     public func setToRecipients(toRecipients : [EmailAddress]) {
          self.toRecipients = toRecipients
     }


}
