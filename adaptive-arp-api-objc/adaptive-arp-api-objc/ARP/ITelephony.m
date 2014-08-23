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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ITelephony.java
//
//

#include "IOSClass.h"
#include "ITelephony.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPITelephony : NSObject
@end

@implementation ARPITelephony

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "callWithNSString:", "call", "Lme.adaptive.arp.api.ITelephony$Status;", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPITelephony = { "ITelephony", "me.adaptive.arp.api", NULL, 0x201, 1, methods, 0, NULL, 0, NULL};
  return &_ARPITelephony;
}

@end

BOOL ARPITelephony_StatusEnum_initialized = NO;

ARPITelephony_StatusEnum *ARPITelephony_StatusEnum_values[2];

@implementation ARPITelephony_StatusEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPITelephony_StatusEnum class]) {
    ARPITelephony_StatusEnum_Dialing = [[ARPITelephony_StatusEnum alloc] initWithNSString:@"Dialing" withInt:0];
    ARPITelephony_StatusEnum_Failed = [[ARPITelephony_StatusEnum alloc] initWithNSString:@"Failed" withInt:1];
    ARPITelephony_StatusEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPITelephony_StatusEnum_values count:2 type:[IOSClass classWithClass:[ARPITelephony_StatusEnum class]]];
}

+ (ARPITelephony_StatusEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPITelephony_StatusEnum *e = ARPITelephony_StatusEnum_values[i];
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
    { "Dialing", "Dialing", 0x4019, "Lme.adaptive.arp.api.ITelephony$Status;", &ARPITelephony_StatusEnum_Dialing,  },
    { "Failed", "Failed", 0x4019, "Lme.adaptive.arp.api.ITelephony$Status;", &ARPITelephony_StatusEnum_Failed,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ITelephony$Status;"};
  static J2ObjcClassInfo _ARPITelephony_StatusEnum = { "Status", "me.adaptive.arp.api", "ITelephony", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPITelephony_StatusEnum;
}

@end
