//
//  Auto-generated from: me.adaptive.arp.api.ITelephony
//
//  ITelephony.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol ITelephony : IBaseCommunication {


     /**
      * Function Declarations
      */
     func call(number : String) -> Status

}
