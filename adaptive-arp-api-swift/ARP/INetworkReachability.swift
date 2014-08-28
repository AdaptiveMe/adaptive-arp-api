//
//  Auto-generated from: me.adaptive.arp.api.INetworkReachability
//
//  INetworkReachability.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol INetworkReachability : IBaseCommunication {


     /**
      * Function Declarations
      */
     func isNetworkReachable(url : String, callback : INetworkReachabilityCallback)

}
