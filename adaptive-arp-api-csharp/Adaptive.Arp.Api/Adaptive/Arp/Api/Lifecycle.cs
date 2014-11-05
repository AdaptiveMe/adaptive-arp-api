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
	/// <summary>Represents a specific application life-cycle stage.</summary>
	/// <remarks>Represents a specific application life-cycle stage.</remarks>
	public class Lifecycle
	{
		/// <summary>Represent the state of the app</summary>
		/// <since>ARP1.0</since>
		private Lifecycle.State state;

		/// <summary>Constructor used by the implementation</summary>
		public Lifecycle()
		{
		}

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="state"></param>
		/// <since>ARP1.0</since>
		public Lifecycle(Lifecycle.State state)
		{
			this.state = state;
		}

		/// <summary>Returns the state of the application</summary>
		/// <returns>state of the app</returns>
		/// <since>ARP1.0</since>
		public virtual Lifecycle.State GetState()
		{
			return state;
		}

		/// <summary>Set the State of the application</summary>
		/// <param name="state">of the app</param>
		/// <since>ARP1.0</since>
		public virtual void SetState(Lifecycle.State state)
		{
			this.state = state;
		}

		/// <summary>
		/// Possible lifecycle States:
		/// 1.
		/// </summary>
		/// <remarks>
		/// Possible lifecycle States:
		/// 1. Starting    - Before starting.
		/// 2. Started     - Start concluded.
		/// 3. Running     - Accepts user interaction - running in foreground.
		/// 4. Pausing     - Before going to background.
		/// 4.1 PausedIdle - In background, no scheduled background activity (passive).
		/// 4.2 PausedRun  - In background, scheduled background activity (periodic network access, gps access, etc.)
		/// 5. Resuming    - Before going to foreground, followed by Running state.
		/// 6. Stopping    - Before stopping.
		/// </remarks>
		/// <since>ARP1.0</since>
		public enum State
		{
			Starting,
			Started,
			Running,
			Paused,
			PausedIdle,
			PausedRun,
			Resuming,
			Stopping,
			Unknown
		}
	}
}
