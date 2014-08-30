//
//  Auto-generated from: me.adaptive.arp.api.ISecurity
//
//  ISecurity.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol ISecurity : IBaseSecurity {


     /**
      * Function Declarations
      */
     func setSecureKeyValuePairs(keyValues : [SecureKeyPair], publicAccessName : String, callback : ISecureKVResultCallback)
     func getSecureKeyValuePairs(keys : [String], publicAccessName : String, callback : ISecureKVResultCallback)
     func deleteSecureKeyValuePairs(keys : [String], publicAccessName : String, callback : ISecureKVResultCallback)
     func isDeviceModified() -> Bool

}
