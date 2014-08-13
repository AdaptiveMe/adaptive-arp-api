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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Request.java
//
//

#ifndef _ARPRequest_H_
#define _ARPRequest_H_

@class ARPRequest_ProtocolVersionEnum;
@class ARPSession;
@class IOSByteArray;
@class IOSObjectArray;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@interface ARPRequest : NSObject {
 @public
  NSString *content_;
  NSString *contentType_;
  int contentLength_;
  IOSByteArray *rawContent_;
  IOSObjectArray *headers_;
  NSString *method_;
  ARPRequest_ProtocolVersionEnum *protocolVersion_;
  ARPSession *session_;
}

- (id)initWithNSString:(NSString *)content
          withNSString:(NSString *)contentType
               withInt:(int)contentLength
         withByteArray:(IOSByteArray *)rawContent
    withARPHeaderArray:(IOSObjectArray *)headers
          withNSString:(NSString *)method
withARPRequest_ProtocolVersionEnum:(ARPRequest_ProtocolVersionEnum *)protocolVersion
        withARPSession:(ARPSession *)session;

- (ARPRequest_ProtocolVersionEnum *)getProtocolVersion;

- (void)setProtocolVersionWithARPRequest_ProtocolVersionEnum:(ARPRequest_ProtocolVersionEnum *)protocolVersion;

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

- (ARPSession *)getSession;

- (void)setSessionWithARPSession:(ARPSession *)session;

- (void)copyAllFieldsTo:(ARPRequest *)other;

@end

__attribute__((always_inline)) inline void ARPRequest_init() {}

J2OBJC_FIELD_SETTER(ARPRequest, content_, NSString *)
J2OBJC_FIELD_SETTER(ARPRequest, contentType_, NSString *)
J2OBJC_FIELD_SETTER(ARPRequest, rawContent_, IOSByteArray *)
J2OBJC_FIELD_SETTER(ARPRequest, headers_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPRequest, method_, NSString *)
J2OBJC_FIELD_SETTER(ARPRequest, protocolVersion_, ARPRequest_ProtocolVersionEnum *)
J2OBJC_FIELD_SETTER(ARPRequest, session_, ARPSession *)

typedef ARPRequest MeAdaptiveArpApiRequest;

typedef enum {
  ARPRequest_ProtocolVersion_HTTP_PROTOCOL_VERSION_1_0 = 0,
  ARPRequest_ProtocolVersion_HTTP_PROTOCOL_VERSION_1_1 = 1,
} ARPRequest_ProtocolVersion;

@interface ARPRequest_ProtocolVersionEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPRequest_ProtocolVersionEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPRequest_ProtocolVersionEnum_initialized;
J2OBJC_STATIC_INIT(ARPRequest_ProtocolVersionEnum)

FOUNDATION_EXPORT ARPRequest_ProtocolVersionEnum *ARPRequest_ProtocolVersionEnum_values[];

#define ARPRequest_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_0 ARPRequest_ProtocolVersionEnum_values[ARPRequest_ProtocolVersion_HTTP_PROTOCOL_VERSION_1_0]
J2OBJC_STATIC_FIELD_GETTER(ARPRequest_ProtocolVersionEnum, HTTP_PROTOCOL_VERSION_1_0, ARPRequest_ProtocolVersionEnum *)

#define ARPRequest_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_1 ARPRequest_ProtocolVersionEnum_values[ARPRequest_ProtocolVersion_HTTP_PROTOCOL_VERSION_1_1]
J2OBJC_STATIC_FIELD_GETTER(ARPRequest_ProtocolVersionEnum, HTTP_PROTOCOL_VERSION_1_1, ARPRequest_ProtocolVersionEnum *)

#endif // _ARPRequest_H_
