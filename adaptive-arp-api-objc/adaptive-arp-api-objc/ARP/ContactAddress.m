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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ContactAddress.java
//
//

#include "ContactAddress.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@implementation ARPContactAddress

- (id)initWithNSString:(NSString *)address
withARPContactAddress_AddressTypeEnum:(ARPContactAddress_AddressTypeEnum *)type {
  if (self = [super init]) {
    self->address_ = address;
    self->type_ = type;
  }
  return self;
}

- (id)init {
  return [super init];
}

- (NSString *)getAddress {
  return address_;
}

- (void)setAddressWithNSString:(NSString *)address {
  self->address_ = address;
}

- (ARPContactAddress_AddressTypeEnum *)getType {
  return type_;
}

- (void)setTypeWithARPContactAddress_AddressTypeEnum:(ARPContactAddress_AddressTypeEnum *)type {
  self->type_ = type;
}

- (void)copyAllFieldsTo:(ARPContactAddress *)other {
  [super copyAllFieldsTo:other];
  other->address_ = address_;
  other->type_ = type_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:withARPContactAddress_AddressTypeEnum:", "ContactAddress", NULL, 0x1, NULL },
    { "init", "ContactAddress", NULL, 0x1, NULL },
    { "getAddress", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setAddressWithNSString:", "setAddress", "V", 0x1, NULL },
    { "getType", NULL, "Lme.adaptive.arp.api.ContactAddress$AddressType;", 0x1, NULL },
    { "setTypeWithARPContactAddress_AddressTypeEnum:", "setType", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "address_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "type_", NULL, 0x2, "Lme.adaptive.arp.api.ContactAddress$AddressType;", NULL,  },
  };
  static J2ObjcClassInfo _ARPContactAddress = { "ContactAddress", "me.adaptive.arp.api", NULL, 0x1, 6, methods, 2, fields, 0, NULL};
  return &_ARPContactAddress;
}

@end

BOOL ARPContactAddress_AddressTypeEnum_initialized = NO;

ARPContactAddress_AddressTypeEnum *ARPContactAddress_AddressTypeEnum_values[4];

@implementation ARPContactAddress_AddressTypeEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPContactAddress_AddressTypeEnum class]) {
    ARPContactAddress_AddressTypeEnum_Home = [[ARPContactAddress_AddressTypeEnum alloc] initWithNSString:@"Home" withInt:0];
    ARPContactAddress_AddressTypeEnum_Work = [[ARPContactAddress_AddressTypeEnum alloc] initWithNSString:@"Work" withInt:1];
    ARPContactAddress_AddressTypeEnum_Other = [[ARPContactAddress_AddressTypeEnum alloc] initWithNSString:@"Other" withInt:2];
    ARPContactAddress_AddressTypeEnum_Unknown = [[ARPContactAddress_AddressTypeEnum alloc] initWithNSString:@"Unknown" withInt:3];
    ARPContactAddress_AddressTypeEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPContactAddress_AddressTypeEnum_values count:4 type:[IOSClass classWithClass:[ARPContactAddress_AddressTypeEnum class]]];
}

+ (ARPContactAddress_AddressTypeEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPContactAddress_AddressTypeEnum *e = ARPContactAddress_AddressTypeEnum_values[i];
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
    { "Home", "Home", 0x4019, "Lme.adaptive.arp.api.ContactAddress$AddressType;", &ARPContactAddress_AddressTypeEnum_Home,  },
    { "Work", "Work", 0x4019, "Lme.adaptive.arp.api.ContactAddress$AddressType;", &ARPContactAddress_AddressTypeEnum_Work,  },
    { "Other", "Other", 0x4019, "Lme.adaptive.arp.api.ContactAddress$AddressType;", &ARPContactAddress_AddressTypeEnum_Other,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.ContactAddress$AddressType;", &ARPContactAddress_AddressTypeEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ContactAddress$AddressType;"};
  static J2ObjcClassInfo _ARPContactAddress_AddressTypeEnum = { "AddressType", "me.adaptive.arp.api", "ContactAddress", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPContactAddress_AddressTypeEnum;
}

@end
