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

#include "IOSObjectArray.h"
#include "IOSPrimitiveArray.h"
#include "IService.h"
#include "ISession.h"
#include "ServiceRequest.h"

@implementation ARPServiceRequest

- (id)initWithNSString:(NSString *)content
          withNSString:(NSString *)contentType
               withInt:(int)contentLength
         withByteArray:(IOSByteArray *)rawContent
    withARPHeaderArray:(IOSObjectArray *)headers
          withNSString:(NSString *)method
withARPIService_ProtocolVersionEnum:(ARPIService_ProtocolVersionEnum *)protocolVersion
       withARPISession:(id<ARPISession>)session {
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

- (ARPIService_ProtocolVersionEnum *)getProtocolVersion {
  return protocolVersion_;
}

- (void)setProtocolVersionWithARPIService_ProtocolVersionEnum:(ARPIService_ProtocolVersionEnum *)protocolVersion {
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

- (id<ARPISession>)getSession {
  return session_;
}

- (void)setSessionWithARPISession:(id<ARPISession>)session {
  self->session_ = session;
}

- (NSString *)getContentEncoding {
  return contentEncoding_;
}

- (void)setContentEncodingWithNSString:(NSString *)contentEncoding {
  self->contentEncoding_ = contentEncoding;
}

- (void)copyAllFieldsTo:(ARPServiceRequest *)other {
  [super copyAllFieldsTo:other];
  other->content_ = content_;
  other->contentEncoding_ = contentEncoding_;
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
    { "initWithNSString:withNSString:withInt:withByteArray:withARPHeaderArray:withNSString:withARPIService_ProtocolVersionEnum:withARPISession:", "ServiceRequest", NULL, 0x1, NULL },
    { "getProtocolVersion", NULL, "Lme.adaptive.arp.api.IService$ProtocolVersion;", 0x1, NULL },
    { "setProtocolVersionWithARPIService_ProtocolVersionEnum:", "setProtocolVersion", "V", 0x1, NULL },
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
    { "getSession", NULL, "Lme.adaptive.arp.api.ISession;", 0x1, NULL },
    { "setSessionWithARPISession:", "setSession", "V", 0x1, NULL },
    { "getContentEncoding", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setContentEncodingWithNSString:", "setContentEncoding", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "content_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "contentType_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "contentLength_", NULL, 0x2, "I", NULL,  },
    { "rawContent_", NULL, 0x2, "[B", NULL,  },
    { "headers_", NULL, 0x2, "[Lme.adaptive.arp.api.Header;", NULL,  },
    { "method_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "protocolVersion_", NULL, 0x2, "Lme.adaptive.arp.api.IService$ProtocolVersion;", NULL,  },
    { "session_", NULL, 0x2, "Lme.adaptive.arp.api.ISession;", NULL,  },
    { "contentEncoding_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPServiceRequest = { "ServiceRequest", "me.adaptive.arp.api", NULL, 0x1, 19, methods, 9, fields, 0, NULL};
  return &_ARPServiceRequest;
}

@end
