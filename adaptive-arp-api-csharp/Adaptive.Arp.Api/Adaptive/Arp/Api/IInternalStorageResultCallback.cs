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
	/// <summary>Created by DBarranco on 11/08/14.</summary>
	/// <remarks>Created by DBarranco on 11/08/14.</remarks>
	public abstract class IInternalStorageResultCallback
	{
		/// <summary>Correct data received.</summary>
		/// <remarks>Correct data received.</remarks>
		/// <param name="keyValues"></param>
		/// <since>ARP1.0</since>
		public abstract void OnResult(InternalStorageKeyPair[] keyValues);

		/// <summary>Data received with warning - ie Found entries with existing key and values have been overriden
		/// 	</summary>
		/// <param name="keyValues"></param>
		/// <param name="warning"></param>
		/// <since>ARP1.0</since>
		public abstract void OnWarning(InternalStorageKeyPair[] keyValues, IInternalStorageResultCallback.Warning
			 warning);

		/// <summary>No data received - error condition, not authorized .</summary>
		/// <remarks>No data received - error condition, not authorized .</remarks>
		/// <param name="error"></param>
		/// <since>ARP1.0</since>
		public abstract void OnError(IInternalStorageResultCallback.Error error);

		public enum Warning
		{
			EntryOverride
		}

		public enum Error
		{
			NoPermission,
			NoMatchesFound
		}
	}
}
