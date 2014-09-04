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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IServiceResultCallback.java
//
//

#include "IOSClass.h"
#include "IServiceResultCallback.h"
#include "ServiceResponse.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIServiceResultCallback : NSObject
@end

@implementation ARPIServiceResultCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPServiceResponse:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPServiceResponse:withARPIServiceResultCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIServiceResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIServiceResultCallback = { "IServiceResultCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIServiceResultCallback;
}

@end

BOOL ARPIServiceResultCallback_WarningEnum_initialized = NO;

ARPIServiceResultCallback_WarningEnum *ARPIServiceResultCallback_WarningEnum_values[4];

@implementation ARPIServiceResultCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIServiceResultCallback_WarningEnum class]) {
    ARPIServiceResultCallback_WarningEnum_NotSecure = [[ARPIServiceResultCallback_WarningEnum alloc] initWithNSString:@"NotSecure" withInt:0];
    ARPIServiceResultCallback_WarningEnum_NotTrusted = [[ARPIServiceResultCallback_WarningEnum alloc] initWithNSString:@"NotTrusted" withInt:1];
    ARPIServiceResultCallback_WarningEnum_Redirected = [[ARPIServiceResultCallback_WarningEnum alloc] initWithNSString:@"Redirected" withInt:2];
    ARPIServiceResultCallback_WarningEnum_NotRegisteredService = [[ARPIServiceResultCallback_WarningEnum alloc] initWithNSString:@"NotRegisteredService" withInt:3];
    ARPIServiceResultCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIServiceResultCallback_WarningEnum_values count:4 type:[IOSClass classWithClass:[ARPIServiceResultCallback_WarningEnum class]]];
}

+ (ARPIServiceResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPIServiceResultCallback_WarningEnum *e = ARPIServiceResultCallback_WarningEnum_values[i];
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
    { "NotSecure", "NotSecure", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Warning;", &ARPIServiceResultCallback_WarningEnum_NotSecure,  },
    { "NotTrusted", "NotTrusted", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Warning;", &ARPIServiceResultCallback_WarningEnum_NotTrusted,  },
    { "Redirected", "Redirected", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Warning;", &ARPIServiceResultCallback_WarningEnum_Redirected,  },
    { "NotRegisteredService", "NotRegisteredService", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Warning;", &ARPIServiceResultCallback_WarningEnum_NotRegisteredService,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IServiceResultCallback$Warning;"};
  static J2ObjcClassInfo _ARPIServiceResultCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IServiceResultCallback", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPIServiceResultCallback_WarningEnum;
}

@end

BOOL ARPIServiceResultCallback_ErrorEnum_initialized = NO;

ARPIServiceResultCallback_ErrorEnum *ARPIServiceResultCallback_ErrorEnum_values[10];

@implementation ARPIServiceResultCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIServiceResultCallback_ErrorEnum class]) {
    ARPIServiceResultCallback_ErrorEnum_Forbidden = [[ARPIServiceResultCallback_ErrorEnum alloc] initWithNSString:@"Forbidden" withInt:0];
    ARPIServiceResultCallback_ErrorEnum_NotFound = [[ARPIServiceResultCallback_ErrorEnum alloc] initWithNSString:@"NotFound" withInt:1];
    ARPIServiceResultCallback_ErrorEnum_MethodNotAllowed = [[ARPIServiceResultCallback_ErrorEnum alloc] initWithNSString:@"MethodNotAllowed" withInt:2];
    ARPIServiceResultCallback_ErrorEnum_NotAllowed = [[ARPIServiceResultCallback_ErrorEnum alloc] initWithNSString:@"NotAllowed" withInt:3];
    ARPIServiceResultCallback_ErrorEnum_NotAuthenticated = [[ARPIServiceResultCallback_ErrorEnum alloc] initWithNSString:@"NotAuthenticated" withInt:4];
    ARPIServiceResultCallback_ErrorEnum_TimeOut = [[ARPIServiceResultCallback_ErrorEnum alloc] initWithNSString:@"TimeOut" withInt:5];
    ARPIServiceResultCallback_ErrorEnum_NoResponse = [[ARPIServiceResultCallback_ErrorEnum alloc] initWithNSString:@"NoResponse" withInt:6];
    ARPIServiceResultCallback_ErrorEnum_ServerError = [[ARPIServiceResultCallback_ErrorEnum alloc] initWithNSString:@"ServerError" withInt:7];
    ARPIServiceResultCallback_ErrorEnum_Unreachable = [[ARPIServiceResultCallback_ErrorEnum alloc] initWithNSString:@"Unreachable" withInt:8];
    ARPIServiceResultCallback_ErrorEnum_Unknown = [[ARPIServiceResultCallback_ErrorEnum alloc] initWithNSString:@"Unknown" withInt:9];
    ARPIServiceResultCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIServiceResultCallback_ErrorEnum_values count:10 type:[IOSClass classWithClass:[ARPIServiceResultCallback_ErrorEnum class]]];
}

+ (ARPIServiceResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 10; i++) {
    ARPIServiceResultCallback_ErrorEnum *e = ARPIServiceResultCallback_ErrorEnum_values[i];
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
    { "Forbidden", "Forbidden", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Error;", &ARPIServiceResultCallback_ErrorEnum_Forbidden,  },
    { "NotFound", "NotFound", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Error;", &ARPIServiceResultCallback_ErrorEnum_NotFound,  },
    { "MethodNotAllowed", "MethodNotAllowed", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Error;", &ARPIServiceResultCallback_ErrorEnum_MethodNotAllowed,  },
    { "NotAllowed", "NotAllowed", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Error;", &ARPIServiceResultCallback_ErrorEnum_NotAllowed,  },
    { "NotAuthenticated", "NotAuthenticated", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Error;", &ARPIServiceResultCallback_ErrorEnum_NotAuthenticated,  },
    { "TimeOut", "TimeOut", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Error;", &ARPIServiceResultCallback_ErrorEnum_TimeOut,  },
    { "NoResponse", "NoResponse", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Error;", &ARPIServiceResultCallback_ErrorEnum_NoResponse,  },
    { "ServerError", "ServerError", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Error;", &ARPIServiceResultCallback_ErrorEnum_ServerError,  },
    { "Unreachable", "Unreachable", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Error;", &ARPIServiceResultCallback_ErrorEnum_Unreachable,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.IServiceResultCallback$Error;", &ARPIServiceResultCallback_ErrorEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IServiceResultCallback$Error;"};
  static J2ObjcClassInfo _ARPIServiceResultCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IServiceResultCallback", 0x4019, 1, methods, 10, fields, 1, superclass_type_args};
  return &_ARPIServiceResultCallback_ErrorEnum;
}

@end
