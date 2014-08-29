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
     func onError(error : IDatabaseResultCallbackError)
     func onResult(database : Database)
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

