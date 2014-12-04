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

package me.adaptive.arp.api;

/**
   Represents a data table composed of columns and rows.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Table {

     /**
        Number of columns.
     */
     private int columnCount;
     /**
        Definition of columns.
     */
     private Column[] columns;
     /**
        Name of the table.
     */
     private String name;
     /**
        Number of rows.
     */
     private int rowCount;
     /**
        Rows of the table containing the data.
     */
     private Row[] rows;

     /**
        Constructor used by the implementation
     */
     public Table() {
     }

     /**
        Constructor by default

        @param name The name of the table
     */
     public Table(String name) {
          this();
          this.name = name;
     }

     /**
        Get the number of columns

        @return The number of columns
     */
     public int getColumnCount() {
          return this.columnCount;
     }

     /**
        Sets the number of columns

        @param columnCount The number of columns
     */
     public void setColumnCount(int columnCount) {
          this.columnCount = columnCount;
     }

     /**
        Get the columns

        @return The columns
     */
     public Column[] getColumns() {
          return this.columns;
     }

     /**
        Sets the columns of the table

        @param columns The columns of the table
     */
     public void setColumns(Column[] columns) {
          this.columns = columns;
     }

     /**
        Returns the name of the table

        @return The name of the table
     */
     public String getName() {
          return this.name;
     }

     /**
        Sets the name of the table

        @param name The name of the table
     */
     public void setName(String name) {
          this.name = name;
     }

     /**
        Get the number of rows

        @return The number of rows
     */
     public int getRowCount() {
          return this.rowCount;
     }

     /**
        Sets the number of rows

        @param rowCount The number of rows
     */
     public void setRowCount(int rowCount) {
          this.rowCount = rowCount;
     }

     /**
        Get the rows of the table

        @return The rows of the table
     */
     public Row[] getRows() {
          return this.rows;
     }

     /**
        Sets the rows of the table

        @param rows The rows of the table
     */
     public void setRows(Row[] rows) {
          this.rows = rows;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
