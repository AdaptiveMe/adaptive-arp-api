//
//  Auto-generated from: me.adaptive.arp.api.IAppServer
//
//  IAppServer.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IAppServer {


     /**
      * Function Declarations
      */
     func getBaseURI() -> String
     func getHost() -> String
     func getPath() -> String
     func getPort() -> Int
     func getScheme() -> String
     func pauseServer()
     func resumeServer()
     func startServer()
     func stopServer()

}
