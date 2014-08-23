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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ContactEmail.java
//
//

#include "ContactEmail.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@implementation ARPContactEmail

- (id)initWithARPContactEmail_EmailTypeEnum:(ARPContactEmail_EmailTypeEnum *)type
                                withBoolean:(BOOL)primary
                               withNSString:(NSString *)email {
  if (self = [super init]) {
    self->type_ = type;
    self->primary_ = primary;
    self->email_ = email;
  }
  return self;
}

- (ARPContactEmail_EmailTypeEnum *)getType {
  return type_;
}

- (void)setTypeWithARPContactEmail_EmailTypeEnum:(ARPContactEmail_EmailTypeEnum *)type {
  self->type_ = type;
}

- (BOOL)isPrimary {
  return primary_;
}

- (void)setPrimaryWithBoolean:(BOOL)primary {
  self->primary_ = primary;
}

- (NSString *)getEmail {
  return email_;
}

- (void)setEmailWithNSString:(NSString *)email {
  self->email_ = email;
}

- (void)copyAllFieldsTo:(ARPContactEmail *)other {
  [super copyAllFieldsTo:other];
  other->email_ = email_;
  other->primary_ = primary_;
  other->type_ = type_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithARPContactEmail_EmailTypeEnum:withBoolean:withNSString:", "ContactEmail", NULL, 0x1, NULL },
    { "getType", NULL, "Lme.adaptive.arp.api.ContactEmail$EmailType;", 0x1, NULL },
    { "setTypeWithARPContactEmail_EmailTypeEnum:", "setType", "V", 0x1, NULL },
    { "isPrimary", NULL, "Z", 0x1, NULL },
    { "setPrimaryWithBoolean:", "setPrimary", "V", 0x1, NULL },
    { "getEmail", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setEmailWithNSString:", "setEmail", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "type_", NULL, 0x2, "Lme.adaptive.arp.api.ContactEmail$EmailType;", NULL,  },
    { "primary_", NULL, 0x2, "Z", NULL,  },
    { "email_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPContactEmail = { "ContactEmail", "me.adaptive.arp.api", NULL, 0x1, 7, methods, 3, fields, 0, NULL};
  return &_ARPContactEmail;
}

@end

BOOL ARPContactEmail_EmailTypeEnum_initialized = NO;

ARPContactEmail_EmailTypeEnum *ARPContactEmail_EmailTypeEnum_values[3];

@implementation ARPContactEmail_EmailTypeEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPContactEmail_EmailTypeEnum class]) {
    ARPContactEmail_EmailTypeEnum_Personal = [[ARPContactEmail_EmailTypeEnum alloc] initWithNSString:@"Personal" withInt:0];
    ARPContactEmail_EmailTypeEnum_Work = [[ARPContactEmail_EmailTypeEnum alloc] initWithNSString:@"Work" withInt:1];
    ARPContactEmail_EmailTypeEnum_Other = [[ARPContactEmail_EmailTypeEnum alloc] initWithNSString:@"Other" withInt:2];
    ARPContactEmail_EmailTypeEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPContactEmail_EmailTypeEnum_values count:3 type:[IOSClass classWithClass:[ARPContactEmail_EmailTypeEnum class]]];
}

+ (ARPContactEmail_EmailTypeEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPContactEmail_EmailTypeEnum *e = ARPContactEmail_EmailTypeEnum_values[i];
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
    { "Personal", "Personal", 0x4019, "Lme.adaptive.arp.api.ContactEmail$EmailType;", &ARPContactEmail_EmailTypeEnum_Personal,  },
    { "Work", "Work", 0x4019, "Lme.adaptive.arp.api.ContactEmail$EmailType;", &ARPContactEmail_EmailTypeEnum_Work,  },
    { "Other", "Other", 0x4019, "Lme.adaptive.arp.api.ContactEmail$EmailType;", &ARPContactEmail_EmailTypeEnum_Other,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ContactEmail$EmailType;"};
  static J2ObjcClassInfo _ARPContactEmail_EmailTypeEnum = { "EmailType", "me.adaptive.arp.api", "ContactEmail", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPContactEmail_EmailTypeEnum;
}

@end
