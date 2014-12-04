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

#import <Email.h>

/**

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
@implementation Email


     /**
        Constructor used by the implementation
     */
     - (id) init {
          self = [self init];
          return self;
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
     - (id) initWithToRecipientsCcRecipientsBccRecipientsAttachmentDataMessageBodyMessageBodyMimeTypeSubject:(NSArray*)toRecipients ccRecipients:(NSArray*)ccRecipients bccRecipients:(NSArray*)bccRecipients attachmentData:(NSArray*)attachmentData messageBody:(NSString*)messageBody messageBodyMimeType:(NSString*)messageBodyMimeType subject:(NSString*)subject {
          self = [self init];
          if (self) {
               [self setToRecipients:toRecipients];
               [self setCcRecipients:ccRecipients];
               [self setBccRecipients:bccRecipients];
               [self setAttachmentData:attachmentData];
               [self setMessageBody:messageBody];
               [self setMessageBodyMimeType:messageBodyMimeType];
               [self setSubject:subject];
          }
          return self;
     }

     /**
        Constructor used by the implementation

        @param toRecipients array of recipients
        @param subject      of the email
        @param messageBody  body of the email
        @since ARP1.0
     */
     - (id) initWithToRecipientsSubjectMessageBody:(NSArray*)toRecipients subject:(NSString*)subject messageBody:(NSString*)messageBody {
          self = [self init];
          if (self) {
               [self setToRecipients:toRecipients];
               [self setSubject:subject];
               [self setMessageBody:messageBody];
          }
          return self;
     }


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
