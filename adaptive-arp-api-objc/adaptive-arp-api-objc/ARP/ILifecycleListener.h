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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ILifecycleListener.java
//
//

#ifndef _ARPILifecycleListener_H_
#define _ARPILifecycleListener_H_

@class ARPILifecycleListener_ErrorEnum;
@class ARPILifecycleListener_WarningEnum;
@class ARPLifecycle;

#import "JreEmulation.h"
#include "IBaseListener.h"
#include "java/lang/Enum.h"

@protocol ARPILifecycleListener < ARPIBaseListener, NSObject, JavaObject >
- (void)onResultWithARPLifecycle:(ARPLifecycle *)lifecycle;

- (void)onWarningWithARPLifecycle:(ARPLifecycle *)lifecycle
withARPILifecycleListener_WarningEnum:(ARPILifecycleListener_WarningEnum *)warning;

- (void)onErrorWithARPILifecycleListener_ErrorEnum:(ARPILifecycleListener_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPILifecycleListener_init() {}

#define MeAdaptiveArpApiILifecycleListener ARPILifecycleListener

typedef enum {
  ARPILifecycleListener_Error_Runtime = 0,
  ARPILifecycleListener_Error_Implementation = 1,
  ARPILifecycleListener_Error_Killed = 2,
  ARPILifecycleListener_Error_Unknown = 3,
} ARPILifecycleListener_Error;

@interface ARPILifecycleListener_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPILifecycleListener_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPILifecycleListener_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPILifecycleListener_ErrorEnum)

FOUNDATION_EXPORT ARPILifecycleListener_ErrorEnum *ARPILifecycleListener_ErrorEnum_values[];

#define ARPILifecycleListener_ErrorEnum_Runtime ARPILifecycleListener_ErrorEnum_values[ARPILifecycleListener_Error_Runtime]
J2OBJC_STATIC_FIELD_GETTER(ARPILifecycleListener_ErrorEnum, Runtime, ARPILifecycleListener_ErrorEnum *)

#define ARPILifecycleListener_ErrorEnum_Implementation ARPILifecycleListener_ErrorEnum_values[ARPILifecycleListener_Error_Implementation]
J2OBJC_STATIC_FIELD_GETTER(ARPILifecycleListener_ErrorEnum, Implementation, ARPILifecycleListener_ErrorEnum *)

#define ARPILifecycleListener_ErrorEnum_Killed ARPILifecycleListener_ErrorEnum_values[ARPILifecycleListener_Error_Killed]
J2OBJC_STATIC_FIELD_GETTER(ARPILifecycleListener_ErrorEnum, Killed, ARPILifecycleListener_ErrorEnum *)

#define ARPILifecycleListener_ErrorEnum_Unknown ARPILifecycleListener_ErrorEnum_values[ARPILifecycleListener_Error_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPILifecycleListener_ErrorEnum, Unknown, ARPILifecycleListener_ErrorEnum *)

typedef enum {
  ARPILifecycleListener_Warning_MemoryLow = 0,
  ARPILifecycleListener_Warning_BatteryLow = 1,
  ARPILifecycleListener_Warning_Unknown = 2,
} ARPILifecycleListener_Warning;

@interface ARPILifecycleListener_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPILifecycleListener_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPILifecycleListener_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPILifecycleListener_WarningEnum)

FOUNDATION_EXPORT ARPILifecycleListener_WarningEnum *ARPILifecycleListener_WarningEnum_values[];

#define ARPILifecycleListener_WarningEnum_MemoryLow ARPILifecycleListener_WarningEnum_values[ARPILifecycleListener_Warning_MemoryLow]
J2OBJC_STATIC_FIELD_GETTER(ARPILifecycleListener_WarningEnum, MemoryLow, ARPILifecycleListener_WarningEnum *)

#define ARPILifecycleListener_WarningEnum_BatteryLow ARPILifecycleListener_WarningEnum_values[ARPILifecycleListener_Warning_BatteryLow]
J2OBJC_STATIC_FIELD_GETTER(ARPILifecycleListener_WarningEnum, BatteryLow, ARPILifecycleListener_WarningEnum *)

#define ARPILifecycleListener_WarningEnum_Unknown ARPILifecycleListener_WarningEnum_values[ARPILifecycleListener_Warning_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPILifecycleListener_WarningEnum, Unknown, ARPILifecycleListener_WarningEnum *)

#endif // _ARPILifecycleListener_H_
