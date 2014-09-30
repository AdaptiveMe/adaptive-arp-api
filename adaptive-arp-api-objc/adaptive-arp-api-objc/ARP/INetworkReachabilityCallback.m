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
    { "onResultWithNSString:", "onResult", "V", 0x401, NULL },
    { "onWarningWithNSString:withARPINetworkReachabilityCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPINetworkReachabilityCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPINetworkReachabilityCallback = { "INetworkReachabilityCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPINetworkReachabilityCallback;
}

@end

BOOL ARPINetworkReachabilityCallback_ErrorEnum_initialized = NO;

ARPINetworkReachabilityCallback_ErrorEnum *ARPINetworkReachabilityCallback_ErrorEnum_values[9];

@implementation ARPINetworkReachabilityCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPINetworkReachabilityCallback_ErrorEnum class]) {
    ARPINetworkReachabilityCallback_ErrorEnum_Forbidden = [[ARPINetworkReachabilityCallback_ErrorEnum alloc] initWithNSString:@"Forbidden" withInt:0];
    ARPINetworkReachabilityCallback_ErrorEnum_NotFound = [[ARPINetworkReachabilityCallback_ErrorEnum alloc] initWithNSString:@"NotFound" withInt:1];
    ARPINetworkReachabilityCallback_ErrorEnum_MethodNotAllowed = [[ARPINetworkReachabilityCallback_ErrorEnum alloc] initWithNSString:@"MethodNotAllowed" withInt:2];
    ARPINetworkReachabilityCallback_ErrorEnum_NotAllowed = [[ARPINetworkReachabilityCallback_ErrorEnum alloc] initWithNSString:@"NotAllowed" withInt:3];
    ARPINetworkReachabilityCallback_ErrorEnum_NotAuthenticated = [[ARPINetworkReachabilityCallback_ErrorEnum alloc] initWithNSString:@"NotAuthenticated" withInt:4];
    ARPINetworkReachabilityCallback_ErrorEnum_TimeOut = [[ARPINetworkReachabilityCallback_ErrorEnum alloc] initWithNSString:@"TimeOut" withInt:5];
    ARPINetworkReachabilityCallback_ErrorEnum_NoResponse = [[ARPINetworkReachabilityCallback_ErrorEnum alloc] initWithNSString:@"NoResponse" withInt:6];
    ARPINetworkReachabilityCallback_ErrorEnum_Unreachable = [[ARPINetworkReachabilityCallback_ErrorEnum alloc] initWithNSString:@"Unreachable" withInt:7];
    ARPINetworkReachabilityCallback_ErrorEnum_Wrong_Params = [[ARPINetworkReachabilityCallback_ErrorEnum alloc] initWithNSString:@"Wrong_Params" withInt:8];
    ARPINetworkReachabilityCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPINetworkReachabilityCallback_ErrorEnum_values count:9 type:[IOSClass classWithClass:[ARPINetworkReachabilityCallback_ErrorEnum class]]];
}

+ (ARPINetworkReachabilityCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 9; i++) {
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
    { "Forbidden", "Forbidden", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;", &ARPINetworkReachabilityCallback_ErrorEnum_Forbidden,  },
    { "NotFound", "NotFound", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;", &ARPINetworkReachabilityCallback_ErrorEnum_NotFound,  },
    { "MethodNotAllowed", "MethodNotAllowed", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;", &ARPINetworkReachabilityCallback_ErrorEnum_MethodNotAllowed,  },
    { "NotAllowed", "NotAllowed", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;", &ARPINetworkReachabilityCallback_ErrorEnum_NotAllowed,  },
    { "NotAuthenticated", "NotAuthenticated", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;", &ARPINetworkReachabilityCallback_ErrorEnum_NotAuthenticated,  },
    { "TimeOut", "TimeOut", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;", &ARPINetworkReachabilityCallback_ErrorEnum_TimeOut,  },
    { "NoResponse", "NoResponse", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;", &ARPINetworkReachabilityCallback_ErrorEnum_NoResponse,  },
    { "Unreachable", "Unreachable", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;", &ARPINetworkReachabilityCallback_ErrorEnum_Unreachable,  },
    { "Wrong_Params", "Wrong_Params", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;", &ARPINetworkReachabilityCallback_ErrorEnum_Wrong_Params,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.INetworkReachabilityCallback$Error;"};
  static J2ObjcClassInfo _ARPINetworkReachabilityCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "INetworkReachabilityCallback", 0x4019, 1, methods, 9, fields, 1, superclass_type_args};
  return &_ARPINetworkReachabilityCallback_ErrorEnum;
}

@end

BOOL ARPINetworkReachabilityCallback_WarningEnum_initialized = NO;

ARPINetworkReachabilityCallback_WarningEnum *ARPINetworkReachabilityCallback_WarningEnum_values[6];

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
    ARPINetworkReachabilityCallback_WarningEnum_NotSecure = [[ARPINetworkReachabilityCallback_WarningEnum alloc] initWithNSString:@"NotSecure" withInt:1];
    ARPINetworkReachabilityCallback_WarningEnum_NotTrusted = [[ARPINetworkReachabilityCallback_WarningEnum alloc] initWithNSString:@"NotTrusted" withInt:2];
    ARPINetworkReachabilityCallback_WarningEnum_Redirected = [[ARPINetworkReachabilityCallback_WarningEnum alloc] initWithNSString:@"Redirected" withInt:3];
    ARPINetworkReachabilityCallback_WarningEnum_NotRegisteredService = [[ARPINetworkReachabilityCallback_WarningEnum alloc] initWithNSString:@"NotRegisteredService" withInt:4];
    ARPINetworkReachabilityCallback_WarningEnum_MalformedUrl = [[ARPINetworkReachabilityCallback_WarningEnum alloc] initWithNSString:@"MalformedUrl" withInt:5];
    ARPINetworkReachabilityCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPINetworkReachabilityCallback_WarningEnum_values count:6 type:[IOSClass classWithClass:[ARPINetworkReachabilityCallback_WarningEnum class]]];
}

+ (ARPINetworkReachabilityCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 6; i++) {
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
    { "NotSecure", "NotSecure", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Warning;", &ARPINetworkReachabilityCallback_WarningEnum_NotSecure,  },
    { "NotTrusted", "NotTrusted", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Warning;", &ARPINetworkReachabilityCallback_WarningEnum_NotTrusted,  },
    { "Redirected", "Redirected", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Warning;", &ARPINetworkReachabilityCallback_WarningEnum_Redirected,  },
    { "NotRegisteredService", "NotRegisteredService", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Warning;", &ARPINetworkReachabilityCallback_WarningEnum_NotRegisteredService,  },
    { "MalformedUrl", "MalformedUrl", 0x4019, "Lme.adaptive.arp.api.INetworkReachabilityCallback$Warning;", &ARPINetworkReachabilityCallback_WarningEnum_MalformedUrl,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.INetworkReachabilityCallback$Warning;"};
  static J2ObjcClassInfo _ARPINetworkReachabilityCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "INetworkReachabilityCallback", 0x4019, 1, methods, 6, fields, 1, superclass_type_args};
  return &_ARPINetworkReachabilityCallback_WarningEnum;
}

@end
