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

#include "Email.h"
#include "IOSObjectArray.h"

@implementation ARPEmail

- (id)init {
  return [super init];
}

- (id)initWithARPEmailAddressArray:(IOSObjectArray *)toRecipients
          withARPEmailAddressArray:(IOSObjectArray *)ccRecipients
          withARPEmailAddressArray:(IOSObjectArray *)bccRecipients
        withARPAttachmentDataArray:(IOSObjectArray *)attachmentData
                      withNSString:(NSString *)messageBody
                      withNSString:(NSString *)messageBodyMimeType
                      withNSString:(NSString *)subject {
  if (self = [super init]) {
    self->toRecipients_ = toRecipients;
    self->ccRecipients_ = ccRecipients;
    self->bccRecipients_ = bccRecipients;
    self->attachmentData_ = attachmentData;
    self->messageBody_ = messageBody;
    self->messageBodyMimeType_ = messageBodyMimeType;
    self->subject_ = subject;
  }
  return self;
}

- (id)initWithARPEmailAddressArray:(IOSObjectArray *)toRecipients
                      withNSString:(NSString *)subject
                      withNSString:(NSString *)messageBody {
  if (self = [super init]) {
    self->toRecipients_ = toRecipients;
    self->messageBody_ = messageBody;
    self->subject_ = subject;
  }
  return self;
}

- (IOSObjectArray *)getToRecipients {
  return toRecipients_;
}

- (void)setToRecipientsWithARPEmailAddressArray:(IOSObjectArray *)toRecipients {
  self->toRecipients_ = toRecipients;
}

- (IOSObjectArray *)getCcRecipients {
  return ccRecipients_;
}

- (void)setCcRecipientsWithARPEmailAddressArray:(IOSObjectArray *)ccRecipients {
  self->ccRecipients_ = ccRecipients;
}

- (IOSObjectArray *)getBccRecipients {
  return bccRecipients_;
}

- (void)setBccRecipientsWithARPEmailAddressArray:(IOSObjectArray *)bccRecipients {
  self->bccRecipients_ = bccRecipients;
}

- (IOSObjectArray *)getAttachmentData {
  return attachmentData_;
}

- (void)setAttachmentDataWithARPAttachmentDataArray:(IOSObjectArray *)attachmentData {
  self->attachmentData_ = attachmentData;
}

- (NSString *)getMessageBody {
  return messageBody_;
}

- (void)setMessageBodyWithNSString:(NSString *)messageBody {
  self->messageBody_ = messageBody;
}

- (NSString *)getMessageBodyMimeType {
  return messageBodyMimeType_;
}

- (void)setMessageBodyMimeTypeWithNSString:(NSString *)messageBodyMimeType {
  self->messageBodyMimeType_ = messageBodyMimeType;
}

- (NSString *)getSubject {
  return subject_;
}

- (void)setSubjectWithNSString:(NSString *)subject {
  self->subject_ = subject;
}

- (void)copyAllFieldsTo:(ARPEmail *)other {
  [super copyAllFieldsTo:other];
  other->attachmentData_ = attachmentData_;
  other->bccRecipients_ = bccRecipients_;
  other->ccRecipients_ = ccRecipients_;
  other->messageBody_ = messageBody_;
  other->messageBodyMimeType_ = messageBodyMimeType_;
  other->subject_ = subject_;
  other->toRecipients_ = toRecipients_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", "Email", NULL, 0x1, NULL },
    { "initWithARPEmailAddressArray:withARPEmailAddressArray:withARPEmailAddressArray:withARPAttachmentDataArray:withNSString:withNSString:withNSString:", "Email", NULL, 0x1, NULL },
    { "initWithARPEmailAddressArray:withNSString:withNSString:", "Email", NULL, 0x1, NULL },
    { "getToRecipients", NULL, "[Lme.adaptive.arp.api.EmailAddress;", 0x1, NULL },
    { "setToRecipientsWithARPEmailAddressArray:", "setToRecipients", "V", 0x1, NULL },
    { "getCcRecipients", NULL, "[Lme.adaptive.arp.api.EmailAddress;", 0x1, NULL },
    { "setCcRecipientsWithARPEmailAddressArray:", "setCcRecipients", "V", 0x1, NULL },
    { "getBccRecipients", NULL, "[Lme.adaptive.arp.api.EmailAddress;", 0x1, NULL },
    { "setBccRecipientsWithARPEmailAddressArray:", "setBccRecipients", "V", 0x1, NULL },
    { "getAttachmentData", NULL, "[Lme.adaptive.arp.api.AttachmentData;", 0x1, NULL },
    { "setAttachmentDataWithARPAttachmentDataArray:", "setAttachmentData", "V", 0x1, NULL },
    { "getMessageBody", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setMessageBodyWithNSString:", "setMessageBody", "V", 0x1, NULL },
    { "getMessageBodyMimeType", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setMessageBodyMimeTypeWithNSString:", "setMessageBodyMimeType", "V", 0x1, NULL },
    { "getSubject", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setSubjectWithNSString:", "setSubject", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "toRecipients_", NULL, 0x2, "[Lme.adaptive.arp.api.EmailAddress;", NULL,  },
    { "ccRecipients_", NULL, 0x2, "[Lme.adaptive.arp.api.EmailAddress;", NULL,  },
    { "bccRecipients_", NULL, 0x2, "[Lme.adaptive.arp.api.EmailAddress;", NULL,  },
    { "attachmentData_", NULL, 0x2, "[Lme.adaptive.arp.api.AttachmentData;", NULL,  },
    { "messageBody_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "messageBodyMimeType_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "subject_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPEmail = { "Email", "me.adaptive.arp.api", NULL, 0x1, 17, methods, 7, fields, 0, NULL};
  return &_ARPEmail;
}

@end
