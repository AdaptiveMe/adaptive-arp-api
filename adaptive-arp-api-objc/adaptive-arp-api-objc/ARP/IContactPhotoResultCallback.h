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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IContactPhotoResultCallback.java
//
//

#ifndef _ARPIContactPhotoResultCallback_H_
#define _ARPIContactPhotoResultCallback_H_

@class ARPIContactPhotoResultCallback_ErrorEnum;
@class ARPIContactPhotoResultCallback_WarningEnum;
@class IOSByteArray;

#import "JreEmulation.h"
#include "IBaseCallback.h"
#include "java/lang/Enum.h"

@protocol ARPIContactPhotoResultCallback < ARPIBaseCallback, NSObject, JavaObject >
- (void)onResultWithByteArray:(IOSByteArray *)contactPhoto;

- (void)onWarningWithByteArray:(IOSByteArray *)contactPhoto
withARPIContactPhotoResultCallback_WarningEnum:(ARPIContactPhotoResultCallback_WarningEnum *)warning;

- (void)onErrorWithARPIContactPhotoResultCallback_ErrorEnum:(ARPIContactPhotoResultCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIContactPhotoResultCallback_init() {}

#define MeAdaptiveArpApiIContactPhotoResultCallback ARPIContactPhotoResultCallback

typedef enum {
  ARPIContactPhotoResultCallback_Warning_LimitExceeded = 0,
  ARPIContactPhotoResultCallback_Warning_No_Matches = 1,
} ARPIContactPhotoResultCallback_Warning;

@interface ARPIContactPhotoResultCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIContactPhotoResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIContactPhotoResultCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIContactPhotoResultCallback_WarningEnum)

FOUNDATION_EXPORT ARPIContactPhotoResultCallback_WarningEnum *ARPIContactPhotoResultCallback_WarningEnum_values[];

#define ARPIContactPhotoResultCallback_WarningEnum_LimitExceeded ARPIContactPhotoResultCallback_WarningEnum_values[ARPIContactPhotoResultCallback_Warning_LimitExceeded]
J2OBJC_STATIC_FIELD_GETTER(ARPIContactPhotoResultCallback_WarningEnum, LimitExceeded, ARPIContactPhotoResultCallback_WarningEnum *)

#define ARPIContactPhotoResultCallback_WarningEnum_No_Matches ARPIContactPhotoResultCallback_WarningEnum_values[ARPIContactPhotoResultCallback_Warning_No_Matches]
J2OBJC_STATIC_FIELD_GETTER(ARPIContactPhotoResultCallback_WarningEnum, No_Matches, ARPIContactPhotoResultCallback_WarningEnum *)

typedef enum {
  ARPIContactPhotoResultCallback_Error_NoPermission = 0,
  ARPIContactPhotoResultCallback_Error_Wrong_Params = 1,
} ARPIContactPhotoResultCallback_Error;

@interface ARPIContactPhotoResultCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIContactPhotoResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIContactPhotoResultCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIContactPhotoResultCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIContactPhotoResultCallback_ErrorEnum *ARPIContactPhotoResultCallback_ErrorEnum_values[];

#define ARPIContactPhotoResultCallback_ErrorEnum_NoPermission ARPIContactPhotoResultCallback_ErrorEnum_values[ARPIContactPhotoResultCallback_Error_NoPermission]
J2OBJC_STATIC_FIELD_GETTER(ARPIContactPhotoResultCallback_ErrorEnum, NoPermission, ARPIContactPhotoResultCallback_ErrorEnum *)

#define ARPIContactPhotoResultCallback_ErrorEnum_Wrong_Params ARPIContactPhotoResultCallback_ErrorEnum_values[ARPIContactPhotoResultCallback_Error_Wrong_Params]
J2OBJC_STATIC_FIELD_GETTER(ARPIContactPhotoResultCallback_ErrorEnum, Wrong_Params, ARPIContactPhotoResultCallback_ErrorEnum *)

#endif // _ARPIContactPhotoResultCallback_H_
