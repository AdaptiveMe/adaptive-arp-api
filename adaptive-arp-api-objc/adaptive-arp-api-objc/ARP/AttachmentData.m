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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/AttachmentData.java
//
//

#include "AttachmentData.h"
#include "IOSPrimitiveArray.h"

@implementation ARPAttachmentData

- (id)initWithByteArray:(IOSByteArray *)data
               withLong:(long long int)dataSize
           withNSString:(NSString *)fileName
           withNSString:(NSString *)mimeType
           withNSString:(NSString *)referenceUrl {
  if (self = [super init]) {
    self->data_ = data;
    self->dataSize_ = dataSize;
    self->fileName_ = fileName;
    self->mimeType_ = mimeType;
    self->referenceUrl_ = referenceUrl;
  }
  return self;
}

- (IOSByteArray *)getData {
  return data_;
}

- (void)setDataWithByteArray:(IOSByteArray *)data {
  self->data_ = data;
}

- (long long int)getDataSize {
  return dataSize_;
}

- (void)setDataSizeWithLong:(long long int)dataSize {
  self->dataSize_ = dataSize;
}

- (NSString *)getFileName {
  return fileName_;
}

- (void)setFileNameWithNSString:(NSString *)fileName {
  self->fileName_ = fileName;
}

- (NSString *)getMimeType {
  return mimeType_;
}

- (void)setMimeTypeWithNSString:(NSString *)mimeType {
  self->mimeType_ = mimeType;
}

- (NSString *)getReferenceUrl {
  return referenceUrl_;
}

- (void)setReferenceUrlWithNSString:(NSString *)referenceUrl {
  self->referenceUrl_ = referenceUrl;
}

- (void)copyAllFieldsTo:(ARPAttachmentData *)other {
  [super copyAllFieldsTo:other];
  other->data_ = data_;
  other->dataSize_ = dataSize_;
  other->fileName_ = fileName_;
  other->mimeType_ = mimeType_;
  other->referenceUrl_ = referenceUrl_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithByteArray:withLong:withNSString:withNSString:withNSString:", "AttachmentData", NULL, 0x1, NULL },
    { "getData", NULL, "[B", 0x1, NULL },
    { "setDataWithByteArray:", "setData", "V", 0x1, NULL },
    { "getDataSize", NULL, "J", 0x1, NULL },
    { "setDataSizeWithLong:", "setDataSize", "V", 0x1, NULL },
    { "getFileName", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setFileNameWithNSString:", "setFileName", "V", 0x1, NULL },
    { "getMimeType", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setMimeTypeWithNSString:", "setMimeType", "V", 0x1, NULL },
    { "getReferenceUrl", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setReferenceUrlWithNSString:", "setReferenceUrl", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "data_", NULL, 0x2, "[B", NULL,  },
    { "dataSize_", NULL, 0x2, "J", NULL,  },
    { "fileName_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "mimeType_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "referenceUrl_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPAttachmentData = { "AttachmentData", "me.adaptive.arp.api", NULL, 0x1, 11, methods, 5, fields, 0, NULL};
  return &_ARPAttachmentData;
}

@end
