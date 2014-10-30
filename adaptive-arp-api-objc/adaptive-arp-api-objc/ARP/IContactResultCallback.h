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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IContactResultCallback.java
//
//

#ifndef _ARPIContactResultCallback_H_
#define _ARPIContactResultCallback_H_

@class ARPIContactResultCallback_ErrorEnum;
@class ARPIContactResultCallback_WarningEnum;
@class IOSObjectArray;

#import "JreEmulation.h"
#include "IBaseCallback.h"
#include "java/lang/Enum.h"

@protocol ARPIContactResultCallback < ARPIBaseCallback, NSObject, JavaObject >
- (void)onResultWithARPContactArray:(IOSObjectArray *)contacts;

- (void)onWarningWithARPContactArray:(IOSObjectArray *)contacts
withARPIContactResultCallback_WarningEnum:(ARPIContactResultCallback_WarningEnum *)warning;

- (void)onErrorWithARPIContactResultCallback_ErrorEnum:(ARPIContactResultCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIContactResultCallback_init() {}

#define MeAdaptiveArpApiIContactResultCallback ARPIContactResultCallback

typedef enum {
  ARPIContactResultCallback_Warning_LimitExceeded = 0,
  ARPIContactResultCallback_Warning_No_Matches = 1,
  ARPIContactResultCallback_Warning_Unknown = 2,
} ARPIContactResultCallback_Warning;

@interface ARPIContactResultCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIContactResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIContactResultCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIContactResultCallback_WarningEnum)

FOUNDATION_EXPORT ARPIContactResultCallback_WarningEnum *ARPIContactResultCallback_WarningEnum_values[];

#define ARPIContactResultCallback_WarningEnum_LimitExceeded ARPIContactResultCallback_WarningEnum_values[ARPIContactResultCallback_Warning_LimitExceeded]
J2OBJC_STATIC_FIELD_GETTER(ARPIContactResultCallback_WarningEnum, LimitExceeded, ARPIContactResultCallback_WarningEnum *)

#define ARPIContactResultCallback_WarningEnum_No_Matches ARPIContactResultCallback_WarningEnum_values[ARPIContactResultCallback_Warning_No_Matches]
J2OBJC_STATIC_FIELD_GETTER(ARPIContactResultCallback_WarningEnum, No_Matches, ARPIContactResultCallback_WarningEnum *)

#define ARPIContactResultCallback_WarningEnum_Unknown ARPIContactResultCallback_WarningEnum_values[ARPIContactResultCallback_Warning_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPIContactResultCallback_WarningEnum, Unknown, ARPIContactResultCallback_WarningEnum *)

typedef enum {
  ARPIContactResultCallback_Error_NoPermission = 0,
  ARPIContactResultCallback_Error_Wrong_Params = 1,
  ARPIContactResultCallback_Error_Unknown = 2,
} ARPIContactResultCallback_Error;

@interface ARPIContactResultCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIContactResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIContactResultCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIContactResultCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIContactResultCallback_ErrorEnum *ARPIContactResultCallback_ErrorEnum_values[];

#define ARPIContactResultCallback_ErrorEnum_NoPermission ARPIContactResultCallback_ErrorEnum_values[ARPIContactResultCallback_Error_NoPermission]
J2OBJC_STATIC_FIELD_GETTER(ARPIContactResultCallback_ErrorEnum, NoPermission, ARPIContactResultCallback_ErrorEnum *)

#define ARPIContactResultCallback_ErrorEnum_Wrong_Params ARPIContactResultCallback_ErrorEnum_values[ARPIContactResultCallback_Error_Wrong_Params]
J2OBJC_STATIC_FIELD_GETTER(ARPIContactResultCallback_ErrorEnum, Wrong_Params, ARPIContactResultCallback_ErrorEnum *)

#define ARPIContactResultCallback_ErrorEnum_Unknown ARPIContactResultCallback_ErrorEnum_values[ARPIContactResultCallback_Error_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPIContactResultCallback_ErrorEnum, Unknown, ARPIContactResultCallback_ErrorEnum *)

#endif // _ARPIContactResultCallback_H_
