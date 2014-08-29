//
//  Auto-generated from: me.adaptive.arp.api.IDevice
//
//  IDevice.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IDevice : IBaseSystem {


     /**
      * Function Declarations
      */
     func getLocaleCurrent() -> Locale
     func getDeviceInfo() -> DeviceInfo
     func addButtonListener(listener : IButtonListener)
     func removeButtonListener(listener : IButtonListener)
     func removeButtonListeners()

}
