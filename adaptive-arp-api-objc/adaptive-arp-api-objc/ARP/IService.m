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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IService.java
//
//

#include "IOSClass.h"
#include "IService.h"
#include "IServiceResultCallback.h"
#include "Service.h"
#include "ServiceRequest.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIService : NSObject
@end

@implementation ARPIService

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "registerServiceWithARPService:", "registerService", "V", 0x401, NULL },
    { "unregisterServiceWithARPService:", "unregisterService", "V", 0x401, NULL },
    { "unregisterServices", NULL, "V", 0x401, NULL },
    { "isRegisteredWithARPService:", "isRegistered", "Z", 0x401, NULL },
    { "isRegisteredWithNSString:", "isRegistered", "Z", 0x401, NULL },
    { "getServiceWithNSString:", "getService", "Lme.adaptive.arp.api.Service;", 0x401, NULL },
    { "invokeServiceWithARPServiceRequest:withARPService:withARPIServiceResultCallback:", "invokeService", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIService = { "IService", "me.adaptive.arp.api", NULL, 0x201, 7, methods, 0, NULL, 0, NULL};
  return &_ARPIService;
}

@end

BOOL ARPIService_ServiceTypeEnum_initialized = NO;

ARPIService_ServiceTypeEnum *ARPIService_ServiceTypeEnum_values[10];

