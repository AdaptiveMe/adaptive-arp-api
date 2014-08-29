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
     func onResult(storageFile : IFile)
     func onWarning(sourceFile : IFile, destinationFile : IFile, warning : IFileResultCallbackWarning)
     func onError(file : IFile, error : IFileResultCallbackError)
     func onError(error : IFileResultCallbackError)

}

/**
 * Enumeration Declarations
 */
public enum IFileResultCallbackWarning {
     case SourceNotDeleted, RootDirectory
}

public enum IFileResultCallbackError {
     case FileExists, InsufficientSpace, Unauthorized
}

