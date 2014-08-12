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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/DeviceInfo.java
//
//

#ifndef _ARPDeviceInfo_H_
#define _ARPDeviceInfo_H_

#import "JreEmulation.h"

@interface ARPDeviceInfo : NSObject {
 @public
  NSString *name_;
  NSString *model_;
  NSString *vendor_;
  NSString *uuid_;
}

- (id)initWithNSString:(NSString *)name
          withNSString:(NSString *)model
          withNSString:(NSString *)vendor
          withNSString:(NSString *)uuid;

- (NSString *)getName;

- (NSString *)getModel;

- (NSString *)getVendor;

- (NSString *)getUuid;

- (void)copyAllFieldsTo:(ARPDeviceInfo *)other;

@end

__attribute__((always_inline)) inline void ARPDeviceInfo_init() {}

J2OBJC_FIELD_SETTER(ARPDeviceInfo, name_, NSString *)
J2OBJC_FIELD_SETTER(ARPDeviceInfo, model_, NSString *)
J2OBJC_FIELD_SETTER(ARPDeviceInfo, vendor_, NSString *)
J2OBJC_FIELD_SETTER(ARPDeviceInfo, uuid_, NSString *)

typedef ARPDeviceInfo MeAdaptiveArpApiDeviceInfo;

#endif // _ARPDeviceInfo_H_
