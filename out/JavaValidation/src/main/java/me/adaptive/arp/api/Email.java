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

package me.adaptive.arp.api;

/**
   Structure representing the data elements of an email.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Email {

     /**
        Array of attatchments
     */
     private AttachmentData[] attachmentData;
     /**
        Array of Email Blind Carbon Copy recipients
     */
     private EmailAddress[] bccRecipients;
     /**
        Array of Email Carbon Copy recipients
     */
     private EmailAddress[] ccRecipients;
     /**
        Message body
     */
     private String messageBody;
     /**
        Message body mime type
     */
     private String messageBodyMimeType;
     /**
        Subject of the email
     */
     private String subject;
     /**
        Array of Email recipients
     */
     private EmailAddress[] toRecipients;

     /**
        Constructor used by the implementation
     */
     public Email() {
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
     public Email(EmailAddress[] toRecipients, EmailAddress[] ccRecipients, EmailAddress[] bccRecipients, AttachmentData[] attachmentData, String messageBody, String messageBodyMimeType, String subject) {
          this();
          this.toRecipients = toRecipients;
          this.ccRecipients = ccRecipients;
          this.bccRecipients = bccRecipients;
          this.attachmentData = attachmentData;
          this.messageBody = messageBody;
          this.messageBodyMimeType = messageBodyMimeType;
          this.subject = subject;
     }

     /**
        Constructor used by the implementation

        @param toRecipients array of recipients
        @param subject      of the email
        @param messageBody  body of the email
        @since ARP1.0
     */
     public Email(EmailAddress[] toRecipients, String subject, String messageBody) {
          this();
          this.toRecipients = toRecipients;
          this.subject = subject;
          this.messageBody = messageBody;
     }

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
