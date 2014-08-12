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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/EmailAddress.java
//
//

#include "EmailAddress.h"

@implementation ARPEmailAddress

- (id)initWithNSString:(NSString *)address {
  if (self = [super init]) {
    self->address_ = address;
  }
  return self;
}

- (NSString *)getAddress {
  return address_;
}

- (void)setAddressWithNSString:(NSString *)address {
  self->address_ = address;
}

- (void)copyAllFieldsTo:(ARPEmailAddress *)other {
  [super copyAllFieldsTo:other];
  other->address_ = address_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:", "EmailAddress", NULL, 0x1, NULL },
    { "getAddress", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setAddressWithNSString:", "setAddress", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "address_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPEmailAddress = { "EmailAddress", "me.adaptive.arp.api", NULL, 0x1, 3, methods, 1, fields, 0, NULL};
  return &_ARPEmailAddress;
}

@end