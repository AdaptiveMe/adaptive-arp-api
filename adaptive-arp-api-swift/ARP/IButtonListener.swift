//
//  Auto-generated from: me.adaptive.arp.api.IButtonListener
//
//  IButtonListener.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

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

