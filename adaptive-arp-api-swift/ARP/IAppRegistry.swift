//
//  Auto-generated from: me.adaptive.arp.api.IAppRegistry
//
//  IAppRegistry.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IAppRegistry {


     /**
      * Function Declarations
      */
     func getApplicationAnalytics() -> IAnalytics
     func getApplicationGlobalization() -> IGlobalization
     func getApplicationLifecycle() -> ILifecycle
     func getApplicationManagement() -> IManagement
     func getApplicationPrinting() -> IPrinting
     func getApplicationSettings() -> ISettings
     func getApplicationUpdate() -> IUpdate
     func getPlatformContext() -> IAppContext
     func getPlatformContextWeb() -> IAppContextWebview
     func getPlatformResourceHandler() -> IAppResourceHandler
     func getSystemCapabilities() -> ICapabilities
     func getSystemDevice() -> IDevice
     func getSystemDisplay() -> IDisplay
     func getSystemOS() -> IOS
     func getSystemRuntime() -> IRuntime

}
