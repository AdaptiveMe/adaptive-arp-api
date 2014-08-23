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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ServiceRequest.java
//
//

#ifndef _ARPServiceRequest_H_
#define _ARPServiceRequest_H_

@class ARPIService_ProtocolVersionEnum;
@class IOSByteArray;
@class IOSObjectArray;
@protocol ARPISession;

#import "JreEmulation.h"

@interface ARPServiceRequest : NSObject {
 @public
  NSString *content_;
  NSString *contentType_;
  int contentLength_;
  IOSByteArray *rawContent_;
  IOSObjectArray *headers_;
  NSString *method_;
  ARPIService_ProtocolVersionEnum *protocolVersion_;
  id<ARPISession> session_;
  NSString *contentEncoding_;
}

- (id)initWithNSString:(NSString *)content
          withNSString:(NSString *)contentType
               withInt:(int)contentLength
         withByteArray:(IOSByteArray *)rawContent
    withARPHeaderArray:(IOSObjectArray *)headers
          withNSString:(NSString *)method
withARPIService_ProtocolVersionEnum:(ARPIService_ProtocolVersionEnum *)protocolVersion
       withARPISession:(id<ARPISession>)session;

- (ARPIService_ProtocolVersionEnum *)getProtocolVersion;

- (void)setProtocolVersionWithARPIService_ProtocolVersionEnum:(ARPIService_ProtocolVersionEnum *)protocolVersion;

- (NSString *)getContent;

- (void)setContentWithNSString:(NSString *)content;

- (NSString *)getContentType;

- (void)setContentTypeWithNSString:(NSString *)contentType;

- (int)getContentLength;

- (void)setContentLengthWithInt:(int)contentLength;

- (IOSByteArray *)getRawContent;

- (void)setRawContentWithByteArray:(IOSByteArray *)rawContent;

- (IOSObjectArray *)getHeaders;

- (void)setHeadersWithARPHeaderArray:(IOSObjectArray *)headers;

- (NSString *)getMethod;

- (void)setMethodWithNSString:(NSString *)method;

- (id<ARPISession>)getSession;

- (void)setSessionWithARPISession:(id<ARPISession>)session;

- (NSString *)getContentEncoding;

- (void)setContentEncodingWithNSString:(NSString *)contentEncoding;

- (void)copyAllFieldsTo:(ARPServiceRequest *)other;

@end

__attribute__((always_inline)) inline void ARPServiceRequest_init() {}

J2OBJC_FIELD_SETTER(ARPServiceRequest, content_, NSString *)
J2OBJC_FIELD_SETTER(ARPServiceRequest, contentType_, NSString *)
J2OBJC_FIELD_SETTER(ARPServiceRequest, rawContent_, IOSByteArray *)
J2OBJC_FIELD_SETTER(ARPServiceRequest, headers_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPServiceRequest, method_, NSString *)
J2OBJC_FIELD_SETTER(ARPServiceRequest, protocolVersion_, ARPIService_ProtocolVersionEnum *)
J2OBJC_FIELD_SETTER(ARPServiceRequest, session_, id<ARPISession>)
J2OBJC_FIELD_SETTER(ARPServiceRequest, contentEncoding_, NSString *)

typedef ARPServiceRequest MeAdaptiveArpApiServiceRequest;

#endif // _ARPServiceRequest_H_
