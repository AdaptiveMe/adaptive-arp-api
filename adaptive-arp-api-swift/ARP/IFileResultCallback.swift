//
//  Auto-generated from: me.adaptive.arp.api.IFileResultCallback
//
//  IFileResultCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IFileResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onError<T : IFile>(file : T, error : IFileResultCallbackError)
     func onError(error : IFileResultCallbackError)
     func onResult<T : IFile>(storageFile : T)
     func onWarning<T : IFile>(sourceFile : T, destinationFile : T, warning : IFileResultCallbackWarning)

}
