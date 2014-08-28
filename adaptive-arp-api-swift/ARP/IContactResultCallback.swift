//
//  Auto-generated from: me.adaptive.arp.api.IContactResultCallback
//
//  IContactResultCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:55 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IContactResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onResult(contacts : [Contact])
     func onError(error : IContactResultCallbackError)
     func onWarning(contacts : [Contact], warning : IContactResultCallbackWarning)

}

/**
 * Enumeration Declarations
 */
public enum IContactResultCallbackError {
     case NoPermission
}

public enum IContactResultCallbackWarning {
     case LimitExceeded
}

