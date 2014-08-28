//
//  Auto-generated from: me.adaptive.arp.api.IFileSystem
//
//  IFileSystem.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:55 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

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
     func getApplicationFolder() -> IFilePath
     func isSamePath(source : IFilePath, dest : IFilePath) -> Bool
     func getApplicationCacheFolder() -> IFilePath
     func getApplicationDocumentsFolder() -> IFilePath
     func isSameFile(source : IFile, dest : IFile) -> Bool

}
