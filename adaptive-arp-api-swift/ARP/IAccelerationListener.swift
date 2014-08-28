//
//  Auto-generated from: me.adaptive.arp.api.IAccelerationListener
//
//  IAccelerationListener.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IAccelerationListener : IBaseListener {


     /**
      * Function Declarations
      */
     func onResult(acceleration : Acceleration)
     func onWarning(acceleration : Acceleration)
     func onError(acceleration : Acceleration)

}
