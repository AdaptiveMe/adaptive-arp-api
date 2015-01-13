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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIRequest.ts"/>
///<reference path="BaseDataBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="Database.ts"/>
///<reference path="DatabaseResultCallback.ts"/>
///<reference path="DatabaseTable.ts"/>
///<reference path="DatabaseTableResultCallback.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseData.ts"/>
///<reference path="IDatabase.ts"/>
///<reference path="IDatabaseResultCallback.ts"/>
///<reference path="IDatabaseTableResultCallback.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Cloud operations

       @author Ferran Vila Conesa
       @since ARP1.0
    */
    var DatabaseBridge = (function (_super) {
        __extends(DatabaseBridge, _super);
        /**
           Default constructor.
        */
        function DatabaseBridge() {
            _super.call(this);
        }
        /**
           Creates a database on default path for every platform.

           @param callback Asynchronous callback
           @param database Database object to create
           @since ARP1.0
        */
        DatabaseBridge.prototype.createDatabase = function (database, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            var ar = new Adaptive.APIRequest("IDatabase", "createDatabase", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.createDatabase' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseResultCallbackError.Unknown);
            }
        };
        /**
           Creates a databaseTable inside a database for every platform.

           @param database      Database for databaseTable creating.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param callback      DatabaseTable callback with the response
           @since ARP1.0
        */
        DatabaseBridge.prototype.createTable = function (database, databaseTable, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(databaseTable));
            var ar = new Adaptive.APIRequest("IDatabase", "createTable", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.createTable' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
            }
        };
        /**
           Deletes a database on default path for every platform.

           @param database Database object to delete
           @param callback Asynchronous callback
           @since ARP1.0
        */
        DatabaseBridge.prototype.deleteDatabase = function (database, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            var ar = new Adaptive.APIRequest("IDatabase", "deleteDatabase", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.deleteDatabase' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseResultCallbackError.Unknown);
            }
        };
        /**
           Deletes a databaseTable inside a database for every platform.

           @param database      Database for databaseTable removal.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param callback      DatabaseTable callback with the response
           @since ARP1.0
        */
        DatabaseBridge.prototype.deleteTable = function (database, databaseTable, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(databaseTable));
            var ar = new Adaptive.APIRequest("IDatabase", "deleteTable", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.deleteTable' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
            }
        };
        /**
           Executes SQL statement into the given database. The replacements
should be passed as a parameter

           @param database     The database object reference.
           @param statement    SQL statement.
           @param replacements List of SQL statement replacements.
           @param callback     DatabaseTable callback with the response.
           @since ARP1.0
        */
        DatabaseBridge.prototype.executeSqlStatement = function (database, statement, replacements, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(statement));
            arParams.push(JSON.stringify(replacements));
            var ar = new Adaptive.APIRequest("IDatabase", "executeSqlStatement", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.executeSqlStatement' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
            }
        };
        /**
           Executes SQL transaction (some statements chain) inside given database.

           @param database     The database object reference.
           @param statements   The statements to be executed during transaction.
           @param rollbackFlag Indicates if rollback should be performed when any
                  statement execution fails.
           @param callback     DatabaseTable callback with the response.
           @since ARP1.0
        */
        DatabaseBridge.prototype.executeSqlTransactions = function (database, statements, rollbackFlag, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(statements));
            arParams.push(JSON.stringify(rollbackFlag));
            var ar = new Adaptive.APIRequest("IDatabase", "executeSqlTransactions", arParams, callback.getId());
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(ar));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.executeSqlTransactions' request.");
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
            }
        };
        /**
           Checks if database exists by given database name.

           @param database Database Object to check if exists
           @return True if exists, false otherwise
           @since ARP1.0
        */
        DatabaseBridge.prototype.existsDatabase = function (database) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            var ar = new Adaptive.APIRequest("IDatabase", "existsDatabase", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'DatabaseBridge.existsDatabase' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.existsDatabase' request.");
            }
            return response;
        };
        /**
           Checks if databaseTable exists by given database name.

           @param database      Database for databaseTable consulting.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @return True if exists, false otherwise
           @since ARP1.0
        */
        DatabaseBridge.prototype.existsTable = function (database, databaseTable) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(databaseTable));
            var ar = new Adaptive.APIRequest("IDatabase", "existsTable", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: 'DatabaseBridge.existsTable' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.existsTable' request.");
            }
            return response;
        };
        return DatabaseBridge;
    })(Adaptive.BaseDataBridge);
    Adaptive.DatabaseBridge = DatabaseBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=DatabaseBridge.js.map