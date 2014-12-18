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

    * @version v2.0.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Interface for Managing the Cloud operations
   Auto-generated implementation of IDatabase specification.
*/
public class DatabaseBridge : BaseDataBridge, IDatabase, APIBridge {

     /**
        API Delegate.
     */
     private var delegate : IDatabase? = nil

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public init(delegate : IDatabase?) {
          super.init()
          self.delegate = delegate
     }
     /**
        Get the delegate implementation.
        @return IDatabase delegate that manages platform specific functions..
     */
     public final func getDelegate() -> IDatabase? {
          return self.delegate
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final func setDelegate(delegate : IDatabase) {
          self.delegate = delegate;
     }

     /**
        Creates a database on default path for every platform.

        @param callback Asynchronous callback
        @param database Database object to create
        @since ARP1.0
     */
     public func createDatabase(database : Database , callback : IDatabaseResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executing createDatabase({\(database)},{\(callback)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.createDatabase(database, callback: callback)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executed 'createDatabase' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DatabaseBridge no delegate for 'createDatabase'.")
               }
          }
          
     }

     /**
        Creates a databaseTable inside a database for every platform.

        @param database      Database for databaseTable creating.
        @param databaseTable DatabaseTable object with the name of the databaseTable inside.
        @param callback      DatabaseTable callback with the response
        @since ARP1.0
     */
     public func createTable(database : Database , databaseTable : DatabaseTable , callback : IDatabaseTableResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executing createTable({\(database)},{\(databaseTable)},{\(callback)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.createTable(database, databaseTable: databaseTable, callback: callback)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executed 'createTable' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DatabaseBridge no delegate for 'createTable'.")
               }
          }
          
     }

     /**
        Deletes a database on default path for every platform.

        @param database Database object to delete
        @param callback Asynchronous callback
        @since ARP1.0
     */
     public func deleteDatabase(database : Database , callback : IDatabaseResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executing deleteDatabase({\(database)},{\(callback)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.deleteDatabase(database, callback: callback)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executed 'deleteDatabase' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DatabaseBridge no delegate for 'deleteDatabase'.")
               }
          }
          
     }

     /**
        Deletes a databaseTable inside a database for every platform.

        @param database      Database for databaseTable removal.
        @param databaseTable DatabaseTable object with the name of the databaseTable inside.
        @param callback      DatabaseTable callback with the response
        @since ARP1.0
     */
     public func deleteTable(database : Database , databaseTable : DatabaseTable , callback : IDatabaseTableResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executing deleteTable({\(database)},{\(databaseTable)},{\(callback)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.deleteTable(database, databaseTable: databaseTable, callback: callback)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executed 'deleteTable' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DatabaseBridge no delegate for 'deleteTable'.")
               }
          }
          
     }

     /**
        Executes SQL statement into the given database. The replacements
should be passed as a parameter

        @param database     The database object reference.
        @param statement    SQL statement.
        @param replacements List of SQL statement replacements.
        @param callback     DatabaseTable callback with the response.
        @since ARP1.0
     */
     public func executeSqlStatement(database : Database , statement : String , replacements : [String] , callback : IDatabaseTableResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executing executeSqlStatement({\(database)},{\(statement)},{\(replacements)},{\(callback)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.executeSqlStatement(database, statement: statement, replacements: replacements, callback: callback)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executed 'executeSqlStatement' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DatabaseBridge no delegate for 'executeSqlStatement'.")
               }
          }
          
     }

     /**
        Executes SQL transaction (some statements chain) inside given database.

        @param database     The database object reference.
        @param statements   The statements to be executed during transaction.
        @param rollbackFlag Indicates if rollback should be performed when any
                    statement execution fails.
        @param callback     DatabaseTable callback with the response.
        @since ARP1.0
     */
     public func executeSqlTransactions(database : Database , statements : [String] , rollbackFlag : Bool , callback : IDatabaseTableResultCallback ) {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executing executeSqlTransactions({\(database)},{\(statements)},{\(rollbackFlag)},{\(callback)}).")
          }

          if (self.delegate != nil) {
               self.delegate!.executeSqlTransactions(database, statements: statements, rollbackFlag: rollbackFlag, callback: callback)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executed 'executeSqlTransactions' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DatabaseBridge no delegate for 'executeSqlTransactions'.")
               }
          }
          
     }

     /**
        Checks if database exists by given database name.

        @param database Database Object to check if exists
        @return True if exists, false otherwise
        @since ARP1.0
     */
     public func existsDatabase(database : Database ) -> Bool {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executing existsDatabase({\(database)}).")
          }

          var result : Bool = false
          if (self.delegate != nil) {
               result = self.delegate!.existsDatabase(database)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executed 'existsDatabase' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DatabaseBridge no delegate for 'existsDatabase'.")
               }
          }
          return result          
     }

     /**
        Checks if databaseTable exists by given database name.

        @param database      Database for databaseTable consulting.
        @param databaseTable DatabaseTable object with the name of the databaseTable inside.
        @return True if exists, false otherwise
        @since ARP1.0
     */
     public func existsTable(database : Database , databaseTable : DatabaseTable ) -> Bool {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging? = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger != nil) {
               logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executing existsTable({\(database)},{\(databaseTable)}).")
          }

          var result : Bool = false
          if (self.delegate != nil) {
               result = self.delegate!.existsTable(database, databaseTable: databaseTable)
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.DEBUG, category: getAPIGroup().toString(), message: "DatabaseBridge executed 'existsTable' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger!.log(ILoggingLogLevel.ERROR, category: getAPIGroup().toString(), message: "DatabaseBridge no delegate for 'existsTable'.")
               }
          }
          return result          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return String with JSON response or a zero length string if the response is asynchronous or null if method not found.
     */
     public override func invoke(request : APIRequest) -> String? {
          //Gson gson = new Gson();
          var responseJSON : String? = ""
          switch request.getMethodName()! {
               case "createDatabase":
                    var database0 : Database? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[0], Database.class)
                    var callback0 : IDatabaseResultCallback? =  DatabaseResultCallbackImpl(id: request.getAsyncId()!)
                    self.createDatabase(database0!, callback: callback0!);
               case "createTable":
                    var database1 : Database? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[0], Database.class)
                    var databaseTable1 : DatabaseTable? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[1], DatabaseTable.class)
                    var callback1 : IDatabaseTableResultCallback? =  DatabaseTableResultCallbackImpl(id: request.getAsyncId()!)
                    self.createTable(database1!, databaseTable: databaseTable1!, callback: callback1!);
               case "deleteDatabase":
                    var database2 : Database? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[0], Database.class)
                    var callback2 : IDatabaseResultCallback? =  DatabaseResultCallbackImpl(id: request.getAsyncId()!)
                    self.deleteDatabase(database2!, callback: callback2!);
               case "deleteTable":
                    var database3 : Database? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[0], Database.class)
                    var databaseTable3 : DatabaseTable? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[1], DatabaseTable.class)
                    var callback3 : IDatabaseTableResultCallback? =  DatabaseTableResultCallbackImpl(id: request.getAsyncId()!)
                    self.deleteTable(database3!, databaseTable: databaseTable3!, callback: callback3!);
               case "executeSqlStatement":
                    var database4 : Database? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[0], Database.class)
                    var statement4 : String? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[1], String.class)
                    var replacements4 : [String]? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[2], [String].class)
                    var callback4 : IDatabaseTableResultCallback? =  DatabaseTableResultCallbackImpl(id: request.getAsyncId()!)
                    self.executeSqlStatement(database4!, statement: statement4!, replacements: replacements4!, callback: callback4!);
               case "executeSqlTransactions":
                    var database5 : Database? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[0], Database.class)
                    var statements5 : [String]? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[1], [String].class)
                    var rollbackFlag5 : Bool? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[2], boolean.class)
                    var callback5 : IDatabaseTableResultCallback? =  DatabaseTableResultCallbackImpl(id: request.getAsyncId()!)
                    self.executeSqlTransactions(database5!, statements: statements5!, rollbackFlag: rollbackFlag5!, callback: callback5!);
               case "existsDatabase":
                    var database6 : Database? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[0], Database.class)
                    var response6 : Bool? = self.existsDatabase(database6!)
                    responseJSON = nil //TODO - Serialize this.gson.toJson(response6);
               case "existsTable":
                    var database7 : Database? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[0], Database.class)
                    var databaseTable7 : DatabaseTable? = nil // TODO: Deserialize - this.gson.fromJson(request.getParameters()[1], DatabaseTable.class)
                    var response7 : Bool? = self.existsTable(database7!, databaseTable: databaseTable7!)
                    responseJSON = nil //TODO - Serialize this.gson.toJson(response7);
               default:
                    // 404 - response null.
                    responseJSON = nil
          }
          return responseJSON
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
