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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/ITelephony.java
//
//

#ifndef _ARPITelephony_H_
#define _ARPITelephony_H_

@class ARPITelephony_StatusEnum;

#import "JreEmulation.h"
#include "IBasePIM.h"
#include "java/lang/Enum.h"

@protocol ARPITelephony < ARPIBasePIM, NSObject, JavaObject >
- (ARPITelephony_StatusEnum *)callWithNSString:(NSString *)number;

@end

__attribute__((always_inline)) inline void ARPITelephony_init() {}

#define MeAdaptiveArpApiITelephony ARPITelephony

typedef enum {
  ARPITelephony_Status_Dialing = 0,
  ARPITelephony_Status_Failed = 1,
} ARPITelephony_Status;

@interface ARPITelephony_StatusEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPITelephony_StatusEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPITelephony_StatusEnum_initialized;
J2OBJC_STATIC_INIT(ARPITelephony_StatusEnum)

FOUNDATION_EXPORT ARPITelephony_StatusEnum *ARPITelephony_StatusEnum_values[];

#define ARPITelephony_StatusEnum_Dialing ARPITelephony_StatusEnum_values[ARPITelephony_Status_Dialing]
J2OBJC_STATIC_FIELD_GETTER(ARPITelephony_StatusEnum, Dialing, ARPITelephony_StatusEnum *)

#define ARPITelephony_StatusEnum_Failed ARPITelephony_StatusEnum_values[ARPITelephony_Status_Failed]
J2OBJC_STATIC_FIELD_GETTER(ARPITelephony_StatusEnum, Failed, ARPITelephony_StatusEnum *)

#endif // _ARPITelephony_H_
