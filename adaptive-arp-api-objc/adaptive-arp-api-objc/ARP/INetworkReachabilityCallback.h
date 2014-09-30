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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/INetworkReachabilityCallback.java
//
//

#ifndef _ARPINetworkReachabilityCallback_H_
#define _ARPINetworkReachabilityCallback_H_

@class ARPINetworkReachabilityCallback_ErrorEnum;
@class ARPINetworkReachabilityCallback_WarningEnum;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@protocol ARPINetworkReachabilityCallback < NSObject, JavaObject >

- (void)onResultWithNSString:(NSString *)result;

- (void)onWarningWithNSString:(NSString *)result
withARPINetworkReachabilityCallback_WarningEnum:(ARPINetworkReachabilityCallback_WarningEnum *)warning;

- (void)onErrorWithARPINetworkReachabilityCallback_ErrorEnum:(ARPINetworkReachabilityCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPINetworkReachabilityCallback_init() {}

#define MeAdaptiveArpApiINetworkReachabilityCallback ARPINetworkReachabilityCallback

typedef enum {
  ARPINetworkReachabilityCallback_Error_Forbidden = 0,
  ARPINetworkReachabilityCallback_Error_NotFound = 1,
  ARPINetworkReachabilityCallback_Error_MethodNotAllowed = 2,
  ARPINetworkReachabilityCallback_Error_NotAllowed = 3,
  ARPINetworkReachabilityCallback_Error_NotAuthenticated = 4,
  ARPINetworkReachabilityCallback_Error_TimeOut = 5,
  ARPINetworkReachabilityCallback_Error_NoResponse = 6,
  ARPINetworkReachabilityCallback_Error_Unreachable = 7,
  ARPINetworkReachabilityCallback_Error_Wrong_Params = 8,
} ARPINetworkReachabilityCallback_Error;

@interface ARPINetworkReachabilityCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPINetworkReachabilityCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPINetworkReachabilityCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPINetworkReachabilityCallback_ErrorEnum)

FOUNDATION_EXPORT ARPINetworkReachabilityCallback_ErrorEnum *ARPINetworkReachabilityCallback_ErrorEnum_values[];

#define ARPINetworkReachabilityCallback_ErrorEnum_Forbidden ARPINetworkReachabilityCallback_ErrorEnum_values[ARPINetworkReachabilityCallback_Error_Forbidden]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_ErrorEnum, Forbidden, ARPINetworkReachabilityCallback_ErrorEnum *)

#define ARPINetworkReachabilityCallback_ErrorEnum_NotFound ARPINetworkReachabilityCallback_ErrorEnum_values[ARPINetworkReachabilityCallback_Error_NotFound]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_ErrorEnum, NotFound, ARPINetworkReachabilityCallback_ErrorEnum *)

#define ARPINetworkReachabilityCallback_ErrorEnum_MethodNotAllowed ARPINetworkReachabilityCallback_ErrorEnum_values[ARPINetworkReachabilityCallback_Error_MethodNotAllowed]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_ErrorEnum, MethodNotAllowed, ARPINetworkReachabilityCallback_ErrorEnum *)

#define ARPINetworkReachabilityCallback_ErrorEnum_NotAllowed ARPINetworkReachabilityCallback_ErrorEnum_values[ARPINetworkReachabilityCallback_Error_NotAllowed]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_ErrorEnum, NotAllowed, ARPINetworkReachabilityCallback_ErrorEnum *)

#define ARPINetworkReachabilityCallback_ErrorEnum_NotAuthenticated ARPINetworkReachabilityCallback_ErrorEnum_values[ARPINetworkReachabilityCallback_Error_NotAuthenticated]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_ErrorEnum, NotAuthenticated, ARPINetworkReachabilityCallback_ErrorEnum *)

#define ARPINetworkReachabilityCallback_ErrorEnum_TimeOut ARPINetworkReachabilityCallback_ErrorEnum_values[ARPINetworkReachabilityCallback_Error_TimeOut]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_ErrorEnum, TimeOut, ARPINetworkReachabilityCallback_ErrorEnum *)

