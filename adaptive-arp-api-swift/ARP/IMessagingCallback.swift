//
//  Auto-generated from: me.adaptive.arp.api.IMessagingCallback
//
//  IMessagingCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IMessagingCallback : IBaseCallback {


     /**
      * Function Declarations
      */
     func onError(error : IMessagingCallbackError)
     func onResult(success : Bool)
     func onWarning(success : Bool, warning : IMessagingCallbackWarning)

}

/**
 * Enumeration Declarations
 */
public enum IMessagingCallbackError {
     case SIM_Not_Present, Email_Account_Not_Found, Not_Sent
}

public enum IMessagingCallbackWarning {
     case Unable_To_Sent_All, Unable_to_fetch_attachment
}

