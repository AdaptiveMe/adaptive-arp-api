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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IContactResultCallback.java
//
//

#include "IContactResultCallback.h"
#include "IOSClass.h"
#include "IOSObjectArray.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIContactResultCallback : NSObject
@end

@implementation ARPIContactResultCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPContactArray:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPContactArray:withARPIContactResultCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIContactResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIContactResultCallback = { "IContactResultCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIContactResultCallback;
}

@end

BOOL ARPIContactResultCallback_WarningEnum_initialized = NO;

ARPIContactResultCallback_WarningEnum *ARPIContactResultCallback_WarningEnum_values[3];

@implementation ARPIContactResultCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIContactResultCallback_WarningEnum class]) {
    ARPIContactResultCallback_WarningEnum_LimitExceeded = [[ARPIContactResultCallback_WarningEnum alloc] initWithNSString:@"LimitExceeded" withInt:0];
    ARPIContactResultCallback_WarningEnum_No_Matches = [[ARPIContactResultCallback_WarningEnum alloc] initWithNSString:@"No_Matches" withInt:1];
    ARPIContactResultCallback_WarningEnum_Unknown = [[ARPIContactResultCallback_WarningEnum alloc] initWithNSString:@"Unknown" withInt:2];
    ARPIContactResultCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIContactResultCallback_WarningEnum_values count:3 type:[IOSClass classWithClass:[ARPIContactResultCallback_WarningEnum class]]];
}

+ (ARPIContactResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPIContactResultCallback_WarningEnum *e = ARPIContactResultCallback_WarningEnum_values[i];
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
    { "LimitExceeded", "LimitExceeded", 0x4019, "Lme.adaptive.arp.api.IContactResultCallback$Warning;", &ARPIContactResultCallback_WarningEnum_LimitExceeded,  },
    { "No_Matches", "No_Matches", 0x4019, "Lme.adaptive.arp.api.IContactResultCallback$Warning;", &ARPIContactResultCallback_WarningEnum_No_Matches,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.IContactResultCallback$Warning;", &ARPIContactResultCallback_WarningEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IContactResultCallback$Warning;"};
  static J2ObjcClassInfo _ARPIContactResultCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IContactResultCallback", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPIContactResultCallback_WarningEnum;
}

@end

BOOL ARPIContactResultCallback_ErrorEnum_initialized = NO;

ARPIContactResultCallback_ErrorEnum *ARPIContactResultCallback_ErrorEnum_values[3];

@implementation ARPIContactResultCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIContactResultCallback_ErrorEnum class]) {
    ARPIContactResultCallback_ErrorEnum_NoPermission = [[ARPIContactResultCallback_ErrorEnum alloc] initWithNSString:@"NoPermission" withInt:0];
    ARPIContactResultCallback_ErrorEnum_Wrong_Params = [[ARPIContactResultCallback_ErrorEnum alloc] initWithNSString:@"Wrong_Params" withInt:1];
    ARPIContactResultCallback_ErrorEnum_Unknown = [[ARPIContactResultCallback_ErrorEnum alloc] initWithNSString:@"Unknown" withInt:2];
    ARPIContactResultCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIContactResultCallback_ErrorEnum_values count:3 type:[IOSClass classWithClass:[ARPIContactResultCallback_ErrorEnum class]]];
}

+ (ARPIContactResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPIContactResultCallback_ErrorEnum *e = ARPIContactResultCallback_ErrorEnum_values[i];
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
    { "NoPermission", "NoPermission", 0x4019, "Lme.adaptive.arp.api.IContactResultCallback$Error;", &ARPIContactResultCallback_ErrorEnum_NoPermission,  },
    { "Wrong_Params", "Wrong_Params", 0x4019, "Lme.adaptive.arp.api.IContactResultCallback$Error;", &ARPIContactResultCallback_ErrorEnum_Wrong_Params,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.IContactResultCallback$Error;", &ARPIContactResultCallback_ErrorEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IContactResultCallback$Error;"};
  static J2ObjcClassInfo _ARPIContactResultCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IContactResultCallback", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPIContactResultCallback_ErrorEnum;
}

@end
