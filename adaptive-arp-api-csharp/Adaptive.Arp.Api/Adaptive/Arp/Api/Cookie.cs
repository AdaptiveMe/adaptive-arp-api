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
	/// <summary>Created by FRMI on 12/08/2014.</summary>
	/// <remarks>Created by FRMI on 12/08/2014.</remarks>
	public class Cookie
	{
		/// <summary>Name ot the cookie</summary>
		/// <since>ARP1.0</since>
		private string name;

		/// <summary>Value of the Cookie</summary>
		/// <since>ARP1.0</since>
		private string value;

		/// <summary>Domain for which the cookie is valid.</summary>
		/// <remarks>Domain for which the cookie is valid.</remarks>
		private string domain;

		/// <summary>URI path for which the cookie is valid.</summary>
		/// <remarks>URI path for which the cookie is valid.</remarks>
		private string path;

		/// <summary>Scheme of the domain - http/https - for which the cookie is valid.</summary>
		/// <remarks>Scheme of the domain - http/https - for which the cookie is valid.</remarks>
		private string scheme;

		/// <summary>Cookie is secure (https only)</summary>
		private bool secure;

		/// <summary>Cookie expiry in milliseconds or -1 for session only.</summary>
		/// <remarks>Cookie expiry in milliseconds or -1 for session only.</remarks>
		private long expiry;

		/// <summary>Cookie creation timestamp in milliseconds.</summary>
		/// <remarks>Cookie creation timestamp in milliseconds.</remarks>
		private long creation;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="name"></param>
		/// <param name="value"></param>
		/// <since>ARP1.0</since>
		public Cookie(string name, string value)
		{
			this.name = name;
			this.value = value;
		}

		public virtual string GetDomain()
		{
			return domain;
		}

		public virtual void SetDomain(string domain)
		{
			this.domain = domain;
		}

		public virtual string GetPath()
		{
			return path;
		}

		public virtual void SetPath(string path)
		{
			this.path = path;
		}

		public virtual string GetScheme()
		{
			return scheme;
		}

		public virtual void SetScheme(string scheme)
		{
			this.scheme = scheme;
		}

		public virtual bool IsSecure()
		{
			return secure;
		}

		public virtual void SetSecure(bool secure)
		{
			this.secure = secure;
		}

		public virtual long GetExpiry()
		{
			return expiry;
		}

		public virtual void SetExpiry(long expiry)
		{
			this.expiry = expiry;
		}

		/// <summary>Returns the cookie name</summary>
		/// <returns>name</returns>
		/// <since>ARP1.0</since>
		public virtual string GetName()
		{
			return name;
		}

		/// <summary>Set the cookie name</summary>
		/// <param name="name"></param>
		/// <since>ARP1.0</since>
		public virtual void SetName(string name)
		{
			this.name = name;
		}

		/// <summary>Returns the cookie value</summary>
		/// <returns></returns>
		/// <since>ARP1.0</since>
		public virtual string GetValue()
		{
			return value;
		}

		/// <summary>Set the cookie value</summary>
		/// <param name="value"></param>
		/// <since>ARP1.0</since>
		public virtual void SetValue(string value)
		{
			this.value = value;
		}

		public virtual long GetCreation()
		{
			return creation;
		}
	}
}
