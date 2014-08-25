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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ITableResultCallback.java
//
//

#ifndef _ARPITableResultCallback_H_
#define _ARPITableResultCallback_H_

@class ARPITableResultCallback_ErrorEnum;
@class ARPITableResultCallback_WarningEnum;
@class ARPTable;

#import "JreEmulation.h"
#include "IBaseCallback.h"
#include "java/lang/Enum.h"

@protocol ARPITableResultCallback < ARPIBaseCallback, NSObject, JavaObject >
- (void)onResultWithARPTable:(ARPTable *)table;

- (void)onWarningWithARPTable:(ARPTable *)table
withARPITableResultCallback_WarningEnum:(ARPITableResultCallback_WarningEnum *)warning;

- (void)onErrorWithARPITableResultCallback_ErrorEnum:(ARPITableResultCallback_ErrorEnum *)error;

@end

__attribute__((always_inline)) inline void ARPITableResultCallback_init() {}

#define MeAdaptiveArpApiITableResultCallback ARPITableResultCallback

typedef enum {
  ARPITableResultCallback_Warning_TableExists = 0,
  ARPITableResultCallback_Warning_TableLocked = 1,
  ARPITableResultCallback_Warning_NoResults = 2,
} ARPITableResultCallback_Warning;

@interface ARPITableResultCallback_WarningEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPITableResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPITableResultCallback_WarningEnum_initialized;
J2OBJC_STATIC_INIT(ARPITableResultCallback_WarningEnum)

FOUNDATION_EXPORT ARPITableResultCallback_WarningEnum *ARPITableResultCallback_WarningEnum_values[];

#define ARPITableResultCallback_WarningEnum_TableExists ARPITableResultCallback_WarningEnum_values[ARPITableResultCallback_Warning_TableExists]
J2OBJC_STATIC_FIELD_GETTER(ARPITableResultCallback_WarningEnum, TableExists, ARPITableResultCallback_WarningEnum *)

#define ARPITableResultCallback_WarningEnum_TableLocked ARPITableResultCallback_WarningEnum_values[ARPITableResultCallback_Warning_TableLocked]
J2OBJC_STATIC_FIELD_GETTER(ARPITableResultCallback_WarningEnum, TableLocked, ARPITableResultCallback_WarningEnum *)

#define ARPITableResultCallback_WarningEnum_NoResults ARPITableResultCallback_WarningEnum_values[ARPITableResultCallback_Warning_NoResults]
J2OBJC_STATIC_FIELD_GETTER(ARPITableResultCallback_WarningEnum, NoResults, ARPITableResultCallback_WarningEnum *)

typedef enum {
  ARPITableResultCallback_Error_NoSpace = 0,
  ARPITableResultCallback_Error_ReadOnlyTable = 1,
  ARPITableResultCallback_Error_SqlException = 2,
} ARPITableResultCallback_Error;

@interface ARPITableResultCallback_ErrorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPITableResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPITableResultCallback_ErrorEnum_initialized;
J2OBJC_STATIC_INIT(ARPITableResultCallback_ErrorEnum)

FOUNDATION_EXPORT ARPITableResultCallback_ErrorEnum *ARPITableResultCallback_ErrorEnum_values[];

#define ARPITableResultCallback_ErrorEnum_NoSpace ARPITableResultCallback_ErrorEnum_values[ARPITableResultCallback_Error_NoSpace]
J2OBJC_STATIC_FIELD_GETTER(ARPITableResultCallback_ErrorEnum, NoSpace, ARPITableResultCallback_ErrorEnum *)

#define ARPITableResultCallback_ErrorEnum_ReadOnlyTable ARPITableResultCallback_ErrorEnum_values[ARPITableResultCallback_Error_ReadOnlyTable]
J2OBJC_STATIC_FIELD_GETTER(ARPITableResultCallback_ErrorEnum, ReadOnlyTable, ARPITableResultCallback_ErrorEnum *)

#define ARPITableResultCallback_ErrorEnum_SqlException ARPITableResultCallback_ErrorEnum_values[ARPITableResultCallback_Error_SqlException]
J2OBJC_STATIC_FIELD_GETTER(ARPITableResultCallback_ErrorEnum, SqlException, ARPITableResultCallback_ErrorEnum *)

#endif // _ARPITableResultCallback_H_
