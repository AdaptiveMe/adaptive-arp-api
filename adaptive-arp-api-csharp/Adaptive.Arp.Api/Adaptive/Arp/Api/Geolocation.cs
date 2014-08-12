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
	/// <summary>Created by FRMI on 11/08/2014.</summary>
	/// <remarks>Created by FRMI on 11/08/2014.</remarks>
	public class Geolocation
	{
		/// <summary>The Y coordinate (or latitude).</summary>
		/// <remarks>The Y coordinate (or latitude). Measured in degrees.</remarks>
		/// <since>ARP1.0</since>
		private double latitude;

		/// <summary>The X coordinate (or longitude).</summary>
		/// <remarks>The X coordinate (or longitude). Measured in degrees.</remarks>
		/// <since>ARP1.0</since>
		private double longitude;

		/// <summary>The current device altitude (or Z coordinate).</summary>
		/// <remarks>The current device altitude (or Z coordinate). Measured in meters.</remarks>
		/// <since>ARP1.0</since>
		private double altitude;

		/// <summary>Dilution of precision on the X measurement.</summary>
		/// <remarks>Dilution of precision on the X measurement. Measured in meters.</remarks>
		/// <since>ARP1.0</since>
		private float XDoP;

		/// <summary>Dilution of precision on the Y measurement.</summary>
		/// <remarks>Dilution of precision on the Y measurement. Measured in meters.</remarks>
		/// <since>ARP1.0</since>
		private float YDoP;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="latitude"></param>
		/// <param name="longitude"></param>
		/// <param name="altitude"></param>
		/// <param name="XDoP"></param>
		/// <param name="YDoP"></param>
		/// <since>ARP1.0</since>
		public Geolocation(double latitude, double longitude, double altitude, float XDoP
			, float YDoP)
		{
			this.latitude = latitude;
			this.longitude = longitude;
			this.altitude = altitude;
			this.XDoP = XDoP;
			this.YDoP = YDoP;
		}

		/// <summary>Returns the latitude in degrees</summary>
		/// <returns>latitude</returns>
		/// <since>ARP1.0</since>
		public virtual double GetLatitude()
		{
			return latitude;
		}

		/// <summary>Set the latitude in degrees</summary>
		/// <param name="latitude"></param>
		/// <since>ARP1.0</since>
		public virtual void SetLatitude(double latitude)
		{
			this.latitude = latitude;
		}

		/// <summary>Returns the longitude in degrees</summary>
		/// <returns>longitude</returns>
		/// <since>ARP1.0</since>
		public virtual double GetLongitude()
		{
			return longitude;
		}

		/// <summary>Returns the latitude in degrees</summary>
		/// <param name="longitude"></param>
		/// <since>ARP1.0</since>
		public virtual void SetLongitude(double longitude)
		{
			this.longitude = longitude;
		}

		/// <summary>Returns altitude in meters</summary>
		/// <returns>altitude</returns>
		/// <since>ARP1.0</since>
		public virtual double GetAltitude()
		{
			return altitude;
		}

		/// <summary>Set altitude in meters</summary>
		/// <param name="altitude"></param>
		/// <since>ARP1.0</since>
		public virtual void SetAltitude(double altitude)
		{
			this.altitude = altitude;
		}

		/// <summary>Returns the Dilution of Position in the X axis (longitude)</summary>
		/// <returns>XDoP</returns>
		/// <since>ARP1.0</since>
		public virtual float GetXDoP()
		{
			return XDoP;
		}

		/// <summary>Returns the Dilution of Position in the Y axis (latitude)</summary>
		/// <returns>YDoP</returns>
		/// <since>ARP1.0</since>
		public virtual float GetYDoP()
		{
			return YDoP;
		}
	}
}
