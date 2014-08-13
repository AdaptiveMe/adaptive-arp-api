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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Database.java
//
//

#include "Database.h"

@implementation ARPDatabase

- (id)initWithNSString:(NSString *)name {
  if (self = [super init]) {
    self->name_ = name;
    self->compress_ = NO;
  }
  return self;
}

- (id)initWithNSString:(NSString *)name
           withBoolean:(BOOL)compress {
  if (self = [super init]) {
    self->name_ = name;
    self->compress_ = compress;
  }
  return self;
}

- (NSString *)getName {
  return name_;
}

- (void)setNameWithNSString:(NSString *)name {
  self->name_ = name;
}

- (BOOL)isCompress {
  return compress_;
}

- (void)setCompressWithBoolean:(BOOL)compress {
  self->compress_ = compress;
}

- (void)copyAllFieldsTo:(ARPDatabase *)other {
  [super copyAllFieldsTo:other];
  other->compress_ = compress_;
  other->name_ = name_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:", "Database", NULL, 0x1, NULL },
    { "initWithNSString:withBoolean:", "Database", NULL, 0x1, NULL },
    { "getName", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setNameWithNSString:", "setName", "V", 0x1, NULL },
    { "isCompress", NULL, "Z", 0x1, NULL },
    { "setCompressWithBoolean:", "setCompress", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "name_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "compress_", NULL, 0x2, "Z", NULL,  },
  };
  static J2ObjcClassInfo _ARPDatabase = { "Database", "me.adaptive.arp.api", NULL, 0x1, 6, methods, 2, fields, 0, NULL};
  return &_ARPDatabase;
}

@end
