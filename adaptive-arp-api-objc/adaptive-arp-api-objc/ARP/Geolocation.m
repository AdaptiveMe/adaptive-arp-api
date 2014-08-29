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

#include "Geolocation.h"

@implementation ARPGeolocation

- (id)init {
  return [super init];
}

- (id)initWithDouble:(double)latitude
          withDouble:(double)longitude
          withDouble:(double)altitude
           withFloat:(float)xDoP
           withFloat:(float)yDoP {
  if (self = [super init]) {
    self->latitude_ = latitude;
    self->longitude_ = longitude;
    self->altitude_ = altitude;
    self->xDoP_ = xDoP;
    self->yDoP_ = yDoP;
  }
  return self;
}

- (double)getLatitude {
  return latitude_;
}

- (void)setLatitudeWithDouble:(double)latitude {
  self->latitude_ = latitude;
}

- (double)getLongitude {
  return longitude_;
}

- (void)setLongitudeWithDouble:(double)longitude {
  self->longitude_ = longitude;
}

- (double)getAltitude {
  return altitude_;
}

- (void)setAltitudeWithDouble:(double)altitude {
  self->altitude_ = altitude;
}

- (float)getXDoP {
  return xDoP_;
}

- (float)getYDoP {
  return yDoP_;
}

- (void)copyAllFieldsTo:(ARPGeolocation *)other {
  [super copyAllFieldsTo:other];
  other->altitude_ = altitude_;
  other->latitude_ = latitude_;
  other->longitude_ = longitude_;
  other->xDoP_ = xDoP_;
  other->yDoP_ = yDoP_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", "Geolocation", NULL, 0x1, NULL },
    { "initWithDouble:withDouble:withDouble:withFloat:withFloat:", "Geolocation", NULL, 0x1, NULL },
    { "getLatitude", NULL, "D", 0x1, NULL },
    { "setLatitudeWithDouble:", "setLatitude", "V", 0x1, NULL },
    { "getLongitude", NULL, "D", 0x1, NULL },
    { "setLongitudeWithDouble:", "setLongitude", "V", 0x1, NULL },
    { "getAltitude", NULL, "D", 0x1, NULL },
    { "setAltitudeWithDouble:", "setAltitude", "V", 0x1, NULL },
    { "getXDoP", NULL, "F", 0x1, NULL },
    { "getYDoP", NULL, "F", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "latitude_", NULL, 0x2, "D", NULL,  },
    { "longitude_", NULL, 0x2, "D", NULL,  },
    { "altitude_", NULL, 0x2, "D", NULL,  },
    { "xDoP_", NULL, 0x2, "F", NULL,  },
    { "yDoP_", NULL, 0x2, "F", NULL,  },
  };
  static J2ObjcClassInfo _ARPGeolocation = { "Geolocation", "me.adaptive.arp.api", NULL, 0x1, 10, methods, 5, fields, 0, NULL};
  return &_ARPGeolocation;
}

@end
