//
//  Auto-generated from: me.adaptive.arp.api.IContactPhotoResultCallback
//
//  IContactPhotoResultCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IContactPhotoResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onError(error : IContactPhotoResultCallbackError)
     func onResult(contactPhoto : [Byte])
     func onWarning(contactPhoto : [Byte], warning : IContactPhotoResultCallbackWarning)

}

/**
 * Enumeration Declarations
 */
public enum IContactPhotoResultCallbackError {
     case NoPermission
}

public enum IContactPhotoResultCallbackWarning {
     case LimitExceeded
}

