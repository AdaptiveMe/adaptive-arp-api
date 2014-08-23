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

using System.Collections.Generic;
using Adaptive.Arp.Api;
using Sharpen;

namespace Adaptive.Arp.Api
{
	public interface IGlobalization : IBaseApplication
	{
		/// <summary>List of supported locales for the application</summary>
		/// <returns>List of locales (only locale descriptor string, such as "en-US").</returns>
		/// <since>ARP1.0</since>
		string[] GetLocaleSupportedDescriptors();

		/// <summary>Gets the text/message corresponding to the given key and locale.</summary>
		/// <remarks>Gets the text/message corresponding to the given key and locale.</remarks>
		/// <param name="key">to match text</param>
		/// <param name="locale">The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
		/// 	</param>
		/// <returns>Localized text.</returns>
		/// <since>ARP1.0</since>
		string GetResourceLiteral(string key, Locale locale);

		/// <summary>Gets the full application configured literals (key/message pairs) corresponding to the given locale.
		/// 	</summary>
		/// <remarks>Gets the full application configured literals (key/message pairs) corresponding to the given locale.
		/// 	</remarks>
		/// <param name="locale">The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
		/// 	</param>
		/// <returns>Localized texts in the form of an object (you could get the value of a keyed literal using resourceLiteralDictionary.MY_KEY or resourceLiteralDictionary["MY_KEY"]).
		/// 	</returns>
		/// <since>ARP1.0</since>
		IDictionary<string, string> GetResourceLiterals(Locale locale);
	}
}
