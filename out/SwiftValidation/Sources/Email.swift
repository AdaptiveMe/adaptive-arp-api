/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Structure representing the data elements of an email.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Email : NSObject {

     /**
        Array of attatchments
     */
     var attachmentData : [AttachmentData]?
     /**
        Array of Email Blind Carbon Copy recipients
     */
     var bccRecipients : [EmailAddress]?
     /**
        Array of Email Carbon Copy recipients
     */
     var ccRecipients : [EmailAddress]?
     /**
        Message body
     */
     var messageBody : String?
     /**
        Message body mime type
     */
     var messageBodyMimeType : String?
     /**
        Subject of the email
     */
     var subject : String?
     /**
        Array of Email recipients
     */
     var toRecipients : [EmailAddress]?

     /**
        Constructor used by the implementation
     */
     public override init() {
     }

     /**
        Constructor used by the implementation

        @param toRecipients        array of recipients
        @param ccRecipients        array of cc recipients
        @param bccRecipients       array of bcc recipients
        @param attachmentData      array of attatchments
        @param messageBody         body of the email
        @param messageBodyMimeType mime type of the body
        @param subject             of the email
        @since ARP1.0
     */
     public convenience init(toRecipients: [EmailAddress], ccRecipients: [EmailAddress], bccRecipients: [EmailAddress], attachmentData: [AttachmentData], messageBody: String, messageBodyMimeType: String, subject: String) {
          self.init()
          self.toRecipients = toRecipients
          self.ccRecipients = ccRecipients
          self.bccRecipients = bccRecipients
          self.attachmentData = attachmentData
          self.messageBody = messageBody
          self.messageBodyMimeType = messageBodyMimeType
          self.subject = subject
     }

     /**
        Constructor used by the implementation

        @param toRecipients array of recipients
        @param subject      of the email
        @param messageBody  body of the email
        @since ARP1.0
     */
     public convenience init(toRecipients: [EmailAddress], subject: String, messageBody: String) {
          self.init()
          self.toRecipients = toRecipients
          self.subject = subject
          self.messageBody = messageBody
     }

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
