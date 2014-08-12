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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IIOCallback.java
//
//

#include "IIOCallback.h"
#include "IOResponse.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIIOCallback : NSObject
@end

@implementation ARPIIOCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPIOResponse:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPIOResponse:withARPIIOCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIIOCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIIOCallback = { "IIOCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIIOCallback;
}

@end

BOOL ARPIIOCallback_WarningEnum_initialized = NO;

ARPIIOCallback_WarningEnum *ARPIIOCallback_WarningEnum_values[3];

@implementation ARPIIOCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIIOCallback_WarningEnum class]) {
    ARPIIOCallback_WarningEnum_Internal_Error = [[ARPIIOCallback_WarningEnum alloc] initWithNSString:@"Internal_Error" withInt:0];
    ARPIIOCallback_WarningEnum_Not_Implemented = [[ARPIIOCallback_WarningEnum alloc] initWithNSString:@"Not_Implemented" withInt:1];
    ARPIIOCallback_WarningEnum_TIMEDOUT = [[ARPIIOCallback_WarningEnum alloc] initWithNSString:@"TIMEDOUT" withInt:2];
    ARPIIOCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIIOCallback_WarningEnum_values count:3 type:[IOSClass classWithClass:[ARPIIOCallback_WarningEnum class]]];
}

+ (ARPIIOCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPIIOCallback_WarningEnum *e = ARPIIOCallback_WarningEnum_values[i];
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
    { "Internal_Error", "Internal_Error", 0x4019, "Lme.adaptive.arp.api.IIOCallback$Warning;", &ARPIIOCallback_WarningEnum_Internal_Error,  },
    { "Not_Implemented", "Not_Implemented", 0x4019, "Lme.adaptive.arp.api.IIOCallback$Warning;", &ARPIIOCallback_WarningEnum_Not_Implemented,  },
    { "TIMEDOUT", "TIMEDOUT", 0x4019, "Lme.adaptive.arp.api.IIOCallback$Warning;", &ARPIIOCallback_WarningEnum_TIMEDOUT,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IIOCallback$Warning;"};
  static J2ObjcClassInfo _ARPIIOCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IIOCallback", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPIIOCallback_WarningEnum;
}

@end

BOOL ARPIIOCallback_ErrorEnum_initialized = NO;

ARPIIOCallback_ErrorEnum *ARPIIOCallback_ErrorEnum_values[4];

@implementation ARPIIOCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIIOCallback_ErrorEnum class]) {
    ARPIIOCallback_ErrorEnum_Forbidden = [[ARPIIOCallback_ErrorEnum alloc] initWithNSString:@"Forbidden" withInt:0];
    ARPIIOCallback_ErrorEnum_Not_Found = [[ARPIIOCallback_ErrorEnum alloc] initWithNSString:@"Not_Found" withInt:1];
    ARPIIOCallback_ErrorEnum_Method_Not_Allowed = [[ARPIIOCallback_ErrorEnum alloc] initWithNSString:@"Method_Not_Allowed" withInt:2];
    ARPIIOCallback_ErrorEnum_Not_Allowed = [[ARPIIOCallback_ErrorEnum alloc] initWithNSString:@"Not_Allowed" withInt:3];
    ARPIIOCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIIOCallback_ErrorEnum_values count:4 type:[IOSClass classWithClass:[ARPIIOCallback_ErrorEnum class]]];
}

+ (ARPIIOCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPIIOCallback_ErrorEnum *e = ARPIIOCallback_ErrorEnum_values[i];
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
    { "Forbidden", "Forbidden", 0x4019, "Lme.adaptive.arp.api.IIOCallback$Error;", &ARPIIOCallback_ErrorEnum_Forbidden,  },
    { "Not_Found", "Not_Found", 0x4019, "Lme.adaptive.arp.api.IIOCallback$Error;", &ARPIIOCallback_ErrorEnum_Not_Found,  },
    { "Method_Not_Allowed", "Method_Not_Allowed", 0x4019, "Lme.adaptive.arp.api.IIOCallback$Error;", &ARPIIOCallback_ErrorEnum_Method_Not_Allowed,  },
    { "Not_Allowed", "Not_Allowed", 0x4019, "Lme.adaptive.arp.api.IIOCallback$Error;", &ARPIIOCallback_ErrorEnum_Not_Allowed,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IIOCallback$Error;"};
  static J2ObjcClassInfo _ARPIIOCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IIOCallback", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPIIOCallback_ErrorEnum;
}

@end
