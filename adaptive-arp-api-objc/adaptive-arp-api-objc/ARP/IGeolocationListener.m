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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IGeolocationListener.java
//
//

#include "Geolocation.h"
#include "IGeolocationListener.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIGeolocationListener : NSObject
@end

@implementation ARPIGeolocationListener

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPGeolocation:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPGeolocation:withARPIGeolocationListener_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIGeolocationListener_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIGeolocationListener = { "IGeolocationListener", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIGeolocationListener;
}

@end

BOOL ARPIGeolocationListener_ErrorEnum_initialized = NO;

ARPIGeolocationListener_ErrorEnum *ARPIGeolocationListener_ErrorEnum_values[4];

@implementation ARPIGeolocationListener_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIGeolocationListener_ErrorEnum class]) {
    ARPIGeolocationListener_ErrorEnum_Disabled = [[ARPIGeolocationListener_ErrorEnum alloc] initWithNSString:@"Disabled" withInt:0];
    ARPIGeolocationListener_ErrorEnum_RestrictedAccess = [[ARPIGeolocationListener_ErrorEnum alloc] initWithNSString:@"RestrictedAccess" withInt:1];
    ARPIGeolocationListener_ErrorEnum_DeniedAccess = [[ARPIGeolocationListener_ErrorEnum alloc] initWithNSString:@"DeniedAccess" withInt:2];
    ARPIGeolocationListener_ErrorEnum_StatusNotDetermined = [[ARPIGeolocationListener_ErrorEnum alloc] initWithNSString:@"StatusNotDetermined" withInt:3];
    ARPIGeolocationListener_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIGeolocationListener_ErrorEnum_values count:4 type:[IOSClass classWithClass:[ARPIGeolocationListener_ErrorEnum class]]];
}

+ (ARPIGeolocationListener_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPIGeolocationListener_ErrorEnum *e = ARPIGeolocationListener_ErrorEnum_values[i];
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
    { "Disabled", "Disabled", 0x4019, "Lme.adaptive.arp.api.IGeolocationListener$Error;", &ARPIGeolocationListener_ErrorEnum_Disabled,  },
    { "RestrictedAccess", "RestrictedAccess", 0x4019, "Lme.adaptive.arp.api.IGeolocationListener$Error;", &ARPIGeolocationListener_ErrorEnum_RestrictedAccess,  },
    { "DeniedAccess", "DeniedAccess", 0x4019, "Lme.adaptive.arp.api.IGeolocationListener$Error;", &ARPIGeolocationListener_ErrorEnum_DeniedAccess,  },
    { "StatusNotDetermined", "StatusNotDetermined", 0x4019, "Lme.adaptive.arp.api.IGeolocationListener$Error;", &ARPIGeolocationListener_ErrorEnum_StatusNotDetermined,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IGeolocationListener$Error;"};
  static J2ObjcClassInfo _ARPIGeolocationListener_ErrorEnum = { "Error", "me.adaptive.arp.api", "IGeolocationListener", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPIGeolocationListener_ErrorEnum;
}

@end

BOOL ARPIGeolocationListener_WarningEnum_initialized = NO;

ARPIGeolocationListener_WarningEnum *ARPIGeolocationListener_WarningEnum_values[2];

@implementation ARPIGeolocationListener_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIGeolocationListener_WarningEnum class]) {
    ARPIGeolocationListener_WarningEnum_HighDoP = [[ARPIGeolocationListener_WarningEnum alloc] initWithNSString:@"HighDoP" withInt:0];
    ARPIGeolocationListener_WarningEnum_StaleData = [[ARPIGeolocationListener_WarningEnum alloc] initWithNSString:@"StaleData" withInt:1];
    ARPIGeolocationListener_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIGeolocationListener_WarningEnum_values count:2 type:[IOSClass classWithClass:[ARPIGeolocationListener_WarningEnum class]]];
}

+ (ARPIGeolocationListener_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIGeolocationListener_WarningEnum *e = ARPIGeolocationListener_WarningEnum_values[i];
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
    { "HighDoP", "HighDoP", 0x4019, "Lme.adaptive.arp.api.IGeolocationListener$Warning;", &ARPIGeolocationListener_WarningEnum_HighDoP,  },
    { "StaleData", "StaleData", 0x4019, "Lme.adaptive.arp.api.IGeolocationListener$Warning;", &ARPIGeolocationListener_WarningEnum_StaleData,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IGeolocationListener$Warning;"};
  static J2ObjcClassInfo _ARPIGeolocationListener_WarningEnum = { "Warning", "me.adaptive.arp.api", "IGeolocationListener", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIGeolocationListener_WarningEnum;
}

@end
