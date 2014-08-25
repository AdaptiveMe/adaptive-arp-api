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

#ifndef _ARPLifecycle_H_
#define _ARPLifecycle_H_

@class ARPLifecycle_StateEnum;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@interface ARPLifecycle : NSObject {
 @public
  ARPLifecycle_StateEnum *state_;
}

- (id)init;

- (id)initWithARPLifecycle_StateEnum:(ARPLifecycle_StateEnum *)state;

- (ARPLifecycle_StateEnum *)getState;

- (void)setStateWithARPLifecycle_StateEnum:(ARPLifecycle_StateEnum *)state;

- (void)copyAllFieldsTo:(ARPLifecycle *)other;

@end

__attribute__((always_inline)) inline void ARPLifecycle_init() {}

J2OBJC_FIELD_SETTER(ARPLifecycle, state_, ARPLifecycle_StateEnum *)

typedef ARPLifecycle MeAdaptiveArpApiLifecycle;

typedef enum {
  ARPLifecycle_State_Starting = 0,
  ARPLifecycle_State_Started = 1,
  ARPLifecycle_State_Running = 2,
  ARPLifecycle_State_Paused = 3,
  ARPLifecycle_State_PausedIdle = 4,
  ARPLifecycle_State_PausedRun = 5,
  ARPLifecycle_State_Resuming = 6,
  ARPLifecycle_State_Stopping = 7,
} ARPLifecycle_State;

@interface ARPLifecycle_StateEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPLifecycle_StateEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPLifecycle_StateEnum_initialized;
J2OBJC_STATIC_INIT(ARPLifecycle_StateEnum)

FOUNDATION_EXPORT ARPLifecycle_StateEnum *ARPLifecycle_StateEnum_values[];

#define ARPLifecycle_StateEnum_Starting ARPLifecycle_StateEnum_values[ARPLifecycle_State_Starting]
J2OBJC_STATIC_FIELD_GETTER(ARPLifecycle_StateEnum, Starting, ARPLifecycle_StateEnum *)

#define ARPLifecycle_StateEnum_Started ARPLifecycle_StateEnum_values[ARPLifecycle_State_Started]
J2OBJC_STATIC_FIELD_GETTER(ARPLifecycle_StateEnum, Started, ARPLifecycle_StateEnum *)

#define ARPLifecycle_StateEnum_Running ARPLifecycle_StateEnum_values[ARPLifecycle_State_Running]
J2OBJC_STATIC_FIELD_GETTER(ARPLifecycle_StateEnum, Running, ARPLifecycle_StateEnum *)

#define ARPLifecycle_StateEnum_Paused ARPLifecycle_StateEnum_values[ARPLifecycle_State_Paused]
J2OBJC_STATIC_FIELD_GETTER(ARPLifecycle_StateEnum, Paused, ARPLifecycle_StateEnum *)

#define ARPLifecycle_StateEnum_PausedIdle ARPLifecycle_StateEnum_values[ARPLifecycle_State_PausedIdle]
J2OBJC_STATIC_FIELD_GETTER(ARPLifecycle_StateEnum, PausedIdle, ARPLifecycle_StateEnum *)

#define ARPLifecycle_StateEnum_PausedRun ARPLifecycle_StateEnum_values[ARPLifecycle_State_PausedRun]
J2OBJC_STATIC_FIELD_GETTER(ARPLifecycle_StateEnum, PausedRun, ARPLifecycle_StateEnum *)

#define ARPLifecycle_StateEnum_Resuming ARPLifecycle_StateEnum_values[ARPLifecycle_State_Resuming]
J2OBJC_STATIC_FIELD_GETTER(ARPLifecycle_StateEnum, Resuming, ARPLifecycle_StateEnum *)

#define ARPLifecycle_StateEnum_Stopping ARPLifecycle_StateEnum_values[ARPLifecycle_State_Stopping]
J2OBJC_STATIC_FIELD_GETTER(ARPLifecycle_StateEnum, Stopping, ARPLifecycle_StateEnum *)

#endif // _ARPLifecycle_H_
