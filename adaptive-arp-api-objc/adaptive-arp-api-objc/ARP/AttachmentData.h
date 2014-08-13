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

#ifndef _ARPAttachmentData_H_
#define _ARPAttachmentData_H_

@class IOSByteArray;

#import "JreEmulation.h"

@interface ARPAttachmentData : NSObject {
 @public
  IOSByteArray *data_;
  long long int dataSize_;
  NSString *fileName_;
  NSString *mimeType_;
  NSString *referenceUrl_;
}

- (id)initWithByteArray:(IOSByteArray *)data
               withLong:(long long int)dataSize
           withNSString:(NSString *)fileName
           withNSString:(NSString *)mimeType
           withNSString:(NSString *)referenceUrl;

- (IOSByteArray *)getData;

- (void)setDataWithByteArray:(IOSByteArray *)data;

- (long long int)getDataSize;

- (void)setDataSizeWithLong:(long long int)dataSize;

- (NSString *)getFileName;

- (void)setFileNameWithNSString:(NSString *)fileName;

- (NSString *)getMimeType;

- (void)setMimeTypeWithNSString:(NSString *)mimeType;

- (NSString *)getReferenceUrl;

- (void)setReferenceUrlWithNSString:(NSString *)referenceUrl;

- (void)copyAllFieldsTo:(ARPAttachmentData *)other;

@end

__attribute__((always_inline)) inline void ARPAttachmentData_init() {}

J2OBJC_FIELD_SETTER(ARPAttachmentData, data_, IOSByteArray *)
J2OBJC_FIELD_SETTER(ARPAttachmentData, fileName_, NSString *)
J2OBJC_FIELD_SETTER(ARPAttachmentData, mimeType_, NSString *)
J2OBJC_FIELD_SETTER(ARPAttachmentData, referenceUrl_, NSString *)

typedef ARPAttachmentData MeAdaptiveArpApiAttachmentData;

#endif // _ARPAttachmentData_H_
