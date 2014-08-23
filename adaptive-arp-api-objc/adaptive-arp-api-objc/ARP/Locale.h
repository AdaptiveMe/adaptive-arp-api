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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Locale.java
//
//

#ifndef _ARPLocale_H_
#define _ARPLocale_H_

#import "JreEmulation.h"

@interface ARPLocale : NSObject {
 @public
  NSString *country_;
  NSString *language_;
}

- (id)initWithNSString:(NSString *)country
          withNSString:(NSString *)language;

- (NSString *)getCountry;

- (void)setCountryWithNSString:(NSString *)country;

- (NSString *)getLanguage;

- (void)setLanguageWithNSString:(NSString *)language;

- (void)copyAllFieldsTo:(ARPLocale *)other;

@end

__attribute__((always_inline)) inline void ARPLocale_init() {}

J2OBJC_FIELD_SETTER(ARPLocale, country_, NSString *)
J2OBJC_FIELD_SETTER(ARPLocale, language_, NSString *)

typedef ARPLocale MeAdaptiveArpApiLocale;

#endif // _ARPLocale_H_
