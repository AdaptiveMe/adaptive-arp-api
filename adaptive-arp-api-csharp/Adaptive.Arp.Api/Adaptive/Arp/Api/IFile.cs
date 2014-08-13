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
	public abstract class IFile
	{
		public abstract bool IsDirectory();

		public abstract bool Exists();

		public abstract bool Delete();

		public abstract void Create(string name, IFileResultCallback callback);

		public abstract void Create(string path, string name, IFileResultCallback callback
			);

		public abstract bool MkDir();

		public abstract bool MkDir(bool recursive);

		public abstract void ListFiles(IFileListResultCallback callback);

		public abstract void ListFiles(string regex, IFileListResultCallback callback);

		public abstract long GetSize();

		public abstract string GetName();

		public abstract string GetPath();

		public abstract long GetDateCreated();

		public abstract long GetDateModified();

		public abstract void GetContent(IFileDataResultCallback callback);

		public abstract void SetContent(byte[] content, IFileDataResultCallback callback);

		public abstract bool CanWrite();

		public abstract bool CanRead();

		public abstract void Move(IFile newFile, IFileResultCallback callback);

		public abstract void Move(IFile newFile, IFileResultCallback callback, bool overwrite
			);

		public abstract void Move(IFile newFile, bool createPath, IFileResultCallback callback
			);

		public abstract void Move(IFile newFile, bool createPath, IFileResultCallback callback
			, bool overwrite);

		public enum StorageType
		{
			Internal,
			Remote,
			Isolated,
			External
		}

		public enum FileType
		{
			Directory,
			File
		}

		public enum FileSecurity
		{
			Default,
			Encrypted
		}
	}
}
