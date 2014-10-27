/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.IFileSystem -> IFileSystem.swift
*
* (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
* the License. You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
* specific language governing permissions and limitations under the License.
*
* Original author:
*
*     * Carlos Lozano Diez
*                 <http://github.com/carloslozano>
*                 <http://twitter.com/adaptivecoder>
*                 <mailto:carlos@adaptive.me>
*
* Contributors:
*
*     *
*
* =====================================================================================================================
*/

import Foundation

public protocol IFileSystem : IBaseData {


     /**
      * Function Declarations
      */
     func create(path : IFilePath, name : String, callback : IFileResultCallback)
     func create(path : String, name : String, callback : IFileResultCallback)
     func create(name : String, callback : IFileResultCallback)
     func getApplicationCacheFolder() -> IFilePath?
     func getApplicationDocumentsFolder() -> IFilePath?
     func getApplicationFolder() -> IFilePath?
     func getPath(file : IFile) -> String?
     func getPath(path : IFilePath) -> String?
     func getSeparator() -> Character
     func isSameFile(source : IFile, dest : IFile) -> Bool
     func isSamePath(source : IFilePath, dest : IFilePath) -> Bool
     func toPath(path : IFile) -> IFilePath?

}
