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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IContactPhotoResultCallback.java
//
//

#include "IContactPhotoResultCallback.h"
#include "IOSClass.h"
#include "IOSPrimitiveArray.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIContactPhotoResultCallback : NSObject
@end

@implementation ARPIContactPhotoResultCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithByteArray:", "onResult", "V", 0x401, NULL },
    { "onWarningWithByteArray:withARPIContactPhotoResultCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIContactPhotoResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIContactPhotoResultCallback = { "IContactPhotoResultCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIContactPhotoResultCallback;
}

@end

BOOL ARPIContactPhotoResultCallback_WarningEnum_initialized = NO;

ARPIContactPhotoResultCallback_WarningEnum *ARPIContactPhotoResultCallback_WarningEnum_values[2];

@implementation ARPIContactPhotoResultCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIContactPhotoResultCallback_WarningEnum class]) {
    ARPIContactPhotoResultCallback_WarningEnum_LimitExceeded = [[ARPIContactPhotoResultCallback_WarningEnum alloc] initWithNSString:@"LimitExceeded" withInt:0];
    ARPIContactPhotoResultCallback_WarningEnum_No_Matches = [[ARPIContactPhotoResultCallback_WarningEnum alloc] initWithNSString:@"No_Matches" withInt:1];
    ARPIContactPhotoResultCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIContactPhotoResultCallback_WarningEnum_values count:2 type:[IOSClass classWithClass:[ARPIContactPhotoResultCallback_WarningEnum class]]];
}

+ (ARPIContactPhotoResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIContactPhotoResultCallback_WarningEnum *e = ARPIContactPhotoResultCallback_WarningEnum_values[i];
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
    { "LimitExceeded", "LimitExceeded", 0x4019, "Lme.adaptive.arp.api.IContactPhotoResultCallback$Warning;", &ARPIContactPhotoResultCallback_WarningEnum_LimitExceeded,  },
    { "No_Matches", "No_Matches", 0x4019, "Lme.adaptive.arp.api.IContactPhotoResultCallback$Warning;", &ARPIContactPhotoResultCallback_WarningEnum_No_Matches,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IContactPhotoResultCallback$Warning;"};
  static J2ObjcClassInfo _ARPIContactPhotoResultCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IContactPhotoResultCallback", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIContactPhotoResultCallback_WarningEnum;
}

@end

BOOL ARPIContactPhotoResultCallback_ErrorEnum_initialized = NO;

ARPIContactPhotoResultCallback_ErrorEnum *ARPIContactPhotoResultCallback_ErrorEnum_values[3];

@implementation ARPIContactPhotoResultCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIContactPhotoResultCallback_ErrorEnum class]) {
    ARPIContactPhotoResultCallback_ErrorEnum_NoPermission = [[ARPIContactPhotoResultCallback_ErrorEnum alloc] initWithNSString:@"NoPermission" withInt:0];
    ARPIContactPhotoResultCallback_ErrorEnum_Wrong_Params = [[ARPIContactPhotoResultCallback_ErrorEnum alloc] initWithNSString:@"Wrong_Params" withInt:1];
    ARPIContactPhotoResultCallback_ErrorEnum_No_Photo = [[ARPIContactPhotoResultCallback_ErrorEnum alloc] initWithNSString:@"No_Photo" withInt:2];
    ARPIContactPhotoResultCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIContactPhotoResultCallback_ErrorEnum_values count:3 type:[IOSClass classWithClass:[ARPIContactPhotoResultCallback_ErrorEnum class]]];
}

+ (ARPIContactPhotoResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPIContactPhotoResultCallback_ErrorEnum *e = ARPIContactPhotoResultCallback_ErrorEnum_values[i];
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
    { "NoPermission", "NoPermission", 0x4019, "Lme.adaptive.arp.api.IContactPhotoResultCallback$Error;", &ARPIContactPhotoResultCallback_ErrorEnum_NoPermission,  },
    { "Wrong_Params", "Wrong_Params", 0x4019, "Lme.adaptive.arp.api.IContactPhotoResultCallback$Error;", &ARPIContactPhotoResultCallback_ErrorEnum_Wrong_Params,  },
    { "No_Photo", "No_Photo", 0x4019, "Lme.adaptive.arp.api.IContactPhotoResultCallback$Error;", &ARPIContactPhotoResultCallback_ErrorEnum_No_Photo,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IContactPhotoResultCallback$Error;"};
  static J2ObjcClassInfo _ARPIContactPhotoResultCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IContactPhotoResultCallback", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPIContactPhotoResultCallback_ErrorEnum;
}

@end
