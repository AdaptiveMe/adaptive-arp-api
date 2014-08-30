//
//  Auto-generated from: me.adaptive.arp.api.IFilePath
//
//  IFilePath.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IFilePath : IBaseData {


     /**
      * Function Declarations
      */
     func equals(other : String) -> Bool
     func toString() -> String
     func getName(index : Int) -> Self
     func startsWith(other : String) -> Bool
     func startsWith(other : Self) -> Bool
     func endsWith(other : Self) -> Bool
     func endsWith(other : String) -> Bool
     func getParent() -> Self
     func isAbsolute() -> Bool
     func resolve(other : Self) -> Self
     func resolve(other : String) -> Self
     func normalize() -> Self
     func getFileName() -> Self
     func getFileSystem() -> Self
     func getRoot() -> Self
     func getNameCount() -> Int
     func resolveSibling(other : Self) -> Self
     func resolveSibling(other : String) -> Self
     func relativize(other : Self) -> Self
     func toAbsolutePath() -> Self
     func toFile<T : IFile>() -> T
     func equalPath(other : Self) -> Bool

}
