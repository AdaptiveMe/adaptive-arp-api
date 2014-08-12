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
	/// <summary>Created by FRMI on 12/08/2014.</summary>
	/// <remarks>Created by FRMI on 12/08/2014.</remarks>
	public interface ILifecycleListener
	{
		/// <summary>Called when lifecycle changes somehow.</summary>
		/// <remarks>Called when lifecycle changes somehow.</remarks>
		/// <param name="lifecycle"></param>
		/// <since>ARP1.0</since>
		void OnResult(Lifecycle lifecycle);

		/// <summary>Data received with warning - ie.</summary>
		/// <remarks>Data received with warning - ie. HighDoP</remarks>
		/// <param name="lifecycle"></param>
		/// <since>ARP1.0</since>
		void OnWarning(Lifecycle lifecycle);

		/// <summary>No data received - error condition, not authorized or hardware not available.
		/// 	</summary>
		/// <remarks>No data received - error condition, not authorized or hardware not available.
		/// 	</remarks>
		/// <param name="lifecycle"></param>
		/// <since>ARP1.0</since>
		void OnError(Lifecycle lifecycle);
	}
}