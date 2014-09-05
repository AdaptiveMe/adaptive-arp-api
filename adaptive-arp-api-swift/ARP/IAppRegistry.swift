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
     func getApplicationContect() -> IAppContext
     func getApplicationResourceHandler() -> IAppResourceHandler
     func setApplicationContext(context : IAppContext)

}
