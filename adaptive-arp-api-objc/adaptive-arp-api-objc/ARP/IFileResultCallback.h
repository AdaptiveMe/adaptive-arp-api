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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IFileResultCallback.java
//
//

#ifndef _ARPIFileResultCallback_H_
#define _ARPIFileResultCallback_H_

@class ARPIFileResultCallback_ErrorEnum;
@class ARPIFileResultCallback_WarningEnum;
@protocol ARPIFile;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@protocol ARPIFileResultCallback < NSObject, JavaObject >

- (void)onResultWithARPIFile:(id<ARPIFile>)storageFile;

- (void)onWarningWithARPIFile:(id<ARPIFile>)sourceFile
                 withARPIFile:(id<ARPIFile>)destinationFile
withARPIFileResultCallback_WarningEnum:(ARPIFileResultCallback_WarningEnum *)warning;

- (void)onErrorWithARPIFileResultCallback_ErrorEnum:(ARPIFileResultCallback_ErrorEnum *)error;

- (void)onErrorWithARPIFile:(id<ARPIFile>)file
withARPIFileResultCallback_ErrorEnum:(ARPIFileResultCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIFileResultCallback_init() {}

#define MeAdaptiveArpApiIFileResultCallback ARPIFileResultCallback

typedef enum {
  ARPIFileResultCallback_Warning_SourceNotDeleted = 0,
  ARPIFileResultCallback_Warning_RootDirectory = 1,
} ARPIFileResultCallback_Warning;

@interface ARPIFileResultCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIFileResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIFileResultCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIFileResultCallback_WarningEnum)

FOUNDATION_EXPORT ARPIFileResultCallback_WarningEnum *ARPIFileResultCallback_WarningEnum_values[];

#define ARPIFileResultCallback_WarningEnum_SourceNotDeleted ARPIFileResultCallback_WarningEnum_values[ARPIFileResultCallback_Warning_SourceNotDeleted]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileResultCallback_WarningEnum, SourceNotDeleted, ARPIFileResultCallback_WarningEnum *)

#define ARPIFileResultCallback_WarningEnum_RootDirectory ARPIFileResultCallback_WarningEnum_values[ARPIFileResultCallback_Warning_RootDirectory]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileResultCallback_WarningEnum, RootDirectory, ARPIFileResultCallback_WarningEnum *)

typedef enum {
  ARPIFileResultCallback_Error_FileExists = 0,
  ARPIFileResultCallback_Error_InsufficientSpace = 1,
  ARPIFileResultCallback_Error_Unauthorized = 2,
} ARPIFileResultCallback_Error;

@interface ARPIFileResultCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIFileResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIFileResultCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIFileResultCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIFileResultCallback_ErrorEnum *ARPIFileResultCallback_ErrorEnum_values[];

#define ARPIFileResultCallback_ErrorEnum_FileExists ARPIFileResultCallback_ErrorEnum_values[ARPIFileResultCallback_Error_FileExists]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileResultCallback_ErrorEnum, FileExists, ARPIFileResultCallback_ErrorEnum *)

#define ARPIFileResultCallback_ErrorEnum_InsufficientSpace ARPIFileResultCallback_ErrorEnum_values[ARPIFileResultCallback_Error_InsufficientSpace]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileResultCallback_ErrorEnum, InsufficientSpace, ARPIFileResultCallback_ErrorEnum *)

#define ARPIFileResultCallback_ErrorEnum_Unauthorized ARPIFileResultCallback_ErrorEnum_values[ARPIFileResultCallback_Error_Unauthorized]
J2OBJC_STATIC_FIELD_GETTER(ARPIFileResultCallback_ErrorEnum, Unauthorized, ARPIFileResultCallback_ErrorEnum *)

#endif // _ARPIFileResultCallback_H_
