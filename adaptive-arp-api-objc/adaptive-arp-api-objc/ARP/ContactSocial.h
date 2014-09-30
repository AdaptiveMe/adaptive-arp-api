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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ContactSocial.java
//
//

#ifndef _ARPContactSocial_H_
#define _ARPContactSocial_H_

@class ARPContactSocial_SocialNetworkEnum;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@interface ARPContactSocial : NSObject {
 @public
  ARPContactSocial_SocialNetworkEnum *socialNetwork_;
  NSString *profileUrl_;
}

- (id)initWithARPContactSocial_SocialNetworkEnum:(ARPContactSocial_SocialNetworkEnum *)socialNetwork
                                    withNSString:(NSString *)profileUrl;

- (id)init;

- (ARPContactSocial_SocialNetworkEnum *)getSocialNetwork;

- (void)setSocialNetworkWithARPContactSocial_SocialNetworkEnum:(ARPContactSocial_SocialNetworkEnum *)socialNetwork;

- (NSString *)getProfileUrl;

- (void)setProfileUrlWithNSString:(NSString *)profileUrl;

- (void)copyAllFieldsTo:(ARPContactSocial *)other;

@end

__attribute__((always_inline)) inline void ARPContactSocial_init() {}

J2OBJC_FIELD_SETTER(ARPContactSocial, socialNetwork_, ARPContactSocial_SocialNetworkEnum *)
J2OBJC_FIELD_SETTER(ARPContactSocial, profileUrl_, NSString *)

typedef ARPContactSocial MeAdaptiveArpApiContactSocial;

typedef enum {
  ARPContactSocial_SocialNetwork_Twitter = 0,
  ARPContactSocial_SocialNetwork_Facebook = 1,
  ARPContactSocial_SocialNetwork_GooglePlus = 2,
  ARPContactSocial_SocialNetwork_LinkedIn = 3,
  ARPContactSocial_SocialNetwork_Flickr = 4,
} ARPContactSocial_SocialNetwork;

@interface ARPContactSocial_SocialNetworkEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPContactSocial_SocialNetworkEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPContactSocial_SocialNetworkEnum_initialized;
J2OBJC_STATIC_INIT(ARPContactSocial_SocialNetworkEnum)

FOUNDATION_EXPORT ARPContactSocial_SocialNetworkEnum *ARPContactSocial_SocialNetworkEnum_values[];

#define ARPContactSocial_SocialNetworkEnum_Twitter ARPContactSocial_SocialNetworkEnum_values[ARPContactSocial_SocialNetwork_Twitter]
J2OBJC_STATIC_FIELD_GETTER(ARPContactSocial_SocialNetworkEnum, Twitter, ARPContactSocial_SocialNetworkEnum *)

#define ARPContactSocial_SocialNetworkEnum_Facebook ARPContactSocial_SocialNetworkEnum_values[ARPContactSocial_SocialNetwork_Facebook]
J2OBJC_STATIC_FIELD_GETTER(ARPContactSocial_SocialNetworkEnum, Facebook, ARPContactSocial_SocialNetworkEnum *)

#define ARPContactSocial_SocialNetworkEnum_GooglePlus ARPContactSocial_SocialNetworkEnum_values[ARPContactSocial_SocialNetwork_GooglePlus]
J2OBJC_STATIC_FIELD_GETTER(ARPContactSocial_SocialNetworkEnum, GooglePlus, ARPContactSocial_SocialNetworkEnum *)

#define ARPContactSocial_SocialNetworkEnum_LinkedIn ARPContactSocial_SocialNetworkEnum_values[ARPContactSocial_SocialNetwork_LinkedIn]
J2OBJC_STATIC_FIELD_GETTER(ARPContactSocial_SocialNetworkEnum, LinkedIn, ARPContactSocial_SocialNetworkEnum *)

#define ARPContactSocial_SocialNetworkEnum_Flickr ARPContactSocial_SocialNetworkEnum_values[ARPContactSocial_SocialNetwork_Flickr]
J2OBJC_STATIC_FIELD_GETTER(ARPContactSocial_SocialNetworkEnum, Flickr, ARPContactSocial_SocialNetworkEnum *)

#endif // _ARPContactSocial_H_
