//
//  Auto-generated from: me.adaptive.arp.api.IFile
//
//  IFile.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:56 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

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
     func create(name : String, callback : IFileResultCallback)
     func create(path : String, name : String, callback : IFileResultCallback)
     func getContent(callback : IFileDataResultCallback)
     func move(newFile : IFile, callback : IFileResultCallback)
     func move(newFile : IFile, createPath : Bool, callback : IFileResultCallback, overwrite : Bool)
     func move(newFile : IFile, callback : IFileResultCallback, overwrite : Bool)
     func move(newFile : IFile, createPath : Bool, callback : IFileResultCallback)
     func mkDir() -> Bool
     func mkDir(recursive : Bool) -> Bool
     func getDateCreated() -> Int64
     func getDateModified() -> Int64
     func setContent(content : [Byte], callback : IFileDataResultCallback)

}
