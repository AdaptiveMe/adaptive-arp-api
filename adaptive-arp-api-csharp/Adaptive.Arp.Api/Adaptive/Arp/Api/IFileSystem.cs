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
	/// <summary>Created by clozano on 04/08/14.</summary>
	/// <remarks>Created by clozano on 04/08/14.</remarks>
	public interface IFileSystem : IBaseData
	{
		/// <summary>Returns the file system dependent file separator.</summary>
		/// <remarks>Returns the file system dependent file separator.</remarks>
		/// <returns>char with the directory/file separator.</returns>
		/// <since>ARP1.0</since>
		char GetSeparator();

		/// <summary>Returns the path as a string.</summary>
		/// <remarks>Returns the path as a string.</remarks>
		/// <param name="path">Reference.</param>
		/// <returns>String representation of the path.</returns>
		/// <since>ARP1.0</since>
		string GetPath(IFilePath path);

		/// <summary>Returns the path of the file as a string.</summary>
		/// <remarks>Returns the path of the file as a string.</remarks>
		/// <param name="file">Reference.</param>
		/// <returns>String representation of path to the file.</returns>
		/// <since>ARP1.0</since>
		string GetPath(IFile file);

		/// <summary>Compare 2 files to determine whether they're the same.</summary>
		/// <remarks>Compare 2 files to determine whether they're the same.</remarks>
		/// <param name="source">First file reference.</param>
		/// <param name="dest">Second file reference.</param>
		/// <returns>Returns true if both files are the same, false otherwise.</returns>
		/// <since>ARP1.0</since>
		bool IsSameFile(IFile source, IFile dest);

		/// <summary>Compares 2 paths to determine whether they're the same.</summary>
		/// <remarks>Compares 2 paths to determine whether they're the same.</remarks>
		/// <param name="source">First path reference.</param>
		/// <param name="dest">Second path reference.</param>
		/// <returns>Returns true if both paths are the same, false otherwise.</returns>
		/// <since>ARP1.0</since>
		bool IsSamePath(IFilePath source, IFilePath dest);

		/// <summary>Creates a file with the specified name.</summary>
		/// <remarks>Creates a file with the specified name.</remarks>
		/// <param name="name">Name of the file to create.</param>
		/// <param name="callback">Result of the operation.</param>
		/// <since>ARP1.0</since>
		void Create(string name, IFileResultCallback callback);

		/// <summary>Creates a file with the specified name in the specified path.</summary>
		/// <remarks>Creates a file with the specified name in the specified path.</remarks>
		/// <param name="path">String representation of the path.</param>
		/// <param name="name">Name of the file to create.</param>
		/// <param name="callback">Result of the operation.</param>
		/// <since>ARP1.0</since>
		void Create(string path, string name, IFileResultCallback callback);

		/// <summary>Creates a file with the specified name in the specified path.</summary>
		/// <remarks>Creates a file with the specified name in the specified path.</remarks>
		/// <param name="path">Path reference.</param>
		/// <param name="name">Name of the file to create.</param>
		/// <param name="callback">Result of the operation.</param>
		/// <since>ARP1.0</since>
		void Create(IFilePath path, string name, IFileResultCallback callback);

		/// <summary>Extract the path element of the given file.</summary>
		/// <remarks>Extract the path element of the given file.</remarks>
		/// <param name="path">File for which to extract the path.</param>
		/// <returns>Path element of the file.</returns>
		/// <since>ARP1.0</since>
		IFilePath ToPath(IFile path);

		/// <summary>Returns a reference to the application installation folder.</summary>
		/// <remarks>
		/// Returns a reference to the application installation folder.
		/// This path may or may not be directly readable or writable - it usually contains the app binary and data.
		/// Sub-directories are usually usable by the application.
		/// </remarks>
		/// <returns>Path to the application folder.</returns>
		/// <since>ARP1.0</since>
		IFilePath GetApplicationFolder();

		/// <summary>Returns a reference to the cache folder for the current application.</summary>
		/// <remarks>
		/// Returns a reference to the cache folder for the current application.
		/// This path must always be writable by the current application.
		/// </remarks>
		/// <returns>Path to the application's cache folder.</returns>
		/// <since>ARP1.0</since>
		IFilePath GetApplicationCacheFolder();

		/// <summary>Returns a reference to the documents folder for the current application.
		/// 	</summary>
		/// <remarks>
		/// Returns a reference to the documents folder for the current application.
		/// This path must always be writable by the current application.
		/// </remarks>
		/// <returns>Path to the application's documents folder.</returns>
		/// <since>ARP1.0</since>
		IFilePath GetApplicationDocumentsFolder();
	}
}
