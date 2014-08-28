//
//  Auto-generated from: me.adaptive.arp.api.ILifecycleListener
//
//  ILifecycleListener.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol ILifecycleListener : IBaseListener {


     /**
      * Function Declarations
      */
     func onResult(lifecycle : Lifecycle)
     func onWarning(lifecycle : Lifecycle, warning : ILifecycleListenerWarning)
     func onError(error : ILifecycleListenerError)

}

/**
 * Enumeration Declarations
 */
public enum ILifecycleListenerWarning {

}

public enum ILifecycleListenerError {

}

