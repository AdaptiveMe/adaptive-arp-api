//
//  Auto-generated from: me.adaptive.arp.api.IDatabase
//
//  IDatabase.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IDatabase : IBaseData {


     /**
      * Function Declarations
      */
     func deleteTable(database : Database, table : Table, callback : ITableResultCallback)
     func existsTable(database : Database, table : Table) -> Bool
     func executeSqlQuery(database : Database, query : String, replacements : [String], callback : ITableResultCallback)
     func executeSqlStatement(database : Database, statement : String, replacements : [String], callback : ITableResultCallback)
     func executeSqlTransactions(database : Database, statements : [String], rollbackFlag : Bool, callback : ITableResultCallback)
     func getDatabase(database : Database, callback : IDatabaseResultCallback)
     func createDatabase(database : Database, callback : IDatabaseResultCallback)
     func deleteDatabase(database : Database, callback : IDatabaseResultCallback)
     func existsDatabase(database : Database) -> Bool
     func createTable(database : Database, table : Table, callback : ITableResultCallback)

}
