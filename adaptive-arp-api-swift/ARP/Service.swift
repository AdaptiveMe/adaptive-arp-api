//
//  Auto-generated from: me.adaptive.arp.api.Service
//
//  Service.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class Service {

     /**
      * Field Declarations
      */
     var endpoint : Endpoint?
     var name : String
     var method : ServiceMethod?
     var type : ServiceType?

     /**
      * Enumeration Declarations
      */
     public enum ServiceMethod {
          case POST, GET
     }
     public enum ServiceType {
          case SERVICETYPE_AMF_SERIALIZATION, SERVICETYPE_GWT_RPC, SERVICETYPE_OCTET_BINARY, SERVICETYPE_REMOTING_SERIALIZATION, SERVICETYPE_REST_JSON, SERVICETYPE_REST_XML, SERVICETYPE_SOAP_JSON, SERVICETYPE_SOAP_XML, SERVICETYPE_XMLRPC_JSON, SERVICETYPE_XMLRPC_XML
     }

     /**
      * Initialization
      */
     public init() {
          self.endpoint = nil
          self.name = ""
          self.method = nil
          self.type = nil
     }

     public convenience init(endpoint : Endpoint, name : String, method : ServiceMethod, type : ServiceType) {
          self.init()
          self.endpoint = endpoint
          self.name = name
          self.method = method
          self.type = type
     }


     /**
      * Function Declarations
      */
     public func getName() -> String {
          return self.name
     }

     public func getMethod() -> ServiceMethod {
          return self.method!
     }

     public func setName(name : String) {
          self.name = name
     }

     public func getType() -> ServiceType {
          return self.type!
     }

     public func setType(type : ServiceType) {
          self.type = type
     }

     public func getEndpoint() -> Endpoint {
          return self.endpoint!
     }

     public func setEndpoint(endpoint : Endpoint) {
          self.endpoint = endpoint
     }

     public func setMethod(method : ServiceMethod) {
          self.method = method
     }


}
