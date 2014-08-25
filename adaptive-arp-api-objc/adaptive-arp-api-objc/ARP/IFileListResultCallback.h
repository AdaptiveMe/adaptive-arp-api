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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IFileListResultCallback.java
//
//

#ifndef _ARPIFileListResultCallback_H_
#define _ARPIFileListResultCallback_H_

@class ARPIFileListResultCallback_ErrorEnum;
@class ARPIFileListResultCallback_WarningEnum;
@class IOSObjectArray;
@protocol ARPIFile;

#import "JreEmulation.h"
#include "IBaseCallback.h"
#include "java/lang/Enum.h"

@protocol ARPIFileListResultCallback < ARPIBaseCallback, NSObject, JavaObject >
- (void)onResultWithARPIFileArray:(IOSObjectArray *)files;

- (void)onWarningWithARPIFileArray:(IOSObjectArray *)files
withARPIFileListResultCallback_WarningEnum:(ARPIFileListResultCallback_WarningEnum *)warning;

- (void)onErrorWithARPIFileListResultCallback_ErrorEnum:(ARPIFileListResultCallback_ErrorEnum *)error;

- (void)onErrorWithARPIFile:(id<ARPIFile>)file
withARPIFileListResultCallback_ErrorEnum:(ARPIFileListResultCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIFileListResultCallback_init() {}

#define MeAdaptiveArpApiIFileListResultCallback ARPIFileListResultCallback

typedef enum {
  ARPIFileListResultCallback_Warning_PartialResult = 0,
} ARPIFileListResultCallback_Warning;

@interface ARPIFileListResultCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIFileListResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIFileListResultCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIFileListResultCallback_WarningEnum)

FOUNDATION_EXPORT ARPIFileListResultCallback_WarningEnum *ARPIFileListResultCallback_WarningEnum_values[];

#define ARPIFileListResultCallback_WarningEnum_PartialResult ARPIFileListResultCallback_WarningEnum_values[ARPIFileListResultCallback_Warning_PartialResult]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileListResultCallback_WarningEnum, PartialResult, ARPIFileListResultCallback_WarningEnum *)

typedef enum {
  ARPIFileListResultCallback_Error_InexistentFile = 0,
  ARPIFileListResultCallback_Error_Unauthorized = 1,
} ARPIFileListResultCallback_Error;

@interface ARPIFileListResultCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIFileListResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIFileListResultCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIFileListResultCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIFileListResultCallback_ErrorEnum *ARPIFileListResultCallback_ErrorEnum_values[];

#define ARPIFileListResultCallback_ErrorEnum_InexistentFile ARPIFileListResultCallback_ErrorEnum_values[ARPIFileListResultCallback_Error_InexistentFile]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileListResultCallback_ErrorEnum, InexistentFile, ARPIFileListResultCallback_ErrorEnum *)

#define ARPIFileListResultCallback_ErrorEnum_Unauthorized ARPIFileListResultCallback_ErrorEnum_values[ARPIFileListResultCallback_Error_Unauthorized]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileListResultCallback_ErrorEnum, Unauthorized, ARPIFileListResultCallback_ErrorEnum *)

#endif // _ARPIFileListResultCallback_H_
