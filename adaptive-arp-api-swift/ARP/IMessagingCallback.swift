//
//  Auto-generated from: me.adaptive.arp.api.IMessagingCallback
//
//  IMessagingCallback.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IMessagingCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onResult(success : Bool)
     func onWarning(success : Bool, warning : IMessagingCallbackWarning)
     func onError(error : IMessagingCallbackError)

}

/**
 * Enumeration Declarations
 */
public enum IMessagingCallbackWarning {
     case Unable_To_Sent_All, Unable_to_fetch_attachment
}

public enum IMessagingCallbackError {
     case SIM_Not_Present, Email_Account_Not_Found, Not_Sent
}

