/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.Table -> Table.swift
*
* (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
* the License. You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
* specific language governing permissions and limitations under the License.
*
* Original author:
*
*     * Carlos Lozano Diez
*                 <http://github.com/carloslozano>
*                 <http://twitter.com/adaptivecoder>
*                 <mailto:carlos@adaptive.me>
*
* Contributors:
*
*     *
*
* =====================================================================================================================
*/

import Foundation

public class Table : NSObject, Printable  {

     /**
      * Field Declarations
      */
     var columnCount : Int
     var columns : [Column]?
     var name : String
     var rowCount : Int
     var rows : [Row]?
     public override var description : String {
          return "Table{ columnCount="+columnCount.description+",columns="+columns!.description+",name="+name+",rowCount="+rowCount.description+",rows="+rows!.description+" }"
     }


     /**
      * Initialization
      */
     public override init() {
          self.name = ""
          self.columnCount = 0
          self.rowCount = 0
          self.columns = nil
          self.rows = nil
     }

     public convenience init(name : String) {
          self.init()
          self.name = name
     }


     /**
      * Function Declarations
      */
     public func getColumnCount() -> Int {
          return self.columnCount
     }

     public func getColumns() -> [Column]? {
          return self.columns
     }

     public func getName() -> String? {
          return self.name
     }

     public func getRowCount() -> Int {
          return self.rowCount
     }

     public func getRows() -> [Row]? {
          return self.rows
     }

     public func setColumnCount(columnCount : Int) {
          self.columnCount = columnCount
     }

     public func setColumns(columns : [Column]) {
          self.columns = columns
     }

     public func setName(name : String) {
          self.name = name
     }

     public func setRowCount(rowCount : Int) {
          self.rowCount = rowCount
     }

     public func setRows(rows : [Row]) {
          self.rows = rows
     }


}
