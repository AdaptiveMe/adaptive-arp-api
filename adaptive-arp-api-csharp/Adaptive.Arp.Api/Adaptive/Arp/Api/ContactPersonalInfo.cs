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
	[System.Serializable]
	public class ContactPersonalInfo
	{
		/// <summary>Titles that can be used</summary>
		/// <since>ARP1.0</since>
		public enum Title
		{
			Mr,
			Mrs,
			Ms,
			Dr
		}

		/// <summary>The name of the Contact</summary>
		/// <since>ARP1.0</since>
		private string name;

		/// <summary>The middle name of the Contact if it proceeds</summary>
		/// <since>ARP1.0</since>
		private string middleName;

		/// <summary>The last name of the Contact</summary>
		/// <since>ARP1.0</since>
		private string lastName;

		/// <summary>The title of the Contact</summary>
		/// <since>ARP1.0</since>
		private ContactPersonalInfo.Title title;

		/// <summary>The Constructor used by the implementation</summary>
		/// <param name="name">of the Contact</param>
		/// <param name="middleName">of the Contact</param>
		/// <param name="lastName">of the Contact</param>
		/// <param name="title">of the Contact</param>
		/// <since>ARP1.0</since>
		public ContactPersonalInfo(string name, string middleName, string lastName, ContactPersonalInfo.Title
			 title)
		{
			this.name = name;
			this.middleName = middleName;
			this.lastName = lastName;
			this.title = title;
		}

		/// <summary>Returns the name of the Contact</summary>
		/// <returns>name</returns>
		/// <since>ARP1.0</since>
		public virtual string GetName()
		{
			return name;
		}

		/// <summary>Set the name of the Contact</summary>
		/// <param name="name"></param>
		/// <since>ARP1.0</since>
		public virtual void SetName(string name)
		{
			this.name = name;
		}

		/// <summary>Returns the middle name of the Contact</summary>
		/// <returns>middelName</returns>
		/// <since>ARP1.0</since>
		public virtual string GetMiddleName()
		{
			return middleName;
		}

		/// <summary>Set the middle name of the Contact</summary>
		/// <param name="middleName"></param>
		/// <since>ARP1.0</since>
		public virtual void SetMiddleName(string middleName)
		{
			this.middleName = middleName;
		}

		/// <summary>Returns the last name of the Contact</summary>
		/// <returns>lastName</returns>
		/// <since>ARP1.0</since>
		public virtual string GetLastName()
		{
			return lastName;
		}

		/// <summary>Set the last name of the Contact</summary>
		/// <param name="lastName"></param>
		/// <since>ARP1.0</since>
		public virtual void SetLastName(string lastName)
		{
			this.lastName = lastName;
		}

		/// <summary>Returns the title of the Contact</summary>
		/// <returns>Title</returns>
		/// <since>ARP1.0</since>
		public virtual ContactPersonalInfo.Title GetTitle()
		{
			return title;
		}

		/// <summary>Set the Title of the Contact</summary>
		/// <param name="title"></param>
		/// <since>ARP1.0</since>
		public virtual void SetTitle(ContactPersonalInfo.Title title)
		{
			this.title = title;
		}
	}
}
