//
//  Auto-generated from: me.adaptive.arp.api.ILogging
//
//  ILogging.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol ILogging : IBaseUtil {


     /**
      * Function Declarations
      */
     func log(level : ILoggingLogLevel, message : String)
     func log(level : ILoggingLogLevel, category : String, message : String)

}
