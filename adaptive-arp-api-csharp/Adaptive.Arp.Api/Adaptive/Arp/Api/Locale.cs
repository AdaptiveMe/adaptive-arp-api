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
	/// <summary>Represents a specific user or system locate.</summary>
	/// <remarks>Represents a specific user or system locate.</remarks>
	public class Locale
	{
		/// <summary>A valid ISO Country Code.</summary>
		/// <remarks>A valid ISO Country Code.</remarks>
		/// <since>ARP1.0</since>
		private string country;

		/// <summary>A valid ISO Language Code.</summary>
		/// <remarks>A valid ISO Language Code.</remarks>
		/// <since>ARP1.0</since>
		private string language;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="country"></param>
		/// <param name="language"></param>
		/// <since>ARP1.0</since>
		public Locale(string country, string language)
		{
			this.country = country;
			this.language = language;
		}

		/// <summary>Returns the country code</summary>
		/// <returns>country code</returns>
		/// <since>ARP1.0</since>
		public virtual string GetCountry()
		{
			return country;
		}

		/// <summary>Set the country code</summary>
		/// <param name="country">code</param>
		/// <since>ARP1.0</since>
		public virtual void SetCountry(string country)
		{
			this.country = country;
		}

		/// <summary>Returns the language code</summary>
		/// <returns>language code</returns>
		/// <since>ARP1.0</since>
		public virtual string GetLanguage()
		{
			return language;
		}

		/// <summary>Set the language code</summary>
		/// <param name="language">code</param>
		/// <since>ARP1.0</since>
		public virtual void SetLanguage(string language)
		{
			this.language = language;
		}
	}
}
