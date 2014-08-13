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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IMessagingCallback.java
//
//

#include "IMessagingCallback.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIMessagingCallback : NSObject
@end

@implementation ARPIMessagingCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithBoolean:", "onResult", "V", 0x401, NULL },
    { "onWarningWithBoolean:withARPIMessagingCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIMessagingCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIMessagingCallback = { "IMessagingCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIMessagingCallback;
}

@end

BOOL ARPIMessagingCallback_WarningEnum_initialized = NO;

ARPIMessagingCallback_WarningEnum *ARPIMessagingCallback_WarningEnum_values[2];

@implementation ARPIMessagingCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIMessagingCallback_WarningEnum class]) {
    ARPIMessagingCallback_WarningEnum_Unable_To_Sent_All = [[ARPIMessagingCallback_WarningEnum alloc] initWithNSString:@"Unable_To_Sent_All" withInt:0];
    ARPIMessagingCallback_WarningEnum_Unable_to_fetch_attachment = [[ARPIMessagingCallback_WarningEnum alloc] initWithNSString:@"Unable_to_fetch_attachment" withInt:1];
    ARPIMessagingCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIMessagingCallback_WarningEnum_values count:2 type:[IOSClass classWithClass:[ARPIMessagingCallback_WarningEnum class]]];
}

+ (ARPIMessagingCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIMessagingCallback_WarningEnum *e = ARPIMessagingCallback_WarningEnum_values[i];
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
    { "Unable_To_Sent_All", "Unable_To_Sent_All", 0x4019, "Lme.adaptive.arp.api.IMessagingCallback$Warning;", &ARPIMessagingCallback_WarningEnum_Unable_To_Sent_All,  },
    { "Unable_to_fetch_attachment", "Unable_to_fetch_attachment", 0x4019, "Lme.adaptive.arp.api.IMessagingCallback$Warning;", &ARPIMessagingCallback_WarningEnum_Unable_to_fetch_attachment,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IMessagingCallback$Warning;"};
  static J2ObjcClassInfo _ARPIMessagingCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IMessagingCallback", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIMessagingCallback_WarningEnum;
}

@end

BOOL ARPIMessagingCallback_ErrorEnum_initialized = NO;

ARPIMessagingCallback_ErrorEnum *ARPIMessagingCallback_ErrorEnum_values[3];

@implementation ARPIMessagingCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIMessagingCallback_ErrorEnum class]) {
    ARPIMessagingCallback_ErrorEnum_SIM_Not_Present = [[ARPIMessagingCallback_ErrorEnum alloc] initWithNSString:@"SIM_Not_Present" withInt:0];
    ARPIMessagingCallback_ErrorEnum_Email_Account_Not_Found = [[ARPIMessagingCallback_ErrorEnum alloc] initWithNSString:@"Email_Account_Not_Found" withInt:1];
    ARPIMessagingCallback_ErrorEnum_Not_Sent = [[ARPIMessagingCallback_ErrorEnum alloc] initWithNSString:@"Not_Sent" withInt:2];
    ARPIMessagingCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIMessagingCallback_ErrorEnum_values count:3 type:[IOSClass classWithClass:[ARPIMessagingCallback_ErrorEnum class]]];
}

+ (ARPIMessagingCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPIMessagingCallback_ErrorEnum *e = ARPIMessagingCallback_ErrorEnum_values[i];
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
    { "SIM_Not_Present", "SIM_Not_Present", 0x4019, "Lme.adaptive.arp.api.IMessagingCallback$Error;", &ARPIMessagingCallback_ErrorEnum_SIM_Not_Present,  },
    { "Email_Account_Not_Found", "Email_Account_Not_Found", 0x4019, "Lme.adaptive.arp.api.IMessagingCallback$Error;", &ARPIMessagingCallback_ErrorEnum_Email_Account_Not_Found,  },
    { "Not_Sent", "Not_Sent", 0x4019, "Lme.adaptive.arp.api.IMessagingCallback$Error;", &ARPIMessagingCallback_ErrorEnum_Not_Sent,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IMessagingCallback$Error;"};
  static J2ObjcClassInfo _ARPIMessagingCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IMessagingCallback", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPIMessagingCallback_ErrorEnum;
}

@end
