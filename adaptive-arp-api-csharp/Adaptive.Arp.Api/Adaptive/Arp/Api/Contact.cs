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
	public class Contact : ContactUid
	{
		/// <summary>The personal info from the contact</summary>
		/// <since>ARP1.0</since>
		private ContactPersonalInfo personalInfo;

		/// <summary>The professional info from the contact</summary>
		/// <since>ARP1.0</since>
		private ContactProfessionalInfo professionalInfo;

		/// <summary>The adresses from the contact</summary>
		/// <since>ARP1.0</since>
		private ContactAddress[] contactAddresses;

		/// <summary>The phones from the contact</summary>
		/// <since>ARP1.0</since>
		private ContactPhone[] contactPhones;

		/// <summary>The emails from the contact</summary>
		/// <since>ARP1.0</since>
		private ContactEmail[] contactEmails;

		/// <summary>The websites from the contact</summary>
		/// <since>ARP1.0</since>
		private ContactWebsite[] contactWebsites;

		/// <summary>The social network info from the contact</summary>
		/// <since>ARP1.0</since>
		private ContactSocial[] contactSocials;

		/// <summary>The aditional tags from the contact</summary>
		/// <since>ARP1.0</since>
		private ContactTag[] contactTags;

		/// <summary>Constructor used by implementation to set the Contact.</summary>
		/// <remarks>Constructor used by implementation to set the Contact.</remarks>
		/// <param name="contactId">of the Contact</param>
		/// <since>ARP1.0</since>
		public Contact(string contactId) : base(contactId)
		{
		}

		/// <summary>Returns the personal info of the Contact</summary>
		/// <returns>ContactPersonalInfo of the Contact</returns>
		/// <since>ARP1.0</since>
		public virtual ContactPersonalInfo GetPersonalInfo()
		{
			return personalInfo;
		}

		/// <summary>Set the personal info of the Contact</summary>
		/// <?></?>
		/// <since>ARP1.0</since>
		public virtual void SetPersonalInfo(ContactPersonalInfo personalInfo)
		{
			this.personalInfo = personalInfo;
		}

		/// <summary>Returns the professional info of the Contact</summary>
		/// <returns>ContactProfessionalInfo[]</returns>
		/// <since>ARP1.0</since>
		public virtual ContactProfessionalInfo GetProfessionalInfo()
		{
			return professionalInfo;
		}

		/// <summary>Set the professional info of the Contact</summary>
		/// <?></?>
		/// <since>ARP1.0</since>
		public virtual void SetProfessionalInfo(ContactProfessionalInfo professionalInfo)
		{
			this.professionalInfo = professionalInfo;
		}

		/// <summary>Returns all the addresses of the Contact</summary>
		/// <returns>ContactAddress[]</returns>
		/// <since>ARP1.0</since>
		public virtual ContactAddress[] GetContactAddresses()
		{
			return contactAddresses;
		}

		/// <summary>Set the addresses of the Contact</summary>
		/// <?></?>
		/// <since>ARP1.0</since>
		public virtual void SetContactAddresses(ContactAddress[] contactAddresses)
		{
			this.contactAddresses = contactAddresses;
		}

		/// <summary>Returns all the phones of the Contact</summary>
		/// <returns>ContactPhone[]</returns>
		/// <since>ARP1.0</since>
		public virtual ContactPhone[] GetContactPhones()
		{
			return contactPhones;
		}

		/// <summary>Set the phones of the Contact</summary>
		/// <?></?>
		/// <since>ARP1.0</since>
		public virtual void SetContactPhones(ContactPhone[] contactPhones)
		{
			this.contactPhones = contactPhones;
		}

		/// <summary>Returns all the emails of the Contact</summary>
		/// <returns>ContactEmail[]</returns>
		/// <since>ARP1.0</since>
		public virtual ContactEmail[] GetContactEmails()
		{
			return contactEmails;
		}

		/// <summary>Set the emails of the Contact</summary>
		/// <?></?>
		/// <since>ARP1.0</since>
		public virtual void SetContactEmails(ContactEmail[] contactEmails)
		{
			this.contactEmails = contactEmails;
		}

		/// <summary>Returns all the websites of the Contact</summary>
		/// <returns>ContactWebsite[]</returns>
		/// <since>ARP1.0</since>
		public virtual ContactWebsite[] GetContactWebsites()
		{
			return contactWebsites;
		}

		/// <summary>Set the websites of the Contact</summary>
		/// <?></?>
		/// <since>ARP1.0</since>
		public virtual void SetContactWebsites(ContactWebsite[] contactWebsites)
		{
			this.contactWebsites = contactWebsites;
		}

		/// <summary>Returns all the social network info of the Contact</summary>
		/// <returns>ContactSocial[]</returns>
		/// <since>ARP1.0</since>
		public virtual ContactSocial[] GetContactSocials()
		{
			return contactSocials;
		}

		/// <summary>Set the social network info of the Contact</summary>
		/// <?></?>
		/// <since>ARP1.0</since>
		public virtual void SetContactSocials(ContactSocial[] contactSocials)
		{
			this.contactSocials = contactSocials;
		}

		/// <summary>Returns the additional tags of the Contact</summary>
		/// <returns>ContactTag[]</returns>
		/// <since>ARP1.0</since>
		public virtual ContactTag[] GetContactTags()
		{
			return contactTags;
		}

		/// <summary>Set the additional tags of the Contact</summary>
		/// <?></?>
		/// <since>ARP1.0</since>
		public virtual void SetContactTags(ContactTag[] contactTags)
		{
			this.contactTags = contactTags;
		}
	}
}
