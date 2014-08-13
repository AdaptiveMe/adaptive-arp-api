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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IService.java
//
//

#ifndef _ARPIService_H_
#define _ARPIService_H_

@class ARPService;
@class ARPServiceRequest;
@protocol ARPIServiceResultCallback;

#import "JreEmulation.h"
#include "IBaseData.h"
#include "java/lang/Enum.h"

@protocol ARPIService < ARPIBaseData, NSObject, JavaObject >
- (void)registerServiceWithARPService:(ARPService *)service;

- (void)unregisterServiceWithARPService:(ARPService *)service;

- (void)unregisterServices;

- (BOOL)isRegisteredWithARPService:(ARPService *)service;

- (BOOL)isRegisteredWithNSString:(NSString *)serviceName;

- (ARPService *)getServiceWithNSString:(NSString *)serviceName;

- (void)InvokeServiceWithARPServiceRequest:(ARPServiceRequest *)serviceRequest
                            withARPService:(ARPService *)service
             withARPIServiceResultCallback:(id<ARPIServiceResultCallback>)callback;

@end

__attribute__((always_inline)) inline void ARPIService_init() {}

#define MeAdaptiveArpApiIService ARPIService

typedef enum {
  ARPIService_ServiceType_SERVICETYPE_AMF_SERIALIZATION = 0,
  ARPIService_ServiceType_SERVICETYPE_GWT_RPC = 1,
  ARPIService_ServiceType_SERVICETYPE_OCTET_BINARY = 2,
  ARPIService_ServiceType_SERVICETYPE_REMOTING_SERIALIZATION = 3,
  ARPIService_ServiceType_SERVICETYPE_REST_JSON = 4,
  ARPIService_ServiceType_SERVICETYPE_REST_XML = 5,
  ARPIService_ServiceType_SERVICETYPE_SOAP_JSON = 6,
  ARPIService_ServiceType_SERVICETYPE_SOAP_XML = 7,
  ARPIService_ServiceType_SERVICETYPE_XMLRPC_JSON = 8,
  ARPIService_ServiceType_SERVICETYPE_XMLRPC_XML = 9,
} ARPIService_ServiceType;

@interface ARPIService_ServiceTypeEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIService_ServiceTypeEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIService_ServiceTypeEnum_initialized;
J2OBJC_STATIC_INIT(ARPIService_ServiceTypeEnum)

FOUNDATION_EXPORT ARPIService_ServiceTypeEnum *ARPIService_ServiceTypeEnum_values[];

#define ARPIService_ServiceTypeEnum_SERVICETYPE_AMF_SERIALIZATION ARPIService_ServiceTypeEnum_values[ARPIService_ServiceType_SERVICETYPE_AMF_SERIALIZATION]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceTypeEnum, SERVICETYPE_AMF_SERIALIZATION, ARPIService_ServiceTypeEnum *)

#define ARPIService_ServiceTypeEnum_SERVICETYPE_GWT_RPC ARPIService_ServiceTypeEnum_values[ARPIService_ServiceType_SERVICETYPE_GWT_RPC]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceTypeEnum, SERVICETYPE_GWT_RPC, ARPIService_ServiceTypeEnum *)

#define ARPIService_ServiceTypeEnum_SERVICETYPE_OCTET_BINARY ARPIService_ServiceTypeEnum_values[ARPIService_ServiceType_SERVICETYPE_OCTET_BINARY]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceTypeEnum, SERVICETYPE_OCTET_BINARY, ARPIService_ServiceTypeEnum *)

#define ARPIService_ServiceTypeEnum_SERVICETYPE_REMOTING_SERIALIZATION ARPIService_ServiceTypeEnum_values[ARPIService_ServiceType_SERVICETYPE_REMOTING_SERIALIZATION]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceTypeEnum, SERVICETYPE_REMOTING_SERIALIZATION, ARPIService_ServiceTypeEnum *)

#define ARPIService_ServiceTypeEnum_SERVICETYPE_REST_JSON ARPIService_ServiceTypeEnum_values[ARPIService_ServiceType_SERVICETYPE_REST_JSON]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceTypeEnum, SERVICETYPE_REST_JSON, ARPIService_ServiceTypeEnum *)

