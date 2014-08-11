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
	[System.Serializable]
	public class OSInfo
	{
		/// <summary>The name of the operating system.</summary>
		/// <remarks>The name of the operating system.</remarks>
		private string name;

		/// <summary>The version/identifier of the operating system.</summary>
		/// <remarks>The version/identifier of the operating system.</remarks>
		private string version;

		/// <summary>The vendor of the operating system.</summary>
		/// <remarks>The vendor of the operating system.</remarks>
		private string vendor;

		/// <summary>Constructor used by implementation to set the OS information.</summary>
		/// <remarks>Constructor used by implementation to set the OS information.</remarks>
		/// <param name="name">of the OS.</param>
		/// <param name="version">of the OS.</param>
		/// <param name="vendor">of the OS.</param>
		public OSInfo(string name, string version, string vendor)
		{
			this.name = name;
			this.version = version;
			this.vendor = vendor;
		}

		/// <summary>Returns the name of the operating system.</summary>
		/// <remarks>Returns the name of the operating system.</remarks>
		/// <returns>OS name.</returns>
		public virtual string GetName()
		{
			return name;
		}

		/// <summary>Returns the version of the operating system.</summary>
		/// <remarks>Returns the version of the operating system.</remarks>
		/// <returns>OS version.</returns>
		public virtual string GetVersion()
		{
			return version;
		}

		/// <summary>Returns the vendor of the operating system.</summary>
		/// <remarks>Returns the vendor of the operating system.</remarks>
		/// <returns>OS vendor.</returns>
		public virtual string GetVendor()
		{
			return vendor;
		}
	}
}
