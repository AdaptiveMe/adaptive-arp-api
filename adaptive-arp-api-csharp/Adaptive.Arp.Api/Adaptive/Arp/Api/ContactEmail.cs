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
	/// <summary>Structure representing the email data elements of a contact.</summary>
	/// <remarks>Structure representing the email data elements of a contact.</remarks>
	public class ContactEmail
	{
		/// <summary>The type of the email</summary>
		/// <since>ARP1.0</since>
		private ContactEmail.EmailType type;

		/// <summary>Whether the email is the primary one or not</summary>
		/// <since>ARP1.0</since>
		private bool primary;

		/// <summary>Email of the Contact</summary>
		/// <since>ARP1.0</since>
		private string email;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="type"></param>
		/// <param name="primary"></param>
		/// <param name="email"></param>
		/// <since>ARP1.0</since>
		public ContactEmail(ContactEmail.EmailType type, bool primary, string email)
		{
			this.type = type;
			this.primary = primary;
			this.email = email;
		}

		/// <summary>Returns the type of the email</summary>
		/// <returns>EmailType</returns>
		/// <since>ARP1.0</since>
		public virtual ContactEmail.EmailType GetType()
		{
			return type;
		}

		/// <summary>Set the type of the email</summary>
		/// <param name="type"></param>
		/// <since>ARP1.0</since>
		public virtual void SetType(ContactEmail.EmailType type)
		{
			this.type = type;
		}

		/// <summary>Returns if the email is primary</summary>
		/// <returns>true if the email is primary; false otherwise</returns>
		/// <since>ARP1.0</since>
		public virtual bool IsPrimary()
		{
			return primary;
		}

		/// <summary>Set if the email</summary>
		/// <param name="primary">true if the email is primary; false otherwise</param>
		/// <since>ARP1.0</since>
		public virtual void SetPrimary(bool primary)
		{
			this.primary = primary;
		}

		/// <summary>Returns the email of the Contact</summary>
		/// <returns>email</returns>
		/// <since>ARP1.0</since>
		public virtual string GetEmail()
		{
			return email;
		}

		/// <summary>Set the email of the Contact</summary>
		/// <param name="email"></param>
		/// <since>ARP1.0</since>
		public virtual void SetEmail(string email)
		{
			this.email = email;
		}

		/// <summary>Types that can be used</summary>
		/// <since>ARP1.0</since>
		public enum EmailType
		{
			Personal,
			Work,
			Other
		}
	}
}
