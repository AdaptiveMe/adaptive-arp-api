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

#include "IOSObjectArray.h"
#include "IOSPrimitiveArray.h"
#include "ISession.h"
#include "ServiceResponse.h"

@implementation ARPServiceResponse

- (id)initWithNSString:(NSString *)content
          withNSString:(NSString *)contentType
          withNSString:(NSString *)contentLength
         withByteArray:(IOSByteArray *)contentBinary
               withInt:(int)contentBinaryLength
    withARPHeaderArray:(IOSObjectArray *)headers
       withARPISession:(id<ARPISession>)session {
  if (self = [super init]) {
    self->content_ = content;
    self->contentType_ = contentType;
    self->contentLength_ = contentLength;
    self->contentBinary_ = contentBinary;
    self->contentBinaryLength_ = contentBinaryLength;
    self->headers_ = headers;
    self->session_ = session;
  }
  return self;
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

- (NSString *)getContentLength {
  return contentLength_;
}

- (void)setContentLengthWithNSString:(NSString *)contentLength {
  self->contentLength_ = contentLength;
}

- (IOSByteArray *)getContentBinary {
  return contentBinary_;
}

- (void)setContentBinaryWithByteArray:(IOSByteArray *)contentBinary {
  self->contentBinary_ = contentBinary;
}

- (int)getContentBinaryLength {
  return contentBinaryLength_;
}

- (void)setContentBinaryLengthWithInt:(int)contentBinaryLength {
  self->contentBinaryLength_ = contentBinaryLength;
}

- (IOSObjectArray *)getHeaders {
  return headers_;
}

- (void)setHeadersWithARPHeaderArray:(IOSObjectArray *)headers {
  self->headers_ = headers;
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

- (void)copyAllFieldsTo:(ARPServiceResponse *)other {
  [super copyAllFieldsTo:other];
  other->content_ = content_;
  other->contentBinary_ = contentBinary_;
  other->contentBinaryLength_ = contentBinaryLength_;
  other->contentEncoding_ = contentEncoding_;
  other->contentLength_ = contentLength_;
  other->contentType_ = contentType_;
  other->headers_ = headers_;
  other->session_ = session_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:withNSString:withNSString:withByteArray:withInt:withARPHeaderArray:withARPISession:", "ServiceResponse", NULL, 0x1, NULL },
    { "getContent", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setContentWithNSString:", "setContent", "V", 0x1, NULL },
    { "getContentType", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setContentTypeWithNSString:", "setContentType", "V", 0x1, NULL },
    { "getContentLength", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setContentLengthWithNSString:", "setContentLength", "V", 0x1, NULL },
    { "getContentBinary", NULL, "[B", 0x1, NULL },
    { "setContentBinaryWithByteArray:", "setContentBinary", "V", 0x1, NULL },
    { "getContentBinaryLength", NULL, "I", 0x1, NULL },
    { "setContentBinaryLengthWithInt:", "setContentBinaryLength", "V", 0x1, NULL },
    { "getHeaders", NULL, "[Lme.adaptive.arp.api.Header;", 0x1, NULL },
    { "setHeadersWithARPHeaderArray:", "setHeaders", "V", 0x1, NULL },
    { "getSession", NULL, "Lme.adaptive.arp.api.ISession;", 0x1, NULL },
    { "setSessionWithARPISession:", "setSession", "V", 0x1, NULL },
    { "getContentEncoding", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setContentEncodingWithNSString:", "setContentEncoding", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "content_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "contentType_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "contentLength_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "contentBinary_", NULL, 0x2, "[B", NULL,  },
    { "contentBinaryLength_", NULL, 0x2, "I", NULL,  },
    { "headers_", NULL, 0x2, "[Lme.adaptive.arp.api.Header;", NULL,  },
    { "session_", NULL, 0x2, "Lme.adaptive.arp.api.ISession;", NULL,  },
    { "contentEncoding_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPServiceResponse = { "ServiceResponse", "me.adaptive.arp.api", NULL, 0x1, 17, methods, 8, fields, 0, NULL};
  return &_ARPServiceResponse;
}

@end
