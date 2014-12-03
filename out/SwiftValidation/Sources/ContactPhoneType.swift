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

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
Enumeration ContactPhoneType
*/
public enum ContactPhoneType {

     case Mobile
     case Work
     case Home
     case Main
     case HomeFax
     case WorkFax
     case Other
     case Unknown

     /**
     Convert current enum to its string representation value.
     */
     public func toString() -> String {
          switch self {
               case .Mobile: return "Mobile"
               case .Work: return "Work"
               case .Home: return "Home"
               case .Main: return "Main"
               case .HomeFax: return "HomeFax"
               case .WorkFax: return "WorkFax"
               case .Other: return "Other"
               case .Unknown: return "Unknown"
          }
     }

     /**
     Create enum from its string representation value.
     */
     public static func toEnum(string:String?) -> ContactPhoneType {
          if let validString = string {
               switch validString {
                    case "Mobile": return .Mobile
                    case "Work": return .Work
                    case "Home": return .Home
                    case "Main": return .Main
                    case "HomeFax": return .HomeFax
                    case "WorkFax": return .WorkFax
                    case "Other": return .Other
                    case "Unknown": return .Unknown
               default: return .Unknown
               }
          } else {
               return .Unknown
          }
     }

}
