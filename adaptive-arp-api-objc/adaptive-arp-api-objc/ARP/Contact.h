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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Contact.java
//
//

#ifndef _ARPContact_H_
#define _ARPContact_H_

@class ARPContactPersonalInfo;
@class ARPContactProfessionalInfo;
@class IOSObjectArray;

#import "JreEmulation.h"
#include "ContactUid.h"
#include "java/io/Serializable.h"

@interface ARPContact : ARPContactUid < JavaIoSerializable > {
 @public
  ARPContactPersonalInfo *personalInfo_;
  ARPContactProfessionalInfo *professionalInfo_;
  IOSObjectArray *contactAddresses_;
  IOSObjectArray *contactPhones_;
  IOSObjectArray *contactEmails_;
  IOSObjectArray *contactWebsites_;
  IOSObjectArray *contactSocials_;
  IOSObjectArray *contactTags_;
}

- (id)initWithNSString:(NSString *)contactId;

- (ARPContactPersonalInfo *)getPersonalInfo;

- (void)setPersonalInfoWithARPContactPersonalInfo:(ARPContactPersonalInfo *)personalInfo;

- (ARPContactProfessionalInfo *)getProfessionalInfo;

- (void)setProfessionalInfoWithARPContactProfessionalInfo:(ARPContactProfessionalInfo *)professionalInfo;

- (IOSObjectArray *)getContactAddresses;

- (void)setContactAddressesWithARPContactAddressArray:(IOSObjectArray *)contactAddresses;

- (IOSObjectArray *)getContactPhones;

- (void)setContactPhonesWithARPContactPhoneArray:(IOSObjectArray *)contactPhones;

- (IOSObjectArray *)getContactEmails;

- (void)setContactEmailsWithARPContactEmailArray:(IOSObjectArray *)contactEmails;

- (IOSObjectArray *)getContactWebsites;

- (void)setContactWebsitesWithARPContactWebsiteArray:(IOSObjectArray *)contactWebsites;

- (IOSObjectArray *)getContactSocials;

- (void)setContactSocialsWithARPContactSocialArray:(IOSObjectArray *)contactSocials;

- (IOSObjectArray *)getContactTags;

- (void)setContactTagsWithARPContactTagArray:(IOSObjectArray *)contactTags;

- (void)copyAllFieldsTo:(ARPContact *)other;

@end

__attribute__((always_inline)) inline void ARPContact_init() {}

J2OBJC_FIELD_SETTER(ARPContact, personalInfo_, ARPContactPersonalInfo *)
J2OBJC_FIELD_SETTER(ARPContact, professionalInfo_, ARPContactProfessionalInfo *)
J2OBJC_FIELD_SETTER(ARPContact, contactAddresses_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPContact, contactPhones_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPContact, contactEmails_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPContact, contactWebsites_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPContact, contactSocials_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPContact, contactTags_, IOSObjectArray *)

typedef ARPContact MeAdaptiveArpApiContact;

#endif // _ARPContact_H_
