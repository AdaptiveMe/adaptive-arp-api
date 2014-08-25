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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/SecureKeyPair.java
//
//

#include "SecureKeyPair.h"

@implementation ARPSecureKeyPair

- (id)init {
  return [super init];
}

- (NSString *)getKey {
  return key_;
}

- (void)setKeyWithNSString:(NSString *)key {
  self->key_ = key;
}

- (NSString *)getValue {
  return value_;
}

- (void)setValueWithNSString:(NSString *)value {
  self->value_ = value;
}

- (void)copyAllFieldsTo:(ARPSecureKeyPair *)other {
  [super copyAllFieldsTo:other];
  other->key_ = key_;
  other->value_ = value_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", "SecureKeyPair", NULL, 0x1, NULL },
    { "getKey", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setKeyWithNSString:", "setKey", "V", 0x1, NULL },
    { "getValue", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setValueWithNSString:", "setValue", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "key_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "value_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPSecureKeyPair = { "SecureKeyPair", "me.adaptive.arp.api", NULL, 0x1, 5, methods, 2, fields, 0, NULL};
  return &_ARPSecureKeyPair;
}

@end
