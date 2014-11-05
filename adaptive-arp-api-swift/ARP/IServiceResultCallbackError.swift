/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.IServiceResultCallback
*  IServiceResultCallbackError.swift
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

public enum IServiceResultCallbackError {

     /// Enum Values
     case Forbidden, NotFound, MethodNotAllowed, NotAllowed, NotAuthenticated, TimeOut, NoResponse, ServerError, Unreachable, MalformedUrl, NotRegisteredService, Unknown

     /// toString
     public func toString() -> String {
          switch self {
               case .Forbidden: return "Forbidden"
               case .NotFound: return "NotFound"
               case .MethodNotAllowed: return "MethodNotAllowed"
               case .NotAllowed: return "NotAllowed"
               case .NotAuthenticated: return "NotAuthenticated"
               case .TimeOut: return "TimeOut"
               case .NoResponse: return "NoResponse"
               case .ServerError: return "ServerError"
               case .Unreachable: return "Unreachable"
               case .MalformedUrl: return "MalformedUrl"
               case .NotRegisteredService: return "NotRegisteredService"
               case .Unknown: return "Unknown"
          }
     }

     /// toEnum
     public static func toEnum(string:String?) -> IServiceResultCallbackError {
          if let validString = string {
               switch validString {
                    case "Forbidden": return .Forbidden
                    case "NotFound": return .NotFound
                    case "MethodNotAllowed": return .MethodNotAllowed
                    case "NotAllowed": return .NotAllowed
                    case "NotAuthenticated": return .NotAuthenticated
                    case "TimeOut": return .TimeOut
                    case "NoResponse": return .NoResponse
                    case "ServerError": return .ServerError
                    case "Unreachable": return .Unreachable
                    case "MalformedUrl": return .MalformedUrl
                    case "NotRegisteredService": return .NotRegisteredService
                    case "Unknown": return .Unknown
                    default: return .Unknown
               }
          } else {
               return .Unknown
          }
     }

}
