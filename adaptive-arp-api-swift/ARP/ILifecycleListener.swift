//
//  Auto-generated from: me.adaptive.arp.api.ILifecycleListener
//
//  ILifecycleListener.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

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