#define ARPINetworkReachabilityCallback_ErrorEnum_NoResponse ARPINetworkReachabilityCallback_ErrorEnum_values[ARPINetworkReachabilityCallback_Error_NoResponse]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_ErrorEnum, NoResponse, ARPINetworkReachabilityCallback_ErrorEnum *)

#define ARPINetworkReachabilityCallback_ErrorEnum_Unreachable ARPINetworkReachabilityCallback_ErrorEnum_values[ARPINetworkReachabilityCallback_Error_Unreachable]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_ErrorEnum, Unreachable, ARPINetworkReachabilityCallback_ErrorEnum *)

#define ARPINetworkReachabilityCallback_ErrorEnum_Wrong_Params ARPINetworkReachabilityCallback_ErrorEnum_values[ARPINetworkReachabilityCallback_Error_Wrong_Params]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_ErrorEnum, Wrong_Params, ARPINetworkReachabilityCallback_ErrorEnum *)

typedef enum {
  ARPINetworkReachabilityCallback_Warning_IncorrectScheme = 0,
  ARPINetworkReachabilityCallback_Warning_NotSecure = 1,
  ARPINetworkReachabilityCallback_Warning_NotTrusted = 2,
  ARPINetworkReachabilityCallback_Warning_Redirected = 3,
  ARPINetworkReachabilityCallback_Warning_NotRegisteredService = 4,
  ARPINetworkReachabilityCallback_Warning_MalformedUrl = 5,
} ARPINetworkReachabilityCallback_Warning;

@interface ARPINetworkReachabilityCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPINetworkReachabilityCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPINetworkReachabilityCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPINetworkReachabilityCallback_WarningEnum)

FOUNDATION_EXPORT ARPINetworkReachabilityCallback_WarningEnum *ARPINetworkReachabilityCallback_WarningEnum_values[];

#define ARPINetworkReachabilityCallback_WarningEnum_IncorrectScheme ARPINetworkReachabilityCallback_WarningEnum_values[ARPINetworkReachabilityCallback_Warning_IncorrectScheme]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_WarningEnum, IncorrectScheme, ARPINetworkReachabilityCallback_WarningEnum *)

#define ARPINetworkReachabilityCallback_WarningEnum_NotSecure ARPINetworkReachabilityCallback_WarningEnum_values[ARPINetworkReachabilityCallback_Warning_NotSecure]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_WarningEnum, NotSecure, ARPINetworkReachabilityCallback_WarningEnum *)

#define ARPINetworkReachabilityCallback_WarningEnum_NotTrusted ARPINetworkReachabilityCallback_WarningEnum_values[ARPINetworkReachabilityCallback_Warning_NotTrusted]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_WarningEnum, NotTrusted, ARPINetworkReachabilityCallback_WarningEnum *)

#define ARPINetworkReachabilityCallback_WarningEnum_Redirected ARPINetworkReachabilityCallback_WarningEnum_values[ARPINetworkReachabilityCallback_Warning_Redirected]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_WarningEnum, Redirected, ARPINetworkReachabilityCallback_WarningEnum *)

#define ARPINetworkReachabilityCallback_WarningEnum_NotRegisteredService ARPINetworkReachabilityCallback_WarningEnum_values[ARPINetworkReachabilityCallback_Warning_NotRegisteredService]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_WarningEnum, NotRegisteredService, ARPINetworkReachabilityCallback_WarningEnum *)

#define ARPINetworkReachabilityCallback_WarningEnum_MalformedUrl ARPINetworkReachabilityCallback_WarningEnum_values[ARPINetworkReachabilityCallback_Warning_MalformedUrl]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_WarningEnum, MalformedUrl, ARPINetworkReachabilityCallback_WarningEnum *)

#endif // _ARPINetworkReachabilityCallback_H_
