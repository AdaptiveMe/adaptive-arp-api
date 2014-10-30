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
	/// <summary>Created by clozano on 05/09/2014.</summary>
	/// <remarks>Created by clozano on 05/09/2014.</remarks>
	public abstract class IAppContext : IAdaptiveRP
	{
		/// <summary>The main application context.</summary>
		/// <remarks>The main application context. This should be cast to the platform specific implementation.
		/// 	</remarks>
		/// <returns>Object representing the specific singleton application context provided by the OS.
		/// 	</returns>
		public abstract object GetContext();

		/// <summary>The type of context provided by the getContext method.</summary>
		/// <remarks>The type of context provided by the getContext method.</remarks>
		/// <returns>Type of platform context.</returns>
		public abstract IAppContext.Type GetContextType();

		/// <summary>The type of application context - platform specific.</summary>
		/// <remarks>The type of application context - platform specific.</remarks>
		public enum Type
		{
			iOS,
			Osx,
			Windows,
			WindowsPhone,
			Android,
			Linux,
			Blackberry,
			Tizen,
			FirefoxOS,
			Chromium,
			Unspecified,
			Unknown
		}
	}
}
