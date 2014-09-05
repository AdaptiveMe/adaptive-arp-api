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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IAppResourceCallback.java
//
//

#ifndef _ARPIAppResourceCallback_H_
#define _ARPIAppResourceCallback_H_

@class ARPIAppResourceCallback_ErrorEnum;
@class ARPIAppResourceCallback_WarningEnum;
@protocol ARPIAppResource;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@protocol ARPIAppResourceCallback < NSObject, JavaObject >

- (void)onResultWithARPIAppResource:(id<ARPIAppResource>)resource;

- (void)onWarningWithARPIAppResource:(id<ARPIAppResource>)resource
withARPIAppResourceCallback_WarningEnum:(ARPIAppResourceCallback_WarningEnum *)warning;

- (void)onErrorWithARPIAppResource:(id<ARPIAppResource>)resource
withARPIAppResourceCallback_ErrorEnum:(ARPIAppResourceCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIAppResourceCallback_init() {}

#define MeAdaptiveArpApiIAppResourceCallback ARPIAppResourceCallback

typedef enum {
  ARPIAppResourceCallback_Warning_PartialContent = 0,
  ARPIAppResourceCallback_Warning_TooLarge = 1,
  ARPIAppResourceCallback_Warning_LinkedResource = 2,
} ARPIAppResourceCallback_Warning;

@interface ARPIAppResourceCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIAppResourceCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIAppResourceCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIAppResourceCallback_WarningEnum)

FOUNDATION_EXPORT ARPIAppResourceCallback_WarningEnum *ARPIAppResourceCallback_WarningEnum_values[];

#define ARPIAppResourceCallback_WarningEnum_PartialContent ARPIAppResourceCallback_WarningEnum_values[ARPIAppResourceCallback_Warning_PartialContent]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResourceCallback_WarningEnum, PartialContent, ARPIAppResourceCallback_WarningEnum *)

#define ARPIAppResourceCallback_WarningEnum_TooLarge ARPIAppResourceCallback_WarningEnum_values[ARPIAppResourceCallback_Warning_TooLarge]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResourceCallback_WarningEnum, TooLarge, ARPIAppResourceCallback_WarningEnum *)

#define ARPIAppResourceCallback_WarningEnum_LinkedResource ARPIAppResourceCallback_WarningEnum_values[ARPIAppResourceCallback_Warning_LinkedResource]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResourceCallback_WarningEnum, LinkedResource, ARPIAppResourceCallback_WarningEnum *)

typedef enum {
  ARPIAppResourceCallback_Error_NotFound = 0,
  ARPIAppResourceCallback_Error_NoPermission = 1,
} ARPIAppResourceCallback_Error;

@interface ARPIAppResourceCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIAppResourceCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIAppResourceCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIAppResourceCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIAppResourceCallback_ErrorEnum *ARPIAppResourceCallback_ErrorEnum_values[];

#define ARPIAppResourceCallback_ErrorEnum_NotFound ARPIAppResourceCallback_ErrorEnum_values[ARPIAppResourceCallback_Error_NotFound]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResourceCallback_ErrorEnum, NotFound, ARPIAppResourceCallback_ErrorEnum *)

#define ARPIAppResourceCallback_ErrorEnum_NoPermission ARPIAppResourceCallback_ErrorEnum_values[ARPIAppResourceCallback_Error_NoPermission]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResourceCallback_ErrorEnum, NoPermission, ARPIAppResourceCallback_ErrorEnum *)

#endif // _ARPIAppResourceCallback_H_
