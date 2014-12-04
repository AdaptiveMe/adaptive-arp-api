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

///<reference path="Column.ts"/>
///<reference path="Row.ts"/>

module Adaptive {

     /**
        Represents a data table composed of columns and rows.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Table {

          /**
             Number of columns.
          */
          columnCount : number;
          /**
             Definition of columns.
          */
          columns : Array<Column>;
          /**
             Name of the table.
          */
          name : string;
          /**
             Number of rows.
          */
          rowCount : number;
          /**
             Rows of the table containing the data.
          */
          rows : Array<Row>;
          /**
             Constructor by default

             @param name The name of the table
          */
          constructor(name: string) {
               this.name = name;
          }

          /**
             Get the number of columns

             @return The number of columns
          */
          getColumnCount() : number {
               return this.columnCount;
          }

          /**
             Sets the number of columns

             @param columnCount The number of columns
          */
          setColumnCount(columnCount: number) {
               this.columnCount = columnCount;
          }

          /**
             Get the columns

             @return The columns
          */
          getColumns() : Array<Column> {
               return this.columns;
          }

          /**
             Sets the columns of the table

             @param columns The columns of the table
          */
          setColumns(columns: Array<Column>) {
               this.columns = columns;
          }

          /**
             Returns the name of the table

             @return The name of the table
          */
          getName() : string {
               return this.name;
          }

          /**
             Sets the name of the table

             @param name The name of the table
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             Get the number of rows

             @return The number of rows
          */
          getRowCount() : number {
               return this.rowCount;
          }

          /**
             Sets the number of rows

             @param rowCount The number of rows
          */
          setRowCount(rowCount: number) {
               this.rowCount = rowCount;
          }

          /**
             Get the rows of the table

             @return The rows of the table
          */
          getRows() : Array<Row> {
               return this.rows;
          }

          /**
             Sets the rows of the table

             @param rows The rows of the table
          */
          setRows(rows: Array<Row>) {
               this.rows = rows;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
