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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Contact.java
//
//

#include "Contact.h"
#include "ContactPersonalInfo.h"
#include "ContactProfessionalInfo.h"
#include "IOSObjectArray.h"

@implementation ARPContact

- (id)initWithNSString:(NSString *)contactId {
  return [super initWithNSString:contactId];
}

- (ARPContactPersonalInfo *)getPersonalInfo {
  return personalInfo_;
}

- (void)setPersonalInfoWithARPContactPersonalInfo:(ARPContactPersonalInfo *)personalInfo {
  self->personalInfo_ = personalInfo;
}

- (ARPContactProfessionalInfo *)getProfessionalInfo {
  return professionalInfo_;
}

- (void)setProfessionalInfoWithARPContactProfessionalInfo:(ARPContactProfessionalInfo *)professionalInfo {
  self->professionalInfo_ = professionalInfo;
}

- (IOSObjectArray *)getContactAddresses {
  return contactAddresses_;
}

- (void)setContactAddressesWithARPContactAddressArray:(IOSObjectArray *)contactAddresses {
  self->contactAddresses_ = contactAddresses;
}

- (IOSObjectArray *)getContactPhones {
  return contactPhones_;
}

- (void)setContactPhonesWithARPContactPhoneArray:(IOSObjectArray *)contactPhones {
  self->contactPhones_ = contactPhones;
}

- (IOSObjectArray *)getContactEmails {
  return contactEmails_;
}

- (void)setContactEmailsWithARPContactEmailArray:(IOSObjectArray *)contactEmails {
  self->contactEmails_ = contactEmails;
}

- (IOSObjectArray *)getContactWebsites {
  return contactWebsites_;
}

- (void)setContactWebsitesWithARPContactWebsiteArray:(IOSObjectArray *)contactWebsites {
  self->contactWebsites_ = contactWebsites;
}

- (IOSObjectArray *)getContactSocials {
  return contactSocials_;
}

- (void)setContactSocialsWithARPContactSocialArray:(IOSObjectArray *)contactSocials {
  self->contactSocials_ = contactSocials;
}

- (IOSObjectArray *)getContactTags {
  return contactTags_;
}

- (void)setContactTagsWithARPContactTagArray:(IOSObjectArray *)contactTags {
  self->contactTags_ = contactTags;
}

- (void)copyAllFieldsTo:(ARPContact *)other {
  [super copyAllFieldsTo:other];
  other->contactAddresses_ = contactAddresses_;
  other->contactEmails_ = contactEmails_;
  other->contactPhones_ = contactPhones_;
  other->contactSocials_ = contactSocials_;
  other->contactTags_ = contactTags_;
  other->contactWebsites_ = contactWebsites_;
  other->personalInfo_ = personalInfo_;
  other->professionalInfo_ = professionalInfo_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:", "Contact", NULL, 0x1, NULL },
    { "getPersonalInfo", NULL, "Lme.adaptive.arp.api.ContactPersonalInfo;", 0x1, NULL },
    { "setPersonalInfoWithARPContactPersonalInfo:", "setPersonalInfo", "V", 0x1, NULL },
    { "getProfessionalInfo", NULL, "Lme.adaptive.arp.api.ContactProfessionalInfo;", 0x1, NULL },
    { "setProfessionalInfoWithARPContactProfessionalInfo:", "setProfessionalInfo", "V", 0x1, NULL },
    { "getContactAddresses", NULL, "[Lme.adaptive.arp.api.ContactAddress;", 0x1, NULL },
    { "setContactAddressesWithARPContactAddressArray:", "setContactAddresses", "V", 0x1, NULL },
    { "getContactPhones", NULL, "[Lme.adaptive.arp.api.ContactPhone;", 0x1, NULL },
    { "setContactPhonesWithARPContactPhoneArray:", "setContactPhones", "V", 0x1, NULL },
    { "getContactEmails", NULL, "[Lme.adaptive.arp.api.ContactEmail;", 0x1, NULL },
    { "setContactEmailsWithARPContactEmailArray:", "setContactEmails", "V", 0x1, NULL },
    { "getContactWebsites", NULL, "[Lme.adaptive.arp.api.ContactWebsite;", 0x1, NULL },
    { "setContactWebsitesWithARPContactWebsiteArray:", "setContactWebsites", "V", 0x1, NULL },
    { "getContactSocials", NULL, "[Lme.adaptive.arp.api.ContactSocial;", 0x1, NULL },
    { "setContactSocialsWithARPContactSocialArray:", "setContactSocials", "V", 0x1, NULL },
    { "getContactTags", NULL, "[Lme.adaptive.arp.api.ContactTag;", 0x1, NULL },
    { "setContactTagsWithARPContactTagArray:", "setContactTags", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "personalInfo_", NULL, 0x2, "Lme.adaptive.arp.api.ContactPersonalInfo;", NULL,  },
    { "professionalInfo_", NULL, 0x2, "Lme.adaptive.arp.api.ContactProfessionalInfo;", NULL,  },
    { "contactAddresses_", NULL, 0x2, "[Lme.adaptive.arp.api.ContactAddress;", NULL,  },
    { "contactPhones_", NULL, 0x2, "[Lme.adaptive.arp.api.ContactPhone;", NULL,  },
    { "contactEmails_", NULL, 0x2, "[Lme.adaptive.arp.api.ContactEmail;", NULL,  },
    { "contactWebsites_", NULL, 0x2, "[Lme.adaptive.arp.api.ContactWebsite;", NULL,  },
    { "contactSocials_", NULL, 0x2, "[Lme.adaptive.arp.api.ContactSocial;", NULL,  },
    { "contactTags_", NULL, 0x2, "[Lme.adaptive.arp.api.ContactTag;", NULL,  },
  };
  static J2ObjcClassInfo _ARPContact = { "Contact", "me.adaptive.arp.api", NULL, 0x1, 17, methods, 8, fields, 0, NULL};
  return &_ARPContact;
}

@end
