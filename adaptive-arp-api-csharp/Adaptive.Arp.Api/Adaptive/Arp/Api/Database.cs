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

using Sharpen;

namespace Adaptive.Arp.Api
{
	/// <author>Ferran Vila Conesa</author>
	/// <seealso cref="IDatabase">IDatabase</seealso>
	/// <since>ARP1.0</since>
	public class Database
	{
		/// <summary>Database Name (name of the .db local file).</summary>
		/// <remarks>Database Name (name of the .db local file).</remarks>
		private string name;

		/// <summary>Indicates if database was created or needs to be created as Compressed.</summary>
		/// <remarks>Indicates if database was created or needs to be created as Compressed.</remarks>
		private bool compress;

		/// <summary>Default constructor.</summary>
		/// <remarks>Default constructor. The compress param is setted to false.</remarks>
		/// <param name="name">Name of the table.</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		public Database(string name)
		{
			this.name = name;
			this.compress = false;
		}

		/// <summary>Constructor using fields.</summary>
		/// <remarks>Constructor using fields.</remarks>
		/// <param name="name">Name of the Table.</param>
		/// <param name="compress">Compress enbaled or not.</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		public Database(string name, bool compress)
		{
			this.name = name;
			this.compress = compress;
		}

		/// <summary>Returns the name.</summary>
		/// <remarks>Returns the name.</remarks>
		/// <returns>The name of the table.</returns>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		public virtual string GetName()
		{
			return name;
		}

		/// <summary>Sets the name of the table.</summary>
		/// <remarks>Sets the name of the table.</remarks>
		/// <param name="name">The name of the table.</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		public virtual void SetName(string name)
		{
			this.name = name;
		}

		/// <summary>Returns if the table is compressed</summary>
		/// <returns>Compression enabled</returns>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		public virtual bool IsCompress()
		{
			return compress;
		}

		/// <summary>Sets if the table is compressed or not.</summary>
		/// <remarks>Sets if the table is compressed or not.</remarks>
		/// <param name="compress">Compression enabled</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		public virtual void SetCompress(bool compress)
		{
			this.compress = compress;
		}
	}
}
