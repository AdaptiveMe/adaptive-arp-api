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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IAppServerListener.java
//
//

#ifndef _ARPIAppServerListener_H_
#define _ARPIAppServerListener_H_

@protocol ARPIAppServer;

#import "JreEmulation.h"
#include "IBaseListener.h"

@protocol ARPIAppServerListener < ARPIBaseListener, NSObject, JavaObject >
- (void)onStartWithARPIAppServer:(id<ARPIAppServer>)server;

- (void)onPausingWithARPIAppServer:(id<ARPIAppServer>)server;

- (void)onPausedWithARPIAppServer:(id<ARPIAppServer>)server;

- (void)onResumingWithARPIAppServer:(id<ARPIAppServer>)server;

- (void)onResumedWithARPIAppServer:(id<ARPIAppServer>)server;

- (void)onStoppingWithARPIAppServer:(id<ARPIAppServer>)server;

- (void)onStoppedWithARPIAppServer:(id<ARPIAppServer>)server;

@end

__attribute__((always_inline)) inline void ARPIAppServerListener_init() {}

#define MeAdaptiveArpApiIAppServerListener ARPIAppServerListener

#endif // _ARPIAppServerListener_H_
