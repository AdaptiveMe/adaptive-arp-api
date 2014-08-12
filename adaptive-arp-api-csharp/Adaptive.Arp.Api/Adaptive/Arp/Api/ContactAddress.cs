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
	/// <summary>Created by clozano on 08/08/14.</summary>
	/// <remarks>Created by clozano on 08/08/14.</remarks>
	public class ContactAddress
	{
		/// <summary>Types that can be used</summary>
		/// <since>ARP1.0</since>
		public enum AddressType
		{
			Home,
			Work,
			Other
		}

		/// <summary>The Contact address</summary>
		/// <since>ARP1.0</since>
		private string address;

		/// <summary>The address type</summary>
		/// <since>ARP1.0</since>
		private ContactAddress.AddressType type;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="address"></param>
		/// <param name="type"></param>
		/// <since>ARP1.0</since>
		public ContactAddress(string address, ContactAddress.AddressType type)
		{
			this.address = address;
			this.type = type;
		}

		/// <summary>Returns the Contact address</summary>
		/// <returns>address</returns>
		/// <since>ARP1.0</since>
		public virtual string GetAddress()
		{
			return address;
		}

		/// <summary>Set the address of the Contact</summary>
		/// <param name="address"></param>
		/// <since>ARP1.0</since>
		public virtual void SetAddress(string address)
		{
			this.address = address;
		}

		/// <summary>Returns the type of the address</summary>
		/// <returns>AddressType</returns>
		/// <since>ARP1.0</since>
		public virtual ContactAddress.AddressType GetType()
		{
			return type;
		}

		/// <summary>Set the address type</summary>
		/// <param name="type"></param>
		/// <since>ARP1.0</since>
		public virtual void SetType(ContactAddress.AddressType type)
		{
			this.type = type;
		}
	}
}
