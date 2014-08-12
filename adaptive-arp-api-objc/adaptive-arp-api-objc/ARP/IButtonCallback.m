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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IButtonCallback.java
//
//

#include "Button.h"
#include "IButtonCallback.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIButtonCallback : NSObject
@end

@implementation ARPIButtonCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPButton:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPButton:withARPIButtonCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIButtonCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIButtonCallback = { "IButtonCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIButtonCallback;
}

@end

BOOL ARPIButtonCallback_ErrorEnum_initialized = NO;

ARPIButtonCallback_ErrorEnum *ARPIButtonCallback_ErrorEnum_values[1];

@implementation ARPIButtonCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIButtonCallback_ErrorEnum class]) {
    ARPIButtonCallback_ErrorEnum_Not_Present = [[ARPIButtonCallback_ErrorEnum alloc] initWithNSString:@"Not_Present" withInt:0];
    ARPIButtonCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIButtonCallback_ErrorEnum_values count:1 type:[IOSClass classWithClass:[ARPIButtonCallback_ErrorEnum class]]];
}

+ (ARPIButtonCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 1; i++) {
    ARPIButtonCallback_ErrorEnum *e = ARPIButtonCallback_ErrorEnum_values[i];
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
    { "Not_Present", "Not_Present", 0x4019, "Lme.adaptive.arp.api.IButtonCallback$Error;", &ARPIButtonCallback_ErrorEnum_Not_Present,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IButtonCallback$Error;"};
  static J2ObjcClassInfo _ARPIButtonCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IButtonCallback", 0x4019, 1, methods, 1, fields, 1, superclass_type_args};
  return &_ARPIButtonCallback_ErrorEnum;
}

@end

BOOL ARPIButtonCallback_WarningEnum_initialized = NO;

ARPIButtonCallback_WarningEnum *ARPIButtonCallback_WarningEnum_values[1];

@implementation ARPIButtonCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIButtonCallback_WarningEnum class]) {
    ARPIButtonCallback_WarningEnum_Not_Implemented = [[ARPIButtonCallback_WarningEnum alloc] initWithNSString:@"Not_Implemented" withInt:0];
    ARPIButtonCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIButtonCallback_WarningEnum_values count:1 type:[IOSClass classWithClass:[ARPIButtonCallback_WarningEnum class]]];
}

+ (ARPIButtonCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 1; i++) {
    ARPIButtonCallback_WarningEnum *e = ARPIButtonCallback_WarningEnum_values[i];
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
    { "Not_Implemented", "Not_Implemented", 0x4019, "Lme.adaptive.arp.api.IButtonCallback$Warning;", &ARPIButtonCallback_WarningEnum_Not_Implemented,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IButtonCallback$Warning;"};
  static J2ObjcClassInfo _ARPIButtonCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IButtonCallback", 0x4019, 1, methods, 1, fields, 1, superclass_type_args};
  return &_ARPIButtonCallback_WarningEnum;
}

@end
