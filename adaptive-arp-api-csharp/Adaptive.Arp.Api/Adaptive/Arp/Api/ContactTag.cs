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
	/// <summary>Structure representing the assigned tags data elements of a contact.</summary>
	/// <remarks>Structure representing the assigned tags data elements of a contact.</remarks>
	public class ContactTag
	{
		/// <summary>The name of the Tag</summary>
		/// <since>ARP1.0</since>
		private string name;

		/// <summary>The value of the Tag</summary>
		/// <since>ARP1.0</since>
		private string value;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="value"></param>
		/// <param name="name"></param>
		/// <since>ARP1.0</since>
		public ContactTag(string name, string value)
		{
			this.value = value;
			this.name = name;
		}

		/// <summary>Returns the name of the Tag</summary>
		/// <returns>name</returns>
		/// <since>ARP1.0</since>
		public virtual string GetName()
		{
			return name;
		}

		/// <summary>Set the name of the Tag</summary>
		/// <param name="name"></param>
		/// <since>ARP1.0</since>
		public virtual void SetName(string name)
		{
			this.name = name;
		}

		/// <summary>Returns the value of the Tag</summary>
		/// <returns>value</returns>
		/// <since>ARP1.0</since>
		public virtual string GetValue()
		{
			return value;
		}

		/// <summary>Set the value of the Tag</summary>
		/// <param name="value"></param>
		/// <since>ARP1.0</since>
		public virtual void SetValue(string value)
		{
			this.value = value;
		}
	}
}
