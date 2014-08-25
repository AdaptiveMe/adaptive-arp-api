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

#include "ContactProfessionalInfo.h"

@implementation ARPContactProfessionalInfo

- (id)initWithNSString:(NSString *)jobTitle
          withNSString:(NSString *)jobDescription
          withNSString:(NSString *)company {
  if (self = [super init]) {
    self->company_ = company;
    self->jobTitle_ = jobTitle;
    self->jobDescription_ = jobDescription;
  }
  return self;
}

- (id)init {
  return [super init];
}

- (NSString *)getCompany {
  return company_;
}

- (void)setCompanyWithNSString:(NSString *)company {
  self->company_ = company;
}

- (NSString *)getJobTitle {
  return jobTitle_;
}

- (void)setJobTitleWithNSString:(NSString *)jobTitle {
  self->jobTitle_ = jobTitle;
}

- (NSString *)getJobDescription {
  return jobDescription_;
}

- (void)setJobDescriptionWithNSString:(NSString *)jobDescription {
  self->jobDescription_ = jobDescription;
}

- (void)copyAllFieldsTo:(ARPContactProfessionalInfo *)other {
  [super copyAllFieldsTo:other];
  other->company_ = company_;
  other->jobDescription_ = jobDescription_;
  other->jobTitle_ = jobTitle_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:withNSString:withNSString:", "ContactProfessionalInfo", NULL, 0x1, NULL },
    { "init", "ContactProfessionalInfo", NULL, 0x1, NULL },
    { "getCompany", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setCompanyWithNSString:", "setCompany", "V", 0x1, NULL },
    { "getJobTitle", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setJobTitleWithNSString:", "setJobTitle", "V", 0x1, NULL },
    { "getJobDescription", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setJobDescriptionWithNSString:", "setJobDescription", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "company_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "jobTitle_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "jobDescription_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPContactProfessionalInfo = { "ContactProfessionalInfo", "me.adaptive.arp.api", NULL, 0x1, 8, methods, 3, fields, 0, NULL};
  return &_ARPContactProfessionalInfo;
}

@end
