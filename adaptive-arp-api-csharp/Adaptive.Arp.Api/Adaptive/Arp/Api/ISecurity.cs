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
	public interface ISecurity : IBaseSecurity
	{
		/// <summary>Returns if the device has been modified in anyhow</summary>
		/// <returns>true if the device has been modified; false otherwise</returns>
		/// <since>ARP1.0</since>
		bool IsDeviceModified();

		/// <summary>Stores in the device internal storage the specified item/s.</summary>
		/// <remarks>Stores in the device internal storage the specified item/s.</remarks>
		/// <param name="keyValues">Array containing the items to store on the device internal memory.
		/// 	</param>
		/// <param name="publicAccessName">The name of the shared internal storage object (if needed).
		/// 	</param>
		/// <param name="callback">callback to be executed upon function result.</param>
		/// <since>ARP 1.0</since>
		void SetSecureKeyValuePairs(SecureKeyPair[] keyValues, string publicAccessName, ISecureKVResultCallback
			 callback);

		/// <summary>Retrieves from the device internal storage the entry/entries containing the specified key names.
		/// 	</summary>
		/// <remarks>Retrieves from the device internal storage the entry/entries containing the specified key names.
		/// 	</remarks>
		/// <param name="keys">Array with the key names to retrieve.</param>
		/// <param name="publicAccessName">The name of the shared internal storage object (if needed).
		/// 	</param>
		/// <param name="callback">callback to be executed upon function result.</param>
		/// <since>ARP 1.0</since>
		void GetSecureKeyValuePairs(string[] keys, string publicAccessName, ISecureKVResultCallback
			 callback);

		/// <summary>Deletes from the device internal storage the entry/entries containing the specified key names.
		/// 	</summary>
		/// <remarks>Deletes from the device internal storage the entry/entries containing the specified key names.
		/// 	</remarks>
		/// <param name="keys">Array with the key names to delete.</param>
		/// <param name="publicAccessName">The name of the shared internal storage object (if needed).
		/// 	</param>
		/// <param name="callback">callback to be executed upon function result.</param>
		/// <since>ARP 1.0</since>
		void DeleteSecureKeyValuePairs(string[] keys, string publicAccessName, ISecureKVResultCallback
			 callback);
	}
}
