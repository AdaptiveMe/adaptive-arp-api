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
	/// <summary>Structure representing a remote or local service access end-point.</summary>
	/// <remarks>Structure representing a remote or local service access end-point.</remarks>
	public class Endpoint
	{
		/// <summary>The remote serice host (alias or IP).</summary>
		/// <remarks>The remote serice host (alias or IP).</remarks>
		/// <since>ARP1.0</since>
		private string host;

		/// <summary>The remote service path (to be added to the host and port url).</summary>
		/// <remarks>The remote service path (to be added to the host and port url).</remarks>
		/// <since>ARP1.0</since>
		private string path;

		/// <summary>The remote service accessible port.</summary>
		/// <remarks>The remote service accessible port.</remarks>
		/// <since>ARP1.0</since>
		private int port;

		/// <summary>The proxy url - if needed - to access the remote service.</summary>
		/// <remarks>The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
		/// 	</remarks>
		/// <since>ARP1.0</since>
		private string proxy;

		/// <summary>The remote service scheme.</summary>
		/// <remarks>The remote service scheme.</remarks>
		/// <since>ARP1.0</since>
		private string Scheme;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="host"></param>
		/// <param name="path"></param>
		/// <param name="port"></param>
		/// <param name="proxy"></param>
		/// <param name="scheme"></param>
		/// <since>ARP1.0</since>
		public Endpoint(string host, string path, int port, string proxy, string scheme)
		{
			this.host = host;
			this.path = path;
			this.port = port;
			this.proxy = proxy;
			Scheme = scheme;
		}

		/// <summary>Returns the host</summary>
		/// <returns>host</returns>
		/// <since>ARP1.0</since>
		public virtual string GetHost()
		{
			return host;
		}

		/// <summary>Set the host</summary>
		/// <param name="host"></param>
		/// <since>ARP1.0</since>
		public virtual void SetHost(string host)
		{
			this.host = host;
		}

		/// <summary>Returns the path</summary>
		/// <returns>path</returns>
		/// <since>ARP1.0</since>
		public virtual string GetPath()
		{
			return path;
		}

		/// <summary>Set the path</summary>
		/// <param name="path"></param>
		/// <since>ARP1.0</since>
		public virtual void SetPath(string path)
		{
			this.path = path;
		}

		/// <summary>Returns the port</summary>
		/// <returns>port</returns>
		/// <since>ARP1.0</since>
		public virtual int GetPort()
		{
			return port;
		}

		/// <summary>Set the port</summary>
		/// <param name="port"></param>
		/// <since>ARP1.0</since>
		public virtual void SetPort(int port)
		{
			this.port = port;
		}

		/// <summary>Return the proxy</summary>
		/// <returns>proxy</returns>
		/// <since>ARP1.0</since>
		public virtual string GetProxy()
		{
			return proxy;
		}

		/// <summary>Set the proxy</summary>
		/// <param name="proxy"></param>
		/// <since>ARP1.0</since>
		public virtual void SetProxy(string proxy)
		{
			this.proxy = proxy;
		}

		/// <summary>Returns the scheme</summary>
		/// <returns>scheme</returns>
		/// <since>ARP1.0</since>
		public virtual string GetScheme()
		{
			return Scheme;
		}

		/// <summary>Set the scheme</summary>
		/// <param name="scheme"></param>
		/// <since>ARP1.0</since>
		public virtual void SetScheme(string scheme)
		{
			Scheme = scheme;
		}
	}
}
