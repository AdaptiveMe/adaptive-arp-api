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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Cookie.java
//
//

#ifndef _ARPCookie_H_
#define _ARPCookie_H_

#import "JreEmulation.h"

@interface ARPCookie : NSObject {
 @public
  NSString *name_;
  NSString *value_;
  NSString *domain_;
  NSString *path_;
  NSString *scheme_;
  BOOL secure_;
  long long int expiry_;
  long long int creation_;
}

- (id)initWithNSString:(NSString *)name
          withNSString:(NSString *)value;

- (id)init;

- (NSString *)getDomain;

- (void)setDomainWithNSString:(NSString *)domain;

- (NSString *)getPath;

- (void)setPathWithNSString:(NSString *)path;

- (NSString *)getScheme;

- (void)setSchemeWithNSString:(NSString *)scheme;

- (BOOL)isSecure;

- (void)setSecureWithBoolean:(BOOL)secure;

- (long long int)getExpiry;

- (void)setExpiryWithLong:(long long int)expiry;

- (NSString *)getName;

- (void)setNameWithNSString:(NSString *)name;

- (NSString *)getValue;

- (void)setValueWithNSString:(NSString *)value;

- (long long int)getCreation;

- (void)copyAllFieldsTo:(ARPCookie *)other;

@end

__attribute__((always_inline)) inline void ARPCookie_init() {}

J2OBJC_FIELD_SETTER(ARPCookie, name_, NSString *)
J2OBJC_FIELD_SETTER(ARPCookie, value_, NSString *)
J2OBJC_FIELD_SETTER(ARPCookie, domain_, NSString *)
J2OBJC_FIELD_SETTER(ARPCookie, path_, NSString *)
J2OBJC_FIELD_SETTER(ARPCookie, scheme_, NSString *)

typedef ARPCookie MeAdaptiveArpApiCookie;

#endif // _ARPCookie_H_
