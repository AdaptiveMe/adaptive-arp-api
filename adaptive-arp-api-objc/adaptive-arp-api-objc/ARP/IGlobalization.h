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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IGlobalization.java
//
//

#ifndef _ARPIGlobalization_H_
#define _ARPIGlobalization_H_

@class ARPLocale;
@class IOSObjectArray;
@protocol JavaUtilMap;

#import "JreEmulation.h"
#include "IBaseApplication.h"

@protocol ARPIGlobalization < ARPIBaseApplication, NSObject, JavaObject >
- (IOSObjectArray *)getLocaleSupportedDescriptors;

- (NSString *)getResourceLiteralWithNSString:(NSString *)key
                               withARPLocale:(ARPLocale *)locale;

- (id<JavaUtilMap>)getResourceLiteralsWithARPLocale:(ARPLocale *)locale;

@end

__attribute__((always_inline)) inline void ARPIGlobalization_init() {}

#define MeAdaptiveArpApiIGlobalization ARPIGlobalization

#endif // _ARPIGlobalization_H_
