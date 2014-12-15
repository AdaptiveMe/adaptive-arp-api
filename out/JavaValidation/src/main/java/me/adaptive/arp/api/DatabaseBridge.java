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

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

/**
   Interface for Managing the Cloud operations
   Auto-generated implementation of IDatabase specification.
*/
public class DatabaseBridge extends BaseDataBridge implements IDatabase {

     /**
        Group of API.
     */
     private IDatabase delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public DatabaseBridge(IDatabase delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
     */
     public final IDatabase getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IDatabase delegate) {
          this.delegate = delegate;
     }

     /**
        Creates a database on default path for every platform.

        @param callback Asynchronous callback
        @param database Database object to create
        @since ARP1.0
     */
     public void createDatabase(Database database, IDatabaseResultCallback callback) {
          // Invoke delegate
          this.delegate.createDatabase(database, callback);
          
     }

     /**
        Creates a databaseTable inside a database for every platform.

        @param database      Database for databaseTable creating.
        @param databaseTable DatabaseTable object with the name of the databaseTable inside.
        @param callback      DatabaseTable callback with the response
        @since ARP1.0
     */
     public void createTable(Database database, DatabaseTable databaseTable, IDatabaseTableResultCallback callback) {
          // Invoke delegate
          this.delegate.createTable(database, databaseTable, callback);
          
     }

     /**
        Deletes a database on default path for every platform.

        @param database Database object to delete
        @param callback Asynchronous callback
        @since ARP1.0
     */
     public void deleteDatabase(Database database, IDatabaseResultCallback callback) {
          // Invoke delegate
          this.delegate.deleteDatabase(database, callback);
          
     }

     /**
        Deletes a databaseTable inside a database for every platform.

        @param database      Database for databaseTable removal.
        @param databaseTable DatabaseTable object with the name of the databaseTable inside.
        @param callback      DatabaseTable callback with the response
        @since ARP1.0
     */
     public void deleteTable(Database database, DatabaseTable databaseTable, IDatabaseTableResultCallback callback) {
          // Invoke delegate
          this.delegate.deleteTable(database, databaseTable, callback);
          
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
     public void executeSqlStatement(Database database, String statement, String[] replacements, IDatabaseTableResultCallback callback) {
          // Invoke delegate
          this.delegate.executeSqlStatement(database, statement, replacements, callback);
          
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
     public void executeSqlTransactions(Database database, String[] statements, boolean rollbackFlag, IDatabaseTableResultCallback callback) {
          // Invoke delegate
          this.delegate.executeSqlTransactions(database, statements, rollbackFlag, callback);
          
     }

     /**
        Checks if database exists by given database name.

        @param database Database Object to check if exists
        @return True if exists, false otherwise
        @since ARP1.0
     */
     public boolean existsDatabase(Database database) {
          // Invoke delegate
          return this.delegate.existsDatabase(database);
          
     }

     /**
        Checks if databaseTable exists by given database name.

        @param database      Database for databaseTable consulting.
        @param databaseTable DatabaseTable object with the name of the databaseTable inside.
        @return True if exists, false otherwise
        @since ARP1.0
     */
     public boolean existsTable(Database database, DatabaseTable databaseTable) {
          // Invoke delegate
          return this.delegate.existsTable(database, databaseTable);
          
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
