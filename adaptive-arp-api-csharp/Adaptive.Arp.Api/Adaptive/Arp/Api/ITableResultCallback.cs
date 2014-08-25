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
	public abstract class ITableResultCallback : IBaseCallback
	{
		/// <summary>Result callback for correct responses</summary>
		/// <param name="table">Returns the table</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		public abstract void OnResult(Table table);

		/// <summary>Result callback for warning responses</summary>
		/// <param name="table">Returns the table</param>
		/// <param name="warning">Returned Warning</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		public abstract void OnWarning(Table table, ITableResultCallback.Warning warning);

		/// <summary>Result callback for error responses</summary>
		/// <param name="error">Returned error</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		public abstract void OnError(ITableResultCallback.Error error);

		/// <summary>Enumeration for warnings related to database manipulation.</summary>
		/// <remarks>Enumeration for warnings related to database manipulation.</remarks>
		public enum Warning
		{
			TableExists,
			TableLocked,
			NoResults
		}

		/// <summary>Enumeration for errors related to database manipulation.</summary>
		/// <remarks>Enumeration for errors related to database manipulation.</remarks>
		public enum Error
		{
			NoSpace,
			ReadOnlyTable,
			SqlException
		}
	}
}
