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
	/// <summary>Structure representing the binary attachment data.</summary>
	/// <remarks>Structure representing the binary attachment data.</remarks>
	public class AttachmentData
	{
		/// <summary>The raw data for the current file attachment (byte array)</summary>
		/// <since>ARP1.0</since>
		private byte[] data;

		/// <summary>The data size (in bytes) of the current file attachment</summary>
		/// <since>ARP1.0</since>
		private long dataSize;

		/// <summary>The name of the current file attachment</summary>
		/// <since>ARP1.0</since>
		private string fileName;

		/// <summary>The mime type of the current attachment</summary>
		/// <since>ARP1.0</since>
		private string mimeType;

		/// <summary>The relative path where the contents for the attachment file could be located.
		/// 	</summary>
		/// <remarks>The relative path where the contents for the attachment file could be located.
		/// 	</remarks>
		/// <since>ARP1.0</since>
		private string referenceUrl;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="data">raw data of the file attachment</param>
		/// <param name="dataSize">size of the file attachment</param>
		/// <param name="fileName">name of the file attachment</param>
		/// <param name="mimeType">mime type of the file attachment</param>
		/// <param name="referenceUrl">relative url of the file attachment</param>
		/// <since>ARP1.0</since>
		public AttachmentData(byte[] data, long dataSize, string fileName, string mimeType
			, string referenceUrl)
		{
			this.data = data;
			this.dataSize = dataSize;
			this.fileName = fileName;
			this.mimeType = mimeType;
			this.referenceUrl = referenceUrl;
		}

		/// <summary>Returns the raw data in byte[]</summary>
		/// <returns>data Octet-binary content of the attachment payload.</returns>
		/// <since>ARP1.0</since>
		public virtual byte[] GetData()
		{
			return data;
		}

		/// <summary>Set the data of the attachment as a byte[]</summary>
		/// <param name="data">Sets the octet-binary content of the attachment.</param>
		/// <since>ARP1.0</since>
		public virtual void SetData(byte[] data)
		{
			this.data = data;
		}

		/// <summary>Returns the size of the attachment as a long</summary>
		/// <returns>dataSize Length in bytes of the octet-binary content.</returns>
		/// <since>ARP1.0</since>
		public virtual long GetDataSize()
		{
			return dataSize;
		}

		/// <summary>Set the size of the attachment as a long</summary>
		/// <param name="dataSize">Length in bytes of the octet-binary content ( should be same as data array length.)
		/// 	</param>
		/// <since>ARP1.0</since>
		public virtual void SetDataSize(long dataSize)
		{
			this.dataSize = dataSize;
		}

		/// <summary>Returns the filename of the attachment</summary>
		/// <returns>fileName Name of the attachment.</returns>
		/// <since>ARP1.0</since>
		public virtual string GetFileName()
		{
			return fileName;
		}

		/// <summary>Set the name of the file attachment</summary>
		/// <param name="fileName">Name of the attachment.</param>
		/// <since>ARP1.0</since>
		public virtual void SetFileName(string fileName)
		{
			this.fileName = fileName;
		}

		/// <summary>Returns the mime type of the attachment</summary>
		/// <returns>mimeType</returns>
		/// <since>ARP1.0</since>
		public virtual string GetMimeType()
		{
			return mimeType;
		}

		/// <summary>Set the mime type of the attachment</summary>
		/// <param name="mimeType">Mime-type of the attachment.</param>
		/// <since>ARP1.0</since>
		public virtual void SetMimeType(string mimeType)
		{
			this.mimeType = mimeType;
		}

		/// <summary>Returns the absolute url of the file attachment</summary>
		/// <returns>referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
		/// 	</returns>
		/// <since>ARP1.0</since>
		public virtual string GetReferenceUrl()
		{
			return referenceUrl;
		}

		/// <summary>Set the absolute url of the attachment</summary>
		/// <param name="referenceUrl">Absolute URL of the file attachment for either file:// or http:// access.
		/// 	</param>
		/// <since>ARP1.0</since>
		public virtual void SetReferenceUrl(string referenceUrl)
		{
			this.referenceUrl = referenceUrl;
		}
	}
}
