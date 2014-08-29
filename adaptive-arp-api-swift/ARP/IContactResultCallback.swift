//
//  Auto-generated from: me.adaptive.arp.api.IContactResultCallback
//
//  IContactResultCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IContactResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onWarning(contacts : [Contact], warning : IContactResultCallbackWarning)
     func onError(error : IContactResultCallbackError)
     func onResult(contacts : [Contact])

}

/**
 * Enumeration Declarations
 */
public enum IContactResultCallbackWarning {
     case LimitExceeded
}

public enum IContactResultCallbackError {
     case NoPermission
}

