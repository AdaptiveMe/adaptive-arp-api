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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Cookie.java
//
//

#include "Cookie.h"

@implementation ARPCookie

- (id)initWithNSString:(NSString *)name
          withNSString:(NSString *)data {
  if (self = [super init]) {
    self->name_ = name;
    self->data_ = data;
  }
  return self;
}

- (id)init {
  return [super init];
}

- (NSString *)getDomain {
  return domain_;
}

- (void)setDomainWithNSString:(NSString *)domain {
  self->domain_ = domain;
}

- (NSString *)getPath {
  return path_;
}

- (void)setPathWithNSString:(NSString *)path {
  self->path_ = path;
}

- (NSString *)getScheme {
  return scheme_;
}

- (void)setSchemeWithNSString:(NSString *)scheme {
  self->scheme_ = scheme;
}

- (BOOL)isSecure {
  return secure_;
}

- (void)setSecureWithBoolean:(BOOL)secure {
  self->secure_ = secure;
}

- (long long int)getExpiry {
  return expiry_;
}

- (void)setExpiryWithLong:(long long int)expiry {
  self->expiry_ = expiry;
}

- (NSString *)getName {
  return name_;
}

- (void)setNameWithNSString:(NSString *)name {
  self->name_ = name;
}

- (NSString *)getData {
  return data_;
}

- (void)setDataWithNSString:(NSString *)data {
  self->data_ = data;
}

- (long long int)getCreation {
  return creation_;
}

- (void)copyAllFieldsTo:(ARPCookie *)other {
  [super copyAllFieldsTo:other];
  other->creation_ = creation_;
  other->data_ = data_;
  other->domain_ = domain_;
  other->expiry_ = expiry_;
  other->name_ = name_;
  other->path_ = path_;
  other->scheme_ = scheme_;
  other->secure_ = secure_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:withNSString:", "Cookie", NULL, 0x1, NULL },
    { "init", "Cookie", NULL, 0x1, NULL },
    { "getDomain", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setDomainWithNSString:", "setDomain", "V", 0x1, NULL },
    { "getPath", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setPathWithNSString:", "setPath", "V", 0x1, NULL },
    { "getScheme", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setSchemeWithNSString:", "setScheme", "V", 0x1, NULL },
    { "isSecure", NULL, "Z", 0x1, NULL },
    { "setSecureWithBoolean:", "setSecure", "V", 0x1, NULL },
    { "getExpiry", NULL, "J", 0x1, NULL },
    { "setExpiryWithLong:", "setExpiry", "V", 0x1, NULL },
    { "getName", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setNameWithNSString:", "setName", "V", 0x1, NULL },
    { "getData", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setDataWithNSString:", "setData", "V", 0x1, NULL },
    { "getCreation", NULL, "J", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "name_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "data_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "domain_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "path_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "scheme_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "secure_", NULL, 0x2, "Z", NULL,  },
    { "expiry_", NULL, 0x2, "J", NULL,  },
    { "creation_", NULL, 0x2, "J", NULL,  },
  };
  static J2ObjcClassInfo _ARPCookie = { "Cookie", "me.adaptive.arp.api", NULL, 0x1, 17, methods, 8, fields, 0, NULL};
  return &_ARPCookie;
}

@end
