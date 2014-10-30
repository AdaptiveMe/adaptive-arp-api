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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IAppResourceCallback.java
//
//

#include "IAppResource.h"
#include "IAppResourceCallback.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIAppResourceCallback : NSObject
@end

@implementation ARPIAppResourceCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPIAppResource:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPIAppResource:withARPIAppResourceCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIAppResource:withARPIAppResourceCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIAppResourceCallback = { "IAppResourceCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIAppResourceCallback;
}

@end

BOOL ARPIAppResourceCallback_WarningEnum_initialized = NO;

ARPIAppResourceCallback_WarningEnum *ARPIAppResourceCallback_WarningEnum_values[4];

@implementation ARPIAppResourceCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIAppResourceCallback_WarningEnum class]) {
    ARPIAppResourceCallback_WarningEnum_PartialContent = [[ARPIAppResourceCallback_WarningEnum alloc] initWithNSString:@"PartialContent" withInt:0];
    ARPIAppResourceCallback_WarningEnum_TooLarge = [[ARPIAppResourceCallback_WarningEnum alloc] initWithNSString:@"TooLarge" withInt:1];
    ARPIAppResourceCallback_WarningEnum_LinkedResource = [[ARPIAppResourceCallback_WarningEnum alloc] initWithNSString:@"LinkedResource" withInt:2];
    ARPIAppResourceCallback_WarningEnum_Unknown = [[ARPIAppResourceCallback_WarningEnum alloc] initWithNSString:@"Unknown" withInt:3];
    ARPIAppResourceCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIAppResourceCallback_WarningEnum_values count:4 type:[IOSClass classWithClass:[ARPIAppResourceCallback_WarningEnum class]]];
}

+ (ARPIAppResourceCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPIAppResourceCallback_WarningEnum *e = ARPIAppResourceCallback_WarningEnum_values[i];
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
    { "PartialContent", "PartialContent", 0x4019, "Lme.adaptive.arp.api.IAppResourceCallback$Warning;", &ARPIAppResourceCallback_WarningEnum_PartialContent,  },
    { "TooLarge", "TooLarge", 0x4019, "Lme.adaptive.arp.api.IAppResourceCallback$Warning;", &ARPIAppResourceCallback_WarningEnum_TooLarge,  },
    { "LinkedResource", "LinkedResource", 0x4019, "Lme.adaptive.arp.api.IAppResourceCallback$Warning;", &ARPIAppResourceCallback_WarningEnum_LinkedResource,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.IAppResourceCallback$Warning;", &ARPIAppResourceCallback_WarningEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IAppResourceCallback$Warning;"};
  static J2ObjcClassInfo _ARPIAppResourceCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IAppResourceCallback", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPIAppResourceCallback_WarningEnum;
}

@end

BOOL ARPIAppResourceCallback_ErrorEnum_initialized = NO;

ARPIAppResourceCallback_ErrorEnum *ARPIAppResourceCallback_ErrorEnum_values[3];

@implementation ARPIAppResourceCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIAppResourceCallback_ErrorEnum class]) {
    ARPIAppResourceCallback_ErrorEnum_NotFound = [[ARPIAppResourceCallback_ErrorEnum alloc] initWithNSString:@"NotFound" withInt:0];
    ARPIAppResourceCallback_ErrorEnum_NoPermission = [[ARPIAppResourceCallback_ErrorEnum alloc] initWithNSString:@"NoPermission" withInt:1];
    ARPIAppResourceCallback_ErrorEnum_Unknown = [[ARPIAppResourceCallback_ErrorEnum alloc] initWithNSString:@"Unknown" withInt:2];
    ARPIAppResourceCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIAppResourceCallback_ErrorEnum_values count:3 type:[IOSClass classWithClass:[ARPIAppResourceCallback_ErrorEnum class]]];
}

+ (ARPIAppResourceCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPIAppResourceCallback_ErrorEnum *e = ARPIAppResourceCallback_ErrorEnum_values[i];
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
    { "NotFound", "NotFound", 0x4019, "Lme.adaptive.arp.api.IAppResourceCallback$Error;", &ARPIAppResourceCallback_ErrorEnum_NotFound,  },
    { "NoPermission", "NoPermission", 0x4019, "Lme.adaptive.arp.api.IAppResourceCallback$Error;", &ARPIAppResourceCallback_ErrorEnum_NoPermission,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.IAppResourceCallback$Error;", &ARPIAppResourceCallback_ErrorEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IAppResourceCallback$Error;"};
  static J2ObjcClassInfo _ARPIAppResourceCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IAppResourceCallback", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPIAppResourceCallback_ErrorEnum;
}

@end
