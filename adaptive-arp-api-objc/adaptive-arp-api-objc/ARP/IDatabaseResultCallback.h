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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IDatabaseResultCallback.java
//
//

#ifndef _ARPIDatabaseResultCallback_H_
#define _ARPIDatabaseResultCallback_H_

@class ARPDatabase;
@class ARPIDatabaseResultCallback_ErrorEnum;
@class ARPIDatabaseResultCallback_WarningEnum;

#import "JreEmulation.h"
#include "IBaseCallback.h"
#include "java/lang/Enum.h"

@protocol ARPIDatabaseResultCallback < ARPIBaseCallback, NSObject, JavaObject >
- (void)onResultWithARPDatabase:(ARPDatabase *)database;

- (void)onWarningWithARPDatabase:(ARPDatabase *)database
withARPIDatabaseResultCallback_WarningEnum:(ARPIDatabaseResultCallback_WarningEnum *)warning;

- (void)onErrorWithARPIDatabaseResultCallback_ErrorEnum:(ARPIDatabaseResultCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPIDatabaseResultCallback_init() {}

#define MeAdaptiveArpApiIDatabaseResultCallback ARPIDatabaseResultCallback

typedef enum {
  ARPIDatabaseResultCallback_Warning_DatabaseExists = 0,
} ARPIDatabaseResultCallback_Warning;

@interface ARPIDatabaseResultCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIDatabaseResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIDatabaseResultCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPIDatabaseResultCallback_WarningEnum)

FOUNDATION_EXPORT ARPIDatabaseResultCallback_WarningEnum *ARPIDatabaseResultCallback_WarningEnum_values[];

#define ARPIDatabaseResultCallback_WarningEnum_DatabaseExists ARPIDatabaseResultCallback_WarningEnum_values[ARPIDatabaseResultCallback_Warning_DatabaseExists]
J2OBJC_STATIC_FIELD_GETTER(ARPIDatabaseResultCallback_WarningEnum, DatabaseExists, ARPIDatabaseResultCallback_WarningEnum *)

typedef enum {
  ARPIDatabaseResultCallback_Error_NoSpace = 0,
  ARPIDatabaseResultCallback_Error_SqlException = 1,
} ARPIDatabaseResultCallback_Error;

@interface ARPIDatabaseResultCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIDatabaseResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIDatabaseResultCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPIDatabaseResultCallback_ErrorEnum)

FOUNDATION_EXPORT ARPIDatabaseResultCallback_ErrorEnum *ARPIDatabaseResultCallback_ErrorEnum_values[];

#define ARPIDatabaseResultCallback_ErrorEnum_NoSpace ARPIDatabaseResultCallback_ErrorEnum_values[ARPIDatabaseResultCallback_Error_NoSpace]
J2OBJC_STATIC_FIELD_GETTER(ARPIDatabaseResultCallback_ErrorEnum, NoSpace, ARPIDatabaseResultCallback_ErrorEnum *)

#define ARPIDatabaseResultCallback_ErrorEnum_SqlException ARPIDatabaseResultCallback_ErrorEnum_values[ARPIDatabaseResultCallback_Error_SqlException]
J2OBJC_STATIC_FIELD_GETTER(ARPIDatabaseResultCallback_ErrorEnum, SqlException, ARPIDatabaseResultCallback_ErrorEnum *)

#endif // _ARPIDatabaseResultCallback_H_
