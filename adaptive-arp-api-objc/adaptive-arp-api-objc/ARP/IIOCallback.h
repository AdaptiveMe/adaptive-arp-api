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

#ifndef _ARPIIOCallback_H_
#define _ARPIIOCallback_H_

@class ARPIIOCallback_ErrorEnum;
@class ARPIIOCallback_WarningEnum;
@class ARPIOResponse;

#import "JreEmulation.h"
#include "java/io/Serializable.h"
#include "java/lang/Enum.h"

@protocol ARPIIOCallback < JavaIoSerializable, NSObject, JavaObject >
- (void)onResultWithARPIOResponse:(ARPIOResponse *)response;

- (void)onWarningWithARPIOResponse:(ARPIOResponse *)response
    withARPIIOCallback_WarningEnum:(ARPIIOCallback_WarningEnum *)warning;

- (void)onErrorWithARPIIOCallback_ErrorEnum:(ARPIIOCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIIOCallback_init() {}

#define MeAdaptiveArpApiIIOCallback ARPIIOCallback

typedef enum {
  ARPIIOCallback_Warning_Internal_Error = 0,
  ARPIIOCallback_Warning_Not_Implemented = 1,
  ARPIIOCallback_Warning_TIMEDOUT = 2,
} ARPIIOCallback_Warning;

@interface ARPIIOCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIIOCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIIOCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIIOCallback_WarningEnum)

FOUNDATION_EXPORT ARPIIOCallback_WarningEnum *ARPIIOCallback_WarningEnum_values[];

#define ARPIIOCallback_WarningEnum_Internal_Error ARPIIOCallback_WarningEnum_values[ARPIIOCallback_Warning_Internal_Error]
J2OBJC_STATIC_FIELD_GETTER(ARPIIOCallback_WarningEnum, Internal_Error, ARPIIOCallback_WarningEnum *)

#define ARPIIOCallback_WarningEnum_Not_Implemented ARPIIOCallback_WarningEnum_values[ARPIIOCallback_Warning_Not_Implemented]
J2OBJC_STATIC_FIELD_GETTER(ARPIIOCallback_WarningEnum, Not_Implemented, ARPIIOCallback_WarningEnum *)

#define ARPIIOCallback_WarningEnum_TIMEDOUT ARPIIOCallback_WarningEnum_values[ARPIIOCallback_Warning_TIMEDOUT]
J2OBJC_STATIC_FIELD_GETTER(ARPIIOCallback_WarningEnum, TIMEDOUT, ARPIIOCallback_WarningEnum *)

typedef enum {
  ARPIIOCallback_Error_Forbidden = 0,
  ARPIIOCallback_Error_Not_Found = 1,
  ARPIIOCallback_Error_Method_Not_Allowed = 2,
  ARPIIOCallback_Error_Not_Allowed = 3,
} ARPIIOCallback_Error;

@interface ARPIIOCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIIOCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIIOCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIIOCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIIOCallback_ErrorEnum *ARPIIOCallback_ErrorEnum_values[];

#define ARPIIOCallback_ErrorEnum_Forbidden ARPIIOCallback_ErrorEnum_values[ARPIIOCallback_Error_Forbidden]
J2OBJC_STATIC_FIELD_GETTER(ARPIIOCallback_ErrorEnum, Forbidden, ARPIIOCallback_ErrorEnum *)

#define ARPIIOCallback_ErrorEnum_Not_Found ARPIIOCallback_ErrorEnum_values[ARPIIOCallback_Error_Not_Found]
J2OBJC_STATIC_FIELD_GETTER(ARPIIOCallback_ErrorEnum, Not_Found, ARPIIOCallback_ErrorEnum *)

#define ARPIIOCallback_ErrorEnum_Method_Not_Allowed ARPIIOCallback_ErrorEnum_values[ARPIIOCallback_Error_Method_Not_Allowed]
J2OBJC_STATIC_FIELD_GETTER(ARPIIOCallback_ErrorEnum, Method_Not_Allowed, ARPIIOCallback_ErrorEnum *)

#define ARPIIOCallback_ErrorEnum_Not_Allowed ARPIIOCallback_ErrorEnum_values[ARPIIOCallback_Error_Not_Allowed]
J2OBJC_STATIC_FIELD_GETTER(ARPIIOCallback_ErrorEnum, Not_Allowed, ARPIIOCallback_ErrorEnum *)

#endif // _ARPIIOCallback_H_
