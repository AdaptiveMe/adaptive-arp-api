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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IOResponse.java
//
//

#ifndef _ARPIOResponse_H_
#define _ARPIOResponse_H_

@class ARPSession;
@class IOSByteArray;
@class IOSObjectArray;

#import "JreEmulation.h"

@interface ARPIOResponse : NSObject {
 @public
  NSString *content_;
  NSString *contentType_;
  NSString *contentLength_;
  IOSByteArray *contentBinary_;
  int contentBinaryLength_;
  IOSObjectArray *headers_;
  ARPSession *session_;
}

- (id)initWithNSString:(NSString *)content
          withNSString:(NSString *)contentType
          withNSString:(NSString *)contentLength
         withByteArray:(IOSByteArray *)contentBinary
               withInt:(int)contentBinaryLength
    withARPHeaderArray:(IOSObjectArray *)headers
        withARPSession:(ARPSession *)session;

- (NSString *)getContent;

- (void)setContentWithNSString:(NSString *)content;

- (NSString *)getContentType;

- (void)setContentTypeWithNSString:(NSString *)contentType;

- (NSString *)getContentLength;

- (void)setContentLengthWithNSString:(NSString *)contentLength;

- (IOSByteArray *)getContentBinary;

- (void)setContentBinaryWithByteArray:(IOSByteArray *)contentBinary;

- (int)getContentBinaryLength;

- (void)setContentBinaryLengthWithInt:(int)contentBinaryLength;

- (IOSObjectArray *)getHeaders;

- (void)setHeadersWithARPHeaderArray:(IOSObjectArray *)headers;

- (ARPSession *)getSession;

- (void)setSessionWithARPSession:(ARPSession *)session;

- (void)copyAllFieldsTo:(ARPIOResponse *)other;

@end

__attribute__((always_inline)) inline void ARPIOResponse_init() {}

J2OBJC_FIELD_SETTER(ARPIOResponse, content_, NSString *)
J2OBJC_FIELD_SETTER(ARPIOResponse, contentType_, NSString *)
J2OBJC_FIELD_SETTER(ARPIOResponse, contentLength_, NSString *)
J2OBJC_FIELD_SETTER(ARPIOResponse, contentBinary_, IOSByteArray *)
J2OBJC_FIELD_SETTER(ARPIOResponse, headers_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPIOResponse, session_, ARPSession *)

typedef ARPIOResponse MeAdaptiveArpApiIOResponse;

#endif // _ARPIOResponse_H_
