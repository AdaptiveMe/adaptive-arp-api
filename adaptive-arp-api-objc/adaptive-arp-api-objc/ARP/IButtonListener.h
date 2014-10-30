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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IButtonListener.java
//
//

#ifndef _ARPIButtonListener_H_
#define _ARPIButtonListener_H_

@class ARPButton;
@class ARPIButtonListener_ErrorEnum;
@class ARPIButtonListener_WarningEnum;

#import "JreEmulation.h"
#include "IBaseListener.h"
#include "java/lang/Enum.h"

@protocol ARPIButtonListener < ARPIBaseListener, NSObject, JavaObject >
- (void)onResultWithARPButton:(ARPButton *)button;

- (void)onWarningWithARPButton:(ARPButton *)button
withARPIButtonListener_WarningEnum:(ARPIButtonListener_WarningEnum *)warning;

- (void)onErrorWithARPIButtonListener_ErrorEnum:(ARPIButtonListener_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIButtonListener_init() {}

#define MeAdaptiveArpApiIButtonListener ARPIButtonListener

typedef enum {
  ARPIButtonListener_Error_Not_Present = 0,
  ARPIButtonListener_Error_Unknown = 1,
} ARPIButtonListener_Error;

@interface ARPIButtonListener_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIButtonListener_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIButtonListener_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIButtonListener_ErrorEnum)

FOUNDATION_EXPORT ARPIButtonListener_ErrorEnum *ARPIButtonListener_ErrorEnum_values[];

#define ARPIButtonListener_ErrorEnum_Not_Present ARPIButtonListener_ErrorEnum_values[ARPIButtonListener_Error_Not_Present]
J2OBJC_STATIC_FIELD_GETTER(ARPIButtonListener_ErrorEnum, Not_Present, ARPIButtonListener_ErrorEnum *)

#define ARPIButtonListener_ErrorEnum_Unknown ARPIButtonListener_ErrorEnum_values[ARPIButtonListener_Error_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPIButtonListener_ErrorEnum, Unknown, ARPIButtonListener_ErrorEnum *)

typedef enum {
  ARPIButtonListener_Warning_Not_Implemented = 0,
  ARPIButtonListener_Warning_Unknown = 1,
} ARPIButtonListener_Warning;

@interface ARPIButtonListener_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIButtonListener_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIButtonListener_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIButtonListener_WarningEnum)

FOUNDATION_EXPORT ARPIButtonListener_WarningEnum *ARPIButtonListener_WarningEnum_values[];

#define ARPIButtonListener_WarningEnum_Not_Implemented ARPIButtonListener_WarningEnum_values[ARPIButtonListener_Warning_Not_Implemented]
J2OBJC_STATIC_FIELD_GETTER(ARPIButtonListener_WarningEnum, Not_Implemented, ARPIButtonListener_WarningEnum *)

#define ARPIButtonListener_WarningEnum_Unknown ARPIButtonListener_WarningEnum_values[ARPIButtonListener_Warning_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPIButtonListener_WarningEnum, Unknown, ARPIButtonListener_WarningEnum *)

#endif // _ARPIButtonListener_H_
