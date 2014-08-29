//
//  Auto-generated from: me.adaptive.arp.api.IFileDataResultCallback
//
//  IFileDataResultCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IFileDataResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onResult(file : IFile, data : [Byte])
     func onWarning(file : IFile, warning : IFileDataResultCallbackWarning)
     func onError(file : IFile, error : IFileDataResultCallbackError)
     func onError(error : IFileDataResultCallbackError)

}
