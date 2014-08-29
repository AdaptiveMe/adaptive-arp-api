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

- (void)onResultWithBoolean:(BOOL)result;

- (void)onWarningWithBoolean:(BOOL)result
withARPINetworkReachabilityCallback_WarningEnum:(ARPINetworkReachabilityCallback_WarningEnum *)warning;

- (void)onErrorWithARPINetworkReachabilityCallback_ErrorEnum:(ARPINetworkReachabilityCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPINetworkReachabilityCallback_init() {}

#define MeAdaptiveArpApiINetworkReachabilityCallback ARPINetworkReachabilityCallback

typedef enum {
  ARPINetworkReachabilityCallback_Warning_IncorrectScheme = 0,
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

typedef enum {
  ARPINetworkReachabilityCallback_Error_NoPermission = 0,
  ARPINetworkReachabilityCallback_Error_NetworkOnMainThreadException = 1,
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

#define ARPINetworkReachabilityCallback_ErrorEnum_NoPermission ARPINetworkReachabilityCallback_ErrorEnum_values[ARPINetworkReachabilityCallback_Error_NoPermission]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_ErrorEnum, NoPermission, ARPINetworkReachabilityCallback_ErrorEnum *)

#define ARPINetworkReachabilityCallback_ErrorEnum_NetworkOnMainThreadException ARPINetworkReachabilityCallback_ErrorEnum_values[ARPINetworkReachabilityCallback_Error_NetworkOnMainThreadException]
J2OBJC_STATIC_FIELD_GETTER(ARPINetworkReachabilityCallback_ErrorEnum, NetworkOnMainThreadException, ARPINetworkReachabilityCallback_ErrorEnum *)

#endif // _ARPINetworkReachabilityCallback_H_
