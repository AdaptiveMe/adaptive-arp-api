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
	/// <summary>
	/// Provides support for multiple listeners to be started for any application and manages the delivery of listening
	/// server lifecycle events to registered listeners.
	/// </summary>
	/// <remarks>
	/// Provides support for multiple listeners to be started for any application and manages the delivery of listening
	/// server lifecycle events to registered listeners.
	/// </remarks>
	public interface IAppServerManager
	{
		/// <summary>Registers a listener to receive server lifecycle events.</summary>
		/// <remarks>Registers a listener to receive server lifecycle events.</remarks>
		/// <param name="listener">To receive server listener lifecycle events.</param>
		void AddServerListener(IAppServerListener listener);

		/// <summary>Removes a listener to stop receiving server lifecycle events.</summary>
		/// <remarks>Removes a listener to stop receiving server lifecycle events.</remarks>
		/// <param name="listener">Listener currently registered.</param>
		void RemoveServerListener(IAppServerListener listener);

		/// <summary>Removed all listeners currently listening to server lifecycle events.</summary>
		/// <remarks>Removed all listeners currently listening to server lifecycle events.</remarks>
		void RemoveServerListeners();

		/// <summary>Asynchronous command to start listening.</summary>
		/// <remarks>
		/// Asynchronous command to start listening. This starts a new instance of the server. A reference of the IAppServer
		/// started is sent to the listeners.
		/// </remarks>
		void StartServer();

		/// <summary>Asynchronous command to stop listening.</summary>
		/// <remarks>Asynchronous command to stop listening. This stops the specified instance of the server.
		/// 	</remarks>
		/// <param name="server">Stop the specified server.</param>
		void StopServer(IAppServer server);

		/// <summary>Asynchronous command to pause listening.</summary>
		/// <remarks>Asynchronous command to pause listening. This stops the specified instance of the server.
		/// 	</remarks>
		/// <param name="server">Stop the specified server.</param>
		void PauseServer(IAppServer server);

		/// <summary>Asynchronous command to resume listening.</summary>
		/// <remarks>Asynchronous command to resume listening. This stops the specified instance of the server.
		/// 	</remarks>
		/// <param name="server">Stop the specified server.</param>
		void ResumeServer(IAppServer server);

		/// <summary>Stops all currently listening servers.</summary>
		/// <remarks>Stops all currently listening servers.</remarks>
		void StopServers();

		/// <summary>Returns a list of all currently active servers (Not stopped).</summary>
		/// <remarks>Returns a list of all currently active servers (Not stopped).</remarks>
		/// <returns>Array with the list of current active listening servers.</returns>
		IAppServer[] GetServers();
	}
}
