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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IFileDataResultCallback.java
//
//

#ifndef _ARPIFileDataResultCallback_H_
#define _ARPIFileDataResultCallback_H_

@class ARPIFileDataResultCallback_ErrorEnum;
@class ARPIFileDataResultCallback_WarningEnum;
@class IOSByteArray;
@protocol ARPIFile;

#import "JreEmulation.h"
#include "IBaseCallback.h"
#include "java/lang/Enum.h"

@protocol ARPIFileDataResultCallback < ARPIBaseCallback, NSObject, JavaObject >
- (void)onResultWithARPIFile:(id<ARPIFile>)file
               withByteArray:(IOSByteArray *)data;

- (void)onWarningWithARPIFile:(id<ARPIFile>)file
withARPIFileDataResultCallback_WarningEnum:(ARPIFileDataResultCallback_WarningEnum *)warning;

- (void)onErrorWithARPIFileDataResultCallback_ErrorEnum:(ARPIFileDataResultCallback_ErrorEnum *)error;

- (void)onErrorWithARPIFile:(id<ARPIFile>)file
withARPIFileDataResultCallback_ErrorEnum:(ARPIFileDataResultCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIFileDataResultCallback_init() {}

#define MeAdaptiveArpApiIFileDataResultCallback ARPIFileDataResultCallback

typedef enum {
  ARPIFileDataResultCallback_Warning_ExceedMaximumSize = 0,
  ARPIFileDataResultCallback_Warning_Unknown = 1,
} ARPIFileDataResultCallback_Warning;

@interface ARPIFileDataResultCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIFileDataResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIFileDataResultCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIFileDataResultCallback_WarningEnum)

FOUNDATION_EXPORT ARPIFileDataResultCallback_WarningEnum *ARPIFileDataResultCallback_WarningEnum_values[];

#define ARPIFileDataResultCallback_WarningEnum_ExceedMaximumSize ARPIFileDataResultCallback_WarningEnum_values[ARPIFileDataResultCallback_Warning_ExceedMaximumSize]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileDataResultCallback_WarningEnum, ExceedMaximumSize, ARPIFileDataResultCallback_WarningEnum *)

#define ARPIFileDataResultCallback_WarningEnum_Unknown ARPIFileDataResultCallback_WarningEnum_values[ARPIFileDataResultCallback_Warning_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileDataResultCallback_WarningEnum, Unknown, ARPIFileDataResultCallback_WarningEnum *)

typedef enum {
  ARPIFileDataResultCallback_Error_InexistentFile = 0,
  ARPIFileDataResultCallback_Error_InsufficientSpace = 1,
  ARPIFileDataResultCallback_Error_Unauthorized = 2,
  ARPIFileDataResultCallback_Error_Unknown = 3,
} ARPIFileDataResultCallback_Error;

@interface ARPIFileDataResultCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIFileDataResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIFileDataResultCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIFileDataResultCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIFileDataResultCallback_ErrorEnum *ARPIFileDataResultCallback_ErrorEnum_values[];

#define ARPIFileDataResultCallback_ErrorEnum_InexistentFile ARPIFileDataResultCallback_ErrorEnum_values[ARPIFileDataResultCallback_Error_InexistentFile]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileDataResultCallback_ErrorEnum, InexistentFile, ARPIFileDataResultCallback_ErrorEnum *)

#define ARPIFileDataResultCallback_ErrorEnum_InsufficientSpace ARPIFileDataResultCallback_ErrorEnum_values[ARPIFileDataResultCallback_Error_InsufficientSpace]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileDataResultCallback_ErrorEnum, InsufficientSpace, ARPIFileDataResultCallback_ErrorEnum *)

#define ARPIFileDataResultCallback_ErrorEnum_Unauthorized ARPIFileDataResultCallback_ErrorEnum_values[ARPIFileDataResultCallback_Error_Unauthorized]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileDataResultCallback_ErrorEnum, Unauthorized, ARPIFileDataResultCallback_ErrorEnum *)

#define ARPIFileDataResultCallback_ErrorEnum_Unknown ARPIFileDataResultCallback_ErrorEnum_values[ARPIFileDataResultCallback_Error_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileDataResultCallback_ErrorEnum, Unknown, ARPIFileDataResultCallback_ErrorEnum *)

#endif // _ARPIFileDataResultCallback_H_
