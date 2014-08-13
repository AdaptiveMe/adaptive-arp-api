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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Service.java
//
//

#ifndef _ARPService_H_
#define _ARPService_H_

@class ARPEndpoint;
@class ARPIService_ServiceMethodEnum;
@class ARPIService_ServiceTypeEnum;

#import "JreEmulation.h"

@interface ARPService : NSObject {
 @public
  ARPEndpoint *endpoint_;
  NSString *name_;
  ARPIService_ServiceMethodEnum *method_;
  ARPIService_ServiceTypeEnum *type_;
}

- (id)initWithARPEndpoint:(ARPEndpoint *)endpoint
             withNSString:(NSString *)name
withARPIService_ServiceMethodEnum:(ARPIService_ServiceMethodEnum *)method
withARPIService_ServiceTypeEnum:(ARPIService_ServiceTypeEnum *)type;

- (ARPEndpoint *)getEndpoint;

- (void)setEndpointWithARPEndpoint:(ARPEndpoint *)endpoint;

- (NSString *)getName;

- (void)setNameWithNSString:(NSString *)name;

- (ARPIService_ServiceMethodEnum *)getMethod;

- (void)setMethodWithARPIService_ServiceMethodEnum:(ARPIService_ServiceMethodEnum *)method;

- (ARPIService_ServiceTypeEnum *)getType;

- (void)setTypeWithARPIService_ServiceTypeEnum:(ARPIService_ServiceTypeEnum *)type;

- (void)copyAllFieldsTo:(ARPService *)other;

@end

__attribute__((always_inline)) inline void ARPService_init() {}

J2OBJC_FIELD_SETTER(ARPService, endpoint_, ARPEndpoint *)
J2OBJC_FIELD_SETTER(ARPService, name_, NSString *)
J2OBJC_FIELD_SETTER(ARPService, method_, ARPIService_ServiceMethodEnum *)
J2OBJC_FIELD_SETTER(ARPService, type_, ARPIService_ServiceTypeEnum *)

typedef ARPService MeAdaptiveArpApiService;

#endif // _ARPService_H_
