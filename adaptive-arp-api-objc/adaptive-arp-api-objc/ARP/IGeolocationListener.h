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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IGeolocationListener.java
//
//

#ifndef _ARPIGeolocationListener_H_
#define _ARPIGeolocationListener_H_

@class ARPGeolocation;
@class ARPIGeolocationListener_ErrorEnum;
@class ARPIGeolocationListener_WarningEnum;

#import "JreEmulation.h"
#include "IBaseListener.h"
#include "java/lang/Enum.h"

@protocol ARPIGeolocationListener < ARPIBaseListener, NSObject, JavaObject >
- (void)onResultWithARPGeolocation:(ARPGeolocation *)geolocation;

- (void)onWarningWithARPGeolocation:(ARPGeolocation *)geolocation
withARPIGeolocationListener_WarningEnum:(ARPIGeolocationListener_WarningEnum *)warning;

- (void)onErrorWithARPIGeolocationListener_ErrorEnum:(ARPIGeolocationListener_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIGeolocationListener_init() {}

#define MeAdaptiveArpApiIGeolocationListener ARPIGeolocationListener

typedef enum {
  ARPIGeolocationListener_Error_RestrictedAccess = 0,
  ARPIGeolocationListener_Error_DeniedAccess = 1,
  ARPIGeolocationListener_Error_StatusNotDetermined = 2,
} ARPIGeolocationListener_Error;

@interface ARPIGeolocationListener_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIGeolocationListener_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIGeolocationListener_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIGeolocationListener_ErrorEnum)

FOUNDATION_EXPORT ARPIGeolocationListener_ErrorEnum *ARPIGeolocationListener_ErrorEnum_values[];

#define ARPIGeolocationListener_ErrorEnum_RestrictedAccess ARPIGeolocationListener_ErrorEnum_values[ARPIGeolocationListener_Error_RestrictedAccess]
J2OBJC_STATIC_FIELD_GETTER(ARPIGeolocationListener_ErrorEnum, RestrictedAccess, ARPIGeolocationListener_ErrorEnum *)

#define ARPIGeolocationListener_ErrorEnum_DeniedAccess ARPIGeolocationListener_ErrorEnum_values[ARPIGeolocationListener_Error_DeniedAccess]
J2OBJC_STATIC_FIELD_GETTER(ARPIGeolocationListener_ErrorEnum, DeniedAccess, ARPIGeolocationListener_ErrorEnum *)

#define ARPIGeolocationListener_ErrorEnum_StatusNotDetermined ARPIGeolocationListener_ErrorEnum_values[ARPIGeolocationListener_Error_StatusNotDetermined]
J2OBJC_STATIC_FIELD_GETTER(ARPIGeolocationListener_ErrorEnum, StatusNotDetermined, ARPIGeolocationListener_ErrorEnum *)

typedef enum {
  ARPIGeolocationListener_Warning_HighDoP = 0,
} ARPIGeolocationListener_Warning;

@interface ARPIGeolocationListener_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIGeolocationListener_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIGeolocationListener_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIGeolocationListener_WarningEnum)

FOUNDATION_EXPORT ARPIGeolocationListener_WarningEnum *ARPIGeolocationListener_WarningEnum_values[];

#define ARPIGeolocationListener_WarningEnum_HighDoP ARPIGeolocationListener_WarningEnum_values[ARPIGeolocationListener_Warning_HighDoP]
J2OBJC_STATIC_FIELD_GETTER(ARPIGeolocationListener_WarningEnum, HighDoP, ARPIGeolocationListener_WarningEnum *)

#endif // _ARPIGeolocationListener_H_
