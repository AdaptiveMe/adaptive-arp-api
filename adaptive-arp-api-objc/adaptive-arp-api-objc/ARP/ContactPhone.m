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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/ContactPhone.java
//
//

#include "ContactPhone.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@implementation ARPContactPhone

- (id)initWithNSString:(NSString *)phone
withARPContactPhone_PhoneTypeEnum:(ARPContactPhone_PhoneTypeEnum *)phoneType {
  if (self = [super init]) {
    self->phone_ = phone;
    self->phoneType_ = phoneType;
  }
  return self;
}

- (NSString *)getPhone {
  return phone_;
}

- (void)setPhoneWithNSString:(NSString *)phone {
  self->phone_ = phone;
}

- (ARPContactPhone_PhoneTypeEnum *)getPhoneType {
  return phoneType_;
}

- (void)setPhoneTypeWithARPContactPhone_PhoneTypeEnum:(ARPContactPhone_PhoneTypeEnum *)phoneType {
  self->phoneType_ = phoneType;
}

- (void)copyAllFieldsTo:(ARPContactPhone *)other {
  [super copyAllFieldsTo:other];
  other->phone_ = phone_;
  other->phoneType_ = phoneType_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:withARPContactPhone_PhoneTypeEnum:", "ContactPhone", NULL, 0x1, NULL },
    { "getPhone", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setPhoneWithNSString:", "setPhone", "V", 0x1, NULL },
    { "getPhoneType", NULL, "Lme.adaptive.arp.api.ContactPhone$PhoneType;", 0x1, NULL },
    { "setPhoneTypeWithARPContactPhone_PhoneTypeEnum:", "setPhoneType", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "phone_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "phoneType_", NULL, 0x2, "Lme.adaptive.arp.api.ContactPhone$PhoneType;", NULL,  },
  };
  static J2ObjcClassInfo _ARPContactPhone = { "ContactPhone", "me.adaptive.arp.api", NULL, 0x1, 5, methods, 2, fields, 0, NULL};
  return &_ARPContactPhone;
}

@end

BOOL ARPContactPhone_PhoneTypeEnum_initialized = NO;

ARPContactPhone_PhoneTypeEnum *ARPContactPhone_PhoneTypeEnum_values[7];

@implementation ARPContactPhone_PhoneTypeEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPContactPhone_PhoneTypeEnum class]) {
    ARPContactPhone_PhoneTypeEnum_Mobile = [[ARPContactPhone_PhoneTypeEnum alloc] initWithNSString:@"Mobile" withInt:0];
    ARPContactPhone_PhoneTypeEnum_Work = [[ARPContactPhone_PhoneTypeEnum alloc] initWithNSString:@"Work" withInt:1];
    ARPContactPhone_PhoneTypeEnum_Home = [[ARPContactPhone_PhoneTypeEnum alloc] initWithNSString:@"Home" withInt:2];
    ARPContactPhone_PhoneTypeEnum_Main = [[ARPContactPhone_PhoneTypeEnum alloc] initWithNSString:@"Main" withInt:3];
    ARPContactPhone_PhoneTypeEnum_HomeFax = [[ARPContactPhone_PhoneTypeEnum alloc] initWithNSString:@"HomeFax" withInt:4];
    ARPContactPhone_PhoneTypeEnum_WorkFax = [[ARPContactPhone_PhoneTypeEnum alloc] initWithNSString:@"WorkFax" withInt:5];
    ARPContactPhone_PhoneTypeEnum_Other = [[ARPContactPhone_PhoneTypeEnum alloc] initWithNSString:@"Other" withInt:6];
    ARPContactPhone_PhoneTypeEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPContactPhone_PhoneTypeEnum_values count:7 type:[IOSClass classWithClass:[ARPContactPhone_PhoneTypeEnum class]]];
}

+ (ARPContactPhone_PhoneTypeEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 7; i++) {
    ARPContactPhone_PhoneTypeEnum *e = ARPContactPhone_PhoneTypeEnum_values[i];
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
    { "Mobile", "Mobile", 0x4019, "Lme.adaptive.arp.api.ContactPhone$PhoneType;", &ARPContactPhone_PhoneTypeEnum_Mobile,  },
    { "Work", "Work", 0x4019, "Lme.adaptive.arp.api.ContactPhone$PhoneType;", &ARPContactPhone_PhoneTypeEnum_Work,  },
    { "Home", "Home", 0x4019, "Lme.adaptive.arp.api.ContactPhone$PhoneType;", &ARPContactPhone_PhoneTypeEnum_Home,  },
    { "Main", "Main", 0x4019, "Lme.adaptive.arp.api.ContactPhone$PhoneType;", &ARPContactPhone_PhoneTypeEnum_Main,  },
    { "HomeFax", "HomeFax", 0x4019, "Lme.adaptive.arp.api.ContactPhone$PhoneType;", &ARPContactPhone_PhoneTypeEnum_HomeFax,  },
    { "WorkFax", "WorkFax", 0x4019, "Lme.adaptive.arp.api.ContactPhone$PhoneType;", &ARPContactPhone_PhoneTypeEnum_WorkFax,  },
    { "Other", "Other", 0x4019, "Lme.adaptive.arp.api.ContactPhone$PhoneType;", &ARPContactPhone_PhoneTypeEnum_Other,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ContactPhone$PhoneType;"};
  static J2ObjcClassInfo _ARPContactPhone_PhoneTypeEnum = { "PhoneType", "me.adaptive.arp.api", "ContactPhone", 0x4019, 1, methods, 7, fields, 1, superclass_type_args};
  return &_ARPContactPhone_PhoneTypeEnum;
}

@end
