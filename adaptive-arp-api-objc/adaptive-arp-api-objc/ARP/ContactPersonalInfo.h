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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ContactPersonalInfo.java
//
//

#ifndef _ARPContactPersonalInfo_H_
#define _ARPContactPersonalInfo_H_

@class ARPContactPersonalInfo_TitleEnum;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@interface ARPContactPersonalInfo : NSObject {
 @public
  NSString *name_;
  NSString *middleName_;
  NSString *lastName_;
  ARPContactPersonalInfo_TitleEnum *title_;
}

- (id)initWithNSString:(NSString *)name
          withNSString:(NSString *)middleName
          withNSString:(NSString *)lastName
withARPContactPersonalInfo_TitleEnum:(ARPContactPersonalInfo_TitleEnum *)title;

- (id)init;

- (NSString *)getName;

- (void)setNameWithNSString:(NSString *)name;

- (NSString *)getMiddleName;

- (void)setMiddleNameWithNSString:(NSString *)middleName;

- (NSString *)getLastName;

- (void)setLastNameWithNSString:(NSString *)lastName;

- (ARPContactPersonalInfo_TitleEnum *)getTitle;

- (void)setTitleWithARPContactPersonalInfo_TitleEnum:(ARPContactPersonalInfo_TitleEnum *)title;

- (void)copyAllFieldsTo:(ARPContactPersonalInfo *)other;

@end

__attribute__((always_inline)) inline void ARPContactPersonalInfo_init() {}

J2OBJC_FIELD_SETTER(ARPContactPersonalInfo, name_, NSString *)
J2OBJC_FIELD_SETTER(ARPContactPersonalInfo, middleName_, NSString *)
J2OBJC_FIELD_SETTER(ARPContactPersonalInfo, lastName_, NSString *)
J2OBJC_FIELD_SETTER(ARPContactPersonalInfo, title_, ARPContactPersonalInfo_TitleEnum *)

typedef ARPContactPersonalInfo MeAdaptiveArpApiContactPersonalInfo;

typedef enum {
  ARPContactPersonalInfo_Title_Mr = 0,
  ARPContactPersonalInfo_Title_Mrs = 1,
  ARPContactPersonalInfo_Title_Ms = 2,
  ARPContactPersonalInfo_Title_Dr = 3,
} ARPContactPersonalInfo_Title;

@interface ARPContactPersonalInfo_TitleEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPContactPersonalInfo_TitleEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPContactPersonalInfo_TitleEnum_initialized;
J2OBJC_STATIC_INIT(ARPContactPersonalInfo_TitleEnum)

FOUNDATION_EXPORT ARPContactPersonalInfo_TitleEnum *ARPContactPersonalInfo_TitleEnum_values[];

#define ARPContactPersonalInfo_TitleEnum_Mr ARPContactPersonalInfo_TitleEnum_values[ARPContactPersonalInfo_Title_Mr]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPersonalInfo_TitleEnum, Mr, ARPContactPersonalInfo_TitleEnum *)

#define ARPContactPersonalInfo_TitleEnum_Mrs ARPContactPersonalInfo_TitleEnum_values[ARPContactPersonalInfo_Title_Mrs]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPersonalInfo_TitleEnum, Mrs, ARPContactPersonalInfo_TitleEnum *)

#define ARPContactPersonalInfo_TitleEnum_Ms ARPContactPersonalInfo_TitleEnum_values[ARPContactPersonalInfo_Title_Ms]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPersonalInfo_TitleEnum, Ms, ARPContactPersonalInfo_TitleEnum *)

#define ARPContactPersonalInfo_TitleEnum_Dr ARPContactPersonalInfo_TitleEnum_values[ARPContactPersonalInfo_Title_Dr]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPersonalInfo_TitleEnum, Dr, ARPContactPersonalInfo_TitleEnum *)

#endif // _ARPContactPersonalInfo_H_
