/// <reference path="BaseCallback.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="DatabaseTable.d.ts" />
/// <reference path="IDatabaseTableResultCallback.d.ts" />
/// <reference path="IDatabaseTableResultCallbackError.d.ts" />
/// <reference path="IDatabaseTableResultCallbackWarning.d.ts" />
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
       Interface for Managing the Cloud operations
       Auto-generated implementation of IDatabaseTableResultCallback specification.
    */
    /**
       DatabaseTableResultCallback control dictionary.
    */
    var registeredDatabaseTableResultCallback: Dictionary<IDatabaseTableResultCallback>;
    /**
       DatabaseTableResultCallback global callback handlers.
    */
    function handleDatabaseTableResultCallbackError(id: number, error: IDatabaseTableResultCallbackError): void;
    function handleDatabaseTableResultCallbackResult(id: number, databaseTable: DatabaseTable): void;
    function handleDatabaseTableResultCallbackWarning(id: number, databaseTable: DatabaseTable, warning: IDatabaseTableResultCallbackWarning): void;
    class DatabaseTableResultCallback extends BaseCallback implements IDatabaseTableResultCallback {
        onErrorFunction: (error: IDatabaseTableResultCallbackError) => void;
        onResultFunction: (databaseTable: DatabaseTable) => void;
        onWarningFunction: (databaseTable: DatabaseTable, warning: IDatabaseTableResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: IDatabaseTableResultCallbackError
           @param onResultFunction Function receiving parameters of type: DatabaseTable
           @param onWarningFunction Function receiving parameters of type: DatabaseTable, IDatabaseTableResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IDatabaseTableResultCallbackError) => void, onResultFunction: (databaseTable: DatabaseTable) => void, onWarningFunction: (databaseTable: DatabaseTable, warning: IDatabaseTableResultCallbackWarning) => void);
        /**
           Result callback for error responses

           @param error Returned error
           @since ARP1.0
        */
        onError(error: IDatabaseTableResultCallbackError): void;
        /**
           Result callback for correct responses

           @param databaseTable Returns the databaseTable
           @since ARP1.0
        */
        onResult(databaseTable: DatabaseTable): void;
        /**
           Result callback for warning responses

           @param databaseTable Returns the databaseTable
           @param warning       Returned Warning
           @since ARP1.0
        */
        onWarning(databaseTable: DatabaseTable, warning: IDatabaseTableResultCallbackWarning): void;
    }
}
