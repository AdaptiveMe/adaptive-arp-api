//
//  Auto-generated from: me.adaptive.arp.api.ISession
//
//  ISession.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol ISession : IBaseCommunication {


     /**
      * Function Declarations
      */
     func getAttribute(name : String) -> AnyObject
     func getAttributes() -> [AnyObject]
     func getCookies() -> [Cookie]
     func listAttributeNames() -> [String]
     func removeAttribute(name : String)
     func removeAttributes()
     func removeCookie(cookie : Cookie)
     func removeCookies(cookies : [Cookie])
     func setAttribute(name : String, value : AnyObject)
     func setCookie(cookie : Cookie)
     func setCookies(cookies : [Cookie])

}
