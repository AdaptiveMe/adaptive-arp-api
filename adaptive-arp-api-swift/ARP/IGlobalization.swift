//
//  Auto-generated from: me.adaptive.arp.api.IGlobalization
//
//  IGlobalization.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IGlobalization : IBaseApplication {


     /**
      * Function Declarations
      */
     func getResourceLiterals(locale : Locale) -> Dictionary<String,String>
     func getLocaleSupportedDescriptors() -> [String]
     func getResourceLiteral(key : String, locale : Locale) -> String

}
