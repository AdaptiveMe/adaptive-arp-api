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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Endpoint.java
//
//

#include "Endpoint.h"

@implementation ARPEndpoint

- (id)initWithNSString:(NSString *)host
          withNSString:(NSString *)path
               withInt:(int)port
          withNSString:(NSString *)proxy
          withNSString:(NSString *)scheme {
  if (self = [super init]) {
    self->host_ = host;
    self->path_ = path;
    self->port_ = port;
    self->proxy_ = proxy;
    Scheme_ = scheme;
  }
  return self;
}

- (NSString *)getHost {
  return host_;
}

- (void)setHostWithNSString:(NSString *)host {
  self->host_ = host;
}

- (NSString *)getPath {
  return path_;
}

- (void)setPathWithNSString:(NSString *)path {
  self->path_ = path;
}

- (int)getPort {
  return port_;
}

- (void)setPortWithInt:(int)port {
  self->port_ = port;
}

- (NSString *)getProxy {
  return proxy_;
}

- (void)setProxyWithNSString:(NSString *)proxy {
  self->proxy_ = proxy;
}

- (NSString *)getScheme {
  return Scheme_;
}

- (void)setSchemeWithNSString:(NSString *)scheme {
  Scheme_ = scheme;
}

- (void)copyAllFieldsTo:(ARPEndpoint *)other {
  [super copyAllFieldsTo:other];
  other->Scheme_ = Scheme_;
  other->host_ = host_;
  other->path_ = path_;
  other->port_ = port_;
  other->proxy_ = proxy_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:withNSString:withInt:withNSString:withNSString:", "Endpoint", NULL, 0x1, NULL },
    { "getHost", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setHostWithNSString:", "setHost", "V", 0x1, NULL },
    { "getPath", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setPathWithNSString:", "setPath", "V", 0x1, NULL },
    { "getPort", NULL, "I", 0x1, NULL },
    { "setPortWithInt:", "setPort", "V", 0x1, NULL },
    { "getProxy", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setProxyWithNSString:", "setProxy", "V", 0x1, NULL },
    { "getScheme", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setSchemeWithNSString:", "setScheme", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "host_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "path_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "port_", NULL, 0x2, "I", NULL,  },
    { "proxy_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "Scheme_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPEndpoint = { "Endpoint", "me.adaptive.arp.api", NULL, 0x1, 11, methods, 5, fields, 0, NULL};
  return &_ARPEndpoint;
}

@end
