/// <reference path="APIBean.d.ts" />
/// <reference path="DatabaseColumn.d.ts" />
/// <reference path="DatabaseRow.d.ts" />
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
       Represents a data table composed of databaseColumns and databaseRows.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    class DatabaseTable extends APIBean {
        /**
           Number of databaseColumns.
        */
        columnCount: number;
        /**
           Definition of databaseColumns.
        */
        databaseColumns: DatabaseColumn[];
        /**
           Rows of the table containing the data.
        */
        databaseRows: DatabaseRow[];
        /**
           Name of the table.
        */
        name: string;
        /**
           Number of databaseRows.
        */
        rowCount: number;
        /**
           Constructor using fields

           @param name            The name of the table
           @param columnCount     The number of databaseColumns
           @param rowCount        The number of databaseRows
           @param databaseColumns The databaseColumns of the table
           @param databaseRows    The databaseRows of the table
           @since ARP1.0
        */
        constructor(name: string, columnCount: number, rowCount: number, databaseColumns: DatabaseColumn[], databaseRows: DatabaseRow[]);
        /**
           Get the number of databaseColumns

           @return The number of databaseColumns
           @since ARP1.0
        */
        getColumnCount(): number;
        /**
           Sets the number of databaseColumns

           @param columnCount The number of databaseColumns
           @since ARP1.0
        */
        setColumnCount(columnCount: number): void;
        /**
           Get the databaseColumns

           @return The databaseColumns
           @since ARP1.0
        */
        getDatabaseColumns(): DatabaseColumn[];
        /**
           Sets the databaseColumns of the table

           @param databaseColumns The databaseColumns of the table
           @since ARP1.0
        */
        setDatabaseColumns(databaseColumns: DatabaseColumn[]): void;
        /**
           Get the databaseRows of the table

           @return The databaseRows of the table
           @since ARP1.0
        */
        getDatabaseRows(): DatabaseRow[];
        /**
           Sets the databaseRows of the table

           @param databaseRows The databaseRows of the table
           @since ARP1.0
        */
        setDatabaseRows(databaseRows: DatabaseRow[]): void;
        /**
           Returns the name of the table

           @return The name of the table
           @since ARP1.0
        */
        getName(): string;
        /**
           Sets the name of the table

           @param name The name of the table
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           Get the number of databaseRows

           @return The number of databaseRows
           @since ARP1.0
        */
        getRowCount(): number;
        /**
           Sets the number of databaseRows

           @param rowCount The number of databaseRows
           @since ARP1.0
        */
        setRowCount(rowCount: number): void;
    }
}
