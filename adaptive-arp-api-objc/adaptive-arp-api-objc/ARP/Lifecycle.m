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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Lifecycle.java
//
//

#include "IOSClass.h"
#include "Lifecycle.h"
#include "java/lang/IllegalArgumentException.h"

@implementation ARPLifecycle

- (id)initWithARPLifecycle_StateEnum:(ARPLifecycle_StateEnum *)state {
  if (self = [super init]) {
    self->state_ = state;
  }
  return self;
}

- (ARPLifecycle_StateEnum *)getState {
  return state_;
}

- (void)setStateWithARPLifecycle_StateEnum:(ARPLifecycle_StateEnum *)state {
  self->state_ = state;
}

- (void)copyAllFieldsTo:(ARPLifecycle *)other {
  [super copyAllFieldsTo:other];
  other->state_ = state_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithARPLifecycle_StateEnum:", "Lifecycle", NULL, 0x1, NULL },
    { "getState", NULL, "Lme.adaptive.arp.api.Lifecycle$State;", 0x1, NULL },
    { "setStateWithARPLifecycle_StateEnum:", "setState", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "state_", NULL, 0x2, "Lme.adaptive.arp.api.Lifecycle$State;", NULL,  },
  };
  static J2ObjcClassInfo _ARPLifecycle = { "Lifecycle", "me.adaptive.arp.api", NULL, 0x1, 3, methods, 1, fields, 0, NULL};
  return &_ARPLifecycle;
}

@end

BOOL ARPLifecycle_StateEnum_initialized = NO;

ARPLifecycle_StateEnum *ARPLifecycle_StateEnum_values[4];

@implementation ARPLifecycle_StateEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPLifecycle_StateEnum class]) {
    ARPLifecycle_StateEnum_Start = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"Start" withInt:0];
    ARPLifecycle_StateEnum_Pause = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"Pause" withInt:1];
    ARPLifecycle_StateEnum_Resume = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"Resume" withInt:2];
    ARPLifecycle_StateEnum_End = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"End" withInt:3];
    ARPLifecycle_StateEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPLifecycle_StateEnum_values count:4 type:[IOSClass classWithClass:[ARPLifecycle_StateEnum class]]];
}

+ (ARPLifecycle_StateEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPLifecycle_StateEnum *e = ARPLifecycle_StateEnum_values[i];
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
    { "Start", "Start", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_Start,  },
    { "Pause", "Pause", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_Pause,  },
    { "Resume", "Resume", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_Resume,  },
    { "End", "End", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_End,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.Lifecycle$State;"};
  static J2ObjcClassInfo _ARPLifecycle_StateEnum = { "State", "me.adaptive.arp.api", "Lifecycle", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPLifecycle_StateEnum;
}

@end
