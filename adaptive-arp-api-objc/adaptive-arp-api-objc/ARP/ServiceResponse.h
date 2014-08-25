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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ServiceResponse.java
//
//

#ifndef _ARPServiceResponse_H_
#define _ARPServiceResponse_H_

@class IOSByteArray;
@class IOSObjectArray;
@protocol ARPISession;

#import "JreEmulation.h"

@interface ARPServiceResponse : NSObject {
 @public
  NSString *content_;
  NSString *contentType_;
  NSString *contentLength_;
  IOSByteArray *contentBinary_;
  int contentBinaryLength_;
  IOSObjectArray *headers_;
  id<ARPISession> session_;
  NSString *contentEncoding_;
}

- (id)init;

- (id)initWithNSString:(NSString *)content
          withNSString:(NSString *)contentType
          withNSString:(NSString *)contentLength
         withByteArray:(IOSByteArray *)contentBinary
               withInt:(int)contentBinaryLength
    withARPHeaderArray:(IOSObjectArray *)headers
       withARPISession:(id<ARPISession>)session;

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

- (id<ARPISession>)getSession;

- (void)setSessionWithARPISession:(id<ARPISession>)session;

- (NSString *)getContentEncoding;

- (void)setContentEncodingWithNSString:(NSString *)contentEncoding;

- (void)copyAllFieldsTo:(ARPServiceResponse *)other;

@end

__attribute__((always_inline)) inline void ARPServiceResponse_init() {}

J2OBJC_FIELD_SETTER(ARPServiceResponse, content_, NSString *)
J2OBJC_FIELD_SETTER(ARPServiceResponse, contentType_, NSString *)
J2OBJC_FIELD_SETTER(ARPServiceResponse, contentLength_, NSString *)
J2OBJC_FIELD_SETTER(ARPServiceResponse, contentBinary_, IOSByteArray *)
J2OBJC_FIELD_SETTER(ARPServiceResponse, headers_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPServiceResponse, session_, id<ARPISession>)
J2OBJC_FIELD_SETTER(ARPServiceResponse, contentEncoding_, NSString *)

typedef ARPServiceResponse MeAdaptiveArpApiServiceResponse;

#endif // _ARPServiceResponse_H_