#define ARPIService_ServiceTypeEnum_SERVICETYPE_REST_XML ARPIService_ServiceTypeEnum_values[ARPIService_ServiceType_SERVICETYPE_REST_XML]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceTypeEnum, SERVICETYPE_REST_XML, ARPIService_ServiceTypeEnum *)

#define ARPIService_ServiceTypeEnum_SERVICETYPE_SOAP_JSON ARPIService_ServiceTypeEnum_values[ARPIService_ServiceType_SERVICETYPE_SOAP_JSON]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceTypeEnum, SERVICETYPE_SOAP_JSON, ARPIService_ServiceTypeEnum *)

#define ARPIService_ServiceTypeEnum_SERVICETYPE_SOAP_XML ARPIService_ServiceTypeEnum_values[ARPIService_ServiceType_SERVICETYPE_SOAP_XML]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceTypeEnum, SERVICETYPE_SOAP_XML, ARPIService_ServiceTypeEnum *)

#define ARPIService_ServiceTypeEnum_SERVICETYPE_XMLRPC_JSON ARPIService_ServiceTypeEnum_values[ARPIService_ServiceType_SERVICETYPE_XMLRPC_JSON]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceTypeEnum, SERVICETYPE_XMLRPC_JSON, ARPIService_ServiceTypeEnum *)

#define ARPIService_ServiceTypeEnum_SERVICETYPE_XMLRPC_XML ARPIService_ServiceTypeEnum_values[ARPIService_ServiceType_SERVICETYPE_XMLRPC_XML]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceTypeEnum, SERVICETYPE_XMLRPC_XML, ARPIService_ServiceTypeEnum *)

typedef enum {
  ARPIService_ProtocolVersion_HTTP_PROTOCOL_VERSION_1_0 = 0,
  ARPIService_ProtocolVersion_HTTP_PROTOCOL_VERSION_1_1 = 1,
} ARPIService_ProtocolVersion;

@interface ARPIService_ProtocolVersionEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIService_ProtocolVersionEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIService_ProtocolVersionEnum_initialized;
J2OBJC_STATIC_INIT(ARPIService_ProtocolVersionEnum)

FOUNDATION_EXPORT ARPIService_ProtocolVersionEnum *ARPIService_ProtocolVersionEnum_values[];

#define ARPIService_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_0 ARPIService_ProtocolVersionEnum_values[ARPIService_ProtocolVersion_HTTP_PROTOCOL_VERSION_1_0]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ProtocolVersionEnum, HTTP_PROTOCOL_VERSION_1_0, ARPIService_ProtocolVersionEnum *)

#define ARPIService_ProtocolVersionEnum_HTTP_PROTOCOL_VERSION_1_1 ARPIService_ProtocolVersionEnum_values[ARPIService_ProtocolVersion_HTTP_PROTOCOL_VERSION_1_1]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ProtocolVersionEnum, HTTP_PROTOCOL_VERSION_1_1, ARPIService_ProtocolVersionEnum *)

typedef enum {
  ARPIService_ServiceMethod_POST = 0,
  ARPIService_ServiceMethod_GET = 1,
} ARPIService_ServiceMethod;

@interface ARPIService_ServiceMethodEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIService_ServiceMethodEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIService_ServiceMethodEnum_initialized;
J2OBJC_STATIC_INIT(ARPIService_ServiceMethodEnum)

FOUNDATION_EXPORT ARPIService_ServiceMethodEnum *ARPIService_ServiceMethodEnum_values[];

#define ARPIService_ServiceMethodEnum_POST ARPIService_ServiceMethodEnum_values[ARPIService_ServiceMethod_POST]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceMethodEnum, POST, ARPIService_ServiceMethodEnum *)

#define ARPIService_ServiceMethodEnum_GET ARPIService_ServiceMethodEnum_values[ARPIService_ServiceMethod_GET]
J2OBJC_STATIC_FIELD_GETTER(ARPIService_ServiceMethodEnum, GET, ARPIService_ServiceMethodEnum *)

#endif // _ARPIService_H_
