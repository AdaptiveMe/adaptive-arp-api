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

#ifndef _ARPService_H_
#define _ARPService_H_

@class ARPEndpoint;
@class ARPService_ServiceMethodEnum;
@class ARPService_ServiceTypeEnum;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@interface ARPService : NSObject {
 @public
  ARPEndpoint *endpoint_;
  NSString *name_;
  ARPService_ServiceMethodEnum *method_;
  ARPService_ServiceTypeEnum *type_;
}

- (id)initWithARPEndpoint:(ARPEndpoint *)endpoint
             withNSString:(NSString *)name
withARPService_ServiceMethodEnum:(ARPService_ServiceMethodEnum *)method
withARPService_ServiceTypeEnum:(ARPService_ServiceTypeEnum *)type;

- (ARPEndpoint *)getEndpoint;

- (void)setEndpointWithARPEndpoint:(ARPEndpoint *)endpoint;

- (NSString *)getName;

- (void)setNameWithNSString:(NSString *)name;

- (ARPService_ServiceMethodEnum *)getMethod;

- (void)setMethodWithARPService_ServiceMethodEnum:(ARPService_ServiceMethodEnum *)method;

- (ARPService_ServiceTypeEnum *)getType;

- (void)setTypeWithARPService_ServiceTypeEnum:(ARPService_ServiceTypeEnum *)type;

- (void)copyAllFieldsTo:(ARPService *)other;

@end

__attribute__((always_inline)) inline void ARPService_init() {}

J2OBJC_FIELD_SETTER(ARPService, endpoint_, ARPEndpoint *)
J2OBJC_FIELD_SETTER(ARPService, name_, NSString *)
J2OBJC_FIELD_SETTER(ARPService, method_, ARPService_ServiceMethodEnum *)
J2OBJC_FIELD_SETTER(ARPService, type_, ARPService_ServiceTypeEnum *)

typedef ARPService MeAdaptiveArpApiService;

typedef enum {
  ARPService_ServiceType_SERVICETYPE_AMF_SERIALIZATION = 0,
  ARPService_ServiceType_SERVICETYPE_GWT_RPC = 1,
  ARPService_ServiceType_SERVICETYPE_OCTET_BINARY = 2,
  ARPService_ServiceType_SERVICETYPE_REMOTING_SERIALIZATION = 3,
  ARPService_ServiceType_SERVICETYPE_REST_JSON = 4,
  ARPService_ServiceType_SERVICETYPE_REST_XML = 5,
  ARPService_ServiceType_SERVICETYPE_SOAP_JSON = 6,
  ARPService_ServiceType_SERVICETYPE_SOAP_XML = 7,
  ARPService_ServiceType_SERVICETYPE_XMLRPC_JSON = 8,
  ARPService_ServiceType_SERVICETYPE_XMLRPC_XML = 9,
} ARPService_ServiceType;

@interface ARPService_ServiceTypeEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPService_ServiceTypeEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPService_ServiceTypeEnum_initialized;
J2OBJC_STATIC_INIT(ARPService_ServiceTypeEnum)

FOUNDATION_EXPORT ARPService_ServiceTypeEnum *ARPService_ServiceTypeEnum_values[];

#define ARPService_ServiceTypeEnum_SERVICETYPE_AMF_SERIALIZATION ARPService_ServiceTypeEnum_values[ARPService_ServiceType_SERVICETYPE_AMF_SERIALIZATION]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceTypeEnum, SERVICETYPE_AMF_SERIALIZATION, ARPService_ServiceTypeEnum *)

#define ARPService_ServiceTypeEnum_SERVICETYPE_GWT_RPC ARPService_ServiceTypeEnum_values[ARPService_ServiceType_SERVICETYPE_GWT_RPC]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceTypeEnum, SERVICETYPE_GWT_RPC, ARPService_ServiceTypeEnum *)

#define ARPService_ServiceTypeEnum_SERVICETYPE_OCTET_BINARY ARPService_ServiceTypeEnum_values[ARPService_ServiceType_SERVICETYPE_OCTET_BINARY]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceTypeEnum, SERVICETYPE_OCTET_BINARY, ARPService_ServiceTypeEnum *)

#define ARPService_ServiceTypeEnum_SERVICETYPE_REMOTING_SERIALIZATION ARPService_ServiceTypeEnum_values[ARPService_ServiceType_SERVICETYPE_REMOTING_SERIALIZATION]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceTypeEnum, SERVICETYPE_REMOTING_SERIALIZATION, ARPService_ServiceTypeEnum *)

#define ARPService_ServiceTypeEnum_SERVICETYPE_REST_JSON ARPService_ServiceTypeEnum_values[ARPService_ServiceType_SERVICETYPE_REST_JSON]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceTypeEnum, SERVICETYPE_REST_JSON, ARPService_ServiceTypeEnum *)

#define ARPService_ServiceTypeEnum_SERVICETYPE_REST_XML ARPService_ServiceTypeEnum_values[ARPService_ServiceType_SERVICETYPE_REST_XML]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceTypeEnum, SERVICETYPE_REST_XML, ARPService_ServiceTypeEnum *)

#define ARPService_ServiceTypeEnum_SERVICETYPE_SOAP_JSON ARPService_ServiceTypeEnum_values[ARPService_ServiceType_SERVICETYPE_SOAP_JSON]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceTypeEnum, SERVICETYPE_SOAP_JSON, ARPService_ServiceTypeEnum *)

#define ARPService_ServiceTypeEnum_SERVICETYPE_SOAP_XML ARPService_ServiceTypeEnum_values[ARPService_ServiceType_SERVICETYPE_SOAP_XML]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceTypeEnum, SERVICETYPE_SOAP_XML, ARPService_ServiceTypeEnum *)

#define ARPService_ServiceTypeEnum_SERVICETYPE_XMLRPC_JSON ARPService_ServiceTypeEnum_values[ARPService_ServiceType_SERVICETYPE_XMLRPC_JSON]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceTypeEnum, SERVICETYPE_XMLRPC_JSON, ARPService_ServiceTypeEnum *)

#define ARPService_ServiceTypeEnum_SERVICETYPE_XMLRPC_XML ARPService_ServiceTypeEnum_values[ARPService_ServiceType_SERVICETYPE_XMLRPC_XML]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceTypeEnum, SERVICETYPE_XMLRPC_XML, ARPService_ServiceTypeEnum *)

typedef enum {
  ARPService_ServiceMethod_POST = 0,
  ARPService_ServiceMethod_GET = 1,
} ARPService_ServiceMethod;

@interface ARPService_ServiceMethodEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPService_ServiceMethodEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPService_ServiceMethodEnum_initialized;
J2OBJC_STATIC_INIT(ARPService_ServiceMethodEnum)

FOUNDATION_EXPORT ARPService_ServiceMethodEnum *ARPService_ServiceMethodEnum_values[];

#define ARPService_ServiceMethodEnum_POST ARPService_ServiceMethodEnum_values[ARPService_ServiceMethod_POST]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceMethodEnum, POST, ARPService_ServiceMethodEnum *)

#define ARPService_ServiceMethodEnum_GET ARPService_ServiceMethodEnum_values[ARPService_ServiceMethod_GET]
J2OBJC_STATIC_FIELD_GETTER(ARPService_ServiceMethodEnum, GET, ARPService_ServiceMethodEnum *)

#endif // _ARPService_H_
