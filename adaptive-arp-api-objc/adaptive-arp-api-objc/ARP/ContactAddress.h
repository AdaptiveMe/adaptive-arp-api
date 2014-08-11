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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/ContactAddress.java
//
//

#ifndef _ARPContactAddress_H_
#define _ARPContactAddress_H_

@class ARPContactAddress_AddressTypeEnum;

#import "JreEmulation.h"
#include "java/io/Serializable.h"
#include "java/lang/Enum.h"

@interface ARPContactAddress : NSObject < JavaIoSerializable > {
 @public
  NSString *address_;
  ARPContactAddress_AddressTypeEnum *type_;
}

- (id)initWithNSString:(NSString *)address
withARPContactAddress_AddressTypeEnum:(ARPContactAddress_AddressTypeEnum *)type;

- (NSString *)getAddress;

- (void)setAddressWithNSString:(NSString *)address;

- (ARPContactAddress_AddressTypeEnum *)getType;

- (void)setTypeWithARPContactAddress_AddressTypeEnum:(ARPContactAddress_AddressTypeEnum *)type;

- (void)copyAllFieldsTo:(ARPContactAddress *)other;

@end

__attribute__((always_inline)) inline void ARPContactAddress_init() {}

J2OBJC_FIELD_SETTER(ARPContactAddress, address_, NSString *)
J2OBJC_FIELD_SETTER(ARPContactAddress, type_, ARPContactAddress_AddressTypeEnum *)

typedef ARPContactAddress MeAdaptiveArpApiContactAddress;

typedef enum {
  ARPContactAddress_AddressType_Home = 0,
  ARPContactAddress_AddressType_Work = 1,
  ARPContactAddress_AddressType_Other = 2,
} ARPContactAddress_AddressType;

@interface ARPContactAddress_AddressTypeEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPContactAddress_AddressTypeEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPContactAddress_AddressTypeEnum_initialized;
J2OBJC_STATIC_INIT(ARPContactAddress_AddressTypeEnum)

FOUNDATION_EXPORT ARPContactAddress_AddressTypeEnum *ARPContactAddress_AddressTypeEnum_values[];

#define ARPContactAddress_AddressTypeEnum_Home ARPContactAddress_AddressTypeEnum_values[ARPContactAddress_AddressType_Home]
J2OBJC_STATIC_FIELD_GETTER(ARPContactAddress_AddressTypeEnum, Home, ARPContactAddress_AddressTypeEnum *)

#define ARPContactAddress_AddressTypeEnum_Work ARPContactAddress_AddressTypeEnum_values[ARPContactAddress_AddressType_Work]
J2OBJC_STATIC_FIELD_GETTER(ARPContactAddress_AddressTypeEnum, Work, ARPContactAddress_AddressTypeEnum *)

#define ARPContactAddress_AddressTypeEnum_Other ARPContactAddress_AddressTypeEnum_values[ARPContactAddress_AddressType_Other]
J2OBJC_STATIC_FIELD_GETTER(ARPContactAddress_AddressTypeEnum, Other, ARPContactAddress_AddressTypeEnum *)

#endif // _ARPContactAddress_H_
