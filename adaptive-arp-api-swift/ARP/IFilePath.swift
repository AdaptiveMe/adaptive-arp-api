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
     func getName(index : Int) -> IFilePath
     func startsWith(other : String) -> Bool
     func startsWith(other : IFilePath) -> Bool
     func endsWith(other : IFilePath) -> Bool
     func endsWith(other : String) -> Bool
     func getParent() -> IFilePath
     func isAbsolute() -> Bool
     func resolve(other : IFilePath) -> IFilePath
     func resolve(other : String) -> IFilePath
     func normalize() -> IFilePath
     func getFileName() -> IFilePath
     func getFileSystem() -> IFileSystem
     func getRoot() -> IFilePath
     func getNameCount() -> Int
     func resolveSibling(other : IFilePath) -> IFilePath
     func resolveSibling(other : String) -> IFilePath
     func relativize(other : IFilePath) -> IFilePath
     func toAbsolutePath() -> IFilePath
     func toFile() -> IFile
     func equalPath(other : IFilePath) -> Bool

}
