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

package me.adaptive.arp.api;

/**
   Represents a data table composed of databaseColumns and databaseRows.

   @author Ferran Vila Conesa
   @since ARP1.0
   @version 1.0
*/
public class DatabaseTable extends APIBean {

     /**
        Number of databaseColumns.
     */
     private int columnCount;
     /**
        Definition of databaseColumns.
     */
     private DatabaseColumn[] databaseColumns;
     /**
        Rows of the table containing the data.
     */
     private DatabaseRow[] databaseRows;
     /**
        Name of the table.
     */
     private String name;
     /**
        Number of databaseRows.
     */
     private int rowCount;

     /**
        Default constructor

        @since ARP1.0
     */
     public DatabaseTable() {
     }

     /**
        Constructor by default

        @param name The name of the table
        @since ARP1.0
     */
     public DatabaseTable(String name) {
          super();
          this.name = name;
     }

     /**
        Constructor using fields

        @param name            The name of the table
        @param columnCount     The number of databaseColumns
        @param rowCount        The number of databaseRows
        @param databaseColumns The databaseColumns of the table
        @param databaseRows    The databaseRows of the table
        @since ARP1.0
     */
     public DatabaseTable(String name, int columnCount, int rowCount, DatabaseColumn[] databaseColumns, DatabaseRow[] databaseRows) {
          super();
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
     public int getColumnCount() {
          return this.columnCount;
     }

     /**
        Sets the number of databaseColumns

        @param columnCount The number of databaseColumns
        @since ARP1.0
     */
     public void setColumnCount(int columnCount) {
          this.columnCount = columnCount;
     }

     /**
        Get the databaseColumns

        @return The databaseColumns
        @since ARP1.0
     */
     public DatabaseColumn[] getDatabaseColumns() {
          return this.databaseColumns;
     }

     /**
        Sets the databaseColumns of the table

        @param databaseColumns The databaseColumns of the table
        @since ARP1.0
     */
     public void setDatabaseColumns(DatabaseColumn[] databaseColumns) {
          this.databaseColumns = databaseColumns;
     }

     /**
        Get the databaseRows of the table

        @return The databaseRows of the table
        @since ARP1.0
     */
     public DatabaseRow[] getDatabaseRows() {
          return this.databaseRows;
     }

     /**
        Sets the databaseRows of the table

        @param databaseRows The databaseRows of the table
        @since ARP1.0
     */
     public void setDatabaseRows(DatabaseRow[] databaseRows) {
          this.databaseRows = databaseRows;
     }

     /**
        Returns the name of the table

        @return The name of the table
        @since ARP1.0
     */
     public String getName() {
          return this.name;
     }

     /**
        Sets the name of the table

        @param name The name of the table
        @since ARP1.0
     */
     public void setName(String name) {
          this.name = name;
     }

     /**
        Get the number of databaseRows

        @return The number of databaseRows
        @since ARP1.0
     */
     public int getRowCount() {
          return this.rowCount;
     }

     /**
        Sets the number of databaseRows

        @param rowCount The number of databaseRows
        @since ARP1.0
     */
     public void setRowCount(int rowCount) {
          this.rowCount = rowCount;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
