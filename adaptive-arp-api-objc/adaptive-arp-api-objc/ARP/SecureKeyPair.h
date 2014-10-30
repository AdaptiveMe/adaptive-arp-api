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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/SecureKeyPair.java
//
//

#ifndef _ARPSecureKeyPair_H_
#define _ARPSecureKeyPair_H_

#import "JreEmulation.h"

@interface ARPSecureKeyPair : NSObject {
 @public
  NSString *secureKey_;
  NSString *secureData_;
}

- (id)init;

- (id)initWithNSString:(NSString *)secureKey
          withNSString:(NSString *)secureData;

- (NSString *)getSecureKey;

- (void)setSecureKeyWithNSString:(NSString *)secureKey;

- (NSString *)getSecureData;

- (void)setSecureDataWithNSString:(NSString *)secureData;

- (void)copyAllFieldsTo:(ARPSecureKeyPair *)other;

@end

__attribute__((always_inline)) inline void ARPSecureKeyPair_init() {}

J2OBJC_FIELD_SETTER(ARPSecureKeyPair, secureKey_, NSString *)
J2OBJC_FIELD_SETTER(ARPSecureKeyPair, secureData_, NSString *)

typedef ARPSecureKeyPair MeAdaptiveArpApiSecureKeyPair;

#endif // _ARPSecureKeyPair_H_