@implementation ARPIService_ServiceTypeEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIService_ServiceTypeEnum class]) {
    ARPIService_ServiceTypeEnum_SERVICETYPE_AMF_SERIALIZATION = [[ARPIService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_AMF_SERIALIZATION" withInt:0];
    ARPIService_ServiceTypeEnum_SERVICETYPE_GWT_RPC = [[ARPIService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_GWT_RPC" withInt:1];
    ARPIService_ServiceTypeEnum_SERVICETYPE_OCTET_BINARY = [[ARPIService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_OCTET_BINARY" withInt:2];
    ARPIService_ServiceTypeEnum_SERVICETYPE_REMOTING_SERIALIZATION = [[ARPIService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_REMOTING_SERIALIZATION" withInt:3];
    ARPIService_ServiceTypeEnum_SERVICETYPE_REST_JSON = [[ARPIService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_REST_JSON" withInt:4];
    ARPIService_ServiceTypeEnum_SERVICETYPE_REST_XML = [[ARPIService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_REST_XML" withInt:5];
    ARPIService_ServiceTypeEnum_SERVICETYPE_SOAP_JSON = [[ARPIService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_SOAP_JSON" withInt:6];
    ARPIService_ServiceTypeEnum_SERVICETYPE_SOAP_XML = [[ARPIService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_SOAP_XML" withInt:7];
    ARPIService_ServiceTypeEnum_SERVICETYPE_XMLRPC_JSON = [[ARPIService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_XMLRPC_JSON" withInt:8];
    ARPIService_ServiceTypeEnum_SERVICETYPE_XMLRPC_XML = [[ARPIService_ServiceTypeEnum alloc] initWithNSString:@"SERVICETYPE_XMLRPC_XML" withInt:9];
    ARPIService_ServiceTypeEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIService_ServiceTypeEnum_values count:10 type:[IOSClass classWithClass:[ARPIService_ServiceTypeEnum class]]];
}

+ (ARPIService_ServiceTypeEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 10; i++) {
    ARPIService_ServiceTypeEnum *e = ARPIService_ServiceTypeEnum_values[i];
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
    { "SERVICETYPE_AMF_SERIALIZATION", "SERVICETYPE_AMF_SERIALIZATION", 0x4019, "Lme.adaptive.arp.api.IService$ServiceType;", &ARPIService_ServiceTypeEnum_SERVICETYPE_AMF_SERIALIZATION,  },
    { "SERVICETYPE_GWT_RPC", "SERVICETYPE_GWT_RPC", 0x4019, "Lme.adaptive.arp.api.IService$ServiceType;", &ARPIService_ServiceTypeEnum_SERVICETYPE_GWT_RPC,  },
    { "SERVICETYPE_OCTET_BINARY", "SERVICETYPE_OCTET_BINARY", 0x4019, "Lme.adaptive.arp.api.IService$ServiceType;", &ARPIService_ServiceTypeEnum_SERVICETYPE_OCTET_BINARY,  },
    { "SERVICETYPE_REMOTING_SERIALIZATION", "SERVICETYPE_REMOTING_SERIALIZATION", 0x4019, "Lme.adaptive.arp.api.IService$ServiceType;", &ARPIService_ServiceTypeEnum_SERVICETYPE_REMOTING_SERIALIZATION,  },
    { "SERVICETYPE_REST_JSON", "SERVICETYPE_REST_JSON", 0x4019, "Lme.adaptive.arp.api.IService$ServiceType;", &ARPIService_ServiceTypeEnum_SERVICETYPE_REST_JSON,  },
    { "SERVICETYPE_REST_XML", "SERVICETYPE_REST_XML", 0x4019, "Lme.adaptive.arp.api.IService$ServiceType;", &ARPIService_ServiceTypeEnum_SERVICETYPE_REST_XML,  },
    { "SERVICETYPE_SOAP_JSON", "SERVICETYPE_SOAP_JSON", 0x4019, "Lme.adaptive.arp.api.IService$ServiceType;", &ARPIService_ServiceTypeEnum_SERVICETYPE_SOAP_JSON,  },
    { "SERVICETYPE_SOAP_XML", "SERVICETYPE_SOAP_XML", 0x4019, "Lme.adaptive.arp.api.IService$ServiceType;", &ARPIService_ServiceTypeEnum_SERVICETYPE_SOAP_XML,  },
    { "SERVICETYPE_XMLRPC_JSON", "SERVICETYPE_XMLRPC_JSON", 0x4019, "Lme.adaptive.arp.api.IService$ServiceType;", &ARPIService_ServiceTypeEnum_SERVICETYPE_XMLRPC_JSON,  },
    { "SERVICETYPE_XMLRPC_XML", "SERVICETYPE_XMLRPC_XML", 0x4019, "Lme.adaptive.arp.api.IService$ServiceType;", &ARPIService_ServiceTypeEnum_SERVICETYPE_XMLRPC_XML,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IService$ServiceType;"};
  static J2ObjcClassInfo _ARPIService_ServiceTypeEnum = { "ServiceType", "me.adaptive.arp.api", "IService", 0x4019, 1, methods, 10, fields, 1, superclass_type_args};
  return &_ARPIService_ServiceTypeEnum;
}

@end

BOOL ARPIService_ProtocolVersionEnum_initialized = NO;

ARPIService_ProtocolVersionEnum *ARPIService_ProtocolVersionEnum_values[2];

@implementation ARPIService_ProtocolVersionEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIService_ProtocolVersionEnum class]) {
    ARPIService_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_0 = [[ARPIService_ProtocolVersionEnum alloc] initWithNSString:@"HTTP_PROTOCOL_VERSION_1_0" withInt:0];
    ARPIService_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_1 = [[ARPIService_ProtocolVersionEnum alloc] initWithNSString:@"HTTP_PROTOCOL_VERSION_1_1" withInt:1];
    ARPIService_ProtocolVersionEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIService_ProtocolVersionEnum_values count:2 type:[IOSClass classWithClass:[ARPIService_ProtocolVersionEnum class]]];
}

+ (ARPIService_ProtocolVersionEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIService_ProtocolVersionEnum *e = ARPIService_ProtocolVersionEnum_values[i];
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
    { "HTTP_PROTOCOL_VERSION_1_0", "HTTP_PROTOCOL_VERSION_1_0", 0x4019, "Lme.adaptive.arp.api.IService$ProtocolVersion;", &ARPIService_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_0,  },
    { "HTTP_PROTOCOL_VERSION_1_1", "HTTP_PROTOCOL_VERSION_1_1", 0x4019, "Lme.adaptive.arp.api.IService$ProtocolVersion;", &ARPIService_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_1,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IService$ProtocolVersion;"};
  static J2ObjcClassInfo _ARPIService_ProtocolVersionEnum = { "ProtocolVersion", "me.adaptive.arp.api", "IService", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIService_ProtocolVersionEnum;
}

@end

BOOL ARPIService_ServiceMethodEnum_initialized = NO;

ARPIService_ServiceMethodEnum *ARPIService_ServiceMethodEnum_values[2];

@implementation ARPIService_ServiceMethodEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIService_ServiceMethodEnum class]) {
    ARPIService_ServiceMethodEnum_POST = [[ARPIService_ServiceMethodEnum alloc] initWithNSString:@"POST" withInt:0];
    ARPIService_ServiceMethodEnum_GET = [[ARPIService_ServiceMethodEnum alloc] initWithNSString:@"GET" withInt:1];
    ARPIService_ServiceMethodEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIService_ServiceMethodEnum_values count:2 type:[IOSClass classWithClass:[ARPIService_ServiceMethodEnum class]]];
}

+ (ARPIService_ServiceMethodEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIService_ServiceMethodEnum *e = ARPIService_ServiceMethodEnum_values[i];
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
    { "POST", "POST", 0x4019, "Lme.adaptive.arp.api.IService$ServiceMethod;", &ARPIService_ServiceMethodEnum_POST,  },
    { "GET", "GET", 0x4019, "Lme.adaptive.arp.api.IService$ServiceMethod;", &ARPIService_ServiceMethodEnum_GET,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IService$ServiceMethod;"};
  static J2ObjcClassInfo _ARPIService_ServiceMethodEnum = { "ServiceMethod", "me.adaptive.arp.api", "IService", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIService_ServiceMethodEnum;
}

@end
