//
//  Auto-generated from: me.adaptive.arp.api.ITableResultCallback
//
//  ITableResultCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol ITableResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onResult(table : Table)
     func onWarning(table : Table, warning : ITableResultCallbackWarning)
     func onError(error : ITableResultCallbackError)

}

/**
 * Enumeration Declarations
 */
public enum ITableResultCallbackWarning {
     case TableExists, TableLocked, NoResults
}

public enum ITableResultCallbackError {
     case NoSpace, ReadOnlyTable, SqlException
}

