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
	/// <author>Carlos Lozano Diez</author>
	/// <seealso cref="Acceleration">Acceleration</seealso>
	/// <seealso cref="IAccelerationListener">IAccelerationListener</seealso>
	/// <since>ARP1.0</since>
	public abstract class IAccelerometer : IBaseSensor
	{
		/// <summary>Success = Correct reading.</summary>
		/// <remarks>
		/// Success = Correct reading. Unauthorized = No reading. User has not
		/// authorized a reading. NeedsCalibration = No reading. Device needs to be
		/// calibrated. Unavailable = No reading. Not supported or temporarily
		/// disabled.
		/// </remarks>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public enum Status
		{
			Success,
			Unauthorized,
			NeedsCalibration,
			Stale,
			Unavailable
		}

		/// <summary>Register a new listener that will receive acceleration events.</summary>
		/// <remarks>Register a new listener that will receive acceleration events.</remarks>
		/// <param name="listener">to be registered.</param>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public abstract void AddAccelerationListener(IAccelerationListener listener);

		/// <summary>De-registers an existing listener from receiving acceleration events.</summary>
		/// <remarks>De-registers an existing listener from receiving acceleration events.</remarks>
		/// <param name="listener"></param>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public abstract void RemoveAccelerationListener(IAccelerationListener listener);

		/// <summary>Removed all existing listeners from receiving acceleration events.</summary>
		/// <remarks>Removed all existing listeners from receiving acceleration events.</remarks>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public abstract void RemoveAccelerationListeners();
	}
}
