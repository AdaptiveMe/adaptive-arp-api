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

#include "Locale.h"

@implementation ARPLocale

- (id)init {
  return [super init];
}

- (id)initWithNSString:(NSString *)language
          withNSString:(NSString *)country {
  if (self = [super init]) {
    self->country_ = country;
    self->language_ = language;
  }
  return self;
}

- (NSString *)getCountry {
  return country_;
}

- (void)setCountryWithNSString:(NSString *)country {
  self->country_ = country;
}

- (NSString *)getLanguage {
  return language_;
}

- (void)setLanguageWithNSString:(NSString *)language {
  self->language_ = language;
}

- (NSString *)description {
  return [NSString stringWithFormat:@"%@%@", [((NSString *) nil_chk(self->language_)) lowercaseString], ([((NSString *) nil_chk(self->country_)) uppercaseString] != nil ? [NSString stringWithFormat:@"-%@", [self->country_ uppercaseString]] : @"")];
}

- (void)copyAllFieldsTo:(ARPLocale *)other {
  [super copyAllFieldsTo:other];
  other->country_ = country_;
  other->language_ = language_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", "Locale", NULL, 0x1, NULL },
    { "initWithNSString:withNSString:", "Locale", NULL, 0x1, NULL },
    { "getCountry", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setCountryWithNSString:", "setCountry", "V", 0x1, NULL },
    { "getLanguage", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setLanguageWithNSString:", "setLanguage", "V", 0x1, NULL },
    { "description", "toString", "Ljava.lang.String;", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "country_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "language_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPLocale = { "Locale", "me.adaptive.arp.api", NULL, 0x1, 7, methods, 2, fields, 0, NULL};
  return &_ARPLocale;
}

@end
