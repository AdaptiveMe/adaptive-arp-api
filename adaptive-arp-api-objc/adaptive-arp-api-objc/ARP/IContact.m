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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IContact.java
//
//

#include "ContactUid.h"
#include "IContact.h"
#include "IContactResultCallback.h"
#include "IOSClass.h"
#include "IOSObjectArray.h"
#include "IOSPrimitiveArray.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIContact : NSObject
@end

@implementation ARPIContact

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "searchContactsWithNSString:withARPIContactResultCallback:", "searchContacts", "V", 0x401, NULL },
    { "searchContactsWithNSString:withARPIContactResultCallback:withARPIContact_FilterEnumArray:", "searchContacts", "V", 0x481, NULL },
    { "getContactWithARPContactUid:withARPIContactResultCallback:", "getContact", "V", 0x401, NULL },
    { "getContactPhotoWithARPContactUid:withARPIContactResultCallback:", "getContactPhoto", "V", 0x401, NULL },
    { "setContactPhotoWithARPContactUid:withByteArray:", "setContactPhoto", "Z", 0x401, NULL },
    { "getContactsWithARPIContactResultCallback:", "getContacts", "V", 0x401, NULL },
    { "getContactsWithARPIContactResultCallback:withARPIContact_FieldGroupEnumArray:", "getContacts", "V", 0x481, NULL },
    { "getContactsWithARPIContactResultCallback:withARPIContact_FieldGroupEnumArray:withARPIContact_FilterEnumArray:", "getContacts", "V", 0x481, NULL },
  };
  static J2ObjcClassInfo _ARPIContact = { "IContact", "me.adaptive.arp.api", NULL, 0x201, 8, methods, 0, NULL, 0, NULL};
  return &_ARPIContact;
}

@end

BOOL ARPIContact_FilterEnum_initialized = NO;

ARPIContact_FilterEnum *ARPIContact_FilterEnum_values[3];

@implementation ARPIContact_FilterEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIContact_FilterEnum class]) {
    ARPIContact_FilterEnum_HAS_PHONE = [[ARPIContact_FilterEnum alloc] initWithNSString:@"HAS_PHONE" withInt:0];
    ARPIContact_FilterEnum_HAS_EMAIL = [[ARPIContact_FilterEnum alloc] initWithNSString:@"HAS_EMAIL" withInt:1];
    ARPIContact_FilterEnum_HAS_ADDRESS = [[ARPIContact_FilterEnum alloc] initWithNSString:@"HAS_ADDRESS" withInt:2];
    ARPIContact_FilterEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIContact_FilterEnum_values count:3 type:[IOSClass classWithClass:[ARPIContact_FilterEnum class]]];
}

+ (ARPIContact_FilterEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPIContact_FilterEnum *e = ARPIContact_FilterEnum_values[i];
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
    { "HAS_PHONE", "HAS_PHONE", 0x4019, "Lme.adaptive.arp.api.IContact$Filter;", &ARPIContact_FilterEnum_HAS_PHONE,  },
    { "HAS_EMAIL", "HAS_EMAIL", 0x4019, "Lme.adaptive.arp.api.IContact$Filter;", &ARPIContact_FilterEnum_HAS_EMAIL,  },
    { "HAS_ADDRESS", "HAS_ADDRESS", 0x4019, "Lme.adaptive.arp.api.IContact$Filter;", &ARPIContact_FilterEnum_HAS_ADDRESS,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IContact$Filter;"};
  static J2ObjcClassInfo _ARPIContact_FilterEnum = { "Filter", "me.adaptive.arp.api", "IContact", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPIContact_FilterEnum;
}

@end

BOOL ARPIContact_FieldGroupEnum_initialized = NO;

ARPIContact_FieldGroupEnum *ARPIContact_FieldGroupEnum_values[8];

@implementation ARPIContact_FieldGroupEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIContact_FieldGroupEnum class]) {
    ARPIContact_FieldGroupEnum_PERSONAL_INFO = [[ARPIContact_FieldGroupEnum alloc] initWithNSString:@"PERSONAL_INFO" withInt:0];
    ARPIContact_FieldGroupEnum_PROFESSIONAL_INFO = [[ARPIContact_FieldGroupEnum alloc] initWithNSString:@"PROFESSIONAL_INFO" withInt:1];
    ARPIContact_FieldGroupEnum_ADDRESSES = [[ARPIContact_FieldGroupEnum alloc] initWithNSString:@"ADDRESSES" withInt:2];
    ARPIContact_FieldGroupEnum_PHONES = [[ARPIContact_FieldGroupEnum alloc] initWithNSString:@"PHONES" withInt:3];
    ARPIContact_FieldGroupEnum_EMAILS = [[ARPIContact_FieldGroupEnum alloc] initWithNSString:@"EMAILS" withInt:4];
    ARPIContact_FieldGroupEnum_WEBSITES = [[ARPIContact_FieldGroupEnum alloc] initWithNSString:@"WEBSITES" withInt:5];
    ARPIContact_FieldGroupEnum_SOCIALS = [[ARPIContact_FieldGroupEnum alloc] initWithNSString:@"SOCIALS" withInt:6];
    ARPIContact_FieldGroupEnum_TAGS = [[ARPIContact_FieldGroupEnum alloc] initWithNSString:@"TAGS" withInt:7];
    ARPIContact_FieldGroupEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIContact_FieldGroupEnum_values count:8 type:[IOSClass classWithClass:[ARPIContact_FieldGroupEnum class]]];
}

+ (ARPIContact_FieldGroupEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 8; i++) {
    ARPIContact_FieldGroupEnum *e = ARPIContact_FieldGroupEnum_values[i];
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
    { "PERSONAL_INFO", "PERSONAL_INFO", 0x4019, "Lme.adaptive.arp.api.IContact$FieldGroup;", &ARPIContact_FieldGroupEnum_PERSONAL_INFO,  },
    { "PROFESSIONAL_INFO", "PROFESSIONAL_INFO", 0x4019, "Lme.adaptive.arp.api.IContact$FieldGroup;", &ARPIContact_FieldGroupEnum_PROFESSIONAL_INFO,  },
    { "ADDRESSES", "ADDRESSES", 0x4019, "Lme.adaptive.arp.api.IContact$FieldGroup;", &ARPIContact_FieldGroupEnum_ADDRESSES,  },
    { "PHONES", "PHONES", 0x4019, "Lme.adaptive.arp.api.IContact$FieldGroup;", &ARPIContact_FieldGroupEnum_PHONES,  },
    { "EMAILS", "EMAILS", 0x4019, "Lme.adaptive.arp.api.IContact$FieldGroup;", &ARPIContact_FieldGroupEnum_EMAILS,  },
    { "WEBSITES", "WEBSITES", 0x4019, "Lme.adaptive.arp.api.IContact$FieldGroup;", &ARPIContact_FieldGroupEnum_WEBSITES,  },
    { "SOCIALS", "SOCIALS", 0x4019, "Lme.adaptive.arp.api.IContact$FieldGroup;", &ARPIContact_FieldGroupEnum_SOCIALS,  },
    { "TAGS", "TAGS", 0x4019, "Lme.adaptive.arp.api.IContact$FieldGroup;", &ARPIContact_FieldGroupEnum_TAGS,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IContact$FieldGroup;"};
  static J2ObjcClassInfo _ARPIContact_FieldGroupEnum = { "FieldGroup", "me.adaptive.arp.api", "IContact", 0x4019, 1, methods, 8, fields, 1, superclass_type_args};
  return &_ARPIContact_FieldGroupEnum;
}

@end
