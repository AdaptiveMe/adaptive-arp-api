//
//  Auto-generated from: me.adaptive.arp.api.IServiceResultCallback
//
//  IServiceResultCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IServiceResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onResult(response : ServiceResponse)
     func onWarning(response : ServiceResponse, warning : IServiceResultCallbackWarning)
     func onError(error : IServiceResultCallbackError)

}

/**
 * Enumeration Declarations
 */
public enum IServiceResultCallbackWarning {
     case NotSecure, NotTrusted, Redirected
}

public enum IServiceResultCallbackError {
     case Forbidden, NotFound, MethodNotAllowed, NotAllowed, NotAuthenticated, TimeOut, NoResponse, ServerError, Unreachable, Unknown
}

