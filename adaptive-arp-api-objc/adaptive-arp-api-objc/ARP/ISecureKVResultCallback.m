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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ISecureKVResultCallback.java
//
//

#include "IOSClass.h"
#include "IOSObjectArray.h"
#include "ISecureKVResultCallback.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPISecureKVResultCallback : NSObject
@end

@implementation ARPISecureKVResultCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPSecureKeyPairArray:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPSecureKeyPairArray:withARPISecureKVResultCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPISecureKVResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPISecureKVResultCallback = { "ISecureKVResultCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPISecureKVResultCallback;
}

@end

BOOL ARPISecureKVResultCallback_WarningEnum_initialized = NO;

ARPISecureKVResultCallback_WarningEnum *ARPISecureKVResultCallback_WarningEnum_values[1];

@implementation ARPISecureKVResultCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPISecureKVResultCallback_WarningEnum class]) {
    ARPISecureKVResultCallback_WarningEnum_EntryOverride = [[ARPISecureKVResultCallback_WarningEnum alloc] initWithNSString:@"EntryOverride" withInt:0];
    ARPISecureKVResultCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPISecureKVResultCallback_WarningEnum_values count:1 type:[IOSClass classWithClass:[ARPISecureKVResultCallback_WarningEnum class]]];
}

+ (ARPISecureKVResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 1; i++) {
    ARPISecureKVResultCallback_WarningEnum *e = ARPISecureKVResultCallback_WarningEnum_values[i];
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
    { "EntryOverride", "EntryOverride", 0x4019, "Lme.adaptive.arp.api.ISecureKVResultCallback$Warning;", &ARPISecureKVResultCallback_WarningEnum_EntryOverride,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ISecureKVResultCallback$Warning;"};
  static J2ObjcClassInfo _ARPISecureKVResultCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "ISecureKVResultCallback", 0x4019, 1, methods, 1, fields, 1, superclass_type_args};
  return &_ARPISecureKVResultCallback_WarningEnum;
}

@end

BOOL ARPISecureKVResultCallback_ErrorEnum_initialized = NO;

ARPISecureKVResultCallback_ErrorEnum *ARPISecureKVResultCallback_ErrorEnum_values[2];

@implementation ARPISecureKVResultCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPISecureKVResultCallback_ErrorEnum class]) {
    ARPISecureKVResultCallback_ErrorEnum_NoPermission = [[ARPISecureKVResultCallback_ErrorEnum alloc] initWithNSString:@"NoPermission" withInt:0];
    ARPISecureKVResultCallback_ErrorEnum_NoMatchesFound = [[ARPISecureKVResultCallback_ErrorEnum alloc] initWithNSString:@"NoMatchesFound" withInt:1];
    ARPISecureKVResultCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPISecureKVResultCallback_ErrorEnum_values count:2 type:[IOSClass classWithClass:[ARPISecureKVResultCallback_ErrorEnum class]]];
}

+ (ARPISecureKVResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPISecureKVResultCallback_ErrorEnum *e = ARPISecureKVResultCallback_ErrorEnum_values[i];
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
    { "NoPermission", "NoPermission", 0x4019, "Lme.adaptive.arp.api.ISecureKVResultCallback$Error;", &ARPISecureKVResultCallback_ErrorEnum_NoPermission,  },
    { "NoMatchesFound", "NoMatchesFound", 0x4019, "Lme.adaptive.arp.api.ISecureKVResultCallback$Error;", &ARPISecureKVResultCallback_ErrorEnum_NoMatchesFound,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ISecureKVResultCallback$Error;"};
  static J2ObjcClassInfo _ARPISecureKVResultCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "ISecureKVResultCallback", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPISecureKVResultCallback_ErrorEnum;
}

@end
