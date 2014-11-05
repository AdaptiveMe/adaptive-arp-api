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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Lifecycle.java
//
//

#include "IOSClass.h"
#include "Lifecycle.h"
#include "java/lang/IllegalArgumentException.h"

@implementation ARPLifecycle

- (id)init {
  return [super init];
}

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
    { "init", "Lifecycle", NULL, 0x1, NULL },
    { "initWithARPLifecycle_StateEnum:", "Lifecycle", NULL, 0x1, NULL },
    { "getState", NULL, "Lme.adaptive.arp.api.Lifecycle$State;", 0x1, NULL },
    { "setStateWithARPLifecycle_StateEnum:", "setState", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "state_", NULL, 0x2, "Lme.adaptive.arp.api.Lifecycle$State;", NULL,  },
  };
  static J2ObjcClassInfo _ARPLifecycle = { "Lifecycle", "me.adaptive.arp.api", NULL, 0x1, 4, methods, 1, fields, 0, NULL};
  return &_ARPLifecycle;
}

@end

BOOL ARPLifecycle_StateEnum_initialized = NO;

ARPLifecycle_StateEnum *ARPLifecycle_StateEnum_values[9];

@implementation ARPLifecycle_StateEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPLifecycle_StateEnum class]) {
    ARPLifecycle_StateEnum_Starting = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"Starting" withInt:0];
    ARPLifecycle_StateEnum_Started = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"Started" withInt:1];
    ARPLifecycle_StateEnum_Running = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"Running" withInt:2];
    ARPLifecycle_StateEnum_Paused = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"Paused" withInt:3];
    ARPLifecycle_StateEnum_PausedIdle = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"PausedIdle" withInt:4];
    ARPLifecycle_StateEnum_PausedRun = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"PausedRun" withInt:5];
    ARPLifecycle_StateEnum_Resuming = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"Resuming" withInt:6];
    ARPLifecycle_StateEnum_Stopping = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"Stopping" withInt:7];
    ARPLifecycle_StateEnum_Unknown = [[ARPLifecycle_StateEnum alloc] initWithNSString:@"Unknown" withInt:8];
    ARPLifecycle_StateEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPLifecycle_StateEnum_values count:9 type:[IOSClass classWithClass:[ARPLifecycle_StateEnum class]]];
}

+ (ARPLifecycle_StateEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 9; i++) {
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
    { "Starting", "Starting", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_Starting,  },
    { "Started", "Started", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_Started,  },
    { "Running", "Running", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_Running,  },
    { "Paused", "Paused", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_Paused,  },
    { "PausedIdle", "PausedIdle", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_PausedIdle,  },
    { "PausedRun", "PausedRun", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_PausedRun,  },
    { "Resuming", "Resuming", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_Resuming,  },
    { "Stopping", "Stopping", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_Stopping,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.Lifecycle$State;", &ARPLifecycle_StateEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.Lifecycle$State;"};
  static J2ObjcClassInfo _ARPLifecycle_StateEnum = { "State", "me.adaptive.arp.api", "Lifecycle", 0x4019, 1, methods, 9, fields, 1, superclass_type_args};
  return &_ARPLifecycle_StateEnum;
}

@end
