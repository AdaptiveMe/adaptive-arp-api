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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Acceleration.java
//
//

#include "Acceleration.h"
#include "IAccelerometer.h"
#include "java/lang/System.h"

@implementation ARPAcceleration

- (id)initWithDouble:(double)x
          withDouble:(double)y
          withDouble:(double)z {
  if (self = [super init]) {
    self->x_ = x;
    self->y_ = y;
    self->z_ = z;
    self->status_ = ARPIAccelerometer_StatusEnum_get_Success();
    self->timeStamp_ = [JavaLangSystem currentTimeMillis];
  }
  return self;
}

- (id)initWithARPIAccelerometer_StatusEnum:(ARPIAccelerometer_StatusEnum *)status {
  if (self = [super init]) {
    self->status_ = status;
    self->timeStamp_ = [JavaLangSystem currentTimeMillis];
  }
  return self;
}

- (double)getX {
  return x_;
}

- (double)getY {
  return y_;
}

- (double)getZ {
  return z_;
}

- (ARPIAccelerometer_StatusEnum *)getStatus {
  return status_;
}

- (void)copyAllFieldsTo:(ARPAcceleration *)other {
  [super copyAllFieldsTo:other];
  other->status_ = status_;
  other->timeStamp_ = timeStamp_;
  other->x_ = x_;
  other->y_ = y_;
  other->z_ = z_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithDouble:withDouble:withDouble:", "Acceleration", NULL, 0x1, NULL },
    { "initWithARPIAccelerometer_StatusEnum:", "Acceleration", NULL, 0x1, NULL },
    { "getX", NULL, "D", 0x1, NULL },
    { "getY", NULL, "D", 0x1, NULL },
    { "getZ", NULL, "D", 0x1, NULL },
    { "getStatus", NULL, "Lme.adaptive.arp.api.IAccelerometer$Status;", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "x_", NULL, 0x0, "D", NULL,  },
    { "y_", NULL, 0x0, "D", NULL,  },
    { "z_", NULL, 0x0, "D", NULL,  },
    { "status_", NULL, 0x0, "Lme.adaptive.arp.api.IAccelerometer$Status;", NULL,  },
    { "timeStamp_", NULL, 0x0, "J", NULL,  },
  };
  static J2ObjcClassInfo _ARPAcceleration = { "Acceleration", "me.adaptive.arp.api", NULL, 0x1, 6, methods, 5, fields, 0, NULL};
  return &_ARPAcceleration;
}

@end
