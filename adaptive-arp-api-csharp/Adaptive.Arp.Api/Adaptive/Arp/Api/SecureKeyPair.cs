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
	/// <summary>Represents a single secureKey-value pair.</summary>
	/// <remarks>Represents a single secureKey-value pair.</remarks>
	public class SecureKeyPair
	{
		private string secureKey;

		private string secureData;

		/// <summary>Constructor used by the implementation</summary>
		public SecureKeyPair()
		{
		}

		/// <summary>Constructor with parameters</summary>
		/// <param name="secureKey">name of the keypair</param>
		/// <param name="secureData">value of the keypair</param>
		/// <since>ARP1.0</since>
		public SecureKeyPair(string secureKey, string secureData)
		{
			this.secureKey = secureKey;
			this.secureData = secureData;
		}

		/// <summary>Returns the object secureKey name.</summary>
		/// <remarks>Returns the object secureKey name.</remarks>
		/// <returns>Key name.</returns>
		/// <since>ARP 1.0</since>
		public virtual string GetSecureKey()
		{
			return secureKey;
		}

		/// <summary>Sets the secureKey name for this object.</summary>
		/// <remarks>Sets the secureKey name for this object.</remarks>
		/// <param name="secureKey">Key name.</param>
		/// <since>ARP 1.0</since>
		public virtual void SetSecureKey(string secureKey)
		{
			this.secureKey = secureKey;
		}

		/// <summary>Returns the object value</summary>
		/// <returns>Value.</returns>
		/// <since>ARP 1.0</since>
		public virtual string GetSecureData()
		{
			return secureData;
		}

		/// <summary>Sets the value for this object</summary>
		/// <param name="secureData">value to set.</param>
		/// <since>ARP 1.0</since>
		public virtual void SetSecureData(string secureData)
		{
			this.secureData = secureData;
		}
	}
}
