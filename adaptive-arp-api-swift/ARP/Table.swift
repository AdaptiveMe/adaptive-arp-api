//
//  Auto-generated from: me.adaptive.arp.api.Table
//
//  Table.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public class Table {

     /**
      * Field Declarations
      */
     var columnCount : Int
     var columns : [Column]?
     var name : String
     var rowCount : Int
     var rows : [Row]?

     /**
      * Initialization
      */
     public init() {
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

     public func getColumns() -> [Column] {
          return self.columns!
     }

     public func getName() -> String {
          return self.name
     }

     public func getRowCount() -> Int {
          return self.rowCount
     }

     public func getRows() -> [Row] {
          return self.rows!
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
