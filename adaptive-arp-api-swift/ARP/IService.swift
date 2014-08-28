//
//  Auto-generated from: me.adaptive.arp.api.IService
//
//  IService.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IService : IBaseCommunication {


     /**
      * Function Declarations
      */
     func isRegistered(service : Service) -> Bool
     func isRegistered(serviceName : String) -> Bool
     func registerService(service : Service)
     func unregisterService(service : Service)
     func unregisterServices()
     func InvokeService(serviceRequest : ServiceRequest, service : Service, callback : IServiceResultCallback)
     func getService(serviceName : String) -> Service

}
