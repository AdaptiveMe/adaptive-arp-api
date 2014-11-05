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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ContactPhone.java
//
//

#ifndef _ARPContactPhone_H_
#define _ARPContactPhone_H_

@class ARPContactPhone_PhoneTypeEnum;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@interface ARPContactPhone : NSObject {
 @public
  NSString *phone_;
  ARPContactPhone_PhoneTypeEnum *phoneType_;
}

- (id)initWithNSString:(NSString *)phone
withARPContactPhone_PhoneTypeEnum:(ARPContactPhone_PhoneTypeEnum *)phoneType;

- (id)init;

- (NSString *)getPhone;

- (void)setPhoneWithNSString:(NSString *)phone;

- (ARPContactPhone_PhoneTypeEnum *)getPhoneType;

- (void)setPhoneTypeWithARPContactPhone_PhoneTypeEnum:(ARPContactPhone_PhoneTypeEnum *)phoneType;

- (void)copyAllFieldsTo:(ARPContactPhone *)other;

@end

__attribute__((always_inline)) inline void ARPContactPhone_init() {}

J2OBJC_FIELD_SETTER(ARPContactPhone, phone_, NSString *)
J2OBJC_FIELD_SETTER(ARPContactPhone, phoneType_, ARPContactPhone_PhoneTypeEnum *)

typedef ARPContactPhone MeAdaptiveArpApiContactPhone;

typedef enum {
  ARPContactPhone_PhoneType_Mobile = 0,
  ARPContactPhone_PhoneType_Work = 1,
  ARPContactPhone_PhoneType_Home = 2,
  ARPContactPhone_PhoneType_Main = 3,
  ARPContactPhone_PhoneType_HomeFax = 4,
  ARPContactPhone_PhoneType_WorkFax = 5,
  ARPContactPhone_PhoneType_Other = 6,
  ARPContactPhone_PhoneType_Unknown = 7,
} ARPContactPhone_PhoneType;

@interface ARPContactPhone_PhoneTypeEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPContactPhone_PhoneTypeEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPContactPhone_PhoneTypeEnum_initialized;
J2OBJC_STATIC_INIT(ARPContactPhone_PhoneTypeEnum)

FOUNDATION_EXPORT ARPContactPhone_PhoneTypeEnum *ARPContactPhone_PhoneTypeEnum_values[];

#define ARPContactPhone_PhoneTypeEnum_Mobile ARPContactPhone_PhoneTypeEnum_values[ARPContactPhone_PhoneType_Mobile]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPhone_PhoneTypeEnum, Mobile, ARPContactPhone_PhoneTypeEnum *)

#define ARPContactPhone_PhoneTypeEnum_Work ARPContactPhone_PhoneTypeEnum_values[ARPContactPhone_PhoneType_Work]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPhone_PhoneTypeEnum, Work, ARPContactPhone_PhoneTypeEnum *)

#define ARPContactPhone_PhoneTypeEnum_Home ARPContactPhone_PhoneTypeEnum_values[ARPContactPhone_PhoneType_Home]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPhone_PhoneTypeEnum, Home, ARPContactPhone_PhoneTypeEnum *)

#define ARPContactPhone_PhoneTypeEnum_Main ARPContactPhone_PhoneTypeEnum_values[ARPContactPhone_PhoneType_Main]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPhone_PhoneTypeEnum, Main, ARPContactPhone_PhoneTypeEnum *)

#define ARPContactPhone_PhoneTypeEnum_HomeFax ARPContactPhone_PhoneTypeEnum_values[ARPContactPhone_PhoneType_HomeFax]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPhone_PhoneTypeEnum, HomeFax, ARPContactPhone_PhoneTypeEnum *)

#define ARPContactPhone_PhoneTypeEnum_WorkFax ARPContactPhone_PhoneTypeEnum_values[ARPContactPhone_PhoneType_WorkFax]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPhone_PhoneTypeEnum, WorkFax, ARPContactPhone_PhoneTypeEnum *)

#define ARPContactPhone_PhoneTypeEnum_Other ARPContactPhone_PhoneTypeEnum_values[ARPContactPhone_PhoneType_Other]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPhone_PhoneTypeEnum, Other, ARPContactPhone_PhoneTypeEnum *)

#define ARPContactPhone_PhoneTypeEnum_Unknown ARPContactPhone_PhoneTypeEnum_values[ARPContactPhone_PhoneType_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPContactPhone_PhoneTypeEnum, Unknown, ARPContactPhone_PhoneTypeEnum *)

#endif // _ARPContactPhone_H_
