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
	/// <summary>Structure representing the phone data elements of a contact.</summary>
	/// <remarks>Structure representing the phone data elements of a contact.</remarks>
	public class ContactPhone
	{
		/// <summary>The phone number</summary>
		/// <since>ARP1.0</since>
		private string phone;

		/// <summary>The phone number phoneType</summary>
		/// <since>ARP1.0</since>
		private ContactPhone.PhoneType phoneType;

		/// <summary>Constructor used by implementation to set the contact Phone</summary>
		/// <param name="phone"></param>
		/// <param name="phoneType"></param>
		/// <since>ARP1.0</since>
		public ContactPhone(string phone, ContactPhone.PhoneType phoneType)
		{
			this.phone = phone;
			this.phoneType = phoneType;
		}

		/// <summary>Constructor used by the implementation</summary>
		public ContactPhone()
		{
		}

		/// <summary>Returns the phone number</summary>
		/// <returns>phone number</returns>
		/// <since>ARP1.0</since>
		public virtual string GetPhone()
		{
			return phone;
		}

		/// <summary>Set the phone number</summary>
		/// <param name="phone">number</param>
		/// <since>ARP1.0</since>
		public virtual void SetPhone(string phone)
		{
			this.phone = phone;
		}

		/// <summary>Returns the phone phoneType</summary>
		/// <returns>phoneType</returns>
		/// <since>ARP1.0</since>
		public virtual ContactPhone.PhoneType GetPhoneType()
		{
			return phoneType;
		}

		/// <summary>Set the phoneType of the phone number</summary>
		/// <param name="phoneType"></param>
		/// <since>ARP1.0</since>
		public virtual void SetPhoneType(ContactPhone.PhoneType phoneType)
		{
			this.phoneType = phoneType;
		}

		/// <summary>Types that can be used</summary>
		/// <since>ARP1.0</since>
		public enum PhoneType
		{
			Mobile,
			Work,
			Home,
			Main,
			HomeFax,
			WorkFax,
			Other
		}
	}
}
