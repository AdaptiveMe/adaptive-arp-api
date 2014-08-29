//
//  Auto-generated from: me.adaptive.arp.api.IFileSystem
//
//  IFileSystem.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IFileSystem : IBaseData {


     /**
      * Function Declarations
      */
     func getPath(file : IFile) -> String
     func getPath(path : IFilePath) -> String
     func toPath(path : IFile) -> IFilePath
     func getSeparator() -> char
     func create(path : IFilePath, name : String, callback : IFileResultCallback)
     func create(path : String, name : String, callback : IFileResultCallback)
     func create(name : String, callback : IFileResultCallback)
     func isSamePath(source : IFilePath, dest : IFilePath) -> Bool
     func getApplicationFolder() -> IFilePath
     func getApplicationCacheFolder() -> IFilePath
     func getApplicationDocumentsFolder() -> IFilePath
     func isSameFile(source : IFile, dest : IFile) -> Bool

}
