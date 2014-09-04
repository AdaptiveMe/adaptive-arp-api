//
//  Auto-generated from: me.adaptive.arp.api.IAccelerationListener
//
//  IAccelerationListener.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IAccelerationListener : IBaseListener {


     /**
      * Function Declarations
      */
     func onError(error : IAccelerationListenerError)
     func onResult(acceleration : Acceleration)
     func onWarning(acceleration : Acceleration, warning : IAccelerationListenerWarning)

}
