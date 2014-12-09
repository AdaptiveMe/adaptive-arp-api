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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Definition of IDatabase interface/protocol.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public interface IDatabase : IBaseData {
          /**
             Creates a database on default path for every platform.
             @param callback Asynchronous callback
             @param database Database object to create
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          void CreateDatabase(Database Database, IDatabaseResultCallback Callback);

          /**
             Creates a table inside a database for every platform.
             @param database Database for table creating.
             @param table    Table object with the name of the table inside.
             @param callback Table callback with the response
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          void CreateTable(Database Database, Table Table, ITableResultCallback Callback);

          /**
             Deletes a database on default path for every platform.
             @param database Database object to delete
             @param callback Asynchronous callback
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          void DeleteDatabase(Database Database, IDatabaseResultCallback Callback);

          /**
             Deletes a table inside a database for every platform.
             @param database Database for table removal.
             @param table    Table object with the name of the table inside.
             @param callback Table callback with the response
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          void DeleteTable(Database Database, Table Table, ITableResultCallback Callback);

          /**
             Executes SQL statement into the given database. The replacements
should be passed as a parameter
             @param database     The database object reference.
             @param statement    SQL statement.
             @param replacements List of SQL statement replacements.
             @param callback     Table callback with the response.
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          void ExecuteSqlStatement(Database Database, string Statement, string[] Replacements, ITableResultCallback Callback);

          /**
             Executes SQL transaction (some statements chain) inside given database.
             @param database     The database object reference.
             @param statements   The statements to be executed during transaction.
             @param rollbackFlag Indicates if rollback should be performed when any
                    statement execution fails.
             @param callback     Table callback with the response.
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          void ExecuteSqlTransactions(Database Database, string[] Statements, bool RollbackFlag, ITableResultCallback Callback);

          /**
             Checks if database exists by given database name.
             @param database Database Object to check if exists
             @return True if exists, false otherwise
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          bool ExistsDatabase(Database Database);

          /**
             Checks if table exists by given database name.
             @param database Database for table consulting.
             @param table    Table object with the name of the table inside.
             @return True if exists, false otherwise
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          bool ExistsTable(Database Database, Table Table);

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
