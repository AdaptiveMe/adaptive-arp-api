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

    * @version v2.0.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <Foundation/Foundation.h>
#import <IBaseCallback.h>

/**
Interface for Managing the Network reachability callback result

@author Carlos Lozano Diez
@since ARP 2.0
@version 1.0
*/
@protocol INetworkReachabilityCallback <IBaseCallback>

     typedef NS_OPTIONS(NSUInteger, INetworkReachabilityCallbackError) {
          INetworkReachabilityCallbackError_Forbidden = 0,
          INetworkReachabilityCallbackError_NotFound = 1,
          INetworkReachabilityCallbackError_MethodNotAllowed = 2,
          INetworkReachabilityCallbackError_NotAllowed = 3,
          INetworkReachabilityCallbackError_NotAuthenticated = 4,
          INetworkReachabilityCallbackError_TimeOut = 5,
          INetworkReachabilityCallbackError_NoResponse = 6,
          INetworkReachabilityCallbackError_Unreachable = 7,
          INetworkReachabilityCallbackError_Wrong_Params = 8,
          INetworkReachabilityCallbackError_MalformedUrl = 9,
          INetworkReachabilityCallbackError_DomainUnresolvable = 10,
          INetworkReachabilityCallbackError_Unknown = 11
     };

     typedef NS_OPTIONS(NSUInteger, INetworkReachabilityCallbackWarning) {
          INetworkReachabilityCallbackWarning_IncorrectScheme = 0,
          INetworkReachabilityCallbackWarning_NotSecure = 1,
          INetworkReachabilityCallbackWarning_NotTrusted = 2,
          INetworkReachabilityCallbackWarning_Redirected = 3,
          INetworkReachabilityCallbackWarning_NotRegisteredService = 4,
          INetworkReachabilityCallbackWarning_Unknown = 5
     };

@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
