//
//  Auto-generated from: me.adaptive.arp.api.IFileDataResultCallback
//
//  IFileDataResultCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IFileDataResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onResult(file : IFile, data : [Byte])
     func onError(file : IFile, error : IFileDataResultCallbackError)
     func onError(error : IFileDataResultCallbackError)
     func onWarning(file : IFile, warning : IFileDataResultCallbackWarning)

}

/**
 * Enumeration Declarations
 */
public enum IFileDataResultCallbackError {
     case InexistentFile, InsufficientSpace, Unauthorized
}

public enum IFileDataResultCallbackWarning {
     case ExceedMaximumSize
}

