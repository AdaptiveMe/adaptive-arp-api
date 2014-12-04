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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing the data elements of an email.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public class Email
     {

          /**
             Array of attatchments
          */
          public AttachmentData[] AttachmentData { get; set; }
          /**
             Array of Email Blind Carbon Copy recipients
          */
          public EmailAddress[] BccRecipients { get; set; }
          /**
             Array of Email Carbon Copy recipients
          */
          public EmailAddress[] CcRecipients { get; set; }
          /**
             Message body
          */
          public string MessageBody { get; set; }
          /**
             Message body mime type
          */
          public string MessageBodyMimeType { get; set; }
          /**
             Subject of the email
          */
          public string Subject { get; set; }
          /**
             Array of Email recipients
          */
          public EmailAddress[] ToRecipients { get; set; }

          /**
             Constructor used by the implementation
          */
          public Email()  {
          }

          /**
             Constructor used by the implementation

             @param ToRecipients        array of recipients
             @param CcRecipients        array of cc recipients
             @param BccRecipients       array of bcc recipients
             @param AttachmentData      array of attatchments
             @param MessageBody         body of the email
             @param MessageBodyMimeType mime type of the body
             @param Subject             of the email
             @since ARP1.0
          */
          public Email(EmailAddress[] ToRecipients, EmailAddress[] CcRecipients, EmailAddress[] BccRecipients, AttachmentData[] AttachmentData, string MessageBody, string MessageBodyMimeType, string Subject) : base () {
               this.ToRecipients = ToRecipients;
               this.CcRecipients = CcRecipients;
               this.BccRecipients = BccRecipients;
               this.AttachmentData = AttachmentData;
               this.MessageBody = MessageBody;
               this.MessageBodyMimeType = MessageBodyMimeType;
               this.Subject = Subject;
          }

          /**
             Constructor used by the implementation

             @param ToRecipients array of recipients
             @param Subject      of the email
             @param MessageBody  body of the email
             @since ARP1.0
          */
          public Email(EmailAddress[] ToRecipients, string Subject, string MessageBody) : base () {
               this.ToRecipients = ToRecipients;
               this.Subject = Subject;
               this.MessageBody = MessageBody;
          }

          /**
             Returns an array of attachments

             @return attachmentData array with the email attachments
             @since ARP1.0
          */
          public AttachmentData[] GetAttachmentData() {
               return this.AttachmentData;
          }

          /**
             Set the email attachment data array

             @param attachmentData array of email attatchments
             @since ARP1.0
          */
          public void SetAttachmentData(AttachmentData[] AttachmentData) {
               this.AttachmentData = AttachmentData;
          }

          /**
             Returns the array of recipients

             @return bccRecipients array of bcc recipients
             @since ARP1.0
          */
          public EmailAddress[] GetBccRecipients() {
               return this.BccRecipients;
          }

          /**
             Set the array of recipients

             @param bccRecipients array of bcc recipients
             @since ARP1.0
          */
          public void SetBccRecipients(EmailAddress[] BccRecipients) {
               this.BccRecipients = BccRecipients;
          }

          /**
             Returns the array of recipients

             @return ccRecipients array of cc recipients
             @since ARP1.0
          */
          public EmailAddress[] GetCcRecipients() {
               return this.CcRecipients;
          }

          /**
             Set the array of recipients

             @param ccRecipients array of cc recipients
             @since ARP1.0
          */
          public void SetCcRecipients(EmailAddress[] CcRecipients) {
               this.CcRecipients = CcRecipients;
          }

          /**
             Returns the message body of the email

             @return message Body string of the email
          */
          public string GetMessageBody() {
               return this.MessageBody;
          }

          /**
             Set the message body of the email

             @param messageBody message body of the email
             @since ARP1.0
          */
          public void SetMessageBody(string MessageBody) {
               this.MessageBody = MessageBody;
          }

          /**
             Returns the myme type of the message body

             @return mime type string of the message boddy
             @since ARP1.0
          */
          public string GetMessageBodyMimeType() {
               return this.MessageBodyMimeType;
          }

          /**
             Set the mime type for the message body

             @param messageBodyMimeType type of the body message
             @since ARP1.0
          */
          public void SetMessageBodyMimeType(string MessageBodyMimeType) {
               this.MessageBodyMimeType = MessageBodyMimeType;
          }

          /**
             Returns the subject of the email

             @return subject string of the email
             @since ARP1.0
          */
          public string GetSubject() {
               return this.Subject;
          }

          /**
             Set the subject of the email

             @param subject of the email
             @since ARP1.0
          */
          public void SetSubject(string Subject) {
               this.Subject = Subject;
          }

          /**
             Returns the array of recipients

             @return toRecipients array of recipients
             @since ARP1.0
          */
          public EmailAddress[] GetToRecipients() {
               return this.ToRecipients;
          }

          /**
             Set the array of recipients

             @param toRecipients array of recipients
             @since ARP1.0
          */
          public void SetToRecipients(EmailAddress[] ToRecipients) {
               this.ToRecipients = ToRecipients;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
