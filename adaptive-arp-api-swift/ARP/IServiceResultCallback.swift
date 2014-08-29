//
//  Auto-generated from: me.adaptive.arp.api.IServiceResultCallback
//
//  IServiceResultCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IServiceResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onError(error : IServiceResultCallbackError)
     func onResult(response : ServiceResponse)
     func onWarning(response : ServiceResponse, warning : IServiceResultCallbackWarning)

}

/**
 * Enumeration Declarations
 */
public enum IServiceResultCallbackError {
     case Forbidden, NotFound, MethodNotAllowed, NotAllowed, NotAuthenticated, TimeOut, NoResponse, ServerError, Unreachable, Unknown
}

public enum IServiceResultCallbackWarning {
     case NotSecure, NotTrusted, Redirected
}

