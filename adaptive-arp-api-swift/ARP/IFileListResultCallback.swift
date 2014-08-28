//
//  Auto-generated from: me.adaptive.arp.api.IFileListResultCallback
//
//  IFileListResultCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

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

/**
 * Enumeration Declarations
 */
public enum IFileListResultCallbackWarning {
     case PartialResult
}

public enum IFileListResultCallbackError {
     case InexistentFile, Unauthorized
}

