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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IContact.java
//
//

#ifndef _ARPIContact_H_
#define _ARPIContact_H_

@class ARPContactUid;
@class IOSByteArray;
@class IOSObjectArray;
@protocol ARPIContactResultCallback;

#import "JreEmulation.h"
#include "IBasePIM.h"
#include "java/io/Serializable.h"
#include "java/lang/Enum.h"

@protocol ARPIContact < ARPIBasePIM, JavaIoSerializable, NSObject, JavaObject >
- (void)searchContactsWithNSString:(NSString *)term
     withARPIContactResultCallback:(id<ARPIContactResultCallback>)callback;

- (void)searchContactsWithNSString:(NSString *)term
     withARPIContactResultCallback:(id<ARPIContactResultCallback>)callback
   withARPIContact_FilterEnumArray:(IOSObjectArray *)filter;

- (void)getContactWithARPContactUid:(ARPContactUid *)contact
      withARPIContactResultCallback:(id<ARPIContactResultCallback>)callback;

- (void)getContactPhotoWithARPContactUid:(ARPContactUid *)contact
           withARPIContactResultCallback:(id<ARPIContactResultCallback>)callback;

- (BOOL)setContactPhotoWithARPContactUid:(ARPContactUid *)contact
                           withByteArray:(IOSByteArray *)pngImage;

- (void)getContactsWithARPIContactResultCallback:(id<ARPIContactResultCallback>)callback;

- (void)getContactsWithARPIContactResultCallback:(id<ARPIContactResultCallback>)callback
             withARPIContact_FieldGroupEnumArray:(IOSObjectArray *)fields;

- (void)getContactsWithARPIContactResultCallback:(id<ARPIContactResultCallback>)callback
             withARPIContact_FieldGroupEnumArray:(IOSObjectArray *)fields
                 withARPIContact_FilterEnumArray:(IOSObjectArray *)filter;

@end

__attribute__((always_inline)) inline void ARPIContact_init() {}

#define MeAdaptiveArpApiIContact ARPIContact

typedef enum {
  ARPIContact_Filter_HAS_PHONE = 0,
  ARPIContact_Filter_HAS_EMAIL = 1,
  ARPIContact_Filter_HAS_ADDRESS = 2,
} ARPIContact_Filter;

@interface ARPIContact_FilterEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIContact_FilterEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIContact_FilterEnum_initialized;
J2OBJC_STATIC_INIT(ARPIContact_FilterEnum)

FOUNDATION_EXPORT ARPIContact_FilterEnum *ARPIContact_FilterEnum_values[];

#define ARPIContact_FilterEnum_HAS_PHONE ARPIContact_FilterEnum_values[ARPIContact_Filter_HAS_PHONE]
J2OBJC_STATIC_FIELD_GETTER(ARPIContact_FilterEnum, HAS_PHONE, ARPIContact_FilterEnum *)

#define ARPIContact_FilterEnum_HAS_EMAIL ARPIContact_FilterEnum_values[ARPIContact_Filter_HAS_EMAIL]
J2OBJC_STATIC_FIELD_GETTER(ARPIContact_FilterEnum, HAS_EMAIL, ARPIContact_FilterEnum *)

#define ARPIContact_FilterEnum_HAS_ADDRESS ARPIContact_FilterEnum_values[ARPIContact_Filter_HAS_ADDRESS]
J2OBJC_STATIC_FIELD_GETTER(ARPIContact_FilterEnum, HAS_ADDRESS, ARPIContact_FilterEnum *)

typedef enum {
  ARPIContact_FieldGroup_PERSONAL_INFO = 0,
  ARPIContact_FieldGroup_PROFESSIONAL_INFO = 1,
  ARPIContact_FieldGroup_ADDRESSES = 2,
  ARPIContact_FieldGroup_PHONES = 3,
  ARPIContact_FieldGroup_EMAILS = 4,
  ARPIContact_FieldGroup_WEBSITES = 5,
  ARPIContact_FieldGroup_SOCIALS = 6,
  ARPIContact_FieldGroup_TAGS = 7,
} ARPIContact_FieldGroup;

@interface ARPIContact_FieldGroupEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIContact_FieldGroupEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIContact_FieldGroupEnum_initialized;
J2OBJC_STATIC_INIT(ARPIContact_FieldGroupEnum)

FOUNDATION_EXPORT ARPIContact_FieldGroupEnum *ARPIContact_FieldGroupEnum_values[];

#define ARPIContact_FieldGroupEnum_PERSONAL_INFO ARPIContact_FieldGroupEnum_values[ARPIContact_FieldGroup_PERSONAL_INFO]
J2OBJC_STATIC_FIELD_GETTER(ARPIContact_FieldGroupEnum, PERSONAL_INFO, ARPIContact_FieldGroupEnum *)

#define ARPIContact_FieldGroupEnum_PROFESSIONAL_INFO ARPIContact_FieldGroupEnum_values[ARPIContact_FieldGroup_PROFESSIONAL_INFO]
J2OBJC_STATIC_FIELD_GETTER(ARPIContact_FieldGroupEnum, PROFESSIONAL_INFO, ARPIContact_FieldGroupEnum *)

#define ARPIContact_FieldGroupEnum_ADDRESSES ARPIContact_FieldGroupEnum_values[ARPIContact_FieldGroup_ADDRESSES]
J2OBJC_STATIC_FIELD_GETTER(ARPIContact_FieldGroupEnum, ADDRESSES, ARPIContact_FieldGroupEnum *)

#define ARPIContact_FieldGroupEnum_PHONES ARPIContact_FieldGroupEnum_values[ARPIContact_FieldGroup_PHONES]
J2OBJC_STATIC_FIELD_GETTER(ARPIContact_FieldGroupEnum, PHONES, ARPIContact_FieldGroupEnum *)

#define ARPIContact_FieldGroupEnum_EMAILS ARPIContact_FieldGroupEnum_values[ARPIContact_FieldGroup_EMAILS]
J2OBJC_STATIC_FIELD_GETTER(ARPIContact_FieldGroupEnum, EMAILS, ARPIContact_FieldGroupEnum *)

#define ARPIContact_FieldGroupEnum_WEBSITES ARPIContact_FieldGroupEnum_values[ARPIContact_FieldGroup_WEBSITES]
J2OBJC_STATIC_FIELD_GETTER(ARPIContact_FieldGroupEnum, WEBSITES, ARPIContact_FieldGroupEnum *)

#define ARPIContact_FieldGroupEnum_SOCIALS ARPIContact_FieldGroupEnum_values[ARPIContact_FieldGroup_SOCIALS]
J2OBJC_STATIC_FIELD_GETTER(ARPIContact_FieldGroupEnum, SOCIALS, ARPIContact_FieldGroupEnum *)

#define ARPIContact_FieldGroupEnum_TAGS ARPIContact_FieldGroupEnum_values[ARPIContact_FieldGroup_TAGS]
J2OBJC_STATIC_FIELD_GETTER(ARPIContact_FieldGroupEnum, TAGS, ARPIContact_FieldGroupEnum *)

#endif // _ARPIContact_H_
