//
//  Auto-generated from: me.adaptive.arp.api.ILifecycleListener
//
//  ILifecycleListener.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol ILifecycleListener : IBaseListener {


     /**
      * Function Declarations
      */
     func onResult(lifecycle : Lifecycle)
     func onError(error : ILifecycleListenerError)
     func onWarning(lifecycle : Lifecycle, warning : ILifecycleListenerWarning)

}

/**
 * Enumeration Declarations
 */
public enum ILifecycleListenerError {

}

public enum ILifecycleListenerWarning {

}

