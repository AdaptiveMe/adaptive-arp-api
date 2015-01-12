/// <reference path="BaseCallback.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="IContactPhotoResultCallback.d.ts" />
/// <reference path="IContactPhotoResultCallbackError.d.ts" />
/// <reference path="IContactPhotoResultCallbackWarning.d.ts" />
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
declare module Adaptive {
    /**
       Interface for Managing the Contact operations
       Auto-generated implementation of IContactPhotoResultCallback specification.
    */
    /**
       ContactPhotoResultCallback control dictionary.
    */
    var registeredContactPhotoResultCallback: Dictionary<IContactPhotoResultCallback>;
    /**
       ContactPhotoResultCallback global callback handlers.
    */
    function handleContactPhotoResultCallbackError(id: number, error: IContactPhotoResultCallbackError): void;
    function handleContactPhotoResultCallbackResult(id: number, contactPhoto: number[]): void;
    function handleContactPhotoResultCallbackWarning(id: number, contactPhoto: number[], warning: IContactPhotoResultCallbackWarning): void;
    class ContactPhotoResultCallback extends BaseCallback implements IContactPhotoResultCallback {
        onErrorFunction: (error: IContactPhotoResultCallbackError) => void;
        onResultFunction: (contactPhoto: number[]) => void;
        onWarningFunction: (contactPhoto: number[], warning: IContactPhotoResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: IContactPhotoResultCallbackError
           @param onResultFunction Function receiving parameters of type: Array<number>
           @param onWarningFunction Function receiving parameters of type: Array<number>, IContactPhotoResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IContactPhotoResultCallbackError) => void, onResultFunction: (contactPhoto: number[]) => void, onWarningFunction: (contactPhoto: number[], warning: IContactPhotoResultCallbackWarning) => void);
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IContactPhotoResultCallbackError): void;
        /**
           This method is called on Result

           @param contactPhoto returned by the platform
           @since ARP1.0
        */
        onResult(contactPhoto: number[]): void;
        /**
           This method is called on Warning

           @param contactPhoto returned by the platform
           @param warning      returned by the platform
           @since ARP1.0
        */
        onWarning(contactPhoto: number[], warning: IContactPhotoResultCallbackWarning): void;
    }
}
