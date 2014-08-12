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
	/// <summary>Created by DBarranco on 11/08/14.</summary>
	/// <remarks>Created by DBarranco on 11/08/14.</remarks>
	public class InternalStorageKeyPair
	{
		private string key;

		private string value;

		/// <summary>Returns the object key name.</summary>
		/// <remarks>Returns the object key name.</remarks>
		/// <returns>Key name.</returns>
		/// <since>ARP 1.0</since>
		public virtual string GetKey()
		{
			return key;
		}

		/// <summary>Sets the key name for this object.</summary>
		/// <remarks>Sets the key name for this object.</remarks>
		/// <param name="key">Key name.</param>
		/// <since>ARP 1.0</since>
		public virtual void SetKey(string key)
		{
			this.key = key;
		}

		/// <summary>Returns the object value</summary>
		/// <returns>Value.</returns>
		/// <since>ARP 1.0</since>
		public virtual string GetValue()
		{
			return value;
		}

		/// <summary>Sets the value for this object</summary>
		/// <param name="value">value to set.</param>
		/// <since>ARP 1.0</since>
		public virtual void SetValue(string value)
		{
			this.value = value;
		}
	}
}
