//
//  Auto-generated from: me.adaptive.arp.api.IFileListResultCallback
//
//  IFileListResultCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IFileListResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onError<T : IFile>(file : T, error : IFileListResultCallbackError)
     func onError(error : IFileListResultCallbackError)
     func onResult<T : IFile>(files : [T])
     func onWarning<T : IFile>(files : [T], warning : IFileListResultCallbackWarning)

}
