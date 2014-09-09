//
//  Auto-generated from: me.adaptive.arp.api.IAppServerManager
//
//  IAppServerManager.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IAppServerManager {


     /**
      * Function Declarations
      */
     func addServerListener(listener : IAppServerListener)
     func getServers() -> [IAppServer]
     func pauseServer(server : IAppServer)
     func removeServerListener(listener : IAppServerListener)
     func removeServerListeners()
     func resumeServer(server : IAppServer)
     func startServer()
     func stopServer(server : IAppServer)
     func stopServers()

}
