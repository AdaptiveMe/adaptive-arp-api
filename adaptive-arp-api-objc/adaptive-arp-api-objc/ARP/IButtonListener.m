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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IButtonListener.java
//
//

#include "Button.h"
#include "IButtonListener.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIButtonListener : NSObject
@end

@implementation ARPIButtonListener

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPButton:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPButton:withARPIButtonListener_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIButtonListener_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIButtonListener = { "IButtonListener", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIButtonListener;
}

@end

BOOL ARPIButtonListener_ErrorEnum_initialized = NO;

ARPIButtonListener_ErrorEnum *ARPIButtonListener_ErrorEnum_values[1];

@implementation ARPIButtonListener_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIButtonListener_ErrorEnum class]) {
    ARPIButtonListener_ErrorEnum_Not_Present = [[ARPIButtonListener_ErrorEnum alloc] initWithNSString:@"Not_Present" withInt:0];
    ARPIButtonListener_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIButtonListener_ErrorEnum_values count:1 type:[IOSClass classWithClass:[ARPIButtonListener_ErrorEnum class]]];
}

+ (ARPIButtonListener_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 1; i++) {
    ARPIButtonListener_ErrorEnum *e = ARPIButtonListener_ErrorEnum_values[i];
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
    { "Not_Present", "Not_Present", 0x4019, "Lme.adaptive.arp.api.IButtonListener$Error;", &ARPIButtonListener_ErrorEnum_Not_Present,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IButtonListener$Error;"};
  static J2ObjcClassInfo _ARPIButtonListener_ErrorEnum = { "Error", "me.adaptive.arp.api", "IButtonListener", 0x4019, 1, methods, 1, fields, 1, superclass_type_args};
  return &_ARPIButtonListener_ErrorEnum;
}

@end

BOOL ARPIButtonListener_WarningEnum_initialized = NO;

ARPIButtonListener_WarningEnum *ARPIButtonListener_WarningEnum_values[1];

@implementation ARPIButtonListener_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIButtonListener_WarningEnum class]) {
    ARPIButtonListener_WarningEnum_Not_Implemented = [[ARPIButtonListener_WarningEnum alloc] initWithNSString:@"Not_Implemented" withInt:0];
    ARPIButtonListener_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIButtonListener_WarningEnum_values count:1 type:[IOSClass classWithClass:[ARPIButtonListener_WarningEnum class]]];
}

+ (ARPIButtonListener_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 1; i++) {
    ARPIButtonListener_WarningEnum *e = ARPIButtonListener_WarningEnum_values[i];
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
    { "Not_Implemented", "Not_Implemented", 0x4019, "Lme.adaptive.arp.api.IButtonListener$Warning;", &ARPIButtonListener_WarningEnum_Not_Implemented,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IButtonListener$Warning;"};
  static J2ObjcClassInfo _ARPIButtonListener_WarningEnum = { "Warning", "me.adaptive.arp.api", "IButtonListener", 0x4019, 1, methods, 1, fields, 1, superclass_type_args};
  return &_ARPIButtonListener_WarningEnum;
}

@end
