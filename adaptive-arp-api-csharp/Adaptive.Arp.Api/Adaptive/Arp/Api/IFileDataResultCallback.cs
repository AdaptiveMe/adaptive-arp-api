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
	/// <summary>Created by clozano on 13/08/14.</summary>
	/// <remarks>Created by clozano on 13/08/14.</remarks>
	public abstract class IFileDataResultCallback
	{
		/// <summary>Result of data retrieval/storage operation.</summary>
		/// <remarks>Result of data retrieval/storage operation.</remarks>
		/// <param name="file">File being loaded/stored.</param>
		/// <param name="data">Data being loaded/stored.</param>
		/// <since>ARP1.0</since>
		public abstract void OnResult(IFile file, byte[] data);

		/// <summary>Result with warning of data retrieval/storage operation.</summary>
		/// <remarks>Result with warning of data retrieval/storage operation.</remarks>
		/// <param name="file">File being loaded/stored.</param>
		/// <param name="warning">Warning condition encountered.</param>
		/// <since>ARP1.0</since>
		public abstract void OnWarning(IFile file, IFileDataResultCallback.Warning warning
			);

		/// <summary>Error processing data retrieval/storage operation.</summary>
		/// <remarks>Error processing data retrieval/storage operation.</remarks>
		/// <param name="error">Error condition encountered.</param>
		/// <since>ARP1.0</since>
		public abstract void OnError(IFileDataResultCallback.Error error);

		/// <summary>Error processing data retrieval/storage operation.</summary>
		/// <remarks>Error processing data retrieval/storage operation.</remarks>
		/// <param name="file">File referenced during error.</param>
		/// <param name="error">Error condition encountered.</param>
		/// <since>ARP1.0</since>
		public abstract void OnError(IFile file, IFileDataResultCallback.Error error);

		/// <since>ARP1.0</since>
		public enum Warning
		{
			ExceedMaximumSize
		}

		/// <since>ARP1.0</since>
		public enum Error
		{
			InexistentFile,
			InsufficientSpace,
			Unauthorized
		}
	}
}
