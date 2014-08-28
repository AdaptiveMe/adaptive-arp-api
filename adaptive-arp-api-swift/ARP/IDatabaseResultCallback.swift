//
//  Auto-generated from: me.adaptive.arp.api.IDatabaseResultCallback
//
//  IDatabaseResultCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IDatabaseResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onResult(database : Database)
     func onWarning(database : Database, warning : IDatabaseResultCallbackWarning)
     func onError(error : IDatabaseResultCallbackError)

}

/**
 * Enumeration Declarations
 */
public enum IDatabaseResultCallbackWarning {
     case DatabaseExists
}

public enum IDatabaseResultCallbackError {
     case NoSpace, SqlException
}

