//
//  Auto-generated from: me.adaptive.arp.api.IGeolocationListener
//
//  IGeolocationListener.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IGeolocationListener : IBaseListener {


     /**
      * Function Declarations
      */
     func onError(error : IGeolocationListenerError)
     func onResult(geolocation : Geolocation)
     func onWarning(geolocation : Geolocation, warning : IGeolocationListenerWarning)

}

/**
 * Enumeration Declarations
 */
public enum IGeolocationListenerError {

}

public enum IGeolocationListenerWarning {
     case HighDoP
}

