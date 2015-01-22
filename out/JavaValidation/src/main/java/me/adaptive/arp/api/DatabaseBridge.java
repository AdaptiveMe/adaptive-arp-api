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

import com.google.gson.Gson;

/**
   Interface for Managing the Cloud operations
   Auto-generated implementation of IDatabase specification.
*/
public class DatabaseBridge extends BaseDataBridge implements IDatabase, APIBridge {

     /**
        API Delegate.
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
        @return IDatabase delegate that manages platform specific functions..
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
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing createDatabase({"+database+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.createDatabase(database, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'createDatabase' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'createDatabase'.");
          }
          
     }

     /**
        Creates a databaseTable inside a database for every platform.

        @param database      Database for databaseTable creating.
        @param databaseTable DatabaseTable object with the name of the databaseTable inside.
        @param callback      DatabaseTable callback with the response
        @since ARP1.0
     */
     public void createTable(Database database, DatabaseTable databaseTable, IDatabaseTableResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing createTable({"+database+"},{"+databaseTable+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.createTable(database, databaseTable, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'createTable' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'createTable'.");
          }
          
     }

     /**
        Deletes a database on default path for every platform.

        @param database Database object to delete
        @param callback Asynchronous callback
        @since ARP1.0
     */
     public void deleteDatabase(Database database, IDatabaseResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing deleteDatabase({"+database+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.deleteDatabase(database, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'deleteDatabase' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'deleteDatabase'.");
          }
          
     }

     /**
        Deletes a databaseTable inside a database for every platform.

        @param database      Database for databaseTable removal.
        @param databaseTable DatabaseTable object with the name of the databaseTable inside.
        @param callback      DatabaseTable callback with the response
        @since ARP1.0
     */
     public void deleteTable(Database database, DatabaseTable databaseTable, IDatabaseTableResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing deleteTable({"+database+"},{"+databaseTable+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.deleteTable(database, databaseTable, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'deleteTable' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'deleteTable'.");
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
     public void executeSqlStatement(Database database, String statement, String[] replacements, IDatabaseTableResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing executeSqlStatement({"+database+"},{"+statement+"},{"+replacements+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.executeSqlStatement(database, statement, replacements, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'executeSqlStatement' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'executeSqlStatement'.");
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
     public void executeSqlTransactions(Database database, String[] statements, boolean rollbackFlag, IDatabaseTableResultCallback callback) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing executeSqlTransactions({"+database+"},{"+statements+"},{"+rollbackFlag+"},{"+callback+"}).");

          if (this.delegate != null) {
               this.delegate.executeSqlTransactions(database, statements, rollbackFlag, callback);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'executeSqlTransactions' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'executeSqlTransactions'.");
          }
          
     }

     /**
        Checks if database exists by given database name.

        @param database Database Object to check if exists
        @return True if exists, false otherwise
        @since ARP1.0
     */
     public boolean existsDatabase(Database database) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing existsDatabase({"+database+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.existsDatabase(database);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'existsDatabase' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'existsDatabase'.");
          }
          return result;          
     }

     /**
        Checks if databaseTable exists by given database name.

        @param database      Database for databaseTable consulting.
        @param databaseTable DatabaseTable object with the name of the databaseTable inside.
        @return True if exists, false otherwise
        @since ARP1.0
     */
     public boolean existsTable(Database database, DatabaseTable databaseTable) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing existsTable({"+database+"},{"+databaseTable+"}).");

          boolean result = false;
          if (this.delegate != null) {
               result = this.delegate.existsTable(database, databaseTable);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'existsTable' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'existsTable'.");
          }
          return result;          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return APIResponse with status code, message and JSON response or a JSON null string for void functions. Status code 200 is OK, all others are HTTP standard error conditions.
     */
     public APIResponse invoke(APIRequest request) {
          APIResponse response = new APIResponse();
          int responseCode = 200;
          String responseMessage = "OK";
          String responseJSON = "null";
          switch (request.getMethodName()) {
               case "createDatabase":
                    Database database0 = getJSONParser().fromJson(request.getParameters()[0], Database.class);
                    IDatabaseResultCallback callback0 = new DatabaseResultCallbackImpl(request.getAsyncId());
                    this.createDatabase(database0, callback0);
                    break;
               case "createTable":
                    Database database1 = getJSONParser().fromJson(request.getParameters()[0], Database.class);
                    DatabaseTable databaseTable1 = getJSONParser().fromJson(request.getParameters()[1], DatabaseTable.class);
                    IDatabaseTableResultCallback callback1 = new DatabaseTableResultCallbackImpl(request.getAsyncId());
                    this.createTable(database1, databaseTable1, callback1);
                    break;
               case "deleteDatabase":
                    Database database2 = getJSONParser().fromJson(request.getParameters()[0], Database.class);
                    IDatabaseResultCallback callback2 = new DatabaseResultCallbackImpl(request.getAsyncId());
                    this.deleteDatabase(database2, callback2);
                    break;
               case "deleteTable":
                    Database database3 = getJSONParser().fromJson(request.getParameters()[0], Database.class);
                    DatabaseTable databaseTable3 = getJSONParser().fromJson(request.getParameters()[1], DatabaseTable.class);
                    IDatabaseTableResultCallback callback3 = new DatabaseTableResultCallbackImpl(request.getAsyncId());
                    this.deleteTable(database3, databaseTable3, callback3);
                    break;
               case "executeSqlStatement":
                    Database database4 = getJSONParser().fromJson(request.getParameters()[0], Database.class);
                    String statement4 = getJSONParser().fromJson(request.getParameters()[1], String.class);
                    String[] replacements4 = getJSONParser().fromJson(request.getParameters()[2], String[].class);
                    IDatabaseTableResultCallback callback4 = new DatabaseTableResultCallbackImpl(request.getAsyncId());
                    this.executeSqlStatement(database4, statement4, replacements4, callback4);
                    break;
               case "executeSqlTransactions":
                    Database database5 = getJSONParser().fromJson(request.getParameters()[0], Database.class);
                    String[] statements5 = getJSONParser().fromJson(request.getParameters()[1], String[].class);
                    boolean rollbackFlag5 = getJSONParser().fromJson(request.getParameters()[2], boolean.class);
                    IDatabaseTableResultCallback callback5 = new DatabaseTableResultCallbackImpl(request.getAsyncId());
                    this.executeSqlTransactions(database5, statements5, rollbackFlag5, callback5);
                    break;
               case "existsDatabase":
                    Database database6 = getJSONParser().fromJson(request.getParameters()[0], Database.class);
                    boolean response6 = this.existsDatabase(database6);
                    responseJSON = getJSONParser().toJson(response6);
                    break;
               case "existsTable":
                    Database database7 = getJSONParser().fromJson(request.getParameters()[0], Database.class);
                    DatabaseTable databaseTable7 = getJSONParser().fromJson(request.getParameters()[1], DatabaseTable.class);
                    boolean response7 = this.existsTable(database7, databaseTable7);
                    responseJSON = getJSONParser().toJson(response7);
                    break;
               default:
                    // 404 - response null.
                    responseCode = 404;
                    responseMessage = "DatabaseBridge does not provide the function '"+request.getMethodName()+"' Please check your client-side API version; should be API version >= v2.0.3.";
          }
          response.setResponse(responseJSON);
          response.setStatusCode(responseCode);
          response.setStatusMessage(responseMessage);
          return response;
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
