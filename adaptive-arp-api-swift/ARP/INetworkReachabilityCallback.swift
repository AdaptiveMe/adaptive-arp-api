//
//  Auto-generated from: me.adaptive.arp.api.INetworkReachabilityCallback
//
//  INetworkReachabilityCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol INetworkReachabilityCallback {


     /**
      * Function Declarations
      */
     func onWarning(result : Bool, warning : INetworkReachabilityCallbackWarning)
     func onError(error : INetworkReachabilityCallbackError)
     func onResult(result : Bool)

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

