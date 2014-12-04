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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Represents a data table composed of columns and rows.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public class Table
     {

          /**
             Number of columns.
          */
          public int ColumnCount { get; set; }
          /**
             Definition of columns.
          */
          public Column[] Columns { get; set; }
          /**
             Name of the table.
          */
          public string Name { get; set; }
          /**
             Number of rows.
          */
          public int RowCount { get; set; }
          /**
             Rows of the table containing the data.
          */
          public Row[] Rows { get; set; }

          /**
             Constructor used by the implementation
          */
          public Table()  {
          }

          /**
             Constructor by default

             @param Name The name of the table
          */
          public Table(string Name) : base () {
               this.Name = Name;
          }

          /**
             Get the number of columns

             @return The number of columns
          */
          public int GetColumnCount() {
               return this.ColumnCount;
          }

          /**
             Sets the number of columns

             @param ColumnCount The number of columns
          */
          public void SetColumnCount(int ColumnCount) {
               this.ColumnCount = ColumnCount;
          }

          /**
             Get the columns

             @return The columns
          */
          public Column[] GetColumns() {
               return this.Columns;
          }

          /**
             Sets the columns of the table

             @param Columns The columns of the table
          */
          public void SetColumns(Column[] Columns) {
               this.Columns = Columns;
          }

          /**
             Returns the name of the table

             @return The name of the table
          */
          public string GetName() {
               return this.Name;
          }

          /**
             Sets the name of the table

             @param Name The name of the table
          */
          public void SetName(string Name) {
               this.Name = Name;
          }

          /**
             Get the number of rows

             @return The number of rows
          */
          public int GetRowCount() {
               return this.RowCount;
          }

          /**
             Sets the number of rows

             @param RowCount The number of rows
          */
          public void SetRowCount(int RowCount) {
               this.RowCount = RowCount;
          }

          /**
             Get the rows of the table

             @return The rows of the table
          */
          public Row[] GetRows() {
               return this.Rows;
          }

          /**
             Sets the rows of the table

             @param Rows The rows of the table
          */
          public void SetRows(Row[] Rows) {
               this.Rows = Rows;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
