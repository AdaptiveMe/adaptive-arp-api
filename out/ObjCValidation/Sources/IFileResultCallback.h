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

    * @version v1.0.45-260-gbb1d381

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <Foundation/Foundation.h>
#import <IBaseCallback.h>

/**
Interface for Managing the File operations callback

@author Carlos Lozano Diez
@since ARP1.0
@version 1.0
*/
@protocol IFileResultCallback <IBaseCallback>

     typedef NS_OPTIONS(NSUInteger, IFileResultCallbackError) {
          IFileResultCallbackError_FileExists = 0,
          IFileResultCallbackError_SourceInexistent = 1,
          IFileResultCallbackError_DestionationExists = 2,
          IFileResultCallbackError_InsufficientSpace = 3,
          IFileResultCallbackError_Unauthorized = 4,
          IFileResultCallbackError_Unknown = 5
     };

     typedef NS_OPTIONS(NSUInteger, IFileResultCallbackWarning) {
          IFileResultCallbackWarning_SourceNotDeleted = 0,
          IFileResultCallbackWarning_RootDirectory = 1,
          IFileResultCallbackWarning_Unknown = 2
     };

@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
