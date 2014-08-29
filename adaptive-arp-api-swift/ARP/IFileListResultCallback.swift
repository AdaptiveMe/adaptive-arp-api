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
     func onResult(files : [IFile])
     func onWarning(files : [IFile], warning : IFileListResultCallbackWarning)
     func onError(file : IFile, error : IFileListResultCallbackError)
     func onError(error : IFileListResultCallbackError)

}
