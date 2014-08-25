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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ContactProfessionalInfo.java
//
//

#ifndef _ARPContactProfessionalInfo_H_
#define _ARPContactProfessionalInfo_H_

#import "JreEmulation.h"

@interface ARPContactProfessionalInfo : NSObject {
 @public
  NSString *company_;
  NSString *jobTitle_;
  NSString *jobDescription_;
}

- (id)initWithNSString:(NSString *)jobTitle
          withNSString:(NSString *)jobDescription
          withNSString:(NSString *)company;

- (id)init;

- (NSString *)getCompany;

- (void)setCompanyWithNSString:(NSString *)company;

- (NSString *)getJobTitle;

- (void)setJobTitleWithNSString:(NSString *)jobTitle;

- (NSString *)getJobDescription;

- (void)setJobDescriptionWithNSString:(NSString *)jobDescription;

- (void)copyAllFieldsTo:(ARPContactProfessionalInfo *)other;

@end

__attribute__((always_inline)) inline void ARPContactProfessionalInfo_init() {}

J2OBJC_FIELD_SETTER(ARPContactProfessionalInfo, company_, NSString *)
J2OBJC_FIELD_SETTER(ARPContactProfessionalInfo, jobTitle_, NSString *)
J2OBJC_FIELD_SETTER(ARPContactProfessionalInfo, jobDescription_, NSString *)

typedef ARPContactProfessionalInfo MeAdaptiveArpApiContactProfessionalInfo;

#endif // _ARPContactProfessionalInfo_H_
