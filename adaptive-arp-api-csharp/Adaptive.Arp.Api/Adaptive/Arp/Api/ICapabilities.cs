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
	/// <since>ARP1.0</since>
	public abstract class ICapabilities : IBaseSystem
	{
		/// <summary>
		/// Determines whether a specific Sensor capability is supported by the
		/// device.
		/// </summary>
		/// <remarks>
		/// Determines whether a specific Sensor capability is supported by the
		/// device.
		/// </remarks>
		/// <param name="type">Type of feature to check.</param>
		/// <returns>true if supported, false otherwise.</returns>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public abstract bool HasSensorSupport(ICapabilities.Sensor type);

		/// <summary>
		/// Determines whether a specific Communication capability is supported by
		/// the device.
		/// </summary>
		/// <remarks>
		/// Determines whether a specific Communication capability is supported by
		/// the device.
		/// </remarks>
		/// <param name="type">Type of feature to check.</param>
		/// <returns>true if supported, false otherwise.</returns>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public abstract bool HasCommunicationSupport(ICapabilities.Communication type);

		/// <summary>Determines whether a specific Data capability is supported by the device.
		/// 	</summary>
		/// <remarks>Determines whether a specific Data capability is supported by the device.
		/// 	</remarks>
		/// <param name="type">Type of feature to check.</param>
		/// <returns>true if supported, false otherwise.</returns>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public abstract bool HasDataSupport(ICapabilities.Data type);

		/// <summary>
		/// Determines whether a specific Media capability is supported by the
		/// device.
		/// </summary>
		/// <remarks>
		/// Determines whether a specific Media capability is supported by the
		/// device.
		/// </remarks>
		/// <param name="type">Type of feature to check.</param>
		/// <returns>true if supported, false otherwise.</returns>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public abstract bool HasMediaSupport(ICapabilities.Media type);

		/// <summary>Determines whether a specific Net capability is supported by the device.
		/// 	</summary>
		/// <remarks>Determines whether a specific Net capability is supported by the device.
		/// 	</remarks>
		/// <param name="type">Type of feature to check.</param>
		/// <returns>true if supported, false otherwise.</returns>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public abstract bool HasNetSupport(ICapabilities.Net type);

		/// <summary>
		/// Determines whether a specific Notification capability is supported by the
		/// device.
		/// </summary>
		/// <remarks>
		/// Determines whether a specific Notification capability is supported by the
		/// device.
		/// </remarks>
		/// <param name="type">Type of feature to check.</param>
		/// <returns>true if supported, false otherwise.</returns>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public abstract bool HasNotificationSupport(ICapabilities.Notification type);

		/// <summary>Determines whether a specific hardware button is supported for interaction.
		/// 	</summary>
		/// <remarks>Determines whether a specific hardware button is supported for interaction.
		/// 	</remarks>
		/// <param name="type">Type of feature to check.</param>
		/// <returns>true is supported, false otherwise.</returns>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public abstract bool HasButtonSupport(ICapabilities.Button type);

		/// <summary>Sensor type enumeration.</summary>
		/// <remarks>Sensor type enumeration.</remarks>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public enum Sensor
		{
			Accelerometer,
			AmbientLight,
			Barometer,
			Geolocation,
			Gyroscope,
			Magnetometer,
			Proximity
		}

		/// <summary>PIM functionality support enumeration.</summary>
		/// <remarks>PIM functionality support enumeration.</remarks>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public enum Communication
		{
			Calendar,
			Contact,
			Mail,
			Messaging,
			Telephony
		}

		/// <summary>Storage functionality support enumeration.</summary>
		/// <remarks>Storage functionality support enumeration.</remarks>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public enum Data
		{
			Database,
			File,
			Cloud
		}

		/// <summary>Media functionality support enumeration.</summary>
		/// <remarks>Media functionality support enumeration.</remarks>
		public enum Media
		{
			Audio_Playback,
			Audio_Recording,
			Camera,
			Video_Playback,
			Video_Recording
		}

		/// <summary>Connectivity support enumeration.</summary>
		/// <remarks>Connectivity support enumeration.</remarks>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public enum Net
		{
			Gsm,
			Gprs,
			Hsdpa,
			Lte,
			Wifi,
			Ethernet
		}

		/// <summary>Notification support enumeration.</summary>
		/// <remarks>Notification support enumeration.</remarks>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public enum Notification
		{
			Alarm,
			LocalNotification,
			RemoteNotification,
			Vibration
		}

		/// <summary>Hardware button support (only those that can interact with the application).
		/// 	</summary>
		/// <remarks>Hardware button support (only those that can interact with the application).
		/// 	</remarks>
		/// <author>Carlos Lozano Diez</author>
		/// <since>ARP1.0</since>
		public enum Button
		{
			HomeButton,
			BackButton,
			OptionButton
		}
	}
}
