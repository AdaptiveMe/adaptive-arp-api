//
//  Auto-generated from: me.adaptive.arp.api.IDatabase
//
//  IDatabase.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IDatabase : IBaseData {


     /**
      * Function Declarations
      */
     func createTable(database : Database, table : Table, callback : ITableResultCallback)
     func deleteDatabase(database : Database, callback : IDatabaseResultCallback)
     func existsDatabase(database : Database) -> Bool
     func getDatabase(database : Database, callback : IDatabaseResultCallback)
     func deleteTable(database : Database, table : Table, callback : ITableResultCallback)
     func createDatabase(database : Database, callback : IDatabaseResultCallback)
     func existsTable(database : Database, table : Table) -> Bool
     func executeSqlQuery(database : Database, query : String, replacements : [String], callback : ITableResultCallback)
     func executeSqlStatement(database : Database, statement : String, replacements : [String], callback : ITableResultCallback)
     func executeSqlTransactions(database : Database, statements : [String], rollbackFlag : Bool, callback : ITableResultCallback)

}
