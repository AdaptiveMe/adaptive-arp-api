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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IInternalStorageResultCallback.java
//
//

#include "IInternalStorageResultCallback.h"
#include "IOSClass.h"
#include "IOSObjectArray.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIInternalStorageResultCallback : NSObject
@end

@implementation ARPIInternalStorageResultCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPInternalStorageKeyPairArray:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPInternalStorageKeyPairArray:withARPIInternalStorageResultCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIInternalStorageResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIInternalStorageResultCallback = { "IInternalStorageResultCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIInternalStorageResultCallback;
}

@end

BOOL ARPIInternalStorageResultCallback_WarningEnum_initialized = NO;

ARPIInternalStorageResultCallback_WarningEnum *ARPIInternalStorageResultCallback_WarningEnum_values[1];

@implementation ARPIInternalStorageResultCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIInternalStorageResultCallback_WarningEnum class]) {
    ARPIInternalStorageResultCallback_WarningEnum_EntryOverride = [[ARPIInternalStorageResultCallback_WarningEnum alloc] initWithNSString:@"EntryOverride" withInt:0];
    ARPIInternalStorageResultCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIInternalStorageResultCallback_WarningEnum_values count:1 type:[IOSClass classWithClass:[ARPIInternalStorageResultCallback_WarningEnum class]]];
}

+ (ARPIInternalStorageResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 1; i++) {
    ARPIInternalStorageResultCallback_WarningEnum *e = ARPIInternalStorageResultCallback_WarningEnum_values[i];
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
    { "EntryOverride", "EntryOverride", 0x4019, "Lme.adaptive.arp.api.IInternalStorageResultCallback$Warning;", &ARPIInternalStorageResultCallback_WarningEnum_EntryOverride,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IInternalStorageResultCallback$Warning;"};
  static J2ObjcClassInfo _ARPIInternalStorageResultCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IInternalStorageResultCallback", 0x4019, 1, methods, 1, fields, 1, superclass_type_args};
  return &_ARPIInternalStorageResultCallback_WarningEnum;
}

@end

BOOL ARPIInternalStorageResultCallback_ErrorEnum_initialized = NO;

ARPIInternalStorageResultCallback_ErrorEnum *ARPIInternalStorageResultCallback_ErrorEnum_values[2];

@implementation ARPIInternalStorageResultCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIInternalStorageResultCallback_ErrorEnum class]) {
    ARPIInternalStorageResultCallback_ErrorEnum_NoPermission = [[ARPIInternalStorageResultCallback_ErrorEnum alloc] initWithNSString:@"NoPermission" withInt:0];
    ARPIInternalStorageResultCallback_ErrorEnum_NoMatchesFound = [[ARPIInternalStorageResultCallback_ErrorEnum alloc] initWithNSString:@"NoMatchesFound" withInt:1];
    ARPIInternalStorageResultCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIInternalStorageResultCallback_ErrorEnum_values count:2 type:[IOSClass classWithClass:[ARPIInternalStorageResultCallback_ErrorEnum class]]];
}

+ (ARPIInternalStorageResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIInternalStorageResultCallback_ErrorEnum *e = ARPIInternalStorageResultCallback_ErrorEnum_values[i];
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
    { "NoPermission", "NoPermission", 0x4019, "Lme.adaptive.arp.api.IInternalStorageResultCallback$Error;", &ARPIInternalStorageResultCallback_ErrorEnum_NoPermission,  },
    { "NoMatchesFound", "NoMatchesFound", 0x4019, "Lme.adaptive.arp.api.IInternalStorageResultCallback$Error;", &ARPIInternalStorageResultCallback_ErrorEnum_NoMatchesFound,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IInternalStorageResultCallback$Error;"};
  static J2ObjcClassInfo _ARPIInternalStorageResultCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IInternalStorageResultCallback", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIInternalStorageResultCallback_ErrorEnum;
}

@end
