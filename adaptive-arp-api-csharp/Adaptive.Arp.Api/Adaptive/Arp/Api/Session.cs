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
	public class Session
	{
		/// <summary>Cookie array to keep the session</summary>
		/// <since>ARP1.0</since>
		private Cookie[] cookie;

		/// <summary>constructor used by implementation</summary>
		/// <param name="cookie"></param>
		/// <since>ARP1.0</since>
		public Session(Cookie[] cookie)
		{
			this.cookie = cookie;
		}

		/// <summary>Returns the cookie array</summary>
		/// <returns>cookie array</returns>
		/// <since>ARP1.0</since>
		public virtual Cookie[] GetCookie()
		{
			return cookie;
		}

		/// <summary>Set the cookie array</summary>
		/// <param name="cookie">array</param>
		/// <since>ARP1.0</since>
		public virtual void SetCookie(Cookie[] cookie)
		{
			this.cookie = cookie;
		}
	}
}
