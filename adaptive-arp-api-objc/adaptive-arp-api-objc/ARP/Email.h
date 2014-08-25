/*
 * =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
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

//
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Email.java
//
//

#ifndef _ARPEmail_H_
#define _ARPEmail_H_

@class IOSObjectArray;

#import "JreEmulation.h"

@interface ARPEmail : NSObject {
 @public
  IOSObjectArray *toRecipients_;
  IOSObjectArray *ccRecipients_;
  IOSObjectArray *bccRecipients_;
  IOSObjectArray *attachmentData_;
  NSString *messageBody_;
  NSString *messageBodyMimeType_;
  NSString *subject_;
}

- (id)init;

- (id)initWithARPEmailAddressArray:(IOSObjectArray *)toRecipients
          withARPEmailAddressArray:(IOSObjectArray *)ccRecipients
          withARPEmailAddressArray:(IOSObjectArray *)bccRecipients
        withARPAttachmentDataArray:(IOSObjectArray *)attachmentData
                      withNSString:(NSString *)messageBody
                      withNSString:(NSString *)messageBodyMimeType
                      withNSString:(NSString *)subject;

- (id)initWithARPEmailAddressArray:(IOSObjectArray *)toRecipients
                      withNSString:(NSString *)subject
                      withNSString:(NSString *)messageBody;

- (IOSObjectArray *)getToRecipients;

- (void)setToRecipientsWithARPEmailAddressArray:(IOSObjectArray *)toRecipients;

- (IOSObjectArray *)getCcRecipients;

- (void)setCcRecipientsWithARPEmailAddressArray:(IOSObjectArray *)ccRecipients;

- (IOSObjectArray *)getBccRecipients;

- (void)setBccRecipientsWithARPEmailAddressArray:(IOSObjectArray *)bccRecipients;

- (IOSObjectArray *)getAttachmentData;

- (void)setAttachmentDataWithARPAttachmentDataArray:(IOSObjectArray *)attachmentData;

- (NSString *)getMessageBody;

- (void)setMessageBodyWithNSString:(NSString *)messageBody;

- (NSString *)getMessageBodyMimeType;

- (void)setMessageBodyMimeTypeWithNSString:(NSString *)messageBodyMimeType;

- (NSString *)getSubject;

- (void)setSubjectWithNSString:(NSString *)subject;

- (void)copyAllFieldsTo:(ARPEmail *)other;

@end

__attribute__((always_inline)) inline void ARPEmail_init() {}

J2OBJC_FIELD_SETTER(ARPEmail, toRecipients_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPEmail, ccRecipients_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPEmail, bccRecipients_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPEmail, attachmentData_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPEmail, messageBody_, NSString *)
J2OBJC_FIELD_SETTER(ARPEmail, messageBodyMimeType_, NSString *)
J2OBJC_FIELD_SETTER(ARPEmail, subject_, NSString *)

typedef ARPEmail MeAdaptiveArpApiEmail;

#endif // _ARPEmail_H_
