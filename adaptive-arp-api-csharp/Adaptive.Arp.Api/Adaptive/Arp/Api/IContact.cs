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
	public abstract class IContact : IBasePIM
	{
		/// <summary>Search contacts according to a term and send it to the callback</summary>
		/// <param name="term">string to search</param>
		/// <param name="callback">called for return</param>
		/// <since>ARP1.0</since>
		public abstract void SearchContacts(string term, IContactResultCallback callback);

		/// <summary>Search contacts according to a term with a filter and send it to the callback
		/// 	</summary>
		/// <param name="term">string to search</param>
		/// <param name="callback">called for return</param>
		/// <param name="filter">to search for</param>
		/// <since>ARP1.0</since>
		public abstract void SearchContacts(string term, IContactResultCallback callback, 
			params IContact.Filter[] filter);

		/// <summary>Get all the details of a contact according to its id</summary>
		/// <param name="contact">id to search for</param>
		/// <param name="callback">called for return</param>
		/// <since>ARP1.0</since>
		public abstract void GetContact(ContactUid contact, IContactResultCallback callback
			);

		/// <summary>Get the contact photo</summary>
		/// <param name="contact">id to search for</param>
		/// <param name="callback">called for return</param>
		/// <since>ARP1.0</since>
		public abstract void GetContactPhoto(ContactUid contact, IContactResultCallback callback
			);

		/// <summary>Set the contact photo</summary>
		/// <param name="contact">id to assign the photo</param>
		/// <param name="pngImage">photo as byte array</param>
		/// <returns>true if set is successful;false otherwise</returns>
		/// <since>ARP1.0</since>
		public abstract bool SetContactPhoto(ContactUid contact, byte[] pngImage);

		/// <summary>Get all contacts</summary>
		/// <param name="callback">called for return</param>
		/// <since>ARP1.0</since>
		public abstract void GetContacts(IContactResultCallback callback);

		/// <summary>Get marked fields of all contacts</summary>
		/// <param name="callback">called for return</param>
		/// <param name="fields">to get for each Contact</param>
		/// <since>ARP1.0</since>
		public abstract void GetContacts(IContactResultCallback callback, params IContact.FieldGroup
			[] fields);

		/// <summary>Get marked fields of all contacts according to a filter</summary>
		/// <param name="callback">called for return</param>
		/// <param name="fields">to get for each Contact</param>
		/// <param name="filter">to search for</param>
		/// <since>ARP1.0</since>
		public abstract void GetContacts(IContactResultCallback callback, IContact.FieldGroup
			[] fields, params IContact.Filter[] filter);

		/// <summary>Filter that can be used</summary>
		/// <since>ARP1.0</since>
		public enum Filter
		{
			HasPhone,
			HasEmail,
			HasAddress
		}

		/// <summary>Group that can be retrieved</summary>
		/// <since>ARP1.0</since>
		public enum FieldGroup
		{
			PersonalInfo,
			ProfessionalInfo,
			Addresses,
			Phones,
			Emails,
			Websites,
			Socials,
			Tags
		}
	}
}
