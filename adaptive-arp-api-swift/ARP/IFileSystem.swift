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
     func getPath<T : IFile>(file : T) -> String
     func getPath<T : IFilePath>(path : T) -> String
     func toPath<T : IFilePath>(path : T) -> T
     func getSeparator() -> CChar
     func create<T : IFilePath>(path : T, name : String, callback : IFileResultCallback)
     func create(path : String, name : String, callback : IFileResultCallback)
     func create(name : String, callback : IFileResultCallback)
     func isSamePath<T : IFilePath>(source : T, dest : T) -> Bool
     func getApplicationFolder<T : IFilePath>() -> T
     func getApplicationCacheFolder<T : IFilePath>() -> T
     func getApplicationDocumentsFolder<T : IFilePath>() -> T
     func isSameFile<T : IFile>(source : T, dest : T) -> Bool

}
