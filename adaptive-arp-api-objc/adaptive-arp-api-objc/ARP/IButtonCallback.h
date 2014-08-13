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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IButtonCallback.java
//
//

#ifndef _ARPIButtonCallback_H_
#define _ARPIButtonCallback_H_

@class ARPButton;
@class ARPIButtonCallback_ErrorEnum;
@class ARPIButtonCallback_WarningEnum;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@protocol ARPIButtonCallback < NSObject, JavaObject >

- (void)onResultWithARPButton:(ARPButton *)button;

- (void)onWarningWithARPButton:(ARPButton *)button
withARPIButtonCallback_WarningEnum:(ARPIButtonCallback_WarningEnum *)warning;

- (void)onErrorWithARPIButtonCallback_ErrorEnum:(ARPIButtonCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIButtonCallback_init() {}

#define MeAdaptiveArpApiIButtonCallback ARPIButtonCallback

typedef enum {
  ARPIButtonCallback_Error_Not_Present = 0,
} ARPIButtonCallback_Error;

@interface ARPIButtonCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIButtonCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIButtonCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIButtonCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIButtonCallback_ErrorEnum *ARPIButtonCallback_ErrorEnum_values[];

#define ARPIButtonCallback_ErrorEnum_Not_Present ARPIButtonCallback_ErrorEnum_values[ARPIButtonCallback_Error_Not_Present]
J2OBJC_STATIC_FIELD_GETTER(ARPIButtonCallback_ErrorEnum, Not_Present, ARPIButtonCallback_ErrorEnum *)

typedef enum {
  ARPIButtonCallback_Warning_Not_Implemented = 0,
} ARPIButtonCallback_Warning;

@interface ARPIButtonCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIButtonCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIButtonCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIButtonCallback_WarningEnum)

FOUNDATION_EXPORT ARPIButtonCallback_WarningEnum *ARPIButtonCallback_WarningEnum_values[];

#define ARPIButtonCallback_WarningEnum_Not_Implemented ARPIButtonCallback_WarningEnum_values[ARPIButtonCallback_Warning_Not_Implemented]
J2OBJC_STATIC_FIELD_GETTER(ARPIButtonCallback_WarningEnum, Not_Implemented, ARPIButtonCallback_WarningEnum *)

#endif // _ARPIButtonCallback_H_
