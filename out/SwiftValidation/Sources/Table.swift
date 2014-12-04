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

/**
   Represents a data table composed of columns and rows.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Table : NSObject {

     /**
        Number of columns.
     */
     var columnCount : Int?
     /**
        Definition of columns.
     */
     var columns : [Column]?
     /**
        Name of the table.
     */
     var name : String?
     /**
        Number of rows.
     */
     var rowCount : Int?
     /**
        Rows of the table containing the data.
     */
     var rows : [Row]?

     /**
        Constructor used by the implementation
     */
     public override init() {
          super.init()
     }

     /**
        Constructor by default

        @param name The name of the table
     */
     public init(name: String) {
          super.init()
          self.name = name
     }

     /**
        Get the number of columns

        @return The number of columns
     */
     public func getColumnCount() -> Int? {
          return self.columnCount
     }

     /**
        Sets the number of columns

        @param columnCount The number of columns
     */
     public func setColumnCount(columnCount: Int) {
          self.columnCount = columnCount
     }

     /**
        Get the columns

        @return The columns
     */
     public func getColumns() -> [Column]? {
          return self.columns
     }

     /**
        Sets the columns of the table

        @param columns The columns of the table
     */
     public func setColumns(columns: [Column]) {
          self.columns = columns
     }

     /**
        Returns the name of the table

        @return The name of the table
     */
     public func getName() -> String? {
          return self.name
     }

     /**
        Sets the name of the table

        @param name The name of the table
     */
     public func setName(name: String) {
          self.name = name
     }

     /**
        Get the number of rows

        @return The number of rows
     */
     public func getRowCount() -> Int? {
          return self.rowCount
     }

     /**
        Sets the number of rows

        @param rowCount The number of rows
     */
     public func setRowCount(rowCount: Int) {
          self.rowCount = rowCount
     }

     /**
        Get the rows of the table

        @return The rows of the table
     */
     public func getRows() -> [Row]? {
          return self.rows
     }

     /**
        Sets the rows of the table

        @param rows The rows of the table
     */
     public func setRows(rows: [Row]) {
          self.rows = rows
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
