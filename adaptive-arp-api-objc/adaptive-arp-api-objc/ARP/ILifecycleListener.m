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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ILifecycleListener.java
//
//

#include "ILifecycleListener.h"
#include "IOSClass.h"
#include "Lifecycle.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPILifecycleListener : NSObject
@end

@implementation ARPILifecycleListener

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPLifecycle:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPLifecycle:withARPILifecycleListener_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPILifecycleListener_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPILifecycleListener = { "ILifecycleListener", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPILifecycleListener;
}

@end

BOOL ARPILifecycleListener_ErrorEnum_initialized = NO;

ARPILifecycleListener_ErrorEnum *ARPILifecycleListener_ErrorEnum_values[0];

@implementation ARPILifecycleListener_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPILifecycleListener_ErrorEnum class]) {
    ARPILifecycleListener_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPILifecycleListener_ErrorEnum_values count:0 type:[IOSClass classWithClass:[ARPILifecycleListener_ErrorEnum class]]];
}

+ (ARPILifecycleListener_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 0; i++) {
    ARPILifecycleListener_ErrorEnum *e = ARPILifecycleListener_ErrorEnum_values[i];
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
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ILifecycleListener$Error;"};
  static J2ObjcClassInfo _ARPILifecycleListener_ErrorEnum = { "Error", "me.adaptive.arp.api", "ILifecycleListener", 0x4019, 1, methods, 0, NULL, 1, superclass_type_args};
  return &_ARPILifecycleListener_ErrorEnum;
}

@end

BOOL ARPILifecycleListener_WarningEnum_initialized = NO;

ARPILifecycleListener_WarningEnum *ARPILifecycleListener_WarningEnum_values[0];

@implementation ARPILifecycleListener_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPILifecycleListener_WarningEnum class]) {
    ARPILifecycleListener_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPILifecycleListener_WarningEnum_values count:0 type:[IOSClass classWithClass:[ARPILifecycleListener_WarningEnum class]]];
}

+ (ARPILifecycleListener_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 0; i++) {
    ARPILifecycleListener_WarningEnum *e = ARPILifecycleListener_WarningEnum_values[i];
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
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ILifecycleListener$Warning;"};
  static J2ObjcClassInfo _ARPILifecycleListener_WarningEnum = { "Warning", "me.adaptive.arp.api", "ILifecycleListener", 0x4019, 1, methods, 0, NULL, 1, superclass_type_args};
  return &_ARPILifecycleListener_WarningEnum;
}

@end
