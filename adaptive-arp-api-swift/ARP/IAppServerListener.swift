//
//  Auto-generated from: me.adaptive.arp.api.IAppServerListener
//
//  IAppServerListener.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IAppServerListener : IBaseListener {


     /**
      * Function Declarations
      */
     func onPaused(server : IAppServer)
     func onPausing(server : IAppServer)
     func onResumed(server : IAppServer)
     func onResuming(server : IAppServer)
     func onStart(server : IAppServer)
     func onStopped(server : IAppServer)
     func onStopping(server : IAppServer)

}
