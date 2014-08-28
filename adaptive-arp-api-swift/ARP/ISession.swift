//
//  Auto-generated from: me.adaptive.arp.api.ISession
//
//  ISession.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol ISession : IBaseCommunication {


     /**
      * Function Declarations
      */
     func getAttributes() -> [AnyObject]
     func getCookies() -> [Cookie]
     func setCookies(cookie : [Cookie])
     func setCookie(cookie : Cookie)
     func removeCookies(cookie : [Cookie])
     func removeCookie(cookie : Cookie)
     func listAttributeNames() -> [String]
     func removeAttribute(name : String)
     func removeAttributes()
     func setAttribute(name : String, value : AnyObject)
     func getAttribute(name : String) -> AnyObject

}
