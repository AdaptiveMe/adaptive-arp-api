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
	public class Lifecycle
	{
		/// <summary>Represent the state of the app</summary>
		/// <since>ARP1.0</since>
		private Lifecycle.State state;

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
		/// Possible lifecycle States
		/// Start = when app starts
		/// Pause = ToBackground
		/// Resume = ToForeground
		/// End = app closes
		/// </summary>
		/// <since>ARP1.0</since>
		public enum State
		{
			Start,
			Pause,
			Resume,
			End
		}
	}
}
