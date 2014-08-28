//
//  Auto-generated from: me.adaptive.arp.api.IContactPhotoResultCallback
//
//  IContactPhotoResultCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IContactPhotoResultCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onResult(contactPhoto : [Byte])
     func onWarning(contactPhoto : [Byte], warning : IContactPhotoResultCallbackWarning)
     func onError(error : IContactPhotoResultCallbackError)

}

/**
 * Enumeration Declarations
 */
public enum IContactPhotoResultCallbackWarning {
     case LimitExceeded
}

public enum IContactPhotoResultCallbackError {
     case NoPermission
}

