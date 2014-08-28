//
//  Auto-generated from: me.adaptive.arp.api.IDevice
//
//  IDevice.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IDevice : IBaseSystem {


     /**
      * Function Declarations
      */
     func getDeviceInfo() -> DeviceInfo
     func getLocaleCurrent() -> Locale
     func addButtonListener(listener : IButtonListener)
     func removeButtonListener(listener : IButtonListener)
     func removeButtonListeners()

}
