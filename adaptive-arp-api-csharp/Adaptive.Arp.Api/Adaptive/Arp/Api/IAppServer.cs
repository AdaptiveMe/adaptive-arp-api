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
	/// <summary>This interfaces represents a specific instance of a listener on the platform.
	/// 	</summary>
	/// <remarks>
	/// This interfaces represents a specific instance of a listener on the platform. Listeners are generally http or https
	/// and provide access to the localhost/127.0.0.1 to retrieve embedded HTML content and resources.
	/// </remarks>
	public interface IAppServer : IAdaptiveRP
	{
		/// <summary>Returns the scheme the server instance is using.</summary>
		/// <remarks>
		/// Returns the scheme the server instance is using. Generally, this should be either http or https but other schemes
		/// may be supported on different platforms.
		/// </remarks>
		/// <returns>String with the scheme supported in the current server.</returns>
		string GetScheme();

		/// <summary>Returns the hostname this server instance is using.</summary>
		/// <remarks>
		/// Returns the hostname this server instance is using. Generally this will default to localhost or 127.0.0.1 but may
		/// use other hostnames on different platforms whilst still referring to the local listener.
		/// </remarks>
		/// <returns>String with the host name supported in the current server.</returns>
		string GetHost();

		/// <summary>Ports are dynamically assigned from a range 1024 to 22000.</summary>
		/// <remarks>
		/// Ports are dynamically assigned from a range 1024 to 22000. This port is assigned each time the server is
		/// started or resumed and represents the specific port the instance is listening on. Please note that the port
		/// assigned during start may change when the listener is paused and resumed - applications should prepare for this
		/// to respect platform specific limitations of listening on sockets when an application is in background.
		/// </remarks>
		/// <returns>The port the listener is accepting connections on.</returns>
		int GetPort();

		/// <summary>Provides the relative path of the listener for accessing web application resources.
		/// 	</summary>
		/// <remarks>
		/// Provides the relative path of the listener for accessing web application resources. This is generally a reference
		/// to the root path "/" of the listener context but may include other paths depending on each platform. It is good
		/// practice to use either getBaseURI() or the sum of the other methods to construct URLs that refer to the internal
		/// listener as it may change during an application's lifecycle.
		/// </remarks>
		/// <returns>The root path of the listener for serving web application resources.</returns>
		string GetPath();

		/// <summary>
		/// The base URI represents the base URI the listener is listening on - this is the sum of SCHEME://HOST:PORT PATH,
		/// generally this will take the form of http://localhost:1234/.
		/// </summary>
		/// <remarks>
		/// The base URI represents the base URI the listener is listening on - this is the sum of SCHEME://HOST:PORT PATH,
		/// generally this will take the form of http://localhost:1234/. This is a convenience method for constructing URLs that
		/// use the internal listener. Applications should use relative paths rather than absolute paths. In specific, an application
		/// should use "/resource.jpg" rather than "http://localhost:1234/resource.jpg" and set the base path for the view
		/// based on the result of this method.
		/// </remarks>
		/// <returns>String with the base URI for the listener.</returns>
		string GetBaseURI();

		/// <summary>Pause the current server instance.</summary>
		/// <remarks>Pause the current server instance.</remarks>
		void PauseServer();

		/// <summary>Resume the current server instance.</summary>
		/// <remarks>Resume the current server instance.</remarks>
		void ResumeServer();

		/// <summary>Stop the current server instance.</summary>
		/// <remarks>Stop the current server instance.</remarks>
		void StopServer();

		/// <summary>Start the current server instance.</summary>
		/// <remarks>Start the current server instance.</remarks>
		void StartServer();
	}
}
