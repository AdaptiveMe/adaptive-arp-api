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

#include "Endpoint.h"
#include "IService.h"
#include "Service.h"

@implementation ARPService

- (id)initWithARPEndpoint:(ARPEndpoint *)endpoint
             withNSString:(NSString *)name
withARPIService_ServiceMethodEnum:(ARPIService_ServiceMethodEnum *)method
withARPIService_ServiceTypeEnum:(ARPIService_ServiceTypeEnum *)type {
  if (self = [super init]) {
    self->endpoint_ = endpoint;
    self->name_ = name;
    self->method_ = method;
    self->type_ = type;
  }
  return self;
}

- (ARPEndpoint *)getEndpoint {
  return endpoint_;
}

- (void)setEndpointWithARPEndpoint:(ARPEndpoint *)endpoint {
  self->endpoint_ = endpoint;
}

- (NSString *)getName {
  return name_;
}

- (void)setNameWithNSString:(NSString *)name {
  self->name_ = name;
}

- (ARPIService_ServiceMethodEnum *)getMethod {
  return method_;
}

- (void)setMethodWithARPIService_ServiceMethodEnum:(ARPIService_ServiceMethodEnum *)method {
  self->method_ = method;
}

- (ARPIService_ServiceTypeEnum *)getType {
  return type_;
}

- (void)setTypeWithARPIService_ServiceTypeEnum:(ARPIService_ServiceTypeEnum *)type {
  self->type_ = type;
}

- (void)copyAllFieldsTo:(ARPService *)other {
  [super copyAllFieldsTo:other];
  other->endpoint_ = endpoint_;
  other->method_ = method_;
  other->name_ = name_;
  other->type_ = type_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithARPEndpoint:withNSString:withARPIService_ServiceMethodEnum:withARPIService_ServiceTypeEnum:", "Service", NULL, 0x1, NULL },
    { "getEndpoint", NULL, "Lme.adaptive.arp.api.Endpoint;", 0x1, NULL },
    { "setEndpointWithARPEndpoint:", "setEndpoint", "V", 0x1, NULL },
    { "getName", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setNameWithNSString:", "setName", "V", 0x1, NULL },
    { "getMethod", NULL, "Lme.adaptive.arp.api.IService$ServiceMethod;", 0x1, NULL },
    { "setMethodWithARPIService_ServiceMethodEnum:", "setMethod", "V", 0x1, NULL },
    { "getType", NULL, "Lme.adaptive.arp.api.IService$ServiceType;", 0x1, NULL },
    { "setTypeWithARPIService_ServiceTypeEnum:", "setType", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "endpoint_", NULL, 0x2, "Lme.adaptive.arp.api.Endpoint;", NULL,  },
    { "name_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "method_", NULL, 0x2, "Lme.adaptive.arp.api.IService$ServiceMethod;", NULL,  },
    { "type_", NULL, 0x2, "Lme.adaptive.arp.api.IService$ServiceType;", NULL,  },
  };
  static J2ObjcClassInfo _ARPService = { "Service", "me.adaptive.arp.api", NULL, 0x1, 9, methods, 4, fields, 0, NULL};
  return &_ARPService;
}

@end
