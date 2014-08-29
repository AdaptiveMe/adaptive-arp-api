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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Geolocation.java
//
//

#ifndef _ARPGeolocation_H_
#define _ARPGeolocation_H_

#import "JreEmulation.h"

@interface ARPGeolocation : NSObject {
 @public
  double latitude_;
  double longitude_;
  double altitude_;
  float xDoP_;
  float yDoP_;
}

- (id)init;

- (id)initWithDouble:(double)latitude
          withDouble:(double)longitude
          withDouble:(double)altitude
           withFloat:(float)xDoP
           withFloat:(float)yDoP;

- (double)getLatitude;

- (void)setLatitudeWithDouble:(double)latitude;

- (double)getLongitude;

- (void)setLongitudeWithDouble:(double)longitude;

- (double)getAltitude;

- (void)setAltitudeWithDouble:(double)altitude;

- (float)getXDoP;

- (float)getYDoP;

- (void)copyAllFieldsTo:(ARPGeolocation *)other;

@end

__attribute__((always_inline)) inline void ARPGeolocation_init() {}

typedef ARPGeolocation MeAdaptiveArpApiGeolocation;

#endif // _ARPGeolocation_H_
