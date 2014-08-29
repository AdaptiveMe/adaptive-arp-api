//
//  Auto-generated from: me.adaptive.arp.api.IBrowser
//
//  IBrowser.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IBrowser : IBaseUI {


     /**
      * Function Declarations
      */
     func openBrowser(url : String, title : String, buttonText : String) -> Bool

}
