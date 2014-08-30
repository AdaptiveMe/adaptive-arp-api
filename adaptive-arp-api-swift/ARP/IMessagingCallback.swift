//
//  Auto-generated from: me.adaptive.arp.api.IMessagingCallback
//
//  IMessagingCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IMessagingCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onError(error : IMessagingCallbackError)
     func onResult(success : Bool)
     func onWarning(success : Bool, warning : IMessagingCallbackWarning)

}
