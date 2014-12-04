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

#import <Foundation/Foundation.h>
#import <IBaseCallback.h>

/**
Definition of IFileDataResultCallback interface/protocol.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
@protocol IFileDataResultCallback <IBaseCallback>

     typedef NS_OPTIONS(NSUInteger, IFileDataResultCallbackWarning) {
          IFileDataResultCallbackWarning_ExceedMaximumSize = 0,
          IFileDataResultCallbackWarning_Unknown = 1
     };

     typedef NS_OPTIONS(NSUInteger, IFileDataResultCallbackError) {
          IFileDataResultCallbackError_InexistentFile = 0,
          IFileDataResultCallbackError_InsufficientSpace = 1,
          IFileDataResultCallbackError_Unauthorized = 2,
          IFileDataResultCallbackError_Unknown = 3
     };

@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
