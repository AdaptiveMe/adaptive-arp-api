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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IServiceResultCallback.java
//
//

#ifndef _ARPIServiceResultCallback_H_
#define _ARPIServiceResultCallback_H_

@class ARPIServiceResultCallback_ErrorEnum;
@class ARPIServiceResultCallback_WarningEnum;
@class ARPServiceResponse;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@protocol ARPIServiceResultCallback < NSObject, JavaObject >

- (void)onResultWithARPServiceResponse:(ARPServiceResponse *)response;

- (void)onWarningWithARPServiceResponse:(ARPServiceResponse *)response
withARPIServiceResultCallback_WarningEnum:(ARPIServiceResultCallback_WarningEnum *)warning;

- (void)onErrorWithARPIServiceResultCallback_ErrorEnum:(ARPIServiceResultCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIServiceResultCallback_init() {}

#define MeAdaptiveArpApiIServiceResultCallback ARPIServiceResultCallback

typedef enum {
  ARPIServiceResultCallback_Warning_NotSecure = 0,
  ARPIServiceResultCallback_Warning_NotTrusted = 1,
  ARPIServiceResultCallback_Warning_Redirected = 2,
} ARPIServiceResultCallback_Warning;

@interface ARPIServiceResultCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIServiceResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIServiceResultCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIServiceResultCallback_WarningEnum)

FOUNDATION_EXPORT ARPIServiceResultCallback_WarningEnum *ARPIServiceResultCallback_WarningEnum_values[];

#define ARPIServiceResultCallback_WarningEnum_NotSecure ARPIServiceResultCallback_WarningEnum_values[ARPIServiceResultCallback_Warning_NotSecure]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_WarningEnum, NotSecure, ARPIServiceResultCallback_WarningEnum *)

#define ARPIServiceResultCallback_WarningEnum_NotTrusted ARPIServiceResultCallback_WarningEnum_values[ARPIServiceResultCallback_Warning_NotTrusted]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_WarningEnum, NotTrusted, ARPIServiceResultCallback_WarningEnum *)

#define ARPIServiceResultCallback_WarningEnum_Redirected ARPIServiceResultCallback_WarningEnum_values[ARPIServiceResultCallback_Warning_Redirected]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_WarningEnum, Redirected, ARPIServiceResultCallback_WarningEnum *)

typedef enum {
  ARPIServiceResultCallback_Error_Forbidden = 0,
  ARPIServiceResultCallback_Error_NotFound = 1,
  ARPIServiceResultCallback_Error_MethodNotAllowed = 2,
  ARPIServiceResultCallback_Error_NotAllowed = 3,
  ARPIServiceResultCallback_Error_NotAuthenticated = 4,
  ARPIServiceResultCallback_Error_TimeOut = 5,
  ARPIServiceResultCallback_Error_NoResponse = 6,
  ARPIServiceResultCallback_Error_ServerError = 7,
  ARPIServiceResultCallback_Error_Unreachable = 8,
  ARPIServiceResultCallback_Error_Unknown = 9,
} ARPIServiceResultCallback_Error;

@interface ARPIServiceResultCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIServiceResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIServiceResultCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIServiceResultCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIServiceResultCallback_ErrorEnum *ARPIServiceResultCallback_ErrorEnum_values[];

#define ARPIServiceResultCallback_ErrorEnum_Forbidden ARPIServiceResultCallback_ErrorEnum_values[ARPIServiceResultCallback_Error_Forbidden]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_ErrorEnum, Forbidden, ARPIServiceResultCallback_ErrorEnum *)

#define ARPIServiceResultCallback_ErrorEnum_NotFound ARPIServiceResultCallback_ErrorEnum_values[ARPIServiceResultCallback_Error_NotFound]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_ErrorEnum, NotFound, ARPIServiceResultCallback_ErrorEnum *)

#define ARPIServiceResultCallback_ErrorEnum_MethodNotAllowed ARPIServiceResultCallback_ErrorEnum_values[ARPIServiceResultCallback_Error_MethodNotAllowed]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_ErrorEnum, MethodNotAllowed, ARPIServiceResultCallback_ErrorEnum *)

#define ARPIServiceResultCallback_ErrorEnum_NotAllowed ARPIServiceResultCallback_ErrorEnum_values[ARPIServiceResultCallback_Error_NotAllowed]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_ErrorEnum, NotAllowed, ARPIServiceResultCallback_ErrorEnum *)

#define ARPIServiceResultCallback_ErrorEnum_NotAuthenticated ARPIServiceResultCallback_ErrorEnum_values[ARPIServiceResultCallback_Error_NotAuthenticated]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_ErrorEnum, NotAuthenticated, ARPIServiceResultCallback_ErrorEnum *)

#define ARPIServiceResultCallback_ErrorEnum_TimeOut ARPIServiceResultCallback_ErrorEnum_values[ARPIServiceResultCallback_Error_TimeOut]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_ErrorEnum, TimeOut, ARPIServiceResultCallback_ErrorEnum *)

#define ARPIServiceResultCallback_ErrorEnum_NoResponse ARPIServiceResultCallback_ErrorEnum_values[ARPIServiceResultCallback_Error_NoResponse]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_ErrorEnum, NoResponse, ARPIServiceResultCallback_ErrorEnum *)

#define ARPIServiceResultCallback_ErrorEnum_ServerError ARPIServiceResultCallback_ErrorEnum_values[ARPIServiceResultCallback_Error_ServerError]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_ErrorEnum, ServerError, ARPIServiceResultCallback_ErrorEnum *)

#define ARPIServiceResultCallback_ErrorEnum_Unreachable ARPIServiceResultCallback_ErrorEnum_values[ARPIServiceResultCallback_Error_Unreachable]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_ErrorEnum, Unreachable, ARPIServiceResultCallback_ErrorEnum *)

#define ARPIServiceResultCallback_ErrorEnum_Unknown ARPIServiceResultCallback_ErrorEnum_values[ARPIServiceResultCallback_Error_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPIServiceResultCallback_ErrorEnum, Unknown, ARPIServiceResultCallback_ErrorEnum *)

#endif // _ARPIServiceResultCallback_H_
