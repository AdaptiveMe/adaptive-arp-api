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
	/// <summary>Created by clozano on 04/08/14.</summary>
	/// <remarks>Created by clozano on 04/08/14.</remarks>
	public abstract class IService : IBaseData
	{
		/// <summary>Register a new service</summary>
		/// <param name="service">to register</param>
		public abstract void RegisterService(Service service);

		/// <summary>Unregister a service</summary>
		/// <param name="service">to unregister</param>
		public abstract void UnregisterService(Service service);

		/// <summary>Unregister all services.</summary>
		/// <remarks>Unregister all services.</remarks>
		public abstract void UnregisterServices();

		/// <summary>Check whether a service by the given service is already registered.</summary>
		/// <remarks>Check whether a service by the given service is already registered.</remarks>
		/// <param name="service"></param>
		/// <returns>True if the service is registered, false otherwise.</returns>
		public abstract bool IsRegistered(Service service);

		/// <summary>Check whether a service by the given name is registered.</summary>
		/// <remarks>Check whether a service by the given name is registered.</remarks>
		/// <param name="serviceName"></param>
		/// <returns>True if the service is registered, false otherwise.</returns>
		public abstract bool IsRegistered(string serviceName);

		/// <summary>Get a reference to a registered service by name.</summary>
		/// <remarks>Get a reference to a registered service by name.</remarks>
		/// <param name="serviceName">Name of service.</param>
		/// <returns>A service, if registered, or null of the service does not exist.</returns>
		public abstract Service GetService(string serviceName);

		/// <summary>Request async a service for an Url</summary>
		/// <param name="serviceRequest"></param>
		/// <param name="service"></param>
		/// <param name="callback"></param>
		public abstract void InvokeService(ServiceRequest serviceRequest, Service service
			, IServiceResultCallback callback);

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

		/// <summary>Protocol version supported</summary>
		/// <since>ARP1.0</since>
		public enum ProtocolVersion
		{
			HttpProtocolVersion10,
			HttpProtocolVersion11
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
