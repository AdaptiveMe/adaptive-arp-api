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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IAccelerometer.java
//
//

#include "IAccelerationListener.h"
#include "IAccelerometer.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIAccelerometer : NSObject
@end

@implementation ARPIAccelerometer

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "addAccelerationListenerWithARPIAccelerationListener:", "addAccelerationListener", "V", 0x401, NULL },
    { "removeAccelerationListenerWithARPIAccelerationListener:", "removeAccelerationListener", "V", 0x401, NULL },
    { "removeAccelerationListeners", NULL, "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIAccelerometer = { "IAccelerometer", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIAccelerometer;
}

@end

BOOL ARPIAccelerometer_StatusEnum_initialized = NO;

ARPIAccelerometer_StatusEnum *ARPIAccelerometer_StatusEnum_values[5];

@implementation ARPIAccelerometer_StatusEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIAccelerometer_StatusEnum class]) {
    ARPIAccelerometer_StatusEnum_Success = [[ARPIAccelerometer_StatusEnum alloc] initWithNSString:@"Success" withInt:0];
    ARPIAccelerometer_StatusEnum_Unauthorized = [[ARPIAccelerometer_StatusEnum alloc] initWithNSString:@"Unauthorized" withInt:1];
    ARPIAccelerometer_StatusEnum_NeedsCalibration = [[ARPIAccelerometer_StatusEnum alloc] initWithNSString:@"NeedsCalibration" withInt:2];
    ARPIAccelerometer_StatusEnum_Stale = [[ARPIAccelerometer_StatusEnum alloc] initWithNSString:@"Stale" withInt:3];
    ARPIAccelerometer_StatusEnum_Unavailable = [[ARPIAccelerometer_StatusEnum alloc] initWithNSString:@"Unavailable" withInt:4];
    ARPIAccelerometer_StatusEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIAccelerometer_StatusEnum_values count:5 type:[IOSClass classWithClass:[ARPIAccelerometer_StatusEnum class]]];
}

+ (ARPIAccelerometer_StatusEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 5; i++) {
    ARPIAccelerometer_StatusEnum *e = ARPIAccelerometer_StatusEnum_values[i];
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
    { "Success", "Success", 0x4019, "Lme.adaptive.arp.api.IAccelerometer$Status;", &ARPIAccelerometer_StatusEnum_Success,  },
    { "Unauthorized", "Unauthorized", 0x4019, "Lme.adaptive.arp.api.IAccelerometer$Status;", &ARPIAccelerometer_StatusEnum_Unauthorized,  },
    { "NeedsCalibration", "NeedsCalibration", 0x4019, "Lme.adaptive.arp.api.IAccelerometer$Status;", &ARPIAccelerometer_StatusEnum_NeedsCalibration,  },
    { "Stale", "Stale", 0x4019, "Lme.adaptive.arp.api.IAccelerometer$Status;", &ARPIAccelerometer_StatusEnum_Stale,  },
    { "Unavailable", "Unavailable", 0x4019, "Lme.adaptive.arp.api.IAccelerometer$Status;", &ARPIAccelerometer_StatusEnum_Unavailable,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IAccelerometer$Status;"};
  static J2ObjcClassInfo _ARPIAccelerometer_StatusEnum = { "Status", "me.adaptive.arp.api", "IAccelerometer", 0x4019, 1, methods, 5, fields, 1, superclass_type_args};
  return &_ARPIAccelerometer_StatusEnum;
}

@end
