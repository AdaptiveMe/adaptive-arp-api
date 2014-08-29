//
//  Auto-generated from: me.adaptive.arp.api.IFile
//
//  IFile.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IFile : IFilePath {


     /**
      * Function Declarations
      */
     func getName() -> String
     func delete() -> Bool
     func delete(cascade : Bool) -> Bool
     func getSize() -> Int64
     func getPath() -> String
     func canRead() -> Bool
     func canWrite() -> Bool
     func exists() -> Bool
     func isDirectory() -> Bool
     func listFiles(regex : String, callback : IFileListResultCallback)
     func listFiles(callback : IFileListResultCallback)
     func toPath() -> IFilePath
     func create(path : String, name : String, callback : IFileResultCallback)
     func create(name : String, callback : IFileResultCallback)
     func getContent(callback : IFileDataResultCallback)
     func getDateCreated() -> Int64
     func mkDir() -> Bool
     func mkDir(recursive : Bool) -> Bool
     func getDateModified() -> Int64
     func move(newFile : IFile, createPath : Bool, callback : IFileResultCallback)
     func move(newFile : IFile, createPath : Bool, callback : IFileResultCallback, overwrite : Bool)
     func move(newFile : IFile, callback : IFileResultCallback, overwrite : Bool)
     func move(newFile : IFile, callback : IFileResultCallback)
     func setContent(content : [Byte], callback : IFileDataResultCallback)

}
