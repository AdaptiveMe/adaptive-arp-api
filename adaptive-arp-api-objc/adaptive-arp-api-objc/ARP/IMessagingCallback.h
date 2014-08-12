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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IMessagingCallback.java
//
//

#ifndef _ARPIMessagingCallback_H_
#define _ARPIMessagingCallback_H_

@class ARPIMessagingCallback_ErrorEnum;
@class ARPIMessagingCallback_WarningEnum;

#import "JreEmulation.h"
#include "java/io/Serializable.h"
#include "java/lang/Enum.h"

@protocol ARPIMessagingCallback < JavaIoSerializable, NSObject, JavaObject >
- (void)onResultWithBoolean:(BOOL)success;

- (void)onWarningWithBoolean:(BOOL)success
withARPIMessagingCallback_WarningEnum:(ARPIMessagingCallback_WarningEnum *)warning;

- (void)onErrorWithARPIMessagingCallback_ErrorEnum:(ARPIMessagingCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIMessagingCallback_init() {}

#define MeAdaptiveArpApiIMessagingCallback ARPIMessagingCallback

typedef enum {
  ARPIMessagingCallback_Warning_Unable_To_Sent_All = 0,
  ARPIMessagingCallback_Warning_Unable_to_fetch_attachment = 1,
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

#define ARPIMessagingCallback_WarningEnum_Unable_To_Sent_All ARPIMessagingCallback_WarningEnum_values[ARPIMessagingCallback_Warning_Unable_To_Sent_All]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_WarningEnum, Unable_To_Sent_All, ARPIMessagingCallback_WarningEnum *)

#define ARPIMessagingCallback_WarningEnum_Unable_to_fetch_attachment ARPIMessagingCallback_WarningEnum_values[ARPIMessagingCallback_Warning_Unable_to_fetch_attachment]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_WarningEnum, Unable_to_fetch_attachment, ARPIMessagingCallback_WarningEnum *)

typedef enum {
  ARPIMessagingCallback_Error_SIM_Not_Present = 0,
  ARPIMessagingCallback_Error_Email_Account_Not_Found = 1,
  ARPIMessagingCallback_Error_Not_Sent = 2,
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

#define ARPIMessagingCallback_ErrorEnum_SIM_Not_Present ARPIMessagingCallback_ErrorEnum_values[ARPIMessagingCallback_Error_SIM_Not_Present]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_ErrorEnum, SIM_Not_Present, ARPIMessagingCallback_ErrorEnum *)

#define ARPIMessagingCallback_ErrorEnum_Email_Account_Not_Found ARPIMessagingCallback_ErrorEnum_values[ARPIMessagingCallback_Error_Email_Account_Not_Found]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_ErrorEnum, Email_Account_Not_Found, ARPIMessagingCallback_ErrorEnum *)

#define ARPIMessagingCallback_ErrorEnum_Not_Sent ARPIMessagingCallback_ErrorEnum_values[ARPIMessagingCallback_Error_Not_Sent]
J2OBJC_STATIC_FIELD_GETTER(ARPIMessagingCallback_ErrorEnum, Not_Sent, ARPIMessagingCallback_ErrorEnum *)

#endif // _ARPIMessagingCallback_H_
