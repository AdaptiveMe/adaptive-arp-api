//
//  Auto-generated from: me.adaptive.arp.api.IGeolocationListener
//
//  IGeolocationListener.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IGeolocationListener : IBaseListener {


     /**
      * Function Declarations
      */
     func onResult(geolocation : Geolocation)
     func onError(error : IGeolocationListenerError)
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

