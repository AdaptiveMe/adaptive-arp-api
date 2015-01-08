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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <Foundation/Foundation.h>
#import <IBaseCallback.h>

/**
Interface for Managing the Services operations

@author Francisco Javier Martin Bueno
@since ARP1.0
@version 1.0
*/
@protocol IServiceResultCallback <IBaseCallback>

     typedef NS_OPTIONS(NSUInteger, IServiceResultCallbackError) {
          IServiceResultCallbackError_Forbidden = 0,
          IServiceResultCallbackError_NotFound = 1,
          IServiceResultCallbackError_MethodNotAllowed = 2,
          IServiceResultCallbackError_NotAllowed = 3,
          IServiceResultCallbackError_NotAuthenticated = 4,
          IServiceResultCallbackError_TimeOut = 5,
          IServiceResultCallbackError_NoResponse = 6,
          IServiceResultCallbackError_ServerError = 7,
          IServiceResultCallbackError_Unreachable = 8,
          IServiceResultCallbackError_MalformedUrl = 9,
          IServiceResultCallbackError_NotRegisteredService = 10,
          IServiceResultCallbackError_Unknown = 11
     };

     typedef NS_OPTIONS(NSUInteger, IServiceResultCallbackWarning) {
          IServiceResultCallbackWarning_NotSecure = 0,
          IServiceResultCallbackWarning_NotTrusted = 1,
          IServiceResultCallbackWarning_Redirected = 2,
          IServiceResultCallbackWarning_Wrong_Params = 3,
          IServiceResultCallbackWarning_Unknown = 4
     };

@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
