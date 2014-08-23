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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/DeviceInfo.java
//
//

#include "DeviceInfo.h"

@implementation ARPDeviceInfo

- (id)initWithNSString:(NSString *)name
          withNSString:(NSString *)model
          withNSString:(NSString *)vendor
          withNSString:(NSString *)uuid {
  if (self = [super init]) {
    self->name_ = name;
    self->model_ = model;
    self->vendor_ = vendor;
    self->uuid_ = uuid;
  }
  return self;
}

- (NSString *)getName {
  return name_;
}

- (NSString *)getModel {
  return model_;
}

- (NSString *)getVendor {
  return vendor_;
}

- (NSString *)getUuid {
  return uuid_;
}

- (void)copyAllFieldsTo:(ARPDeviceInfo *)other {
  [super copyAllFieldsTo:other];
  other->model_ = model_;
  other->name_ = name_;
  other->uuid_ = uuid_;
  other->vendor_ = vendor_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:withNSString:withNSString:withNSString:", "DeviceInfo", NULL, 0x1, NULL },
    { "getName", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "getModel", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "getVendor", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "getUuid", NULL, "Ljava.lang.String;", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "name_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "model_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "vendor_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "uuid_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
  };
  static J2ObjcClassInfo _ARPDeviceInfo = { "DeviceInfo", "me.adaptive.arp.api", NULL, 0x1, 5, methods, 4, fields, 0, NULL};
  return &_ARPDeviceInfo;
}

@end
