/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v1.0.45
-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Enumeration IFileDataLoadResultCallbackError
*/
public enum IFileDataLoadResultCallbackError {

     case InexistentFile
     case InsufficientSpace
     case Unauthorized
     case Unknown

     /**
     Convert current enum to its string representation value.
     */
     public func toString() -> String {
          switch self {
               case .InexistentFile: return "InexistentFile"
               case .InsufficientSpace: return "InsufficientSpace"
               case .Unauthorized: return "Unauthorized"
               case .Unknown: return "Unknown"
          }
     }

     /**
     Create enum from its string representation value.
     */
     public static func toEnum(string:String?) -> IFileDataLoadResultCallbackError {
          if let validString = string {
               switch validString {
                    case "InexistentFile": return .InexistentFile
                    case "InsufficientSpace": return .InsufficientSpace
                    case "Unauthorized": return .Unauthorized
                    case "Unknown": return .Unknown
               default: return .Unknown
               }
          } else {
               return .Unknown
          }
     }

}
