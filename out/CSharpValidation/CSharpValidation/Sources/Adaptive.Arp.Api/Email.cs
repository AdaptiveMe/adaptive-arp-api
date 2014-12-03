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

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
