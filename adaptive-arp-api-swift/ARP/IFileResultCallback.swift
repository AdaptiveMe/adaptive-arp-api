//
//  Auto-generated from: me.adaptive.arp.api.IFileResultCallback
//
//  IFileResultCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

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

