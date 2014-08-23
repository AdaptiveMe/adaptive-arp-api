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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IGeolocation.java
//
//

#include "IGeolocation.h"
#include "IGeolocationListener.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIGeolocation : NSObject
@end

@implementation ARPIGeolocation

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "addGeolocationListenerWithARPIGeolocationListener:", "addGeolocationListener", "V", 0x401, NULL },
    { "removeGeolocationListenerWithARPIGeolocationListener:", "removeGeolocationListener", "V", 0x401, NULL },
    { "removeGeolocationListeners", NULL, "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIGeolocation = { "IGeolocation", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIGeolocation;
}

@end

BOOL ARPIGeolocation_StatusEnum_initialized = NO;

ARPIGeolocation_StatusEnum *ARPIGeolocation_StatusEnum_values[5];

@implementation ARPIGeolocation_StatusEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIGeolocation_StatusEnum class]) {
    ARPIGeolocation_StatusEnum_Success = [[ARPIGeolocation_StatusEnum alloc] initWithNSString:@"Success" withInt:0];
    ARPIGeolocation_StatusEnum_Unauthorized = [[ARPIGeolocation_StatusEnum alloc] initWithNSString:@"Unauthorized" withInt:1];
    ARPIGeolocation_StatusEnum_HighDoP = [[ARPIGeolocation_StatusEnum alloc] initWithNSString:@"HighDoP" withInt:2];
    ARPIGeolocation_StatusEnum_Unavailable = [[ARPIGeolocation_StatusEnum alloc] initWithNSString:@"Unavailable" withInt:3];
    ARPIGeolocation_StatusEnum_GPS_Not_Enabled = [[ARPIGeolocation_StatusEnum alloc] initWithNSString:@"GPS_Not_Enabled" withInt:4];
    ARPIGeolocation_StatusEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIGeolocation_StatusEnum_values count:5 type:[IOSClass classWithClass:[ARPIGeolocation_StatusEnum class]]];
}

+ (ARPIGeolocation_StatusEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 5; i++) {
    ARPIGeolocation_StatusEnum *e = ARPIGeolocation_StatusEnum_values[i];
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
    { "Success", "Success", 0x4019, "Lme.adaptive.arp.api.IGeolocation$Status;", &ARPIGeolocation_StatusEnum_Success,  },
    { "Unauthorized", "Unauthorized", 0x4019, "Lme.adaptive.arp.api.IGeolocation$Status;", &ARPIGeolocation_StatusEnum_Unauthorized,  },
    { "HighDoP", "HighDoP", 0x4019, "Lme.adaptive.arp.api.IGeolocation$Status;", &ARPIGeolocation_StatusEnum_HighDoP,  },
    { "Unavailable", "Unavailable", 0x4019, "Lme.adaptive.arp.api.IGeolocation$Status;", &ARPIGeolocation_StatusEnum_Unavailable,  },
    { "GPS_Not_Enabled", "GPS_Not_Enabled", 0x4019, "Lme.adaptive.arp.api.IGeolocation$Status;", &ARPIGeolocation_StatusEnum_GPS_Not_Enabled,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IGeolocation$Status;"};
  static J2ObjcClassInfo _ARPIGeolocation_StatusEnum = { "Status", "me.adaptive.arp.api", "IGeolocation", 0x4019, 1, methods, 5, fields, 1, superclass_type_args};
  return &_ARPIGeolocation_StatusEnum;
}

@end
