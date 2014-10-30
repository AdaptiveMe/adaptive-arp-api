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
	/// <summary>Structure representing the data of a http request or response header.</summary>
	/// <remarks>Structure representing the data of a http request or response header.</remarks>
	public class Header
	{
		/// <summary>Name ot the header</summary>
		/// <since>ARP1.0</since>
		private string name;

		/// <summary>Value of the header</summary>
		/// <since>ARP1.0</since>
		private string data;

		/// <summary>Constructor used by the implementation</summary>
		public Header()
		{
		}

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="name"></param>
		/// <param name="data"></param>
		/// <since>ARP1.0</since>
		public Header(string name, string data)
		{
			this.name = name;
			this.data = data;
		}

		/// <summary>Returns the header name</summary>
		/// <returns>name</returns>
		/// <since>ARP1.0</since>
		public virtual string GetName()
		{
			return name;
		}

		/// <summary>Set the header name</summary>
		/// <param name="name"></param>
		/// <since>ARP1.0</since>
		public virtual void SetName(string name)
		{
			this.name = name;
		}

		/// <summary>Returns the header value</summary>
		/// <returns></returns>
		/// <since>ARP1.0</since>
		public virtual string GetData()
		{
			return data;
		}

		/// <summary>Set the header value</summary>
		/// <param name="data"></param>
		/// <since>ARP1.0</since>
		public virtual void SetData(string data)
		{
			this.data = data;
		}
	}
}
