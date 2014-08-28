//
//  Auto-generated from: me.adaptive.arp.api.INetworkReachabilityCallback
//
//  INetworkReachabilityCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol INetworkReachabilityCallback {


     /**
      * Function Declarations
      */
     func onResult(result : Bool)
     func onError(error : INetworkReachabilityCallbackError)
     func onWarning(result : Bool, warning : INetworkReachabilityCallbackWarning)

}

/**
 * Enumeration Declarations
 */
public enum INetworkReachabilityCallbackError {
     case NoPermission, NetworkOnMainThreadException
}

public enum INetworkReachabilityCallbackWarning {
     case IncorrectScheme
}

