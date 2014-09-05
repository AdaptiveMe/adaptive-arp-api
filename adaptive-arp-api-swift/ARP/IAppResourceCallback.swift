//
//  Auto-generated from: me.adaptive.arp.api.IAppResourceCallback
//
//  IAppResourceCallback.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IAppResourceCallback {


     /**
      * Function Declarations
      */
     func onError(resource : IAppResource, error : IAppResourceCallbackError)
     func onResult(resource : IAppResource)
     func onWarning(resource : IAppResource, warning : IAppResourceCallbackWarning)

}
