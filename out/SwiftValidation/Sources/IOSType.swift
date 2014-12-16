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

    * @version v2.0.2
    
-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Enumeration IOSType
*/
public enum IOSType {

     case iOS
     case OSX
     case Windows
     case WindowsPhone
     case Android
     case Linux
     case Blackberry
     case Tizen
     case FirefoxOS
     case Chromium
     case Unspecified
     case Unknown

     /**
     Convert current enum to its string representation value.
     */
     public func toString() -> String {
          switch self {
               case .iOS: return "iOS"
               case .OSX: return "OSX"
               case .Windows: return "Windows"
               case .WindowsPhone: return "WindowsPhone"
               case .Android: return "Android"
               case .Linux: return "Linux"
               case .Blackberry: return "Blackberry"
               case .Tizen: return "Tizen"
               case .FirefoxOS: return "FirefoxOS"
               case .Chromium: return "Chromium"
               case .Unspecified: return "Unspecified"
               case .Unknown: return "Unknown"
          }
     }

     /**
     Create enum from its string representation value.
     */
     public static func toEnum(string:String?) -> IOSType {
          if let validString = string {
               switch validString {
                    case "iOS": return .iOS
                    case "OSX": return .OSX
                    case "Windows": return .Windows
                    case "WindowsPhone": return .WindowsPhone
                    case "Android": return .Android
                    case "Linux": return .Linux
                    case "Blackberry": return .Blackberry
                    case "Tizen": return .Tizen
                    case "FirefoxOS": return .FirefoxOS
                    case "Chromium": return .Chromium
                    case "Unspecified": return .Unspecified
                    case "Unknown": return .Unknown
               default: return .Unknown
               }
          } else {
               return .Unknown
          }
     }

}
