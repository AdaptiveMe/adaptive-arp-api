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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IAppContext.java
//
//

#ifndef _ARPIAppContext_H_
#define _ARPIAppContext_H_

@class ARPIAppContext_TypeEnum;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@protocol ARPIAppContext < NSObject, JavaObject >

- (id)getContext;

- (ARPIAppContext_TypeEnum *)getContextType;

@end

__attribute__((always_inline)) inline void ARPIAppContext_init() {}

#define MeAdaptiveArpApiIAppContext ARPIAppContext

typedef enum {
  ARPIAppContext_Type_iOS = 0,
  ARPIAppContext_Type_OSX = 1,
  ARPIAppContext_Type_Windows = 2,
  ARPIAppContext_Type_WindowsPhone = 3,
  ARPIAppContext_Type_Android = 4,
  ARPIAppContext_Type_Linux = 5,
  ARPIAppContext_Type_Blackberry = 6,
  ARPIAppContext_Type_Tizen = 7,
  ARPIAppContext_Type_FirefoxOS = 8,
  ARPIAppContext_Type_Chromium = 9,
  ARPIAppContext_Type_Unspecified = 10,
  ARPIAppContext_Type_Unknown = 11,
} ARPIAppContext_Type;

@interface ARPIAppContext_TypeEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIAppContext_TypeEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIAppContext_TypeEnum_initialized;
J2OBJC_STATIC_INIT(ARPIAppContext_TypeEnum)

FOUNDATION_EXPORT ARPIAppContext_TypeEnum *ARPIAppContext_TypeEnum_values[];

#define ARPIAppContext_TypeEnum_iOS ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_iOS]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, iOS, ARPIAppContext_TypeEnum *)

#define ARPIAppContext_TypeEnum_OSX ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_OSX]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, OSX, ARPIAppContext_TypeEnum *)

#define ARPIAppContext_TypeEnum_Windows ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_Windows]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, Windows, ARPIAppContext_TypeEnum *)

#define ARPIAppContext_TypeEnum_WindowsPhone ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_WindowsPhone]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, WindowsPhone, ARPIAppContext_TypeEnum *)

#define ARPIAppContext_TypeEnum_Android ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_Android]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, Android, ARPIAppContext_TypeEnum *)

#define ARPIAppContext_TypeEnum_Linux ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_Linux]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, Linux, ARPIAppContext_TypeEnum *)

#define ARPIAppContext_TypeEnum_Blackberry ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_Blackberry]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, Blackberry, ARPIAppContext_TypeEnum *)

#define ARPIAppContext_TypeEnum_Tizen ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_Tizen]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, Tizen, ARPIAppContext_TypeEnum *)

#define ARPIAppContext_TypeEnum_FirefoxOS ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_FirefoxOS]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, FirefoxOS, ARPIAppContext_TypeEnum *)

#define ARPIAppContext_TypeEnum_Chromium ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_Chromium]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, Chromium, ARPIAppContext_TypeEnum *)

#define ARPIAppContext_TypeEnum_Unspecified ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_Unspecified]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, Unspecified, ARPIAppContext_TypeEnum *)

#define ARPIAppContext_TypeEnum_Unknown ARPIAppContext_TypeEnum_values[ARPIAppContext_Type_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppContext_TypeEnum, Unknown, ARPIAppContext_TypeEnum *)

#endif // _ARPIAppContext_H_
