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
	public abstract class IFileListResultCallback : IBaseCallback
	{
		/// <summary>On correct result of a file operation.</summary>
		/// <remarks>On correct result of a file operation.</remarks>
		/// <param name="files">Array of resulting files/folders.</param>
		/// <since>ARP1.0</since>
		public abstract void OnResult(IFile[] files);

		/// <summary>On partial result of a file operation, containing a warning.</summary>
		/// <remarks>On partial result of a file operation, containing a warning.</remarks>
		/// <param name="files">Array of resulting files/folders.</param>
		/// <param name="warning">Warning condition encountered.</param>
		/// <since>ARP1.0</since>
		public abstract void OnWarning(IFile[] files, IFileListResultCallback.Warning warning
			);

		/// <summary>On error result of a file operation.</summary>
		/// <remarks>On error result of a file operation.</remarks>
		/// <param name="error">Error processing the request.</param>
		/// <since>ARP1.0</since>
		public abstract void OnError(IFileListResultCallback.Error error);

		/// <summary>Error processing data retrieval/storage operation.</summary>
		/// <remarks>Error processing data retrieval/storage operation.</remarks>
		/// <param name="file">File referenced during error.</param>
		/// <param name="error">Error condition encountered.</param>
		/// <since>ARP1.0</since>
		public abstract void OnError(IFile file, IFileListResultCallback.Error error);

		/// <summary>List of warnings.</summary>
		/// <remarks>List of warnings.</remarks>
		/// <since>ARP1.0</since>
		public enum Warning
		{
			PartialResult
		}

		/// <summary>List of errors.</summary>
		/// <remarks>List of errors.</remarks>
		/// <since>ARP1.0</since>
		public enum Error
		{
			InexistentFile,
			Unauthorized
		}
	}
}
