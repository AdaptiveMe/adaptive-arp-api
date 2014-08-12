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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Session.java
//
//

#include "IOSObjectArray.h"
#include "Session.h"

@implementation ARPSession

- (id)initWithARPCookieArray:(IOSObjectArray *)cookie {
  if (self = [super init]) {
    self->cookie_ = cookie;
  }
  return self;
}

- (IOSObjectArray *)getCookie {
  return cookie_;
}

- (void)setCookieWithARPCookieArray:(IOSObjectArray *)cookie {
  self->cookie_ = cookie;
}

- (void)copyAllFieldsTo:(ARPSession *)other {
  [super copyAllFieldsTo:other];
  other->cookie_ = cookie_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithARPCookieArray:", "Session", NULL, 0x1, NULL },
    { "getCookie", NULL, "[Lme.adaptive.arp.api.Cookie;", 0x1, NULL },
    { "setCookieWithARPCookieArray:", "setCookie", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "cookie_", NULL, 0x2, "[Lme.adaptive.arp.api.Cookie;", NULL,  },
  };
  static J2ObjcClassInfo _ARPSession = { "Session", "me.adaptive.arp.api", NULL, 0x1, 3, methods, 1, fields, 0, NULL};
  return &_ARPSession;
}

@end
