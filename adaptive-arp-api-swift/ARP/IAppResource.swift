//
//  Auto-generated from: me.adaptive.arp.api.IAppResource
//
//  IAppResource.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IAppResource {


     /**
      * Function Declarations
      */
     func geType() -> IAppResourcePayload
     func getData() -> [Byte]
     func getDataPathLinked() -> String
     func getDataStored() -> [Byte]
     func getFormat() -> IAppResourceFormat
     func getMd5() -> String
     func getMimetype() -> String
     func getName() -> String
     func getPath() -> String
     func getSize() -> Int64
     func getSizeStored() -> Int64
     func getTimestamp() -> Int64
     func getType() -> IAppResourceType
     func getUuid() -> String

}
