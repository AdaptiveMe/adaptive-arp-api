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

#include "IOSClass.h"
#include "IOSObjectArray.h"
#include "IOSPrimitiveArray.h"
#include "Request.h"
#include "Session.h"
#include "java/lang/IllegalArgumentException.h"

@implementation ARPRequest

- (id)initWithNSString:(NSString *)content
          withNSString:(NSString *)contentType
               withInt:(int)contentLength
         withByteArray:(IOSByteArray *)rawContent
    withARPHeaderArray:(IOSObjectArray *)headers
          withNSString:(NSString *)method
withARPRequest_ProtocolVersionEnum:(ARPRequest_ProtocolVersionEnum *)protocolVersion
        withARPSession:(ARPSession *)session {
  if (self = [super init]) {
    self->content_ = content;
    self->contentType_ = contentType;
    self->contentLength_ = contentLength;
    self->rawContent_ = rawContent;
    self->headers_ = headers;
    self->method_ = method;
    self->protocolVersion_ = protocolVersion;
    self->session_ = session;
  }
  return self;
}

- (ARPRequest_ProtocolVersionEnum *)getProtocolVersion {
  return protocolVersion_;
}

- (void)setProtocolVersionWithARPRequest_ProtocolVersionEnum:(ARPRequest_ProtocolVersionEnum *)protocolVersion {
  self->protocolVersion_ = protocolVersion;
}

- (NSString *)getContent {
  return content_;
}

- (void)setContentWithNSString:(NSString *)content {
  self->content_ = content;
}

- (NSString *)getContentType {
  return contentType_;
}

- (void)setContentTypeWithNSString:(NSString *)contentType {
  self->contentType_ = contentType;
}

- (int)getContentLength {
  return contentLength_;
}

- (void)setContentLengthWithInt:(int)contentLength {
  self->contentLength_ = contentLength;
}

- (IOSByteArray *)getRawContent {
  return rawContent_;
}

- (void)setRawContentWithByteArray:(IOSByteArray *)rawContent {
  self->rawContent_ = rawContent;
}

- (IOSObjectArray *)getHeaders {
  return headers_;
}

- (void)setHeadersWithARPHeaderArray:(IOSObjectArray *)headers {
  self->headers_ = headers;
}

- (NSString *)getMethod {
  return method_;
}

- (void)setMethodWithNSString:(NSString *)method {
  self->method_ = method;
}

- (ARPSession *)getSession {
  return session_;
}

- (void)setSessionWithARPSession:(ARPSession *)session {
  self->session_ = session;
}

- (void)copyAllFieldsTo:(ARPRequest *)other {
  [super copyAllFieldsTo:other];
  other->content_ = content_;
  other->contentLength_ = contentLength_;
  other->contentType_ = contentType_;
  other->headers_ = headers_;
  other->method_ = method_;
  other->protocolVersion_ = protocolVersion_;
  other->rawContent_ = rawContent_;
  other->session_ = session_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:withNSString:withInt:withByteArray:withARPHeaderArray:withNSString:withARPRequest_ProtocolVersionEnum:withARPSession:", "Request", NULL, 0x1, NULL },
    { "getProtocolVersion", NULL, "Lme.adaptive.arp.api.Request$ProtocolVersion;", 0x1, NULL },
    { "setProtocolVersionWithARPRequest_ProtocolVersionEnum:", "setProtocolVersion", "V", 0x1, NULL },
    { "getContent", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setContentWithNSString:", "setContent", "V", 0x1, NULL },
    { "getContentType", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setContentTypeWithNSString:", "setContentType", "V", 0x1, NULL },
    { "getContentLength", NULL, "I", 0x1, NULL },
    { "setContentLengthWithInt:", "setContentLength", "V", 0x1, NULL },
    { "getRawContent", NULL, "[B", 0x1, NULL },
    { "setRawContentWithByteArray:", "setRawContent", "V", 0x1, NULL },
    { "getHeaders", NULL, "[Lme.adaptive.arp.api.Header;", 0x1, NULL },
    { "setHeadersWithARPHeaderArray:", "setHeaders", "V", 0x1, NULL },
    { "getMethod", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setMethodWithNSString:", "setMethod", "V", 0x1, NULL },
    { "getSession", NULL, "Lme.adaptive.arp.api.Session;", 0x1, NULL },
    { "setSessionWithARPSession:", "setSession", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "content_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "contentType_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "contentLength_", NULL, 0x2, "I", NULL,  },
    { "rawContent_", NULL, 0x2, "[B", NULL,  },
    { "headers_", NULL, 0x2, "[Lme.adaptive.arp.api.Header;", NULL,  },
    { "method_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "protocolVersion_", NULL, 0x2, "Lme.adaptive.arp.api.Request$ProtocolVersion;", NULL,  },
    { "session_", NULL, 0x2, "Lme.adaptive.arp.api.Session;", NULL,  },
  };
  static J2ObjcClassInfo _ARPRequest = { "Request", "me.adaptive.arp.api", NULL, 0x1, 17, methods, 8, fields, 0, NULL};
  return &_ARPRequest;
}

@end

BOOL ARPRequest_ProtocolVersionEnum_initialized = NO;

ARPRequest_ProtocolVersionEnum *ARPRequest_ProtocolVersionEnum_values[2];

@implementation ARPRequest_ProtocolVersionEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPRequest_ProtocolVersionEnum class]) {
    ARPRequest_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_0 = [[ARPRequest_ProtocolVersionEnum alloc] initWithNSString:@"HTTP_PROTOCOL_VERSION_1_0" withInt:0];
    ARPRequest_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_1 = [[ARPRequest_ProtocolVersionEnum alloc] initWithNSString:@"HTTP_PROTOCOL_VERSION_1_1" withInt:1];
    ARPRequest_ProtocolVersionEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPRequest_ProtocolVersionEnum_values count:2 type:[IOSClass classWithClass:[ARPRequest_ProtocolVersionEnum class]]];
}

+ (ARPRequest_ProtocolVersionEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPRequest_ProtocolVersionEnum *e = ARPRequest_ProtocolVersionEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "HTTP_PROTOCOL_VERSION_1_0", "HTTP_PROTOCOL_VERSION_1_0", 0x4019, "Lme.adaptive.arp.api.Request$ProtocolVersion;", &ARPRequest_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_0,  },
    { "HTTP_PROTOCOL_VERSION_1_1", "HTTP_PROTOCOL_VERSION_1_1", 0x4019, "Lme.adaptive.arp.api.Request$ProtocolVersion;", &ARPRequest_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_1,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.Request$ProtocolVersion;"};
  static J2ObjcClassInfo _ARPRequest_ProtocolVersionEnum = { "ProtocolVersion", "me.adaptive.arp.api", "Request", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPRequest_ProtocolVersionEnum;
}

@end
