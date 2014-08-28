//
//  Auto-generated from: me.adaptive.arp.api.INetworkReachabilityCallback
//
//  INetworkReachabilityCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol INetworkReachabilityCallback {


     /**
      * Function Declarations
      */
     func onResult(result : Bool)
     func onWarning(result : Bool, warning : INetworkReachabilityCallbackWarning)
     func onError(error : INetworkReachabilityCallbackError)

}

/**
 * Enumeration Declarations
 */
public enum INetworkReachabilityCallbackWarning {
     case IncorrectScheme
}

public enum INetworkReachabilityCallbackError {
     case NoPermission, NetworkOnMainThreadException
}

