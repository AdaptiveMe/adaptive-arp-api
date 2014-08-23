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
	/// <summary>Represents a data table composed of columns and rows.</summary>
	/// <remarks>Represents a data table composed of columns and rows.</remarks>
	public class Table
	{
		/// <summary>Name of the table.</summary>
		/// <remarks>Name of the table.</remarks>
		/// <since>ARP1.0</since>
		private string name;

		/// <summary>Number of columns.</summary>
		/// <remarks>Number of columns.</remarks>
		/// <since>ARP1.0</since>
		private int columnCount;

		/// <summary>Number of rows.</summary>
		/// <remarks>Number of rows.</remarks>
		/// <since>ARP1.0</since>
		private int rowCount;

		/// <summary>Definition of columns.</summary>
		/// <remarks>Definition of columns.</remarks>
		/// <since>ARP1.0</since>
		private Column[] columns;

		/// <summary>Rows of the table containing the data.</summary>
		/// <remarks>Rows of the table containing the data.</remarks>
		/// <since>ARP1.0</since>
		private Row[] rows;

		/// <summary>Constructor by default</summary>
		/// <param name="name">The name of the table</param>
		public Table(string name)
		{
			this.name = name;
		}

		/// <summary>Returns the name of the table</summary>
		/// <returns>The name of the table</returns>
		public virtual string GetName()
		{
			return name;
		}

		/// <summary>Sets the name of the table</summary>
		/// <param name="name">The name of the table</param>
		public virtual void SetName(string name)
		{
			this.name = name;
		}

		/// <summary>Get the number of columns</summary>
		/// <returns>The number of columns</returns>
		public virtual int GetColumnCount()
		{
			return columnCount;
		}

		/// <summary>Sets the number of columns</summary>
		/// <param name="columnCount">The number of columns</param>
		public virtual void SetColumnCount(int columnCount)
		{
			this.columnCount = columnCount;
		}

		/// <summary>Get the number of rows</summary>
		/// <returns>The number of rows</returns>
		public virtual int GetRowCount()
		{
			return rowCount;
		}

		/// <summary>Sets the number of rows</summary>
		/// <param name="rowCount">The number of rows</param>
		public virtual void SetRowCount(int rowCount)
		{
			this.rowCount = rowCount;
		}

		/// <summary>Get the columns</summary>
		/// <returns>The columns</returns>
		public virtual Column[] GetColumns()
		{
			return columns;
		}

		/// <summary>Sets the columns of the table</summary>
		/// <param name="columns">The columns of the table</param>
		public virtual void SetColumns(Column[] columns)
		{
			this.columns = columns;
		}

		/// <summary>Get the rows of the table</summary>
		/// <returns>The rows of the table</returns>
		public virtual Row[] GetRows()
		{
			return rows;
		}

		/// <summary>Sets the rows of the table</summary>
		/// <param name="rows">The rows of the table</param>
		public virtual void SetRows(Row[] rows)
		{
			this.rows = rows;
		}
	}
}
