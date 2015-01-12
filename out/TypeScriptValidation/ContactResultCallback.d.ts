/// <reference path="BaseCallback.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="Contact.d.ts" />
/// <reference path="IContactResultCallback.d.ts" />
/// <reference path="IContactResultCallbackError.d.ts" />
/// <reference path="IContactResultCallbackWarning.d.ts" />
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
       Auto-generated implementation of IContactResultCallback specification.
    */
    /**
       ContactResultCallback control dictionary.
    */
    var registeredContactResultCallback: Dictionary<IContactResultCallback>;
    /**
       ContactResultCallback global callback handlers.
    */
    function handleContactResultCallbackError(id: number, error: IContactResultCallbackError): void;
    function handleContactResultCallbackResult(id: number, contacts: Contact[]): void;
    function handleContactResultCallbackWarning(id: number, contacts: Contact[], warning: IContactResultCallbackWarning): void;
    class ContactResultCallback extends BaseCallback implements IContactResultCallback {
        onErrorFunction: (error: IContactResultCallbackError) => void;
        onResultFunction: (contacts: Contact[]) => void;
        onWarningFunction: (contacts: Contact[], warning: IContactResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: IContactResultCallbackError
           @param onResultFunction Function receiving parameters of type: Array<Contact>
           @param onWarningFunction Function receiving parameters of type: Array<Contact>, IContactResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IContactResultCallbackError) => void, onResultFunction: (contacts: Contact[]) => void, onWarningFunction: (contacts: Contact[], warning: IContactResultCallbackWarning) => void);
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IContactResultCallbackError): void;
        /**
           This method is called on Result

           @param contacts returned by the platform
           @since ARP1.0
        */
        onResult(contacts: Contact[]): void;
        /**
           This method is called on Warning

           @param contacts returned by the platform
           @param warning  returned by the platform
           @since ARP1.0
        */
        onWarning(contacts: Contact[], warning: IContactResultCallbackWarning): void;
    }
}
