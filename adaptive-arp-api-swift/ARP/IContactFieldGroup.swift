/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.IContact
*  IContactFieldGroup.swift
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

public enum IContactFieldGroup {

     /// Enum Values
     case PERSONAL_INFO, PROFESSIONAL_INFO, ADDRESSES, PHONES, EMAILS, WEBSITES, SOCIALS, TAGS, Unknown

     /// toString
     public func toString() -> String {
          switch self {
               case .PERSONAL_INFO: return "PERSONAL_INFO"
               case .PROFESSIONAL_INFO: return "PROFESSIONAL_INFO"
               case .ADDRESSES: return "ADDRESSES"
               case .PHONES: return "PHONES"
               case .EMAILS: return "EMAILS"
               case .WEBSITES: return "WEBSITES"
               case .SOCIALS: return "SOCIALS"
               case .TAGS: return "TAGS"
               case .Unknown: return "Unknown"
          }
     }

     /// toEnum
     public static func toEnum(string:String?) -> IContactFieldGroup {
          if let validString = string {
               switch validString {
                    case "PERSONAL_INFO": return .PERSONAL_INFO
                    case "PROFESSIONAL_INFO": return .PROFESSIONAL_INFO
                    case "ADDRESSES": return .ADDRESSES
                    case "PHONES": return .PHONES
                    case "EMAILS": return .EMAILS
                    case "WEBSITES": return .WEBSITES
                    case "SOCIALS": return .SOCIALS
                    case "TAGS": return .TAGS
                    case "Unknown": return .Unknown
                    default: return .Unknown
               }
          } else {
               return .Unknown
          }
     }

}
