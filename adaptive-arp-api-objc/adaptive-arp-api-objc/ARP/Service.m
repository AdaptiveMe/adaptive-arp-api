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
#include "IOSClass.h"
#include "Service.h"
#include "java/lang/IllegalArgumentException.h"

@implementation ARPService

- (id)initWithARPEndpoint:(ARPEndpoint *)endpoint
             withNSString:(NSString *)name
withARPService_ServiceMethodEnum:(ARPService_ServiceMethodEnum *)method
withARPService_ServiceTypeEnum:(ARPService_ServiceTypeEnum *)type {
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

- (ARPService_ServiceMethodEnum *)getMethod {
  return method_;
}

- (void)setMethodWithARPService_ServiceMethodEnum:(ARPService_ServiceMethodEnum *)method {
  self->method_ = method;
}

- (ARPService_ServiceTypeEnum *)getType {
  return type_;
}

- (void)setTypeWithARPService_ServiceTypeEnum:(ARPService_ServiceTypeEnum *)type {
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
    { "initWithARPEndpoint:withNSString:withARPService_ServiceMethodEnum:withARPService_ServiceTypeEnum:", "Service", NULL, 0x1, NULL },
    { "getEndpoint", NULL, "Lme.adaptive.arp.api.Endpoint;", 0x1, NULL },
    { "setEndpointWithARPEndpoint:", "setEndpoint", "V", 0x1, NULL },
    { "getName", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setNameWithNSString:", "setName", "V", 0x1, NULL },
    { "getMethod", NULL, "Lme.adaptive.arp.api.Service$ServiceMethod;", 0x1, NULL },
    { "setMethodWithARPService_ServiceMethodEnum:", "setMethod", "V", 0x1, NULL },
    { "getType", NULL, "Lme.adaptive.arp.api.Service$ServiceType;", 0x1, NULL },
    { "setTypeWithARPService_ServiceTypeEnum:", "setType", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "endpoint_", NULL, 0x2, "Lme.adaptive.arp.api.Endpoint;", NULL,  },
    { "name_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "method_", NULL, 0x2, "Lme.adaptive.arp.api.Service$ServiceMethod;", NULL,  },
    { "type_", NULL, 0x2, "Lme.adaptive.arp.api.Service$ServiceType;", NULL,  },
  };
  static J2ObjcClassInfo _ARPService = { "Service", "me.adaptive.arp.api", NULL, 0x1, 9, methods, 4, fields, 0, NULL};
  return &_ARPService;
}

@end

BOOL ARPService_ServiceTypeEnum_initialized = NO;

ARPService_ServiceTypeEnum *ARPService_ServiceTypeEnum_values[10];

@implementation ARPService_ServiceTypeEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPService_ServiceTypeEnum class]) {
    ARPService_ServiceTypeEnum_SERVICETYPE_AMF_SERIALIZATION = [[ARPService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_AMF_SERIALIZATION" withInt:0];
    ARPService_ServiceTypeEnum_SERVICETYPE_GWT_RPC = [[ARPService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_GWT_RPC" withInt:1];
    ARPService_ServiceTypeEnum_SERVICETYPE_OCTET_BINARY = [[ARPService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_OCTET_BINARY" withInt:2];
    ARPService_ServiceTypeEnum_SERVICETYPE_REMOTING_SERIALIZATION = [[ARPService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_REMOTING_SERIALIZATION" withInt:3];
    ARPService_ServiceTypeEnum_SERVICETYPE_REST_JSON = [[ARPService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_REST_JSON" withInt:4];
    ARPService_ServiceTypeEnum_SERVICETYPE_REST_XML = [[ARPService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_REST_XML" withInt:5];
    ARPService_ServiceTypeEnum_SERVICETYPE_SOAP_JSON = [[ARPService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_SOAP_JSON" withInt:6];
    ARPService_ServiceTypeEnum_SERVICETYPE_SOAP_XML = [[ARPService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_SOAP_XML" withInt:7];
    ARPService_ServiceTypeEnum_SERVICETYPE_XMLRPC_JSON = [[ARPService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_XMLRPC_JSON" withInt:8];
    ARPService_ServiceTypeEnum_SERVICETYPE_XMLRPC_XML = [[ARPService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_XMLRPC_XML" withInt:9];
    ARPService_ServiceTypeEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPService_ServiceTypeEnum_values count:10 type:[IOSClass classWithClass:[ARPService_ServiceTypeEnum class]]];
}

+ (ARPService_ServiceTypeEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 10; i++) {
    ARPService_ServiceTypeEnum *e = ARPService_ServiceTypeEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "SERVICETYPE_AMF_SERIALIZATION", "SERVICETYPE_AMF_SERIALIZATION", 0x4019, "Lme.adaptive.arp.api.Service$ServiceType;", &ARPService_ServiceTypeEnum_SERVICETYPE_AMF_SERIALIZATION,  },
    { "SERVICETYPE_GWT_RPC", "SERVICETYPE_GWT_RPC", 0x4019, "Lme.adaptive.arp.api.Service$ServiceType;", &ARPService_ServiceTypeEnum_SERVICETYPE_GWT_RPC,  },
    { "SERVICETYPE_OCTET_BINARY", "SERVICETYPE_OCTET_BINARY", 0x4019, "Lme.adaptive.arp.api.Service$ServiceType;", &ARPService_ServiceTypeEnum_SERVICETYPE_OCTET_BINARY,  },
    { "SERVICETYPE_REMOTING_SERIALIZATION", "SERVICETYPE_REMOTING_SERIALIZATION", 0x4019, "Lme.adaptive.arp.api.Service$ServiceType;", &ARPService_ServiceTypeEnum_SERVICETYPE_REMOTING_SERIALIZATION,  },
    { "SERVICETYPE_REST_JSON", "SERVICETYPE_REST_JSON", 0x4019, "Lme.adaptive.arp.api.Service$ServiceType;", &ARPService_ServiceTypeEnum_SERVICETYPE_REST_JSON,  },
    { "SERVICETYPE_REST_XML", "SERVICETYPE_REST_XML", 0x4019, "Lme.adaptive.arp.api.Service$ServiceType;", &ARPService_ServiceTypeEnum_SERVICETYPE_REST_XML,  },
    { "SERVICETYPE_SOAP_JSON", "SERVICETYPE_SOAP_JSON", 0x4019, "Lme.adaptive.arp.api.Service$ServiceType;", &ARPService_ServiceTypeEnum_SERVICETYPE_SOAP_JSON,  },
    { "SERVICETYPE_SOAP_XML", "SERVICETYPE_SOAP_XML", 0x4019, "Lme.adaptive.arp.api.Service$ServiceType;", &ARPService_ServiceTypeEnum_SERVICETYPE_SOAP_XML,  },
    { "SERVICETYPE_XMLRPC_JSON", "SERVICETYPE_XMLRPC_JSON", 0x4019, "Lme.adaptive.arp.api.Service$ServiceType;", &ARPService_ServiceTypeEnum_SERVICETYPE_XMLRPC_JSON,  },
    { "SERVICETYPE_XMLRPC_XML", "SERVICETYPE_XMLRPC_XML", 0x4019, "Lme.adaptive.arp.api.Service$ServiceType;", &ARPService_ServiceTypeEnum_SERVICETYPE_XMLRPC_XML,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.Service$ServiceType;"};
  static J2ObjcClassInfo _ARPService_ServiceTypeEnum = { "ServiceType", "me.adaptive.arp.api", "Service", 0x4019, 1, methods, 10, fields, 1, superclass_type_args};
  return &_ARPService_ServiceTypeEnum;
}

@end

BOOL ARPService_ServiceMethodEnum_initialized = NO;

ARPService_ServiceMethodEnum *ARPService_ServiceMethodEnum_values[2];

@implementation ARPService_ServiceMethodEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPService_ServiceMethodEnum class]) {
    ARPService_ServiceMethodEnum_POST = [[ARPService_ServiceMethodEnum alloc] initWithNSString:@"POST" withInt:0];
    ARPService_ServiceMethodEnum_GET = [[ARPService_ServiceMethodEnum alloc] initWithNSString:@"GET" withInt:1];
    ARPService_ServiceMethodEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPService_ServiceMethodEnum_values count:2 type:[IOSClass classWithClass:[ARPService_ServiceMethodEnum class]]];
}

+ (ARPService_ServiceMethodEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPService_ServiceMethodEnum *e = ARPService_ServiceMethodEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "POST", "POST", 0x4019, "Lme.adaptive.arp.api.Service$ServiceMethod;", &ARPService_ServiceMethodEnum_POST,  },
    { "GET", "GET", 0x4019, "Lme.adaptive.arp.api.Service$ServiceMethod;", &ARPService_ServiceMethodEnum_GET,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.Service$ServiceMethod;"};
  static J2ObjcClassInfo _ARPService_ServiceMethodEnum = { "ServiceMethod", "me.adaptive.arp.api", "Service", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPService_ServiceMethodEnum;
}

@end
