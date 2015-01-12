/// <reference path="BaseCallback.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="Database.d.ts" />
/// <reference path="IDatabaseResultCallback.d.ts" />
/// <reference path="IDatabaseResultCallbackError.d.ts" />
/// <reference path="IDatabaseResultCallbackWarning.d.ts" />
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
       Auto-generated implementation of IDatabaseResultCallback specification.
    */
    /**
       DatabaseResultCallback control dictionary.
    */
    var registeredDatabaseResultCallback: Dictionary<IDatabaseResultCallback>;
    /**
       DatabaseResultCallback global callback handlers.
    */
    function handleDatabaseResultCallbackError(id: number, error: IDatabaseResultCallbackError): void;
    function handleDatabaseResultCallbackResult(id: number, database: Database): void;
    function handleDatabaseResultCallbackWarning(id: number, database: Database, warning: IDatabaseResultCallbackWarning): void;
    class DatabaseResultCallback extends BaseCallback implements IDatabaseResultCallback {
        onErrorFunction: (error: IDatabaseResultCallbackError) => void;
        onResultFunction: (database: Database) => void;
        onWarningFunction: (database: Database, warning: IDatabaseResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: IDatabaseResultCallbackError
           @param onResultFunction Function receiving parameters of type: Database
           @param onWarningFunction Function receiving parameters of type: Database, IDatabaseResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IDatabaseResultCallbackError) => void, onResultFunction: (database: Database) => void, onWarningFunction: (database: Database, warning: IDatabaseResultCallbackWarning) => void);
        /**
           Result callback for error responses

           @param error Returned error
           @since ARP1.0
        */
        onError(error: IDatabaseResultCallbackError): void;
        /**
           Result callback for correct responses

           @param database Returns the database
           @since ARP1.0
        */
        onResult(database: Database): void;
        /**
           Result callback for warning responses

           @param database Returns the database
           @param warning  Returned Warning
           @since ARP1.0
        */
        onWarning(database: Database, warning: IDatabaseResultCallbackWarning): void;
    }
}
