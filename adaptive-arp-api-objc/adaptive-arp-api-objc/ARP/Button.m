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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Button.java
//
//

#include "Button.h"
#include "ICapabilities.h"

@implementation ARPButton

- (id)initWithARPICapabilities_ButtonEnum:(ARPICapabilities_ButtonEnum *)type {
  if (self = [super init]) {
    self->type_ = type;
  }
  return self;
}

- (ARPICapabilities_ButtonEnum *)getType {
  return type_;
}

- (void)copyAllFieldsTo:(ARPButton *)other {
  [super copyAllFieldsTo:other];
  other->type_ = type_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithARPICapabilities_ButtonEnum:", "Button", NULL, 0x1, NULL },
    { "getType", NULL, "Lme.adaptive.arp.api.ICapabilities$Button;", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "type_", NULL, 0x2, "Lme.adaptive.arp.api.ICapabilities$Button;", NULL,  },
  };
  static J2ObjcClassInfo _ARPButton = { "Button", "me.adaptive.arp.api", NULL, 0x1, 2, methods, 1, fields, 0, NULL};
  return &_ARPButton;
}

@end
