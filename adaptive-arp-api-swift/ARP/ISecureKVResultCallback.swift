//
//  Auto-generated from: me.adaptive.arp.api.ISecureKVResultCallback
//
//  ISecureKVResultCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol ISecureKVResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onResult(keyValues : [SecureKeyPair])
     func onWarning(keyValues : [SecureKeyPair], warning : ISecureKVResultCallbackWarning)
     func onError(error : ISecureKVResultCallbackError)

}

/**
 * Enumeration Declarations
 */
public enum ISecureKVResultCallbackWarning {
     case EntryOverride
}

public enum ISecureKVResultCallbackError {
     case NoPermission, NoMatchesFound
}

