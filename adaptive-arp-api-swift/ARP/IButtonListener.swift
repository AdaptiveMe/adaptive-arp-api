//
//  Auto-generated from: me.adaptive.arp.api.IButtonListener
//
//  IButtonListener.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IButtonListener : IBaseListener {


     /**
      * Function Declarations
      */
     func onResult(button : Button)
     func onWarning(button : Button, warning : IButtonListenerWarning)
     func onError(error : IButtonListenerError)

}

/**
 * Enumeration Declarations
 */
public enum IButtonListenerWarning {
     case Not_Implemented
}

public enum IButtonListenerError {
     case Not_Present
}

