//
//  Auto-generated from: me.adaptive.arp.api.ICapabilities
//
//  ICapabilities.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol ICapabilities : IBaseSystem {


     /**
      * Function Declarations
      */
     func hasSensorSupport(type : ICapabilitiesSensor) -> Bool
     func hasCommunicationSupport(type : ICapabilitiesCommunication) -> Bool
     func hasDataSupport(type : ICapabilitiesData) -> Bool
     func hasMediaSupport(type : ICapabilitiesMedia) -> Bool
     func hasNetSupport(type : ICapabilitiesNet) -> Bool
     func hasNotificationSupport(type : ICapabilitiesNotification) -> Bool
     func hasButtonSupport(type : ICapabilitiesButton) -> Bool

}
