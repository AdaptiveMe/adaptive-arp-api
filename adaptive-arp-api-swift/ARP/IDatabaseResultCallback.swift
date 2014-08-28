//
//  Auto-generated from: me.adaptive.arp.api.IDatabaseResultCallback
//
//  IDatabaseResultCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IDatabaseResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onResult(database : Database)
     func onError(error : IDatabaseResultCallbackError)
     func onWarning(database : Database, warning : IDatabaseResultCallbackWarning)

}

/**
 * Enumeration Declarations
 */
public enum IDatabaseResultCallbackError {
     case NoSpace, SqlException
}

public enum IDatabaseResultCallbackWarning {
     case DatabaseExists
}

