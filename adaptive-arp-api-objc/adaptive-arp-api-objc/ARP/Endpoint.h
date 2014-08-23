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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Endpoint.java
//
//

#ifndef _ARPEndpoint_H_
#define _ARPEndpoint_H_

#import "JreEmulation.h"

@interface ARPEndpoint : NSObject {
 @public
  NSString *host_;
  NSString *path_;
  int port_;
  NSString *proxy_;
  NSString *Scheme_;
}

- (id)initWithNSString:(NSString *)host
          withNSString:(NSString *)path
               withInt:(int)port
          withNSString:(NSString *)proxy
          withNSString:(NSString *)scheme;

- (NSString *)getHost;

- (void)setHostWithNSString:(NSString *)host;

- (NSString *)getPath;

- (void)setPathWithNSString:(NSString *)path;

- (int)getPort;

- (void)setPortWithInt:(int)port;

- (NSString *)getProxy;

- (void)setProxyWithNSString:(NSString *)proxy;

- (NSString *)getScheme;

- (void)setSchemeWithNSString:(NSString *)scheme;

- (void)copyAllFieldsTo:(ARPEndpoint *)other;

@end

__attribute__((always_inline)) inline void ARPEndpoint_init() {}

J2OBJC_FIELD_SETTER(ARPEndpoint, host_, NSString *)
J2OBJC_FIELD_SETTER(ARPEndpoint, path_, NSString *)
J2OBJC_FIELD_SETTER(ARPEndpoint, proxy_, NSString *)
J2OBJC_FIELD_SETTER(ARPEndpoint, Scheme_, NSString *)

typedef ARPEndpoint MeAdaptiveArpApiEndpoint;

#endif // _ARPEndpoint_H_
