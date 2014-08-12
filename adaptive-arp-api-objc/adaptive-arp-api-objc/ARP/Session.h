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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Session.java
//
//

#ifndef _ARPSession_H_
#define _ARPSession_H_

@class IOSObjectArray;

#import "JreEmulation.h"

@interface ARPSession : NSObject {
 @public
  IOSObjectArray *cookie_;
}

- (id)initWithARPCookieArray:(IOSObjectArray *)cookie;

- (IOSObjectArray *)getCookie;

- (void)setCookieWithARPCookieArray:(IOSObjectArray *)cookie;

- (void)copyAllFieldsTo:(ARPSession *)other;

@end

__attribute__((always_inline)) inline void ARPSession_init() {}

J2OBJC_FIELD_SETTER(ARPSession, cookie_, IOSObjectArray *)

typedef ARPSession MeAdaptiveArpApiSession;

#endif // _ARPSession_H_
