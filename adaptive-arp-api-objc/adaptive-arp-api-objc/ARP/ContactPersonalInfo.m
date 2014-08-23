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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ContactPersonalInfo.java
//
//

#include "ContactPersonalInfo.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@implementation ARPContactPersonalInfo

- (id)initWithNSString:(NSString *)name
          withNSString:(NSString *)middleName
          withNSString:(NSString *)lastName
withARPContactPersonalInfo_TitleEnum:(ARPContactPersonalInfo_TitleEnum *)title {
  if (self = [super init]) {
    self->name_ = name;
    self->middleName_ = middleName;
    self->lastName_ = lastName;
    self->title_ = title;
  }
  return self;
}

- (NSString *)getName {
  return name_;
}

- (void)setNameWithNSString:(NSString *)name {
  self->name_ = name;
}

- (NSString *)getMiddleName {
  return middleName_;
}

- (void)setMiddleNameWithNSString:(NSString *)middleName {
  self->middleName_ = middleName;
}

- (NSString *)getLastName {
  return lastName_;
}

- (void)setLastNameWithNSString:(NSString *)lastName {
  self->lastName_ = lastName;
}

- (ARPContactPersonalInfo_TitleEnum *)getTitle {
  return title_;
}

- (void)setTitleWithARPContactPersonalInfo_TitleEnum:(ARPContactPersonalInfo_TitleEnum *)title {
  self->title_ = title;
}

- (void)copyAllFieldsTo:(ARPContactPersonalInfo *)other {
  [super copyAllFieldsTo:other];
  other->lastName_ = lastName_;
  other->middleName_ = middleName_;
  other->name_ = name_;
  other->title_ = title_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:withNSString:withNSString:withARPContactPersonalInfo_TitleEnum:", "ContactPersonalInfo", NULL, 0x1, NULL },
    { "getName", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setNameWithNSString:", "setName", "V", 0x1, NULL },
    { "getMiddleName", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setMiddleNameWithNSString:", "setMiddleName", "V", 0x1, NULL },
    { "getLastName", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setLastNameWithNSString:", "setLastName", "V", 0x1, NULL },
    { "getTitle", NULL, "Lme.adaptive.arp.api.ContactPersonalInfo$Title;", 0x1, NULL },
    { "setTitleWithARPContactPersonalInfo_TitleEnum:", "setTitle", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "name_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "middleName_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "lastName_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "title_", NULL, 0x2, "Lme.adaptive.arp.api.ContactPersonalInfo$Title;", NULL,  },
  };
  static J2ObjcClassInfo _ARPContactPersonalInfo = { "ContactPersonalInfo", "me.adaptive.arp.api", NULL, 0x1, 9, methods, 4, fields, 0, NULL};
  return &_ARPContactPersonalInfo;
}

@end

BOOL ARPContactPersonalInfo_TitleEnum_initialized = NO;

ARPContactPersonalInfo_TitleEnum *ARPContactPersonalInfo_TitleEnum_values[4];

@implementation ARPContactPersonalInfo_TitleEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPContactPersonalInfo_TitleEnum class]) {
    ARPContactPersonalInfo_TitleEnum_Mr = [[ARPContactPersonalInfo_TitleEnum alloc] initWithNSString:@"Mr" withInt:0];
    ARPContactPersonalInfo_TitleEnum_Mrs = [[ARPContactPersonalInfo_TitleEnum alloc] initWithNSString:@"Mrs" withInt:1];
    ARPContactPersonalInfo_TitleEnum_Ms = [[ARPContactPersonalInfo_TitleEnum alloc] initWithNSString:@"Ms" withInt:2];
    ARPContactPersonalInfo_TitleEnum_Dr = [[ARPContactPersonalInfo_TitleEnum alloc] initWithNSString:@"Dr" withInt:3];
    ARPContactPersonalInfo_TitleEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPContactPersonalInfo_TitleEnum_values count:4 type:[IOSClass classWithClass:[ARPContactPersonalInfo_TitleEnum class]]];
}

+ (ARPContactPersonalInfo_TitleEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPContactPersonalInfo_TitleEnum *e = ARPContactPersonalInfo_TitleEnum_values[i];
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
    { "Mr", "Mr", 0x4019, "Lme.adaptive.arp.api.ContactPersonalInfo$Title;", &ARPContactPersonalInfo_TitleEnum_Mr,  },
    { "Mrs", "Mrs", 0x4019, "Lme.adaptive.arp.api.ContactPersonalInfo$Title;", &ARPContactPersonalInfo_TitleEnum_Mrs,  },
    { "Ms", "Ms", 0x4019, "Lme.adaptive.arp.api.ContactPersonalInfo$Title;", &ARPContactPersonalInfo_TitleEnum_Ms,  },
    { "Dr", "Dr", 0x4019, "Lme.adaptive.arp.api.ContactPersonalInfo$Title;", &ARPContactPersonalInfo_TitleEnum_Dr,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ContactPersonalInfo$Title;"};
  static J2ObjcClassInfo _ARPContactPersonalInfo_TitleEnum = { "Title", "me.adaptive.arp.api", "ContactPersonalInfo", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPContactPersonalInfo_TitleEnum;
}

@end
