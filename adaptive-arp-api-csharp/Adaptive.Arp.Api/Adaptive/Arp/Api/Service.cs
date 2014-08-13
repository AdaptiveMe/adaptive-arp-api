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
	public class Service
	{
		/// <summary>Enpoint of the service</summary>
		/// <since>ARP1.0</since>
		private Endpoint endpoint;

		/// <summary>The service name</summary>
		/// <since>ARP1.0</since>
		private string name;

		/// <summary>The method used</summary>
		/// <since>ARP1.0</since>
		private Service.ServiceMethod method;

		/// <summary>The type of the service</summary>
		/// <since>ARP1.0</since>
		private Service.ServiceType type;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="endpoint"></param>
		/// <param name="name"></param>
		/// <param name="method"></param>
		/// <param name="type"></param>
		/// <since>ARP1.0</since>
		public Service(Endpoint endpoint, string name, Service.ServiceMethod method, Service.ServiceType
			 type)
		{
			this.endpoint = endpoint;
			this.name = name;
			this.method = method;
			this.type = type;
		}

		/// <summary>Returns the endpoint</summary>
		/// <returns>endpoint</returns>
		/// <since>ARP1.0</since>
		public virtual Endpoint GetEndpoint()
		{
			return endpoint;
		}

		/// <summary>Set the endpoint</summary>
		/// <param name="endpoint"></param>
		/// <since>ARP1.0</since>
		public virtual void SetEndpoint(Endpoint endpoint)
		{
			this.endpoint = endpoint;
		}

		/// <summary>Returns the name</summary>
		/// <returns>name</returns>
		/// <since>ARP1.0</since>
		public virtual string GetName()
		{
			return name;
		}

		/// <summary>Set the name</summary>
		/// <param name="name"></param>
		/// <since>ARP1.0</since>
		public virtual void SetName(string name)
		{
			this.name = name;
		}

		/// <summary>Returns the method</summary>
		/// <returns>method</returns>
		/// <since>ARP1.0</since>
		public virtual Service.ServiceMethod GetMethod()
		{
			return method;
		}

		/// <summary>Set the method</summary>
		/// <param name="method"></param>
		/// <since>ARP1.0</since>
		public virtual void SetMethod(Service.ServiceMethod method)
		{
			this.method = method;
		}

		/// <summary>Returns the type</summary>
		/// <returns>type</returns>
		/// <since>ARP1.0</since>
		public virtual Service.ServiceType GetType()
		{
			return type;
		}

		/// <summary>Set the type</summary>
		/// <param name="type"></param>
		/// <since>ARP1.0</since>
		public virtual void SetType(Service.ServiceType type)
		{
			this.type = type;
		}

		/// <summary>Type of available services</summary>
		/// <since>ARP1.0</since>
		public enum ServiceType
		{
			ServicetypeAmfSerialization,
			ServicetypeGwtRpc,
			ServicetypeOctetBinary,
			ServicetypeRemotingSerialization,
			ServicetypeRestJson,
			ServicetypeRestXml,
			ServicetypeSoapJson,
			ServicetypeSoapXml,
			ServicetypeXmlrpcJson,
			ServicetypeXmlrpcXml
		}

		/// <summary>Available methods</summary>
		/// <since>ARP1.0</since>
		public enum ServiceMethod
		{
			Post,
			Get
		}
	}
}
