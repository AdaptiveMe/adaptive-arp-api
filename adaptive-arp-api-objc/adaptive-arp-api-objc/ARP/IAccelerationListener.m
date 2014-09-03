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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IAccelerationListener.java
//
//

#include "Acceleration.h"
#include "IAccelerationListener.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIAccelerationListener : NSObject
@end

@implementation ARPIAccelerationListener

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPAcceleration:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPAcceleration:withARPIAccelerationListener_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIAccelerationListener_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIAccelerationListener = { "IAccelerationListener", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIAccelerationListener;
}

@end

BOOL ARPIAccelerationListener_WarningEnum_initialized = NO;

ARPIAccelerationListener_WarningEnum *ARPIAccelerationListener_WarningEnum_values[2];

@implementation ARPIAccelerationListener_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIAccelerationListener_WarningEnum class]) {
    ARPIAccelerationListener_WarningEnum_NeedsCalibration = [[ARPIAccelerationListener_WarningEnum alloc] initWithNSString:@"NeedsCalibration" withInt:0];
    ARPIAccelerationListener_WarningEnum_Stale = [[ARPIAccelerationListener_WarningEnum alloc] initWithNSString:@"Stale" withInt:1];
    ARPIAccelerationListener_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIAccelerationListener_WarningEnum_values count:2 type:[IOSClass classWithClass:[ARPIAccelerationListener_WarningEnum class]]];
}

+ (ARPIAccelerationListener_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIAccelerationListener_WarningEnum *e = ARPIAccelerationListener_WarningEnum_values[i];
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
    { "NeedsCalibration", "NeedsCalibration", 0x4019, "Lme.adaptive.arp.api.IAccelerationListener$Warning;", &ARPIAccelerationListener_WarningEnum_NeedsCalibration,  },
    { "Stale", "Stale", 0x4019, "Lme.adaptive.arp.api.IAccelerationListener$Warning;", &ARPIAccelerationListener_WarningEnum_Stale,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IAccelerationListener$Warning;"};
  static J2ObjcClassInfo _ARPIAccelerationListener_WarningEnum = { "Warning", "me.adaptive.arp.api", "IAccelerationListener", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIAccelerationListener_WarningEnum;
}

@end

BOOL ARPIAccelerationListener_ErrorEnum_initialized = NO;

ARPIAccelerationListener_ErrorEnum *ARPIAccelerationListener_ErrorEnum_values[2];

@implementation ARPIAccelerationListener_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIAccelerationListener_ErrorEnum class]) {
    ARPIAccelerationListener_ErrorEnum_Unauthorized = [[ARPIAccelerationListener_ErrorEnum alloc] initWithNSString:@"Unauthorized" withInt:0];
    ARPIAccelerationListener_ErrorEnum_Unavailable = [[ARPIAccelerationListener_ErrorEnum alloc] initWithNSString:@"Unavailable" withInt:1];
    ARPIAccelerationListener_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIAccelerationListener_ErrorEnum_values count:2 type:[IOSClass classWithClass:[ARPIAccelerationListener_ErrorEnum class]]];
}

+ (ARPIAccelerationListener_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIAccelerationListener_ErrorEnum *e = ARPIAccelerationListener_ErrorEnum_values[i];
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
    { "Unauthorized", "Unauthorized", 0x4019, "Lme.adaptive.arp.api.IAccelerationListener$Error;", &ARPIAccelerationListener_ErrorEnum_Unauthorized,  },
    { "Unavailable", "Unavailable", 0x4019, "Lme.adaptive.arp.api.IAccelerationListener$Error;", &ARPIAccelerationListener_ErrorEnum_Unavailable,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IAccelerationListener$Error;"};
  static J2ObjcClassInfo _ARPIAccelerationListener_ErrorEnum = { "Error", "me.adaptive.arp.api", "IAccelerationListener", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIAccelerationListener_ErrorEnum;
}

@end
