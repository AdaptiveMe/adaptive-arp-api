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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IMessaging.java
//
//

#ifndef _ARPIMessaging_H_
#define _ARPIMessaging_H_

@class ARPEmail;
@protocol ARPIMessagingCallback;

#import "JreEmulation.h"
#include "IBasePIM.h"

@protocol ARPIMessaging < ARPIBasePIM, NSObject, JavaObject >
- (void)sendSMSWithNSString:(NSString *)number
               withNSString:(NSString *)text
  withARPIMessagingCallback:(id<ARPIMessagingCallback>)callback;

- (void)sendEmailWithARPEmail:(ARPEmail *)data
    withARPIMessagingCallback:(id<ARPIMessagingCallback>)callback;

@end

__attribute__((always_inline)) inline void ARPIMessaging_init() {}

#define MeAdaptiveArpApiIMessaging ARPIMessaging

#endif // _ARPIMessaging_H_
