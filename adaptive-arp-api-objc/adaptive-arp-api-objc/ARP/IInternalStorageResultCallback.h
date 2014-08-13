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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IInternalStorageResultCallback.java
//
//

#ifndef _ARPIInternalStorageResultCallback_H_
#define _ARPIInternalStorageResultCallback_H_

@class ARPIInternalStorageResultCallback_ErrorEnum;
@class ARPIInternalStorageResultCallback_WarningEnum;
@class IOSObjectArray;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@protocol ARPIInternalStorageResultCallback < NSObject, JavaObject >

- (void)onResultWithARPInternalStorageKeyPairArray:(IOSObjectArray *)keyValues;

- (void)onWarningWithARPInternalStorageKeyPairArray:(IOSObjectArray *)keyValues
  withARPIInternalStorageResultCallback_WarningEnum:(ARPIInternalStorageResultCallback_WarningEnum *)warning;

- (void)onErrorWithARPIInternalStorageResultCallback_ErrorEnum:(ARPIInternalStorageResultCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIInternalStorageResultCallback_init() {}

#define MeAdaptiveArpApiIInternalStorageResultCallback ARPIInternalStorageResultCallback

typedef enum {
  ARPIInternalStorageResultCallback_Warning_EntryOverride = 0,
} ARPIInternalStorageResultCallback_Warning;

@interface ARPIInternalStorageResultCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIInternalStorageResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIInternalStorageResultCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIInternalStorageResultCallback_WarningEnum)

FOUNDATION_EXPORT ARPIInternalStorageResultCallback_WarningEnum *ARPIInternalStorageResultCallback_WarningEnum_values[];

#define ARPIInternalStorageResultCallback_WarningEnum_EntryOverride ARPIInternalStorageResultCallback_WarningEnum_values[ARPIInternalStorageResultCallback_Warning_EntryOverride]
J2OBJC_STATIC_FIELD_GETTER(ARPIInternalStorageResultCallback_WarningEnum, EntryOverride, ARPIInternalStorageResultCallback_WarningEnum *)

typedef enum {
  ARPIInternalStorageResultCallback_Error_NoPermission = 0,
  ARPIInternalStorageResultCallback_Error_NoMatchesFound = 1,
} ARPIInternalStorageResultCallback_Error;

@interface ARPIInternalStorageResultCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIInternalStorageResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIInternalStorageResultCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIInternalStorageResultCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIInternalStorageResultCallback_ErrorEnum *ARPIInternalStorageResultCallback_ErrorEnum_values[];

#define ARPIInternalStorageResultCallback_ErrorEnum_NoPermission ARPIInternalStorageResultCallback_ErrorEnum_values[ARPIInternalStorageResultCallback_Error_NoPermission]
J2OBJC_STATIC_FIELD_GETTER(ARPIInternalStorageResultCallback_ErrorEnum, NoPermission, ARPIInternalStorageResultCallback_ErrorEnum *)

#define ARPIInternalStorageResultCallback_ErrorEnum_NoMatchesFound ARPIInternalStorageResultCallback_ErrorEnum_values[ARPIInternalStorageResultCallback_Error_NoMatchesFound]
J2OBJC_STATIC_FIELD_GETTER(ARPIInternalStorageResultCallback_ErrorEnum, NoMatchesFound, ARPIInternalStorageResultCallback_ErrorEnum *)

#endif // _ARPIInternalStorageResultCallback_H_
