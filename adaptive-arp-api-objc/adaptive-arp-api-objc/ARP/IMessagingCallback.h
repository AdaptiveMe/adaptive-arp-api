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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IMessagingCallback.java
//
//

#ifndef _ARPIMessagingCallback_H_
#define _ARPIMessagingCallback_H_

@class ARPIMessagingCallback_ErrorEnum;
@class ARPIMessagingCallback_WarningEnum;

#import "JreEmulation.h"
#include "IBaseCallback.h"
#include "java/lang/Enum.h"

@protocol ARPIMessagingCallback < ARPIBaseCallback, NSObject, JavaObject >
- (void)onResultWithBoolean:(BOOL)success;

- (void)onWarningWithBoolean:(BOOL)success
withARPIMessagingCallback_WarningEnum:(ARPIMessagingCallback_WarningEnum *)warning;

- (void)onErrorWithARPIMessagingCallback_ErrorEnum:(ARPIMessagingCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIMessagingCallback_init() {}

#define MeAdaptiveArpApiIMessagingCallback ARPIMessagingCallback

typedef enum {
  ARPIMessagingCallback_Warning_UnableToSentAll = 0,
  ARPIMessagingCallback_Warning_UnableToFetchAttachment = 1,
  ARPIMessagingCallback_Warning_Unknown = 2,
} ARPIMessagingCallback_Warning;

@interface ARPIMessagingCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIMessagingCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIMessagingCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIMessagingCallback_WarningEnum)

FOUNDATION_EXPORT ARPIMessagingCallback_WarningEnum *ARPIMessagingCallback_WarningEnum_values[];

#define ARPIMessagingCallback_WarningEnum_UnableToSentAll ARPIMessagingCallback_WarningEnum_values[ARPIMessagingCallback_Warning_UnableToSentAll]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_WarningEnum, UnableToSentAll, ARPIMessagingCallback_WarningEnum *)

#define ARPIMessagingCallback_WarningEnum_UnableToFetchAttachment ARPIMessagingCallback_WarningEnum_values[ARPIMessagingCallback_Warning_UnableToFetchAttachment]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_WarningEnum, UnableToFetchAttachment, ARPIMessagingCallback_WarningEnum *)

#define ARPIMessagingCallback_WarningEnum_Unknown ARPIMessagingCallback_WarningEnum_values[ARPIMessagingCallback_Warning_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_WarningEnum, Unknown, ARPIMessagingCallback_WarningEnum *)

typedef enum {
  ARPIMessagingCallback_Error_SIMNotPresent = 0,
  ARPIMessagingCallback_Error_EmailAccountNotFound = 1,
  ARPIMessagingCallback_Error_NotSent = 2,
  ARPIMessagingCallback_Error_WrongParams = 3,
  ARPIMessagingCallback_Error_NotSupported = 4,
  ARPIMessagingCallback_Error_Unknown = 5,
} ARPIMessagingCallback_Error;

@interface ARPIMessagingCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIMessagingCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIMessagingCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIMessagingCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIMessagingCallback_ErrorEnum *ARPIMessagingCallback_ErrorEnum_values[];

#define ARPIMessagingCallback_ErrorEnum_SIMNotPresent ARPIMessagingCallback_ErrorEnum_values[ARPIMessagingCallback_Error_SIMNotPresent]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_ErrorEnum, SIMNotPresent, ARPIMessagingCallback_ErrorEnum *)

#define ARPIMessagingCallback_ErrorEnum_EmailAccountNotFound ARPIMessagingCallback_ErrorEnum_values[ARPIMessagingCallback_Error_EmailAccountNotFound]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_ErrorEnum, EmailAccountNotFound, ARPIMessagingCallback_ErrorEnum *)

#define ARPIMessagingCallback_ErrorEnum_NotSent ARPIMessagingCallback_ErrorEnum_values[ARPIMessagingCallback_Error_NotSent]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_ErrorEnum, NotSent, ARPIMessagingCallback_ErrorEnum *)

#define ARPIMessagingCallback_ErrorEnum_WrongParams ARPIMessagingCallback_ErrorEnum_values[ARPIMessagingCallback_Error_WrongParams]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_ErrorEnum, WrongParams, ARPIMessagingCallback_ErrorEnum *)

#define ARPIMessagingCallback_ErrorEnum_NotSupported ARPIMessagingCallback_ErrorEnum_values[ARPIMessagingCallback_Error_NotSupported]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_ErrorEnum, NotSupported, ARPIMessagingCallback_ErrorEnum *)

#define ARPIMessagingCallback_ErrorEnum_Unknown ARPIMessagingCallback_ErrorEnum_values[ARPIMessagingCallback_Error_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_ErrorEnum, Unknown, ARPIMessagingCallback_ErrorEnum *)

#endif // _ARPIMessagingCallback_H_
