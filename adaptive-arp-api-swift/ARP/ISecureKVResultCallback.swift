//
//  Auto-generated from: me.adaptive.arp.api.ISecureKVResultCallback
//
//  ISecureKVResultCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

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

