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

#include "ContactSocial.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@implementation ARPContactSocial

- (id)initWithARPContactSocial_SocialNetworkEnum:(ARPContactSocial_SocialNetworkEnum *)socialNetwork
                                    withNSString:(NSString *)profileUrl {
  if (self = [super init]) {
    self->socialNetwork_ = socialNetwork;
    self->profileUrl_ = profileUrl;
  }
  return self;
}

- (id)init {
  return [super init];
}

- (ARPContactSocial_SocialNetworkEnum *)getSocialNetwork {
  return socialNetwork_;
}

- (void)setSocialNetworkWithARPContactSocial_SocialNetworkEnum:(ARPContactSocial_SocialNetworkEnum *)socialNetwork {
  self->socialNetwork_ = socialNetwork;
}

- (NSString *)getProfileUrl {
  return profileUrl_;
}

- (void)setProfileUrlWithNSString:(NSString *)profileUrl {
  self->profileUrl_ = profileUrl;
}

- (void)copyAllFieldsTo:(ARPContactSocial *)other {
  [super copyAllFieldsTo:other];
  other->profileUrl_ = profileUrl_;
  other->socialNetwork_ = socialNetwork_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithARPContactSocial_SocialNetworkEnum:withNSString:", "ContactSocial", NULL, 0x1, NULL },
    { "init", "ContactSocial", NULL, 0x1, NULL },
    { "getSocialNetwork", NULL, "Lme.adaptive.arp.api.ContactSocial$SocialNetwork;", 0x1, NULL },
    { "setSocialNetworkWithARPContactSocial_SocialNetworkEnum:", "setSocialNetwork", "V", 0x1, NULL },
    { "getProfileUrl", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setProfileUrlWithNSString:", "setProfileUrl", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "socialNetwork_", NULL, 0x2, "Lme.adaptive.arp.api.ContactSocial$SocialNetwork;", NULL,  },
    { "profileUrl_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPContactSocial = { "ContactSocial", "me.adaptive.arp.api", NULL, 0x1, 6, methods, 2, fields, 0, NULL};
  return &_ARPContactSocial;
}

@end

BOOL ARPContactSocial_SocialNetworkEnum_initialized = NO;

ARPContactSocial_SocialNetworkEnum *ARPContactSocial_SocialNetworkEnum_values[5];

@implementation ARPContactSocial_SocialNetworkEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPContactSocial_SocialNetworkEnum class]) {
    ARPContactSocial_SocialNetworkEnum_Twitter = [[ARPContactSocial_SocialNetworkEnum alloc] initWithNSString:@"Twitter" withInt:0];
    ARPContactSocial_SocialNetworkEnum_Facebook = [[ARPContactSocial_SocialNetworkEnum alloc] initWithNSString:@"Facebook" withInt:1];
    ARPContactSocial_SocialNetworkEnum_GooglePlus = [[ARPContactSocial_SocialNetworkEnum alloc] initWithNSString:@"GooglePlus" withInt:2];
    ARPContactSocial_SocialNetworkEnum_LinkedIn = [[ARPContactSocial_SocialNetworkEnum alloc] initWithNSString:@"LinkedIn" withInt:3];
    ARPContactSocial_SocialNetworkEnum_Flickr = [[ARPContactSocial_SocialNetworkEnum alloc] initWithNSString:@"Flickr" withInt:4];
    ARPContactSocial_SocialNetworkEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPContactSocial_SocialNetworkEnum_values count:5 type:[IOSClass classWithClass:[ARPContactSocial_SocialNetworkEnum class]]];
}

+ (ARPContactSocial_SocialNetworkEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 5; i++) {
    ARPContactSocial_SocialNetworkEnum *e = ARPContactSocial_SocialNetworkEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "Twitter", "Twitter", 0x4019, "Lme.adaptive.arp.api.ContactSocial$SocialNetwork;", &ARPContactSocial_SocialNetworkEnum_Twitter,  },
    { "Facebook", "Facebook", 0x4019, "Lme.adaptive.arp.api.ContactSocial$SocialNetwork;", &ARPContactSocial_SocialNetworkEnum_Facebook,  },
    { "GooglePlus", "GooglePlus", 0x4019, "Lme.adaptive.arp.api.ContactSocial$SocialNetwork;", &ARPContactSocial_SocialNetworkEnum_GooglePlus,  },
    { "LinkedIn", "LinkedIn", 0x4019, "Lme.adaptive.arp.api.ContactSocial$SocialNetwork;", &ARPContactSocial_SocialNetworkEnum_LinkedIn,  },
    { "Flickr", "Flickr", 0x4019, "Lme.adaptive.arp.api.ContactSocial$SocialNetwork;", &ARPContactSocial_SocialNetworkEnum_Flickr,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ContactSocial$SocialNetwork;"};
  static J2ObjcClassInfo _ARPContactSocial_SocialNetworkEnum = { "SocialNetwork", "me.adaptive.arp.api", "ContactSocial", 0x4019, 1, methods, 5, fields, 1, superclass_type_args};
  return &_ARPContactSocial_SocialNetworkEnum;
}

@end
