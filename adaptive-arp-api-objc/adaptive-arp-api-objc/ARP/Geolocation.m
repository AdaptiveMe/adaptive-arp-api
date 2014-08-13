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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Geolocation.java
//
//

#include "Geolocation.h"

@implementation ARPGeolocation

- (id)initWithDouble:(double)latitude
          withDouble:(double)longitude
          withDouble:(double)altitude
           withFloat:(float)XDoP
           withFloat:(float)YDoP {
  if (self = [super init]) {
    self->latitude_ = latitude;
    self->longitude_ = longitude;
    self->altitude_ = altitude;
    self->XDoP_ = XDoP;
    self->YDoP_ = YDoP;
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
  return XDoP_;
}

- (float)getYDoP {
  return YDoP_;
}

- (void)copyAllFieldsTo:(ARPGeolocation *)other {
  [super copyAllFieldsTo:other];
  other->XDoP_ = XDoP_;
  other->YDoP_ = YDoP_;
  other->altitude_ = altitude_;
  other->latitude_ = latitude_;
  other->longitude_ = longitude_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
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
    { "XDoP_", NULL, 0x2, "F", NULL,  },
    { "YDoP_", NULL, 0x2, "F", NULL,  },
  };
  static J2ObjcClassInfo _ARPGeolocation = { "Geolocation", "me.adaptive.arp.api", NULL, 0x1, 9, methods, 5, fields, 0, NULL};
  return &_ARPGeolocation;
}

@end
