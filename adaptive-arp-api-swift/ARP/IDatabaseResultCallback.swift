//
//  Auto-generated from: me.adaptive.arp.api.IDatabaseResultCallback
//
//  IDatabaseResultCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IDatabaseResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onWarning(database : Database, warning : IDatabaseResultCallbackWarning)
     func onError(error : IDatabaseResultCallbackError)
     func onResult(database : Database)

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

