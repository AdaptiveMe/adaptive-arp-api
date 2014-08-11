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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/ContactEmail.java
//
//

#ifndef _ARPContactEmail_H_
#define _ARPContactEmail_H_

@class ARPContactEmail_EmailTypeEnum;

#import "JreEmulation.h"
#include "java/io/Serializable.h"
#include "java/lang/Enum.h"

@interface ARPContactEmail : NSObject < JavaIoSerializable > {
 @public
  ARPContactEmail_EmailTypeEnum *type_;
  BOOL primary_;
  NSString *email_;
}

- (id)initWithARPContactEmail_EmailTypeEnum:(ARPContactEmail_EmailTypeEnum *)type
                                withBoolean:(BOOL)primary
                               withNSString:(NSString *)email;

- (ARPContactEmail_EmailTypeEnum *)getType;

- (void)setTypeWithARPContactEmail_EmailTypeEnum:(ARPContactEmail_EmailTypeEnum *)type;

- (BOOL)isPrimary;

- (void)setPrimaryWithBoolean:(BOOL)primary;

- (NSString *)getEmail;

- (void)setEmailWithNSString:(NSString *)email;

- (void)copyAllFieldsTo:(ARPContactEmail *)other;

@end

__attribute__((always_inline)) inline void ARPContactEmail_init() {}

J2OBJC_FIELD_SETTER(ARPContactEmail, type_, ARPContactEmail_EmailTypeEnum *)
J2OBJC_FIELD_SETTER(ARPContactEmail, email_, NSString *)

typedef ARPContactEmail MeAdaptiveArpApiContactEmail;

typedef enum {
  ARPContactEmail_EmailType_Personal = 0,
  ARPContactEmail_EmailType_Work = 1,
  ARPContactEmail_EmailType_Other = 2,
} ARPContactEmail_EmailType;

@interface ARPContactEmail_EmailTypeEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPContactEmail_EmailTypeEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPContactEmail_EmailTypeEnum_initialized;
J2OBJC_STATIC_INIT(ARPContactEmail_EmailTypeEnum)

FOUNDATION_EXPORT ARPContactEmail_EmailTypeEnum *ARPContactEmail_EmailTypeEnum_values[];

#define ARPContactEmail_EmailTypeEnum_Personal ARPContactEmail_EmailTypeEnum_values[ARPContactEmail_EmailType_Personal]
J2OBJC_STATIC_FIELD_GETTER(ARPContactEmail_EmailTypeEnum, Personal, ARPContactEmail_EmailTypeEnum *)

#define ARPContactEmail_EmailTypeEnum_Work ARPContactEmail_EmailTypeEnum_values[ARPContactEmail_EmailType_Work]
J2OBJC_STATIC_FIELD_GETTER(ARPContactEmail_EmailTypeEnum, Work, ARPContactEmail_EmailTypeEnum *)

#define ARPContactEmail_EmailTypeEnum_Other ARPContactEmail_EmailTypeEnum_values[ARPContactEmail_EmailType_Other]
J2OBJC_STATIC_FIELD_GETTER(ARPContactEmail_EmailTypeEnum, Other, ARPContactEmail_EmailTypeEnum *)

#endif // _ARPContactEmail_H_
