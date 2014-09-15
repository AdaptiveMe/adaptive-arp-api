//
//  Auto-generated from: me.adaptive.arp.api.IAppContextWebview
//
//  IAppContextWebview.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IAppContextWebview {


     /**
      * Function Declarations
      */
     func addWebview(webView : AnyObject)
     func getWebviewPrimary() -> AnyObject
     func getWebviews() -> [AnyObject]
     func removeWebview(webView : AnyObject)

}
