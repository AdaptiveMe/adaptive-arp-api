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
	/// <seealso cref="IAccelerationListener">IAccelerationListener</seealso>
	/// <seealso cref="IAccelerometer">IAccelerometer</seealso>
	/// <since>ARP1.0</since>
	public class Acceleration
	{
		internal double x;

		internal double y;

		internal double z;

		internal IAccelerometer.Status status;

		internal long timeStamp;

		/// <param name="x"></param>
		/// <param name="y"></param>
		/// <param name="z"></param>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public Acceleration(double x, double y, double z)
		{
			// X-axis component of the acceleration.
			// Y-axis component of the acceleration.
			// Z-axis component of the acceleration.
			// Status of the acceleration reading.
			this.x = x;
			this.y = y;
			this.z = z;
			this.status = IAccelerometer.Status.Success;
			this.timeStamp = Runtime.CurrentTimeMillis();
		}

		/// <param name="status"></param>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public Acceleration(IAccelerometer.Status status)
		{
			this.status = status;
			this.timeStamp = Runtime.CurrentTimeMillis();
		}

		/// <returns>X-axis component of the acceleration.</returns>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public virtual double GetX()
		{
			return x;
		}

		/// <returns>Y-axis component of the acceleration.</returns>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public virtual double GetY()
		{
			return y;
		}

		/// <returns>Z-axis component of the acceleration.</returns>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public virtual double GetZ()
		{
			return z;
		}

		/// <summary>Status of this acceleration data.</summary>
		/// <remarks>
		/// Status of this acceleration data. If status is Success, then the readings
		/// are given. Any other status represents a fail condition that needs to be
		/// managed.
		/// </remarks>
		/// <returns>status of the orientation data.</returns>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public virtual IAccelerometer.Status GetStatus()
		{
			return status;
		}
	}
}
