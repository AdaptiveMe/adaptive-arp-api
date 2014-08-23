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
	/// <summary>Represents a local or remote service response.</summary>
	/// <remarks>Represents a local or remote service response.</remarks>
	public class ServiceResponse
	{
		/// <summary>Request/Response data content (plain text).</summary>
		/// <remarks>Request/Response data content (plain text).</remarks>
		/// <since>ARP1.0</since>
		private string content;

		/// <summary>The request/response content type (MIME TYPE).</summary>
		/// <remarks>The request/response content type (MIME TYPE).</remarks>
		/// <since>ARP1.0</since>
		private string contentType;

		/// <summary>The length in bytes for the Content field.</summary>
		/// <remarks>The length in bytes for the Content field.</remarks>
		/// <since>ARP1.0</since>
		private string contentLength;

		/// <summary>The byte[] representing the binary Content.</summary>
		/// <remarks>The byte[] representing the binary Content.</remarks>
		/// <since>ARP1.0</since>
		private byte[] contentBinary;

		/// <summary>The length in bytes for the binary Content.</summary>
		/// <remarks>The length in bytes for the binary Content.</remarks>
		/// <since>ARP1.0</since>
		private int contentBinaryLength;

		/// <summary>The headers array (name,value pairs) to be included on the I/O service request.
		/// 	</summary>
		/// <remarks>The headers array (name,value pairs) to be included on the I/O service request.
		/// 	</remarks>
		/// <since>ARP1.0</since>
		private Header[] headers;

		/// <summary>The session context for the Request/Response.</summary>
		/// <remarks>The session context for the Request/Response.</remarks>
		/// <since>ARP1.0</since>
		private ISession session;

		/// <summary>Encoding of the binary payload - by default assumed to be UTF8.</summary>
		/// <remarks>Encoding of the binary payload - by default assumed to be UTF8.</remarks>
		private string contentEncoding;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="content"></param>
		/// <param name="contentType"></param>
		/// <param name="contentLength"></param>
		/// <param name="contentBinary"></param>
		/// <param name="contentBinaryLength"></param>
		/// <param name="headers"></param>
		/// <param name="session"></param>
		/// <since>ARP1.0</since>
		public ServiceResponse(string content, string contentType, string contentLength, 
			byte[] contentBinary, int contentBinaryLength, Header[] headers, ISession session
			)
		{
			this.content = content;
			this.contentType = contentType;
			this.contentLength = contentLength;
			this.contentBinary = contentBinary;
			this.contentBinaryLength = contentBinaryLength;
			this.headers = headers;
			this.session = session;
		}

		/// <summary>Returns the content</summary>
		/// <returns>content</returns>
		/// <since>ARP1.0</since>
		public virtual string GetContent()
		{
			return content;
		}

		/// <summary>Set the content</summary>
		/// <param name="content"></param>
		/// <since>ARP1.0</since>
		public virtual void SetContent(string content)
		{
			this.content = content;
		}

		/// <summary>Returns the content type</summary>
		/// <returns>contentType</returns>
		/// <since>ARP1.0</since>
		public virtual string GetContentType()
		{
			return contentType;
		}

		/// <summary>Set the content type</summary>
		/// <param name="contentType"></param>
		/// <since>ARP1.0</since>
		public virtual void SetContentType(string contentType)
		{
			this.contentType = contentType;
		}

		/// <summary>Returns the content length</summary>
		/// <returns>contentLength</returns>
		/// <since>ARP1.0</since>
		public virtual string GetContentLength()
		{
			return contentLength;
		}

		/// <summary>Set the content length</summary>
		/// <param name="contentLength"></param>
		/// <since>ARP1.0</since>
		public virtual void SetContentLength(string contentLength)
		{
			this.contentLength = contentLength;
		}

		/// <summary>Returns the binary content</summary>
		/// <returns>contentBinary</returns>
		/// <since>ARP1.0</since>
		public virtual byte[] GetContentBinary()
		{
			return contentBinary;
		}

		/// <summary>Set the binary content</summary>
		/// <param name="contentBinary"></param>
		/// <since>ARP1.0</since>
		public virtual void SetContentBinary(byte[] contentBinary)
		{
			this.contentBinary = contentBinary;
		}

		/// <summary>Retrusn the binary content length</summary>
		/// <returns>contentBinaryLength</returns>
		/// <since>ARP1.0</since>
		public virtual int GetContentBinaryLength()
		{
			return contentBinaryLength;
		}

		/// <summary>Set the binary content length</summary>
		/// <param name="contentBinaryLength"></param>
		/// <since>ARP1.0</since>
		public virtual void SetContentBinaryLength(int contentBinaryLength)
		{
			this.contentBinaryLength = contentBinaryLength;
		}

		/// <summary>Returns the array of Header</summary>
		/// <returns>headers</returns>
		/// <since>ARP1.0</since>
		public virtual Header[] GetHeaders()
		{
			return headers;
		}

		/// <summary>Set the array of Header</summary>
		/// <param name="headers"></param>
		/// <since>ARP1.0</since>
		public virtual void SetHeaders(Header[] headers)
		{
			this.headers = headers;
		}

		/// <summary>Returns the method</summary>
		/// <returns>method</returns>
		/// <since>ARP1.0</since>
		public virtual ISession GetSession()
		{
			return session;
		}

		/// <summary>Set the method</summary>
		/// <param name="session"></param>
		/// <since>ARP1.0</since>
		public virtual void SetSession(ISession session)
		{
			this.session = session;
		}

		/// <summary>Returns the content encoding</summary>
		/// <returns>contentEncoding</returns>
		/// <since>ARP1.0</since>
		public virtual string GetContentEncoding()
		{
			return contentEncoding;
		}

		/// <summary>Set the content encoding</summary>
		/// <param name="contentEncoding"></param>
		/// <since>ARP1.0</since>
		public virtual void SetContentEncoding(string contentEncoding)
		{
			this.contentEncoding = contentEncoding;
		}
	}
}
