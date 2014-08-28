//
//  Auto-generated from: me.adaptive.arp.api.ITableResultCallback
//
//  ITableResultCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol ITableResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onResult(table : Table)
     func onError(error : ITableResultCallbackError)
     func onWarning(table : Table, warning : ITableResultCallbackWarning)

}

/**
 * Enumeration Declarations
 */
public enum ITableResultCallbackError {
     case NoSpace, ReadOnlyTable, SqlException
}

public enum ITableResultCallbackWarning {
     case TableExists, TableLocked, NoResults
}

