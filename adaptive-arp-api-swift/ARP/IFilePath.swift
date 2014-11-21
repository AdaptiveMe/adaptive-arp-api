/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.IFilePath -> IFilePath.swift
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

public protocol IFilePath : IBaseData {


     /**
      * Function Declarations
      */

     var description : String { get }
     func endsWith(other : IFilePath) -> Bool
     func endsWith(other : String) -> Bool
     func equalPath(other : IFilePath) -> Bool
     func equals(other : String) -> Bool
     func getFileName() -> IFilePath?
     func getFileSystem() -> IFileSystem?
     func getNameCount() -> Int
     func getName(index : Int) -> IFilePath?
     func getParent() -> IFilePath?
     func getRoot() -> IFilePath?
     func isAbsolute() -> Bool
     func normalize() -> IFilePath?
     func relativize(other : IFilePath) -> IFilePath?
     func resolveSibling(other : IFilePath) -> IFilePath?
     func resolveSibling(other : String) -> IFilePath?
     func resolve(other : IFilePath) -> IFilePath?
     func resolve(other : String) -> IFilePath?
     func startsWith(other : IFilePath) -> Bool
     func startsWith(other : String) -> Bool
     func toAbsolutePath() -> IFilePath?
     func toFile() -> IFile?
     func toString() -> String?

}
