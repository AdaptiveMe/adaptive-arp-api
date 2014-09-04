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

#ifndef _ARPIAccelerationListener_H_
#define _ARPIAccelerationListener_H_

@class ARPAcceleration;
@class ARPIAccelerationListener_ErrorEnum;
@class ARPIAccelerationListener_WarningEnum;

#import "JreEmulation.h"
#include "IBaseListener.h"
#include "java/lang/Enum.h"

@protocol ARPIAccelerationListener < ARPIBaseListener, NSObject, JavaObject >
- (void)onResultWithARPAcceleration:(ARPAcceleration *)acceleration;

- (void)onWarningWithARPAcceleration:(ARPAcceleration *)acceleration
withARPIAccelerationListener_WarningEnum:(ARPIAccelerationListener_WarningEnum *)warning;

- (void)onErrorWithARPIAccelerationListener_ErrorEnum:(ARPIAccelerationListener_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIAccelerationListener_init() {}

#define MeAdaptiveArpApiIAccelerationListener ARPIAccelerationListener

typedef enum {
  ARPIAccelerationListener_Warning_NeedsCalibration = 0,
  ARPIAccelerationListener_Warning_Stale = 1,
} ARPIAccelerationListener_Warning;

@interface ARPIAccelerationListener_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIAccelerationListener_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIAccelerationListener_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIAccelerationListener_WarningEnum)

FOUNDATION_EXPORT ARPIAccelerationListener_WarningEnum *ARPIAccelerationListener_WarningEnum_values[];

#define ARPIAccelerationListener_WarningEnum_NeedsCalibration ARPIAccelerationListener_WarningEnum_values[ARPIAccelerationListener_Warning_NeedsCalibration]
J2OBJC_STATIC_FIELD_GETTER(ARPIAccelerationListener_WarningEnum, NeedsCalibration, ARPIAccelerationListener_WarningEnum *)

#define ARPIAccelerationListener_WarningEnum_Stale ARPIAccelerationListener_WarningEnum_values[ARPIAccelerationListener_Warning_Stale]
J2OBJC_STATIC_FIELD_GETTER(ARPIAccelerationListener_WarningEnum, Stale, ARPIAccelerationListener_WarningEnum *)

typedef enum {
  ARPIAccelerationListener_Error_Unauthorized = 0,
  ARPIAccelerationListener_Error_Unavailable = 1,
} ARPIAccelerationListener_Error;

@interface ARPIAccelerationListener_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIAccelerationListener_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIAccelerationListener_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIAccelerationListener_ErrorEnum)

FOUNDATION_EXPORT ARPIAccelerationListener_ErrorEnum *ARPIAccelerationListener_ErrorEnum_values[];

#define ARPIAccelerationListener_ErrorEnum_Unauthorized ARPIAccelerationListener_ErrorEnum_values[ARPIAccelerationListener_Error_Unauthorized]
J2OBJC_STATIC_FIELD_GETTER(ARPIAccelerationListener_ErrorEnum, Unauthorized, ARPIAccelerationListener_ErrorEnum *)

#define ARPIAccelerationListener_ErrorEnum_Unavailable ARPIAccelerationListener_ErrorEnum_values[ARPIAccelerationListener_Error_Unavailable]
J2OBJC_STATIC_FIELD_GETTER(ARPIAccelerationListener_ErrorEnum, Unavailable, ARPIAccelerationListener_ErrorEnum *)

#endif // _ARPIAccelerationListener_H_
