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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IAccelerometer.java
//
//

#ifndef _ARPIAccelerometer_H_
#define _ARPIAccelerometer_H_

@protocol ARPIAccelerationListener;

#import "JreEmulation.h"
#include "IBaseSensor.h"
#include "java/lang/Enum.h"

@protocol ARPIAccelerometer < ARPIBaseSensor, NSObject, JavaObject >
- (void)addAccelerationListenerWithARPIAccelerationListener:(id<ARPIAccelerationListener>)listener;

- (void)removeAccelerationListenerWithARPIAccelerationListener:(id<ARPIAccelerationListener>)listener;

- (void)removeAccelerationListeners;

@end

__attribute__((always_inline)) inline void ARPIAccelerometer_init() {}

#define MeAdaptiveArpApiIAccelerometer ARPIAccelerometer

typedef enum {
  ARPIAccelerometer_Status_Success = 0,
  ARPIAccelerometer_Status_Unauthorized = 1,
  ARPIAccelerometer_Status_NeedsCalibration = 2,
  ARPIAccelerometer_Status_Stale = 3,
  ARPIAccelerometer_Status_Unavailable = 4,
} ARPIAccelerometer_Status;

@interface ARPIAccelerometer_StatusEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIAccelerometer_StatusEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIAccelerometer_StatusEnum_initialized;
J2OBJC_STATIC_INIT(ARPIAccelerometer_StatusEnum)

FOUNDATION_EXPORT ARPIAccelerometer_StatusEnum *ARPIAccelerometer_StatusEnum_values[];

#define ARPIAccelerometer_StatusEnum_Success ARPIAccelerometer_StatusEnum_values[ARPIAccelerometer_Status_Success]
J2OBJC_STATIC_FIELD_GETTER(ARPIAccelerometer_StatusEnum, Success, ARPIAccelerometer_StatusEnum *)

#define ARPIAccelerometer_StatusEnum_Unauthorized ARPIAccelerometer_StatusEnum_values[ARPIAccelerometer_Status_Unauthorized]
J2OBJC_STATIC_FIELD_GETTER(ARPIAccelerometer_StatusEnum, Unauthorized, ARPIAccelerometer_StatusEnum *)

#define ARPIAccelerometer_StatusEnum_NeedsCalibration ARPIAccelerometer_StatusEnum_values[ARPIAccelerometer_Status_NeedsCalibration]
J2OBJC_STATIC_FIELD_GETTER(ARPIAccelerometer_StatusEnum, NeedsCalibration, ARPIAccelerometer_StatusEnum *)

#define ARPIAccelerometer_StatusEnum_Stale ARPIAccelerometer_StatusEnum_values[ARPIAccelerometer_Status_Stale]
J2OBJC_STATIC_FIELD_GETTER(ARPIAccelerometer_StatusEnum, Stale, ARPIAccelerometer_StatusEnum *)

#define ARPIAccelerometer_StatusEnum_Unavailable ARPIAccelerometer_StatusEnum_values[ARPIAccelerometer_Status_Unavailable]
J2OBJC_STATIC_FIELD_GETTER(ARPIAccelerometer_StatusEnum, Unavailable, ARPIAccelerometer_StatusEnum *)

#endif // _ARPIAccelerometer_H_
