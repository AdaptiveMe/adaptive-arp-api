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
     var name : String
     var columnCount : Int
     var rowCount : Int
     var columns : [Column]?
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
     public func getName() -> String {
          return self.name
     }

     public func setName(name : String) {
          self.name = name
     }

     public func setRows(rows : [Row]) {
          self.rows = rows
     }

     public func getColumnCount() -> Int {
          return self.columnCount
     }

     public func setColumnCount(columnCount : Int) {
          self.columnCount = columnCount
     }

     public func getRows() -> [Row] {
          return self.rows!
     }

     public func getRowCount() -> Int {
          return self.rowCount
     }

     public func setRowCount(rowCount : Int) {
          self.rowCount = rowCount
     }

     public func getColumns() -> [Column] {
          return self.columns!
     }

     public func setColumns(columns : [Column]) {
          self.columns = columns
     }


}
