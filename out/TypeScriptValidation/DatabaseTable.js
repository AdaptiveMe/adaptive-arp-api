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
///<reference path="APIBean.ts"/>
///<reference path="DatabaseColumn.ts"/>
///<reference path="DatabaseRow.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Represents a data table composed of databaseColumns and databaseRows.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var DatabaseTable = (function (_super) {
        __extends(DatabaseTable, _super);
        /**
           Constructor using fields

           @param name            The name of the table
           @param columnCount     The number of databaseColumns
           @param rowCount        The number of databaseRows
           @param databaseColumns The databaseColumns of the table
           @param databaseRows    The databaseRows of the table
           @since ARP1.0
        */
        function DatabaseTable(name, columnCount, rowCount, databaseColumns, databaseRows) {
            _super.call(this);
            this.name = name;
            this.columnCount = columnCount;
            this.rowCount = rowCount;
            this.databaseColumns = databaseColumns;
            this.databaseRows = databaseRows;
        }
        /**
           Get the number of databaseColumns

           @return The number of databaseColumns
           @since ARP1.0
        */
        DatabaseTable.prototype.getColumnCount = function () {
            return this.columnCount;
        };
        /**
           Sets the number of databaseColumns

           @param columnCount The number of databaseColumns
           @since ARP1.0
        */
        DatabaseTable.prototype.setColumnCount = function (columnCount) {
            this.columnCount = columnCount;
        };
        /**
           Get the databaseColumns

           @return The databaseColumns
           @since ARP1.0
        */
        DatabaseTable.prototype.getDatabaseColumns = function () {
            return this.databaseColumns;
        };
        /**
           Sets the databaseColumns of the table

           @param databaseColumns The databaseColumns of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setDatabaseColumns = function (databaseColumns) {
            this.databaseColumns = databaseColumns;
        };
        /**
           Get the databaseRows of the table

           @return The databaseRows of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.getDatabaseRows = function () {
            return this.databaseRows;
        };
        /**
           Sets the databaseRows of the table

           @param databaseRows The databaseRows of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setDatabaseRows = function (databaseRows) {
            this.databaseRows = databaseRows;
        };
        /**
           Returns the name of the table

           @return The name of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.getName = function () {
            return this.name;
        };
        /**
           Sets the name of the table

           @param name The name of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Get the number of databaseRows

           @return The number of databaseRows
           @since ARP1.0
        */
        DatabaseTable.prototype.getRowCount = function () {
            return this.rowCount;
        };
        /**
           Sets the number of databaseRows

           @param rowCount The number of databaseRows
           @since ARP1.0
        */
        DatabaseTable.prototype.setRowCount = function (rowCount) {
            this.rowCount = rowCount;
        };
        return DatabaseTable;
    })(Adaptive.APIBean);
    Adaptive.DatabaseTable = DatabaseTable;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=DatabaseTable.js.map