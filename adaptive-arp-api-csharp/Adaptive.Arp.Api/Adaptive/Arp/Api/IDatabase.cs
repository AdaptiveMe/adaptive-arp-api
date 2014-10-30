/*
 * =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
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

using Adaptive.Arp.Api;
using Sharpen;

namespace Adaptive.Arp.Api
{
	public interface IDatabase : IBaseData
	{
		/// <summary>Creates a database on default path for every platform.</summary>
		/// <remarks>Creates a database on default path for every platform.</remarks>
		/// <param name="callback">Asynchronous callback</param>
		/// <param name="database">Database object to create</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		void CreateDatabase(Database database, IDatabaseResultCallback callback);

		/// <summary>Deletes a database on default path for every platform.</summary>
		/// <remarks>Deletes a database on default path for every platform.</remarks>
		/// <param name="database">Database object to delete</param>
		/// <param name="callback">Asynchronous callback</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		void DeleteDatabase(Database database, IDatabaseResultCallback callback);

		/// <summary>Checks if database exists by given database name.</summary>
		/// <remarks>Checks if database exists by given database name.</remarks>
		/// <param name="database">Database Object to check if exists</param>
		/// <returns>True if exists, false otherwise</returns>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		bool ExistsDatabase(Database database);

		/// <summary>Creates a table inside a database for every platform.</summary>
		/// <remarks>Creates a table inside a database for every platform.</remarks>
		/// <param name="database">Database for table creating.</param>
		/// <param name="table">Table object with the name of the table inside.</param>
		/// <param name="callback">Table callback with the response</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		void CreateTable(Database database, Table table, ITableResultCallback callback);

		/// <summary>Deletes a table inside a database for every platform.</summary>
		/// <remarks>Deletes a table inside a database for every platform.</remarks>
		/// <param name="database">Database for table removal.</param>
		/// <param name="table">Table object with the name of the table inside.</param>
		/// <param name="callback">Table callback with the response</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		void DeleteTable(Database database, Table table, ITableResultCallback callback);

		/// <summary>Checks if table exists by given database name.</summary>
		/// <remarks>Checks if table exists by given database name.</remarks>
		/// <param name="database">Database for table consulting.</param>
		/// <param name="table">Table object with the name of the table inside.</param>
		/// <returns>True if exists, false otherwise</returns>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		bool ExistsTable(Database database, Table table);

		/// <summary>Executes SQL query against given database.</summary>
		/// <remarks>
		/// Executes SQL query against given database. The replacements should be
		/// passed as a parameter
		/// </remarks>
		/// <param name="database">The database object reference.</param>
		/// <param name="query">SQL query</param>
		/// <param name="replacements">List of SQL query replacements.</param>
		/// <param name="callback">Table callback with the response.</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		void ExecuteSqlQuery(Database database, string query, string[] replacements, ITableResultCallback
			 callback);

		/// <summary>Executes SQL statement into the given database.</summary>
		/// <remarks>
		/// Executes SQL statement into the given database. The replacements
		/// should be passed as a parameter
		/// </remarks>
		/// <param name="database">The database object reference.</param>
		/// <param name="statement">SQL statement.</param>
		/// <param name="replacements">List of SQL statement replacements.</param>
		/// <param name="callback">Table callback with the response.</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		void ExecuteSqlStatement(Database database, string statement, string[] replacements
			, ITableResultCallback callback);

		/// <summary>Executes SQL transaction (some statements chain) inside given database.</summary>
		/// <remarks>Executes SQL transaction (some statements chain) inside given database.</remarks>
		/// <param name="database">The database object reference.</param>
		/// <param name="statements">The statements to be executed during transaction.</param>
		/// <param name="rollbackFlag">
		/// Indicates if rollback should be performed when any
		/// statement execution fails.
		/// </param>
		/// <param name="callback">Table callback with the response.</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		void ExecuteSqlTransactions(Database database, string[] statements, bool rollbackFlag
			, ITableResultCallback callback);
	}
}
