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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IGeolocation.java
//
//

#ifndef _ARPIGeolocation_H_
#define _ARPIGeolocation_H_

@protocol ARPIGeolocationListener;

#import "JreEmulation.h"
#include "IBaseSensor.h"
#include "java/io/Serializable.h"
#include "java/lang/Enum.h"

@protocol ARPIGeolocation < ARPIBaseSensor, JavaIoSerializable, NSObject, JavaObject >
- (void)addAccelerationListenerWithARPIGeolocationListener:(id<ARPIGeolocationListener>)listener;

- (void)removeAccelerationListenerWithARPIGeolocationListener:(id<ARPIGeolocationListener>)listener;

- (void)removeGeolocationListeners;

@end

__attribute__((always_inline)) inline void ARPIGeolocation_init() {}

#define MeAdaptiveArpApiIGeolocation ARPIGeolocation

typedef enum {
  ARPIGeolocation_Status_Success = 0,
  ARPIGeolocation_Status_Unauthorized = 1,
  ARPIGeolocation_Status_HighDoP = 2,
  ARPIGeolocation_Status_Unavailable = 3,
} ARPIGeolocation_Status;

@interface ARPIGeolocation_StatusEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIGeolocation_StatusEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIGeolocation_StatusEnum_initialized;
J2OBJC_STATIC_INIT(ARPIGeolocation_StatusEnum)

FOUNDATION_EXPORT ARPIGeolocation_StatusEnum *ARPIGeolocation_StatusEnum_values[];

#define ARPIGeolocation_StatusEnum_Success ARPIGeolocation_StatusEnum_values[ARPIGeolocation_Status_Success]
J2OBJC_STATIC_FIELD_GETTER(ARPIGeolocation_StatusEnum, Success, ARPIGeolocation_StatusEnum *)

#define ARPIGeolocation_StatusEnum_Unauthorized ARPIGeolocation_StatusEnum_values[ARPIGeolocation_Status_Unauthorized]
J2OBJC_STATIC_FIELD_GETTER(ARPIGeolocation_StatusEnum, Unauthorized, ARPIGeolocation_StatusEnum *)

#define ARPIGeolocation_StatusEnum_HighDoP ARPIGeolocation_StatusEnum_values[ARPIGeolocation_Status_HighDoP]
J2OBJC_STATIC_FIELD_GETTER(ARPIGeolocation_StatusEnum, HighDoP, ARPIGeolocation_StatusEnum *)

#define ARPIGeolocation_StatusEnum_Unavailable ARPIGeolocation_StatusEnum_values[ARPIGeolocation_Status_Unavailable]
J2OBJC_STATIC_FIELD_GETTER(ARPIGeolocation_StatusEnum, Unavailable, ARPIGeolocation_StatusEnum *)

#endif // _ARPIGeolocation_H_
