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
	/// <summary>Created by clozano on 08/08/14.</summary>
	/// <remarks>Created by clozano on 08/08/14.</remarks>
	public class ContactSocial
	{
		/// <summary>The social network</summary>
		/// <since>ARP1.0</since>
		private string socialNetwork;

		/// <summary>The profileUrl</summary>
		/// <since>ARP1.0</since>
		private string profileUrl;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="socialNetwork">of the profile</param>
		/// <param name="profileUrl">of the user</param>
		/// <since>ARP1.0</since>
		public ContactSocial(string socialNetwork, string profileUrl)
		{
			this.socialNetwork = socialNetwork;
			this.profileUrl = profileUrl;
		}

		/// <summary>Returns the social network</summary>
		/// <returns>socialNetwork</returns>
		/// <since>ARP1.0</since>
		public virtual string GetSocialNetwork()
		{
			return socialNetwork;
		}

		/// <summary>Set the social network</summary>
		/// <param name="socialNetwork"></param>
		/// <since>ARP1.0</since>
		public virtual void SetSocialNetwork(string socialNetwork)
		{
			this.socialNetwork = socialNetwork;
		}

		/// <summary>Returns the profile url of the user</summary>
		/// <returns>profileUrl</returns>
		/// <since>ARP1.0</since>
		public virtual string GetProfileUrl()
		{
			return profileUrl;
		}

		/// <summary>Set the profile url of the iser</summary>
		/// <param name="profileUrl"></param>
		/// <since>ARP1.0</since>
		public virtual void SetProfileUrl(string profileUrl)
		{
			this.profileUrl = profileUrl;
		}
	}
}
