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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/INetworkReachabilityCallback.java
//
//

#include "INetworkReachabilityCallback.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPINetworkReachabilityCallback : NSObject
@end

@implementation ARPINetworkReachabilityCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithBoolean:", "onResult", "V", 0x401, NULL },
    { "onWarningWithBoolean:withARPINetworkReachabilityCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPINetworkReachabilityCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPINetworkReachabilityCallback = { "INetworkReachabilityCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPINetworkReachabilityCallback;
}

@end

BOOL ARPINetworkReachabilityCallback_WarningEnum_initialized = NO;

ARPINetworkReachabilityCallback_WarningEnum *ARPINetworkReachabilityCallback_WarningEnum_values[1];

@implementation ARPINetworkReachabilityCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPINetworkReachabilityCallback_WarningEnum class]) {
    ARPINetworkReachabilityCallback_WarningEnum_IncorrectScheme = [[ARPINetworkReachabilityCallback_WarningEnum alloc] initWithNSString:@"IncorrectScheme" withInt:0];
    ARPINetworkReachabilityCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPINetworkReachabilityCallback_WarningEnum_values count:1 type:[IOSClass classWithClass:[ARPINetworkReachabilityCallback_WarningEnum class]]];
}

+ (ARPINetworkReachabilityCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 1; i++) {
    ARPINetworkReachabilityCallback_WarningEnum *e = ARPINetworkReachabilityCallback_WarningEnum_values[i];
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
    { "IncorrectScheme", "IncorrectScheme", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Warning;", &ARPINetworkReachabilityCallback_WarningEnum_IncorrectScheme,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.INetworkReachabilityCallback$Warning;"};
  static J2ObjcClassInfo _ARPINetworkReachabilityCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "INetworkReachabilityCallback", 0x4019, 1, methods, 1, fields, 1, superclass_type_args};
  return &_ARPINetworkReachabilityCallback_WarningEnum;
}

@end

BOOL ARPINetworkReachabilityCallback_ErrorEnum_initialized = NO;

ARPINetworkReachabilityCallback_ErrorEnum *ARPINetworkReachabilityCallback_ErrorEnum_values[2];

@implementation ARPINetworkReachabilityCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPINetworkReachabilityCallback_ErrorEnum class]) {
    ARPINetworkReachabilityCallback_ErrorEnum_NoPermission = [[ARPINetworkReachabilityCallback_ErrorEnum alloc] initWithNSString:@"NoPermission" withInt:0];
    ARPINetworkReachabilityCallback_ErrorEnum_NetworkOnMainThreadException = [[ARPINetworkReachabilityCallback_ErrorEnum alloc] initWithNSString:@"NetworkOnMainThreadException" withInt:1];
    ARPINetworkReachabilityCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPINetworkReachabilityCallback_ErrorEnum_values count:2 type:[IOSClass classWithClass:[ARPINetworkReachabilityCallback_ErrorEnum class]]];
}

+ (ARPINetworkReachabilityCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPINetworkReachabilityCallback_ErrorEnum *e = ARPINetworkReachabilityCallback_ErrorEnum_values[i];
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
    { "NoPermission", "NoPermission", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;", &ARPINetworkReachabilityCallback_ErrorEnum_NoPermission,  },
    { "NetworkOnMainThreadException", "NetworkOnMainThreadException", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;", &ARPINetworkReachabilityCallback_ErrorEnum_NetworkOnMainThreadException,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;"};
  static J2ObjcClassInfo _ARPINetworkReachabilityCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "INetworkReachabilityCallback", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPINetworkReachabilityCallback_ErrorEnum;
}

@end
