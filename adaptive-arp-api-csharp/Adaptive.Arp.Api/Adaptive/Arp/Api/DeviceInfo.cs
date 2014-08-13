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
	public class DeviceInfo
	{
		/// <summary>Name of device - equivalent to brand.</summary>
		/// <remarks>Name of device - equivalent to brand.</remarks>
		private string name;

		/// <summary>Model of device - equivalent to device release or version.</summary>
		/// <remarks>Model of device - equivalent to device release or version.</remarks>
		private string model;

		/// <summary>Vendor of the device hardware.</summary>
		/// <remarks>Vendor of the device hardware.</remarks>
		private string vendor;

		/// <summary>Device identifier - this may not be unique for a device.</summary>
		/// <remarks>
		/// Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
		/// be unique for a specific instance of an application on a specific device.
		/// </remarks>
		private string uuid;

		/// <summary>Constructor for the implementation of the platform.</summary>
		/// <remarks>Constructor for the implementation of the platform.</remarks>
		/// <param name="name">or brand of the device.</param>
		/// <param name="model">of the device.</param>
		/// <param name="vendor">of the device.</param>
		/// <param name="uuid">unique* identifier (* platform dependent).</param>
		public DeviceInfo(string name, string model, string vendor, string uuid)
		{
			this.name = name;
			this.model = model;
			this.vendor = vendor;
			this.uuid = uuid;
		}

		/// <summary>Returns the name of the device.</summary>
		/// <remarks>Returns the name of the device.</remarks>
		/// <returns>String with device name.</returns>
		public virtual string GetName()
		{
			return name;
		}

		/// <summary>Returns the model of the device.</summary>
		/// <remarks>Returns the model of the device.</remarks>
		/// <returns>String with the model of the device.</returns>
		public virtual string GetModel()
		{
			return model;
		}

		/// <summary>Returns the vendor of the device.</summary>
		/// <remarks>Returns the vendor of the device.</remarks>
		/// <returns>String with the vendor name.</returns>
		public virtual string GetVendor()
		{
			return vendor;
		}

		/// <summary>Returns the platform dependent UUID of the device.</summary>
		/// <remarks>Returns the platform dependent UUID of the device.</remarks>
		/// <returns>String with the 128-bit device identifier.</returns>
		public virtual string GetUuid()
		{
			return uuid;
		}
	}
}
