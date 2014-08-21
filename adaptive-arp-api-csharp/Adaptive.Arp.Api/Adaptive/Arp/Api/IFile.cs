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
	public abstract class IFile : IFilePath
	{
		/// <summary>Check whether this is a path of a file.</summary>
		/// <remarks>Check whether this is a path of a file.</remarks>
		/// <returns>true if this is a path to a folder/directory, false if this is a path to a file.
		/// 	</returns>
		/// <since>ARP1.0</since>
		public abstract bool IsDirectory();

		/// <summary>Check whether the file/path exists.</summary>
		/// <remarks>Check whether the file/path exists.</remarks>
		/// <returns>True if the file exists in the filesystem, false otherwise.</returns>
		/// <since>ARP1.0</since>
		public abstract bool Exists();

		/// <summary>Deletes the given file of path.</summary>
		/// <remarks>
		/// Deletes the given file of path. If the file is a directory and contains files and or subdirectories, then delete
		/// will not delete the file from the filesystem.
		/// </remarks>
		/// <returns>True if the file was deleted, false otherwise.</returns>
		/// <since>ARP1.0</since>
		public abstract bool Delete();

		/// <summary>Deletes the given file or path.</summary>
		/// <remarks>
		/// Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
		/// deleted if the cascade parameter is set to true.
		/// </remarks>
		/// <param name="cascade">Whether to delete sub-files and sub-folders.</param>
		/// <returns>True if files (and sub-files and folders) whether deleted.</returns>
		/// <since>ARP1.0</since>
		public abstract bool Delete(bool cascade);

		/// <summary>Creates a file with the specified name.</summary>
		/// <remarks>Creates a file with the specified name.</remarks>
		/// <param name="name">Name of the file to create.</param>
		/// <param name="callback">Result of the operation.</param>
		/// <since>ARP1.0</since>
		public abstract void Create(string name, IFileResultCallback callback);

		/// <summary>Creates a file with the specified name in the specified path.</summary>
		/// <remarks>Creates a file with the specified name in the specified path.</remarks>
		/// <param name="path">String representation of the path.</param>
		/// <param name="name">Name of the file to create.</param>
		/// <param name="callback">Result of the operation.</param>
		/// <since>ARP1.0</since>
		public abstract void Create(string path, string name, IFileResultCallback callback
			);

		/// <summary>Creates the parent path to the given file/path if it doesn't already exist.
		/// 	</summary>
		/// <remarks>Creates the parent path to the given file/path if it doesn't already exist.
		/// 	</remarks>
		/// <returns>True if the path was created, false otherwise (or it exists already).</returns>
		/// <since>ARP1.0</since>
		public abstract bool MkDir();

		/// <summary>Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.
		/// 	</summary>
		/// <remarks>Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.
		/// 	</remarks>
		/// <param name="recursive">Whether to create all parent path elements.</param>
		/// <returns>True if the path was created, false otherwise (or it exists already).</returns>
		/// <since>ARP1.0</since>
		public abstract bool MkDir(bool recursive);

		/// <summary>List all the files contained within this file/path reference.</summary>
		/// <remarks>
		/// List all the files contained within this file/path reference. If the reference is a file, it will not yield
		/// any results.
		/// </remarks>
		/// <param name="callback">Result of operation.</param>
		/// <since>ARP1.0</since>
		public abstract void ListFiles(IFileListResultCallback callback);

		/// <summary>List all the files matching the speficied regex filter within this file/path reference.
		/// 	</summary>
		/// <remarks>
		/// List all the files matching the speficied regex filter within this file/path reference. If the reference
		/// is a file, it will not yield any results.
		/// </remarks>
		/// <param name="regex">Filter (eg. *.jpg, *.png, Fil*) name string.</param>
		/// <param name="callback">Result of operation.</param>
		/// <since>ARP1.0</since>
		public abstract void ListFiles(string regex, IFileListResultCallback callback);

		/// <summary>Returns the size in bytes of the file or zero if the reference is a folder.
		/// 	</summary>
		/// <remarks>Returns the size in bytes of the file or zero if the reference is a folder.
		/// 	</remarks>
		/// <returns>Size in bytes of file.</returns>
		/// <since>ARP1.0</since>
		public abstract long GetSize();

		/// <summary>Returns the name of the file if the reference is a file or the last path element of the folder.
		/// 	</summary>
		/// <remarks>Returns the name of the file if the reference is a file or the last path element of the folder.
		/// 	</remarks>
		/// <returns>The name of the file.</returns>
		/// <since>ARP1.0</since>
		public abstract string GetName();

		/// <summary>Returns the path element of the file or folder (excluding the last path element if it's a directory).
		/// 	</summary>
		/// <remarks>Returns the path element of the file or folder (excluding the last path element if it's a directory).
		/// 	</remarks>
		/// <returns>The path to the file.</returns>
		/// <since>ARP1.0</since>
		public abstract string GetPath();

		/// <summary>Returns the milliseconds passed since 1/1/1970 since the file was created.
		/// 	</summary>
		/// <remarks>Returns the milliseconds passed since 1/1/1970 since the file was created.
		/// 	</remarks>
		/// <returns>Timestamp in milliseconds.</returns>
		/// <since>ARP1.0</since>
		public abstract long GetDateCreated();

		/// <summary>Returns the milliseconds passed since 1/1/1970 since the file was modified.
		/// 	</summary>
		/// <remarks>Returns the milliseconds passed since 1/1/1970 since the file was modified.
		/// 	</remarks>
		/// <returns>Timestamp in milliseconds.</returns>
		/// <since>ARP1.0</since>
		public abstract long GetDateModified();

		/// <summary>Loads the content of the file.</summary>
		/// <remarks>Loads the content of the file.</remarks>
		/// <param name="callback">Result of the operation.</param>
		/// <since>ARP1.0</since>
		public abstract void GetContent(IFileDataResultCallback callback);

		/// <summary>Sets the content of the file.</summary>
		/// <remarks>Sets the content of the file.</remarks>
		/// <param name="content">Binary content to store in the file.</param>
		/// <param name="callback">Result of the operation.</param>
		/// <since>ARP1.0</since>
		public abstract void SetContent(byte[] content, IFileDataResultCallback callback);

		/// <summary>Determine whether the current file/folder can be written to.</summary>
		/// <remarks>Determine whether the current file/folder can be written to.</remarks>
		/// <returns>True if the folder/file is writable, false otherwise.</returns>
		/// <since>ARP1.0</since>
		public abstract bool CanWrite();

		/// <summary>Determine whether the current file/folder can be read from.</summary>
		/// <remarks>Determine whether the current file/folder can be read from.</remarks>
		/// <returns>True if the folder/file is readable, false otherwise.</returns>
		/// <since>ARP1.0</since>
		public abstract bool CanRead();

		/// <summary>Moves the current file to the given file destination.</summary>
		/// <remarks>Moves the current file to the given file destination.</remarks>
		/// <param name="newFile">Destination path/file for the move.</param>
		/// <param name="callback">Result of the operation.</param>
		/// <since>ARP1.0</since>
		public abstract void Move(IFile newFile, IFileResultCallback callback);

		/// <summary>Moves the current file to the given file destination, optionally overwriting the destination if it exists.
		/// 	</summary>
		/// <remarks>Moves the current file to the given file destination, optionally overwriting the destination if it exists.
		/// 	</remarks>
		/// <param name="newFile">Destination path/file for the move.</param>
		/// <param name="callback">Result of the operation.</param>
		/// <param name="overwrite">True to overwrite if the destination already exists, false otherwise.
		/// 	</param>
		/// <since>ARP1.0</since>
		public abstract void Move(IFile newFile, IFileResultCallback callback, bool overwrite
			);

		/// <summary>Moves the current file to the given file destination, optionally creating the path to the new destionation.
		/// 	</summary>
		/// <remarks>Moves the current file to the given file destination, optionally creating the path to the new destionation.
		/// 	</remarks>
		/// <param name="newFile">Destination path/file for the move.</param>
		/// <param name="createPath">True to create the path if it does not already exist.</param>
		/// <param name="callback">Result of the operation.</param>
		/// <since>ARP1.0</since>
		public abstract void Move(IFile newFile, bool createPath, IFileResultCallback callback
			);

		/// <summary>
		/// Moves the current file to the givven file destionation, optionally overwriting and creating the path to the
		/// new destionation file.
		/// </summary>
		/// <remarks>
		/// Moves the current file to the givven file destionation, optionally overwriting and creating the path to the
		/// new destionation file.
		/// </remarks>
		/// <param name="newFile">Destination path/file for the move.</param>
		/// <param name="createPath">True to create the path if it does not already exist.</param>
		/// <param name="callback">Result of the operation.</param>
		/// <param name="overwrite">True to create the path if it does not already exist.</param>
		/// <since>ARP1.0</since>
		public abstract void Move(IFile newFile, bool createPath, IFileResultCallback callback
			, bool overwrite);

		/// <summary>Extract the path element of the current file.</summary>
		/// <remarks>Extract the path element of the current file.</remarks>
		/// <returns>Path element of the file.</returns>
		/// <since>ARP1.0</since>
		public abstract IFilePath ToPath();

		/// <summary>Security attributes of file, if any.</summary>
		/// <remarks>Security attributes of file, if any.</remarks>
		/// <since>ARP1.0</since>
		public enum FileSecurity
		{
			Default,
			Encrypted
		}
	}
}
