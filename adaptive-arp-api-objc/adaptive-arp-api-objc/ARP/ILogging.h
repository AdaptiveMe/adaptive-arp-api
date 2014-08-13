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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/ILogging.java
//
//

#ifndef _ARPILogging_H_
#define _ARPILogging_H_

@class ARPILogging_LogLevelEnum;

#import "JreEmulation.h"
#include "IBaseUtil.h"
#include "java/lang/Enum.h"

@protocol ARPILogging < ARPIBaseUtil, NSObject, JavaObject >
- (void)logWithARPILogging_LogLevelEnum:(ARPILogging_LogLevelEnum *)level
                           withNSString:(NSString *)message;

- (void)logWithARPILogging_LogLevelEnum:(ARPILogging_LogLevelEnum *)level
                           withNSString:(NSString *)category
                           withNSString:(NSString *)message;

@end

__attribute__((always_inline)) inline void ARPILogging_init() {}

#define MeAdaptiveArpApiILogging ARPILogging

typedef enum {
  ARPILogging_LogLevel_DEBUG = 0,
  ARPILogging_LogLevel_WARN = 1,
  ARPILogging_LogLevel_ERROR = 2,
  ARPILogging_LogLevel_INFO = 3,
} ARPILogging_LogLevel;

@interface ARPILogging_LogLevelEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPILogging_LogLevelEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPILogging_LogLevelEnum_initialized;
J2OBJC_STATIC_INIT(ARPILogging_LogLevelEnum)

FOUNDATION_EXPORT ARPILogging_LogLevelEnum *ARPILogging_LogLevelEnum_values[];

#define ARPILogging_LogLevelEnum_DEBUG_ ARPILogging_LogLevelEnum_values[ARPILogging_LogLevel_DEBUG]
J2OBJC_STATIC_FIELD_GETTER(ARPILogging_LogLevelEnum, DEBUG_, ARPILogging_LogLevelEnum *)

#define ARPILogging_LogLevelEnum_WARN ARPILogging_LogLevelEnum_values[ARPILogging_LogLevel_WARN]
J2OBJC_STATIC_FIELD_GETTER(ARPILogging_LogLevelEnum, WARN, ARPILogging_LogLevelEnum *)

#define ARPILogging_LogLevelEnum_ERROR ARPILogging_LogLevelEnum_values[ARPILogging_LogLevel_ERROR]
J2OBJC_STATIC_FIELD_GETTER(ARPILogging_LogLevelEnum, ERROR, ARPILogging_LogLevelEnum *)

#define ARPILogging_LogLevelEnum_INFO ARPILogging_LogLevelEnum_values[ARPILogging_LogLevel_INFO]
J2OBJC_STATIC_FIELD_GETTER(ARPILogging_LogLevelEnum, INFO, ARPILogging_LogLevelEnum *)

#endif // _ARPILogging_H_
